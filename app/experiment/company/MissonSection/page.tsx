"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Eye } from "lucide-react";

function page() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div>
      <section id="mission" className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container mx-auto px-4 relative" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Purpose
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 custom-gradient">
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group rounded-2xl p-8 relative overflow-hidden
             backdrop-blur-md 
             border 
             transition-all duration-300
             hover:border-orange-400
             hover:bg-orange-400/10
             hover:shadow-[0_0_25px_rgba(251,146,60,0.7)]"
            >
              {/* glowing side bar */}
              <div
                className="absolute top-0 left-0 w-1 h-full 
             bg-orange-400
             scale-y-0 origin-top
             transition-all duration-300
             group-hover:scale-y-100
             group-hover:shadow-[0_0_10px_rgba(251,146,60,0.8)]"
              />

              <Rocket
                size={32}
                className="mb-4 text-primary transition-all duration-300
               group-hover:text-orange-400
               group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]"
              />

              <h3
                className="font-display text-2xl font-bold mb-4 text-foreground
                 transition-all duration-300
                 group-hover:text-orange-400"
              >
                Our Mission
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Empower individuals by making them smarter, more capable, and
                professionally skilled through technology-driven learning...
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group rounded-2xl p-8 relative overflow-hidden
             backdrop-blur-md 
             border
             transition-all duration-300
             hover:border-orange-400
             hover:bg-orange-400/10
             hover:shadow-[0_0_25px_rgba(251,146,60,0.7)]"
            >
              <div
                className="absolute top-0 left-0 w-1 h-full 
             bg-orange-400
             scale-y-0 origin-top
             transition-all duration-300
             group-hover:scale-y-100
             group-hover:shadow-[0_0_10px_rgba(251,146,60,0.8)]"
              />

              <Eye
                size={32}
                className="mb-4 text-accent transition-all duration-300
               group-hover:text-orange-400
               group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]"
              />

              <h3
                className="font-display text-2xl font-bold mb-4 text-foreground
                 transition-all duration-300
                 group-hover:text-orange-400"
              >
                Our Vision
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Become the global gold standard for skill verification...
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
