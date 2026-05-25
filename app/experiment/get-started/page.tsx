'use client'

import { useState, useCallback, useMemo } from "react";
import OnboardingHero from "@/app/experiment/get-started/components/OnboardingHero";
import OnboardingSlide from "@/app/experiment/get-started/components/OnboardingSlide";
import OnboardingComplete from "@/app/experiment/get-started/components/OnboardingComplete";
import SlideProgress from "@/app/experiment/get-started/components/SlideProgress";
import { ROLE_SLIDE, getSlidesForRole } from "@/app/experiment/get-started/data/slideData";

const Index = () => {
  const [started, setStarted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [data, setData] = useState<Record<string, string>>({});

  // Build slides dynamically: role slide first, then persona-specific slides
  const slides = useMemo(() => {
    const role = data.role;
    if (!role) return [ROLE_SLIDE];
    return [ROLE_SLIDE, ...getSlidesForRole(role)];
  }, [data.role]);

  const totalSlides = slides.length;

  const handleSelect = useCallback((key: string, value: string) => {
    setData((prev) => {
      // If role changes, reset everything except role and go back to slide 1
      if (key === "role" && prev.role !== value) {
        return { role: value };
      }
      return { ...prev, [key]: value };
    });
  }, []);

  const handleNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection("next");
      setCurrentSlide((s) => s + 1);
    } else {
      setCompleted(true);
    }
  }, [currentSlide, totalSlides]);

  const handleBack = useCallback(() => {
    if (currentSlide > 0) {
      setDirection("prev");
      setCurrentSlide((s) => s - 1);
    }
  }, [currentSlide]);

  if (!started) {
    return <OnboardingHero onStart={() => setStarted(true)} />;
  }

  if (completed) {
    return <OnboardingComplete role={data.role} />;
  }

  const slide = slides[currentSlide];

  // Determine if user can proceed
  const canProceed = (() => {
    if (slide.type === "selection" && slide.dataKey) {
      return (data[slide.dataKey] || "") !== "";
    }
    if (slide.type === "form" && slide.fields) {
      return slide.fields
        .filter((f) => f.required)
        .every((f) => (data[f.key] || "").trim() !== "");
    }
    return true;
  })();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SlideProgress current={currentSlide} total={totalSlides} />

      <div className="flex-1 flex items-center justify-center overflow-hidden relative">
        <OnboardingSlide
          key={`${data.role}-${currentSlide}`}
          slide={slide}
          data={data}
          onSelect={handleSelect}
          direction={direction}
        />
      </div>

      <div className="p-6 flex justify-between items-center max-w-3xl mx-auto w-full">
        <button
          onClick={handleBack}
          className={`text-sm font-medium transition-colors ${
            currentSlide === 0
              ? "text-muted-foreground/30 cursor-not-allowed"
              : "text-muted-foreground hover:text-foreground"
          }`}
          disabled={currentSlide === 0}
        >
          ← Back
        </button>

        <button
          onClick={handleNext}
          disabled={!canProceed}
          className={`px-8 py-3 rounded-lg font-display font-semibold text-sm transition-all ${
            canProceed
              ? "bg-orange-500 text-primary-foreground glow-orange hover:bg-orange-500/90"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
        >
          {currentSlide === totalSlides - 1 ? "Complete Setup" : "Continue →"}
        </button>
      </div>
    </div>
  );
};

export default Index;
