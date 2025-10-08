import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Gavel, FileText, Heart, Briefcase, BookOpen, ArrowRight } from "lucide-react";

const categories = [
  {
    id: "constitutional",
    title: "Constitutional Law",
    description: "Understand your fundamental rights and constitutional protections",
    icon: Scale,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "criminal",
    title: "Criminal Law",
    description: "Know your rights in criminal proceedings and investigations",
    icon: Gavel,
    gradient: "from-purple-500 to-purple-600",
  },
  {
    id: "civil",
    title: "Civil Matters",
    description: "Get guidance on property, contracts, and civil disputes",
    icon: FileText,
    gradient: "from-pink-500 to-pink-600",
  },
  {
    id: "family",
    title: "Family Law",
    description: "Learn about marriage, divorce, custody, and inheritance",
    icon: Heart,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    id: "corporate",
    title: "Corporate Law",
    description: "Business formation, compliance, and corporate governance",
    icon: Briefcase,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "education",
    title: "Legal Education",
    description: "Access legal resources, guides, and educational materials",
    icon: BookOpen,
    gradient: "from-pink-500 to-blue-500",
  },
];

interface LegalGuidanceHubProps {
  onCategoryClick: (categoryId: string) => void;
}

export default function LegalGuidanceHub({ onCategoryClick }: LegalGuidanceHubProps) {
  return (
    <section id="guidance" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Legal Guidance Hub
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore comprehensive legal guidance across all major categories of Indian law
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="p-6 hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-visible"
              onClick={() => onCategoryClick(category.id)}
              data-testid={`card-category-${category.id}`}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-between group"
                  data-testid={`button-explore-${category.id}`}
                >
                  Explore More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
