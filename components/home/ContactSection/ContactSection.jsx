"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="relative bg-[#1a1a1a] py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 lg:gap-16">
          
          {/* Left Column - Title, Description & Contact Info */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Title */}
              <h2 className="font-kanit text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
                CONTACT US TODAY!
              </h2>

              {/* Description */}
              <p className="font-inter text-md md:text-md text-gray-300 leading-relaxed mb-32 max-w-xl">
                We'd be happy to help you out in our stores or over the phone, whatever you may need! We hope to see you soon.
              </p>

              {/* Contact Information */}
              <div className="space-y-2">
                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  {/* Location Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <a 
                      href="https://maps.google.com/?q=109+Crockett+Rd,+Palestine,+TX+75801"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-kanit text-xl md:text-2xl font-bold text-white hover:text-red-600 transition-colors duration-300"
                    >
                      109 Crockett Rd, Palestine, TX 75801
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  {/* Phone Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <a 
                      href="tel:+19037234242"
                      className="font-kanit text-xl md:text-2xl font-bold text-white hover:text-red-600 transition-colors duration-300"
                    >
                      (903) 723-4242
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - CTA Button (aligned with contact info) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-shrink-0 w-full lg:w-auto"
          >
            <a
              href="tel:+19037234242"
              className="block lg:inline-block text-center w-full lg:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-kanit text-md md:text-xl font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              CALL US NOW!
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;