import { Check, X, ArrowRight, Star, Shield, Users } from "lucide-react";
import { plans, valueHighlights } from "@/data/plans";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-500/4 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-orange-500/3 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full theme-gradient text-black border  mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Strategic Access Tiers</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Choose Your <span className=" custom-gradient">Learning Path</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Designed to maximize ROI for learners. Far more affordable than
            offline institutes, with better outcomes and verified results.
          </p>
        </div>

        {/* Value Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-28">
          {valueHighlights.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-card border border-gray-800 text-center hover:scale-105 transition hover:shadow-orange-500/40 hover:shadow-md cursor-default hover:border-orange-500"
            >
              <item.icon className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-foreground">
                {item.value}
              </div>
              <div className="text-sm text-muted-foreground ">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border border-gray-800 transition-all duration-300 hover:scale-101 hover:shadow-orange-500 hover:shadow-xs hover:border-orange-500  ${plan.popular ? "border-orange-500 shadow shadow-orange-500 scale-102" : ""
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full theme-gradient text-black text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div
                className={`w-14 h-14 rounded-xl bg-orange-500 ${plan.gradient} flex items-center justify-center mb-6`}
              >
                <plan.icon className="w-7 h-7 text-white" />
              </div>

              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold custom-gradient mb-1 ">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold custom-gradient">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-accent shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground/30 shrink-0" />
                    )}
                    <span
                      className={
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground/50"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full  ${plan.popular
                  ? "flex justify-center items-center theme-gradient  text-black hover:shadow-[0_0_30px_hsl(25,100%,55%,0.5)] hover:scale-105 h-14 rounded-lg px-10 text-base"
                  : "bg-linear-to-r flex justify-center items-center theme-gradient text-black hover:shadow-[0_0_30px_hsl(25,100%,55%,0.5)] hover:scale-105 h-14 rounded-lg px-10 text-base"
                  }`}
              >
                {plan.cta} <ArrowRight className=" " />
              </button>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="p-8 md:p-12 rounded-2xl bg-linear-to-r from-primary/10 via-cyber-purple/10 to-cyber-pink/10 border border-yellow-800 scanline">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Why Choose <span className="custom-gradient">CyberDude</span>?
            </h3>
            <p className="text-muted-foreground mb-8">
              We&apos;re not just another course platform. We&apos;re a career
              transformation engine that bridges the gap between learning and
              employment.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm hover:text-orange-500  transition-colors cursor-pointer">
                <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-display font-semibold mb-2 text-foreground">
                  No Risk
                </h4>
                <p className="text-sm text-muted-foreground ">
                  Start free, upgrade when ready. No hidden fees.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm">
                <Star className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="font-display font-semibold mb-2 text-foreground">
                  Proven Results
                </h4>
                <p className="text-sm text-muted-foreground">
                  95% of Pro learners land jobs within 6 months.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm group ">
                <Users className="w-10 h-10 text-cyber-purple mx-auto mb-4 " />
                <h4 className="font-display font-semibold mb-2 text-foreground">
                  Community
                </h4>
                <p className="text-sm text-muted-foreground">
                  Join 50,000+ learners on the same journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
