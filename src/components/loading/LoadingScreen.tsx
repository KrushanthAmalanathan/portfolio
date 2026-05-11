"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface MorphicCharProps {
  target: string;
  isReady: boolean;
  onSettled: () => void;
}

const MorphicCharacter = ({ target, isReady, onSettled }: MorphicCharProps) => {
  const [current, setCurrent] = useState("0");
  const [isSettled, setIsSettled] = useState(false);
  const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    if (!isReady || isSettled) return;

    let iterations = 0;
    const interval = setInterval(() => {
      setCurrent(chars[Math.floor(Math.random() * chars.length)]);
      iterations++;

      if (iterations > 10) {
        clearInterval(interval);
        setCurrent(target);
        setIsSettled(true);
        onSettled();
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isReady, isSettled, target, onSettled]);

  return (
    <span 
      className={cn(
        "inline-block transition-all duration-300",
        isSettled ? "text-cyan-400 glow-cyan scale-110" : "text-white opacity-50"
      )}
    >
      {current}
    </span>
  );
};

interface Props {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: Props) => {
  const name = "KRUSHANTH";
  const [activeCount, setActiveCount] = useState(0);
  const [settledCount, setSettledCount] = useState(0);

  useEffect(() => {
    // Trigger first character
    setActiveCount(1);
  }, []);

  const handleSettled = () => {
    setSettledCount(prev => {
      const next = prev + 1;
      if (next < name.length) {
        // Trigger next character after a short stagger
        setTimeout(() => setActiveCount(next + 1), 100);
      } else {
        // All settled
        setTimeout(onComplete, 1200);
      }
      return next;
    });
  };

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col justify-end p-12 overflow-hidden">
      {/* Background ambient pulse */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.05)_0%,transparent_50%)] animate-pulse" />
      
      <div className="relative font-mono text-4xl md:text-6xl font-black tracking-[0.4em] flex">
        {name.split("").map((char, i) => (
          <MorphicCharacter 
            key={i} 
            target={char} 
            isReady={activeCount > i} 
            onSettled={handleSettled} 
          />
        ))}
      </div>
      
      <div className="relative mt-8 h-[2px] w-48 bg-zinc-900 overflow-hidden">
        <div 
          className="h-full bg-cyan-500 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(6,182,212,0.8)]" 
          style={{ width: `${(settledCount / name.length) * 100}%` }}
        />
      </div>
      
      <div className="mt-4 text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-mono">
        System.Authorization_In_Progress
      </div>
    </div>
  );
};
