"use client";

import React, { useState, useEffect } from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { LoadingScreen } from "@/components/loading/LoadingScreen";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderHero, setShouldRenderHero] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleLoadingComplete = () => {
    setIsFadingOut(true);
    // Wait for the fade-out animation to complete before switching components
    setTimeout(() => {
      setIsLoading(false);
      setShouldRenderHero(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-black">
      {isLoading && (
        <div 
          className={cn(
            "fixed inset-0 z-[100] transition-opacity duration-1000 ease-in-out",
            isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        >
          <LoadingScreen onComplete={handleLoadingComplete} />
        </div>
      )}

      {shouldRenderHero && (
        <div 
          className={cn(
            "relative w-full transition-all duration-1000 ease-out",
            "animate-in fade-in zoom-in-110 duration-1000"
          )}
        >
          <HeroSection />
        </div>
      )}
    </main>
  );
}
