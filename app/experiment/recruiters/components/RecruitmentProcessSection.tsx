import { CheckCircle2, Send, Zap, Trophy } from "lucide-react";

const stages = [
    { icon: CheckCircle2, name: "Ready to Hire", step: "01" },
    { icon: Send, name: "Interview Requested", step: "02" },
    { icon: Zap, name: "Skill Challenge", step: "03" },
    { icon: Trophy, name: "Hired", step: "04" },
];

const RecruitmentProcessSection = () => {

    const pointsData = ["Interview Invitations", "Skill Challenges", "Custom Evaluations"];

    return (
        <section className="py-24 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <p className="text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase mb-4">03 — Recruitment Workflow</p>
                <div className="line-accent mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    A Controlled, <span className="custom-gradient">Transparent Pipeline</span>
                </h2>
                <p className="text-muted-foreground max-w-lg mb-14 leading-relaxed">
                    Integrated workflow designed to streamline decision-making. Each transition is documented and traceable.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch gap-2 mb-10">
                    {stages.map((s, i) => (
                        <div key={s.name} className="group flex-1 relative p-5 rounded-xl bg-zinc-950 hover:bg-muted-foreground/10 transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-2">
                                <s.icon className="w-4 h-4 text-orange-500" />
                                <span className="text-sm font-bold text-muted-foreground tracking-widest">{s.step}</span>
                            </div>
                            <h3 className="font-semibold">{s.name}</h3>
                            {i < stages.length - 1 && (
                                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-px bg-border z-10" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2">
                    {pointsData.map((point, idx) => (
                        <span key={idx} className="px-4 py-2 rounded-lg bg-zinc-950 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
                            {point}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecruitmentProcessSection;
