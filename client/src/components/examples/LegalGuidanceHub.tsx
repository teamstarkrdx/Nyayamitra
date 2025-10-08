import LegalGuidanceHub from '../LegalGuidanceHub';
import { ThemeProvider } from '../ThemeProvider';
import AnimatedBackground from '../AnimatedBackground';

export default function LegalGuidanceHubExample() {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <LegalGuidanceHub onCategoryClick={(id) => console.log('Category clicked:', id)} />
    </ThemeProvider>
  );
}
