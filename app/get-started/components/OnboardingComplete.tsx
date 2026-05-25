import { ROLE_OUTCOMES } from "@/app/get-started/data/slideData";

interface OnboardingCompleteProps {
  role: string;
}

const OnboardingComplete = ({ role }: OnboardingCompleteProps) => {
  const outcome = ROLE_OUTCOMES[role] || ROLE_OUTCOMES["Newbie (Learner)"];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
        <span className="text-6xl mb-6 block">{outcome.emoji}</span>

        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          <span className="custom-gradient">{outcome.title}</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          Based on your choices, we&apos;ve prepared your personalized
          experience.
        </p>

        <div className="space-y-3 mb-10 text-left max-w-sm mx-auto">
          {outcome.points.map((point) => (
            <div key={point} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
              <span className="text-sm text-muted-foreground">{point}</span>
            </div>
          ))}
        </div>

        <button className="px-12 py-4 rounded-lg bg-orange-500 text-primary-foreground font-display font-semibold text-lg glow-orange hover:bg-orange-500/90 transition-colors">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default OnboardingComplete;
