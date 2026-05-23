"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  HeartPulse,
  MapPin,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { useState, useEffect } from "react";

const typewriterTexts = [
  "Detox & Rehabilitation Centre for Lasting Recovery",
  "Old Age Care Unit and Support for the Elderly residents"
];

const TypewriterHeading = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(50);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleTyping = () => {
      const i = loopNum % typewriterTexts.length;
      const fullText = typewriterTexts[i];

      setText(prev => isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1));

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 3500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        timer = setTimeout(() => {}, 500);
      } else {
        timer = setTimeout(handleTyping, isDeleting ? 25 : 55);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="mb-4 sm:mb-5 h-[160px] sm:h-[140px] md:h-[220px] lg:h-[280px] flex items-start">
      <h1 className="max-w-4xl text-[clamp(2rem,7vw,4rem)] font-extrabold leading-[1.15] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] md:text-[clamp(3.5rem,6vw,4.75rem)]">
        <span>
          {text}
          <span className="animate-[pulse_1s_ease-in-out_infinite] border-r-[4px] sm:border-r-[6px] border-emerald-400 ml-1 inline-block -mb-[0.1em] h-[0.9em]"></span>
        </span>
      </h1>
    </div>
  );
};

export const HeroSection = () => {

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const highlights = [
    ["24/7", "Support for urgent recovery and care needs"],
    ["500+", "People and families supported with dignity"],
    ["Holistic", "Detox, counselling, yoga, meditation, and elder care"],
  ];

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden pb-12 pt-24 sm:pt-28">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/image/hero_image.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#000000] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 sm:pt-10">
        <div className="grid min-h-[76svh] min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-w-0 max-w-4xl"
          >
            {/* Premium Responsive Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 inline-flex w-full max-w-full items-center gap-3 overflow-hidden rounded-[24px] border border-white/15 bg-white/10 px-4 py-3 text-left text-sm font-medium text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:mb-5 sm:w-auto sm:px-5 sm:text-base"
            >
              {/* Glow Dot */}
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,1)]" />
              </span>

              {/* Text */}
              <span className="min-w-0 leading-relaxed tracking-wide text-white/95">
                Trusted rehabilitation and old age care in Howrah
              </span>
            </motion.div>

            <TypewriterHeading />

            <p className="mb-6 max-w-3xl text-[clamp(0.95rem,3.5vw,1.125rem)] leading-relaxed text-slate-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] sm:mb-8 md:text-xl">
              God's Gift Foundation provides compassionate detoxification,
              addiction rehabilitation, meditation therapy, yoga wellness, and
              old age care for men and women in West Bengal.
            </p>

            <div className="mb-10 flex flex-wrap gap-2 text-xs font-semibold text-slate-100 sm:mb-14 sm:gap-3 sm:text-sm">
              <span className="inline-flex min-w-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <HeartPulse size={15} className="text-emerald-300" />
                De-addiction support
              </span>
              <span className="inline-flex min-w-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <ShieldCheck size={15} className="text-emerald-300" />
                Safe residential care
              </span>
              <span className="inline-flex min-w-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <MapPin size={15} className="text-emerald-300" />
                Dasnagar, Howrah
              </span>
            </div>

            <div className="flex flex-col gap-3.5 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-6 py-3.5 text-center text-base font-bold text-white shadow-xl shadow-emerald-950/20 transition-all duration-300 hover:scale-[1.02] hover:bg-emerald-400 sm:w-auto sm:px-7 sm:py-4"
              >
                <PhoneCall size={18} />
                Get Confidential Support
              </Link>

              <Link
                href="/services"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-center text-base font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 sm:w-auto sm:px-7 sm:py-4"
              >
                View Care Programs
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden rounded-2xl border border-white/15 p-5 text-white shadow-2xl  lg:block"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
              Care Highlights
            </p>
            <div className="space-y-5">
              {highlights.map(([value, label]) => (
                <div
                  key={value}
                  className="border-t border-white/15 pt-5 first:border-t-0 first:pt-0"
                >
                  <p className="text-3xl font-extrabold text-emerald-300">
                    {value}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-100">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={scrollToNextSection}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 text-emerald-500"
          aria-label="Scroll to about section"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.button>
      </div>
    </section>
  );
};
