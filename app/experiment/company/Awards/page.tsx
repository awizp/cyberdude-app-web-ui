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
  Rocket,
  Cpu,
  BrainCircuit,
  Code2,
  Globe,
  ShoppingCart,
  Lightbulb,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Newspaper,
  Tv,
  Film,
  Trophy,
  Medal,
  Star,
} from "lucide-react";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";

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
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-px w-full origin-left"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(39 95% 53% / 0.4), hsl(39 95% 53% / 0.6), hsl(39 95% 53% / 0.4), transparent)",
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

function AwardsPage() {
  /* Per-section refs */
  const heroRef = useRef(null);
  const recognitionsRef = useRef(null);
  const industryRef = useRef(null);
  const techRef = useRef(null);
  const cultureRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const recognitionsInView = useInView(recognitionsRef, { once: true, margin: "-100px" });
  const industryInView = useInView(industryRef, { once: true, margin: "-100px" });
  const techInView = useInView(techRef, { once: true, margin: "-100px" });
  const cultureInView = useInView(cultureRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px" });

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
      <section
        ref={heroRef}
        className="pt-24 sm:pt-32 pb-12 sm:pb-20 relative"
      >
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
                Awards & Recognitions
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] relative"
              >
                <span className="custom-gradient impact-shimmer">
                  Recognized for <br /> Tech Excellence.
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-xl"
            >
              <p className="text-muted-foreground text-center text-pretty sm:text-lg leading-relaxed transition-colors duration-500">
                Featured by leading media for our work in{" "}
                <span className="text-white font-semibold">IoT</span>,{" "}
                <span className="text-white font-semibold">AI</span>, and{" "}
                <span className="text-white font-semibold">Software Development</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ 01: MEDIA & INSTITUTIONAL RECOGNITION ═══════ */}
      <section ref={recognitionsRef} className="py-16 sm:py-24 relative bg-[#0a0a0a] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={recognitionsInView ? "visible" : "hidden"}
              className="lg:col-span-4 lg:sticky lg:top-32"
            >
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={recognitionsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm font-bold text-primary uppercase tracking-widest mb-4"
              >
                01. Media Features
              </motion.h2>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">
                In the <br /> Spotlight.
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                CyberDude Networks has caught the attention of major traditional and digital media for our innovative approaches to IoT, AI, and scalable SaaS solutions.
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={recognitionsInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-0.5 w-16 bg-linear-to-r from-primary to-amber-400 mt-6 origin-left rounded-full"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={recognitionsInView ? "visible" : "hidden"}
              className="lg:col-span-8 space-y-4"
            >
              {[
                {
                  
                  title: "The Hindu",
                  type: "National Newspaper",
                  copy: "Featured in an exclusive article by the prominent Indian newspaper, highlighting our contributions to tech education and product development.",
                  image: "/img/awards/The_Hindu.jpg",
                },
                {
                 
                  title: "Puthiya Thalaimurai",
                  type: "News Channel Feature",
                  copy: "Covered in a dedicated story by this major Tamil news channel for driving innovation and empowering the next generation of builders.",
                  image: "/img/awards/PuthiyathalaimuraiTV.jpg",
                },
                {
                  
                  title: "SPI Cinemas (Sathiyam)",
                  type: "Institutional Recognition",
                  copy: "Successfully conducted a live demonstration that was officially recognized and lauded by the organization's technical leadership.",
                  image: "/img/awards/SPI_Cinemas.jpg",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInScale}
                  className="group relative bg-[#111] p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-8 rounded-lg overflow-hidden transition-all duration-500 hover:bg-[#161616] impact-card-glow"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-primary via-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full">
                    <div className="flex-1">
                      <h4 className="text-xl sm:text-2xl font-bold mb-1 tracking-tight group-hover:text-amber-100 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-xs font-bold text-primary/60 uppercase tracking-wider mb-3">
                        {item.type}
                      </p>
                      <p className="text-muted-foreground text-sm max-w-xl">
                        {item.copy}
                      </p>
                    </div>
                    {/* Feature Image Preview */}
                    <div className="w-full sm:w-40 h-32 sm:h-28 rounded-lg overflow-hidden shrink-0 border border-white/5 group-hover:border-primary/30 transition-all duration-500 mt-4 sm:mt-0 relative">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ 02: INDUSTRY CATEGORIES ═══════ */}
      <section ref={industryRef} className="py-16 sm:py-24 relative bg-[#050505] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb0a_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[10%] font-black text-[25vw] text-white/2 pointer-events-none select-none tracking-tighter leading-none mix-blend-overlay">
          AWARDS
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Right column — text */}
            <motion.div
              className="lg:col-span-4 lg:order-2"
              variants={slideInRight}
              initial="hidden"
              animate={industryInView ? "visible" : "hidden"}
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                02. Industry Excellence
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 tracking-tight">
                Multi-Domain <br /> Awards.
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Officially recognized across multiple domains for delivering consistently high-quality, scalable product solutions to a global clientele.
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={industryInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-px w-32 mb-6 sm:mb-8 origin-left"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(39 95% 53% / 0.6), transparent)",
                }}
              />
            </motion.div>

            {/* Left column — service cards */}
            <div className="lg:col-span-8 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: ShoppingCart,
                    title: "E-Commerce",
                    desc: "Awarded for highly scalable Magento, WooCommerce, and custom web stores.",
                  },
                  {
                    icon: Code2,
                    title: "Web Design & Dev",
                    desc: "Recognized for modern, accessible, and performant web applications.",
                  },
                  {
                    icon: Rocket,
                    title: "Mobile Apps",
                    desc: "Excellence in delivering cross-platform and native mobile experiences.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Digital Marketing",
                    desc: "Demonstrated success in data-driven digital growth strategies.",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={industryInView ? "visible" : "hidden"}
                    className="group bg-[#111] p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-500 relative overflow-hidden impact-card-glow"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-primary via-amber-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex justify-between items-start mb-6">
                      <motion.div
                        whileHover={{ rotate: -10 }}
                        transition={{ type: "spring", stiffness: 250 }}
                        className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors"
                      >
                        <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.1 }}>
                          <item.icon
                            className="text-white group-hover:text-primary group-hover:drop-shadow-[0_0_6px_rgba(251,191,36,0.3)] transition-all duration-300"
                            size={24}
                          />
                        </motion.div>
                      </motion.div>
                      <Award className="text-primary/20 group-hover:text-primary/60 transition-colors" size={24} />
                    </div>

                    <h4 className="font-bold mb-2 tracking-tight text-lg uppercase group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ 03: TECH DNA (Highlights) ═══════ */}
      <section ref={techRef} className="py-20 sm:py-32 relative bg-[#0a0a0a] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none opacity-50" />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={techInView ? "visible" : "hidden"}
            className="text-center mb-12 sm:mb-24"
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
              03. Under the Hood
            </h2>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter">
              Product + Service Hybrid.
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg">
              Since 2016, we&apos;ve built our foundation on bleeding-edge tech architectures to support massive scale and innovation.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={techInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-3 gap-4"
          >
            {[
              {
                icon: Cpu,
                title: "IoT Systems",
                copy: "Connected devices and smart ecosystems built for industrial intelligence.",
              },
              {
                icon: BrainCircuit,
                title: "AI Development",
                copy: "Machine learning and deep analytics powering predictive insights.",
              },
              {
                icon: Globe,
                title: "SaaS Platforms",
                copy: "Highly scalable, highly available cloud applications.",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeInScale}
                className="group bg-[#0a0a0a] p-8 hover:bg-[#111] transition-all duration-500 border border-white/5 hover:border-primary/15 relative overflow-hidden rounded-lg impact-card-glow text-center flex flex-col items-center"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-bl-full" />
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 250 }} className="mb-6 w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:border-primary/30">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: idx * 0.15 }}>
                    <card.icon className="text-primary group-hover:drop-shadow-[0_0_6px_rgba(251,191,36,0.5)] transition-all duration-300" size={28} />
                  </motion.div>
                </motion.div>
                <h4 className="text-xl font-bold mb-3">{card.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ 04: DEVELOPER CULTURE ═══════ */}
      <section
        ref={cultureRef}
        className="py-16 sm:py-24 relative bg-[#050505] overflow-hidden"
      >
        {/* Abstract Background Elements */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-[5%] font-black text-[20vw] text-white/2 pointer-events-none select-none tracking-tighter leading-none mix-blend-overlay text-right">
          CULTURE
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={cultureInView ? "visible" : "hidden"}
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
                04. The CyberDude DNA
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                A Culture of <br /> Builders & Innovators
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
                Operating out of Chennai, Tamil Nadu, we are a passionate, nimble team. We prioritize creativity, continuous learning, and hands-on exposure to real-world products over corporate red tape.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Started by tech enthusiasts, for tech enthusiasts",
                  "Perfect environment for internships and learning",
                  "Direct startup exposure with faster growth opportunities"
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={cultureInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="flex items-center gap-3 text-sm font-medium text-white/80"
                  >
                    <Star size={16} className="text-primary" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInScale}
              initial="hidden"
              animate={cultureInView ? "visible" : "hidden"}
              className="bg-[#111] p-8 sm:p-12 rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-primary to-transparent" />
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                    <Lightbulb size={32} className="text-primary" />
                  </motion.div>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold mb-3">Founder Leadership</h4>
                <p className="text-sm text-primary uppercase font-bold tracking-widest mb-4">Anbuselvan Annamalai</p>
                <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mx-auto border-t border-white/10 pt-6">
                  Guiding the vision with a relentless focus on tech education, community empowerment, and building products that matter.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ═══════ FINAL CALL TO ACTION ═══════ */}
      <section
        ref={ctaRef}
        className="py-24 sm:py-40 bg-[#050505] text-center relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/2 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl font-light tracking-wide text-white/40 max-w-4xl mx-auto leading-relaxed mb-10 sm:mb-16">
              Join a team that has been consistently{" "}
              <motion.span
                className="text-white font-semibold relative inline-block"
                initial={{ opacity: 0 }}
                animate={ctaInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                recognized for excellence
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={ctaInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </motion.span>{" "}
              by industry leaders, media, and our community.
            </h2>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-12 py-4 sm:py-5 bg-primary text-black font-black text-sm uppercase tracking-[0.2em] rounded-full hover:shadow-xl hover:shadow-primary/30 transition-shadow flex items-center gap-2 mx-auto sm:mx-0"
              >
                Work With Us <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default AwardsPage;
