import { Github, ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "LoRaWAN Pulse Counter",
    description: "Smart metering hardware prototype with LoRaWAN connectivity. Complete hardware design, firmware, and cloud integration for remote water and energy monitoring.",
    tech: ["STM32", "C/C++", "LoRaWAN", "MQTT", "AWS IoT"],
    status: "Production",
    github: "https://github.com/bsw-tech/lorawan-pulse-counter",
  },
  {
    title: "ThermoSmart IoT Thermostat",
    description: "Connected heating system with mobile app control. ESP32-based thermostat with React Native mobile app and real-time temperature monitoring.",
    tech: ["ESP32", "React Native", "Firebase", "MQTT"],
    status: "Beta",
    github: "https://github.com/bsw-tech/thermosmart",
  },
  {
    title: "Embedded Tools Kit",
    description: "Internal firmware testing framework shared with the community. Includes unit testing tools, mock libraries, and CI/CD templates for embedded projects.",
    tech: ["C/C++", "CMake", "Python", "Docker"],
    status: "Active",
    github: "https://github.com/bsw-tech/embedded-tools",
  },
  {
    title: "AUTOSAR BSW Components",
    description: "Open-source AUTOSAR Basic Software components for educational purposes. Includes examples of CAN communication, diagnostics, and memory management.",
    tech: ["C", "AUTOSAR", "CAN", "UDS"],
    status: "Educational",
    github: "https://github.com/bsw-tech/autosar-bsw",
  },
  {
    title: "IoT Device Manager",
    description: "Web dashboard for managing IoT devices at scale. Built with React and Node.js, supports multiple connectivity protocols and real-time monitoring.",
    tech: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    status: "Production",
    github: "https://github.com/bsw-tech/iot-manager",
  },
  {
    title: "CAN Bus Analyzer",
    description: "Real-time CAN bus monitoring and analysis tool. Desktop application for automotive diagnostics with DBC file support and live data visualization.",
    tech: ["Python", "Qt", "SocketCAN"],
    status: "Active",
    github: "https://github.com/bsw-tech/can-analyzer",
  },
];

const statusColors: Record<string, string> = {
  Production: "bg-success/10 text-success border-success/20",
  Beta: "bg-warning/10 text-warning border-warning/20",
  Active: "bg-primary/10 text-primary border-primary/20",
  Educational: "bg-secondary/10 text-secondary border-secondary/20",
};

export default function Playground() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-container mx-auto px-6 lg:px-20 text-center">
          <Code2 className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Where Engineering <span className="text-gradient">Meets Innovation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our open-source projects and prototypes that drive innovation at BSW TECH. 
            From IoT devices to automotive tools, we share our work with the community.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
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
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Code2 className="w-12 h-12 text-primary/50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full group/btn">
                        <Github size={16} className="mr-2" />
                        View on GitHub
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
      <section className="py-24 bg-card">
        <div className="max-w-container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <Github className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Open Source Philosophy</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe in giving back to the engineering community. Our open-source projects 
              help developers learn embedded systems, IoT, and automotive software development 
              while showcasing our technical capabilities.
            </p>
            <a
              href="https://github.com/bsw-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="group">
                <Github size={20} className="mr-2" />
                Visit Our GitHub
                <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="max-w-container mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">15+</div>
              <div className="text-muted-foreground">Open Source Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">500+</div>
              <div className="text-muted-foreground">GitHub Stars</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">50+</div>
              <div className="text-muted-foreground">Contributors</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gradient mb-2">10K+</div>
              <div className="text-muted-foreground">Downloads</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
