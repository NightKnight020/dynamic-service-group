"use client";

import { useState, FormEvent } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <div className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-6">
            Contact
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Schedule a <span className="text-gold-400">consultation.</span>
          </h2>
          <p className="text-white/40 text-lg mb-12">
            Ready to transform your business? Reach out and our team will
            respond within 24 hours.
          </p>
        </AnimateOnScroll>

        {submitted ? (
          <AnimateOnScroll>
            <div className="p-12 border border-gold-400/20 text-center">
              <div className="text-gold-400 text-xl font-semibold mb-2">
                Thank you for reaching out.
              </div>
              <p className="text-white/40">
                Our team will be in touch within 24 hours.
              </p>
            </div>
          </AnimateOnScroll>
        ) : (
          <AnimateOnScroll delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full px-5 py-4 bg-charcoal-800 border border-white/10 text-white placeholder-white/30 focus:border-gold-400/50 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-5 py-4 bg-charcoal-800 border border-white/10 text-white placeholder-white/30 focus:border-gold-400/50 focus:outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Company"
                className="w-full px-5 py-4 bg-charcoal-800 border border-white/10 text-white placeholder-white/30 focus:border-gold-400/50 focus:outline-none transition-colors"
              />
              <select
                className="w-full px-5 py-4 bg-charcoal-800 border border-white/10 text-white/50 focus:border-gold-400/50 focus:outline-none transition-colors"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Industry of Interest
                </option>
                <option>Aviation</option>
                <option>Artificial Intelligence</option>
                <option>Transportation &amp; Logistics</option>
                <option>Blockchain &amp; Digital Assets</option>
                <option>Art &amp; Culture</option>
                <option>Service Industry</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Tell us about your project or challenge"
                rows={5}
                required
                className="w-full px-5 py-4 bg-charcoal-800 border border-white/10 text-white placeholder-white/30 focus:border-gold-400/50 focus:outline-none transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 bg-gold-400 text-black font-semibold text-sm tracking-wider uppercase hover:bg-gold-500 transition-colors"
              >
                Schedule a Consultation
              </button>
              <p className="text-white/20 text-sm text-center">
                Or email us directly at{" "}
                <a
                  href="mailto:info@dynamic-service-group.com"
                  className="text-gold-400/60 hover:text-gold-400 transition-colors"
                >
                  info@dynamic-service-group.com
                </a>
              </p>
            </form>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
