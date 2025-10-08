import RightsPreview from '../RightsPreview';
import { ThemeProvider } from '../ThemeProvider';
import AnimatedBackground from '../AnimatedBackground';

export default function RightsPreviewExample() {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <RightsPreview onViewAll={() => console.log('View all rights')} />
    </ThemeProvider>
  );
}
