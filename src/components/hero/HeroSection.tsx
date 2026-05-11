"use client";

import React, { useState } from "react";
import { RobotVideoBackground } from "./RobotVideoBackground";
import { HeroContent } from "./HeroContent";
import { Navbar } from "../layout/Navbar";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { GraduationCap, Code2, Briefcase } from "lucide-react";

import { AcademicSection } from "../sections/AcademicSection";
import { SkillsSection } from "../sections/SkillsSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { RoadmapSection } from "../sections/RoadmapSection";
import { ContactSection } from "../sections/ContactSection";
import { Footer } from "../layout/Footer";

export const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <Navbar showName={showContent} />
      <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col pt-32 md:pt-48">
        {/* Background layer: plays video then switches to static image at 15s */}
        <RobotVideoBackground onComplete={() => setShowContent(true)} />
        
        {/* Dark cinematic overlay for readability */}
        <div 
          className={`absolute inset-0 z-10 bg-gradient-to-br md:bg-gradient-to-r from-black via-black/80 md:via-black/60 to-transparent pointer-events-none transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`} 
        />
        
        {/* Details Reveal */}
        <div className="relative z-50 w-full px-6 md:px-24 pointer-events-none">
          <div className="pointer-events-auto">
            {showContent && <HeroContent />}
          </div>
        </div>
      </section>
      
      {/* Pure White About Section */}
      <section id="about" className="relative z-10 bg-white py-32 px-6 overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50/50 -skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-20">
          {/* Left Side: Stats/Badge on white */}
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-4">
              <h2 className="text-blue-600 font-mono text-sm tracking-[0.4em] uppercase font-black">Professional Profile</h2>
              <p className="text-zinc-400 font-light leading-relaxed">
                Transforming complex challenges into elegant, scalable software solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                { label: "Current GPA", val: PORTFOLIO_DATA.gpa, icon: <GraduationCap className="text-blue-600" /> },
                { label: "Completed Credits", val: PORTFOLIO_DATA.credits, icon: <Code2 className="text-cyan-600" /> },
                { label: "Academic Year", val: PORTFOLIO_DATA.year, icon: <Briefcase className="text-indigo-600" /> }
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-6 p-6 rounded-3xl bg-zinc-50 border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</div>
                    <div className="text-xl font-black text-zinc-900">{stat.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Narrative */}
          <div className="lg:w-2/3 space-y-10">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tight leading-tight">
                Crafting the future <br /> 
                <span className="text-blue-600">one line at a time.</span>
              </h3>
              <p className="text-zinc-500 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
                {PORTFOLIO_DATA.summary}
              </p>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              {PORTFOLIO_DATA.skills.map((skill) => (
                <span key={skill} className="px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-600 text-sm font-bold border border-zinc-200">
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="pt-10">
              <button className="px-10 py-5 bg-zinc-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)]">
                Explore My Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Futuristic Academic Dashboard Section */}
      <AcademicSection />

      {/* Software Engineering Skills Section */}
      <SkillsSection />

      {/* Internship Experience Timeline Section */}
      <ExperienceSection />

      {/* Award-Winning Projects Section */}
      <ProjectsSection />

      {/* Futuristic Career Roadmap Section */}
      <RoadmapSection />

      {/* Modern Contact Section */}
      <ContactSection />

      {/* Premium Footer */}
      <Footer />
    </>
  );
};









