import { Link } from "react-router-dom";
import { Linkedin, Github, Youtube, Mail, MapPin, Phone } from "lucide-react";
import bswLogo from "@/assets/bsw-logo.png";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Embedded Systems", path: "/expertise#embedded" },
    { name: "Automotive Engineering", path: "/expertise#automotive" },
    { name: "IoT Solutions", path: "/expertise#iot" },
    { name: "Product Design", path: "/expertise#product-design" },
    { name: "Mobile Development", path: "/expertise#mobile" },
  ],
  resources: [
    { name: "Blog", path: "/blog" },
    { name: "Playground", path: "/playground" },
  ],
};

const socialLinks = [
  { icon: Linkedin, url: "https://linkedin.com/company/bsw-tech", label: "LinkedIn" },
  { icon: Github, url: "https://github.com/bsw-tech", label: "GitHub" },
  { icon: Youtube, url: "https://youtube.com/@bsw-tech", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-line">
      <div className="max-w-container mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={bswLogo} alt="BSW TECH" className="h-16 w-auto" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Cost-efficient near-shore engineering for Automotive, IoT & Embedded Systems. 
              Bridging Eastern European talent with Western European precision.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Chișinău, Moldova | EU Presence in Romania, Estonia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:contact@bsw-tech.com" className="hover:text-primary transition-colors">
                  contact@bsw-tech.com
                </a>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BSW TECH SRL. All rights reserved. ISO 9001 · 14001 · 27001 · 37001 Certified
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
