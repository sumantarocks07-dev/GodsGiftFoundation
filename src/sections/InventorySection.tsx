"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

export const InventorySection = () => {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [counselIndex, setCounselIndex] = useState(0);

  const galleryImages = [
    { src: "/image/inputsession1.png", alt: "Group Counseling & Interactive Discussion" },
    { src: "/image/inputsession2.png", alt: "Personal Guidance & Interactive Rehabilitation" },
    { src: "/image/Inventorysession1.jpeg", alt: "Clinical Infrastructure & Care Facilities" },
    { src: "/image/Inventorysession2.jpeg", alt: "Modern Rehabilitation & Healing Environment" },
  ];

  const counselImages = [
    { src: "/image/councelling-session1.png", alt: "One-on-One Psychological Counselling & Guidance" },
    { src: "/image/councelling-session2.png", alt: "Group Support & Shared Wellness Sharing" },
    { src: "/image/councelling-session3.png", alt: "Professional Psychological Evaluation & Therapy" },
  ];

  // Auto-swipe timers (3000ms is slightly faster and keeps the slider dynamic)
  useEffect(() => {
    const timer = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [galleryIndex, galleryImages.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounselIndex((prev) => (prev + 1) % counselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [counselIndex, counselImages.length]);

  const inventory = [
    {
      emoji: "💊",
      title: "Medical Supplies",
      description: "Comprehensive medical equipment and medications",
      count: "500+",
    },
    {
      emoji: "🍎",
      title: "Nutritional Support",
      description: "Balanced diet plans and supplements",
      count: "Daily",
    },
    {
      emoji: "🛏️",
      title: "Comfortable Beds",
      description: "Modern amenities for comfort and recovery",
      count: "100+",
    },
    {
      emoji: "🧘",
      title: "Therapy Equipment",
      description: "Specialized tools for rehabilitation programs",
      count: "Trending",
    },
    {
      emoji: "📚",
      title: "Learning Resources",
      description: "Educational materials for wellness education",
      count: "50+",
    },
    {
      emoji: "🎮",
      title: "Recreational Items",
      description: "Games and activities for mental wellness",
      count: "100+",
    },
  ];

  return (
    <Section className="relative pt-8 lg:pt-12">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blur-circle absolute -bottom-40 right-1/4 w-96 h-96 bg-amber-400/10"></div>
      </div>

      <FadeIn direction="up">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Facilities & <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive facilities and support resources ensuring comfort,
            care, and well-being throughout the recovery journey.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer staggerDelay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inventory.map((item) => (
            <StaggerItem key={item.title}>
              <Card hover className="text-center p-8">
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring" }}
                >
                  {item.emoji}
                </motion.div>
                <div className="text-2xl font-bold mb-2">{item.title}</div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-3xl font-bold gradient-text">
                    {item.count}
                  </p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>

      {/* Bento grid highlight */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-green-100 to-emerald-100 shadow-lg"
        >
          <div className="text-3xl font-bold mb-4">24/7 Care Management</div>
          <p className="text-gray-700 mb-6">
            Round-the-clock nursing care with regular health monitoring and immediate medical support.
          </p>
          <button className="px-6 py-2 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors">
            Learn More
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-amber-100 to-orange-100 shadow-lg"
        >
          <div className="text-3xl font-bold mb-4">Quality Standards</div>
          <p className="text-gray-700">
            Certified and accredited healthcare facility maintaining highest care standards.
          </p>
        </motion.div>
      </div>

      {/* Interactive Galleries */}
      <div className="mt-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur-md">
            Interactive Spaces
          </span>
          <h3 className="text-3xl sm:text-4xl font-black text-slate-950">Specialized Sessions</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gallery 1: Input Sessions */}
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold text-slate-800 mb-6 text-center lg:text-left">Input Sessions</h4>
            <div className="relative overflow-hidden rounded-[30px] border border-white/60 bg-white/40 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl ring-1 ring-slate-100/50">
              <div className="relative h-[320px] sm:h-[450px] w-full overflow-hidden rounded-[24px] bg-slate-900 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={galleryIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={galleryImages[galleryIndex].src}
                      alt={galleryImages[galleryIndex].alt}
                      fill
                      sizes="(max-w-4xl) 50vw"
                      className="object-cover object-center transition-transform duration-750 hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                      <h4 className="text-base font-bold sm:text-lg drop-shadow-md">
                        {galleryImages[galleryIndex].alt}
                      </h4>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Buttons */}
                <button
                  onClick={() => setGalleryIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/60 hover:scale-105 active:scale-95 z-20 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button
                  onClick={() => setGalleryIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/60 hover:scale-105 active:scale-95 z-20 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
                </button>

                {/* Micro-Dots */}
                <div className="absolute bottom-6 right-6 flex gap-1.5 z-20 bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/5">
                  {galleryImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setGalleryIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === galleryIndex ? "w-5 bg-emerald-500" : "w-2 bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Gallery 2: Counselling Sessions */}
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold text-slate-800 mb-6 text-center lg:text-left">Counselling Sessions</h4>
            <div className="relative overflow-hidden rounded-[30px] border border-white/60 bg-white/40 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl ring-1 ring-slate-100/50">
              <div className="relative h-[320px] sm:h-[450px] w-full overflow-hidden rounded-[24px] bg-slate-900 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={counselIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={counselImages[counselIndex].src}
                      alt={counselImages[counselIndex].alt}
                      fill
                      sizes="(max-w-4xl) 50vw"
                      className="object-cover object-center transition-transform duration-750 hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                      <h4 className="text-base font-bold sm:text-lg drop-shadow-md">
                        {counselImages[counselIndex].alt}
                      </h4>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Buttons */}
                <button
                  onClick={() => setCounselIndex((prev) => (prev === 0 ? counselImages.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/60 hover:scale-105 active:scale-95 z-20 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button
                  onClick={() => setCounselIndex((prev) => (prev === counselImages.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/60 hover:scale-105 active:scale-95 z-20 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
                </button>

                {/* Micro-Dots */}
                <div className="absolute bottom-6 right-6 flex gap-1.5 z-20 bg-black/20 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/5">
                  {counselImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCounselIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === counselIndex ? "w-5 bg-emerald-500" : "w-2 bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
