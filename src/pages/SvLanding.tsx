import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const SITE = "https://www.bsw-tech.com";

export default function SvLanding() {
  return (
    <>
      <SEO
        title="AUTOSAR & Embedded Mjukvaruutveckling | Nearshore för europeiska OEM | BSW TECH"
        description="BSW TECH utvecklar AUTOSAR-kompatibel mjukvara för europeiska OEM-tillverkare och Tier-1-leverantörer. ISO 27001 & 9001-certifierad. Nearshore från Moldavien."
        keywords="AUTOSAR, Embedded mjukvara, IoT utveckling, Nearshore Moldavien, Automotive mjukvara"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "BSW TECH — Nearshore Automotive Mjukvaruutveckling",
            url: `${SITE}/sv/`,
            inLanguage: "sv",
            description: "BSW TECH utvecklar AUTOSAR-kompatibel mjukvara för europeiska OEM-tillverkare.",
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
                Din Nearshore-partner för Automotive Mjukvaruutveckling
              </h1>
              <div className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed space-y-4">
                <p>
                  BSW TECH är ett specialiserat embedded-mjukvaruföretag från Moldavien med ISO 27001 och ISO 9001-certifiering.
                  Vi utvecklar AUTOSAR-kompatibel mjukvara för europeiska OEM-tillverkare och Tier-1-leverantörer.
                </p>
                <p>
                  Våra tjänster inkluderar BSW-konfiguration, MCAL-integration, Flash Bootloader och
                  funktionssäkerhet enligt ISO 26262. Vi erbjuder kostnadseffektiv nearshore-utveckling med
                  full EU-tidszonsanpassning.
                </p>
              </div>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Kontakta oss
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
