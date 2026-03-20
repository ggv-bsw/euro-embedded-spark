import { Link } from "react-router-dom";
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
import heroImage from "@/assets/hero-tech.jpg";
import logoArobs from "@/assets/Arobs-logo.png";
import logoCapgemini from "@/assets/capgemini-logo.png";
import logoElectra from "@/assets/electra-logo.png";
import logoFyrqom from "@/assets/fyrqom_logotype.svg";
import logoGefeetech from "@/assets/gefeetech.png";
import logoAppsfactory from "@/assets/appsfactory-logo.png";
import logoNttData from "@/assets/ntt-data-logo.png";
import logoBluesys from "@/assets/logo-141x65.png";
import logoProcesio from "@/assets/procesio-logo.png";
import logoRandstad from "@/assets/randstad-logo.png";
import logoVivafem from "@/assets/vivafem-AoPWP9le0VUDovk2.svg";
import photoMihai from "@/assets/mihai-darzan.jpg";
import photoChristoph from "@/assets/cristoph-hiltl.jpg";
import photoHani from "@/assets/hani-ibrahim.webp";

const services = [
  {
    icon: Cpu,
    title: "Embedded Systems Development",
    description:
      "Firmware architecture in C/C++, RTOS integration, CAN/LIN protocols and diagnostics tools.",
    keywords: "Embedded C, Microcontrollers, RTOS, CAN, LIN",
  },
  {
    icon: Car,
    title: "Automotive Engineering",
    description:
      "AUTOSAR ECU Integration, ADAS, Functional Safety and Cyber Security. We design, test and validate automotive software for OEMs and Tier-1 suppliers.",
    keywords: "AUTOSAR, ISO 26262, Cyber Security, Functional Safety, ADAS",
  },
  {
    icon: Wifi,
    title: "IoT Solutions",
    description:
      "Connectivity via LoRaWAN, SIGFOX and MQTT with cloud integration for smart homes, cities and industrial automation.",
    keywords: "IoT, Connectivity, Cloud, MQTT, LoRa, SIGFOX",
  },
  {
    icon: Package,
    title: "Product Design & Prototyping",
    description:
      "Electronics design, PCB layout, mechanical enclosure and DFM optimization for manufacturing.",
    keywords: "PCB, Hardware Design, Prototype, Product Design",
  },
  {
    icon: Smartphone,
    title: "Mobile & Full-Stack Development",
    description:
      "Native apps in Kotlin and Swift, React-based front-ends and secure backend APIs built for connected devices.",
    keywords: "Full-Stack, React, Swift, Kotlin, Backend, API",
  },
  {
    icon: Users,
    title: "Outsourcing / Out Staffing",
    description:
      "We build a team of professionals for you, all working together to deliver fast and cost efficient digital experiences.",
    keywords: "Outsourcing, Project Management, Out Staffing, Body Leasing",
  },
];

const stories = [
  {
    client: "Fyrqom AB",
    title: "Enterprise Mobile & Web Applications",
    scope:
      "Full development of mobile & web applications used by Volvo and Scania.",
    technologies: ["React", "TypeScript", "Kotlin", "REST APIs"],
    result:
      "Delivered production-ready apps powering tire-pressure automation systems.",
  },
  {
    client: "Smart Metering",
    title: "LoRaWAN & SIGFOX Pulse Counter",
    scope:
      "Product developed from scratch — hardware, firmware, and IoT connectivity.",
    technologies: ["STM32", "C/C++", "LoRaWAN", "SIGFOX", "MQTT", "AWS IoT"],
    result: "Smart metering solution deployed in real apartments in Chișinău.",
  },
];

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

const testimonials = [
  {
    quote:
      "The Outsourcing service was exceptional, and the team was helpful throughout the entire process. Highly recommend BSW TECH.",
    name: "Mihai Darzan",
    market: "Romania",
    photo: photoMihai,
  },
  {
    quote:
      "BSW TECH brought great motivation and innovation ideas to the project. A fantastic collaboration.",
    name: "Christoph Hiltl",
    market: "Germany",
    photo: photoChristoph,
  },
  {
    quote:
      "All the design and software development of Praxis website has been done by BSW TECH in time at a high quality. Recommend.",
    name: "Hani Ibrahim",
    market: "Germany",
    photo: photoHani,
  },
];

const certifications = [
  "ISO 9001",
  "ISO 14001",
  "ISO 27001",
  "ISO 37001",
  "ACEM Member",
  "IT Park Resident",
  "AHK Member",
  "MDW Community",
];

const whyPoints = [
  "EU Time-Zone & Engineering Standards",
  "ISO 9001 · 14001 · 27001 · 37001 Certified",
  "End-to-End Design → Prototyping → Launch",
  "Automotive & IoT Expertise Since 11.11.2021",
];

export default function Index() {
  return (
    <>
      <SEO
        title="BSW TECH - Near-Shore Automotive &amp; IoT Engineering"
        description="BSW TECH offers cost-efficient near-shore embedded, AUTOSAR, and IoT development for European automotive and industrial companies."
        keywords="Embedded C Development, AUTOSAR Integration, IoT Solutions, Product Design, Near-shore Moldova, Automotive Software, Full-Stack Apps, Embedded Systems, LoRaWAN, SIGFOX"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "BSW TECH",
            url: "https://bsw-tech.com/",
            description:
              "Cost-efficient near-shore embedded, AUTOSAR, and IoT development for European automotive and industrial companies.",
            publisher: {
              "@type": "Organization",
              name: "BSW TECH",
              logo: {
                "@type": "ImageObject",
                url: "https://bsw-tech.com/og-image.png",
              },
            },
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
                item: "https://bsw-tech.com/",
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
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
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
            {/* Larger blurred orbs */}
            <div className="absolute top-[20%] left-[15%] w-32 h-32 rounded-full bg-primary/5 blur-3xl animate-particle-2" />
            <div className="absolute bottom-[15%] right-[10%] w-40 h-40 rounded-full bg-secondary/5 blur-3xl animate-particle-3" />
          </div>

          <div className="relative z-10 max-w-container mx-auto px-6 lg:px-20 pt-32 pb-20 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Accelerate Your R&D
              <br />
              with{" "}
              <span className="text-gradient">Near-Shore Engineers</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Embedded C/C++, AUTOSAR, and IoT teams from Moldova — EU-aligned, ISO-certified, ready to ship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Book a Call
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/success-stories">
                <Button variant="outline" size="lg">
                  See Our Work
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-10 border-b border-line">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <p className="text-sm text-muted-foreground text-center mb-8 uppercase tracking-widest">
              Trusted by European companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clientLogos.map((client) => (
                <img
                  key={client.name}
                  src={client.src}
                  alt={client.name}
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
                  Your Near-Shore Engineering Partner in Europe
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  BSW TECH bridges Eastern European talent with Western European
                  precision. Located in Moldova — EU-time zone aligned and
                  culturally close to the Nordics — we deliver embedded &
                  software projects that reduce costs without compromising
                  quality.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {whyPoints.map((point, index) => (
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
                    Strategic Location
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Headquartered in Chișinău, Moldova with presence in Romania
                    and Estonia. Perfect timezone alignment for Nordic and
                    German markets.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Time Zone</span>
                      <span className="font-semibold">EET (UTC+2)</span>
                    </div>
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Languages</span>
                      <span className="font-semibold">EN, RU, RO</span>
                    </div>
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">
                        Main Markets
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
                Engineering Excellence Across Domains
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From embedded firmware to cloud-connected mobile apps, we
                deliver complete engineering solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Preview */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Real Projects. Real Impact.
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We've delivered complex engineering projects for leading
                European companies.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {stories.map((story, index) => (
                <StoryCard key={index} {...story} />
              ))}
            </div>
            <div className="text-center">
              <Link to="/success-stories">
                <Button variant="outline" size="lg" className="group">
                  View All Success Stories
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                What Our Partners Say
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl border border-line relative"
                >
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-line pt-4 flex items-center gap-4">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.market}
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
                Quality & Trust Recognized
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We operate under strict European standards and are proud members
                of key industry organizations.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert, index) => (
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
              Ready to accelerate your next project?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Book a call and discover how our engineers can extend your team.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Book a Call
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
