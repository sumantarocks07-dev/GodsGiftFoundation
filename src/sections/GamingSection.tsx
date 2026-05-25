"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

interface Activity {
  name: string;
  description: string;
  benefit: string;
  icon: string;
  image?: string;
  isSlider?: boolean;
}

export const GamingSection = () => {
  const chessSliderRef = useRef<HTMLDivElement>(null);
  const [chessSlide, setChessSlide] = useState(0);

  const chessImages = [
    "/image/games1.png",
    "/image/games2.png",
    "/image/games3.png",
  ];
  const chessImageCount = chessImages.length;

  function scrollToChessSlide(index: number) {
    if (!chessSliderRef.current) return;
    const width = chessSliderRef.current.clientWidth;
    chessSliderRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
    setChessSlide(index);
  }

  // Auto scroll logic for Chess & Carrom slider
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIdx = (chessSlide + 1) % chessImageCount;
      scrollToChessSlide(nextIdx);
    }, 4000); // Slides every 4 seconds

    return () => clearInterval(timer);
  }, [chessImageCount, chessSlide]);

  const handleChessScroll = () => {
    if (!chessSliderRef.current) return;
    const scrollLeft = chessSliderRef.current.scrollLeft;
    const width = chessSliderRef.current.clientWidth;
    if (width > 0) {
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex !== chessSlide && newIndex >= 0 && newIndex < chessImageCount) {
        setChessSlide(newIndex);
      }
    }
  };

  const nextChessSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextIdx = (chessSlide + 1) % chessImageCount;
    scrollToChessSlide(nextIdx);
  };

  const prevChessSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const prevIdx = (chessSlide - 1 + chessImageCount) % chessImageCount;
    scrollToChessSlide(prevIdx);
  };

  const activities: Activity[] = [
    {
      name: "TV & Movie Time",
      description:
        "Relaxing entertainment sessions with group movie screenings and TV programs.",
      benefit: "Mental Relaxation",
      icon: "🎬",
      image: "/image/tvsession1.png",
      isSlider: false,
    },
    {
      name: "Chess & Carrom",
      description:
        "Indoor strategic games that improve focus, patience, and social bonding.",
      benefit: "Cognitive Development",
      icon: "♟️",
      isSlider: true,
    },
  ];

  return (
    <Section className="relative overflow-hidden pt-10 pb-4 bg-stone-50/50">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100/50 via-emerald-50/20 to-stone-100/50 opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/95 via-transparent to-stone-50/95"></div>
      </div>

      <FadeIn direction="up">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/50">
            Recreation & Fun
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 tracking-tight text-stone-800">
            Games & <span className="gradient-text">Fun Time</span>
          </h2>

          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Recreational activities designed to promote happiness, social
            bonding, emotional healing, and active participation through fun and
            engaging experiences.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer staggerDelay={0.08}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {activities.map((activity) => (
            <StaggerItem key={activity.name}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-[36px] bg-stone-900 shadow-xl hover:shadow-[0_30px_60px_rgba(16,185,129,0.2)] transition-all h-[460px] md:h-[540px] w-full border border-stone-200/50"
              >
                {/* Background Image / Slider */}
                <div className="absolute inset-0">
                  {activity.isSlider ? (
                    <div className="relative w-full h-full overflow-hidden group/slider">
                      <div
                        ref={chessSliderRef}
                        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
                        onScroll={handleChessScroll}
                      >
                        {chessImages.map((img, idx) => (
                          <div key={idx} className="w-full h-full flex-shrink-0 snap-start relative">
                            <Image
                              src={img}
                              alt={`Chess & Carrom ${idx + 1}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover transition-transform duration-1000 group-hover:scale-105"
                              priority={idx === 0}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Slider Navigation Arrows (only visible on hover) */}
                      <button
                        onClick={prevChessSlide}
                        className="absolute left-4 top-[40%] -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:bg-emerald-500 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover/slider:opacity-100 shadow-lg border border-white/20 z-30 cursor-pointer"
                        aria-label="Previous image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextChessSlide}
                        className="absolute right-4 top-[40%] -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:bg-emerald-500 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover/slider:opacity-100 shadow-lg border border-white/20 z-30 cursor-pointer"
                        aria-label="Next image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Micro Slider Dots */}
                      <div className="absolute top-6 right-6 flex space-x-1.5 z-20 bg-black/40 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/20">
                        {chessImages.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              scrollToChessSlide(idx);
                            }}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${chessSlide === idx ? "bg-emerald-400 w-4 shadow-[0_0_8px_rgba(52,211,153,0.8)]" : "bg-white/60 w-1.5 hover:bg-white"
                              }`}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        src={activity.image || "/image/tvsession1.png"}
                        alt={activity.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        className="object-cover transition-transform duration-1000 group-hover:scale-105 ease-out"
                      />
                    </div>
                  )}
                </div>

                {/* Deep Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />

                {/* Top Left Floating Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-black tracking-widest uppercase rounded-full bg-white/20 backdrop-blur-xl text-white shadow-lg border border-white/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {activity.benefit}
                  </span>
                </div>

                {/* Bottom Glassmorphic Content Panel */}
                <div className="absolute bottom-4 left-4 right-4 z-20 p-5 rounded-[24px] bg-black/50 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-500 group-hover:bg-black/50 group-hover:border-white/20 group-hover:translate-y-0 translate-y-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
                      {activity.name}
                    </h3>

                    {/* Glowing Icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <span className="text-lg drop-shadow-sm">{activity.icon}</span>
                    </div>
                  </div>

                  <p className="text-white/75 text-xs md:text-sm leading-relaxed mb-0">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>

    </Section>
  );
};
