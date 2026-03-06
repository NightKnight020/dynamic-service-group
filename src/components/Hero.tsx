import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.05)_0%,_transparent_60%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <AnimateOnScroll>
          <div className="inline-block mb-8 px-4 py-1.5 border border-gold-400/30 text-gold-400 text-xs tracking-[0.3em] uppercase">
            Global Consultancy
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            Transforming
            <br />
            <span className="text-gold-400">Industries.</span>
            <br />
            Delivering
            <br />
            <span className="text-white/40">Excellence.</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Strategic consulting for the world&apos;s most ambitious organizations.
            We partner with leaders to drive innovation and unlock growth.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gold-400 text-black font-semibold text-sm tracking-wider uppercase hover:bg-gold-500 transition-all"
            >
              Schedule a Consultation
            </a>
            <a
              href="#industries"
              className="px-8 py-4 border border-white/20 text-white/70 text-sm tracking-wider uppercase hover:border-white/40 hover:text-white transition-all"
            >
              Explore Our Expertise
            </a>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
