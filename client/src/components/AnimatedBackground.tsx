export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse-glow" />
      
      {/* Large pulsing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }} />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-lg animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-float-slow" />
      <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-pink-500/20 rotate-45 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-blue-500/20 rounded-lg animate-float-slow" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-20 right-1/3 w-18 h-18 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-2/3 left-1/4 w-12 h-12 bg-pink-500/20 rotate-12 animate-float-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/4 left-2/3 w-16 h-16 bg-blue-500/20 rounded-lg animate-float" style={{ animationDelay: '2.5s' }} />
      <div className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-purple-500/20 rounded-full animate-float-slow" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/2 right-1/3 w-14 h-14 bg-pink-500/20 rotate-45 animate-float" style={{ animationDelay: '3.5s' }} />
      <div className="absolute bottom-1/4 left-20 w-22 h-22 bg-blue-500/20 rounded-lg animate-float-slow" style={{ animationDelay: '1.8s' }} />
      <div className="absolute top-3/4 right-1/4 w-16 h-16 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: '2.8s' }} />
      <div className="absolute bottom-1/2 right-10 w-18 h-18 bg-pink-500/20 rotate-12 animate-float-slow" style={{ animationDelay: '0.8s' }} />
    </div>
  );
}
