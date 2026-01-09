"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import storeDesktopImg from "./assets/storefront-desktop.png"
import storeMobileImg from "./assets/storefront-mobile.png"

const AboutSection = () => {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Section Title */}
            <div className="mb-8">
              <h2 className="font-kanit text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-none mb-4">
                ABOUT US.
              </h2>
              {/* Red underline accent */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "10rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-red-600"
              />
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="font-inter text-md sm:text-md text-gray-700 leading-relaxed">
                Palestine Tire Center — your trusted destination for quality tire services in Palestine, TX. Our team delivers expert care with fast turnaround times, competitive pricing, and a welcoming atmosphere. From tire rotations and alignments to repairs for vehicles of all sizes, we're here to get you back on the road quickly. Walk-ins always welcome.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Images (Desktop vs Mobile/Tablet) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative lg:-mr-[calc((100vw-1280px)/2+2rem)] xl:-mr-[calc((100vw-1280px)/2+2rem)]"
          >
            {/* Desktop Image - With diagonal cuts and accents, extends to edge */}
            <div className="hidden lg:block relative w-full">
              <Image
                src={storeDesktopImg}
                alt="Palestine Tire Center Storefront"
                width={1600}
                height={1200}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority={false}
              />
            </div>

            {/* Mobile/Tablet Image - Simpler, cleaner design */}
            <div className="block lg:hidden relative w-full">
              <Image
                src={storeMobileImg}
                alt="Palestine Tire Center Storefront"
                width={1000}
                height={750}
                className="w-full h-auto"
                sizes="100vw"
                priority={false}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;