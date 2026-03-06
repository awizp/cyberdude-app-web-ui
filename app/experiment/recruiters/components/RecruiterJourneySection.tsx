const steps = [
    "Establish organization profile",
    "Define hiring focus",
    "Search using Skill DNA",
    "Review performance reports",
    "Issue challenges",
    "Manage pipeline",
    "Hire & feedback",
];

const RecruiterJourneySection = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-zinc-950/30">
            <div className="max-w-5xl mx-auto">
                <p className="text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase mb-4">The Journey</p>
                <div className="line-accent mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    How Recruiters <span className="custom-gradient">Engage</span>
                </h2>
                <p className="text-muted-foreground max-w-lg mb-14 leading-relaxed">
                    A transparent, data backed, and controlled hiring journey.
                </p>

                <div className="flex flex-wrap gap-5">
                    {steps.map((s, i) => (
                        <div key={s} className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-zinc-950 hover:bg-muted-foreground/10 transition-colors duration-300">
                            <span className="text-sm font-bold text-orange-500 tabular-nums">0{i + 1}</span>
                            <span className="text-sm font-medium text-foreground/80">{s}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecruiterJourneySection;
