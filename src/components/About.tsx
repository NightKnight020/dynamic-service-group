import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll>
          <div className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-6">
            About DSG
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12">
            A global consultancy built for
            <span className="text-gold-400"> the future.</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimateOnScroll delay={200}>
            <p className="text-white/50 text-lg leading-relaxed">
              Dynamic Service Group is a global consultancy partnering with
              industry leaders to drive innovation, optimize operations, and
              unlock growth across diverse sectors. We operate at the
              intersection of strategy and execution.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <p className="text-white/50 text-lg leading-relaxed">
              Our cross-industry approach means we bring insights from aviation
              to blockchain, from AI to the arts — creating unique competitive
              advantages for every client we serve. Discretion and results
              define everything we do.
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={400}>
          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
