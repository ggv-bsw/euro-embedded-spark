import { Award, Users, MapPin, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import LocalizedLink from "@/components/LocalizedLink";
import gheorghePhoto from "@/assets/gheorghe-photo.jpg";
import photoIgor from "@/assets/igor-r.jpeg";
import photoDaniel from "@/assets/daniel-v.jpg";
import photoGrigore from "@/assets/grigore-c.jpg";
import photoVlad from "@/assets/vlad-m.jpg";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const valueIcons = [Target, Users, Award, MapPin];
const teamPhotos = [photoIgor, photoDaniel, photoGrigore, photoVlad];

export default function About() {
  const { t, i18n } = useTranslation("about");
  const lang = i18n.language;

  const seo = t("seo", { returnObjects: true }) as { title: string; description: string; keywords: string };
  const hero = t("hero", { returnObjects: true }) as { title: string; subtitle: string };
  const overview = t("overview", { returnObjects: true }) as { title: string; paragraphs: string[]; founded: string; engineers: string; projectsDelivered: string };
  const team = t("team", { returnObjects: true }) as { title: string; subtitle: string; ceoTitle: string; ceoQuote: string; ceoDescription: string; members: { name: string; role: string; focus: string }[] };
  const values = t("values", { returnObjects: true }) as { title: string; subtitle: string; items: { title: string; description: string }[] };
  const certs = t("certifications", { returnObjects: true }) as { title: string; subtitle: string; items: { name: string; description: string }[] };
  const memberships = t("memberships", { returnObjects: true }) as { title: string; subtitle: string; items: { name: string; full: string; role: string }[] };
  const cta = t("cta", { returnObjects: true }) as { title: string; subtitle: string; partnerButton: string; careersButton: string };

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
            "@type": "LocalBusiness",
            name: "BSW TECH",
            image: `${SITE}/og-image.png`,
            url: SITE,
            email: "info@bsw-tech.com",
            description: seo.description,
            foundingDate: "2021",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Alecu Russo 15, floor 5, of. 43",
              addressLocality: "Chisinau",
              addressRegion: "Chisinau Municipality",
              postalCode: "2068",
              addressCountry: "MD",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 47.0245,
              longitude: 28.8322,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
            priceRange: "$",
            sameAs: [
              "https://md.linkedin.com/company/bsw-tech",
              "https://github.com/bsw-tech",
              "https://www.youtube.com/@BSWTech-h8q",
              "https://www.instagram.com/bswtech/",
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
                name: "Home",
                item: `${SITE}${prefix}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: hero.title,
                item: `${SITE}${prefix}/about`,
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
            "@type": "Person",
            name: "Gheorghe Ghirjev",
            jobTitle: team.ceoTitle,
            worksFor: { "@type": "Organization", name: "BSW TECH" },
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

        {/* Company Overview */}
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  {overview.title}
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  {overview.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-card p-8 rounded-2xl border border-line">
                  <div className="text-4xl font-bold text-primary mb-2">2021</div>
                  <div className="text-muted-foreground">{overview.founded}</div>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-line">
                  <div className="text-4xl font-bold text-primary mb-2">30+</div>
                  <div className="text-muted-foreground">{overview.engineers}</div>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-line">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">{overview.projectsDelivered}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Team */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{team.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {team.subtitle}
              </p>
            </div>

            {/* CEO spotlight */}
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20 mb-12">
              <div className="text-center mb-6">
                <img
                  src={gheorghePhoto}
                  alt="Gheorghe Ghirjev — CEO and Founder of BSW TECH"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                  loading="lazy"
                />
                <h3 className="text-2xl font-bold mb-2">Gheorghe Ghirjev</h3>
                <p className="text-primary font-semibold">{team.ceoTitle}</p>
              </div>
              <div className="text-muted-foreground text-center space-y-4">
                <p className="font-bold text-lg">{team.ceoQuote}</p>
                <p>{team.ceoDescription}</p>
              </div>
            </div>

            {/* Key team members */}
            <div className="grid md:grid-cols-4 gap-6">
              {team.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-2xl border border-line text-center"
                >
                  <img
                    src={teamPhotos[index]}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-primary/20"
                    loading="lazy"
                  />
                  <h4 className="font-semibold text-lg mb-1">{member.name}</h4>
                  <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{values.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {values.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.items.map((value, index) => {
                const Icon = valueIcons[index];
                return (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-2xl border border-line hover:border-primary/50 transition-all"
                  >
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <Award className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">{certs.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {certs.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certs.items.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-2xl border border-primary/20 text-center hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{cert.name}</div>
                  <div className="text-sm text-muted-foreground">{cert.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Memberships */}
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{memberships.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {memberships.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {memberships.items.map((membership, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl border border-line hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-primary">{membership.name}</h3>
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {membership.role}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{membership.full}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-container mx-auto px-6 lg:px-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{cta.title}</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              {cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LocalizedLink to="/contact">
                <Button variant="hero" size="lg">{cta.partnerButton}</Button>
              </LocalizedLink>
              <LocalizedLink to="/careers">
                <Button variant="outline" size="lg">{cta.careersButton}</Button>
              </LocalizedLink>
            </div>
          </div>
        </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
