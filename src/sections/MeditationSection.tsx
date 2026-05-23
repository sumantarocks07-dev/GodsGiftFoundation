"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Brain, Sparkles, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

export const MeditationSection = () => {
  const benefits = [
    {
      icon: <Brain size={20} />,
      title: "Mental Clarity",
      description:
        "Improve focus, mindfulness, and emotional awareness through guided healing sessions.",
      gradient: "from-violet-500 to-fuchsia-500",
      bgGlow: "bg-violet-50",
      hoverBorder: "hover:border-violet-100",
      shadowGlow: "shadow-violet-500/10",
    },
    {
      icon: <Heart size={20} />,
      title: "Emotional Healing",
      description:
        "Reduce anxiety, stress, and emotional pressure with calming therapy practices.",
      gradient: "from-rose-500 to-pink-500",
      bgGlow: "bg-rose-50",
      hoverBorder: "hover:border-rose-100",
      shadowGlow: "shadow-rose-500/10",
    },
    {
      icon: <Sparkles size={20} />,
      title: "Peaceful Lifestyle",
      description:
        "Build healthy routines and positive thinking for long-term wellness.",
      gradient: "from-emerald-500 to-teal-500",
      bgGlow: "bg-emerald-50",
      hoverBorder: "hover:border-emerald-100",
      shadowGlow: "shadow-emerald-500/10",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Inner Strength",
      description:
        "Enhance confidence and mental resilience with expert-led meditation programs.",
      gradient: "from-blue-500 to-indigo-500",
      bgGlow: "bg-blue-50",
      hoverBorder: "hover:border-blue-100",
      shadowGlow: "shadow-blue-500/10",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sessions.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      setCurrentSlide((prev) => (prev + 1) % sessions.length);
    } else if (info.offset.x > swipeThreshold) {
      setCurrentSlide((prev) => (prev - 1 + sessions.length) % sessions.length);
    }
  };

  const sessions = [
    {
      title: "Meditation Session",
      category: "Guided Wellness",
      image: "/image/Meditationsession1.jpeg",
    },
    {
      title: "Peaceful Therapy",
      category: "Mind Restoration",
      image: "/image/Meditationsession2.jpeg",
    },
    {
      title: "Mind Relaxation",
      category: "Deep Relief",
      image: "/image/Meditationsession3.jpeg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-green-50/40 to-white pt-3 pb-16 lg:pt-6 lg:pb-24">
      {/* background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/40 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold text-green-700 mb-4 border border-green-100/55">
              Mind Wellness Program
            </span>

            <h2 className="text-[clamp(1.75rem,5vw,2.75rem)] font-extrabold leading-[1.2] text-gray-900 tracking-tight">
              Meditation &
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mt-1"> Mental Therapy</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600">
              Our meditation therapy sessions help individuals achieve inner
              peace, emotional balance, and mental clarity through guided
              mindfulness techniques in a calm rehabilitation environment.
            </p>

            {/* BENEFITS */}
            <div className="mt-8 grid grid-cols-2 gap-3.5 lg:grid-cols-1 lg:space-y-4">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className={`group flex flex-col sm:flex-row items-start gap-3 sm:gap-4 rounded-2xl border border-gray-100 bg-white/90 backdrop-blur-md p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] ${item.hoverBorder}`}
                >
                  {/* Compact Dynamic Color Icon */}
                  <div className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white flex-shrink-0 shadow-md ${item.shadowGlow}`}>
                    {item.icon}
                  </div>

                  <div className="text-left">
                    <div className="text-[14px] sm:text-base font-bold text-gray-900 leading-snug">
                      {item.title}
                    </div>
                    <p className="mt-1 text-[11px] sm:text-sm text-gray-600 leading-normal sm:leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE IMAGE CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="relative overflow-hidden rounded-[28px] shadow-2xl h-[360px] sm:h-[500px] group border border-gray-100/50 bg-black">
              {/* IMAGE SLIDER VIEWPORT */}
              <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing overflow-hidden">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={currentSlide}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.25}
                    onDragEnd={handleDragEnd}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={sessions[currentSlide].image}
                      alt={sessions[currentSlide].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover pointer-events-none select-none"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* SLIDE TEXT DETAILS */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20 pointer-events-none">
                <motion.p
                  key={`cat-${currentSlide}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="text-xs sm:text-sm text-green-300 font-bold uppercase tracking-wider mb-1"
                >
                  {sessions[currentSlide].category}
                </motion.p>
                
                <motion.h3
                  key={`title-${currentSlide}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="text-2xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight max-w-[85%]"
                >
                  {sessions[currentSlide].title}
                </motion.h3>
              </div>

              {/* FLOATING NAVIGATION PILLS */}
              <div className="absolute top-5 right-5 z-30 flex items-center gap-1.5 rounded-full bg-black/45 backdrop-blur-md px-3 py-1.5 border border-white/10">
                {sessions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === index ? "w-5.5 bg-green-400" : "w-2 bg-white/40 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* ARROW CONTROLS */}
              <div className="absolute bottom-6 right-6 z-30 hidden sm:flex items-center gap-2">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + sessions.length) % sessions.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/45 backdrop-blur-md text-white transition-all duration-200 hover:bg-black/70 hover:border-white/30 cursor-pointer active:scale-90"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % sessions.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/45 backdrop-blur-md text-white transition-all duration-200 hover:bg-black/70 hover:border-white/30 cursor-pointer active:scale-90"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* floating glass card */}
            <div className="absolute -bottom-16 -left-6 hidden md:block rounded-2xl border border-white/40 bg-white/75 backdrop-blur-xl px-5 py-4 shadow-xl z-30">
              <p className="text-xs font-semibold text-gray-500">
                Trusted Recovery Care
              </p>
              <div className="text-xl font-black text-green-600 mt-0.5">
                Holistic Healing
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};