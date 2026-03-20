import { Brain, Gauge, TrendingUp, Target, Users } from "lucide-react";

const metrics = [
    { icon: Gauge, label: "Grit Score" },
    { icon: TrendingUp, label: "Learning Velocity" },
    { icon: Target, label: "Consistency" },
    { icon: Brain, label: "Problem-Solving" },
    { icon: Users, label: "Collaboration" },
];

const filters = [
    "Top percentile Grit Score",
    "High Velocity in Backend",
    "Consistent full-stack performers",
    "Scalability challengers",
];

const SkillDNASection = () => {
    return (
        <section className="py-15 px-6 md:px-12 bg-zinc-900/30">
            <div className="max-w-5xl mx-auto">
                <p className="text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase mb-4">02 — Skill DNA Intelligence</p>
                <div className="line-accent mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Beyond <span className="custom-gradient">Static Resumes</span>
                </h2>
                <p className="text-muted-foreground max-w-lg mb-14 leading-relaxed">
                    Measurable learning intelligence behavior, persistence, and adaptability.
                </p>

                <div className="flex flex-wrap gap-2 mb-12">
                    {metrics.map((m) => (
                        <div key={m.label} className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-zinc-950 hover:bg-muted-foreground/10 transition-colors duration-300">
                            <m.icon className="w-3.5 h-3.5 text-orange-500" />
                            <span className="text-sm font-semibold">{m.label}</span>
                        </div>
                    ))}
                </div>

                <div className="p-5 rounded-xl bg-card">
                    <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-4">Advanced Filters</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                        {filters.map((f) => (
                            <div key={f} className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300">
                                <span className="w-1 h-1 rounded-full bg-orange-500 shrink-0" />
                                <span className="text-sm text-muted-foreground">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillDNASection;
