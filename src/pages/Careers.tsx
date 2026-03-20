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
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import JobApplicationForm from "@/components/JobApplicationForm";

const benefits = [
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Access to our Embedded School and mentorship from senior engineers.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Clear career paths and opportunities to work on cutting-edge projects.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work with talented engineers in a supportive team environment.",
  },
  {
    icon: Code,
    title: "Latest Technologies",
    description:
      "Work with European clients using modern tools and methodologies.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible work arrangements and supportive management.",
  },
  {
    icon: Briefcase,
    title: "International Exposure",
    description:
      "Collaborate with clients from Sweden, Germany, Denmark, and Estonia.",
  },
];

const openPositions = [
  {
    title: "Senior Embedded Software Engineer",
    location: "Chișinău, Moldova",
    type: "Full-time",
    description:
      "Develop firmware for automotive ECUs using C/C++ and AUTOSAR.",
  },
  {
    title: "Senior Java Developer",
    location: "Chișinău, Moldova / Remote",
    type: "Full-time",
    description:
      "Design and build scalable backend services and microservices using Java, Spring Boot, and cloud-native architectures.",
  },
  {
    title: "Scala Developer",
    location: "Chișinău, Moldova / Remote",
    type: "Full-time",
    description:
      "Develop high-performance, functional-style backend systems and data pipelines using Scala, Akka, and the JVM ecosystem.",
  },
  {
    title: "Full-Stack Developer",
    location: "Chișinău, Moldova / Remote",
    type: "Full-time",
    description:
      "Build mobile and web applications using React, Node.js, and modern frameworks.",
  },
  {
    title: "Go Developer",
    location: "Chișinău, Moldova / Remote",
    type: "Full-time",
    description:
      "Build high-performance backend services, APIs, and distributed systems using Go and cloud-native tooling.",
  },
  {
    title: ".NET Developer with Angular",
    location: "Chișinău, Moldova / Remote",
    type: "Full-time",
    description:
      "Develop full-stack enterprise applications using .NET Core backend services and Angular front-end interfaces.",
  },
];

const SITE = "https://bsw-tech.com";

export default function Careers() {
  const [applicationJob, setApplicationJob] = useState<string | null>(null);

  const jobsLd = openPositions.map((p) => {
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
        ? {
            jobLocationType: "TELECOMMUTE",
            applicantLocationRequirements: {
              "@type": "Country",
              name: "Europe",
            },
          }
        : {
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                ...(city ? { addressLocality: city } : {}),
                ...(country ? { addressCountry: country } : {}),
              },
            },
          }),
      hiringOrganization: {
        "@type": "Organization",
        name: "BSW TECH",
        sameAs: [
          "https://linkedin.com/company/bsw-tech",
          "https://github.com/bsw-tech",
          "https://www.youtube.com/@BSWTech-h8q",
          "https://www.instagram.com/bswtech/",
        ],
        url: SITE,
      },
    };
  });

  return (
    <>
      <SEO
        title="Careers at BSW TECH | Embedded, AUTOSAR, IoT & Full-Stack Roles"
        description="Join BSW TECH in Chișinău (EU presence: Romania, Estonia). Open roles: Senior Embedded, AUTOSAR Integration, IoT Solutions Developer, Full-Stack Developer. Embedded School, mentorship, modern tooling."
        keywords="embedded jobs Moldova, AUTOSAR jobs, IoT developer jobs, careers BSW TECH"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "BSW TECH Careers",
            url: `${SITE}/careers`,
            itemListElement: jobsLd.map((job, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: job,
            })),
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
                item: `${SITE}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Careers",
                item: `${SITE}/careers`,
              },
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
              Build Your Future at{" "}
              <span className="text-primary">BSW TECH</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our team of engineers working on cutting-edge projects in
              Automotive and IoT. Grow through our Embedded School and
              real-world mentorship.
            </p>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Join BSW TECH?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We invest in our people and create an environment where
                engineers can thrive.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-line hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Embedded School */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <GraduationCap className="w-16 h-16 text-primary mb-6" />
                <h2 className="text-4xl font-bold mb-6">
                  BSW TECH Embedded School
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our unique Embedded School program helps junior engineers grow
                  into senior specialists through:
                </p>
                <ul className="space-y-4">
                  {[
                    "Hands-on training with real automotive projects",
                    "Mentorship from experienced embedded engineers",
                    "AUTOSAR and functional safety certification paths",
                    "Modern development tools and methodologies",
                    "Collaborative learning environment",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold mb-4">Program Highlights</h3>
                <div className="space-y-4">
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">
                      12 weeks
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Intensive training program
                    </div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">
                      90%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Conversion to full-time
                    </div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">
                      30+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Engineers trained
                    </div>
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
              <h2 className="text-4xl font-bold mb-6">Open Positions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore opportunities to join our engineering team.
              </p>
            </div>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card border-line hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold">{position.title}</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                          {position.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        {position.description}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Briefcase size={16} />
                        {position.location}
                      </p>
                    </div>
                    <Button
                      variant="hero"
                      className="whitespace-nowrap"
                      onClick={() => setApplicationJob(position.title)}
                    >
                      Apply Now
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Don't see a position that fits? Send us your CV and we'll keep you
              in mind for future opportunities.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
        </main>

        <Footer />
      </div>

      <JobApplicationForm
        jobTitle={applicationJob ?? ""}
        open={applicationJob !== null}
        onOpenChange={(open) => {
          if (!open) setApplicationJob(null);
        }}
      />
    </>
  );
}
