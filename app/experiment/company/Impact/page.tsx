"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, Variants, useMotionValue, useTransform, animate } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  School,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";

/* ───── Animated Counter Component ───── */
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

/* ───── Floating Particles for Hero ───── */
const PARTICLES = [
  { id: 0, x: 12, y: 25, size: 3, delay: 0, duration: 10 },
  { id: 1, x: 45, y: 60, size: 5, delay: 1.5, duration: 12 },
  { id: 2, x: 78, y: 15, size: 2, delay: 3, duration: 9 },
  { id: 3, x: 30, y: 80, size: 4, delay: 0.8, duration: 11 },
  { id: 4, x: 65, y: 40, size: 3, delay: 2.2, duration: 13 },
  { id: 5, x: 90, y: 70, size: 5, delay: 3.5, duration: 10 },
];

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-orange-500/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
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
          background: "linear-gradient(90deg, transparent, hsl(25 100% 55% / 0.4), hsl(39 95% 53% / 0.6), hsl(25 100% 55% / 0.4), transparent)",
        }}
      />
    </div>
  );
}

/* ───── Animated DNA Component ───── */
function DnaAnimation() {
  return (
    <div className="hidden sm:flex flex-col gap-[5px] items-center justify-center w-10 h-16 opacity-30 group-hover:opacity-100 transition-opacity duration-500 shrink-0 group-hover:drop-shadow-[0_0_12px_rgba(234,88,12,0.4)] mt-1">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex justify-between items-center w-8 relative h-1.5">
          <motion.div
            animate={{ x: [0, 24, 0], scale: [1, 0.5, 1], opacity: [1, 0.3, 1], zIndex: [10, 0, 10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            className="w-1.5 h-1.5 rounded-full bg-orange-500 absolute left-0"
          />
          <motion.div
            animate={{ width: ["100%", "30%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            className="h-px bg-amber-500/40 mx-auto"
          />
          <motion.div
            animate={{ x: [0, -24, 0], scale: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3], zIndex: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            className="w-1.5 h-1.5 rounded-full bg-amber-400 absolute right-0"
          />
        </div>
      ))}
    </div>
  );
}

/* ───── Main Page ───── */
function ImpactPage() {
  /* Per-section refs */
  const heroRef = useRef(null);
  const learnerRef = useRef(null);
  const recruiterRef = useRef(null);
  const orgRef = useRef(null);
  const quoteRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const learnerInView = useInView(learnerRef, { once: true, margin: "-100px" });
  const recruiterInView = useInView(recruiterRef, { once: true, margin: "-100px" });
  const orgInView = useInView(orgRef, { once: true, margin: "-100px" });
  const quoteInView = useInView(quoteRef, { once: true, margin: "-50px" });

  /* Variants */
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeInScale: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen font-inter overflow-hidden">
      <SiteHeader />

      {/* ═══════ HERO ═══════ */}
      <section ref={heroRef} className="pt-24 sm:pt-32 pb-12 sm:pb-20 relative">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/3 rounded-full blur-[120px] pointer-events-none" />
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
                className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 sm:mb-6 inline-flex items-center gap-2"
              >
                <Sparkles size={14} className="animate-pulse" />
                The CyberDude Impact
              </motion.span>

              {/* Shimmer headline */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] relative"
              >
                <span className="custom-gradient impact-shimmer">
                  We Build <br /> Verified Careers.
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-lg"
            >
              <p className="text-muted-foreground text-center text-pretty sm:text-lg leading-relaxed transition-colors duration-500">
                We don&apos;t just deliver content, we build verified careers. Transforming the industry through monitored precision and evidence-based mastery.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ 01. THE LEARNER ═══════ */}
      <section ref={learnerRef} className="py-16 sm:py-24 relative bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={learnerInView ? "visible" : "hidden"}
              className="lg:col-span-4 lg:sticky lg:top-32"
            >
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={learnerInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4"
              >
                01. For the Learner
              </motion.h2>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">
                From Video-Watcher <br /> to Job-Ready
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Transforming the learning habit from passive watching to high-intensity active output. We produce professionals who don&apos;t just know &quot;what&quot;, but know &quot;how&quot;.
              </p>
              {/* Animated accent bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={learnerInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-0.5 w-16 bg-linear-to-r from-orange-500 to-amber-400 mt-6 origin-left rounded-full"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={learnerInView ? "visible" : "hidden"}
              className="lg:col-span-8 space-y-4"
            >
              {[
                {
                  icon: Zap,
                  title: "The 'Anti-Passive' Revolution",
                  copy: "Most people 'watch' courses; our students 'master' them. With our Strict Monitoring and Attention Checks, we ensure you are 100% engaged.",
                },
                {
                  icon: ShieldCheck,
                  title: "Build Your 'Skill DNA'",
                  copy: "Stop telling recruiters you're a hard worker—show them. Our platform tracks your Grit, Logic, and Consistency scores in real-time.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInScale}
                  className="group relative bg-[#111] p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-8 rounded-lg overflow-hidden transition-all duration-500 hover:bg-[#161616] impact-card-glow"
                >
                  {/* Gradient top border — reveals on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-orange-500 via-amber-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-start gap-4 sm:gap-8">
                    <motion.span
                      className="text-2xl sm:text-3xl font-black text-white/5 group-hover:text-orange-500/30 transition-colors duration-500 shrink-0"
                      whileHover={{ scale: 1.1 }}
                    >
                      0{idx + 1}
                    </motion.span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 tracking-tight group-hover:text-orange-100 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm max-w-md">{item.copy}</p>
                    </div>
                  </div>
                  {item.title === "Build Your 'Skill DNA'" ? (
                    <DnaAnimation />
                  ) : (
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}>
                        <item.icon
                          className="text-orange-500 opacity-20 group-hover:opacity-100 transition-all duration-500 mt-1 shrink-0 hidden sm:block group-hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.4)]"
                          size={32}
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ 02. RECRUITMENT ═══════ */}
      <section ref={recruiterRef} className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Right column — text */}
            <motion.div
              className="lg:col-span-6 lg:order-2"
              variants={slideInRight}
              initial="hidden"
              animate={recruiterInView ? "visible" : "hidden"}
            >
              <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
                02. For Recruiters
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 tracking-tight">
                Zero-Risk <br /> Hiring.
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Stop sifting through inflated resumes. Access a talent pool where every skill is backed by hours of monitored practice and successful project deployments.
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={recruiterInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-px w-32 mb-6 sm:mb-8 origin-left"
                style={{
                  background: "linear-gradient(90deg, hsl(25 100% 55% / 0.6), transparent)",
                }}
              />
            </motion.div>

            {/* Left column — stats */}
            <div className="lg:col-span-6 lg:order-1">
              <div className="grid gap-4 sm:gap-6">
                <motion.div
                  variants={fadeInScale}
                  initial="hidden"
                  animate={recruiterInView ? "visible" : "hidden"}
                  className="bg-[#111] p-8 sm:p-12 rounded-2xl relative overflow-hidden group border border-white/5 hover:border-orange-500/20 transition-all duration-500"
                >
                  {/* Ghost number */}
                  <motion.div
                    className="absolute top-0 right-0 p-4 sm:p-8 text-white/5 font-black text-6xl sm:text-8xl group-hover:text-orange-500/10 transition-colors duration-700"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    80%
                  </motion.div>

                  {/* Animated counter */}
                  <h4 className="text-4xl sm:text-5xl font-black text-orange-500 mb-4">
                    <AnimatedCounter target={80} duration={2.5} suffix="%" />
                  </h4>
                  <p className="text-lg sm:text-xl font-bold mb-2 uppercase tracking-tighter">
                    Verified Competence
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm lg:max-w-[80%]">
                    Achieve an 80% reduction in technical screening time with candidates whose skills are pre-verified through rigorous practice.
                  </p>

                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>

                <div className="grid gap-4 sm:gap-6">
                  {[
                    {
                      title: "Visual Talent Insights",
                      desc: "Use our Skill Radar Charts to instantly identify candidates who match your technical and behavioral requirements.",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      initial="hidden"
                      animate={recruiterInView ? "visible" : "hidden"}
                      className="group bg-[#111] p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-orange-500/20 transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-orange-500 via-amber-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <h4 className="font-bold mb-2 sm:mb-3 uppercase tracking-tighter text-orange-500">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ 03. ORGANIZATIONS ═══════ */}
      <section ref={orgRef} className="py-20 sm:py-32 bg-[#050505] relative overflow-hidden">
        {/* Ambient orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={orgInView ? "visible" : "hidden"}
            className="text-center mb-12 sm:mb-24"
          >
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
              03. For Organizations
            </h2>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter">
              Real ROI on Learning.
            </h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={orgInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              {
                title: "For Institutions",
                sub: "Day-1 Productive Students",
                copy: "Bridge the gap between your curriculum and industry demands. Turn your students into 'Day-1 Productive' employees.",
                icon: School,
              },
              {
                title: "For Corporates",
                sub: "Deep Analytics on Mastery",
                copy: "Stop paying for training that isn't watched. Get deep analytics on employee engagement and skill mastery.",
                icon: Building2,
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeInScale}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group bg-[#0a0a0a] p-8 sm:p-12 hover:bg-[#111] transition-all duration-500 flex flex-col justify-between min-h-75 sm:min-h-100 border border-white/5 hover:border-orange-500/15 relative overflow-hidden rounded-lg impact-card-glow"
              >
                {/* Hover corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-full" />

                <div>
                  <motion.div whileHover={{ rotate: -10 }} transition={{ type: "spring", stiffness: 250 }}>
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.1 }}>
                      <card.icon className="text-orange-500 mb-6 sm:mb-8 group-hover:drop-shadow-[0_0_6px_rgba(234,88,12,0.3)] transition-all duration-300" size={32} />
                    </motion.div>
                  </motion.div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{card.title}</h4>
                  <p className="text-sm text-orange-500/60 font-bold uppercase tracking-tighter mb-3 sm:mb-4 group-hover:text-orange-500/80 transition-colors">
                    {card.sub}
                  </p>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{card.copy}</p>
                </div>
                <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group cursor-pointer pt-6 sm:pt-8">
                  Partner with us{" "}
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={orgInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 sm:mt-24 max-w-4xl mx-auto text-center px-2"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white/90 italic leading-snug">
              &quot;We shift the needle from &apos;Attempted&apos; to{" "}
              <span className="text-orange-500 relative">
                &apos;Mastered&apos;
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-orange-500/50 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={orgInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  style={{ originX: 0 }}
                />
              </span>
              . ROI is no longer a projection—it is a proof.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ FINAL EDITORIAL QUOTE ═══════ */}
      <section ref={quoteRef} className="py-24 sm:py-40 bg-[#050505] text-center relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-500/2 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl sm:text-2xl md:text-4xl font-light tracking-wide text-white/40 max-w-5xl mx-auto leading-relaxed"
          >
            We are engineering the{" "}
            <motion.span
              className="text-white font-semibold relative inline-block"
              initial={{ opacity: 0 }}
              animate={quoteInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Infrastructure of Truth
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-orange-500/40 to-transparent"
                initial={{ scaleX: 0 }}
                animate={quoteInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.span>{" "}
            in human development. Closing the gap between{" "}
            <motion.span
              className="text-white font-semibold relative inline-block"
              initial={{ opacity: 0 }}
              animate={quoteInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Natural Intelligence
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-orange-500/40 to-transparent"
                initial={{ scaleX: 0 }}
                animate={quoteInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              />
            </motion.span>{" "}
            and industrial performance.
          </motion.h2>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default ImpactPage;
