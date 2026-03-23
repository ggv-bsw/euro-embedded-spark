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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("jobApplication");
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
        title: t("validation.invalidFileTitle"),
        description: t("validation.invalidFileType"),
        variant: "destructive",
      });
      e.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast({
        title: t("validation.fileTooLargeTitle"),
        description: t("validation.fileTooLarge"),
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
        resolve(result.split(",")[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast({ title: t("validation.error"), description: t("validation.requiredFields"), variant: "destructive" });
      return;
    }

    if (formData.name.length > 100) {
      toast({ title: t("validation.error"), description: t("validation.nameTooLong"), variant: "destructive" });
      return;
    }

    if (formData.email.length > 255) {
      toast({ title: t("validation.error"), description: t("validation.emailTooLong"), variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({ title: t("validation.error"), description: t("validation.invalidEmail"), variant: "destructive" });
      return;
    }

    if (formData.message.length > 2000) {
      toast({ title: t("validation.error"), description: t("validation.coverLetterTooLong"), variant: "destructive" });
      return;
    }

    if (!cvFile) {
      toast({ title: t("validation.error"), description: t("validation.attachCv"), variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      if (!supabase) throw new Error("Service temporarily unavailable");
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
        title: t("success.title"),
        description: t("success.description"),
      });

      resetForm();
      onOpenChange(false);
    } catch (error: any) {
      console.error("Error submitting application:", error);
      toast({
        title: t("validation.error"),
        description: error.message || t("error.default"),
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
          <DialogTitle>{t("applyFor", { jobTitle })}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="app-name" className="block text-sm font-medium mb-2">
              {t("name")}
            </label>
            <Input
              id="app-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t("namePlaceholder")}
              className="bg-background"
            />
          </div>

          <div>
            <label htmlFor="app-email" className="block text-sm font-medium mb-2">
              {t("email")}
            </label>
            <Input
              id="app-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t("emailPlaceholder")}
              className="bg-background"
            />
          </div>

          <div>
            <label htmlFor="app-phone" className="block text-sm font-medium mb-2">
              {t("phone")}
            </label>
            <Input
              id="app-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("phonePlaceholder")}
              className="bg-background"
            />
          </div>

          <div>
            <label
              htmlFor="app-message"
              className="block text-sm font-medium mb-2"
            >
              {t("coverLetter")}
            </label>
            <Textarea
              id="app-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("coverLetterPlaceholder")}
              rows={4}
              className="bg-background resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">{t("cvLabel")}</label>
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
                  <span className="sr-only">{t("removeFile")}</span>
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
              {t("cvHint")}
            </p>
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? t("submitting") : t("submit")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
