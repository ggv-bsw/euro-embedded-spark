import { Linkedin, Github, Youtube, Mail, MapPin, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import LocalizedLink from "@/components/LocalizedLink";
import bswLogo from "@/assets/bsw-logo.png";

const socialLinks = [
  { icon: Linkedin, url: "https://linkedin.com/company/bsw-tech", label: "LinkedIn" },
  { icon: Github, url: "https://github.com/bsw-tech", label: "GitHub" },
  { icon: Youtube, url: "https://www.youtube.com/@BSWTech-h8q", label: "YouTube" },
  { icon: Instagram, url: "https://www.instagram.com/bswtech/", label: "Instagram" },
];

export default function Footer() {
  const { t } = useTranslation("common");

  const footerLinks = {
    company: [
      { name: t("footer.aboutUs"), path: "/about" },
      { name: t("footer.successStories"), path: "/success-stories" },
      { name: t("footer.careers"), path: "/careers" },
      { name: t("footer.contact"), path: "/contact" },
    ],
    services: [
      { name: t("footer.embeddedSystems"), path: "/expertise#embedded" },
      { name: t("footer.automotiveEngineering"), path: "/expertise#automotive" },
      { name: t("footer.iotSolutions"), path: "/expertise#iot" },
      { name: t("footer.productDesign"), path: "/expertise#product-design" },
      { name: t("footer.mobileDevelopment"), path: "/expertise#mobile" },
    ],
    resources: [
      { name: t("footer.blog"), path: "/blog" },
      { name: t("footer.playground"), path: "/playground" },
    ],
  };

  return (
    <footer className="bg-card border-t border-line">
      <div className="max-w-container mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <LocalizedLink to="/" className="inline-flex items-center gap-3 mb-4">
              <img src={bswLogo} alt="BSW TECH" width={141} height={65} className="h-16 w-auto" loading="lazy" />
              <span className="text-2xl font-heading font-bold text-primary">BSW</span>
            </LocalizedLink>
            <p className="text-muted-foreground mb-6 max-w-sm">
              {t("footer.tagline")}
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>{t("footer.address")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:hr@bsw-tech.com" className="hover:text-primary transition-colors">
                  hr@bsw-tech.com
                </a>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.company")}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <LocalizedLink to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.services")}</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <LocalizedLink to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("footer.resources")}</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <LocalizedLink to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
