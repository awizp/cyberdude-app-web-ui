import React from "react";
import AboutSectionData from "@/data/AboutSectionData";

function Page() {
  return (
    <div>
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-8">
          <div className="text-center mb-10">
                <span className="text-primary text-sm font-semibold uppercase tracking-widest block mb-3">
                  About CyberDude
                </span>

                <h2 className="text-4xl md:text-5xl font-bold custom-gradient">
                  Who We Are
                </h2>
              </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
                Closing the{" "}
                <span className="text-gradient">Completion Gap</span> in
                Education
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Unlike conventional platforms that focus solely on content
                delivery, CyberDude builds accountable, performance-driven
                learning ecosystems. We combine structured training, real-time
                tracking, and behavioral analytics to produce professionals who
                are genuinely industry-ready.
              </p>

              <div className="glass rounded-xl p-6 border-l-4 border-primary">
                <p className="text-sm text-muted-foreground italic mb-2">
                  Founded by
                </p>

                <h4 className="font-display font-bold text-lg text-foreground">
                  Anbuselvan Annamalai
                </h4>

                <p className="text-muted-foreground text-sm mt-1">
                  Visionary entrepreneur championing{" "}
                  <strong className="text-foreground">
                    Natural Intelligence
                  </strong>{" "}
                  — structured environments that naturally encourage discipline,
                  consistency, and performance.
                </p>
              </div>
            </div>

            {/* Right - Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {AboutSectionData.map((f, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-6 hover:border-glow transition-colors group"
                >
                  <f.icon
                    className="text-primary mb-4 group-hover:scale-110 transition-transform"
                    size={28}
                  />

                  <h3 className="font-display font-semibold mb-2 text-foreground">
                    {f.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
