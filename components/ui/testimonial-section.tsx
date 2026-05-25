"use client"

import { QuoteIcon } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/testimonial";

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const active = testimonials[current];

  const getAvatars = () => {
    const len = testimonials.length;
    return [-2, -1, 0, 1, 2].map((offset) => {
      const idx = (current + offset + len) % len;
      return testimonials[idx];
    });
  };

  const avatars = getAvatars();

  return (
    
    <section className="bg-black  bg-linear-to-b from-gray-900 via-black to-black mt-10 mt-10">
      <div className="container mx-auto px-4 py-16">
        
        <h2 className="text-center text-4xl font-semibold mb-16">
           What People Think <span className="custom-gradient">About us</span>?
        </h2>

        <div className="relative mt-10 min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="max-w-3xl mx-auto relative text-center"
            >
              <p className="text-testimonial-muted leading-relaxed">
                "{active.review}"
              </p>
              <QuoteIcon className="text-testimonial-quote w-12 h-12 rotate-180 absolute hidden md:block -left-16 top-0" />
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-8 text-center space-y-1"
          >
            <p className="text-orange-400 font-semibold text-2xl">
              {active.name}
            </p>
            <p className="text-sm text-testimonial-muted">{active.role}</p>
            <p className="text-sm text-testimonial-subtle">{active.location}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex mt-10 justify-center items-end gap-1">
          {avatars.map((t, i) => {
            const isCenter = i === 2;
            const isAdj = i === 1 || i === 3;
            return (
              <motion.button
                key={t.id}
                onClick={() => setCurrent(testimonials.findIndex((x) => x.id === t.id))}
                className="focus:outline-none"
                whileHover={{ scale: 1.1 }}
                animate={{
                  opacity: isCenter ? 1 : isAdj ? 0.7 : 0.3,
                  scale: isCenter ? 1.15 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className={`rounded-full object-cover ${
                    isCenter ? "w-[72px] h-[72px] ring-2 ring-orange-400" : isAdj ? "w-14 h-14" : "w-12 h-12"
                  }`}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-testimonial-accent w-6" : "bg-testimonial-subtle"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

