"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "About", href: "/about" },
];

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
} as const;

export function Navbar() {
  const { scrollY } = useScroll();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    if (latestValue > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <div className="w-full fixed top-2 inset-x-0 z-50">
      <motion.header
        className="hidden lg:flex flex-row self-center items-center justify-between py-3 mx-auto px-8 rounded-full relative z-100"
        initial={{
          width: "80%",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(5px)",
          boxShadow: "transparent 0px 0px 0px 0px",
          transform: "none",
        }}
        animate={
          isScrolled
            ? {
                width: "65%",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                transform: "translateY(4px)",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 30px -10px",
              }
            : {
                width: "80%",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(5px)",
                boxShadow: "transparent 0px 0px 0px 0px",
              }
        }
        transition={transition}
      >
        <Link
          href="/"
          className="font-normal flex gap-2 justify-center items-center text-sm text-black px-2 py-1 shrink-0 relative z-20"
        >
          <Image
            src="/icons/nutrisight.png"
            alt="NutriSight"
            width={32}
            height={32}
          />
          <span className="font-medium text-black text-lg">NutriSight</span>
        </Link>

        <div className="lg:flex flex-row flex-1 items-center justify-center space-x-2 text-sm">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              <Link
                href={item.href}
                className="text-black/90 relative px-3 py-1.5 transition-colors"
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="">
          <div className="flex items-center">
            <Link href="/download" className="btn-download">
              Download App
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navbar */}
      <motion.header
        key={isMobile ? "mobile-nav" : "hidden-mobile-nav"}
        className="flex relative flex-col lg:hidden w-full justify-between items-center max-w-[calc(100vw-2rem)] mx-auto z-50"
        initial={{
          width: "90%",
          opacity: 0,
          transform: "translateY(4px)",
          scale: 0.95,
          backdropFilter: "blur(16px)",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "12px 20px",
          borderRadius: "24px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 30px -10px",
        }}
        animate={
          isScrolled
            ? {
                width: "85%",
                opacity: 1,
                transform: "translateY(4px)",
                backdropFilter: "blur(16px)",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                padding: "10px 20px",
                borderRadius: "24px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 30px -10px",
              }
            : {
                width: "90%",
                opacity: 1,
                transform: "none",
                backdropFilter: "blur(16px)",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                padding: "12px 20px",
                borderRadius: "24px",
                boxShadow: "transparent 0px 0px 0px",
              }
        }
        transition={transition}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <Link
            href="/"
            className="font-normal flex gap-2 justify-center items-center text-sm text-black px-2 py-1 shrink-0 relative z-20"
          >
            <Image
              src="/icons/nutrisight.png"
              alt="NutriSight"
              width={32}
              height={32}
            />
            <span className="font-medium text-black text-lg">NutriSight</span>
          </Link>

          <button className="p-2 rounded-full" onClick={handleMenuOpen}>
            {isMenuOpen ? (
              <X className="size-5 text-black/90" />
            ) : (
              <Menu className="size-5 text-black/90" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="flex rounded-2xl absolute top-16 backdrop-blur-xl bg-white/95 inset-x-0 z-50 flex-col items-start justify-start gap-4 w-full px-6 py-6 shadow-lg overflow-hidden"
              initial={{
                opacity: 0,
                scaleY: 0.8,
                transformOrigin: "top",
              }}
              animate={{
                opacity: 1,
                scaleY: 1,
                transformOrigin: "top",
              }}
              exit={{
                opacity: 0,
                scaleY: 0.8,
                transformOrigin: "top",
              }}
              transition={transition}
            >
              {navItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-black/90 hover:text-black transition-colors"
                  >
                    <span className="block">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
