import { ArrowRight, Search } from "lucide-react";

const RecruitersHero = () => {
  const pointsData = [
    "Live Learning Data",
    "Behavioral Metrics",
    "Project Evidence",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-orange-500/4 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-orange-500/3 blur-[120px]" />

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase mb-8">
          CyberDude Recruitment Ecosystem
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Hire with Confidence.
          <br />
          <span className="custom-gradient">Not Assumptions.</span>
        </h1>

        <p className="text-muted-foreground/70 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Structured access to pre verified, performance backed talent. Move
          beyond resumes and generic portfolios.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <button className="group flex items-center gap-2.5 px-8 py-3.5 bg-orange-500 text-primary-foreground font-semibold text-sm rounded-xl glow-orange-500 hover:brightness-110 transition-all duration-300 cursor-pointer">
            Request Talent Access
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="flex items-center gap-2.5 px-8 py-3.5 bg-secondary text-muted-foreground font-medium text-sm rounded-xl hover:bg-muted transition-colors duration-300 cursor-pointer">
            <Search className="w-4 h-4 text-orange-500" />
            Explore Skill DNA
          </button>
        </div>

        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
          {pointsData.map((point, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-orange-500" />
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitersHero;
