import { Cpu, Car, Wifi, Package, Smartphone, Layers, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const expertiseAreas = [
  {
    id: "embedded",
    icon: Cpu,
    title: "Embedded Systems (C/C++)",
    description:
      "We build low-level software for microcontrollers and electronic control units (ECUs).",
    expertise: [
      "Firmware in C/C++ for ARM Cortex, STM32, and other MCUs",
      "RTOS integration (FreeRTOS, Zephyr, ThreadX)",
      "CAN/LIN communication protocols",
      "Bootloaders and firmware updates (OTA)",
      "Diagnostic protocols (UDS, J1939)",
      "Memory management and optimization",
      "Unit testing and CI/CD pipelines",
    ],
  },
  {
    id: "automotive",
    icon: Car,
    title: "Automotive Engineering",
    description: "We deliver safe and reliable automotive software solutions.",
    expertise: [
      "AUTOSAR Classic & Adaptive Integration",
      "ADAS (Advanced Driver Assistance Systems)",
      "Functional Safety (ISO 26262)",
      "Cyber Security & Secure Bootloaders",
      "Diagnostics (UDS, DoIP) & ECU testing",
      "V-Model development processes",
      "HIL/SIL testing and validation",
    ],
  },
  {
    id: "iot",
    icon: Wifi,
    title: "IoT Solutions",
    description: "We connect devices to the cloud and bring data to life.",
    expertise: [
      "Smart home & city solutions",
      "Industrial sensors and monitoring",
      "LoRaWAN/SIGFOX connectivity modules",
      "MQTT broker integration",
      "Cloud dashboards (AWS IoT, Azure IoT, Google Cloud)",
      "Edge computing and data processing",
      "Battery-powered low-power design",
    ],
  },
  {
    id: "product-design",
    icon: Package,
    title: "Product Design & Prototyping",
    description:
      "From idea to industrialization — we design and prototype complete electronic products.",
    expertise: [
      "Circuit design and schematic capture",
      "PCB layout (multi-layer, high-speed)",
      "3D mechanical enclosures (CAD modeling)",
      "Hardware validation and testing",
      "EMC/EMI compliance support",
      "Supply-chain and DFM optimization",
      "Certification support (CE, FCC)",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile & Full-Stack Development",
    description:
      "We create connected mobile apps and backend systems that bridge devices with users.",
    expertise: [
      "Native iOS (Swift) and Android (Kotlin) apps",
      "React and Next.js web applications",
      "Node.js and TypeScript backend APIs",
      "PostgreSQL and MongoDB databases",
      "Firebase and cloud services integration",
      "Real-time device monitoring dashboards",
      "Secure authentication and authorization",
    ],
  },
  {
    id: "digital-twin",
    icon: Layers,
    title: "Digital Twin Philosophy",
    description:
      "We build it virtually before we build it physically — reducing risk, cost, and time-to-market.",
    expertise: [
      "Virtual prototyping and simulation",
      "Model-based systems engineering (MBSE)",
      "Hardware-in-the-loop (HIL) simulation",
      "Real-time digital replicas of physical systems",
      "Predictive analytics and performance optimization",
      "Integration with CAD/CAE toolchains",
      "Continuous validation through virtual testing",
    ],
  },
  {
    id: "public-services",
    icon: Landmark,
    title: "Public Services & GovTech",
    description:
      "Empowering public services through technology — making government more efficient, transparent, and citizen-friendly.",
    expertise: [
      "E-governance platforms and citizen portals",
      "Digital document management and workflow automation",
      "Secure data handling and GDPR compliance",
      "Integration with national registries and databases",
      "Smart city infrastructure and monitoring",
      "Public transport and utility management systems",
      "Accessibility-first design (WCAG compliance)",
    ],
  },
];

export default function Expertise() {
  return (
    <>
      <SEO
        title="Embedded & AUTOSAR Expertise | BSW TECH"
        description="Development of embedded C/C++, AUTOSAR Classic/Adaptive, diagnostics, and safety software for European automotive programs."
        keywords="Embedded C, AUTOSAR Classic, AUTOSAR Adaptive, Bootloader, ISO 26262"
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
                name: "Expertise",
                item: "https://bsw-tech.com/expertise",
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
              Our Engineering Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep technical knowledge across embedded systems, automotive, IoT,
              and full-stack development.
            </p>
          </div>
        </section>

        {/* Expertise Areas */}
        {expertiseAreas.map((area, index) => (
          <section
            key={area.id}
            id={area.id}
            className={index % 2 === 0 ? "py-16 md:py-24" : "py-16 md:py-24 bg-card"}
          >
            <div className="max-w-container mx-auto px-6 lg:px-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div
                  className={index % 2 === 0 ? "order-1" : "order-1 md:order-2"}
                >
                  <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
                    <area.icon className="w-12 h-12 text-primary" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{area.title}</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    {area.description}
                  </p>
                  <Link to="/contact">
                    <Button variant="hero">Discuss This Expertise</Button>
                  </Link>
                </div>
                <div
                  className={index % 2 === 0 ? "order-2" : "order-2 md:order-1"}
                >
                  <div className="bg-gradient-to-br from-card to-muted p-8 rounded-2xl border border-line">
                    <h3 className="text-xl font-semibold mb-6 text-primary">
                      What We Deliver:
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
        ))}

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-container mx-auto px-6 lg:px-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Let's discuss how our engineering expertise can help you achieve
              your goals.
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
    </>
  );
}
