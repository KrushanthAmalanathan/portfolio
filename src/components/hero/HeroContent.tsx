import React, { useState } from "react";
import { Download, GraduationCap, Code2, Briefcase } from "lucide-react";
import { TypewriterText } from "../ui/TypewriterText";
import { StatusBadge } from "./StatusBadge";
import { PORTFOLIO_DATA } from "@/constants/portfolio";

export const HeroContent = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="max-w-4xl pt-2 md:pt-10">
      <div className="space-y-4">
        <StatusBadge />
        <div className="flex items-center gap-4">
          <TypewriterText 
            text="Hello, I'm" 
            className="text-zinc-400 text-base sm:text-lg md:text-2xl font-light"
            speed={50}
            showCursor={step === 0}
            onComplete={() => setTimeout(() => setStep(1), 200)}
          />
          {step >= 1 && <div className="h-[2px] w-12 bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.5)] animate-in slide-in-from-left duration-500" />}
        </div>
        
        <div className="h-[2rem] sm:h-[4rem] md:h-[13rem] w-full" /> 
        
        <div className="mt-2 md:mt-4 space-y-6">
          <div className="space-y-2">
            {step >= 1 && (
              <TypewriterText 
                text="Software Engineering Undergraduate" 
                className="text-xl sm:text-2xl md:text-3xl font-black text-white drop-shadow-md block"
                speed={30}
                showCursor={step === 1}
                onComplete={() => setTimeout(() => setStep(2), 100)}
              />
            )}
            {step >= 2 && (
              <TypewriterText 
                text="Front-End Developer & Freelancer" 
                className="text-base sm:text-lg md:text-2xl font-bold text-blue-400 tracking-wide block"
                speed={40}
                showCursor={step === 2}
                onComplete={() => setTimeout(() => setStep(3), 200)}
              />
            )}
          </div>

          <div className="min-h-[3rem]">
            {step >= 3 && (
              <TypewriterText 
                text="Passionate about UI/UX and building clean modern digital experiences for the web." 
                className="max-w-2xl text-zinc-300 text-sm sm:text-lg md:text-xl leading-relaxed font-medium"
                speed={20}
                showCursor={step === 3}
                onComplete={() => setTimeout(() => setStep(4), 200)}
              />
            )}
          </div>
        </div>

        {step >= 4 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-backwards">
            <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-3 md:gap-4 pt-6 md:pt-8">
              {[
                { icon: <GraduationCap size={16} />, text: "SLIIT", sub: `GPA ${PORTFOLIO_DATA.gpa}`, color: "text-blue-400" },
                { icon: <Code2 size={16} />, text: "MERN Stack", sub: "Developer", color: "text-cyan-400" },
                { icon: <Briefcase size={16} />, text: "Internship", sub: "2026 Intake", color: "text-indigo-400" }
              ].map((tag) => (
                <div 
                  key={tag.text}
                  className="group flex items-center gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-4 bg-zinc-900/60 backdrop-blur-xl border border-white/20 rounded-2xl transition-all duration-500 hover:border-blue-500/50 hover:bg-zinc-900/80 shadow-2xl flex-1 md:flex-none min-w-[140px]"
                >
                  <div className={`${tag.color} p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform`}>
                    {tag.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{tag.sub}</span>
                    <span className="text-xs md:text-sm font-bold text-zinc-200">{tag.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 md:gap-8 pt-8 md:pt-12">
              <button className="relative group px-6 md:px-10 py-3 md:py-5 bg-blue-600 rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(37,99,235,0.3)] flex-1 md:flex-none">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <span className="relative text-white font-black uppercase tracking-widest text-xs">
                  View Projects
                </span>
              </button>

              <a 
                href="/Krushanth A.pdf" 
                download="Krushanth_Amalanathan_CV.pdf"
                className="group flex items-center gap-3 md:gap-4 px-6 md:px-10 py-3 md:py-5 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl hover:bg-cyan-500/20 transition-all hover:scale-105 active:scale-95 flex-1 md:flex-none justify-center"
              >
                <Download size={20} className="text-cyan-400 group-hover:bounce" />
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase tracking-widest text-cyan-500/70 font-bold">Download</span>
                  <span className="text-xs font-black text-cyan-400 uppercase tracking-widest">Resume / CV</span>
                </div>
              </a>
            </div>

            <div className="pt-10 md:pt-12 flex items-center gap-4 text-zinc-500">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap">Explore More Below</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="flex items-center gap-6 pt-8 overflow-x-auto pb-4 no-scrollbar">
              {["React", "Next.js", "Node.js", "Tailwind", "MERN"].map((stack) => (
                <span key={stack} className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-lg border border-white/5 whitespace-nowrap">
                  {stack}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
