import Header from '../Header';
import { ThemeProvider } from '../ThemeProvider';

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <Header onNavigate={(section) => console.log('Navigate to:', section)} />
      <div className="p-8">
        <p className="text-muted-foreground">Click the menu button to see the navigation</p>
      </div>
    </ThemeProvider>
  );
}
