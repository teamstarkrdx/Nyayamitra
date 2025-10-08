import AnimatedBackground from '../AnimatedBackground';

export default function AnimatedBackgroundExample() {
  return (
    <div className="relative h-screen">
      <AnimatedBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-foreground">Animated Background</h1>
      </div>
    </div>
  );
}
