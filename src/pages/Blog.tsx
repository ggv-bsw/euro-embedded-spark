import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const blogPosts = [
  {
    title: "How AUTOSAR Accelerates Automotive Innovation",
    excerpt:
      "Exploring how AUTOSAR standardization reduces development time and improves software reusability in modern vehicles.",
    date: "2025-03-15",
    readTime: "8 min read",
    category: "Automotive",
  },
  {
    title: "The Power of Embedded C in Next-Gen Devices",
    excerpt:
      "Why C/C++ remains the language of choice for embedded systems development and real-time applications.",
    date: "2025-03-10",
    readTime: "6 min read",
    category: "Embedded Systems",
  },
  {
    title: "LoRaWAN vs SIGFOX: Choosing the Right IoT Protocol",
    excerpt:
      "A comprehensive comparison of low-power wide-area network protocols for IoT applications.",
    date: "2025-03-05",
    readTime: "10 min read",
    category: "IoT",
  },
  {
    title: "Building Reliable IoT Backends with React and Node.js",
    excerpt:
      "Best practices for creating scalable and secure backend systems for connected devices.",
    date: "2025-02-28",
    readTime: "7 min read",
    category: "Full-Stack",
  },
  {
    title: "Engineering Culture in Eastern Europe: The BSW TECH Approach",
    excerpt:
      "How we build and maintain a world-class engineering team in Moldova while serving European clients.",
    date: "2025-02-20",
    readTime: "5 min read",
    category: "Company",
  },
  {
    title: "ISO 26262 Functional Safety in Practice",
    excerpt:
      "Real-world insights on implementing functional safety standards in automotive software development.",
    date: "2025-02-15",
    readTime: "9 min read",
    category: "Automotive",
  },
];

const categories = [
  "All",
  "Automotive",
  "Embedded Systems",
  "IoT",
  "Full-Stack",
  "Company",
];

export default function Blog() {
  return (
    <>
      <SEO
        title="Engineering Blog | Embedded, AUTOSAR, IoT & Product Development"
        description="Insights on embedded C/C++, AUTOSAR integration, IoT protocols (LoRaWAN/SIGFOX), and building reliable backends with React/Node.js. Updates on engineering culture and ISO 26262 practice."
        keywords="engineering blog, AUTOSAR, embedded C, IoT, LoRaWAN, SIGFOX, React, Node.js, ISO 26262"
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
                item: "https://bsw-tech.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://bsw-tech.com/blog",
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
            "@type": "Blog",
            name: "BSW TECH Engineering Blog",
            url: "https://bsw-tech.com/blog",
            description:
              "Insights on embedded C/C++, AUTOSAR integration, IoT protocols, and engineering culture.",
            publisher: {
              "@type": "Organization",
              name: "BSW TECH",
              logo: {
                "@type": "ImageObject",
                url: "https://bsw-tech.com/og-image.png",
              },
            },
            blogPost: blogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              url: "https://bsw-tech.com/blog",
              image: "https://bsw-tech.com/og-image.png",
              author: {
                "@type": "Organization",
                name: "BSW TECH",
                url: "https://bsw-tech.com",
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
              Insights on Engineering Innovation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Read our latest articles on embedded development, AUTOSAR
              integration, IoT connectivity and digital product design.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-line sticky top-20 bg-background/95 backdrop-blur-lg z-40">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "ghost"}
                  size="sm"
                  className="whitespace-nowrap"
                >
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
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="group bg-card border-line hover:border-primary/50 transition-all overflow-hidden"
                >
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
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
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
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights on embedded
              systems and automotive engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your.email@company.com"
                className="flex-1 px-4 py-3 bg-background border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero">Subscribe</Button>
            </div>
          </div>
        </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
