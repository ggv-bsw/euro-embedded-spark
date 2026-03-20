import { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Users,
  TrendingUp,
  Heart,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LocalizedLink from "@/components/LocalizedLink";
import SEO from "@/components/SEO";
import JobApplicationForm from "@/components/JobApplicationForm";
import { useTranslation } from "react-i18next";

const benefitIcons = [GraduationCap, TrendingUp, Users, Code, Heart, Briefcase];

export default function Careers() {
  const { t, i18n } = useTranslation("careers");
  const lang = i18n.language;
  const [applicationJob, setApplicationJob] = useState<string | null>(null);

  const seo = t("seo", { returnObjects: true }) as { title: string; description: string; keywords: string };
  const hero = t("hero", { returnObjects: true }) as { title: string; titleHighlight: string; subtitle: string };
  const whyJoin = t("whyJoin", { returnObjects: true }) as { title: string; subtitle: string; benefits: { title: string; description: string }[] };
  const school = t("school", { returnObjects: true }) as Record<string, any>;
  const positions = t("positions", { returnObjects: true }) as { title: string; subtitle: string; applyNow: string; items: { title: string; location: string; type: string; description: string }[] };
  const cta = t("cta", { returnObjects: true }) as { title: string; subtitle: string; button: string };

  const SITE = "https://bsw-tech.com";
  const prefix = lang === "de" ? "/de" : "";

  const jobsLd = positions.items.map((p) => {
    const isRemote = /remote/i.test(p.location);
    const mainLoc = p.location.split("/")[0].trim();
    const [city, country] = mainLoc.split(",").map((s) => s.trim());
    return {
      "@type": "JobPosting",
      title: p.title,
      description: p.description,
      datePosted: "2025-03-01",
      employmentType: (p.type || "Full-time").toUpperCase().replace("-", "_"),
      ...(isRemote
        ? { jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "Europe" } }
        : { jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", ...(city ? { addressLocality: city } : {}), ...(country ? { addressCountry: country } : {}) } } }),
      hiringOrganization: {
        "@type": "Organization",
        name: "BSW TECH",
        sameAs: ["https://linkedin.com/company/bsw-tech", "https://github.com/bsw-tech", "https://www.youtube.com/@BSWTech-h8q", "https://www.instagram.com/bswtech/"],
        url: SITE,
      },
    };
  });

  return (
    <>
      <SEO title={seo.title} description={seo.description} keywords={seo.keywords} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: positions.title,
            url: `${SITE}${prefix}/careers`,
            itemListElement: jobsLd.map((job, i) => ({ "@type": "ListItem", position: i + 1, item: job })),
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
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}${prefix}/` },
              { "@type": "ListItem", position: 2, name: positions.title, item: `${SITE}${prefix}/careers` },
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {hero.title}{" "}
              <span className="text-primary">{hero.titleHighlight}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{hero.subtitle}</p>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{whyJoin.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{whyJoin.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyJoin.benefits.map((benefit, index) => {
                const Icon = benefitIcons[index];
                return (
                  <Card key={index} className="p-6 bg-card border-line hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
                    <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Embedded School */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <GraduationCap className="w-16 h-16 text-primary mb-6" />
                <h2 className="text-4xl font-bold mb-6">{school.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{school.description}</p>
                <ul className="space-y-4">
                  {(school.items as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold mb-4">{school.highlights}</h3>
                <div className="space-y-4">
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">{school.duration}</div>
                    <div className="text-sm text-muted-foreground">{school.durationLabel}</div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">{school.conversion}</div>
                    <div className="text-sm text-muted-foreground">{school.conversionLabel}</div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">{school.trained}</div>
                    <div className="text-sm text-muted-foreground">{school.trainedLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{positions.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{positions.subtitle}</p>
            </div>
            <div className="space-y-6">
              {positions.items.map((position, index) => (
                <Card key={index} className="p-8 bg-card border-line hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold">{position.title}</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">{position.type}</span>
                      </div>
                      <p className="text-muted-foreground mb-2">{position.description}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Briefcase size={16} />
                        {position.location}
                      </p>
                    </div>
                    <Button variant="hero" className="whitespace-nowrap" onClick={() => setApplicationJob(position.title)}>
                      {positions.applyNow}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-container mx-auto px-6 lg:px-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{cta.title}</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">{cta.subtitle}</p>
            <LocalizedLink to="/contact">
              <Button variant="hero" size="lg">{cta.button}</Button>
            </LocalizedLink>
          </div>
        </section>
        </main>

        <Footer />
      </div>

      <JobApplicationForm
        jobTitle={applicationJob ?? ""}
        open={applicationJob !== null}
        onOpenChange={(open) => { if (!open) setApplicationJob(null); }}
      />
    </>
  );
}
