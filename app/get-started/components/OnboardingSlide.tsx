import { type SlideConfig } from "@/app/get-started/data/slideData";

interface OnboardingSlideProps {
  slide: SlideConfig;
  data: Record<string, string>;
  onSelect: (key: string, value: string) => void;
  direction: "next" | "prev";
}

const OnboardingSlide = ({
  slide,
  data,
  onSelect,
  direction,
}: OnboardingSlideProps) => {
  const animClass =
    direction === "next" ? "animate-slide-in-right" : "animate-slide-in-left";

  return (
    <div className={`w-full max-w-3xl mx-auto px-6 ${animClass}`}>
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-orange-500 mb-2 block font-display">
          {slide.subtitle}
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          {slide.title}
        </h2>
      </div>

      {/* Selection cards */}
      {slide.type === "selection" && slide.options && slide.dataKey && (
        <div
          className={`grid gap-3 ${
            slide.options.length <= 4
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {slide.options.map((option) => {
            const isSelected = data[slide.dataKey!] === option.label;

            return (
              <button
                key={option.label}
                onClick={() => onSelect(slide.dataKey!, option.label)}
                className={`group rounded-xl border p-5 text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "border-orange-500 bg-orange-500/10 glow-orange-sm"
                    : "border-border bg-card card-hover"
                }`}
              >
                <span className="text-2xl mb-3 block">{option.icon}</span>
                <h3
                  className={`font-display text-base font-semibold mb-1 transition-colors ${
                    isSelected
                      ? "text-orange-500"
                      : "text-foreground group-hover:text-orange-500"
                  }`}
                >
                  {option.label}
                </h3>
                {option.description && (
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Form fields */}
      {slide.type === "form" && slide.fields && (
        <div className="max-w-md mx-auto space-y-5">
          {slide.fields.map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-medium text-foreground mb-2 font-display">
                {field.label}
                {field.required && (
                  <span className="text-orange-500 ml-1">*</span>
                )}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={data[field.key] || ""}
                onChange={(e) => onSelect(field.key, e.target.value)}
                className="w-full h-12 rounded-lg border border-border bg-card px-4 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              />
            </div>
          ))}
        </div>
      )}

      {/* Hint */}
      {slide.hint && (
        <p className="text-center text-sm text-muted-foreground mt-8">
          👉 {slide.hint}
        </p>
      )}
    </div>
  );
};

export default OnboardingSlide;
