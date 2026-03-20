"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import impacts from "@/data/impact";

function page() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div>
      <section id="impact" className="py-24 relative">
        <div className="container mx-auto px-4" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              The CyberDude Effect
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 custom-gradient ">
              Impact on the Ecosystem
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {impacts.map((impact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="border hover:border-orange-400  hover:shadow-[0_0_25px_rgba(251,146,60,0.7)]
             hover:-translate-y-2 rounded-2xl p-8 hover:border-glow transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow-primary transition-shadow">
                  <impact.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold mb-5 text-foreground">
                  {impact.title}
                </h3>
                <ul className="space-y-3">
                  {impact.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>{" "}
    </div>
  );
}

export default page;
