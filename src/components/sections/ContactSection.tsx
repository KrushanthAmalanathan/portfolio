"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Building2,
  Code,
  ExternalLink,
  Globe
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="bg-black py-32 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] left-[-5%] w-[30%] h-[30%] bg-indigo-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-blue-500 font-mono text-sm tracking-[0.5em] uppercase font-black"
              >
                Get In Touch
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight"
              >
                Let's build <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">something amazing.</span>
              </motion.h3>
            </div>
            
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="flex gap-6">
              {[
                { icon: <Code size={24} />, href: "https://github.com/Krushanth-A", label: "GitHub" },
                { icon: <ExternalLink size={24} />, href: "#", label: "LinkedIn" },
                { icon: <Globe size={24} />, href: "#", label: "Twitter" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group"
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <div className="relative bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-10 md:p-14 rounded-[2.5rem] space-y-10 shadow-2xl">
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group/item">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-blue-500 border border-white/5 group-hover/item:border-blue-500/50 transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Email Me</div>
                    <a href="mailto:krushanth0@gmail.com" className="text-lg font-bold text-white hover:text-blue-400 transition-colors">
                      krushanth0@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group/item">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-500 border border-white/5 group-hover/item:border-cyan-500/50 transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Call Me</div>
                    <a href="tel:+94755009877" className="text-lg font-bold text-white hover:text-cyan-400 transition-colors">
                      +94 755 009 877
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group/item">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-indigo-500 border border-white/5 group-hover/item:border-indigo-500/50 transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Location</div>
                    <div className="text-lg font-bold text-white">Colombo, Sri Lanka</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group/item">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 border border-white/5 group-hover/item:border-white/20 transition-all">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">University</div>
                    <div className="text-lg font-bold text-white">SLIIT University</div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="mailto:krushanth0@gmail.com"
                  className="w-full py-6 bg-blue-600 rounded-2xl flex items-center justify-center gap-3 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)] cursor-pointer"
                >
                  <Send size={18} /> Send Message
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
