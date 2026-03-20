import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const storyTechnologies = [
  ["React", "TypeScript", "Kotlin", "REST APIs", "PostgreSQL"],
  ["STM32", "C/C++", "LoRaWAN", "SIGFOX", "MQTT", "AWS IoT"],
  ["C#", "TypeScript", "React", ".NET Core", "Azure"],
  ["React Native", "WebRTC", "Firebase", "Kotlin", "Swift"],
  ["AUTOSAR", "C", "CAN", "UDS", "Vector tools"],
  ["STM32", "C", "MQTT", "AWS IoT", "React", "Node.js"],
];

export default function SuccessStories() {
  const { t, i18n } = useTranslation("successStories");
  const lang = i18n.language;

  const seo = t("seo", { returnObjects: true }) as { title: string; description: string; keywords: string };
  const hero = t("hero", { returnObjects: true }) as { title: string; subtitle: string };
  const stories = t("stories", { returnObjects: true }) as { client: string; title: string; scope: string; result: string }[];
  const stats = t("stats", { returnObjects: true }) as Record<string, string>;

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
                item: `${SITE}${prefix}/success-stories`,
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
            "@type": "ItemList",
            name: hero.title,
            url: `${SITE}${prefix}/success-stories`,
            itemListElement: stories.map((story, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "CreativeWork",
                name: story.title,
                description: story.scope,
                about: storyTechnologies[i]?.join(", "),
                author: {
                  "@type": "Organization",
                  name: "BSW TECH",
                  url: SITE,
                },
                provider: {
                  "@type": "Organization",
                  name: story.client,
                },
              },
            })),
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

        {/* Stories Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-2 gap-8">
              {stories.map((story, index) => (
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
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">{stats.projects}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">7+</div>
                <div className="text-muted-foreground">{stats.experience}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">{stats.clients}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">{stats.satisfaction}</div>
              </div>
            </div>
          </div>
        </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
