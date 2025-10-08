import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scale, Shield, Users, FileText, Gavel, Home, Star } from "lucide-react";

const sampleRights = [
  {
    id: 1,
    title: "Right to Equality",
    category: "Constitutional",
    icon: Scale,
    rating: 5,
    description: "All persons are equal before law and are entitled to equal protection of laws without discrimination.",
  },
  {
    id: 2,
    title: "Right to Freedom",
    category: "Constitutional",
    icon: Shield,
    rating: 5,
    description: "Protection of life and personal liberty. No person shall be deprived of life or liberty except by procedure established by law.",
  },
  {
    id: 3,
    title: "Right Against Exploitation",
    category: "Constitutional",
    icon: Users,
    rating: 5,
    description: "Prohibition of traffic in human beings, forced labor, and child labor in hazardous industries.",
  },
  {
    id: 4,
    title: "Right to Information",
    category: "Civil",
    icon: FileText,
    rating: 4,
    description: "Citizens have the right to access information from public authorities to promote transparency.",
  },
  {
    id: 5,
    title: "Right to Fair Trial",
    category: "Criminal",
    icon: Gavel,
    rating: 5,
    description: "Every person accused of an offense has right to defend themselves and get a fair hearing.",
  },
  {
    id: 6,
    title: "Right to Shelter",
    category: "Constitutional",
    icon: Home,
    rating: 4,
    description: "Right to shelter is a fundamental right under Article 21 of the Constitution of India.",
  },
];

interface RightsPreviewProps {
  onViewAll: () => void;
}

export default function RightsPreview({ onViewAll }: RightsPreviewProps) {
  return (
    <section id="rights" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Know Your Legal Rights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Essential rights every Indian citizen should know
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sampleRights.map((right) => (
            <Card
              key={right.id}
              className="p-6 hover-elevate active-elevate-2 transition-all duration-300 overflow-visible"
              data-testid={`card-right-${right.id}`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <right.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {right.category}
                  </Badge>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {right.title}
                  </h3>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < right.rating
                            ? "fill-yellow-500 text-yellow-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {right.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={onViewAll}
            data-testid="button-view-all-rights"
          >
            View All 30 Rights
          </Button>
        </div>
      </div>
    </section>
  );
}
