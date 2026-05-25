"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useTransform,
  useMotionValue,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Zap,
  TrendingUp,
  Users,
  Clock,
  MessageSquare,
  Brain,
  Shield,
} from "lucide-react";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ── Scroll Progress ──────────────────────────────────── */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-0.5 bg-orange-500 origin-left z-50"
    />
  );
}

/* ── Word Reveal ──────────────────────────────────────── */
function Reveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <span ref={ref} className={`inline ${className}`}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden mr-1 last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "105%", skewY: 2 }}
            animate={inView ? { y: 0, skewY: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.07, ease }}>
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ── Fade In ──────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  from = "bottom",
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  from?: "bottom" | "left" | "right";
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const init =
    from === "left"
      ? { opacity: 0, x: -20 }
      : from === "right"
        ? { opacity: 0, x: 20 }
        : { opacity: 0, y: 20 };
  return (
    <motion.div
      ref={ref}
      initial={init}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease }}
      className={className}>
      {children}
    </motion.div>
  );
}

/* ── Section Label ────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-black uppercase tracking-widest text-orange-500 mb-3">
      {children}
    </p>
  );
}

/* ── Section Divider ──────────────────────────────────── */
function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-8 md:px-14">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        className="h-px bg-linear-to-r from-transparent via-border to-transparent origin-left"
      />
    </div>
  );
}

/* ── Data ─────────────────────────────────────────────── */
const problems = [
  {
    stat: "85–90%",
    title: 'The "Completion Gap"',
    desc: "Online courses see massive dropout rates due to lack of external pressure. We provide strict monitoring and continuous engagement to create the accountability of a physical classroom.",
    icon: TrendingUp,
  },
  {
    stat: "Theory ≠ Skills",
    title: 'The "Theory vs. Practice" Divide',
    desc: "Many learners pass multiple-choice tests but cannot apply knowledge to real-world scenarios. Problem-solving exercises and an online portfolio ensure skills are demonstrated, not just memorized.",
    icon: Brain,
  },
  {
    stat: "0% Proof",
    title: 'The "Is Anyone Paying Attention?" Problem',
    desc: "It's often impossible to verify if a learner is genuinely engaged or just letting a video play. We use attention checks and track attentive points to provide real-time engagement metrics.",
    icon: Target,
  },
  {
    stat: "Untrusted",
    title: 'The "Skill Verification Crisis" for Recruiters',
    desc: "Standard certificates often don't prove competency. We provide verified digital badges and track points for logical thinking and creativity to give recruiters proof of actual ability.",
    icon: Shield,
  },
  {
    stat: "Lonely",
    title: 'The "Isolation" of Digital Learning',
    desc: "Online learners often feel alone, leading to frustration and dropout. We foster a support system where users can connect and discuss with co-learners and mentors.",
    icon: Users,
  },
];

const dnaItems = [
  {
    icon: Zap,
    name: "Grit & Persistence",
    desc: "Measures the ability to persevere through difficult challenges without giving up.",
  },
  {
    icon: Users,
    name: "Collaboration Index",
    desc: "Tracks how effectively a learner works with others and contributes to the community.",
  },
  {
    icon: TrendingUp,
    name: "Learning Velocity",
    desc: "Measures how quickly a learner acquires and masters new, complex concepts.",
  },
  {
    icon: MessageSquare,
    name: "Communication Clarity",
    desc: "Assesses the ability to articulate questions and solutions clearly to teammates and clients.",
  },
  {
    icon: Clock,
    name: "Consistency Quotient",
    desc: "Rewards steady, reliable effort over time rather than sporadic bursts of activity.",
  },
  {
    icon: Brain,
    name: "Problem-Solving Methodology",
    desc: "Analyzes how a learner solves problems — methodical and data-driven, or creative brainstormer.",
  },
];

const flowSteps = [
  { label: "Passive Learner", sub: "Starting point", highlight: false },
  { label: "Structured Rigor", sub: "Accountability system", highlight: false },
  { label: "Skill DNA Tracking", sub: "Performance data", highlight: false },
  {
    label: "Verified Competence",
    sub: "Evidence-backed skills",
    highlight: false,
  },
  { label: "Industry-Ready", sub: "Goal achieved", highlight: true },
];

/* ── Problem Card ─────────────────────────────────────── */
function ProblemCard({
  item,
  index,
}: {
  item: (typeof problems)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const inView = useInView(ref, { once: true, margin: "-5%" });

  // Creates a dynamic spotlight tied to mouse coordinates
  const background = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `radial-gradient(400px circle at ${latestX}px ${latestY}px, color-mix(in srgb, var(--color-orange-500) 120%, transparent), transparent 50%)`,
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group relative flex flex-col w-full h-full rounded-3xl border border-border/40 bg-card/5 hover:border-orange-500/40 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-lg shadow-orange-500/20">
      {/* Dynamic Spotlight */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background }}
      />

      {/* Ghost Number Content */}
      <div className="absolute -top-4 -right-2 text-8xl md:text-9xl font-black text-foreground/5 leading-none select-none pointer-events-none transition-all duration-700 group-hover:text-foreground/5 group-hover:-translate-y-2 group-hover:-translate-x-2">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative z-10 p-8 flex flex-col h-full">
        {/* Top visual indicator */}
        <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-500 shadow-sm shrink-0">
          <item.icon className="text-orange-500 w-6 h-6" />
        </div>

        <div className="text-3xl font-black text-orange-500 tabular-nums mb-3 leading-none drop-shadow-sm">
          {item.stat}
        </div>
        <h3 className="text-xl font-black text-foreground mb-3 leading-snug">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mt-auto pr-4">
          {item.desc}
        </p>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-orange-500 to-orange-500/40"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5, ease: "circOut" }}
      />
    </motion.div>
  );
}

/* ── Timeline (Snake) Components ──────────────────────── */
function SixDimensionsTimeline({ items }: { items: typeof dnaItems }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative w-full mx-auto py-10 mt-10">
      {/* Central Axis */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/40 -translate-x-1/2 rounded-full" />

      {/* Moving Glowing Line (The Snake) */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-orange-500 -translate-x-1/2 rounded-full origin-top shadow-xl shadow-orange-500 z-10"
      />

      {items.map((item, i) => (
        <TimelineNode key={i} item={item} index={i} isEven={i % 2 === 0} />
      ))}
    </div>
  );
}

function TimelineNode({
  item,
  index,
  isEven,
}: {
  item: (typeof dnaItems)[0];
  index: number;
  isEven: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div
      ref={ref}
      className="relative flex items-center mb-12 last:mb-0 w-full group">
      {/* Node pin */}
      <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-orange-500 -translate-x-1/2 z-20 transition-colors duration-500">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.3, type: "spring" }}
          className="w-full h-full bg-orange-500 rounded-full shadow-lg shadow-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Responsive horizontal connector line (from center to card) */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className={`absolute hidden md:block top-1/2 h-px bg-border/40 group-hover:bg-orange-500/50 transition-colors z-0 ${
          isEven ? "right-1/2 origin-right w-16" : "left-1/2 origin-left w-16"
        }`}
      />

      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40, y: 30 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className={`w-full md:w-5/12 pl-24 md:pl-0 ${isEven ? "md:mr-auto" : "md:ml-auto"}`}>
        <div className="p-7 md:p-8 rounded-3xl border border-border/30 bg-card/5 hover:bg-card/30 hover:shadow-lg hover:border-orange-500/40 transition-all duration-300 relative overflow-hidden">
          {/* Subtle hover background highlight */}
          <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="flex items-center gap-5 mb-5 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-background border border-border/40 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-colors shadow-sm shrink-0">
              <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-orange-500 transition-colors" />
            </div>
            <div>
              <span className="text-xs font-black tracking-widest uppercase text-orange-500/60 block mb-1">
                Dimension 0{index + 1}
              </span>
              <h3 className="text-xl font-black text-foreground">
                {item.name}
              </h3>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm relative z-10">
            {item.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Premium Stepper Flow ────────────────────────────── */
function PremiumStepper({ steps }: { steps: typeof flowSteps }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end center"],
  });
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div
      ref={ref}
      className="relative py-8 md:py-12 px-2 overflow-x-hidden md:overflow-x-visible">
      {/* Background horizontal line */}
      <div className="absolute top-20 md:top-24 left-10 right-10 h-0.5 bg-border/30 rounded-full hidden md:block" />

      {/* Animated glowing path */}
      <motion.div
        className="absolute top-20 md:top-24 left-10 right-10 h-0.5 bg-linear-to-r from-orange-500 to-orange-500/60 origin-left shadow-xl shadow-orange-500 rounded-full z-0 hidden md:block"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Connecting line for mobile (vertical) */}
      <div className="absolute left-14 top-10 bottom-10 w-0.5 bg-border/30 block md:hidden" />
      <motion.div
        className="absolute left-14 top-10 bottom-10 w-0.5 bg-orange-500 origin-top block md:hidden shadow-xl shadow-orange-500 z-0"
        style={{ scaleY: scrollYProgress }}
      />

      <div className="relative z-10 flex flex-col md:flex-row justify-between gap-10 md:gap-4 md:px-[10%]">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="flex flex-row md:flex-col items-center md:flex-1 group"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}>
            {/* Diamond Node */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 45 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl shrink-0 rotate-45 border-2 flex items-center justify-center mr-6 md:mr-0 md:mb-8 bg-card transition-all duration-300 relative z-10 ${
                step.highlight
                  ? "border-orange-500 shadow-2xl shadow-orange-500/40 bg-orange-500/5"
                  : "border-border/60 group-hover:border-orange-500/50 group-hover:bg-orange-500/10"
              }`}>
              <div
                className={`-rotate-45 font-black text-lg md:text-xl tabular-nums ${step.highlight ? "text-orange-500" : "text-muted-foreground group-hover:text-foreground transition-colors"}`}>
                0{i + 1}
              </div>
            </motion.div>

            <div className="text-left md:text-center w-full max-w-xs md:max-w-none">
              <h4
                className={`text-base md:text-lg font-black mb-1.5 leading-tight ${step.highlight ? "text-orange-500 drop-shadow-sm" : "text-foreground"}`}>
                {step.label}
              </h4>
              <p className="text-xs md:text-xs text-muted-foreground uppercase font-bold tracking-widest">
                {step.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Hover Glow Card ────────────────────────────────────── */
function HoverGlowCard({
  children,
  className,
  innerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={{
        initial: { scale: 1, y: 0 },
        hover: {
          scale: 1.01,
          y: -4,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      }}
      className={`group relative rounded-3xl overflow-hidden h-full hover:shadow-2xl shadow-orange-500/30 transition-all duration-500 ${className || ""}`}>
      {/* Static Border */}
      <div className="absolute inset-0 bg-border/40 rounded-3xl z-0 transition-colors duration-500 group-hover:bg-orange-500/20" />

      {/* Animated Glow Border Wrapper */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-3xl pointer-events-none">
        {/* Soft, Wide Blurred Glow */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-\[w-100\] h-\[h-100\] blur-xl opacity-80"
          style={{
            backgroundImage:
              "conic-gradient(from 0deg, transparent 0 250deg, color-mix(in srgb, var(--color-orange-500) 70%, transparent) 320deg, var(--color-orange-500) 360deg)",
          }}
        />

        {/* Crisp Intense Line */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-\[w-100\] h-\[h-100\]"
          style={{
            backgroundImage:
              "conic-gradient(from 0deg, transparent 0 280deg, color-mix(in srgb, var(--color-orange-500) 80%, transparent) 330deg, var(--color-orange-500) 360deg)",
          }}
        />
      </div>

      {/* Inner Mask solid background */}
      <div className="absolute inset-0.5 z-0 rounded-2xl bg-background transition-colors duration-500 pointer-events-none group-hover:bg-background/95" />

      {/* Optional Inner Overlay */}
      {innerClassName && (
        <div
          className={`absolute inset-0.5 z-0 rounded-2xl pointer-events-none ${innerClassName}`}
        />
      )}

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function MissionPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);
  if (!mounted) return null;

  return (
    <div className="bg-background text-foreground antialiased overflow-x-hidden">
      <ScrollProgress />
      <SiteHeader />

      {/* ════════════════════════════════════════
          ROW 1 — HERO: MISSION & VISION SPLIT
      ════════════════════════════════════════ */}
      <section className="relative pt-28 pb-20 px-8 md:px-14 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left — Mission */}
            <HoverGlowCard>
              <div className="relative flex flex-col justify-between p-10 md:p-14 h-full overflow-hidden">
                {/* Giant Hover Watermark */}
                <motion.div
                  variants={{
                    initial: {
                      opacity: 0,
                      scale: 0.5,
                      rotate: -45,
                      x: "-20%",
                      y: "20%",
                    },
                    hover: {
                      opacity: 0.04,
                      scale: 1.5,
                      rotate: -15,
                      x: "10%",
                      y: "-10%",
                      transition: { duration: 0.7, ease: "easeOut" },
                    },
                  }}
                  className="absolute -right-10 -bottom-10 pointer-events-none text-orange-500 z-0">
                  <Zap size={350} strokeWidth={1} />
                </motion.div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="flex items-center gap-3 mb-10">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="block w-3 h-3 border-2 border-orange-500 rounded-sm"
                    />
                    <span className="text-xs font-black uppercase tracking-widest text-orange-500">
                      Our Mission
                    </span>
                  </motion.div>

                  <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tighter mb-8">
                    {["Theory meets", "Practice."].map((line, i) => (
                      <div key={i} className="overflow-hidden">
                        <motion.div
                          initial={{ y: "110%" }}
                          animate={{ y: 0 }}
                          transition={{
                            duration: 0.7,
                            delay: 0.1 + i * 0.1,
                            ease,
                          }}
                          className={i === 1 ? "text-orange-500" : ""}>
                          {line}
                        </motion.div>
                      </div>
                    ))}
                  </h1>

                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.4 }}
                    className="text-base text-muted-foreground leading-relaxed max-w-sm">
                    To bridge the{" "}
                    <strong className="text-foreground">
                      &quot;Theory vs. Practice&quot;
                    </strong>{" "}
                    divide in digital learning by creating an accountable,
                    evidence-based environment where completion actually means
                    competence — through Natural Intelligence, strict
                    monitoring, and continuous engagement.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65 }}
                  variants={{
                    hover: {
                      x: 10,
                      backgroundColor:
                        "color-mix(in srgb, var(--color-orange-500) 10%, transparent)",
                      borderColor:
                        "color-mix(in srgb, var(--color-orange-500) 40%, transparent)",
                    },
                  }}
                  className="relative z-10 mt-10 flex items-center gap-3 border border-border/40 rounded-xl px-4 py-3 w-fit transition-colors duration-300">
                  <motion.div
                    variants={{ hover: { rotate: 15, scale: 1.2 } }}
                    transition={{ duration: 0.3 }}>
                    <Zap size={14} className="text-orange-500 shrink-0" />
                  </motion.div>
                  <span className="text-sm font-bold text-foreground">
                    We engineer competence.
                  </span>
                </motion.div>
              </div>
            </HoverGlowCard>

            {/* Right — Vision */}
            <HoverGlowCard innerClassName="bg-secondary/5">
              <div className="relative flex flex-col justify-between p-10 md:p-14 h-full overflow-hidden">
                {/* Giant Hover Watermark */}
                <motion.div
                  variants={{
                    initial: {
                      opacity: 0,
                      scale: 0.5,
                      rotate: 45,
                      x: "20%",
                      y: "20%",
                    },
                    hover: {
                      opacity: 0.04,
                      scale: 1.5,
                      rotate: 15,
                      x: "-10%",
                      y: "-10%",
                      transition: { duration: 0.7, ease: "easeOut" },
                    },
                  }}
                  className="absolute -left-10 -bottom-10 pointer-events-none text-orange-500 z-0">
                  <Target size={350} strokeWidth={1} />
                </motion.div>

                <div className="absolute bottom-6 right-6 text-8xl font-black text-foreground/5 leading-none select-none tracking-tighter"></div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.15 }}
                    className="flex items-center gap-3 mb-10">
                    <Target size={13} className="text-orange-500" />
                    <span className="text-xs font-black uppercase tracking-widest text-orange-500">
                      Our Vision
                    </span>
                  </motion.div>

                  <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tighter mb-8">
                    {["The global", "benchmark."].map((line, i) => (
                      <div key={i} className="overflow-hidden">
                        <motion.div
                          initial={{ y: "110%" }}
                          animate={{ y: 0 }}
                          transition={{
                            duration: 0.7,
                            delay: 0.22 + i * 0.1,
                            ease,
                          }}>
                          {line}
                        </motion.div>
                      </div>
                    ))}
                  </h2>

                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.5 }}
                    className="text-base text-muted-foreground leading-relaxed max-w-sm">
                    To be the global benchmark for &quot;Natural
                    Intelligence&quot; in education — where every learner&apos;s
                    journey is defined by verified grit, logic, and practical
                    mastery rather than passive participation. A future where
                    recruiters, institutions, and guardians have{" "}
                    <strong className="text-foreground">
                      total transparency and trust
                    </strong>{" "}
                    in digital credentials.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  variants={{
                    hover: {
                      x: 10,
                      backgroundColor:
                        "color-mix(in srgb, var(--color-orange-500) 150%, transparent)",
                      borderColor:
                        "color-mix(in srgb, var(--color-orange-500) 50%, transparent)",
                    },
                  }}
                  className="relative z-10 mt-10 flex items-center gap-3 border border-orange-500/20 bg-orange-500/5 rounded-xl px-4 py-3 w-fit transition-colors duration-300">
                  <motion.div
                    variants={{ hover: { rotate: -15, scale: 1.2 } }}
                    transition={{ duration: 0.3 }}>
                    <Target size={14} className="text-orange-500 shrink-0" />
                  </motion.div>
                  <span className="text-sm font-bold text-foreground">
                    Powered by{" "}
                    <span className="text-orange-500">
                      Grit, Logic &amp; Consistency
                    </span>
                  </span>
                </motion.div>
              </div>
            </HoverGlowCard>
          </div>
        </div>
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          ROW 2 — PROBLEMS WE SOLVE
      ════════════════════════════════════════ */}
      <section className="py-24 px-8 md:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 mb-16 items-end">
            <div>
              <Label>Problems We Solve</Label>
              <Reveal
                text="Engineered to Fix Real Pain Points"
                className="text-3xl md:text-4xl font-black text-foreground leading-tight"
              />
            </div>
            <FadeIn from="right" delay={0.15}>
              <p className="text-base text-muted-foreground leading-relaxed">
                Traditional online learning is plagued by low completion rates
                and a lack of trust from employers. CyberDude.app was engineered
                to fix these specific, measurable pain points.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {problems.map((item, i) => (
              <div
                key={i}
                className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
                <ProblemCard item={item} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          ROW 3 — SKILL DNA BANNER
      ════════════════════════════════════════ */}
      <section className="bg-orange-500 relative overflow-hidden py-16 px-8 md:px-14">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-orange-50/8"
              style={{ left: `${10 + i * 15}%` }}
              initial={{ scaleY: 0, originY: i % 2 === 0 ? 0 : 1 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.07, ease }}
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.span
            animate={{ x: [0, -35, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="text-9xl font-black text-orange-50/5 whitespace-nowrap tracking-tighter">
            SKILL DNA
          </motion.span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-widest text-orange-50/45 mb-4">
            Our Methodology
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="text-4xl md:text-5xl font-black text-orange-50 leading-tight tracking-tighter">
              The Skill DNA
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-orange-50/55 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            A professional is more than a list of technical skills. Skill DNA
            tracks behavioral and cognitive scores that show recruiters the{" "}
            <strong className="text-orange-50">true potential</strong> of a
            candidate.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ROW 4 — SKILL DNA DIMENSIONS
      ════════════════════════════════════════ */}
      <section className="py-24 px-8 md:px-14 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 mb-14 items-end">
            <div>
              <Label>What We Track</Label>
              <Reveal
                text="Six Dimensions of Excellence"
                className="text-3xl md:text-4xl font-black text-foreground leading-tight"
              />
            </div>
            <FadeIn from="right" delay={0.15}>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every interaction on the platform contributes to a
                learner&apos;s Skill DNA profile — a live, verified record of
                how they actually think, work, and collaborate.
              </p>
            </FadeIn>
          </div>

          <SixDimensionsTimeline items={dnaItems} />
        </div>
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          ROW 5 — PROGRESS FLOW
      ════════════════════════════════════════ */}
      <section className="py-24 px-8 md:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 pb-5 border-b border-border/25">
            <div>
              <Label>The Journey</Label>
              <Reveal
                text="Your Progress Flow"
                className="text-3xl md:text-4xl font-black text-foreground"
              />
            </div>
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "backOut" }}
              className="hidden md:block text-8xl font-black text-foreground/5 leading-none select-none">
              05
            </motion.span>
          </div>

          <PremiumStepper steps={flowSteps} />
        </div>
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          ROW 6 — CTA
      ════════════════════════════════════════ */}
      <section className="py-28 px-8 md:px-14 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="relative border border-border/35 rounded-2xl p-12 md:p-16 overflow-hidden">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl border border-orange-500/20"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-10 justify-between">
              <div className="max-w-xl">
                <Label>Start Your Journey</Label>
                <Reveal
                  text="Ready to prove your competence?"
                  className="text-3xl md:text-5xl font-black text-foreground leading-tight"
                />
                <FadeIn delay={0.2}>
                  <p className="text-muted-foreground text-base mt-4 leading-relaxed">
                    Stop collecting certificates. Start building real,
                    verifiable skills that recruiters can trust — backed by
                    Skill DNA, not just a completion badge.
                  </p>
                </FadeIn>
              </div>

              <FadeIn from="right" delay={0.25} className="shrink-0">
                <div className="flex flex-col gap-3">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 bg-orange-500 text-orange-50 px-8 py-4 rounded-full font-black text-sm">
                    Build Your Skill DNA <ArrowRight size={15} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="inline-flex items-center gap-2 border border-border/50 text-foreground px-8 py-4 rounded-full font-bold text-sm hover:border-orange-500/40 transition-colors justify-center">
                    See How It Works <ArrowUpRight size={13} />
                  </motion.button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
