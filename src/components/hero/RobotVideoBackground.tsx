import React, { useEffect, useRef, useState } from "react";

interface Props {
  onComplete: () => void;
}

export const RobotVideoBackground = ({ onComplete }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // We can either wait for the video to end, or set a strict 15s timer.
    // The user specifically mentioned "15 th sec arive".
    const timer = setTimeout(() => {
      setShowImage(true);
      onComplete();
    }, 15000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {!showImage ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover object-[78%_center] md:object-center"
        >
          <source src="/videos/myrobo.mp4" type="video/mp4" />
          <div className="absolute inset-0 bg-black" />
        </video>
      ) : (
        <img 
          src="/KIRU/f5zDQXADMP5XUBL1K4VpfWXfEyjMapXtEQECEkaeKDE357.jpg" 
          alt="Robot Final Frame" 
          className="w-full h-full object-cover object-[78%_center] md:object-center animate-in fade-in duration-1000"
        />
      )}
    </div>
  );
};
