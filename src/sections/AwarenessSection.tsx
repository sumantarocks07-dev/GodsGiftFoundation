"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Section } from "@/components/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { AlertCircle } from "lucide-react";

export const AwarenessSection = () => {
  const hivImages = [
    "/images/hiv1.png",
    "/images/hiv2.png",
    "/images/hiv3.png",
    "/images/hiv4.png",
    "/images/hiv5.png",
    "/images/hiv6.png",
    "/images/hiv7.png",
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageCount = hivImages.length;

  function scrollToSlide(index: number) {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
    setCurrentSlide(index);
  }

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIdx = (currentSlide + 1) % imageCount;
      scrollToSlide(nextIdx);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlide, imageCount]);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const width = sliderRef.current.clientWidth;
    if (width > 0) {
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex !== currentSlide && newIndex >= 0 && newIndex < imageCount) {
        setCurrentSlide(newIndex);
      }
    }
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextIdx = (currentSlide + 1) % imageCount;
    scrollToSlide(nextIdx);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const prevIdx = (currentSlide - 1 + imageCount) % imageCount;
    scrollToSlide(prevIdx);
  };

  return (
    <Section className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blur-circle absolute top-1/2 right-0 w-96 h-96 bg-red-400/10"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Visual Slider */}
        <FadeIn direction="left">
          <div className="relative group/slider h-[400px] md:h-[480px] rounded-[32px] overflow-hidden shadow-2xl bg-stone-100 border border-stone-200/40">
            {/* Image Slider Wrapper */}
            <div
              ref={sliderRef}
              className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
              onScroll={handleScroll}
            >
              {hivImages.map((img, idx) => (
                <div key={idx} className="w-full h-full flex-shrink-0 snap-start relative">
                  <Image
                    src={img}
                    alt={`HIV Campaign Slide ${idx + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>

            {/* Subtle Vignette Gradient */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-85" />

            {/* Campaign Badge */}
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
              <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-white/95 backdrop-blur-md text-emerald-700 shadow-sm border border-white/40">
                Outreach Camp
              </span>
            </div>

            {/* Slider Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/45 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 active:scale-95 transition-all opacity-0 group-hover/slider:opacity-100 shadow-md border border-white/10 z-20 cursor-pointer"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/45 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 active:scale-95 transition-all opacity-0 group-hover/slider:opacity-100 shadow-md border border-white/10 z-20 cursor-pointer"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slider Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {hivImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSlide(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? "bg-white w-5"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Right - Content */}
        <FadeIn direction="right" delay={0.2}>
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              HIV Test <span className="gradient-text">Awareness Camp</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our community outreach program provides free HIV testing, education,
              and counseling services with complete confidentiality. We believe in
              early detection and community awareness.
            </p>

            <StaggerContainer staggerDelay={0.1}>
              {[
                "Free confidential testing services",
                "Expert medical counseling",
                "Educational awareness programs",
                "Community outreach campaigns",
                "Post-test support and guidance",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="mt-8 p-6 rounded-2xl bg-amber-50 border-l-4 border-amber-500 flex gap-4">
              <AlertCircle className="text-amber-600 shrink-0 mt-1" />
              <div>
                <div className="font-bold text-amber-900 mb-1">
                  Early Detection Saves Lives
                </div>
                <p className="text-sm text-amber-800">
                  Regular testing and awareness are crucial for health and community safety.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
