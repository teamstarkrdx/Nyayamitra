import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { label: "Home", section: "home" },
    { label: "Legal Rights", section: "rights" },
    { label: "AI Legal Chat", section: "chat" },
    { label: "Law Search", section: "law-search" },
    { label: "Legal Guidance", section: "guidance" },
    { label: "Contact Us", section: "contact" },
    { label: "About Us", section: "about" },
  ];

  const handleMenuClick = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                data-testid="button-menu-toggle"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                LegalHelp AI
              </h1>
            </div>

            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute left-0 top-16 bottom-0 w-72 bg-card border-r border-card-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="p-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleMenuClick(item.section)}
                  className="w-full text-left px-4 py-3 rounded-lg hover-elevate active-elevate-2 text-foreground font-medium transition-all"
                  data-testid={`link-${item.section}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
