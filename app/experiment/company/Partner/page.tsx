"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function page() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div>
      <section id="partners" className="py-24 relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container mx-auto px-4 relative" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 custom-gradient ">
              Partners & Technology
            </h2>
            <p className=" mt-4 max-w-2xl mx-auto text-muted-foreground">
              We leverage robust and scalable technologies and collaborate with
              corporate partners to ensure a modern, reliable learning
              experience.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group rounded-xl px-10 py-6 flex items-center justify-center
             border border-transparent
             backdrop-blur-md bg-white/30
             transition-all duration-300

             hover:border-orange-400
             hover:bg-orange-400/10
             hover:shadow-[0_0_20px_rgba(251,146,60,0.7)]
             hover:scale-105"
            >
              <span
                className="font-display font-bold text-lg
                   transition-all duration-300
                   group-hover:text-orange-400
                   group-hover:drop-shadow-[0_0_6px_rgba(251,146,60,0.8)]"
              >
                Laravel
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group rounded-xl px-10 py-6 flex items-center justify-center
             border border-transparent
             backdrop-blur-md bg-white/30
             transition-all duration-300

             hover:border-orange-400
             hover:bg-orange-400/10
             hover:shadow-[0_0_20px_rgba(251,146,60,0.7)]
             hover:scale-105"
            >
              <span
                className="font-display font-bold text-lg
                   transition-all duration-300
                   group-hover:text-orange-400
                   group-hover:drop-shadow-[0_0_6px_rgba(251,146,60,0.8)]"
              >
                React
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group rounded-xl px-10 py-6 flex items-center justify-center
             border border-transparent
             backdrop-blur-md bg-white/30
             transition-all duration-300

             hover:border-orange-400
             hover:bg-orange-400/10
             hover:shadow-[0_0_20px_rgba(251,146,60,0.7)]
             hover:scale-105"
            >
              <span
                className="font-display font-bold text-lg
                   transition-all duration-300
                   group-hover:text-orange-400
                   group-hover:drop-shadow-[0_0_6px_rgba(251,146,60,0.8)]"
              >
                Razorpay
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center text-muted-foreground  text-sm mt-10 max-w-xl mx-auto"
          >
            Plus a growing network of startups, tech companies, and enterprises
            that hire directly from our verified talent pool.
          </motion.p>
        </div>
      </section>
    </div>
  );
}

export default page;
