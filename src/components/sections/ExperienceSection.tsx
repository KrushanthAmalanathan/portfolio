"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  ChevronRight,
  Code2,
  Lock,
  Zap,
  Users2,
  Bug
} from "lucide-react";

const EXPERIENCE_DATA = [
  {
    role: "Intern Software Engineer",
    company: "Jasmin Media (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    period: "October 2024 – April 2025",
    description: "Contributing to the development of enterprise-level software solutions with a focus on backend robustness and clean frontend integration.",
    responsibilities: [
      { text: "Developed scalable backend service APIs for media management systems.", icon: <Code2 size={16} /> },
      { text: "Provided frontend integration support using modern React frameworks.", icon: <Zap size={16} /> },
      { text: "Implemented secure authentication and role-based access control.", icon: <Lock size={16} /> },
      { text: "Executed rigorous debugging and performance optimization cycles.", icon: <Bug size={16} /> },
      { text: "Collaborated in an Agile environment with cross-functional teams.", icon: <Users2 size={16} /> }
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-zinc-950 py-32 px-6 relative overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/backimage.png')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/20 to-zinc-950" />
      </div>

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="space-y-4 mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-mono text-sm tracking-[0.5em] uppercase font-black"
          >
            Career Journey
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Experience</span>
          </motion.h3>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/50 via-zinc-800 to-transparent transform md:-translate-x-1/2" />

          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="relative mb-20 last:mb-0">
              {/* Timeline Node */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="absolute left-0 md:left-1/2 w-4 h-4 bg-zinc-950 border-2 border-blue-500 rounded-full z-20 transform -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              />

              {/* Experience Card */}
              <div className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-12`}>
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`w-full md:w-1/2 pl-10 md:pl-0 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4">
                    <Calendar size={12} /> {exp.period}
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black text-white mb-2">{exp.role}</h4>
                  <div className={`flex items-center gap-2 text-zinc-400 text-sm font-medium mb-6 ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <Briefcase size={16} className="text-blue-500" /> {exp.company}
                    <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                    <MapPin size={16} className="text-zinc-600" /> {exp.location}
                  </div>

                  {/* Glass Card */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500" />
                    <div className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-2xl space-y-6 text-left">
                      <p className="text-zinc-400 text-sm leading-relaxed italic">
                        "{exp.description}"
                      </p>
                      
                      <div className="space-y-4">
                        <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest border-b border-white/5 pb-2">
                          Key Responsibilities
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          {exp.responsibilities.map((item, rIdx) => (
                            <motion.div 
                              key={rIdx}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.5 + (rIdx * 0.1) }}
                              className="flex items-center gap-3 text-sm text-zinc-300 group/item"
                            >
                              <div className="text-blue-500/50 group-hover/item:text-blue-400 transition-colors">
                                {item.icon}
                              </div>
                              <span className="group-hover/item:text-white transition-colors">
                                {item.text}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <button className="flex items-center gap-2 text-xs font-bold text-blue-500 uppercase tracking-widest hover:text-white transition-colors group/btn">
                          View Project Details <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div className="hidden md:block w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
