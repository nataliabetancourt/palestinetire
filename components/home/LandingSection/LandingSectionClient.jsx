"use client";

import React, { useState, useEffect, useRef, memo } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import LogoCarousel from "./LogoCarousel";
import TireConnectWidget from "./TireConnectWidget";

// Memoized video background component with gradient overlay
const VideoBackground = memo(function VideoBackground({ videoSrc, posterSrc }) {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set video to play when loaded
    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch((err) => {
        console.log("Video autoplay prevented:", err);
      });
    };

    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay - darker at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
    </div>
  );
});

// Memoized hero content component
const HeroContent = memo(function HeroContent({ locale }) {
  return (
    <div className="relative z-10 container mx-auto px-4 lg:px-6 h-full flex items-start md:items-center justify-center pt-40 md:pt-36 pb-28 md:pb-20">
      <div className="text-center text-white w-full max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-kanit text-5xl lg:text-6xl font-bold leading-none mb-6"
        >
          YOUR RIDE, YOUR STYLE.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-inter text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Premium accessories and expert tire services — everything you need to
          make your vehicle look and perform its best, all under one roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mx-auto w-full max-w-5xl"
        >
          <div className="bg-white rounded-lg shadow-2xl p-2 sm:p-3">
            <TireConnectWidget locale={locale} />
          </div>
        </motion.div>
      </div>
    </div>
  );
});

function LandingSectionClient() {
  const params = useParams();
  const locale = params?.locale || "en";

  // Video paths - these files should be in your /public folder
  const videoSrc = "/videos/hero-background.mp4";
  const posterSrc = "/images/hero-poster.jpg";

  return (
    <>
      <VideoBackground videoSrc={videoSrc} posterSrc={posterSrc} />
      <HeroContent locale={locale} />
      <LogoCarousel />
    </>
  );
}

export default memo(LandingSectionClient);
