import { ArrowRight, Calendar } from "lucide-react";

const WhyCyberDudeSection = () => {
    return (
        <section className="py-28 px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-3">
                    Build Your <span className="custom-gradient">Verified Pipeline</span>
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-3 leading-relaxed">
                    Measurable, transparent access to industry ready professionals.
                </p>
                <p className="text-muted-foreground/50 text-sm mb-10">
                    Replace guesswork with performance intelligence.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
                    <button className="group flex items-center gap-2.5 px-8 py-3.5 bg-orange-500 text-primary-foreground font-semibold text-sm rounded-xl glow-primary hover:brightness-110 transition-all duration-300 cursor-pointer">
                        Request Recruiter Access
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    <button className="flex items-center gap-2.5 px-8 py-3.5 bg-secondary text-secondary-foreground font-medium text-sm rounded-xl hover:bg-muted transition-colors duration-300 cursor-pointer">
                        <Calendar className="w-4 h-4 text-orange-500" />
                        Schedule a Demo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyCyberDudeSection;
