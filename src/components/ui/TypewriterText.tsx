"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Props {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

export const TypewriterText = ({ 
  text, 
  delay = 0, 
  speed = 30, 
  className, 
  onComplete,
  showCursor = false 
}: Props) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Start delay
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted || isFinished || !text) return;

    let timeoutId: NodeJS.Timeout;
    let i = 0;

    const type = () => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        timeoutId = setTimeout(type, speed);
      } else {
        setIsFinished(true);
        if (onComplete) onComplete();
      }
    };

    type();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isStarted, isFinished, text, speed, onComplete]);

  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      {showCursor && !isFinished && (
        <span className="inline-block w-2 h-[1em] ml-1 align-middle bg-blue-500 animate-pulse" />
      )}
    </span>
  );
};
