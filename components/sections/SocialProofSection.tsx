"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageCircle,
  Pill,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export function SocialProofSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const benefits = [
    {
      icon: <MessageCircle className="w-8 h-8 text-[#8B7FDB]" />,
      title: "Chat with Your Doctor",
      description:
        "Start a private, real-time conversation with your doctor to ask health questions, clarify prescriptions, or get quick advice.",
      image: "/images/phone-1.png",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Pill className="w-8 h-8 text-[#8B7FDB]" />,
      title: "Track Your Medications",
      description:
        "Never miss a dose again — set personalized reminders, monitor your daily medicine schedule, and stay on top of your treatment.",
      image: "/images/phone-2.png",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-[#8B7FDB]" />,
      title: "Book in 3 Taps",
      description:
        "Instantly schedule appointments with top-rated doctors based on your preferred time, specialty, and location.",
      image: "/images/phone-3.png",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  return (
    <section
      id="screenshots"
      className="relative py-20 md:py-32 bg-gradient-to-b from-white to-purple-50 dark:from-black dark:to-purple-950/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white">
            Why Thousands Trust{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B7FDB] to-[#6B5FB0]">
              NutriSight
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            See how NutriSight makes healthcare management effortless
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-900 p-3 rounded-full shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all border border-neutral-200 dark:border-neutral-800 -ml-4 md:-ml-12"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-900 p-3 rounded-full shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all border border-neutral-200 dark:border-neutral-800 -mr-4 md:-mr-12"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30">
                      {benefits[currentSlide].icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                      {benefits[currentSlide].title}
                    </h3>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {benefits[currentSlide].description}
                    </p>
                    <div className="flex items-center space-x-2 pt-4">
                      {benefits.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`h-2 rounded-full transition-all ${
                            idx === currentSlide
                              ? "w-8 bg-[#8B7FDB]"
                              : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right Content - Phone Mockup */}
                  <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative w-[240px] h-[480px]"
                    >
                      <Image
                        src={benefits[currentSlide].image}
                        alt={benefits[currentSlide].title}
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </motion.div>
                    {/* Decorative Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${benefits[currentSlide].gradient} opacity-10 blur-3xl -z-10`}
                    ></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicators (Mobile) */}
          <div className="flex justify-center space-x-2 mt-8 md:hidden">
            {benefits.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlide
                    ? "w-8 bg-[#8B7FDB]"
                    : "w-2 bg-neutral-300 dark:bg-neutral-700"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
