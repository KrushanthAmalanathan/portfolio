import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <div className={cn("mb-12 space-y-2", className)}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase italic">
        <span className="text-cyan-500 mr-2">//</span>
        {title}
      </h2>
      {subtitle && <p className="text-zinc-400 max-w-2xl">{subtitle}</p>}
      <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-500" />
    </div>
  );
};
