"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  Award, 
  CheckCircle2, 
  Clock, 
  Building2,
  Users
} from "lucide-react";

export const AcademicSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const gpaPercentage = (parseFloat(PORTFOLIO_DATA.gpa) / 4.0) * 100;

  return (
    <section id="academic" className="bg-zinc-950 py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
            <div className="space-y-4">
              <h2 className="text-blue-500 font-mono text-sm tracking-[0.5em] uppercase font-black">University Dashboard</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tight">Academic Profile</h3>
            </div>
            <div className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Active Enrollment</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: Degree Info & Status */}
            <div className="lg:col-span-2 space-y-8">
              {/* Degree Information Card */}
              <motion.div variants={itemVariants} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/50 to-indigo-600/50 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-1000" />
                <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl space-y-8">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">Degree Information</div>
                      <h4 className="text-2xl md:text-3xl font-bold text-white">{PORTFOLIO_DATA.degree}</h4>
                    </div>
                    <GraduationCap className="text-zinc-700" size={40} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 border border-white/5">
                        <Building2 size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">University</div>
                        <div className="text-sm text-zinc-200">{PORTFOLIO_DATA.university}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 border border-white/5">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Campus</div>
                        <div className="text-sm text-zinc-200">{PORTFOLIO_DATA.university.split("–")[1]?.trim() || "Malabe Campus"}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 border border-white/5">
                        <BookOpen size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Specialization</div>
                        <div className="text-sm text-zinc-200">Software Engineering</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 border border-white/5">
                        <Users size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Batch Type</div>
                        <div className="text-sm text-zinc-200">{PORTFOLIO_DATA.batch}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Semester Timeline */}
              <motion.div variants={itemVariants} className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
                <div className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Semester Progress</div>
                <div className="relative h-2 w-full bg-zinc-800 rounded-full overflow-hidden mb-12">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "82%" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="absolute h-full bg-gradient-to-r from-blue-600 to-indigo-500"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((year) => (
                    <div key={year} className="space-y-4">
                      <div className={`text-xs font-bold uppercase tracking-widest ${year <= 4 ? "text-blue-500" : "text-zinc-600"}`}>Year 0{year}</div>
                      <div className="flex gap-2">
                        <div className={`h-1.5 flex-1 rounded-full ${year < 4 || (year === 4 && PORTFOLIO_DATA.year.includes("Semester 1")) || (year === 4 && PORTFOLIO_DATA.year.includes("Semester 2")) ? "bg-blue-500" : "bg-zinc-800"}`} />
                        <div className={`h-1.5 flex-1 rounded-full ${year < 4 || (year === 4 && PORTFOLIO_DATA.year.includes("Semester 2")) ? "bg-blue-500" : "bg-zinc-800"}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: GPA & Stats */}
            <div className="space-y-8">
              {/* GPA Circle Card */}
              <motion.div variants={itemVariants} className="group relative aspect-square md:aspect-auto">
                <div className="absolute -inset-1 bg-blue-500/20 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                <div className="relative h-full bg-zinc-900/80 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl flex flex-col items-center justify-center text-center space-y-6">
                  <div className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">GPA Overview</div>
                  
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="80"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-zinc-800"
                      />
                      <motion.circle
                        cx="96"
                        cy="96"
                        r="80"
                        stroke="currentColor"
                        strokeWidth="10"
                        strokeDasharray={Math.PI * 2 * 80}
                        initial={{ strokeDashoffset: Math.PI * 2 * 80 }}
                        whileInView={{ strokeDashoffset: Math.PI * 2 * 80 * (1 - gpaPercentage / 100) }}
                        transition={{ duration: 2, ease: "circOut" }}
                        strokeLinecap="round"
                        fill="transparent"
                        className="text-blue-500"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-5xl font-black text-white">{PORTFOLIO_DATA.gpa}</div>
                      <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mt-1">/ 4.00</div>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 font-light max-w-[200px]">
                    Maintained consistent academic performance across 106 completed credits.
                  </p>
                </div>
              </motion.div>

              {/* Status Stats */}
              <div className="grid grid-cols-1 gap-4">
                <motion.div variants={itemVariants} className="p-6 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500">
                      <CheckCircle2 size={18} />
                    </div>
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Completed Credits</div>
                  </div>
                  <div className="text-xl font-black text-white">{PORTFOLIO_DATA.credits}</div>
                </motion.div>

                <motion.div variants={itemVariants} className="p-6 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500">
                      <Clock size={18} />
                    </div>
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Intake Batch</div>
                  </div>
                  <div className="text-sm font-black text-white">{PORTFOLIO_DATA.intake}</div>
                </motion.div>

                <motion.div variants={itemVariants} className="p-6 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500">
                      <Calendar size={18} />
                    </div>
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Current Semester</div>
                  </div>
                  <div className="text-sm font-black text-white">Y4 S2</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Internal MapPin helper as I forgot to import it from lucide
const MapPin = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
