import { useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LegalGuidanceHub from "@/components/LegalGuidanceHub";
import HowWeHelp from "@/components/HowWeHelp";
import RightsPreview from "@/components/RightsPreview";
import LawSearch from "@/components/LawSearch";
import ContactSection from "@/components/ContactSection";
import UserReviews from "@/components/UserReviews";
import ChatBot from "@/components/ChatBot";
import RightsModal from "@/components/RightsModal";

export default function HomePage() {
  const [showRightsModal, setShowRightsModal] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section === "chat") {
      setChatOpen(true);
    } else if (section === "rights") {
      setShowRightsModal(true);
    }
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <Header onNavigate={handleNavigate} />
      
      <main className="relative z-10">
        <div id="home">
          <HeroSection
            onOpenChat={() => setChatOpen(true)}
            onViewRights={() => setShowRightsModal(true)}
          />
        </div>

        <div id="guidance">
          <LegalGuidanceHub onCategoryClick={(id) => console.log('Category:', id)} />
        </div>

        <HowWeHelp />

        <div id="rights">
          <RightsPreview onViewAll={() => setShowRightsModal(true)} />
        </div>

        <div id="law-search">
          <LawSearch />
        </div>

        <div id="contact">
          <ContactSection />
        </div>

        <div id="about">
          <UserReviews />
        </div>

        <footer className="border-t py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-muted-foreground">
              © 2024 LegalHelp AI. India's First AI Legal Assistant Platform.
            </p>
          </div>
        </footer>
      </main>

      <ChatBot />
      <RightsModal open={showRightsModal} onOpenChange={setShowRightsModal} />
    </div>
  );
}
