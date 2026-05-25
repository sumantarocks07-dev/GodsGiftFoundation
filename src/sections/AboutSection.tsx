"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/Animations";
import {
  Heart,
  Users,
  Leaf,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export const AboutSection = () => {
  const images = [
    "/image/about.png",
    "/image/about2.png",
    "/image/about3.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageCount = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageCount);
    }, 4000);
    return () => clearInterval(timer);
  }, [imageCount]);

  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "Our dedicated team provides heartfelt support with utmost respect and dignity.",
      color: "rose",
      gradient: "from-rose-500 to-pink-500",
      bgGlow: "bg-rose-50",
      hoverBorder: "hover:border-rose-100",
      shadowGlow: "shadow-rose-500/10",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description:
        "Qualified professionals with years of experience in rehabilitation and wellness.",
      color: "blue",
      gradient: "from-blue-500 to-indigo-500",
      bgGlow: "bg-blue-50",
      hoverBorder: "hover:border-blue-100",
      shadowGlow: "shadow-blue-500/10",
    },
    {
      icon: Leaf,
      title: "Holistic Healing",
      description:
        "Combining modern medicine with traditional wellness practices for complete recovery.",
      color: "emerald",
      gradient: "from-emerald-500 to-teal-500",
      bgGlow: "bg-emerald-50",
      hoverBorder: "hover:border-emerald-100",
      shadowGlow: "shadow-emerald-500/10",
    },
    {
      icon: ShieldCheck,
      title: "Healing Environment",
      description:
        "Safe, peaceful, and nurturing environment designed for optimal recovery.",
      color: "amber",
      gradient: "from-amber-500 to-orange-500",
      bgGlow: "bg-amber-50",
      hoverBorder: "hover:border-amber-100",
      shadowGlow: "shadow-amber-500/10",
    },
  ];

  return (
    <Section
      id="about"
      className="relative overflow-hidden pt-16 pb-0 lg:pt-24 lg:pb-0"
    >
      {/* PREMIUM BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-100px] left-[-80px] w-[350px] h-[350px] bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-emerald-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ASYMMETRICAL 2-COLUMN SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          
          {/* Left Column: Comprehensive Storytelling Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 font-semibold text-xs mb-4 border border-green-100/50"
            >
              <Sparkles size={14} className="text-green-600 animate-pulse" />
              About Our Foundation
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[clamp(1.75rem,5vw,2.75rem)] font-extrabold leading-[1.2] text-gray-900 tracking-tight mb-4"
            >
              Transforming Lives Through
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mt-1">
                Rehabilitation & Wellness
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed"
            >
              <p>
                To provide dignified, comprehensive rehabilitation and wellness
                services that empower individuals to reclaim their lives and fulfill
                their potential. We believe in the power of compassionate care
                combined with professional expertise.
              </p>
              
              <div className="border-l-4 border-green-500 pl-4 py-2 my-4 bg-green-50/40 rounded-r-xl">
                <p className="font-semibold text-gray-800 text-[15px] sm:text-base">
                  "Healing Through Compassionate Care"
                </p>
                <p className="text-[13px] sm:text-[14px] text-gray-600 mt-1">
                  Empowering individuals with rehabilitation, wellness, and a supportive community care for a healthier, clean, and vibrant future.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium High-Visibility Image */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] group border border-gray-100 w-full h-[280px] sm:h-[360px] lg:h-[420px]"
            >
              {images.map((src, index) => (
                <motion.img
                  key={src}
                  src={src}
                  alt={`About God's Gift Foundation ${index + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ))}
              
              {/* Navigation Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index ? "w-6 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" : "w-2 bg-white/55 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Subtle glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 opacity-40 pointer-events-none z-10" />
            </motion.div>
          </div>

        </div>

        {/* FEATURES GRID */}
        <div className="mt-8 lg:mt-12">
          <StaggerContainer staggerDelay={0.08}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className={`relative overflow-hidden rounded-[24px] bg-white/80 backdrop-blur-md border border-gray-100/80 p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] ${feature.hoverBorder} transition-all duration-300 flex flex-row sm:flex-col items-start gap-4 sm:gap-0`}
                  >
                    {/* Dynamic Glow Dot Accent */}
                    <div className={`absolute top-0 right-0 w-24 h-24 ${feature.bgGlow} rounded-full blur-2xl opacity-60 pointer-events-none`}></div>

                    {/* Compact Dynamic Icon Container */}
                    <div className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center flex-shrink-0 shadow-md ${feature.shadowGlow} sm:mb-4`}>
                      <feature.icon size={22} />
                    </div>

                    {/* Text Container */}
                    <div className="relative z-10 flex-grow text-left sm:mt-2">
                      <div className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                        {feature.title}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>

      </div>
    </Section>
  );
};
