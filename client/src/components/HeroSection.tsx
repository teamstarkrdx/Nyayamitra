import { Button } from "@/components/ui/button";
import { MessageSquare, Scale, Shield, Users } from "lucide-react";
import heroImage from "@assets/generated_images/Indian_citizens_accessing_AI_legal_help_d62d4193.png";

interface HeroSectionProps {
  onOpenChat: () => void;
  onViewRights: () => void;
}

export default function HeroSection({ onOpenChat, onViewRights }: HeroSectionProps) {
  return (
    <section className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  India's First
                </span>
                <br />
                AI Legal Assistant
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Get instant AI-powered legal guidance in 11 Indian languages. 
                Understand your rights, search laws, and access free legal assistance 24/7.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                onClick={onOpenChat}
                data-testid="button-start-chat"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Free Chat
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onViewRights}
                data-testid="button-view-rights"
              >
                <Scale className="mr-2 h-5 w-5" />
                View Your Rights
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="text-center p-4">
                <Users className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <p className="text-2xl font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Users Helped</p>
              </div>
              <div className="text-center p-4">
                <MessageSquare className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <p className="text-2xl font-bold text-foreground">&lt;2 min</p>
                <p className="text-sm text-muted-foreground">Response Time</p>
              </div>
              <div className="text-center p-4">
                <Shield className="h-8 w-8 mx-auto mb-2 text-pink-500" />
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Confidential</p>
              </div>
              <div className="text-center p-4">
                <Scale className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Available</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Indian citizens accessing AI legal assistance"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
