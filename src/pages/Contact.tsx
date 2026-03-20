import { useState } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Youtube,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t, i18n } = useTranslation("contact");
  const lang = i18n.language;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const seo = t("seo", { returnObjects: true }) as { title: string; description: string; keywords: string };
  const hero = t("hero", { returnObjects: true }) as Record<string, string>;
  const info = t("info", { returnObjects: true }) as Record<string, string>;
  const form = t("form", { returnObjects: true }) as Record<string, string>;
  const validation = t("validation", { returnObjects: true }) as Record<string, string>;

  const SITE = "https://bsw-tech.com";
  const prefix = lang === "de" ? "/de" : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: validation.error, description: validation.requiredFields, variant: "destructive" });
      return;
    }
    if (formData.name.length > 100) {
      toast({ title: validation.error, description: validation.nameTooLong, variant: "destructive" });
      return;
    }
    if (formData.email.length > 255) {
      toast({ title: validation.error, description: validation.emailTooLong, variant: "destructive" });
      return;
    }
    if (formData.message.length > 1000) {
      toast({ title: validation.error, description: validation.messageTooLong, variant: "destructive" });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({ title: validation.error, description: validation.invalidEmail, variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-contact-form", { body: formData });
      if (error) throw error;
      toast({ title: t("success.title"), description: t("success.description") });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: validation.error,
        description: error.message || t("error.default"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SEO title={seo.title} description={seo.description} keywords={seo.keywords} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: seo.title,
            url: `${SITE}${prefix}/contact`,
            description: seo.description,
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}${prefix}/` },
                { "@type": "ListItem", position: 2, name: hero.title, item: `${SITE}${prefix}/contact` },
              ],
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "BSW TECH",
            url: `${SITE}/`,
            logo: `${SITE}/og-image.png`,
            address: { "@type": "PostalAddress", addressLocality: "Chi\u0219in\u0103u", addressCountry: "MD" },
            contactPoint: [{
              "@type": "ContactPoint",
              contactType: "Sales",
              email: "hr@bsw-tech.com",
              areaServed: "EU",
              availableLanguage: ["en", "de"],
            }],
            sameAs: [
              "https://linkedin.com/company/bsw-tech",
              "https://github.com/bsw-tech",
              "https://www.youtube.com/@BSWTech-h8q",
              "https://www.instagram.com/bswtech/",
            ],
          }),
        }}
      />

      <div className="min-h-screen">
        <Navigation />
        <main>

        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-container mx-auto px-6 lg:px-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{hero.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">{hero.subtitle}</p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://calendly.com/gheorghe-ghirjev-bsw-tech/30min" target="_blank" rel="noopener noreferrer">
                {hero.bookCall}
                <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">{info.title}</h2>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.headquarters}</h3>
                      <p className="text-muted-foreground">
                        {info.headquartersAddress}<br />{info.headquartersPresence}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.email}</h3>
                      <a href="mailto:hr@bsw-tech.com" className="text-primary hover:underline">hr@bsw-tech.com</a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">{info.followUs}</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, url: "https://linkedin.com/company/bsw-tech", label: "LinkedIn" },
                      { icon: Github, url: "https://github.com/bsw-tech", label: "GitHub" },
                      { icon: Youtube, url: "https://www.youtube.com/@BSWTech-h8q", label: "YouTube" },
                      { icon: Instagram, url: "https://www.instagram.com/bswtech/", label: "Instagram" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-card border border-line rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all"
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6 text-primary" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-12 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
                  <h3 className="text-xl font-bold mb-3">{info.preferCall}</h3>
                  <p className="text-muted-foreground mb-4">{info.preferCallDescription}</p>
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href="https://calendly.com/gheorghe-ghirjev-bsw-tech/30min" target="_blank" rel="noopener noreferrer">
                      {info.scheduleCalendly}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-card p-8 rounded-2xl border border-line">
                  <h2 className="text-2xl font-bold mb-6">{form.title}</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">{form.name}</label>
                      <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder={form.namePlaceholder} className="bg-background" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">{form.email}</label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder={form.emailPlaceholder} className="bg-background" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">{form.company}</label>
                      <Input id="company" name="company" type="text" value={formData.company} onChange={handleChange} placeholder={form.companyPlaceholder} className="bg-background" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">{form.message}</label>
                      <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder={form.messagePlaceholder} rows={6} className="bg-background resize-none" />
                    </div>
                    <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? form.submitting : form.submit}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
