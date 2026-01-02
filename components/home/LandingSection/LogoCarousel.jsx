"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Import logos
import toyo from "./assets/toyo.png";
import prinx from "./assets/prinx.png";
import yokohama from "./assets/yokohama.png";
import bridgestone from "./assets/bridgestone.png";
import uniroyal from "./assets/uniroyal.png";
import kenda from "./assets/kenda.png";
import pirelli from "./assets/pirelli.png";

const LogoCarousel = memo(function LogoCarousel() {
  const logos = [
    { name: "Toyo Tires", src: toyo },
    { name: "Prinx Tires", src: prinx },
    { name: "Yokohama", src: yokohama },
    { name: "Bridgestone", src: bridgestone },
    { name: "Uniroyal", src: uniroyal },
    { name: "Kenda Tires", src: kenda },
    { name: "Pirelli", src: pirelli },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 w-full bg-black/10 backdrop-blur-sm py-6 overflow-hidden">
      <div className="relative flex">
        {/* Animated scrolling container */}
        <motion.div
          className="flex gap-12 md:gap-16"
          animate={{
            x: [0, -100 * logos.length], // Move left by total width of one set
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20, // Adjust speed here (lower = faster)
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{ width: "120px" }} // Fixed width for consistent spacing
            >
              <Image
                src={logo.src}
                alt={logo.name}
                className="h-12 md:h-10 w-auto object-contain filter brightness-0 invert"
                style={{ maxWidth: "100%"}}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
});

export default LogoCarousel;