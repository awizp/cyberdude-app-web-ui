export type Persona = "student" | "recruiter" | "organization" | "mentor" | "guardian";

interface PersonaInfo {
    id: Persona;
    label: string;
    icon: string;
    description: string;
}

export const personas: PersonaInfo[] = [
    { id: "student", label: "Student / Learner", icon: "🎓", description: "Get guidance on enrollment and learning paths" },
    { id: "recruiter", label: "Recruiter", icon: "🔍", description: "Access our verified talent pipeline" },
    { id: "organization", label: "Organization", icon: "🏢", description: "Explore bulk licensing & custom training" },
    { id: "mentor", label: "Mentor", icon: "🧑‍🏫", description: "Join our mentorship panel" },
    { id: "guardian", label: "Guardian", icon: "👨‍👩‍👧", description: "Monitor learner progress" },
];

interface PersonaSelectorProps {
    selected: Persona | null;
    onSelect: (persona: Persona) => void;
}

const PersonaSelector = ({ selected, onSelect }: PersonaSelectorProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {personas.map((p) => (
                <button
                    key={p.id}
                    onClick={() => onSelect(p.id)}
                    className={`group relative flex flex-col items-center gap-2 rounded-lg border p-4 text-center transition-all duration-300 cursor-pointer
            ${selected === p.id
                            ? "border-orange-500 bg-orange-500/10 glow-orange"
                            : "border-border bg-card hover:border-orange-500/40 hover:bg-secondary"
                        }`}
                >
                    <span className="text-2xl">{p.icon}</span>
                    <span className={`text-sm font-display font-semibold transition-colors ${selected === p.id ? "text-orange-500" : "text-foreground"}`}>
                        {p.label}
                    </span>
                    <span className="text-xs text-muted-foreground leading-tight">{p.description}</span>
                    {selected === p.id && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-orange-500 animate-pulse-glow" />
                    )}
                </button>
            ))}
        </div>
    );
};

export default PersonaSelector;
