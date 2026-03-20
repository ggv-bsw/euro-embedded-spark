import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

interface JobApplicationFormProps {
  jobTitle: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function JobApplicationForm({
  jobTitle,
  open,
  onOpenChange,
}: JobApplicationFormProps) {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setCvFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF, DOC, or DOCX file.",
        variant: "destructive",
      });
      e.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast({
        title: "File too large",
        description: "CV must be less than 5 MB.",
        variant: "destructive",
      });
      e.target.value = "";
      return;
    }

    setCvFile(file);
  };

  const removeFile = () => {
    setCvFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1]); // strip data-url prefix
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Required fields
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (formData.name.length > 100) {
      toast({
        title: "Error",
        description: "Name must be less than 100 characters.",
        variant: "destructive",
      });
      return;
    }

    if (formData.email.length > 255) {
      toast({
        title: "Error",
        description: "Email must be less than 255 characters.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (formData.message.length > 2000) {
      toast({
        title: "Error",
        description: "Cover letter must be less than 2000 characters.",
        variant: "destructive",
      });
      return;
    }

    if (!cvFile) {
      toast({
        title: "Error",
        description: "Please attach your CV.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const cvBase64 = await fileToBase64(cvFile);

      const { error } = await supabase.functions.invoke(
        "submit-job-application",
        {
          body: {
            jobTitle,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            cv: {
              filename: cvFile.name,
              contentType: cvFile.type,
              data: cvBase64,
            },
          },
        },
      );

      if (error) throw error;

      toast({
        title: "Application Sent!",
        description:
          "Thank you for applying. We'll review your application and get back to you soon.",
      });

      resetForm();
      onOpenChange(false);
    } catch (error: any) {
      console.error("Error submitting application:", error);
      toast({
        title: "Error",
        description:
          error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
          <DialogDescription>
            Fill out the form below and attach your CV to apply.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="app-name" className="block text-sm font-medium mb-2">
              Name *
            </label>
            <Input
              id="app-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="bg-background"
            />
          </div>

          <div>
            <label htmlFor="app-email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <Input
              id="app-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="bg-background"
            />
          </div>

          <div>
            <label htmlFor="app-phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <Input
              id="app-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+373 ..."
              className="bg-background"
            />
          </div>

          <div>
            <label
              htmlFor="app-message"
              className="block text-sm font-medium mb-2"
            >
              Cover Letter / Message
            </label>
            <Textarea
              id="app-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us why you're a great fit..."
              rows={4}
              className="bg-background resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">CV / Resume *</label>
            {cvFile ? (
              <div className="flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <Upload className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="truncate flex-1">{cvFile.name}</span>
                <button
                  type="button"
                  onClick={removeFile}
                  className="rounded-sm opacity-70 hover:opacity-100"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove file</span>
                </button>
              </div>
            ) : (
              <Input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="bg-background"
              />
            )}
            <p className="text-xs text-muted-foreground mt-1">
              PDF, DOC, or DOCX (max 5 MB)
            </p>
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
