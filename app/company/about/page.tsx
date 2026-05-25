"use client";

import React, { useEffect, useState, useRef } from "react";
import AboutSectionData from "@/data/AboutSectionData";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";
import { CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useTransform,
} from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const MotionLink = motion.create(Link);

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
            initial={{ y: "110%", rotate: 2 }}
            animate={inView ? { y: 0, rotate: 0 } : {}}
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
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
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

/* ── Problem Card ─────────────────────────────────────── */
function ProblemCard({ p, index }: { p: any; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease }}
      whileHover={{ y: -5 }}
      className="group relative border border-border/40 rounded-2xl overflow-hidden bg-card/10 hover:border-orange-500/40 hover:shadow-2xl shadow-orange-500/20 transition-all duration-300">
      <div className="absolute top-0 right-0 text-8xl font-black text-foreground/5 leading-none select-none pr-3 -mt-1">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="p-7 md:p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="w-10 h-10 rounded-xl border border-border/40 bg-background flex items-center justify-center group-hover:border-orange-500/40 group-hover:bg-orange-500/5 transition-all">
            <p.icon className="w-5 h-5 text-muted-foreground group-hover:text-orange-500 transition-colors" />
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-orange-500 bg-orange-500/8 border border-orange-500/15 rounded-full px-2.5 py-1">
            {p.badge}
          </span>
        </div>
        <h3 className="text-lg font-black text-foreground mb-2 leading-snug">
          {p.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {p.desc}
        </p>
        <div className="flex items-end gap-3 pt-5 border-t border-border/25">
          <span className="text-3xl font-black text-orange-500 tabular-nums leading-none">
            {p.stat}
          </span>
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-bold leading-tight pb-0.5">
            {p.statLabel}
          </span>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-orange-500"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, ease }}
      />
    </motion.div>
  );
}

/* ── Animated Core Pillars (Timeline) ─────────────────── */
function AnimatedCorePillars({ pillars }: { pillars: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto py-10 md:py-20">
      {/* Central continuous glowing line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:-ml-px bg-border/40 overflow-hidden rounded-full">
        <motion.div
          style={{ scaleY }}
          className="w-full h-full bg-linear-to-b from-orange-500/80 via-orange-500 to-orange-500/20 origin-top"
        />
      </div>

      <div className="flex flex-col gap-12 md:gap-24 relative z-10 w-full">
        {pillars.map((item, index) => (
          <AnimatedTimelineNode
            key={index}
            item={item}
            index={index}
            total={pillars.length}
          />
        ))}
      </div>
    </div>
  );
}

function AnimatedTimelineNode({
  item,
  index,
  total,
}: {
  item: any;
  index: number;
  total: number;
}) {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center center"],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 20,
  });

  const iconScale = useTransform(springProgress, [0.8, 1], [0.5, 1]);
  const iconOpacity = useTransform(springProgress, [0.8, 1], [0.3, 1]);

  const borderColor = useTransform(
    springProgress,
    [0.9, 1],
    ["hsl(var(--border))", "var(--color-orange-500)"],
  );
  const pulseOpacity = useTransform(springProgress, [0.95, 1], [0, 1]);

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? "md:flex-row" : "md:flex-row-reverse"} group`}>
      {/* ── Content Card ── */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40, y: 30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`w-full md:w-5/12 flex ${isEven ? "pl-24 md:pl-0" : "pl-24 md:pl-0 md:justify-end"}`}>
        <div className="flex flex-col justify-center w-full max-w-lg p-6 md:p-8 rounded-3xl border border-border/25 bg-card/5 hover:border-orange-500/40 hover:bg-orange-500/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl shadow-orange-500/15 relative overflow-hidden text-left cursor-default">
          <motion.div
            style={{ opacity: pulseOpacity }}
            className="absolute inset-0 bg-linear-to-br from-orange-500/5] via-transparent to-transparent pointer-events-none"
          />

          <div className="flex flex-wrap items-center justify-between mb-5 gap-3 relative z-10 w-full">
            <span className="text-xs font-black uppercase tracking-widest text-orange-500/70 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1">
              {item.tag}
            </span>
            <motion.div
              style={{ opacity: pulseOpacity }}
              className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs uppercase font-bold tracking-widest text-orange-500">
                Active
              </span>
            </motion.div>
          </div>

          <div className="relative z-10 w-full">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-black text-orange-500/40 tabular-nums bg-background border border-border/50 rounded px-1.5 py-0.5">
                {item.number}
              </span>
              <h3 className="text-xl md:text-2xl font-black text-foreground leading-tight group-hover:text-orange-500 transition-colors">
                {item.title}
              </h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-loose mt-3">
              {item.desc}
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── Central Icon Dot on Timeline ── */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 mt-6 md:mt-0 z-20">
        <motion.div
          style={{ scale: iconScale, opacity: iconOpacity, borderColor }}
          className="w-full h-full rounded-full border-2 bg-background flex items-center justify-center relative overflow-hidden transition-colors duration-300 group-hover:border-orange-500/80">
          <motion.div
            style={{ opacity: pulseOpacity }}
            className="absolute inset-0 bg-orange-500/20 animate-pulse"
          />
          {item.icon && (
            <item.icon className="w-5 h-5 md:w-6 md:h-6 text-orange-500 z-10 relative" />
          )}
        </motion.div>
      </div>

      {/* ── Empty space ── */}
      <div className="hidden md:block md:w-5/12" />
    </div>
  );
}

/* ── Persona Card ─────────────────────────────────────── */
function PersonaCard({ p, index }: { p: any; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });
  const featured = index === 1;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 ${
        featured
          ? "border-orange-500/50 bg-orange-500/5 hover:border-orange-500/70"
          : "border-border/40 bg-card/10 hover:border-orange-500/40"
      }`}>
      <div
        className={`h-0.5 w-full ${featured ? "bg-orange-500" : "bg-border/50"}`}
      />
      <div className="p-7">
        <div className="flex items-center gap-3 mb-5">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 280 }}
            className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${
              featured
                ? "border-orange-500/40 bg-orange-500/10"
                : "border-border/40 bg-background group-hover:border-orange-500/30 group-hover:bg-orange-500/5"
            }`}>
            <p.icon
              className={`w-5 h-5 transition-colors ${
                featured
                  ? "text-orange-500"
                  : "text-muted-foreground group-hover:text-orange-500"
              }`}
            />
          </motion.div>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-orange-500/60">
              {p.role}
            </p>
            <p className="text-sm font-black text-foreground">{p.benefit}</p>
          </div>
        </div>
        <h3 className="text-lg font-black text-foreground mb-2 leading-snug">
          {p.headline}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {p.desc}
        </p>
        <ul className="space-y-2">
          {p.points.map((pt: string, j: number) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: -6 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + j * 0.06 + 0.3,
              }}
              className="flex items-start gap-2 text-sm text-foreground/75">
              <CheckCircle2
                size={13}
                className="text-orange-500 mt-0.5 shrink-0"
              />
              <span>{pt}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 900], [1, 0.1]);
  const heroY = useTransform(scrollY, [0, 900], ["0%", "12%"]);

  const { problems, pillars, personas } = AboutSectionData;

  if (!mounted) return <div className="min-h-screen bg-background" />;

  return (
    <div className="bg-background text-foreground antialiased overflow-x-hidden">
      <ScrollProgress />
      <SiteHeader />

      {/* ════════════════════════════════════════
          HERO — PREMIUM DYNAMIC
      ════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden">
        {/* 1. Base Grid Layer */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--foreground) / 0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* 2. Abstract Geometric Lighting / Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-5 w-full max-w-full h-full max-h-full rounded-full bg-orange-500/20 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[30%] -left-10 w-full max-w-full h-full max-h-full rounded-full bg-orange-500/10 blur-3xl pointer-events-none"
        />

        {/* 3. Deep Shadows / Vignettes to merge with background */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/10 to-transparent pointer-events-none" />

        {/* 4. Sci-Fi Data Lines (Fiber Optic effect) */}
        <div className="absolute top-0 right-12 w-px h-[60%] bg-border/20 origin-top pointer-events-none overflow-hidden hidden md:block">
          <motion.div
            className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-transparent via-orange-500 to-transparent"
            animate={{ top: ["-20%", "120%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="absolute top-0 right-24 w-px h-[40%] bg-border/20 origin-top pointer-events-none overflow-hidden hidden md:block">
          <motion.div
            className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-transparent via-orange-500 to-transparent"
            animate={{ top: ["-20%", "120%"] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "linear",
              delay: 1.5,
            }}
          />
        </div>

        {/* 5. Main Foreground Content */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-14 pb-20 pt-40">
          {/* Eyebrow row */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
            className="flex items-center gap-4 mb-8">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="h-0.5 w-10 bg-orange-500 origin-left shadow-xl shadow-orange-500"
            />
            <span className="text-xs font-black uppercase tracking-widest text-orange-500 drop-shadow-lg">
              About CyberDude
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-10 md:mb-12 cursor-default">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter">
              {[
                { text: "Building the", isOrange: false },
                { text: "future of", isOrange: false },
                { text: "tech careers.", isOrange: true },
              ].map((line, i) => (
                <div key={i} className="overflow-hidden pb-3 -mb-3">
                  <motion.div
                    initial={{ y: "110%", rotateZ: 3 }}
                    animate={{ y: 0, rotateZ: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={
                      line.isOrange
                        ? "text-orange-500 drop-shadow-2xl"
                        : "text-foreground"
                    }>
                    {line.text}
                  </motion.div>
                </div>
              ))}
            </h1>
          </div>

          {/* Description + CTA row */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease }}
              className="text-base md:text-xl text-muted-foreground leading-loose max-w-xl">
              A Chennai-based tech startup at the intersection of{" "}
              <strong className="text-foreground font-black tracking-tight">
                IoT
              </strong>{" "}
              and{" "}
              <strong className="text-foreground font-black tracking-tight">
                Artificial Intelligence
              </strong>{" "}
              — delivering accountable, outcome-driven education that transforms
              learners into verified, job-ready professionals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, ease }}
              className="flex flex-wrap sm:flex-nowrap items-center gap-6 shrink-0">
              <MotionLink
                href="https://cyberdudenetworks.com/"
                className="group relative inline-flex items-center justify-center gap-2.5 bg-orange-500 text-orange-50 px-8 py-4 rounded-full font-black text-sm tracking-wide overflow-hidden shadow-2xl shadow-orange-500"
                whileHover="hover"
                initial="initial"
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.05 },
                }}
                whileTap={{ scale: 0.95 }}>
                <span className="relative z-10 flex items-center gap-2">
                  Our Story
                  <motion.span
                    variants={{ initial: { x: 0 }, hover: { x: 4 } }}>
                    <ArrowRight size={15} strokeWidth={3} />
                  </motion.span>
                </span>
                {/* Button shine sweep */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"
                  variants={{
                    initial: { x: "-150%" },
                    hover: { x: "150%" },
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              </MotionLink>

              <motion.button
                whileHover={{ x: 3, color: "var(--color-orange-500)" }}
                className="group inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors">
                View Courses
                <ArrowUpRight
                  size={15}
                  className="group-hover:rotate-12 transition-transform"
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Meta strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-16 pt-7 border-t border-border/20 flex flex-wrap items-center justify-between md:justify-start md:gap-14 gap-y-6">
            {[
              { label: "Founded", value: "2016" },
              { label: "Headquarters", value: "Chennai, India" },
              { label: "Focus", value: "IoT · AI · EdTech" },
              { label: "Stage", value: "Growth-stage Startup" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.05 + i * 0.08, ease }}
                className="flex flex-col gap-1.5">
                <span className="text-xs font-black uppercase tracking-widest text-muted-foreground/50">
                  {item.label}
                </span>
                <span className="text-sm font-bold text-foreground/90 tracking-tight">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          ABOUT COMPANY CARDS
      ════════════════════════════════════════ */}
      <section className="py-24 px-8 md:px-14">
        <div className="max-w-7xl mx-auto">
          {/* Parent Company */}
          <div className="grid lg:grid-cols-2 gap-0 border border-border/30 rounded-3xl overflow-hidden mb-6">
            <div className="flex flex-col justify-center p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-border/30 relative">
              <div className="absolute top-6 right-6 text-8xl font-black text-foreground/5 leading-none select-none tracking-tighter">
                01
              </div>
              <FadeIn>
                <Label>Our Parent</Label>
                <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight tracking-tight mb-4">
                  CyberDude Networks{" "}
                  <span className="text-orange-500">Pvt. Ltd.</span>
                </h2>
                <div className="flex items-center gap-3 border border-border/40 rounded-xl px-4 py-2.5 w-fit">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Tech Startup &bull; IoT &bull; AI
                  </span>
                </div>
              </FadeIn>
            </div>
            <div className="p-10 md:p-14 bg-secondary/5">
              <FadeIn delay={0.15}>
                <p className="text-base text-muted-foreground leading-loose mb-6">
                  CyberDude Networks Pvt. Ltd., is a Tech-Startup focused on the{" "}
                  <strong className="text-foreground">
                    Internet of Things (IoT)
                  </strong>{" "}
                  and{" "}
                  <strong className="text-foreground">
                    Artificial Intelligence (AI)
                  </strong>
                  , delivering and deploying the finest ideas and tech
                  applications to empower customers in achieving new heights of
                  excellence in today&apos;s challenging business landscape.
                </p>
                <p className="text-base text-muted-foreground leading-loose">
                  Established as a product-oriented enterprise by a team of
                  tech-questing geeks, CyberDude assures a dream platform for
                  career starters — equipping our team with the latest
                  technologies while fostering a work culture that brims with
                  passion, ambition, and commitment.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* The Product */}
          <div className="grid lg:grid-cols-2 gap-0 border border-orange-500/25 rounded-3xl overflow-hidden bg-orange-500/5">
            <div className="flex flex-col justify-center p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-orange-500/20 relative">
              <div className="absolute top-6 right-6 text-8xl font-black text-foreground/5 leading-none select-none tracking-tighter">
                02
              </div>
              <FadeIn delay={0.1}>
                <Label>The Product</Label>
                <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight tracking-tight mb-4">
                  CyberDude<span className="text-orange-500">.app</span>
                </h2>
                <div className="flex items-center gap-3 border border-orange-500/25 bg-orange-500/5 rounded-xl px-4 py-2.5 w-fit">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                    Flagship Web Application
                  </span>
                </div>
              </FadeIn>
            </div>
            <div className="p-10 md:p-14">
              <FadeIn delay={0.2}>
                <p className="text-base text-muted-foreground leading-loose mb-6">
                  CyberDude.app is our flagship web application designed to{" "}
                  <strong className="text-foreground">
                    transform beginners into skilled professionals
                  </strong>{" "}
                  by replicating the rigor of offline training in an online
                  environment.
                </p>
                <p className="text-base text-muted-foreground leading-loose">
                  While online education has made learning accessible, it often
                  fails at ensuring genuine skill development and employability.
                  We close this gap by creating an{" "}
                  <strong className="text-foreground">
                    accountable, evidence-based learning environment
                  </strong>{" "}
                  where completion actually means competence.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          PROBLEMS WE SOLVE
      ════════════════════════════════════════ */}
      <section className="py-24 px-8 md:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 mb-16 items-end">
            <div>
              <Label>The Problem</Label>
              <Reveal
                text="The Anti-Passive Hook"
                className="text-3xl md:text-5xl font-black leading-tight text-foreground"
              />
            </div>
            <FadeIn delay={0.15}>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Most ed-tech solves the access problem. We solve the outcomes
                problem — turning passive watchers into active builders with
                verifiable skills.
              </p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {problems.map((p: any, i: number) => (
              <ProblemCard key={i} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          CORE PILLARS (ROADMAP)
      ════════════════════════════════════════ */}
      <section className="py-24 px-8 md:px-14 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-end mb-16">
            <div>
              <Label>Core Pillars</Label>
              <Reveal
                text="Fundamentally Different"
                className="text-3xl md:text-5xl font-black text-foreground"
              />
            </div>
            <FadeIn delay={0.15}>
              <p className="text-muted-foreground text-base leading-relaxed">
                Every pillar in our platform is built with intention — a
                deliberate sequence that takes you from zero to job-ready.
              </p>
            </FadeIn>
          </div>

          <AnimatedCorePillars pillars={pillars} />
        </div>
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          WHO IT'S FOR
      ════════════════════════════════════════ */}
      <section className="py-24 px-8 md:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Label>Who It&apos;s For</Label>
            <Reveal
              text="Built for Every Stage"
              className="text-3xl md:text-5xl font-black text-foreground"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-5 items-start">
            {personas.map((p: any, i: number) => (
              <PersonaCard key={i} p={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <section className="relative py-28 px-8 md:px-14 overflow-hidden bg-orange-500">
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

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-widest text-orange-50/45 mb-5">
            Get Started Today
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="text-4xl md:text-6xl font-black text-orange-50 leading-none tracking-tighter">
              Ready to prove your skills?
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-orange-50/60 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join thousands of learners who have transformed their careers with
            CyberDude&apos;s accountable, outcome-driven platform.
          </motion.p>

          <MotionLink
            href="#"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 bg-orange-50 text-orange-500 px-9 py-4 rounded-full font-black text-base">
            Start Learning <ArrowRight size={18} />
          </MotionLink>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
