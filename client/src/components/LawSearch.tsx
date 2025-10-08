import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Scale, BookOpen } from "lucide-react";

interface SearchResult {
  id: string;
  type: string;
  title: string;
  content: string;
}

export default function LawSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) return;

    setIsSearching(true);

    // Mock search results (todo: remove mock functionality - implement AI-powered search)
    setTimeout(() => {
      const mockResults: SearchResult[] = [
        {
          id: "1",
          type: query.toLowerCase().includes('ipc') ? "IPC" : query.toLowerCase().includes('article') ? "Constitution" : "Act",
          title: query.toLowerCase().includes('420') ? "IPC Section 420 - Cheating" : 
                 query.toLowerCase().includes('article 21') ? "Article 21 - Protection of Life and Personal Liberty" :
                 "Related Legal Provision",
          content: "This section/article provides comprehensive legal framework and remedies. The provision ensures protection of citizens' rights under Indian law with specific penalties and procedures outlined."
        },
        {
          id: "2",
          type: "Case Law",
          title: "Relevant Supreme Court Judgments",
          content: "Key precedents and interpretations by the Supreme Court of India that clarify the application and scope of this legal provision."
        }
      ];
      setResults(mockResults);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <section id="law-search" className="py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Law Search Engine
          </h2>
          <p className="text-lg text-muted-foreground">
            Search through Indian Constitution, IPC, CrPC, and major Indian acts
          </p>
        </div>

        <div className="flex gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder='Try "IPC 420", "Article 21", "domestic violence"...'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              className="pl-10 h-12 text-base"
              data-testid="input-law-search"
            />
          </div>
          <Button
            size="lg"
            onClick={handleSearch}
            disabled={isSearching}
            data-testid="button-search-law"
          >
            {isSearching ? "Searching..." : "Search"}
          </Button>
        </div>

        {results.length > 0 && (
          <div className="space-y-4">
            {results.map((result) => (
              <Card key={result.id} className="p-6 hover-elevate transition-all overflow-visible" data-testid={`result-${result.id}`}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    {result.type === "IPC" || result.type === "Constitution" ? (
                      <Scale className="h-6 w-6 text-white" />
                    ) : (
                      <BookOpen className="h-6 w-6 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {result.title}
                      </h3>
                      <span className="text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded">
                        {result.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {result.content}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {results.length === 0 && query && !isSearching && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">
              Enter your search query above to find relevant legal provisions
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
