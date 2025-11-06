import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import SEO from "@/components/SEO";

const allStories = [
  {
    client: "Fyrqom AB",
    title: "Enterprise Mobile & Web Applications",
    scope:
      "Full development of mobile & web applications used by Volvo and Scania for tire-pressure automation systems.",
    technologies: ["React", "TypeScript", "Kotlin", "REST APIs", "PostgreSQL"],
    result:
      "Delivered production-ready apps powering tire-pressure automation systems across major automotive manufacturers.",
  },
  {
    client: "Smart Metering Project",
    title: "LoRaWAN & SIGFOX Pulse Counter",
    scope:
      "Product developed from scratch — hardware design, firmware development, and IoT connectivity for smart metering.",
    technologies: ["STM32", "C/C++", "LoRaWAN", "SIGFOX", "MQTT", "AWS IoT"],
    result:
      "Smart metering solution deployed in real apartments in Chișinău, enabling remote water and energy monitoring.",
  },
  {
    client: "Procesio",
    title: "Low-Code Platform Development",
    scope:
      "Out-staffing of BSW TECH developers to enhance Procesio's workflow automation platform with new features and integrations.",
    technologies: ["C#", "TypeScript", "React", ".NET Core", "Azure"],
    result:
      "Accelerated delivery and cost reduction for core product features, enabling faster time-to-market.",
  },
  {
    client: "Electra Interphone",
    title: "Smart Intercom Mobile Application",
    scope:
      "Full mobile application development for smart intercom system with video streaming and access control.",
    technologies: ["React Native", "WebRTC", "Firebase", "Kotlin", "Swift"],
    result:
      "Real-time video communication and remote access control for residential buildings across Eastern Europe.",
  },
  {
    client: "Nordic Automotive OEM",
    title: "AUTOSAR ECU Integration",
    scope:
      "AUTOSAR Classic stack integration for body control module with CAN communication and diagnostic protocols.",
    technologies: ["AUTOSAR", "C", "CAN", "UDS", "Vector tools"],
    result:
      "Successfully integrated and validated ECU for series production, meeting ISO 26262 safety requirements.",
  },
  {
    client: "Industrial IoT Client",
    title: "Predictive Maintenance System",
    scope:
      "Development of IoT sensors and cloud platform for industrial equipment monitoring and predictive maintenance.",
    technologies: ["STM32", "C", "MQTT", "AWS IoT", "React", "Node.js"],
    result:
      "Reduced equipment downtime by 40% through real-time monitoring and predictive analytics.",
  },
];

export default function SuccessStories() {
  return (
    <>
      <SEO
        title="Success Stories & Case Studies | BSW TECH"
        description="Real-world case studies: embedded C/C++, AUTOSAR ECU integration, IoT (LoRaWAN/SIGFOX), and full-stack/mobile apps for European OEMs and industrial clients. Results: 40% downtime reduction, production-ready apps for Volvo/Scania, ISO 26262 programs."
        keywords="case studies, success stories, AUTOSAR, embedded C, IoT, LoRaWAN, SIGFOX, React, Kotlin, AWS IoT, ISO 26262"
      />

      <div className="min-h-screen">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-container mx-auto px-6 lg:px-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real projects delivering real impact for European companies across
              automotive, IoT, and embedded systems.
            </p>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-24">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-2 gap-8">
              {allStories.map((story, index) => (
                <StoryCard key={index} {...story} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-card">
          <div className="max-w-container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-gradient mb-2">50+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gradient mb-2">7+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gradient mb-2">15+</div>
                <div className="text-muted-foreground">European Clients</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gradient mb-2">95%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
