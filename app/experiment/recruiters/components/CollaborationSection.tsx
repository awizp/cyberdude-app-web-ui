import { Lightbulb, FolderKanban, BarChart3, MessageCircle } from "lucide-react";

const items = [
    { icon: Lightbulb, title: "Skill Demands", text: "Suggest emerging skills aligned with industry." },
    { icon: FolderKanban, title: "Project Themes", text: "Recommend themes matching real-world needs." },
    { icon: BarChart3, title: "Hiring Feedback", text: "Provide structured feedback to improve quality." },
    { icon: MessageCircle, title: "Curriculum Advisory", text: "Participate in shaping future programs." },
];

const CollaborationSection = () => {
    return (
        <section className="py-24 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <p className="text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase mb-4">07 — Strategic Collaboration</p>
                <div className="line-accent mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Shape the <span className="custom-gradient">Talent Pipeline</span>
                </h2>
                <p className="text-muted-foreground max-w-lg mb-14 leading-relaxed">
                    Influence curriculum direction through structured collaboration.
                </p>

                <div className="grid grid-cols-2 gap-3">
                    {items.map((c) => (
                        <div key={c.title} className="group flex items-start gap-3 p-5 rounded-xl bg-zinc-950 hover:bg-muted-foreground/10 transition-colors duration-300">
                            <c.icon className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold mb-0.5">{c.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollaborationSection;
