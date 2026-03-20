"use client";

import { useState } from "react";
import PersonaSelector, { type Persona } from "@/components/ui/PersonaSelector";
import ContactForm from "@/components/ui/ContactForm";
import GeneralForm from "@/components/ui/GeneralForm";

import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";

const Contact = () => {
  const [queryType, setQueryType] = useState<"general" | "specific">("general");
  const [selectedPersona, setSelectedPersona] = useState<Persona>("student");

  return (
    <div>
      <SiteHeader />

      <div className="min-h-screen bg-background relative">
        {/* background background blur */}
        <div className="absolute inset-0 section-pattern opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-12">
            <p className="text-sm font-display font-semibold tracking-widest uppercase text-muted-foreground mb-3">
              Contact Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
              How can we <span className="custom-gradient">help you?</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Select your role below and we&apos;ll tailor the experience to get
              you exactly what you need fast.
            </p>
          </header>

          {/* Query buttons to choose form */}
          <section className="mb-10">
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setQueryType("general")}
                className={`px-6 py-3 rounded-lg text-sm font-display font-semibold transition-all duration-300 cursor-pointer ${queryType === "general"
                  ? "bg-orange-500 text-primary-foreground glow-orange"
                  : "border border-border bg-card text-foreground hover:border-orange-500/40 hover:bg-secondary"
                  }`}
              >
                General Inquiry
              </button>
              <button
                onClick={() => setQueryType("specific")}
                className={`px-6 py-3 rounded-lg text-sm font-display font-semibold transition-all duration-300 cursor-pointer ${queryType === "specific"
                  ? "bg-orange-500 text-primary-foreground glow-orange"
                  : "border border-border bg-card text-foreground hover:border-orange-500/40 hover:bg-secondary"
                  }`}
              >
                Specific Query
              </button>
            </div>
          </section>

          {/* General Form */}
          {queryType === "general" && (
            <section
              key="general"
              className="rounded-xl border border-border bg-card p-6 sm:p-8 glow-orange animate-fade-in-up"
            >
              <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                <h2 className="text-lg font-display font-semibold text-foreground">
                  General Inquiry
                </h2>
              </div>
              <GeneralForm />
            </section>
          )}

          {/* Persona Selection */}
          {queryType === "specific" && (
            <>
              <section className="mb-10">
                <p className="text-sm font-display font-semibold tracking-widest uppercase  text-orange-500 mb-4 text-center">
                  Select your role
                </p>
                <PersonaSelector
                  selected={selectedPersona}
                  onSelect={setSelectedPersona}
                />
              </section>

              {/* Dynamic Form */}
              {selectedPersona && (
                <section
                  key={selectedPersona}
                  className="rounded-xl border border-border bg-card p-6 sm:p-8 glow-orange animate-fade-in-up"
                >
                  <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
                    <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                    <h2 className="text-lg font-display font-semibold text-foreground">
                      {selectedPersona === "student" && "Student / Learner Inquiry"}
                      {selectedPersona === "recruiter" && "Recruiter Inquiry"}
                      {selectedPersona === "organization" && "Organization Inquiry"}
                      {selectedPersona === "mentor" && "Mentor Application"}
                      {selectedPersona === "guardian" && "Guardian Access"}
                    </h2>
                  </div>
                  <ContactForm persona={selectedPersona} />
                </section>
              )}
            </>)}

          {/* World Map */}
          <section className="mt-16 mb-8">
            <div className="relative rounded-xl border border-border bg-card/40 p-4 overflow-hidden">
              <p className="text-center text-sm font-display font-semibold tracking-widest uppercase  text-orange-500 mb-4">
                Our Locations
              </p>
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  title="CyberDude Branch Locations"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15550000!2d80!3d15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDAwJzAwLjAiTiA4MMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
                <span>📍 Dubai, UAE</span>
                <span>📍 Tamil Nadu, India</span>
                <span>📍 Malaysia</span>
              </div>
            </div>
          </section>

          {/* Footer note */}
          <footer className="mt-12 text-center text-xs text-muted-foreground">
            Your data is handled securely in accordance with applicable data
            protection regulations.
          </footer>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default Contact;
