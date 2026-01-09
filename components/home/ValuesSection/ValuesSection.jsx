"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import valuesBackground from "./assets/values-bg.png";

const ValuesSection = () => {
  const values = [
    {
      title: "Honesty",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
    {
      title: "Reliability",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "Quality",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Customer-First",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-gray-100 py-16 md:py-16 lg:py-20">
      {/* White container with padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Inner container with background image */}
        <div className="relative overflow-hidden rounded-lg">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={valuesBackground}
              alt="Values Background"
              fill
              className="object-cover"
              priority={false}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/75 z-10" />
          </div>

          {/* Content */}
          <div className="relative z-20 py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
            <div className="max-w-6xl mx-auto text-center">
              
              {/* Section Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-6"
              >
                <h2 className="font-kanit text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-none mb-6">
                  OUR VALUES.
                </h2>
                {/* Red underline accent - centered */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "12rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-1 bg-red-600 mx-auto"
                />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="font-inter text-md sm:text-md text-gray-200 leading-relaxed mb-16 max-w-2xl mx-auto"
              >
                Built on trust, quality work, and genuine care, our values guide every service we provide and every customer we serve.
              </motion.p>

              {/* Values Grid */}
              <div className="sm:w-lg max-w-3xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    className="flex flex-col items-center"
                  >
                    {/* Icon Circle */}
                    <div className="mb-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-inter text-lg md:text-xl font-medium text-white text-center">
                      {value.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValuesSection;