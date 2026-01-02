"use client";

import React, { useState, useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";
import LogoCarousel from "./LogoCarousel";

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
      video.play().catch(err => {
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
const HeroContent = memo(function HeroContent() {
  return (
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-start pt-24">
      <div className="text-left text-white w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-kanit text-5xl lg:text-6xl font-bold leading-none mb-6"
        >
          YOUR RIDE, YOUR STYLE.
        </motion.h1>
        
        {/* Desktop: Text and Button Side by Side */}
        <div className="hidden lg:flex items-center justify-between mb-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-inter text-lg max-w-2xl leading-relaxed"
          >
            Premium accessories and expert tire services — everything you need to
            make your vehicle look and perform its best, all under one roof.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <a
              href="/shop-tires"
              className="inline-flex items-center gap-2 font-kanit bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-md text-xl transition-all duration-300 shadow-2xl hover:shadow-red-600/50 hover:scale-105 whitespace-nowrap"
            >
              SHOP NOW
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Mobile: Text and Button Stacked */}
        <div className="lg:hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-inter text-lg mb-8 leading-relaxed"
          >
            Premium accessories and expert tire services — everything you need to
            make your vehicle look and perform its best, all under one roof.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a
              href="/shop-tires"
              className="inline-block font-kanit bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-md text-xl transition-all duration-300 shadow-2xl hover:shadow-red-600/50 hover:scale-105"
            >
              SHOP NOW
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

function LandingSectionClient() {
  // Video paths - these files should be in your /public folder
  const videoSrc = "/videos/hero-background.mp4";
  const posterSrc = "/images/hero-poster.jpg";

  return (
    <>
      <VideoBackground videoSrc={videoSrc} posterSrc={posterSrc} />
      <HeroContent />
      <LogoCarousel />
    </>
  );
}

export default memo(LandingSectionClient);