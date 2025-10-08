import { Clock, DollarSign, Smartphone, Languages } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Get legal guidance anytime, anywhere. Our AI assistant is always ready to help you.",
  },
  {
    icon: DollarSign,
    title: "Free Guidance",
    description: "Basic legal guidance is completely free. No hidden costs, no subscription fees.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Works perfectly on all devices. Access legal help from your phone or tablet.",
  },
  {
    icon: Languages,
    title: "Easy to Understand",
    description: "Legal jargon simplified in 11 Indian languages. Everyone deserves clarity.",
  },
];

export default function HowWeHelp() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            How We Help You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering Indian citizens with accessible legal knowledge and guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover-elevate active-elevate-2 transition-all duration-300 overflow-visible">
              <div className="space-y-4">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
