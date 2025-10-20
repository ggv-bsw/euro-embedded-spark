import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StoryCardProps {
  client: string;
  title: string;
  scope: string;
  technologies: string[];
  result: string;
}

export default function StoryCard({ client, title, scope, technologies, result }: StoryCardProps) {
  return (
    <Card className="group p-8 bg-card hover:bg-gradient-to-br hover:from-card hover:to-muted border-line hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
      <div className="mb-4">
        <span className="text-secondary font-semibold text-sm tracking-wide uppercase">{client}</span>
        <h3 className="text-2xl font-bold mt-2 text-foreground group-hover:text-gradient transition-all">
          {title}
        </h3>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground mb-2">Scope</h4>
          <p className="text-foreground">{scope}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-0">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground mb-2">Result</h4>
          <p className="text-foreground">{result}</p>
        </div>
      </div>
    </Card>
  );
}
