"use client";

import React from "react";
import { motion } from "framer-motion";
import { StatusBadge } from "./StatusBadge";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { Download, Mail, ExternalLink, GraduationCap, MapPin, Award } from "lucide-react";

export const PremiumHeroContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-7xl mx-auto py-12 lg:py-24">
      {/* Left Side: Typography Intro */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 space-y-8 text-left"
      >
        <div className="space-y-4">
          <StatusBadge />
          
          <motion.div variants={itemVariants} className="overflow-hidden">
            <h2 className="text-blue-500 font-mono text-sm md:text-base tracking-[0.3em] uppercase">
              Software Engineering Undergraduate
            </h2>
          </motion.div>

          {/* Spacer for the floating name (Krushanth) which is animated from Navbar */}
          <div className="h-[6rem] md:h-[9rem] w-full" /> 

          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
                Amalanathan
              </span>
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed font-light"
          >
            {PORTFOLIO_DATA.summary}
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
          <button className="group relative px-8 py-4 bg-blue-600 rounded-xl overflow-hidden transition-all hover:bg-blue-500 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <span className="relative flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
              View Projects <ExternalLink size={16} />
            </span>
          </button>

          <button className="group px-8 py-4 border border-zinc-800 rounded-xl hover:border-zinc-400 transition-all active:scale-95 flex items-center gap-2 text-zinc-400 hover:text-white font-bold uppercase tracking-widest text-xs">
            Download CV <Download size={16} />
          </button>

          <button className="group p-4 border border-zinc-800 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all active:scale-95 text-zinc-400 hover:text-blue-400">
            <Mail size={20} />
          </button>
        </motion.div>
      </motion.div>

      {/* Right Side: Floating Glass Profile Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 w-full max-w-md"
      >
        <div className="relative group">
          {/* Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative flex flex-col bg-zinc-950/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            {/* Profile Image Section */}
            <div className="aspect-[4/5] relative overflow-hidden bg-zinc-900">
               {/* Animated tech scan line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 animate-scan" />
              
              <img 
                src="/profile.jpg" // User should provide this
                alt={PORTFOLIO_DATA.name}
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                }}
              />
              
              {/* Card Header Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white">{PORTFOLIO_DATA.name}</h3>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-mono mt-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  Software Engineer
                </div>
              </div>
            </div>

            {/* Academic Info Grid */}
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
                    <GraduationCap size={12} /> University
                  </div>
                  <div className="text-xs text-zinc-300 font-medium">SLIIT</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
                    <Award size={12} /> Current GPA
                  </div>
                  <div className="text-xs text-blue-400 font-bold">{PORTFOLIO_DATA.gpa} / 4.0</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-blue-500 mt-1 shrink-0" />
                  <div className="text-sm text-zinc-400">
                    Based in <span className="text-white">{PORTFOLIO_DATA.location}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-[14px] h-[14px] rounded-full border border-zinc-700 flex items-center justify-center text-[8px] font-bold text-zinc-500 mt-1 shrink-0">
                    ID
                  </div>
                  <div className="text-sm text-zinc-400">
                    {PORTFOLIO_DATA.degree}
                  </div>
                </div>
              </div>

              {/* Progress/Credits */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-zinc-500">
                  <span>Progress to Degree</span>
                  <span className="text-blue-400">{PORTFOLIO_DATA.credits} / 128 Credits</span>
                </div>
                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "82%" }}
                    transition={{ duration: 1.5, delay: 1.2, ease: "circOut" }}
                    className="h-full bg-blue-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(400px); opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </div>
  );
};
