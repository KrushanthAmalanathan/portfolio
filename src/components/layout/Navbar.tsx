"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface Props {
  showName: boolean;
}

export const Navbar = ({ showName }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Academic", href: "#academic" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-700 px-6 md:px-8 py-6",
          scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
        )}
      >
        <div className="max-w-[1600px] mx-auto flex justify-between items-center relative">
          {/* Desktop Left Side */}
          <div className="hidden lg:flex gap-6 items-center">
            {navLinks.slice(0, 3).map(link => (
              <a key={link.label} href={link.href} className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex gap-6 items-center">
            {navLinks.slice(3).map(link => (
              <a key={link.label} href={link.href} className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
            <a 
              href="/Krushanth A.pdf" 
              download="Krushanth_Amalanathan_CV.pdf"
              className="px-6 py-2 bg-blue-600 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-500/25"
            >
              Resume
            </a>
          </div>

          {/* Mobile Resume Button Placeholder (visible on mobile navbar) */}
          <div className="lg:hidden">
            <button className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
              CV
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      <div className={cn(
        "fixed inset-0 z-[55] bg-black/95 backdrop-blur-2xl lg:hidden transition-transform duration-500 ease-in-out pt-32 px-10",
        mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="flex flex-col gap-8">
          {navLinks.map((link, idx) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-black text-white tracking-tighter hover:text-blue-500 transition-colors"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-10 border-t border-white/5">
            <button className="w-full py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl">
              Download Full Resume
            </button>
          </div>
        </div>
      </div>

      {/* Floating Name that transitions from Hero to Header */}
      <div 
        className={cn(
          "fixed z-[70] transition-all duration-700 ease-in-out pointer-events-none",
          // Visibility based on the 15s timer trigger
          showName ? "opacity-100" : "opacity-0",
          // State 1: In the Header (Scrolled)
          scrolled 
            ? "top-5 left-1/2 -translate-x-1/2 text-lg md:text-2xl tracking-[0.3em] md:tracking-[0.4em]" 
            // State 2: In the Hero (Not Scrolled)
            : "top-[20%] md:top-[28%] left-6 sm:left-8 md:left-24 translate-x-0 text-4xl sm:text-7xl md:text-[9rem] tracking-tighter"
        )}
      >
        <h1 className="font-bold text-white whitespace-nowrap">
          Krushanth
        </h1>
      </div>
    </>
  );
};
