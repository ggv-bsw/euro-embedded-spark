import {
  ArrowRight,
  Cpu,
  Car,
  Wifi,
  Package,
  Smartphone,
  Award,
  MapPin,
  CheckCircle2,
  Users,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import StoryCard from "@/components/StoryCard";
import SEO from "@/components/SEO";
import LocalizedLink from "@/components/LocalizedLink";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-tech.webp";
import heroImageMobile from "@/assets/hero-tech-mobile.webp";
import logoArobs from "@/assets/Arobs-logo.webp";
import logoCapgemini from "@/assets/capgemini-logo.webp";
import logoElectra from "@/assets/electra-logo.webp";
import logoFyrqom from "@/assets/fyrqom_logotype.svg";
import logoGefeetech from "@/assets/gefeetech.webp";
import logoAppsfactory from "@/assets/appsfactory-logo.webp";
import logoNttData from "@/assets/ntt-data-logo.webp";
import logoBluesys from "@/assets/logo-141x65.webp";
import logoProcesio from "@/assets/procesio-logo.webp";
import logoRandstad from "@/assets/randstad-logo.webp";
import logoVivafem from "@/assets/vivafem-AoPWP9le0VUDovk2.svg";
import photoMihai from "@/assets/mihai-darzan.webp";
import photoChristoph from "@/assets/cristoph-hiltl.webp";
import photoHani from "@/assets/hani-ibrahim.webp";

const serviceIcons = [Cpu, Car, Wifi, Package, Smartphone, Users];

const storyTechnologies = [
  ["React", "TypeScript", "Kotlin", "REST APIs"],
  ["STM32", "C/C++", "LoRaWAN", "SIGFOX", "MQTT", "AWS IoT"],
];

const testimonialPhotos = [photoMihai, photoChristoph, photoHani];

const clientLogos = [
  { name: "Capgemini", src: logoCapgemini },
  { name: "NTT DATA", src: logoNttData },
  { name: "Randstad", src: logoRandstad },
  { name: "AROBS", src: logoArobs },
  { name: "Appsfactory", src: logoAppsfactory, className: "h-16 md:h-20" },
  { name: "GeFEE Technologies", src: logoGefeetech },
  { name: "Fyrqom AB", src: logoFyrqom },
  { name: "Procesio", src: logoProcesio },
  { name: "Electra Interphone", src: logoElectra, className: "h-5 md:h-6" },
  { name: "Bluesys Electronics", src: logoBluesys },
  { name: "Vivafem", src: logoVivafem },
];

export default function Index() {
  const { t, i18n } = useTranslation("index");
  const lang = i18n.language;

  const seo = t("seo", { returnObjects: true }) as { title: string; description: string; keywords: string };
  const hero = t("hero", { returnObjects: true }) as Record<string, string>;
  const why = t("why", { returnObjects: true }) as Record<string, any>;
  const services = t("services", { returnObjects: true }) as { title: string; subtitle: string; items: { title: string; description: string; keywords: string }[] };
  const stories = t("stories", { returnObjects: true }) as { title: string; subtitle: string; viewAll: string; items: { client: string; title: string; scope: string; result: string }[] };
  const testimonials = t("testimonials", { returnObjects: true }) as { title: string; items: { quote: string; name: string; market: string }[] };
  const certifications = t("certifications", { returnObjects: true }) as { title: string; subtitle: string; items: string[] };
  const cta = t("cta", { returnObjects: true }) as Record<string, string>;

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
            "@type": "Organization",
            name: "BSW TECH",
            alternateName: "Bessarabia Software Technology",
            url: SITE,
            logo: `${SITE}/og-image.png`,
            description: "BSW TECH is a near-shore Automotive and IoT embedded software engineering company based in Chisinau, Moldova. ISO 27001, ISO 9001, and ISO 14001 certified.",
            foundingDate: "2021",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Alecu Russo 15, of. 43",
              addressLocality: "Chisinau",
              addressCountry: "MD",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              email: "info@bsw-tech.com",
              availableLanguage: ["English", "Romanian", "Russian", "German"],
            },
            sameAs: [
              "https://md.linkedin.com/company/bsw-tech",
              "https://github.com/bsw-tech",
              "https://www.youtube.com/@BSWTech-h8q",
              "https://www.instagram.com/bswtech/",
            ],
            hasCredential: [
              { "@type": "EducationalOccupationalCredential", name: "ISO 27001:2013 Information Security Management" },
              { "@type": "EducationalOccupationalCredential", name: "ISO 9001:2015 Quality Management" },
              { "@type": "EducationalOccupationalCredential", name: "ISO 14001 Environmental Management" },
            ],
            areaServed: ["DE", "SE", "RO", "EU"],
            knowsAbout: [
              "AUTOSAR", "Embedded C", "Embedded C++", "IoT Development",
              "ISO 26262", "Functional Safety", "PLC Programming",
              "Battery Management Systems", "ADAS", "Telematics",
            ],
          }),
        }}
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
                name: hero.titleLine1,
                item: `${SITE}${prefix}/`,
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen">
        <Navigation />
        <main>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <picture>
            <source media="(max-width: 640px)" srcSet={heroImageMobile} type="image/webp" />
            <img
              src={heroImage}
              alt="Embedded automotive circuit board — BSW TECH near-shore engineering, Chisinau Moldova"
              width={1920}
              height={1080}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </picture>
          <div className="absolute inset-0 z-0 bg-background/75" />
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />

          {/* Floating particles */}
          <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-primary/20 animate-particle-1" />
            <div className="absolute top-[25%] right-[15%] w-3 h-3 rounded-full bg-secondary/20 animate-particle-2" />
            <div className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 rounded-full bg-primary/15 animate-particle-3" />
            <div className="absolute top-[60%] right-[10%] w-2 h-2 rounded-full bg-primary/20 animate-particle-1" style={{ animationDelay: "2s" }} />
            <div className="absolute top-[40%] left-[5%] w-1 h-1 rounded-full bg-secondary/25 animate-particle-2" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-[20%] right-[25%] w-2.5 h-2.5 rounded-full bg-primary/10 animate-particle-3" style={{ animationDelay: "3s" }} />
            <div className="absolute top-[20%] left-[45%] w-1 h-1 rounded-full bg-secondary/15 animate-particle-1" style={{ animationDelay: "4s" }} />
            <div className="absolute bottom-[40%] right-[40%] w-1.5 h-1.5 rounded-full bg-primary/15 animate-particle-2" style={{ animationDelay: "2.5s" }} />
            <div className="absolute top-[70%] left-[35%] w-3 h-3 rounded-full bg-secondary/10 animate-particle-3" style={{ animationDelay: "1.5s" }} />
            <div className="absolute top-[10%] right-[35%] w-2 h-2 rounded-full bg-primary/10 animate-particle-1" style={{ animationDelay: "3.5s" }} />
            <div className="absolute top-[20%] left-[15%] w-32 h-32 rounded-full bg-primary/5 blur-3xl animate-particle-2" />
            <div className="absolute bottom-[15%] right-[10%] w-40 h-40 rounded-full bg-secondary/5 blur-3xl animate-particle-3" />
          </div>

          <div className="relative z-10 max-w-container mx-auto px-6 lg:px-20 pt-32 pb-20 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {hero.titleLine1}
              <br />
              {hero.titleLine2}{" "}
              <span className="text-gradient">{hero.titleHighlight}</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LocalizedLink to="/contact">
                <Button variant="hero" size="lg" className="group">
                  {hero.bookCall}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </LocalizedLink>
              <LocalizedLink to="/success-stories">
                <Button variant="outline" size="lg">
                  {hero.seeWork}
                </Button>
              </LocalizedLink>
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-10 border-b border-line">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <p className="text-sm text-muted-foreground text-center mb-8 uppercase tracking-widest">
              {t("trustedBy")}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clientLogos.map((client) => (
                <img
                  key={client.name}
                  src={client.src}
                  alt={client.name}
                  width={120}
                  height={48}
                  className={`${client.className || "h-10 md:h-12"} w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why BSW TECH */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  {why.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {why.description}
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {(why.points as string[]).map((point: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                      <span className="text-foreground font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
                  <MapPin className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    {why.locationTitle}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {why.locationDescription}
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">{why.timeZone}</span>
                      <span className="font-semibold">EET (UTC+2)</span>
                    </div>
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">{why.languages}</span>
                      <span className="font-semibold">EN, RU, RO</span>
                    </div>
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">
                        {why.mainMarkets}
                      </span>
                      <span className="font-semibold">SE, DE, DK, EE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {services.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {services.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.items.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={serviceIcons[index]}
                  title={service.title}
                  description={service.description}
                  keywords={service.keywords}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Preview */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {stories.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {stories.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {stories.items.map((story, index) => (
                <StoryCard
                  key={index}
                  client={story.client}
                  title={story.title}
                  scope={story.scope}
                  technologies={storyTechnologies[index]}
                  result={story.result}
                />
              ))}
            </div>
            <div className="text-center">
              <LocalizedLink to="/success-stories">
                <Button variant="outline" size="lg" className="group">
                  {stories.viewAll}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </LocalizedLink>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {testimonials.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl border border-line relative"
                >
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>
                  <div className="border-t border-line pt-4 flex items-center gap-4">
                    <img
                      src={testimonialPhotos[index]}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.market}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <Award className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {certifications.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {certifications.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.items.map((cert, index) => (
                <div
                  key={index}
                  className="px-8 py-4 bg-background border border-primary/20 rounded-lg hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  <span className="font-semibold text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative z-10 max-w-container mx-auto px-6 lg:px-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {cta.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              {cta.subtitle}
            </p>
            <LocalizedLink to="/contact">
              <Button variant="hero" size="lg" className="group">
                {cta.bookCall}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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
