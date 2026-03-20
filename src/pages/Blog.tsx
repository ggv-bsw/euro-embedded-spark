import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const postDates = [
  "2025-03-15",
  "2025-03-10",
  "2025-03-05",
  "2025-02-28",
  "2025-02-20",
  "2025-02-15",
];

export default function Blog() {
  const { t, i18n } = useTranslation("blog");
  const lang = i18n.language;

  const seo = t("seo", { returnObjects: true }) as { title: string; description: string; keywords: string };
  const hero = t("hero", { returnObjects: true }) as { title: string; subtitle: string };
  const categories = t("categories", { returnObjects: true }) as string[];
  const posts = t("posts", { returnObjects: true }) as { title: string; excerpt: string; readTime: string; category: string }[];
  const newsletter = t("newsletter", { returnObjects: true }) as Record<string, string>;

  const SITE = "https://www.bsw-tech.com";
  const prefix = lang === "de" ? "/de" : "";

  return (
    <>
      <SEO title={seo.title} description={seo.description} keywords={seo.keywords} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}${prefix}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}${prefix}/blog` },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: `BSW TECH ${hero.title}`,
            url: `${SITE}${prefix}/blog`,
            description: seo.description,
            publisher: {
              "@type": "Organization",
              name: "BSW TECH",
              logo: { "@type": "ImageObject", url: `${SITE}/og-image.png` },
            },
            blogPost: posts.map((post, i) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              datePublished: postDates[i],
              url: `${SITE}${prefix}/blog`,
              image: `${SITE}/og-image.png`,
              author: { "@type": "Organization", name: "BSW TECH", url: SITE },
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{hero.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{hero.subtitle}</p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-line sticky top-20 bg-background/95 backdrop-blur-lg z-40">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {categories.map((category, i) => (
                <Button key={category} variant={i === 0 ? "default" : "ghost"} size="sm" className="whitespace-nowrap">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card key={index} className="group bg-card border-line hover:border-primary/50 transition-all overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(postDates[index]).toLocaleDateString(lang === "de" ? "de-DE" : "en-US")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-card">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">{newsletter.title}</h2>
            <p className="text-muted-foreground mb-8">{newsletter.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="flex-1 px-4 py-3 bg-background border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero">{newsletter.subscribe}</Button>
            </div>
          </div>
        </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
