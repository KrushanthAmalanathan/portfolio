"use client";

import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

const SNIPPETS = [
  "Initializing quantum neural network...",
  "const developer = new RoboticsEngineer();",
  "await system.optimize({ speed: 'max' });",
  "mapping.environment(360_degree_view);",
  "core.power = 100%; heat.dissipation = true;",
  "protocol.handshake('future-v2');",
  "scanning.target('innovation-hub');",
  "neural.link.status = 'connected';",
  "executing.subroutine('vision-core');",
];

const POSITIONS = [
  "top-[22%] right-[5%] text-right",      // Pos 1
  "top-[8%] left-[50%] -translate-x-1/2",  // Pos 2
  "top-[62%] right-[10%] text-right",     // Pos 3
  "bottom-[12%] left-[8%]",                // Pos 4
  "bottom-[12%] right-[8%] text-right",   // Pos 5
  "top-[8%] left-[8%]",                   // Pos 6
  "top-[42%] left-[18%]",                  // Pos 7
];

const COLORS = [
  "text-cyan-400 glow-cyan",
  "text-purple-400 glow-purple",
  "text-pink-400 glow-pink",
  "text-blue-400 glow-cyan",
  "text-emerald-400 glow-cyan",
];

interface EffectProps {
  positionIndex: number;
  onComplete: (index: number) => void;
}

const TypingEffect = ({ positionIndex, onComplete }: EffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [snippet] = useState(() => SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)]);
  const [color] = useState(() => COLORS[Math.floor(Math.random() * COLORS.length)]);
  const [isTyping, setIsTyping] = useState(true);
  const [phase, setPhase] = useState<"typing" | "pause" | "fade">("typing");

  useEffect(() => {
    if (phase === "typing") {
      if (displayedText.length < snippet.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(snippet.slice(0, displayedText.length + 1));
        }, 30 + Math.random() * 40);
        return () => clearTimeout(timeout);
      } else {
        setPhase("pause");
        setTimeout(() => setPhase("fade"), 3000);
      }
    } else if (phase === "fade") {
      const timeout = setTimeout(() => {
        onComplete(positionIndex);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, snippet, phase, positionIndex, onComplete]);

  return (
    <div 
      className={cn(
        "absolute font-mono text-[10px] md:text-xs transition-all duration-1000 ease-in-out z-20",
        POSITIONS[positionIndex],
        phase === "fade" ? "opacity-0 translate-y-2" : "opacity-40 translate-y-0",
        color
      )}
    >
      <span className="text-zinc-600 mr-2 opacity-50">$</span>
      {displayedText}
      <span className={cn("inline-block w-1.5 h-3 ml-1 bg-current animate-cursor", phase !== "typing" && "hidden")} />
    </div>
  );
};

export const CodeTypingOverlay = () => {
  const [activePositions, setActivePositions] = useState<number[]>([]);

  const spawnEffect = useCallback(() => {
    setActivePositions((prev) => {
      if (prev.length >= POSITIONS.length) return prev; // All spots taken
      
      // Find available positions
      const available = POSITIONS.map((_, i) => i).filter(i => !prev.includes(i));
      if (available.length === 0) return prev;
      
      const nextPos = available[Math.floor(Math.random() * available.length)];
      return [...prev, nextPos];
    });
  }, []);

  useEffect(() => {
    // Spawn a new effect every 2 seconds
    const interval = setInterval(spawnEffect, 2000);
    // Spawn first one immediately
    spawnEffect();
    return () => clearInterval(interval);
  }, [spawnEffect]);

  const handleComplete = useCallback((index: number) => {
    setActivePositions((prev) => prev.filter(i => i !== index));
  }, []);

  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
      {activePositions.map((posIndex) => (
        <TypingEffect 
          key={posIndex} 
          positionIndex={posIndex} 
          onComplete={handleComplete} 
        />
      ))}
    </div>
  );
};
