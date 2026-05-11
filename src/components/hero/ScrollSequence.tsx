"use client";

import React, { useEffect, useRef, useState } from "react";

interface Props {
  onProgress: (progress: number) => void;
}

export const ScrollSequence = ({ onProgress }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 358;
  const baseUrl = "/KIRU/f5zDQXADMP5XUBL1K4VpfWXfEyjMapXtEQECEkaeKDE";

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      const index = i.toString().padStart(3, "0");
      img.src = `${baseUrl}${index}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Render on scroll
  useEffect(() => {
    const handleScroll = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context || images.length === 0) return;

      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;
      
      onProgress(scrollFraction);

      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      // Draw the image
      const img = images[frameIndex];
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      // Cover effect (similar to object-cover)
      const imgRatio = img.width / img.height;
      const canvasRatio = canvasWidth / canvasHeight;
      let drawWidth, drawHeight, drawX, drawY;

      if (imgRatio > canvasRatio) {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgRatio;
        drawX = (canvasWidth - drawWidth) / 2;
        drawY = 0;
      } else {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        drawX = 0;
        drawY = (canvasHeight - drawHeight) / 2;
      }

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial draw

    // Resize handling
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        handleScroll();
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [images, onProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full object-cover z-0"
    />
  );
};
