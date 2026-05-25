import whyChooseData from "@/data/whyChooseData";

export default function WhyChooseSection({ className = "" }) {
  return (
    <section className={`relative ${className}`}>
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-center text-4xl font-semibold mb-16">
          Why choose <span className="custom-gradient">Cyberdude</span>?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {whyChooseData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl border border-orange-500/20 bg-[#121212] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(249,115,22,0.25)]"
              >
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 shadow-[0_0_20px_rgba(249,115,22,0.35)]">
                  <Icon className="h-5 w-5 text-orange-400" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-orange-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}