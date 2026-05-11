"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, ExternalLink, Code2, Layers, Monitor, Cpu } from "lucide-react";

const PROJECTS = [
  {
    title: "Hardware Management System",
    description: "A comprehensive enterprise solution for tracking inventory, sales, and supply chain operations for hardware retailers.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    github: "#",
    live: "#",
    role: "Full Stack Developer",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Cinema Management & POS",
    description: "Automated theatre operations including seat booking, snack POS, and movie scheduling with real-time analytics.",
    tech: ["PHP Laravel", "MySQL", "Bootstrap", "jQuery"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800",
    github: "#",
    live: "#",
    role: "Lead Developer",
    color: "from-red-500 to-orange-600"
  },
  {
    title: "Food Delivery App",
    description: "Multi-vendor food ordering platform featuring real-time order tracking and containerized deployment.",
    tech: ["React Native", "Node.js", "Docker", "Redux"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
    github: "#",
    live: "#",
    role: "Backend Architect",
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Garbage Management System",
    description: "IoT-integrated real-time monitoring system for urban waste collection and route optimization.",
    tech: ["Next.js", "Prisma", "Supabase", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
    github: "#",
    live: "#",
    role: "Full Stack Engineer",
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "ComfyFitness Application",
    description: "Workout tracking and diet planning application with personalized AI-driven recommendations.",
    tech: ["MERN Stack", "Framer Motion", "Chart.js"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    github: "#",
    live: "#",
    role: "UI/UX Developer",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Mobile Recipe App",
    description: "Native Android application for discovering and managing personal recipes with offline support.",
    tech: ["Kotlin", "SQLite", "Room", "Material UI"],
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=800",
    github: "#",
    live: "#",
    role: "Android Developer",
    color: "from-orange-500 to-yellow-600"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-black py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-500 font-mono text-sm tracking-[0.5em] uppercase font-black"
            >
              Selected Works
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black text-white tracking-tighter"
            >
              Innovation in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Engineering</span>
            </motion.h3>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right hidden md:block">
              <div className="text-white font-bold">6+ Major Projects</div>
              <div className="text-zinc-500 text-xs uppercase tracking-widest">Completed in 2024-2025</div>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-blue-500">
              <Cpu size={32} />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative flex flex-col h-full"
            >
              {/* Card Container */}
              <div className="relative flex-1 bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col transition-all duration-500 hover:border-blue-500/30 hover:bg-zinc-900/60 shadow-2xl">
                
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-10`} />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 z-20">
                    <span className="px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                      {project.role}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex-1 space-y-4">
                    <h4 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-bold text-zinc-500 uppercase tracking-widest group-hover:border-blue-500/20 group-hover:text-blue-400/80 transition-all">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-bold text-zinc-600 uppercase">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-10 mt-auto">
                    <a 
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-zinc-800/50 border border-white/5 rounded-2xl text-xs font-black text-white uppercase tracking-widest hover:bg-zinc-700 transition-all active:scale-95"
                    >
                      <Code size={16} /> Code
                    </a>
                    <a 
                      href={project.live}
                      className="w-14 h-14 flex items-center justify-center bg-blue-600 rounded-2xl text-white hover:bg-blue-500 hover:scale-110 transition-all active:rotate-12 shadow-[0_10px_20px_rgba(37,99,235,0.3)]"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
