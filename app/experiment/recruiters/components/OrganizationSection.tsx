import { Globe, Briefcase, History, Star } from "lucide-react";

const features = [
    { icon: Globe, title: "Brand Positioning", desc: "Company overview, Remote-first, Research-driven, Fast-paced." },
    { icon: Briefcase, title: "Active Openings", desc: "Post job openings aligned with current skill programs." },
    { icon: History, title: "Engagement History", desc: "Track your hiring journey and build lasting relationships." },
    { icon: Star, title: "Employer Visibility", desc: "Transparent engagement record based on interactions and feedback." },
];

const OrganizationSection = () => {
    return (
        <section className="py-24 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <p className="text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase mb-4">01 — Organization Profiles</p>
                <div className="line-accent mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Establish Your <span className="custom-gradient">Employer Presence</span>
                </h2>
                <p className="text-muted-foreground max-w-lg mb-14 leading-relaxed">
                    Build a structured Employer Hub. Position your organization within a verified talent network.
                </p>

                <div className="grid md:grid-cols-2 gap-3">
                    {features.map((f) => (
                        <div key={f.title} className="group flex items-start gap-4 p-5 rounded-xl bg-zinc-950 hover:bg-muted-foreground/10 transition-colors duration-300">
                            <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500/15 transition-colors duration-300">
                                <f.icon className="w-4 h-4 text-orange-500" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">{f.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OrganizationSection;
