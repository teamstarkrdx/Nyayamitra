import ChatBot from '../ChatBot';
import { ThemeProvider } from '../ThemeProvider';
import AnimatedBackground from '../AnimatedBackground';

export default function ChatBotExample() {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <div className="p-8">
        <p className="text-muted-foreground">Click the chat icon in the bottom right to open the chatbot</p>
        <ChatBot />
      </div>
    </ThemeProvider>
  );
}
