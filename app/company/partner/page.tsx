"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  Variants,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import {
  School,
  Building2,
  ShieldCheck,
  LayoutDashboard,
  Target,
  ArrowRight,
  BarChart3,
  Eye,
  TrendingUp,
  Radar,
  FolderGit2,
  Sparkles,
  Zap,
  Globe,
  Users,
} from "lucide-react";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";
import Image from "next/image";

/* ── Variants outside component to avoid re-creation ── */
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInScale: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ───── Auto-Scroll Marquee (Optimized) ───── */
function MarqueeStrip({ items }: { items: Array<{ name: string; logo: string }> }) {
  // Only double the items for a smooth loop
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden relative h-30 flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform" }}
      >
        {doubled.map((p, i) => (
          <div
            key={i}
            className="relative w-36 h-14 bg-white/5 border p-5 border-white/10 rounded-full overflow-hidden flex shrink-0 hover:border-primary/40 transition-all duration-300 group cursor-default"
          >
            <Image src={p.logo} alt={p.name} fill className="object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ───── Connection Node Graph (Simplified) ───── */
function ConnectionGraph() {
  const nodes = [
    { label: "College", x: 50, y: 10, icon: School },
    { label: "Corporate", x: 85, y: 45, icon: Building2 },
    { label: "Recruiter", x: 65, y: 85, icon: Users },
    { label: "Learner", x: 20, y: 70, icon: Zap },
    { label: "Global", x: 10, y: 30, icon: Globe },
  ];
  const center = { x: 50, y: 50 };
  
  return (
    <div className="relative w-full aspect-square max-w-xs mx-auto">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {nodes.map((n, i) => (
          <line
            key={i}
            x1={center.x} y1={center.y} x2={n.x} y2={n.y}
            stroke="rgba(251,191,36,0.15)" strokeWidth="0.5"
          />
        ))}
        {/* Traveling dots - limited to 3 for performance */}
        {nodes.slice(0, 3).map((n, i) => (
          <motion.circle
            key={`dot-${i}`}
            r="1" fill="rgba(251,191,36,0.6)"
            animate={{
              cx: [center.x, n.x, center.x],
              cy: [center.y, n.y, center.y],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            style={{ willChange: "transform, opacity" }}
          />
        ))}
      </svg>
      {/* Center node */}
      <div
        className="absolute w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.1)]"
        style={{ left: "calc(50% - 24px)", top: "calc(50% - 24px)" }}
      >
        <Sparkles size={18} className="text-primary animate-pulse" />
      </div>
      {/* Outer nodes - Static position with simple hover */}
      {nodes.map((n, i) => (
        <div
          key={i}
          className="absolute flex flex-col items-center gap-1"
          style={{ left: `calc(${n.x}% - 16px)`, top: `calc(${n.y}% - 16px)` }}
        >
          <div
            className="relative w-8 h-8 rounded-full bg-[#111] border border-white/10 flex items-center justify-center hover:border-primary/40 transition-colors"
          >
            <n.icon size={12} className="text-primary/70" />
          </div>
          <span className="text-[7px] text-white/30 font-medium uppercase tracking-tighter">{n.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ───── Animated Counter ───── */
function AnimatedCounter({
  target,
  duration = 2,
  suffix = "",
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) {
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
      {display}
      {suffix}
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
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-px w-full origin-left"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(39 95% 53% / 0.4), hsl(39 95% 53% / 0.6), hsl(39 95% 53% / 0.4), transparent)",
        }}
      />
    </div>
  );
}

const CURRENT_PARTNERS = [
  { name: "Skill India", role: "Govt. Initiative", logo: "/img/partners/skillindia.png" },
  { name: "Freshworks", role: "Enterprise SaaS", logo: "/img/partners/freshworks.png" },
  { name: "Google Partners", role: "Tech Partner", logo: "/img/partners/google-partners.png" },
];

function PartnerPage() {
  /* Per-section refs */
  const heroRef = useRef(null);
  const collegeRef = useRef(null);
  const corporateRef = useRef(null);
  const recruiterRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const collegeInView = useInView(collegeRef, { once: true, margin: "-100px" });
  const corporateInView = useInView(corporateRef, { once: true, margin: "-100px" });
  const recruiterInView = useInView(recruiterRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  return (
    <div className="bg-[#050505] text-white min-h-screen font-inter overflow-hidden">
      <SiteHeader />

      {/* ═══════ HERO ═══════ */}
      <section ref={heroRef} className="pt-24 sm:pt-32 pb-12 sm:pb-20 relative bg-[#050505] overflow-hidden">
        {/* Simplified Background Orbs */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/4 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center gap-8"
          >
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={heroInView ? { opacity: 0.8, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 sm:mb-6 inline-flex items-center gap-2"
              >
                <Sparkles size={14} className="animate-spin" style={{ animationDuration: "4s" }} />
                Partner Ecosystem
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]"
              >
                <span className="custom-gradient impact-shimmer">
                  A Strategic Partner <br /> in Growth.
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="max-w-lg"
            >
              <p className="text-muted-foreground text-center text-base sm:text-lg leading-relaxed text-pretty">
                Empowering{" "}
                <span className="text-white font-semibold">Institutions</span>,{" "}
                <span className="text-white font-semibold">Corporates</span>,
                and{" "}
                <span className="text-white font-semibold">Recruiters</span>{" "}
                with Data-Backed Skill Verification.
              </p>
            </motion.div>
          </motion.div>

          {/* Trusted By — Animated Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center"
          >
            <p className="text-xs text-white/30 uppercase tracking-[0.2em] font-bold mb-8">Trusted by industry leaders</p>
            <div className="w-full max-w-2xl ">
              <MarqueeStrip items={CURRENT_PARTNERS} />
            </div>
          </motion.div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ 01: EDUCATIONAL INSTITUTIONS ═══════ */}
      <section ref={collegeRef} className="py-16 sm:py-24 relative bg-[#0a0a0a] overflow-hidden">
        {/* Abstract grid background - static */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={collegeInView ? "visible" : "hidden"}
              className="lg:col-span-4 lg:sticky lg:top-32"
            >
              <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
                01. For Colleges
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">
                The &quot;Placement-Ready&quot; <br /> Engine.
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Students have degrees but lack industry-ready skills. We bridge
                the gap between academia and employability.
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={collegeInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-0.5 w-16 bg-linear-to-r from-primary to-amber-400 mt-6 origin-left rounded-full"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={collegeInView ? "visible" : "hidden"}
              className="lg:col-span-8 space-y-4"
            >
              {[
                { icon: School, title: "Finishing School Integration", copy: "Seamlessly add industry-relevant technical tracks to your existing curriculum." },
                { icon: LayoutDashboard, title: "Real-Time Placement Dashboard", copy: "Track student progress in real-time. Identify top performers instantly." },
                { icon: BarChart3, title: "Accreditation Data & Compliance", copy: "Get detailed reports on student engagement and mastery levels for accreditation." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInScale}
                  className="group relative bg-[#111] p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-8 rounded-lg overflow-hidden transition-colors duration-400 hover:bg-[#161616] border border-white/5 hover:border-primary/20"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-primary via-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="flex items-start gap-4 sm:gap-8">
                    <span className="text-2xl sm:text-3xl font-black text-white/5 group-hover:text-orange-500/30 transition-colors duration-400 shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 tracking-tight group-hover:text-amber-100 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm max-w-md">{item.copy}</p>
                    </div>
                  </div>
                  <item.icon className="text-orange-500 opacity-20 group-hover:opacity-100 transition-opacity duration-400 mt-1 shrink-0 hidden sm:block" size={32} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ 02: CORPORATE L&D ═══════ */}
      <section ref={corporateRef} className="py-16 sm:py-24 relative bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb0a_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              className="lg:col-span-6 lg:order-2"
              variants={slideInRight}
              initial="hidden"
              animate={corporateInView ? "visible" : "hidden"}
            >
              <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
                02. For Corporates
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 tracking-tight">
                Training with <br /> Accountability.
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                We ensure 100% engagement through strict monitoring, moving beyond simple course completion.
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={corporateInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-px w-32 mb-6 sm:mb-8 origin-left"
                style={{ background: "linear-gradient(90deg, hsl(39 95% 53% / 0.6), transparent)" }}
              />
              <div className="space-y-4">
                {[
                  { icon: Eye, text: "Strict Monitoring with Attention Checks" },
                  { icon: TrendingUp, text: 'Move from "Course Completion" to "Competency Mastery"' },
                  { icon: Target, text: "Custom learning paths for your requirements" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={corporateInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                      <item.icon size={18} className="text-orange-500" />
                    </div>
                    <span className="text-sm text-white/80 font-medium group-hover:text-white transition-colors">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="grid gap-4 sm:gap-6">
                <motion.div
                  variants={fadeInScale}
                  initial="hidden"
                  animate={corporateInView ? "visible" : "hidden"}
                  className="bg-[#111] p-8 sm:p-10 rounded-2xl relative overflow-hidden group border border-white/5 hover:border-primary/20 transition-colors duration-400"
                >
                  <h4 className="text-4xl sm:text-5xl font-black text-orange-500 mb-4">
                    <AnimatedCounter target={98} duration={2} suffix="%" />
                  </h4>
                  <p className="text-lg sm:text-xl font-bold mb-2 uppercase tracking-tighter">Employee Engagement</p>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm lg:max-w-[80%]">
                    Our Strict Monitoring ensures your training budget translates to real skill growth.
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                <motion.div
                  variants={fadeInScale}
                  initial="hidden"
                  animate={corporateInView ? "visible" : "hidden"}
                  className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors duration-400"
                >
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-4 text-center">Connection Ecosystem</p>
                  <ConnectionGraph />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ 03: RECRUITERS ═══════ */}
      <section ref={recruiterRef} className="py-20 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={recruiterInView ? "visible" : "hidden"}
            className="text-center mb-12 sm:mb-24"
          >
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
              03. For Recruiters
            </h2>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter">
              Zero-Risk Hiring.
            </h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={recruiterInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              { title: "Verified Talent Pool", sub: "Pre-screened candidates", copy: "Access candidates whose skills are proven by monitored practice — not just resume claims.", icon: ShieldCheck },
              { title: "Skill DNA Radar", sub: "Visual talent insights", copy: "Use visual data points — Grit, Logic, Consistency — to find the perfect technical fit.", icon: Radar },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeInScale}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="group bg-[#050505] p-8 sm:p-12 hover:bg-[#111] transition-colors duration-400 flex flex-col justify-between min-h-[300px] border border-white/5 hover:border-primary/15 relative overflow-hidden rounded-lg impact-card-glow"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
                <div>
                  <card.icon className="text-orange-500 mb-6 transition-opacity duration-300" size={32} />
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{card.title}</h4>
                  <p className="text-sm text-orange-500/60 font-bold uppercase tracking-tighter mb-3 group-hover:text-orange-500/80 transition-colors">{card.sub}</p>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{card.copy}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={recruiterInView ? "visible" : "hidden"}
            className="group mt-4 bg-[#050505] p-8 sm:p-12 hover:bg-[#111] transition-colors duration-400 border border-white/5 hover:border-primary/15 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden rounded-lg impact-card-glow"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-primary via-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <div className="flex items-start gap-4 sm:gap-8">
              <FolderGit2 className="text-orange-500 shrink-0" size={32} />
              <div>
                <h4 className="text-xl sm:text-2xl font-bold mb-2">Live Portfolios</h4>
                <p className="text-sm text-orange-500/60 font-bold uppercase tracking-tighter mb-3">
                  80% reduction in screening time
                </p>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
                  View actual project code and live deployments. Skip the technical screening — start interviewing.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest cursor-pointer shrink-0">
              Access talent <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ FINAL CTA ═══════ */}
      <section ref={ctaRef} className="py-24 sm:py-40 bg-[#050505] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-primary/3 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white">
              Do you want to <br className="hidden sm:block" />
              <span className="text-orange-500 italic">partner with us?</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-white/50 max-w-4xl mx-auto leading-relaxed mb-10">
              We are cultivating an <span className="text-white font-semibold relative inline-block">
                Ecosystem of Trust
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={ctaInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </span> between talent and industry.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-primary text-black font-black text-sm uppercase tracking-[0.2em] rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Become a Partner
            </motion.button>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default PartnerPage;
