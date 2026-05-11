import React from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { PORTFOLIO_DATA } from "@/constants/portfolio";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionTitle title="About Me" subtitle="The journey into the future of technology." />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-zinc-300 text-lg leading-relaxed">
            {PORTFOLIO_DATA.summary}
          </p>
          <p className="text-zinc-400">
            I specialize in building bridges between complex backend systems and intuitive, 
            cinematic user interfaces. My approach combines technical precision with artistic 
            vision.
          </p>
        </div>
        <div className="aspect-square bg-zinc-900 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="text-zinc-700 font-mono text-sm">[Robot Avatar Placeholder]</span>
        </div>
      </div>
    </section>
  );
};
