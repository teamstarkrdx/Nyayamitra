import LawSearch from '../LawSearch';
import { ThemeProvider } from '../ThemeProvider';
import AnimatedBackground from '../AnimatedBackground';

export default function LawSearchExample() {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <LawSearch />
    </ThemeProvider>
  );
}
