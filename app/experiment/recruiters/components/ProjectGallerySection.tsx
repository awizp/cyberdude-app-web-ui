import { Play, Code2, Lightbulb, FileText } from "lucide-react";

const items = [
    { icon: Play, label: "Live Demos", desc: "Watch products in action." },
    { icon: Code2, label: "Source Code", desc: "Evaluate coding standards." },
    { icon: Lightbulb, label: "Architecture", desc: "Understand technical choices." },
    { icon: FileText, label: "Reflections", desc: "Read problem-solving methodology." },
];

const ProjectGallerySection = () => {
    return (
        <section className="py-24 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <p className="text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase mb-4">05 — Project Evidence</p>
                <div className="line-accent mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Real Work. <span className="custom-gradient">Real Thinking.</span>
                </h2>
                <p className="text-muted-foreground max-w-lg mb-14 leading-relaxed">
                    Structured project showcases beyond repository links insight into decision-making and system thinking.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {items.map((e) => (
                        <div key={e.label} className="group p-5 rounded-xl bg-zinc-950 hover:bg-muted-foreground/10 transition-colors duration-300 text-center">
                            <e.icon className="w-5 h-5 text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className=" font-semibold mb-1">{e.label}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGallerySection;
