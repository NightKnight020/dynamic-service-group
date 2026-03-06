import AnimateOnScroll from "./AnimateOnScroll";

const stats = [
  { value: "50+", label: "Industries Served" },
  { value: "6", label: "Continents Reached" },
  { value: "Executive", label: "Level Consulting" },
  { value: "$500M+", label: "Client Value Created" },
];

export default function Stats() {
  return (
    <section className="py-32 px-6 bg-charcoal-800 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <AnimateOnScroll key={s.label} delay={i * 100}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-400 mb-3">
                  {s.value}
                </div>
                <div className="text-white/40 text-sm tracking-widest uppercase">
                  {s.label}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
