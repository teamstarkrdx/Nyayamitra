import ContactSection from '../ContactSection';
import { ThemeProvider } from '../ThemeProvider';
import AnimatedBackground from '../AnimatedBackground';

export default function ContactSectionExample() {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <ContactSection />
    </ThemeProvider>
  );
}
