"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoHorizontal from "./assets/logo-horizontal.png"
import logoVertical from "./assets/logo-vertical.png"

const Navbar = ({ logoHorizontal, logoVertical }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Determine if current page should have transparent navbar
  const shouldBeTransparent = () => {
    // Home page should be transparent
    if (pathname === "/" || pathname === "/en" || pathname === "/es") {
      return true;
    }
    return false;
  };

  // Determine background style based on page and scroll state
  const navbarBackground = () => {
    if (shouldBeTransparent()) {
      if (scrolled) {
        // Transparent page but scrolled - show white background
        return "bg-white shadow-lg";
      } else {
        // Transparent page and not scrolled - white with subtle shadow
        return "bg-white shadow-md";
      }
    } else {
      // Not a transparent page - always show white background
      return "bg-white shadow-lg";
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 py-2 md:py-3 transition-all duration-300 ${navbarBackground()}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Switches between vertical (mobile) and horizontal (desktop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0"
          >
            <Link href="/" className="block">
              {/* Mobile Logo - Vertical/Stacked (Logo-01) */}
              <Image
                src={logoVertical}
                alt="Palestine Tire Center Logo"
                height={60}
                className="block md:hidden w-auto h-12"
                priority
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              
              {/* Desktop Logo - Horizontal (Logo-03) */}
              <Image
                src={logoHorizontal}
                alt="Palestine Tire Center Logo"
                width={400}
                height={80}
                className="hidden md:block w-auto h-10 lg:h-12"
                priority
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center gap-4"
          >
            <Link
              href="/shop-tires"
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-md text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap font-kanit"
            >
              SHOP NOW
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 lg:h-5 lg:w-5"
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
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col gap-3">
              <Link
                href="/shop-tires"
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md text-center transition-all duration-300 shadow-lg flex items-center justify-center gap-2 font-kanit"
                onClick={() => setMobileMenuOpen(false)}
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
              </Link>
              
              {/* Add more mobile menu items here as needed */}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;