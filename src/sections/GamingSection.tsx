"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dices, MonitorPlay } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

interface Activity {
  name: string;
  description: string;
  benefit: string;
  icon: LucideIcon;
  image?: string;
  images?: string[];
  isSlider?: boolean;
}

export const GamingSection = () => {
  const tvSliderRef = useRef<HTMLDivElement>(null);
  const [tvSlide, setTvSlide] = useState(0);
  const chessSliderRef = useRef<HTMLDivElement>(null);
  const [chessSlide, setChessSlide] = useState(0);

  const tvImages = [
    "/image/tvsession1.png",
    "/image/tvsession2.jpeg",
    "/image/tvsession3.jpeg",
  ];
  const tvImageCount = tvImages.length;

  const chessImages = [
    "/image/games1.png",
    "/image/games2.png",
    "/image/games3.png",
  ];
  const chessImageCount = chessImages.length;

  function scrollToTvSlide(index: number) {
    if (!tvSliderRef.current) return;
    const width = tvSliderRef.current.clientWidth;
    tvSliderRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
    setTvSlide(index);
  }

  function scrollToChessSlide(index: number) {
    if (!chessSliderRef.current) return;
    const width = chessSliderRef.current.clientWidth;
    chessSliderRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
    setChessSlide(index);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIdx = (tvSlide + 1) % tvImageCount;
      scrollToTvSlide(nextIdx);
    }, 4000);

    return () => clearInterval(timer);
  }, [tvImageCount, tvSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIdx = (chessSlide + 1) % chessImageCount;
      scrollToChessSlide(nextIdx);
    }, 4000);

    return () => clearInterval(timer);
  }, [chessImageCount, chessSlide]);

  const handleTvScroll = () => {
    if (!tvSliderRef.current) return;
    const scrollLeft = tvSliderRef.current.scrollLeft;
    const width = tvSliderRef.current.clientWidth;
    if (width > 0) {
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex !== tvSlide && newIndex >= 0 && newIndex < tvImageCount) {
        setTvSlide(newIndex);
      }
    }
  };

  const handleChessScroll = () => {
    if (!chessSliderRef.current) return;
    const scrollLeft = chessSliderRef.current.scrollLeft;
    const width = chessSliderRef.current.clientWidth;
    if (width > 0) {
      const newIndex = Math.round(scrollLeft / width);
      if (
        newIndex !== chessSlide &&
        newIndex >= 0 &&
        newIndex < chessImageCount
      ) {
        setChessSlide(newIndex);
      }
    }
  };

  const nextTvSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextIdx = (tvSlide + 1) % tvImageCount;
    scrollToTvSlide(nextIdx);
  };

  const prevTvSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const prevIdx = (tvSlide - 1 + tvImageCount) % tvImageCount;
    scrollToTvSlide(prevIdx);
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
      icon: MonitorPlay,
      images: tvImages,
      isSlider: true,
    },
    {
      name: "Chess & Carrom",
      description:
        "Indoor strategic games that improve focus, patience, and social bonding.",
      benefit: "Cognitive Development",
      icon: Dices,
      images: chessImages,
      isSlider: true,
    },
  ];

  return (
    <Section className="relative overflow-hidden bg-stone-50/50 pt-10 pb-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100/50 via-emerald-50/20 to-stone-100/50 opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/95 via-transparent to-stone-50/95"></div>
      </div>

      <FadeIn direction="up">
        <div className="mb-20 text-center">
          <span className="rounded-full border border-emerald-200/50 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-600">
            Recreation & Fun
          </span>
          <h2 className="mt-4 mb-6 text-5xl font-bold tracking-tight text-stone-800 md:text-6xl">
            Games & <span className="gradient-text">Fun Time</span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-600 md:text-xl">
            Recreational activities designed to promote happiness, social
            bonding, emotional healing, and active participation through fun and
            engaging experiences.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer staggerDelay={0.08}>
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-3 sm:px-4 md:grid-cols-2">
          {activities.map((activity) => {
            const isTv = activity.name === "TV & Movie Time";
            const currentSlide = isTv ? tvSlide : chessSlide;
            const sliderImages = activity.images ?? [];
            const prevSlide = isTv ? prevTvSlide : prevChessSlide;
            const nextSlide = isTv ? nextTvSlide : nextChessSlide;
            const handleScroll = isTv ? handleTvScroll : handleChessScroll;
            const sliderRef = isTv ? tvSliderRef : chessSliderRef;
            const scrollToSlide = isTv ? scrollToTvSlide : scrollToChessSlide;
            const ActivityIcon = activity.icon;

            return (
              <StaggerItem key={activity.name}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative h-[480px] w-full overflow-hidden rounded-[36px] border border-stone-200/50 bg-stone-900 shadow-xl transition-all hover:shadow-[0_30px_60px_rgba(16,185,129,0.2)] md:h-[580px]"
                >
                  <div className="absolute inset-0">
                    <div className="relative h-full w-full overflow-hidden group/slider">
                      <div
                        ref={sliderRef}
                        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar"
                        onScroll={handleScroll}
                      >
                        {sliderImages.map((img, idx) => (
                          <div
                            key={idx}
                            className="relative h-full w-full flex-shrink-0 snap-start"
                          >
                            <Image
                              src={img}
                              alt={`${activity.name} ${idx + 1}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="bg-stone-950 object-contain p-2 transition-transform duration-1000 group-hover:scale-[1.02] md:p-3"
                              priority={idx === 0}
                            />
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={prevSlide}
                        className="absolute left-4 top-[40%] z-30 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 shadow-lg backdrop-blur-xl transition-all hover:scale-110 hover:bg-emerald-500 active:scale-95 group-hover/slider:opacity-100"
                        aria-label="Previous image"
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-4 top-[40%] z-30 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 shadow-lg backdrop-blur-xl transition-all hover:scale-110 hover:bg-emerald-500 active:scale-95 group-hover/slider:opacity-100"
                        aria-label="Next image"
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <div className="absolute top-6 right-6 z-20 flex space-x-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-xl">
                        {sliderImages.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              scrollToSlide(idx);
                            }}
                            className={`cursor-pointer rounded-full transition-all duration-300 ${
                              currentSlide === idx
                                ? "h-1.5 w-4 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                                : "h-1.5 w-1.5 bg-white/60 hover:bg-white"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />

                  <div className="absolute top-6 left-6 z-20">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-white shadow-lg backdrop-blur-xl">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>
                      {activity.benefit}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-1 rounded-[24px] border border-white/10 bg-black/50 p-5 shadow-2xl backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:border-white/20 group-hover:bg-black/50">
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h3 className="text-xl font-extrabold leading-tight text-white md:text-2xl">
                        {activity.name}
                      </h3>

                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <ActivityIcon className="h-5 w-5 drop-shadow-sm" />
                      </div>
                    </div>

                    <p className="mb-0 text-xs leading-relaxed text-white/75 md:text-sm">
                      {activity.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </div>
      </StaggerContainer>
    </Section>
  );
};
