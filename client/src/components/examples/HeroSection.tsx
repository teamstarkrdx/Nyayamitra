import HeroSection from '../HeroSection';
import { ThemeProvider } from '../ThemeProvider';
import AnimatedBackground from '../AnimatedBackground';

export default function HeroSectionExample() {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <HeroSection
        onOpenChat={() => console.log('Open chat')}
        onViewRights={() => console.log('View rights')}
      />
    </ThemeProvider>
  );
}
