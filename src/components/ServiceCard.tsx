import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  keywords: string;
}

export default function ServiceCard({ icon: Icon, title, description, keywords }: ServiceCardProps) {
  return (
    <Card className="group p-6 bg-card hover:bg-gradient-to-br hover:from-card hover:to-muted border-line hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gradient transition-all">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {keywords.split(", ").map((keyword, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground font-mono"
          >
            {keyword}
          </span>
        ))}
      </div>
    </Card>
  );
}
