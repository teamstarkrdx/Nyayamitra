import { useState } from "react";
import RightsModal from '../RightsModal';
import { Button } from "@/components/ui/button";
import { ThemeProvider } from '../ThemeProvider';
import AnimatedBackground from '../AnimatedBackground';

export default function RightsModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider>
      <AnimatedBackground />
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Open Rights Modal</Button>
        <RightsModal open={open} onOpenChange={setOpen} />
      </div>
    </ThemeProvider>
  );
}
