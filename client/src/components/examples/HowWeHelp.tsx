import HowWeHelp from '../HowWeHelp';
import { ThemeProvider } from '../ThemeProvider';
import AnimatedBackground from '../AnimatedBackground';

export default function HowWeHelpExample() {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <HowWeHelp />
    </ThemeProvider>
  );
}
