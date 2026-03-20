import { Cpu, Car, Wifi, Package, Smartphone, Layers, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LocalizedLink from "@/components/LocalizedLink";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const areaIcons = [Cpu, Car, Wifi, Package, Smartphone, Layers, Landmark];
const areaIds = ["embedded", "automotive", "iot", "product-design", "mobile", "digital-twin", "public-services"];

export default function Expertise() {
  const { t, i18n } = useTranslation("expertise");
  const lang = i18n.language;

  const seo = t("seo", { returnObjects: true }) as { title: string; description: string; keywords: string };
  const hero = t("hero", { returnObjects: true }) as { title: string; subtitle: string };
  const areas = t("areas", { returnObjects: true }) as { title: string; description: string; expertise: string[] }[];
  const cta = t("cta", { returnObjects: true }) as { title: string; subtitle: string; button: string };

  const SITE = "https://www.bsw-tech.com";
  const prefix = lang === "de" ? "/de" : "";

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${SITE}${prefix}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: hero.title,
                item: `${SITE}${prefix}/expertise`,
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "AUTOSAR Software Development",
            name: "AUTOSAR Embedded Software Development",
            description: "Full AUTOSAR-compliant software development including BSW configuration, MCAL integration, Flash Bootloader, BCM, and Telematics modules. ISO 26262 and Automotive SPICE aligned.",
            provider: {
              "@type": "Organization",
              name: "BSW TECH",
              url: SITE,
            },
            areaServed: ["DE", "SE", "RO", "EU"],
            url: `${SITE}${prefix}/expertise`,
          }),
        }}
      />

      <div className="min-h-screen">
        <Navigation />
        <main>

        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-container mx-auto px-6 lg:px-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {hero.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {hero.subtitle}
            </p>
          </div>
        </section>

        {/* Expertise Areas */}
        {areas.map((area, index) => {
          const Icon = areaIcons[index];
          return (
            <section
              key={areaIds[index]}
              id={areaIds[index]}
              className={index % 2 === 0 ? "py-16 md:py-24" : "py-16 md:py-24 bg-card"}
            >
              <div className="max-w-container mx-auto px-6 lg:px-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div
                    className={index % 2 === 0 ? "order-1" : "order-1 md:order-2"}
                  >
                    <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4">{area.title}</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                      {area.description}
                    </p>
                    <LocalizedLink to="/contact">
                      <Button variant="hero">{t("discussExpertise")}</Button>
                    </LocalizedLink>
                  </div>
                  <div
                    className={index % 2 === 0 ? "order-2" : "order-2 md:order-1"}
                  >
                    <div className="bg-gradient-to-br from-card to-muted p-8 rounded-2xl border border-line">
                      <h3 className="text-xl font-semibold mb-6 text-primary">
                        {t("whatWeDeliver")}
                      </h3>
                      <ul className="space-y-4">
                        {area.expertise.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-container mx-auto px-6 lg:px-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {cta.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              {cta.subtitle}
            </p>
            <LocalizedLink to="/contact">
              <Button variant="hero" size="lg">
                {cta.button}
              </Button>
            </LocalizedLink>
          </div>
        </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
