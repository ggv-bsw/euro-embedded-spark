import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const ALLOWED_ORIGINS = [
  "https://www.bsw-tech.com",
  "https://bsw-tech.com",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin") ?? "";
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
  };
}

interface JobApplicationData {
  jobTitle: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  cv: {
    filename: string;
    contentType: string;
    data: string; // base64
  };
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function getClientIp(req: Request): string {
  const xRealIp = req.headers.get("x-real-ip");
  if (xRealIp) return xRealIp;
  const xff = req.headers.get("x-forwarded-for");
  return xff?.split(",").pop()?.trim() ?? "unknown";
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: getCorsHeaders(req) });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Atomic rate limit check-and-increment (prevents TOCTOU race condition)
    const clientIp = getClientIp(req);
    const { data: allowed, error: rateLimitError } = await supabase.rpc(
      "check_rate_limit",
      { p_ip: clientIp, p_endpoint: "job_application", p_max: 5, p_window_ms: 3600000 }
    );

    if (rateLimitError) {
      console.error("Rate limit check error:", rateLimitError);
    }

    if (allowed === false) {
      return new Response(
        JSON.stringify({
          error: "Too many requests. Please try again later.",
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...getCorsHeaders(req) },
        }
      );
    }

    // Parse and validate
    const {
      jobTitle,
      name,
      email,
      phone,
      message,
      cv,
    }: JobApplicationData = await req.json();

    if (!jobTitle || !name || !email || !cv?.data || !cv?.filename) {
      return new Response(
        JSON.stringify({
          error: "Job title, name, email, and CV are required.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...getCorsHeaders(req) },
        }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...getCorsHeaders(req) },
        }
      );
    }

    if (name.length > 100 || email.length > 255 || jobTitle.length > 200) {
      return new Response(
        JSON.stringify({ error: "Input exceeds maximum length." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...getCorsHeaders(req) },
        }
      );
    }

    if ((phone ?? "").length > 20) {
      return new Response(
        JSON.stringify({ error: "Phone number exceeds maximum length." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...getCorsHeaders(req) },
        }
      );
    }

    if ((message ?? "").length > 2000) {
      return new Response(
        JSON.stringify({ error: "Cover letter exceeds 2000 character limit." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...getCorsHeaders(req) },
        }
      );
    }

    const ALLOWED_CONTENT_TYPES = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!ALLOWED_CONTENT_TYPES.includes(cv.contentType)) {
      return new Response(
        JSON.stringify({ error: "Invalid file type. Only PDF, DOC, and DOCX are accepted." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...getCorsHeaders(req) },
        }
      );
    }

    // Decode CV from base64
    const cvBytes = Uint8Array.from(atob(cv.data), (c) => c.charCodeAt(0));

    // 5 MB limit
    if (cvBytes.length > 5 * 1024 * 1024) {
      return new Response(
        JSON.stringify({ error: "CV file exceeds 5 MB limit." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...getCorsHeaders(req) },
        }
      );
    }

    // Upload CV to Supabase Storage
    const timestamp = Date.now();
    const safeName = cv.filename.replace(/[^a-zA-Z0-9._-]/g, "_");
    const storagePath = `applications/${timestamp}_${safeName}`;

    const { error: uploadError } = await supabase.storage
      .from("job-applications")
      .upload(storagePath, cvBytes, {
        contentType: cv.contentType,
        upsert: false,
      });

    if (uploadError) {
      console.error("Storage upload error:", uploadError);
      return new Response(
        JSON.stringify({
          error:
            "Failed to upload CV. Please try again or contact us at hr@bsw-tech.com",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...getCorsHeaders(req) },
        }
      );
    }

    // Save to database
    const { data: dbData, error: dbError } = await supabase
      .from("job_applications")
      .insert({
        job_title: jobTitle.trim(),
        name: name.trim(),
        email: email.trim(),
        phone: phone?.trim() || null,
        message: message?.trim() || null,
        cv_filename: cv.filename,
        cv_storage_path: storagePath,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", {
        code: dbError.code,
        message: dbError.message,
        timestamp: new Date().toISOString(),
      });
      return new Response(
        JSON.stringify({
          error:
            "We encountered an issue processing your application. Please try again later.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...getCorsHeaders(req) },
        }
      );
    }

    console.log("Application saved to database - ID:", dbData.id);

    // Send email notification with CV attachment
    const emailResponse = await resend.emails.send({
      from: "BSW Tech Careers <onboarding@resend.dev>",
      to: ["hr@bsw-tech.com"],
      replyTo: email,
      subject: `New Job Application: ${escapeHtml(jobTitle)} — ${escapeHtml(name)}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${escapeHtml(jobTitle)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
        ${
          message
            ? `<p><strong>Cover Letter:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`
            : ""
        }
        <p><strong>CV:</strong> ${escapeHtml(cv.filename)} (stored in Supabase Storage)</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Submitted at: ${new Date().toLocaleString()}</p>
      `,
      attachments: [
        {
          filename: cv.filename,
          content: cv.data, // base64
        },
      ],
    });

    console.log("Notification email sent successfully");

    return new Response(
      JSON.stringify({
        success: true,
        message: "Your application has been submitted successfully!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...getCorsHeaders(req) },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-job-application function:", {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({
        error:
          "We encountered an issue processing your application. Please try again or contact us at hr@bsw-tech.com",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...getCorsHeaders(req) },
      }
    );
  }
};

serve(handler);
