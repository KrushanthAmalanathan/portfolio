"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  Wrench, 
  BrainCircuit,
  Terminal,
  Cpu
} from "lucide-react";

const SKILLS_DATA = [
  {
    category: "Programming Languages",
    icon: <Terminal className="text-blue-500" size={24} />,
    skills: ["Python", "Java", "C", "C++", "Kotlin", "JavaScript"],
    accent: "from-blue-500 to-cyan-500"
  },
  {
    category: "Frontend Development",
    icon: <Layers className="text-cyan-500" size={24} />,
    skills: ["HTML5", "CSS3", "Tailwind CSS", "React", "Next.js"],
    accent: "from-cyan-500 to-blue-400"
  },
  {
    category: "Backend & Frameworks",
    icon: <Server className="text-indigo-500" size={24} />,
    skills: ["Node.js", "Express.js", "PHP Laravel"],
    accent: "from-indigo-500 to-blue-500"
  },
  {
    category: "Database Systems",
    icon: <Database className="text-blue-400" size={24} />,
    skills: ["MongoDB", "MySQL", "SQLite"],
    accent: "from-blue-400 to-indigo-400"
  },
  {
    category: "Development Tools",
    icon: <Wrench className="text-zinc-400" size={24} />,
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "IntelliJ"],
    accent: "from-zinc-400 to-zinc-600"
  },
  {
    category: "Professional Soft Skills",
    icon: <BrainCircuit className="text-purple-500" size={24} />,
    skills: ["Problem Solving", "Teamwork", "Leadership", "Analytical Thinking"],
    accent: "from-purple-500 to-indigo-500"
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="bg-black py-32 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="space-y-4 mb-20 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-mono text-sm tracking-[0.5em] uppercase font-black"
          >
            Technical Stack
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Proficiencies</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((item, idx) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Card Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.accent} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`} />
              
              {/* Card Content */}
              <div className="relative h-full bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl flex flex-col space-y-6 hover:border-white/20 transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-zinc-100 uppercase tracking-wider">{item.category}</h4>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-zinc-400 group-hover:text-white group-hover:border-blue-500/30 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Animated Skill Bar (Visual Flair) */}
                <div className="pt-4 space-y-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <div className="flex justify-between text-[10px] uppercase font-black tracking-widest text-zinc-500">
                    <span>Proficiency</span>
                    <span className="text-blue-500">Advanced</span>
                  </div>
                  <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: idx % 2 === 0 ? "85%" : "92%" }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                      className={`h-full bg-gradient-to-r ${item.accent}`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature: Coding Activity Mimic */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-zinc-900/30 border border-white/5 rounded-3xl backdrop-blur-sm"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Cpu size={32} className="animate-spin-slow" />
              </div>
              <div>
                <h5 className="text-xl font-bold text-white">Full-Stack Capability</h5>
                <p className="text-zinc-500 text-sm">Specializing in building end-to-end scalable software architectures.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 bg-white/5 border border-white/5 rounded-2xl">
                <span className="text-2xl font-black text-white">6+</span>
                <span className="ml-2 text-xs text-zinc-500 uppercase tracking-widest">Languages</span>
              </div>
              <div className="px-6 py-3 bg-white/5 border border-white/5 rounded-2xl">
                <span className="text-2xl font-black text-white">10+</span>
                <span className="ml-2 text-xs text-zinc-500 uppercase tracking-widest">Tools</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};
