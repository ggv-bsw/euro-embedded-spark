import { Github, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const projectMeta = [
  { tech: ["STM32", "C/C++", "LoRaWAN", "MQTT", "AWS IoT"], status: "Production", github: "https://github.com/bsw-tech/lorawan-pulse-counter" },
  { tech: ["ESP32", "React Native", "Firebase", "MQTT"], status: "Beta", github: "https://github.com/bsw-tech/thermosmart" },
  { tech: ["C/C++", "CMake", "Python", "Docker"], status: "Active", github: "https://github.com/bsw-tech/embedded-tools" },
  { tech: ["C", "AUTOSAR", "CAN", "UDS"], status: "Educational", github: "https://github.com/bsw-tech/autosar-bsw" },
  { tech: ["React", "Node.js", "PostgreSQL", "WebSocket"], status: "Production", github: "https://github.com/bsw-tech/iot-manager" },
  { tech: ["Python", "Qt", "SocketCAN"], status: "Active", github: "https://github.com/bsw-tech/can-analyzer" },
];

const statusColors: Record<string, string> = {
  Production: "bg-success/10 text-success border-success/20",
  Beta: "bg-warning/10 text-warning border-warning/20",
  Active: "bg-primary/10 text-primary border-primary/20",
  Educational: "bg-secondary/10 text-secondary border-secondary/20",
};

export default function Playground() {
  const { t, i18n } = useTranslation("playground");
  const lang = i18n.language;

  const seo = t("seo", { returnObjects: true }) as { title: string; description: string };
  const hero = t("hero", { returnObjects: true }) as { title: string; subtitle: string };
  const projects = t("projects", { returnObjects: true }) as { title: string; description: string }[];
  const philosophy = t("philosophy", { returnObjects: true }) as { title: string; description: string; visitGithub: string };
  const stats = t("stats", { returnObjects: true }) as Record<string, string>;

  const SITE = "https://bsw-tech.com";
  const prefix = lang === "de" ? "/de" : "";

  const softwareLd = projects.map((p, i) => ({
    "@type": "SoftwareSourceCode",
    name: p.title,
    description: p.description,
    programmingLanguage: projectMeta[i].tech.join(", "),
    codeRepository: projectMeta[i].github,
    developmentStatus: projectMeta[i].status,
    keywords: projectMeta[i].tech.join(", "),
  }));

  return (
    <>
      <SEO title={seo.title} description={seo.description} noindex />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `BSW TECH Playground`,
            url: `${SITE}${prefix}/playground`,
            description: seo.description,
            hasPart: softwareLd,
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
              { "@type": "ListItem", position: 2, name: "Playground", item: `${SITE}${prefix}/playground` },
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
            <Code2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{hero.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{hero.subtitle}</p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="group bg-card border-line hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/20 overflow-hidden"
                >
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${statusColors[projectMeta[index].status]}`}>
                        {projectMeta[index].status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Code2 className="w-12 h-12 text-primary/50" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-all">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projectMeta[index].tech.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground font-mono">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={projectMeta[index].github} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full group/btn">
                          <Github size={16} className="mr-2" />
                          {t("viewOnGithub")}
                          <ExternalLink size={14} className="ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Source Philosophy */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="max-w-3xl mx-auto text-center">
              <Github className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">{philosophy.title}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{philosophy.description}</p>
              <a href="https://github.com/bsw-tech" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="group">
                  <Github size={20} className="mr-2" />
                  {philosophy.visitGithub}
                  <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">{stats.projects}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">{stats.stars}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">{stats.contributors}</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">{stats.downloads}</div>
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
