interface OnboardingHeroProps {
  onStart: () => void;
}

const OnboardingHero = ({ onStart }: OnboardingHeroProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-sm text-orange-500 font-medium">
            Quick Setup. Personalized Experience.
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
          Start Your Journey{" "}
          <span className="custom-gradient">in Seconds</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-4">
          Tell us a few things about you, and we'll set up your experience instantly.
        </p>

        <p className="text-muted-foreground mb-12">
          No long forms. No confusion. Just clear direction.
        </p>

        <button
          className="px-12 py-4 rounded-lg bg-orange-500 text-primary-foreground font-display font-semibold text-lg glow-orange hover:bg-orange-500/90 transition-colors"
          onClick={onStart}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default OnboardingHero;
