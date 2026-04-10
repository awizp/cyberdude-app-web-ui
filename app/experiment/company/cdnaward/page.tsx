"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, Variants, useMotionValue, useTransform, animate } from "framer-motion";
import {
  ShieldCheck,
  Flame,
  Zap,
  ArrowRight,
  Target,
  Trophy,
  Eye,
  Github,
  ExternalLink,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";

/* ───── Animated Counter ───── */
function AnimatedCounter({ target, duration = 2, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, { duration, ease: "easeOut" });
    return controls.stop;
  }, [isInView, count, target, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  );
}

/* ───── Gradient Divider ───── */
function GradientDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  return (
    <div ref={ref} className="overflow-hidden py-1">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-px w-full origin-left"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(39 95% 53% / 0.4), hsl(39 95% 53% / 0.6), hsl(39 95% 53% / 0.4), transparent)",
        }}
      />
    </div>
  );
}

/* ───── Floating Particles ───── */
const PARTICLES = [
  { id: 0, x: 15, y: 20, size: 3, delay: 0, duration: 10 },
  { id: 1, x: 50, y: 55, size: 5, delay: 1.2, duration: 12 },
  { id: 2, x: 82, y: 18, size: 2, delay: 2.8, duration: 9 },
  { id: 3, x: 35, y: 75, size: 4, delay: 0.5, duration: 11 },
  { id: 4, x: 68, y: 35, size: 3, delay: 2, duration: 13 },
  { id: 5, x: 88, y: 65, size: 5, delay: 3.2, duration: 10 },
];

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function AwardsPage() {
  /* Per-section refs */
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const portfolioRef = useRef(null);
  const meritRef = useRef(null);
  const verifiedRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const badgeInView = useInView(badgeRef, { once: true, margin: "-100px" });
  const portfolioInView = useInView(portfolioRef, { once: true, margin: "-100px" });
  const meritInView = useInView(meritRef, { once: true, margin: "-100px" });
  const verifiedInView = useInView(verifiedRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  /* Variants */
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  const fadeInScale: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen font-inter overflow-hidden">
      <SiteHeader />

      {/* ═══════ HERO ═══════ */}
      <section ref={heroRef} className="pt-24 sm:pt-32 pb-12 sm:pb-20 relative">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[100px] pointer-events-none" />
        <FloatingParticles />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center gap-8"
          >
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={heroInView ? { opacity: 0.8, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 sm:mb-6 inline-flex items-center gap-2"
              >
                <Sparkles size={14} className="animate-pulse" />
                Verified Credentials
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] relative"
              >
                <span className="custom-gradient impact-shimmer">
                  Earn More Than <br /> a Certificate.
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-lg"
            >
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed border-l-2 border-primary/30 pl-6 sm:pl-8 text-left hover:border-primary/60 transition-colors duration-500">
                Build a{" "}
                <span className="text-white font-semibold">&quot;Skill DNA&quot;</span>{" "}
                profile that speaks louder than your resume. Every skill
                verified. Every metric earned.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ 01: SKILL DNA BADGE SYSTEM ═══════ */}
      <section ref={badgeRef} className="py-16 sm:py-24 relative bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={badgeInView ? "visible" : "hidden"}
              className="lg:col-span-4 lg:sticky lg:top-32"
            >
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={badgeInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm font-bold text-primary uppercase tracking-widest mb-4"
              >
                01. Smart Badging
              </motion.h2>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">
                The &quot;Skill DNA&quot; <br /> Badge System
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Every milestone earns you a data-rich badge. These aren&apos;t images
                — they are encrypted proofs of your Logic, Consistency, and
                Grit.
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={badgeInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-0.5 w-16 bg-linear-to-r from-primary to-amber-400 mt-6 origin-left rounded-full"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={badgeInView ? "visible" : "hidden"}
              className="lg:col-span-8 space-y-4"
            >
              {[
                { icon: Trophy, title: "Logic Master", copy: "Encrypted proof of problem-solving capability and algorithmic thinking." },
                { icon: Flame, title: "Consistency Index", copy: "Data-backed badge showing uninterrupted learning streaks and daily commitment." },
                { icon: Target, title: "Grit Score", copy: "Measures persistence through high-intensity debugging and complex project phases." },
                { icon: Zap, title: "Focus Velocity", copy: "Tracks speed and deep engagement levels during monitored focus blocks." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInScale}
                  className="group relative bg-[#111] p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-8 rounded-lg overflow-hidden transition-all duration-500 hover:bg-[#161616] impact-card-glow"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-primary via-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-start gap-4 sm:gap-8">
                    <motion.span
                      className="text-2xl sm:text-3xl font-black text-white/5 group-hover:text-primary/30 transition-colors duration-500 shrink-0"
                      whileHover={{ scale: 1.1 }}
                    >
                      0{idx + 1}
                    </motion.span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 tracking-tight group-hover:text-amber-100 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm max-w-md">{item.copy}</p>
                    </div>
                  </div>
                  <motion.div whileHover={{ rotate: 15, scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
                    <item.icon className="text-primary opacity-20 group-hover:opacity-100 transition-all duration-500 mt-1 shrink-0 hidden sm:block group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]" size={32} />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* "The Difference" Callout */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={badgeInView ? "visible" : "hidden"}
            className="mt-10 sm:mt-16 bg-[#111] p-8 sm:p-12 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-primary/20 transition-all duration-500 impact-card-glow"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-primary via-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="absolute top-0 right-0 p-4 sm:p-8 text-white/5 font-black text-6xl sm:text-8xl group-hover:text-primary/10 transition-colors duration-700"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              ≠
            </motion.div>
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-black" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest">The Difference</h4>
                <p className="text-[11px] text-primary/70 font-medium">Competence &gt; Completion</p>
              </div>
            </div>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl">
              While others award{" "}
              <span className="text-white font-semibold">&quot;completion,&quot;</span> we
              award{" "}
              <span className="text-white font-semibold">&quot;competence.&quot;</span>{" "}
              Our badges include metadata of your actual performance scores,
              verified engagement metrics, and cryptographic proofs of
              skill-specific mastery under strict monitoring.
            </p>
          </motion.div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ 02: PROOF-OF-WORK PORTFOLIO ═══════ */}
      <section ref={portfolioRef} className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              className="lg:col-span-6 lg:order-2"
              variants={slideInRight}
              initial="hidden"
              animate={portfolioInView ? "visible" : "hidden"}
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                02. Proof of Work
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 tracking-tight">
                Your Live <br /> Portfolio.
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Ditch the static PDF resume. As you pass our challenges,
                CyberDude automatically builds a live portfolio for you.
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={portfolioInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-px w-32 mb-6 sm:mb-8 origin-left"
                style={{ background: "linear-gradient(90deg, hsl(39 95% 53% / 0.6), transparent)" }}
              />
              <div className="space-y-4">
                {[
                  { icon: Github, text: "Direct links to your GitHub repositories" },
                  { icon: ExternalLink, text: "Live project demos baked into your profile" },
                  { icon: Eye, text: "Ready for instant recruiter inspection" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={portfolioInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.15 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <span className="text-sm text-white/80 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="grid gap-4 sm:gap-6">
                <motion.div
                  variants={fadeInScale}
                  initial="hidden"
                  animate={portfolioInView ? "visible" : "hidden"}
                  className="bg-[#111] p-8 sm:p-12 rounded-2xl relative overflow-hidden group border border-white/5 hover:border-primary/20 transition-all duration-500"
                >
                  <motion.div
                    className="absolute top-0 right-0 p-4 sm:p-8 text-white/5 font-black text-6xl sm:text-8xl group-hover:text-primary/10 transition-colors duration-700"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    100%
                  </motion.div>
                  <h4 className="text-4xl sm:text-5xl font-black text-primary mb-4">
                    <AnimatedCounter target={100} duration={2.5} suffix="%" />
                  </h4>
                  <p className="text-lg sm:text-xl font-bold mb-2 uppercase tracking-tighter">
                    Automated Generation
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm lg:max-w-[80%]">
                    Your portfolio builds itself as you complete challenges.
                    Every project, every deployment, tracked and displayed
                    automatically.
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate={portfolioInView ? "visible" : "hidden"}
                  className="bg-[#111] p-6 sm:p-8 rounded-2xl border border-white/5 group hover:bg-[#161616] hover:border-primary/20 transition-all duration-500 cursor-pointer relative overflow-hidden impact-card-glow"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-primary via-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                        <ShieldCheck size={14} className="text-black" />
                      </div>
                      <span className="font-mono text-xs text-white/60">
                        cyberdude.app/
                        <span className="text-primary">@your_handle</span>
                      </span>
                    </div>
                    <ArrowRight size={14} className="text-white/30 group-hover:text-primary transition-colors shrink-0" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ 03: BEHAVIORAL MERIT POINTS ═══════ */}
      <section ref={meritRef} className="py-20 sm:py-32 bg-[#050505] relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={meritInView ? "visible" : "hidden"}
            className="text-center mb-12 sm:mb-24"
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
              03. Performance Metrics
            </h2>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter">
              Behavioral Merit Points.
            </h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={meritInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              { icon: Eye, title: "Focus Points", sub: "+50 XP per session", copy: "Earned by passing real-time attention checks during deep-learning sessions. Track your engagement intensity." },
              { icon: Target, title: "Solution Finder", sub: "+100 XP per solve", copy: "Earned by debugging complex logic without looking at hints. Pure problem-solving capability verified." },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeInScale}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group bg-[#0a0a0a] p-8 sm:p-12 hover:bg-[#111] transition-all duration-500 flex flex-col justify-between min-h-[300px] sm:min-h-[400px] border border-white/5 hover:border-primary/15 relative overflow-hidden rounded-lg impact-card-glow"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-full" />
                <div>
                  <motion.div whileHover={{ rotate: -10 }} transition={{ type: "spring", stiffness: 250 }}>
                    <card.icon className="text-primary mb-6 sm:mb-8 group-hover:drop-shadow-[0_0_6px_rgba(251,191,36,0.3)] transition-all duration-300" size={32} />
                  </motion.div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{card.title}</h4>
                  <p className="text-sm text-primary/60 font-bold uppercase tracking-tighter mb-3 sm:mb-4 group-hover:text-primary/80 transition-colors">{card.sub}</p>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{card.copy}</p>
                </div>
                <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group cursor-pointer pt-6 sm:pt-8">
                  Learn more{" "}
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Streak Master — full-width callout */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={meritInView ? "visible" : "hidden"}
            className="mt-4 bg-[#0a0a0a] p-8 sm:p-12 hover:bg-[#111] transition-all duration-500 border border-white/5 hover:border-primary/15 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 relative overflow-hidden rounded-lg impact-card-glow"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-primary via-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-start gap-4 sm:gap-8">
              <Flame className="text-primary shrink-0" size={32} />
              <div>
                <h4 className="text-xl sm:text-2xl font-bold mb-2">Streak Master</h4>
                <p className="text-sm text-primary/60 font-bold uppercase tracking-tighter mb-3 sm:mb-4">
                  ∞ Combo multiplier
                </p>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
                  Earned by showing up every day. Consistency is the #1
                  indicator of professional reliability. Your streak is your
                  signal.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group cursor-pointer shrink-0">
              View streaks{" "}
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ 04: VERIFIED SHIELD ═══════ */}
      <section ref={verifiedRef} className="py-16 sm:py-24 relative bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={verifiedInView ? "visible" : "hidden"}
              className="lg:col-span-4 lg:sticky lg:top-32"
            >
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={verifiedInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm font-bold text-primary uppercase tracking-widest mb-4"
              >
                04. The Ultimate Credential
              </motion.h2>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">
                The &quot;Verified&quot; <br /> Shield.
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                The ultimate recognition. Once you complete a career track, your
                profile receives the{" "}
                <span className="text-white font-semibold">CyberDude Verified Status</span>
                , signaling to our network of 100+ hiring partners that you are
                &quot;Day-1 Ready.&quot;
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={verifiedInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-0.5 w-16 bg-linear-to-r from-primary to-amber-400 mt-6 origin-left rounded-full"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={verifiedInView ? "visible" : "hidden"}
              className="lg:col-span-8 space-y-4"
            >
              {[
                { icon: ShieldCheck, title: "CyberDude Verified Status", copy: "Your profile gets a permanent verification badge visible to all hiring partners on the platform. This is the gold standard of employability proof." },
                { icon: Award, title: "Skill Radar Visualization", copy: "Your complete skill profile rendered as a visual radar — Logic, Consistency, Focus, Grit, Collaboration, and Velocity all mapped and scored." },
                { icon: CheckCircle2, title: "Hiring Partner Network", copy: "Once verified, your profile is automatically surfaced to our network of 100+ hiring partner companies actively seeking proven talent." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInScale}
                  className="group relative bg-[#111] p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-8 rounded-lg overflow-hidden transition-all duration-500 hover:bg-[#161616] impact-card-glow"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-primary via-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-start gap-4 sm:gap-8">
                    <motion.span
                      className="text-2xl sm:text-3xl font-black text-white/5 group-hover:text-primary/30 transition-colors duration-500 shrink-0"
                      whileHover={{ scale: 1.1 }}
                    >
                      0{idx + 1}
                    </motion.span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 tracking-tight group-hover:text-amber-100 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm max-w-md">{item.copy}</p>
                    </div>
                  </div>
                  <motion.div whileHover={{ rotate: 15, scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
                    <item.icon className="text-primary opacity-20 group-hover:opacity-100 transition-all duration-500 mt-1 shrink-0 hidden sm:block group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]" size={32} />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ CTA ═══════ */}
      <section ref={ctaRef} className="py-24 sm:py-40 bg-[#050505] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/2 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl font-light tracking-wide text-white/40 max-w-5xl mx-auto leading-relaxed mb-10 sm:mb-16">
              We are building the{" "}
              <motion.span
                className="text-white font-semibold relative inline-block"
                initial={{ opacity: 0 }}
                animate={ctaInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Infrastructure of Proof
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={ctaInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </motion.span>{" "}
              in skill development. Closing the gap between{" "}
              <motion.span
                className="text-white font-semibold relative inline-block"
                initial={{ opacity: 0 }}
                animate={ctaInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                &quot;I completed a course&quot;
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={ctaInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.span>{" "}
              and{" "}
              <motion.span
                className="text-primary font-semibold relative inline-block"
                initial={{ opacity: 0 }}
                animate={ctaInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                &quot;I mastered the skill.&quot;
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={ctaInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </motion.span>
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-primary text-black font-black text-sm uppercase tracking-[0.2em] rounded-full hover:shadow-xl hover:shadow-primary/30 transition-shadow"
            >
              Start Your First Lesson
            </motion.button>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default AwardsPage;
