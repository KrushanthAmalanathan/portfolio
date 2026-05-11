"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Target, 
  Code2, 
  Cpu, 
  Award, 
  TrendingUp,
  BrainCircuit,
  ArrowRight
} from "lucide-react";

const ROADMAP_DATA = [
  {
    phase: "Phase 1",
    role: "Intern Software Engineer",
    status: "Completed",
    goals: "Master industry-standard software development lifecycles and backend engineering.",
    tech: ["MERN Stack", "Git/GitHub", "API Development"],
    certs: ["SLIIT Academic Excellence", "Web Development"],
    leadership: "Agile Collaboration & Pair Programming",
    aiPlans: "Exploring basic ML concepts and integration.",
    icon: <Code2 className="text-blue-400" />
  },
  {
    phase: "Phase 2",
    role: "Full Stack Engineer",
    status: "Current",
    goals: "Build and deploy scalable enterprise applications with high performance.",
    tech: ["Next.js", "TypeScript", "Docker", "AWS"],
    certs: ["AWS Cloud Practitioner", "React Expert"],
    leadership: "Project Ownership & Technical Documentation",
    aiPlans: "Implementing AI-powered features in web apps.",
    icon: <TrendingUp className="text-cyan-400" />
  },
  {
    phase: "Phase 3",
    role: "Senior Software Engineer",
    status: "Upcoming",
    goals: "Architecting complex system designs and leading technical strategy.",
    tech: ["System Design", "Microservices", "Kubernetes"],
    certs: ["AWS Solutions Architect", "CKAD"],
    leadership: "Mentoring Juniors & Team Leadership",
    aiPlans: "Optimizing LLM workflows and fine-tuning models.",
    icon: <Award className="text-indigo-400" />
  },
  {
    phase: "Phase 4",
    role: "AI Software Architect",
    status: "Future",
    goals: "Bridging the gap between software architecture and advanced artificial intelligence.",
    tech: ["PyTorch", "TensorFlow", "Generative AI", "NLP"],
    certs: ["Google Professional ML Engineer", "DeepLearning.AI"],
    leadership: "Technical Visionary & AI Strategy Lead",
    aiPlans: "Building autonomous AI agents and neural architectures.",
    icon: <BrainCircuit className="text-purple-400" />
  }
];

export const RoadmapSection = () => {
  return (
    <section id="roadmap" className="bg-zinc-950 py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="space-y-4 mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-blue-500 font-mono text-sm tracking-[0.5em] uppercase font-black"
          >
            Evolution Path
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter"
          >
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Roadmap</span>
          </motion.h3>
        </div>

        {/* Roadmap Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 transform -translate-y-1/2" />

          {ROADMAP_DATA.map((item, idx) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group"
            >
              {/* Status Indicator */}
              <div className="mb-12 flex flex-col items-center">
                <div className={`relative w-20 h-20 rounded-full bg-zinc-900 border-2 flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                  item.status === "Completed" ? "border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]" :
                  item.status === "Current" ? "border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] animate-pulse" :
                  "border-zinc-800"
                }`}>
                  {item.icon}
                  {item.status === "Completed" && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-4 border-zinc-950">
                      <Rocket size={14} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-white transition-colors">
                  {item.phase}
                </div>
              </div>

              {/* Glass Card */}
              <div className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl space-y-6 hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col shadow-2xl">
                <div className="space-y-2">
                  <div className={`text-[10px] font-bold uppercase tracking-widest ${
                    item.status === "Completed" ? "text-blue-500" : 
                    item.status === "Current" ? "text-cyan-400" : "text-zinc-600"
                  }`}>
                    {item.status}
                  </div>
                  <h4 className="text-xl font-black text-white leading-tight">{item.role}</h4>
                </div>

                <div className="space-y-4 flex-1">
                  <div className="flex gap-3">
                    <Target size={16} className="text-blue-500 shrink-0" />
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">{item.goals}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Stack to Master</div>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map(t => (
                        <span key={t} className="px-2 py-1 bg-white/5 border border-white/5 rounded-md text-[9px] font-bold text-zinc-400">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">AI & Leadership</div>
                    <p className="text-[10px] text-zinc-500 leading-relaxed">{item.aiPlans}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between text-zinc-500">
                  <span className="text-[9px] font-bold uppercase tracking-widest">View Details</span>
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-10 bg-blue-600/5 border border-blue-500/10 rounded-[3rem] text-center backdrop-blur-sm"
        >
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-4xl mx-auto italic">
            "My mission is to become an <span className="text-white font-bold">AI Software Architect</span> who bridges the gap between pure code and cognitive computing, building systems that not only function but think."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
