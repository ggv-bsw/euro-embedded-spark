import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LocalizedLink from "@/components/LocalizedLink";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navKeys = [
  { key: "home", path: "/" },
  { key: "expertise", path: "/expertise" },
  { key: "successStories", path: "/success-stories" },
  { key: "about", path: "/about" },
  { key: "careers", path: "/careers" },
  { key: "contact", path: "/contact" },
];

export default function Navigation() {
  const { t } = useTranslation("common");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Strip /de prefix for active-link comparison
  const bare = location.pathname.replace(/^\/de(\/|$)/, "/");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-container mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <LocalizedLink to="/" className="text-2xl font-heading font-bold text-primary">
            BSW
          </LocalizedLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navKeys.map((link) => (
              <LocalizedLink
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  bare === link.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {t(`nav.${link.key}`)}
              </LocalizedLink>
            ))}
            <LanguageSwitcher />
            <LocalizedLink to="/contact">
              <Button variant="hero" size="sm">
                {t("nav.getStarted")}
              </Button>
            </LocalizedLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-line">
          <div className="px-6 py-4 space-y-3">
            {navKeys.map((link) => (
              <LocalizedLink
                key={link.path}
                to={link.path}
                className={`block py-2 text-base font-medium transition-colors hover:text-primary ${
                  bare === link.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {t(`nav.${link.key}`)}
              </LocalizedLink>
            ))}
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            <LocalizedLink to="/contact" className="block pt-2">
              <Button variant="hero" size="sm" className="w-full">
                {t("nav.getStarted")}
              </Button>
            </LocalizedLink>
          </div>
        </div>
      )}
    </nav>
  );
}
