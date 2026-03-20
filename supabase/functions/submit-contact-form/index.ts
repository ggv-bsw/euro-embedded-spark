import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// HTML escaping function to prevent XSS attacks
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Extract client IP from request
function getClientIp(req: Request): string {
  const xRealIp = req.headers.get('x-real-ip');
  if (xRealIp) return xRealIp;
  const xff = req.headers.get('x-forwarded-for');
  return xff?.split(',').pop()?.trim() ?? 'unknown';
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get client IP for rate limiting
    const clientIp = getClientIp(req);

    // Check rate limit (5 submissions per hour)
    const oneHourAgo = new Date(Date.now() - 3600000).toISOString();
    
    const { data: rateLimitData, error: rateLimitError } = await supabase
      .from('rate_limit_tracking')
      .select('submission_count')
      .eq('ip_address', clientIp)
      .eq('endpoint', 'contact_form')
      .gte('created_at', oneHourAgo)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (rateLimitError) {
      console.error('Rate limit check error:', rateLimitError);
      // Continue processing even if rate limit check fails
    }

    // Enforce rate limit
    if (rateLimitData && rateLimitData.submission_count >= 5) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Parse and validate input
    const { name, email, company, message }: ContactFormData = await req.json();

    // Input validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate lengths
    if (name.length > 100 || email.length > 255 || message.length > 1000) {
      return new Response(
        JSON.stringify({ error: "Input exceeds maximum length" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Update rate limit tracking
    if (rateLimitData) {
      await supabase
        .from('rate_limit_tracking')
        .update({ 
          submission_count: rateLimitData.submission_count + 1,
          updated_at: new Date().toISOString()
        })
        .eq('ip_address', clientIp)
        .eq('endpoint', 'contact_form')
        .gte('created_at', oneHourAgo);
    } else {
      await supabase
        .from('rate_limit_tracking')
        .insert({
          ip_address: clientIp,
          endpoint: 'contact_form',
          submission_count: 1
        });
    }

    // Save to database
    const { data: dbData, error: dbError } = await supabase
      .from("contact_messages")
      .insert({
        name: name.trim(),
        email: email.trim(),
        company: company?.trim() || null,
        message: message.trim(),
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", {
        code: dbError.code,
        message: dbError.message,
        timestamp: new Date().toISOString()
      });
      return new Response(
        JSON.stringify({ error: "We encountered an issue processing your request. Please try again later." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Message saved to database - ID:", dbData.id);

    // Send email notification to hr@bsw-tech.com with escaped HTML
    const emailResponse = await resend.emails.send({
      from: "BSW Tech Contact Form <onboarding@resend.dev>",
      to: ["hr@bsw-tech.com"],
      replyTo: email,
      subject: `New Contact Form Submission from ${escapeHtml(name)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Submitted at: ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("Email sent successfully");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Your message has been sent successfully!" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    // Log detailed error server-side only (don't expose to client)
    console.error("Error in submit-contact-form function:", {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    
    return new Response(
      JSON.stringify({ 
        error: "We encountered an issue processing your request. Please try again or contact us directly at hr@bsw-tech.com" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
