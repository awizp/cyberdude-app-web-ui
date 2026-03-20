"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, TrendingUp } from "lucide-react";

function page() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div>
      <section id="awards" className="py-24">
        <div className="container mx-auto px-4" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Recognition
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 custom-gradient">
              Awards & <span className="text-gradient">Excellence</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="group border border-transparent rounded-2xl p-8 text-center
             transition-all duration-300
             backdrop-blur-md bg-white/30

             hover:border-orange-400
             hover:bg-orange-400/10
             hover:shadow-[0_0_25px_rgba(251,146,60,0.7)]
             hover:-translate-y-2"
            >
              <TrendingUp
                className="mx-auto mb-4 text-accent transition-all duration-300
               group-hover:text-orange-400
               group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]"
                size={40}
              />

              <h3
                className="font-display text-xl font-bold mb-3
                 transition-all duration-300
                 group-hover:text-orange-400"
              >
                Placement Excellence
              </h3>

              <p className="text-sm leading-relaxed ">
                Outstanding success enabling career transitions through a Direct
                Recruitment Pipeline connecting verified learners with hiring
                companies.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group border border-transparent rounded-2xl p-8 text-center
             transition-all duration-300
             backdrop-blur-md bg-white/30

             hover:border-orange-400
             hover:bg-orange-400/10
             hover:shadow-[0_0_25px_rgba(251,146,60,0.7)]
             hover:-translate-y-2"
            >
              <Trophy
                className="mx-auto mb-4 text-primary transition-all duration-300
               group-hover:text-orange-400
               group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]"
                size={40}
              />

              <h3
                className="font-display text-xl font-bold mb-3
                 transition-all duration-300
                 group-hover:text-orange-400"
              >
                Innovation in EdTech
              </h3>

              <p className="text-sm leading-relaxed transition-all duration-300">
                Recognized for the Skill DNA scoring system — evaluating
                learners on grit, velocity, and collaboration for a
                comprehensive view of true capabilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
