import { Presentation, Users, Calendar } from "lucide-react";

const events = [
    { icon: Presentation, title: "Virtual Demo Days", desc: "Watch top performers present capstone projects live." },
    { icon: Users, title: "Hiring Sprints", desc: "Rapid interviews with pre-screened candidates." },
    { icon: Calendar, title: "Graduation Showcases", desc: "RSVP to cohorts and receive shortlist reports." },
];

const CareerEventsSection = () => {
    return (
        <section className="py-15 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <p className="text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase mb-4">05 — Hiring Events</p>
                <div className="line-accent mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Engage with <span className="custom-gradient">Top Performers</span>
                </h2>
                <p className="text-muted-foreground max-w-lg mb-14 leading-relaxed">
                    Curated hiring events for high impact, structured interaction.
                </p>

                <div className="grid sm:grid-cols-3 gap-3">
                    {events.map((e) => (
                        <div key={e.title} className="group p-5 rounded-xl bg-zinc-950 hover:bg-muted-foreground/10 transition-colors duration-300">
                            <e.icon className="w-5 h-5 text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="font-semibold mb-1">{e.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareerEventsSection;
