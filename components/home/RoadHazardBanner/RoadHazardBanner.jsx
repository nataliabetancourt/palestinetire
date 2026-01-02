"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import tireWithNail from "./assets/nail-in-tire.png";

export default function RoadHazardBanner({ translations }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-violet-800 to-violet-950 z-0" />
      
      {/* Subtle radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/50 via-transparent to-violet-900/30 z-0" />

      {/* Mobile Layout */}
      <motion.div
        className="relative z-10 lg:hidden px-4 pt-36 pb-12 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header Text */}
        <motion.p
          className="text-white text-lg font-medium tracking-wide"
          variants={fadeInUp}
        >
          {translations.tagline}
        </motion.p>
        <motion.h2
          className="text-white text-3xl md:text-4xl font-bold mb-4"
          variants={fadeInUp}
        >
          {translations.title}
        </motion.h2>

        {/* Tire Image and Description Row */}
        <div className="flex flex-row items-center justify-center gap-4 mb-4">
          <motion.div
            className="w-1/3 flex-shrink-0"
            variants={scaleIn}
          >
            <Image
              src={tireWithNail}
              alt="Tire with wheel"
              width={150}
              height={150}
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
          <motion.p
            className="text-white/90 text-sm md:text-base text-left flex-1"
            variants={fadeInRight}
          >
            {translations.description}
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.a
          href="/road-hazard"
          className="inline-block bg-white text-violet-800 font-bold px-8 py-3 rounded-sm hover:bg-gray-100 transition-colors duration-300 tracking-wide w-full"
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {translations.ctaButton}
        </motion.a>
      </motion.div>

      {/* Desktop Layout */}
      <motion.div
        className="relative z-10 hidden lg:flex items-center justify-between container mx-auto px-4 xl:px-12 py-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left - Text */}
        <motion.div className="flex-2" variants={fadeInLeft}>
          <p className="text-white text-lg font-medium tracking-wide italic">
            {translations.tagline}
          </p>
          <h2 className="text-white text-3xl xl:text-4xl font-bold">
            {translations.title}
          </h2>
        </motion.div>

        {/* Center - Tire Image */}
        <motion.div
          className="flex-shrink-0 mx-8"
          variants={scaleIn}
        >
          <Image
            src={tireWithNail}
            alt="Tire with wheel"
            width={180}
            height={180}
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Right - Description and CTA */}
        <motion.div
          className="flex-1 flex items-center justify-end gap-6"
          variants={fadeInRight}
        >
          <p className="text-white/90 text-sm xl:text-base max-w-xs">
            {translations.description}
          </p>
          <motion.a
            href="/road-hazard"
            className="flex-shrink-0 bg-white text-violet-800 font-bold px-6 py-3 rounded-sm hover:bg-gray-100 transition-colors duration-300 tracking-wide whitespace-nowrap"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {translations.ctaButton}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}