import { Award, Users, MapPin, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gheorghePhoto from "@/assets/gheorghe-photo.jpg";

const certifications = [
  { name: "ISO 9001", description: "Quality Management Systems" },
  { name: "ISO 14001", description: "Environmental Management" },
  { name: "ISO 27001", description: "Information Security" },
  { name: "ISO 37001", description: "Anti-Bribery Management" },
];

const memberships = [
  {
    name: "ACEM",
    full: "Association of Electronic Companies of Moldova",
    role: "Board Member",
  },
  {
    name: "IT Park Moldova",
    full: "IT Park Resident",
    role: "Resident Company",
  },
  {
    name: "AHK",
    full: "German Chamber of Commerce",
    role: "Member",
  },
  {
    name: "Swedish-Polish Chamber",
    full: "Swedish-Polish Chamber of Commerce",
    role: "Member",
  },
];

const values = [
  {
    icon: Target,
    title: "Technical Excellence",
    description: "We pursue the highest standards in embedded and software engineering, continuously learning and improving.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "We work as an extension of your team, adapting to your processes and communicating transparently.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "ISO-certified processes ensure consistent quality across all projects, from prototype to production.",
  },
  {
    icon: MapPin,
    title: "Near-Shore Advantage",
    description: "Strategic location in Moldova provides EU time-zone alignment with cost efficiency and cultural fit.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-container mx-auto px-6 lg:px-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">BSW TECH</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A European engineering company delivering embedded and software solutions for Automotive, IoT, and Product Design sectors.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24">
        <div className="max-w-container mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Engineering Partner You Can Trust
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  BSW TECH SRL is a European engineering company from Moldova delivering embedded and software solutions 
                  for Automotive, IoT and Product Design sectors.
                </p>
                <p>
                  We combine hardware design, firmware development, and software engineering under one roof, 
                  enabling us to deliver complete product solutions from concept to production.
                </p>
                <p>
                  Since 2021, we've been helping Nordic and German companies accelerate their R&D capacity with 
                  cost-efficient near-shore engineering that doesn't compromise on quality.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl border border-line">
                <div className="text-4xl font-bold text-primary mb-2">2021</div>
                <div className="text-muted-foreground">Founded</div>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-line">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-muted-foreground">Engineers</div>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-line">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-card">
        <div className="max-w-container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced engineering leadership guiding innovation and excellence.
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20">
            <div className="text-center mb-6">
              <img 
                src={gheorghePhoto} 
                alt="Gheorghe Ghirjev - CEO & Co-Founder" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
              />
              <h3 className="text-2xl font-bold mb-2">Gheorghe Ghirjev</h3>
              <p className="text-primary font-semibold">CEO & Founder</p>
            </div>
            <p className="text-muted-foreground text-center">
              Entrepreneur and Engineer with 15+ years of experience in embedded systems and product innovation. 
              Leading BSW TECH's vision to become the premier near-shore engineering partner for European automotive and IoT companies.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our work and relationships with clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-line hover:border-primary/50 transition-all"
              >
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-card">
        <div className="max-w-container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ISO-certified processes ensuring quality, security, and compliance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-2xl border border-primary/20 text-center hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <div className="text-3xl font-bold text-primary mb-2">{cert.name}</div>
                <div className="text-sm text-muted-foreground">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-24">
        <div className="max-w-container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industry Memberships</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Active members of leading technology and business organizations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {memberships.map((membership, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-line hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-primary">{membership.name}</h3>
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {membership.role}
                  </span>
                </div>
                <p className="text-muted-foreground">{membership.full}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Engineering Journey
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Whether you're looking for a technology partner or want to join our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Partner With Us
              </Button>
            </Link>
            <Link to="/careers">
              <Button variant="outline" size="lg">
                View Careers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
