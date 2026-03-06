import { Eye, UserCheck, Lock } from "lucide-react";

const roles = [
    { icon: Eye, role: "Lead Recruiter", access: "Full visibility across the entire talent pool" },
    { icon: UserCheck, role: "Talent Scout", access: "Restricted to specific programs or batches" },
    { icon: Lock, role: "Institutional", access: "Temporary and controlled viewing rights" },
];

const RecruiterAccessSection = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-zinc-950/30">
            <div className="max-w-5xl mx-auto">
                <p className="text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase mb-4">02 — Access & Governance</p>
                <div className="line-accent mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Secure. Role Based. <span className="custom-gradient">Controlled.</span>
                </h2>
                <p className="text-muted-foreground max-w-lg mb-14 leading-relaxed">
                    Structured role based permissions ensure data integrity and operational security.
                </p>

                <div className="grid sm:grid-cols-3 gap-3">
                    {roles.map((r) => (
                        <div key={r.role} className="group p-5 rounded-xl bg-zinc-950 hover:bg-muted-foreground/10 transition-colors duration-300">
                            <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/15 transition-colors duration-300">
                                <r.icon className="w-4 h-4 text-orange-500" />
                            </div>
                            <h3 className="font-semibold mb-1">{r.role}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{r.access}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default RecruiterAccessSection;
