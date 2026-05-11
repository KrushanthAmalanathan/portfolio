import React from "react";
import { Heart, Code, ExternalLink, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="text-3xl font-black tracking-tighter text-white">
              KRUSHANTH<span className="text-blue-500">.</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs font-medium">
              A Software Engineering Undergraduate passionate about building digital futures.
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { icon: <Code size={20} />, href: "https://github.com/Krushanth-A", label: "GitHub" },
              { icon: <ExternalLink size={20} />, href: "#", label: "LinkedIn" },
              { icon: <Globe size={20} />, href: "#", label: "Twitter" }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] order-2 md:order-1">
            © {new Date().getFullYear()} Krushanth Amalanathan — Software Engineering Portfolio
          </div>
          
          <div className="flex items-center gap-8 order-1 md:order-2">
            <a href="#" className="text-zinc-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Terms of Service</a>
            <div className="flex items-center gap-2 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
              Built with <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" /> using Next.js
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
