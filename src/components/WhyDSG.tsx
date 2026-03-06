import AnimateOnScroll from "./AnimateOnScroll";

const differentiators = [
  {
    title: "Global Perspective, Local Expertise",
    description: "We combine worldwide reach with deep understanding of local markets, regulations, and cultures.",
    number: "01",
  },
  {
    title: "Cross-Industry Innovation",
    description: "We bring insights from one industry to transform another — creating unique competitive advantages.",
    number: "02",
  },
  {
    title: "Results-Driven Approach",
    description: "Every engagement is measured by outcomes. We don't just advise — we deliver measurable impact.",
    number: "03",
  },
  {
    title: "Confidential & Discreet",
    description: "We serve high-net-worth individuals and global corporations with the utmost discretion and confidentiality.",
    number: "04",
  },
];

export default function WhyDSG() {
  return (
    <section id="why-dsg" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <div className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-6">
            Why DSG
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            What sets us <span className="text-gold-400">apart.</span>
          </h2>
        </AnimateOnScroll>

        <div className="space-y-0">
          {differentiators.map((d, i) => (
            <AnimateOnScroll key={d.number} delay={i * 100}>
              <div className="group flex gap-8 py-10 border-b border-white/5 hover:border-gold-400/20 transition-colors duration-500">
                <span className="text-gold-400/30 text-sm font-mono mt-1 group-hover:text-gold-400 transition-colors">
                  {d.number}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-gold-400 transition-colors">
                    {d.title}
                  </h3>
                  <p className="text-white/40 text-lg max-w-xl">{d.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
