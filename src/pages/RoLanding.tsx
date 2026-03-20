import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const SITE = "https://www.bsw-tech.com";

export default function RoLanding() {
  return (
    <>
      <SEO
        title="Dezvoltare Software Automotive AUTOSAR | Nearshore pentru OEM Europeni | BSW TECH"
        description="BSW TECH dezvoltă software conform AUTOSAR pentru OEM-uri europene și furnizori Tier-1. Certificat ISO 27001 & ISO 9001. Nearshore din Moldova."
        keywords="AUTOSAR, Software Embedded, IoT Dezvoltare, Nearshore Moldova, Software Automotive"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "BSW TECH — Dezvoltare Software Automotive Nearshore",
            url: `${SITE}/ro/`,
            inLanguage: "ro",
            description: "BSW TECH dezvoltă software conform AUTOSAR pentru OEM-uri europene.",
            publisher: {
              "@type": "Organization",
              name: "BSW TECH",
              url: SITE,
            },
          }),
        }}
      />

      <div className="min-h-screen">
        <Navigation />
        <main>
          <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="max-w-container mx-auto px-6 lg:px-20 text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Partenerul tău Nearshore pentru Dezvoltare Software Automotive
              </h1>
              <div className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed space-y-4">
                <p>
                  BSW TECH este o companie specializată în software embedded din Moldova, certificată ISO 27001 și ISO 9001.
                  Dezvoltăm software conform AUTOSAR pentru OEM-uri europene și furnizori Tier-1.
                </p>
                <p>
                  Serviciile noastre includ configurare BSW, integrare MCAL, Flash Bootloader și siguranță funcțională
                  conform ISO 26262. Oferim dezvoltare nearshore eficientă din punct de vedere al costurilor,
                  cu aliniere completă la fusul orar al UE.
                </p>
              </div>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Contactează-ne
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
