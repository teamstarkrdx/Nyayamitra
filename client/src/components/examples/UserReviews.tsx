import UserReviews from '../UserReviews';
import { ThemeProvider } from '../ThemeProvider';
import AnimatedBackground from '../AnimatedBackground';

export default function UserReviewsExample() {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <UserReviews />
    </ThemeProvider>
  );
}
