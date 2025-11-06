import { useState } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Youtube,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
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

    if (formData.message.length > 1000) {
      toast({
        title: "Error",
        description: "Message must be less than 1000 characters.",
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

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke(
        "submit-contact-form",
        {
          body: formData,
        }
      );

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description:
          error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SEO
        title="Contact BSW TECH | Automotive, IoT & Embedded Engineering"
        description="Contact BSW TECH to discuss embedded C/C++, AUTOSAR, and IoT projects. Headquarters in Chișinău, Moldova with EU presence (Romania, Estonia). Book a call or send us a message."
        keywords="contact BSW TECH, embedded engineering contact, AUTOSAR partner, IoT development contact"
      />

      {/* JSON-LD: ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact BSW TECH",
            url: "https://bsw-tech.com/contact",
            description:
              "Contact page for BSW TECH — embedded, AUTOSAR, and IoT engineering partner in Europe.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://bsw-tech.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Contact",
                  item: "https://bsw-tech.com/contact",
                },
              ],
            },
          }),
        }}
      />

      {/* JSON-LD: Organization + ContactPoint */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "BSW TECH",
            url: "https://bsw-tech.com/",
            logo: "https://bsw-tech.com/og-image.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chișinău",
              addressCountry: "MD",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "Sales",
                email: "hr@bsw-tech.com",
                areaServed: "EU",
                availableLanguage: ["en"],
              },
            ],
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

        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-container mx-auto px-6 lg:px-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Build{" "}
              <span className="text-gradient">Something Together</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're ready to discuss your next Automotive, IoT or Embedded
              project. Send us a message or book a meeting directly via
              Calendly.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Headquarters</h3>
                      <p className="text-muted-foreground">
                        Chișinău, Moldova
                        <br />
                        EU Presence: Romania, Estonia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:hr@bsw-tech.com"
                        className="text-primary hover:underline"
                      >
                        hr@bsw-tech.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/company/bsw-tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-line rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6 text-primary" />
                    </a>
                    <a
                      href="https://github.com/bsw-tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-line rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all"
                      aria-label="GitHub"
                    >
                      <Github className="w-6 h-6 text-primary" />
                    </a>
                    <a
                      href="https://www.youtube.com/@BSWTech-h8q"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-line rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-6 h-6 text-primary" />
                    </a>
                    <a
                      href="https://www.instagram.com/bswtech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card border border-line rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-primary" />
                    </a>
                  </div>
                </div>

                {/* Calendly CTA */}
                <div className="mt-12 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
                  <h3 className="text-xl font-bold mb-3">Book a Call</h3>
                  <p className="text-muted-foreground mb-4">
                    Schedule a meeting directly with our team to discuss your
                    project requirements.
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a
                      href="https://calendly.com/gheorghe-ghirjev-bsw-tech/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule via Calendly
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-card p-8 rounded-2xl border border-line">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2"
                      >
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="bg-background"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={6}
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
