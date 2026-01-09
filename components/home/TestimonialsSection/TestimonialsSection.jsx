"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dustinImg from "./assets/dustin.png"
import sofiaImg from "./assets/sofia.png"
import tedImg from "./assets/ted.png"
import jpImg from "./assets/jp.png"


const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "I was in big trouble and these guys helped me out. I'm speechless. Almost emotional. Please give them your business. Say hi to that long haired dude that works there.",
      author: "Dustin Parrett",
      rating: 5,
      date: "November, 2025",
      avatar: dustinImg,
    },
    {
      id: 2,
      text: "Awesome service! Got my car fixed in 30 minutes he was done. Quick and friendly. Reasonable prices too.",
      author: "Sofia Ulloa",
      rating: 5,
      date: "December, 2025",
      avatar: sofiaImg,
    },
    {
      id: 3,
      text: "They treat you like family excellent customer service. I strongly recommend this place for tires and service",
      author: "Ted Harrigan",
      rating: 5,
      date: "January, 2026",
      avatar: tedImg,
    },
     {
      id: 4,
      text: "So far so good. Had a new lift installed with alignment. Love how the truck looks and it feels solid and drives straight. Really fair price and one day turnaround.",
      author: "JP Scout",
      rating: 5,
      date: "November, 2026",
      avatar: jpImg,
    },
    
    // Add more testimonials as needed
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play carousel every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-28 overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-16">
          
          {/* Left Column - Title & Description */}
          <div className="lg:flex-shrink-0 lg:w-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Section Title */}
              <div className="mb-8">
                <h2 className="font-kanit text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-none mb-6">
                  TESTIMONIES.
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
              <p className="font-inter text-md sm:text-md text-gray-700 leading-relaxed max-w-sm">
                It's always great to have a second opinion. Hear what our customers have to say about their experience!
              </p>
            </motion.div>
          </div>

          {/* Right Column - Testimonials Carousel */}
          <div className="lg:flex-1 lg:max-w-2xl">
            <div className="relative">
              
              {/* Testimonials Stack */}
              <div className="relative min-h-[240px] md:min-h-[200px]">
                {testimonials.map((testimonial, index) => {
                  // Calculate position relative to current
                  const position = (index - currentIndex + testimonials.length) % testimonials.length;
                  
                  return (
                    <motion.div
                      key={testimonial.id}
                      initial={false}
                      animate={{
                        x: position === 0 ? 0 : position === 1 ? 30 : -100,
                        y: position === 0 ? 0 : position === 1 ? 15 : 0,
                        opacity: position === 0 ? 1 : position === 1 ? 0.7 : 0,
                        scale: position === 0 ? 1 : position === 1 ? 0.97 : 0.9,
                        zIndex: position === 0 ? 20 : position === 1 ? 10 : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute top-0 left-0 w-full"
                    >
                      {/* Testimonial Card */}
                      <div className="bg-white rounded-sm shadow-lg p-5 md:p-6 border-t-4 border-red-600">
                        {/* Quote */}
                        <p className="font-inter text-md md:text-md text-gray-700 leading-relaxed mb-5 italic">
                          "{testimonial.text}"
                        </p>

                        {/* Author Info */}
                        <div className="flex items-center gap-3">
                          {/* Avatar */}
                          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* Name, Rating, Date */}
                          <div className="flex-1">
                            <h4 className="font-kanit text-sm md:text-base font-bold text-gray-900">
                              {testimonial.author}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              {/* Stars */}
                              <div className="flex items-center gap-1">
                                <svg className="w-3 h-3 text-red-600 fill-current" viewBox="0 0 20 20">
                                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                                <span className="font-inter text-xs font-bold text-gray-900">
                                  {testimonial.rating} STARS
                                </span>
                              </div>
                              {/* Date */}
                              <span className="font-inter text-xs text-gray-400">
                                {testimonial.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Navigation Buttons */}
              {testimonials.length > 1 && (
                <div className="flex justify-center sm:justify-center md:justify-end lg:justify-end gap-3 mt-6">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors duration-300 shadow-lg"
                    aria-label="Previous testimonial"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors duration-300 shadow-lg"
                    aria-label="Next testimonial"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Dots Indicator */}
              {testimonials.length > 1 && (
                <div className="flex justify-center sm:justify-center md:justify-end lg:justify-end gap-2 mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "bg-red-600 w-8" : "bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;