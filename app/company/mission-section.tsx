"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Rocket,
  Eye,
  ShieldAlert,
  BadgeCheck,
  Users,
  FolderGit2,
  ArrowRight,
} from "lucide-react";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";

// ── Types ─────────────────────────────────────────────────────────────────────

type FlowVariant = "dim" | "mid" | "highlight";

interface Belief {
  icon: React.ElementType;
  number: string;
  title: string;
  desc: string;
}

interface FlowStep {
  label: string;
  sub: string;
  variant: FlowVariant;
}

// ── Static data ───────────────────────────────────────────────────────────────

const beliefs: Belief[] = [
  {
    icon: ShieldAlert,
    number: "01",
    title: "Access is Not Enough",
    desc: "Information is free everywhere, but mastery requires a structured environment and strict accountability.",
  },
  {
    icon: BadgeCheck,
    number: "02",
    title: "Data Over Diplomas",
    desc: "A certificate shows you finished; our Skill DNA™ shows how you think, how fast you learn, and how hard you work.",
  },
  {
    icon: Users,
    number: "03",
    title: "No One Learns in a Vacuum",
    desc: "Mentorship and community are the catalysts that turn frustration into breakthroughs.",
  },
  {
    icon: FolderGit2,
    number: "04",
    title: "Proof is in the Projects",
    desc: 'We value "show me the code" over "tell me the grade." Every graduate leaves with a verified, live portfolio.',
  },
];

const flow: FlowStep[] = [
  { label: "Passive Learner", sub: "Starting point", variant: "dim" },
  { label: "CyberDude Rigor", sub: "Accountability system", variant: "mid" },
  { label: "Skill DNA Tracking", sub: "Performance data", variant: "mid" },
  {
    label: "Verified Competence",
    sub: "Evidence-backed skills",
    variant: "mid",
  },
  {
    label: "Industry-Ready Professional",
    sub: "Goal achieved",
    variant: "highlight",
  },
];

// ── Node style lookup ─────────────────────────────────────────────────────────

const nodeClass: Record<FlowVariant, string> = {
  dim: "bg-muted/20 border-border/60 text-muted-foreground",
  mid: "bg-primary/15 border-primary/40 text-primary",
  highlight:
    "bg-primary border-primary text-black shadow-[0_0_18px_rgba(251,146,60,0.55)]",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MissionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const visible = { opacity: 1, y: 0, x: 0 };
  const hiddenY = { opacity: 0, y: 24 };
  const hiddenL = { opacity: 0, x: -40 };
  const hiddenR = { opacity: 0, x: 40 };
  const ease = "easeOut" as const;

  return (
    <div>
      <SiteHeader />

      <section id="mission" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

        <div
          ref={ref}
          className="container mx-auto px-6 md:px-10 max-w-6xl relative"
        >
          {/* Header */}
          <motion.div
            initial={hiddenY}
            animate={inView ? visible : hiddenY}
            transition={{ duration: 0.55, ease, delay: 0 }}
            className="text-center mb-20"
          >
            <span className="text-primary text-xs font-semibold uppercase tracking-widest block mb-3">
              Purpose
            </span>
            <h2 className="text-5xl md:text-6xl font-bold custom-gradient leading-tight mb-4">
              Mission & Vision
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
              Everything we build is rooted in one conviction — competence, not
              credentials, is the true measure of a professional.
            </p>
          </motion.div>

          {/* Mission + Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-24">
            <motion.div
              initial={hiddenL}
              animate={inView ? visible : hiddenL}
              transition={{ duration: 0.6, ease, delay: 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-8 border border-border/50 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-[0_0_32px_rgba(251,146,60,0.2)]"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
              <span className="absolute bottom-3 right-4 text-8xl font-black text-primary/5 select-none leading-none pointer-events-none">
                M
              </span>
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <Rocket size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
                Our Mission
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To bridge the gap between{" "}
                <strong className="text-foreground">"learning about"</strong>{" "}
                and <strong className="text-foreground">"learning how"</strong>{" "}
                by providing a high-accountability digital environment that
                transforms curious beginners into industry-ready professionals.
                We don't just sell courses; we engineer competence through
                discipline, evidence, and support.
              </p>
            </motion.div>

            <motion.div
              initial={hiddenR}
              animate={inView ? visible : hiddenR}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-8 border border-border/50 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-[0_0_32px_rgba(251,146,60,0.2)]"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
              <span className="absolute bottom-3 right-4 text-8xl font-black text-primary/5 select-none leading-none pointer-events-none">
                V
              </span>
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <Eye size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
                Our Vision
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To become the{" "}
                <strong className="text-foreground">
                  global gold standard
                </strong>{" "}
                for skill verification, where a CyberDude Profile is more
                trusted by recruiters than a traditional degree. We envision a
                world where every learner has a clear, data-backed roadmap to
                their dream career, powered by{" "}
                <strong className="text-foreground">
                  Grit, Logic, and Consistency.
                </strong>
              </p>
            </motion.div>
          </div>

          {/* Core Beliefs */}
          <div className="mb-24">
            <motion.div
              initial={hiddenY}
              animate={inView ? visible : hiddenY}
              transition={{ duration: 0.55, ease, delay: 0.1 }}
              className="flex items-center gap-4 mb-10"
            >
              <span className="text-primary text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
                Why We Exist
              </span>
              <div className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground text-xs whitespace-nowrap">
                Core Beliefs
              </span>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {beliefs.map((item, i) => (
                <motion.div
                  key={item.number}
                  initial={hiddenY}
                  animate={inView ? visible : hiddenY}
                  transition={{ duration: 0.5, ease, delay: 0.15 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-xl border border-transparent p-6 flex items-start gap-5 transition-all duration-300 hover:border-primary/25 hover:shadow-[0_0_20px_rgba(251,146,60,0.1)]"
                >
                  <span className="text-4xl font-black text-primary/20 tabular-nums leading-none shrink-0 w-10 text-right">
                    {item.number}
                  </span>
                  <div className="w-px self-stretch bg-border/60 shrink-0" />
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <item.icon size={15} className="text-primary shrink-0" />
                      <h4 className="font-semibold text-sm text-foreground leading-tight">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress Flow */}
          <motion.div
            initial={hiddenY}
            animate={inView ? visible : hiddenY}
            transition={{ duration: 0.55, ease, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-border" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
                The Progress Flow
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="glass rounded-2xl border border-border/40 px-6 py-10">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-0">
                {flow.map((step, i) => (
                  <div
                    key={step.label}
                    className="flex md:flex-col md:flex-1 items-center gap-4 md:gap-0"
                  >
                    <div className="flex md:flex-col items-center gap-4 md:gap-0 flex-1 md:items-center">
                      <div
                        className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-xs font-bold border-2 md:mb-3 ${nodeClass[step.variant]}`}
                      >
                        {i + 1}
                      </div>
                      <div className="md:text-center">
                        <p
                          className={`text-xs font-semibold leading-snug ${step.variant === "highlight" ? "text-primary" : "text-foreground"}`}
                        >
                          {step.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {step.sub}
                        </p>
                      </div>
                    </div>

                    {i < flow.length - 1 && (
                      <ArrowRight
                        size={14}
                        className="shrink-0 text-primary/40 rotate-90 md:rotate-0 md:self-center md:mb-6"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
