import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Car, Wifi, Package, Smartphone, Award, MapPin, CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import StoryCard from "@/components/StoryCard";
import heroImage from "@/assets/hero-tech.jpg";

const services = [
  {
    icon: Cpu,
    title: "Embedded Systems Development",
    description: "Firmware architecture in C/C++, RTOS integration, CAN/LIN protocols and diagnostics tools.",
    keywords: "Embedded C, Microcontrollers, RTOS, CAN, LIN",
  },
  {
    icon: Car,
    title: "Automotive Engineering",
    description: "AUTOSAR ECU Integration, ADAS, Functional Safety and Cyber Security. We design, test and validate automotive software for OEMs and Tier-1 suppliers.",
    keywords: "AUTOSAR, ISO 26262, Cyber Security, Functional Safety, ADAS",
  },
  {
    icon: Wifi,
    title: "IoT Solutions",
    description: "Connectivity via LoRaWAN, SIGFOX and MQTT with cloud integration for smart homes, cities and industrial automation.",
    keywords: "IoT, Connectivity, Cloud, MQTT, LoRa, SIGFOX",
  },
  {
    icon: Package,
    title: "Product Design & Prototyping",
    description: "Electronics design, PCB layout, mechanical enclosure and DFM optimization for manufacturing.",
    keywords: "PCB, Hardware Design, Prototype, Product Design",
  },
  {
    icon: Smartphone,
    title: "Mobile & Full-Stack Development",
    description: "Native apps in Kotlin and Swift, React-based front-ends and secure backend APIs built for connected devices.",
    keywords: "Full-Stack, React, Swift, Kotlin, Backend, API",
  },
  {
    icon: Users,
    title: "Outsourcing / Out Staffing",
    description: "We build a team of professionals for you, all working together to deliver fast and cost efficient digital experiences.",
    keywords: "Outsourcing, Project Management, Out Staffing, Body Leasing",
  },
];

const stories = [
  {
    client: "Fyrqom AB",
    title: "Enterprise Mobile & Web Applications",
    scope: "Full development of mobile & web applications used by Volvo and Scania.",
    technologies: ["React", "TypeScript", "Kotlin", "REST APIs"],
    result: "Delivered production-ready apps powering tire-pressure automation systems.",
  },
  {
    client: "Smart Metering",
    title: "LoRaWAN & SIGFOX Pulse Counter",
    scope: "Product developed from scratch — hardware, firmware, and IoT connectivity.",
    technologies: ["STM32", "C/C++", "LoRaWAN", "SIGFOX", "MQTT", "AWS IoT"],
    result: "Smart metering solution deployed in real apartments in Chișinău.",
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
  "Automotive & IoT Expertise Since 2017",
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 14, 17, 0.85), rgba(14, 14, 17, 0.9)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />
        
        <div className="relative z-10 max-w-container mx-auto px-6 lg:px-20 py-32 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Cost-Efficient{" "}
            <span className="text-gradient">Near-Shore Engineering</span>
            <br />
            for Automotive, IoT & Embedded Systems
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            We design and develop Embedded C/C++ firmware, AUTOSAR ECUs, IoT devices, and full-stack mobile apps 
            for European partners in Sweden, Denmark, Estonia and Germany.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Discuss Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/expertise">
              <Button variant="outline" size="lg">
                View Our Expertise
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why BSW TECH */}
      <section className="py-24 bg-card">
        <div className="max-w-container mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your <span className="text-gradient">Near-Shore</span> Engineering Partner in Europe
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                BSW TECH bridges Eastern European talent with Western European precision. 
                Located in Moldova — EU-time zone aligned and culturally close to the Nordics — 
                we deliver embedded & software projects that reduce costs without compromising quality.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {whyPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <span className="text-foreground font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Strategic Location</h3>
                <p className="text-muted-foreground mb-6">
                  Headquartered in Chișinău, Moldova with presence in Sweden. 
                  Perfect timezone alignment for Nordic and German markets.
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
                    <span className="text-muted-foreground">Main Markets</span>
                    <span className="font-semibold">SE, DE, DK, EE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24">
        <div className="max-w-container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Engineering Excellence <span className="text-gradient">Across Domains</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From embedded firmware to cloud-connected mobile apps, we deliver complete engineering solutions.
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
      <section className="py-24 bg-card">
        <div className="max-w-container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Projects. <span className="text-gradient">Real Impact.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've delivered complex engineering projects for leading European companies.
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

      {/* Certifications */}
      <section className="py-24">
        <div className="max-w-container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <Award className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Quality & Trust <span className="text-gradient">Recognized</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              We operate under strict European standards and are proud members of key industry organizations.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="px-8 py-4 bg-card border border-primary/20 rounded-lg hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <span className="font-semibold text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10 max-w-container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
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

      <Footer />
    </div>
  );
}
