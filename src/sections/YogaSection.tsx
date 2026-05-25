"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { PanInfo, Variants } from "framer-motion";
import { Clock, Leaf, Sparkles } from "lucide-react";

const yogaSessions = [
  {
    images: ["/images/yoga1.jpeg"],
    icon: Leaf,
    title: "Hatha Yoga",
    description:
      "Gentle therapeutic yoga focused on breathing, posture correction, and mental calmness.",
    time: "7:00 AM - 8:30 AM",
  },
  {
    images: ["/images/yoga2.jpeg"],
    icon: Sparkles,
    title: "Vinyasa Flow",
    description:
      "Dynamic yoga sessions improving flexibility, body balance, and inner strength.",
    time: "5:00 PM - 6:30 PM",
  },
  {
    images: ["/images/yoga3.jpeg"],
    icon: Clock,
    title: "Meditation & Breathing",
    description:
      "Guided meditation and pranayama techniques for stress relief and emotional healing.",
    time: "6:00 AM - 6:45 AM",
  },
  {
    images: [
      "/images/prayer1.png",
      "/images/prayer2.png",
      "/images/prayer3.png"
    ],
    icon: Leaf,
    title: "Prayer Time",
    description:
      "Daily prayer and spiritual chanting sessions promoting inner peace, mindfulness, and divine connection.",
    time: "6:45 PM - 7:45 PM",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 34, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.72, ease: "easeOut" },
  },
};

const YogaSessionCard = ({ session, index }: { session: typeof yogaSessions[0], index: number }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const isMultiImage = session.images.length > 1;

  useEffect(() => {
    if (!isMultiImage) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % session.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isMultiImage, session.images.length]);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!isMultiImage) return;
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      setCurrentIdx((prev) => (prev + 1) % session.images.length);
    } else if (info.offset.x > swipeThreshold) {
      setCurrentIdx((prev) => (prev - 1 + session.images.length) % session.images.length);
    }
  };

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -12 }}
      className="group relative h-[440px] overflow-hidden rounded-[30px] border border-white/70 bg-white/20 shadow-[0_28px_80px_rgba(15,23,42,0.14)] ring-1 ring-emerald-100/70 backdrop-blur-2xl transition-shadow duration-500 hover:shadow-[0_34px_90px_rgba(16,185,129,0.22)] hover:ring-emerald-300/70 sm:h-[490px] lg:h-[510px]"
    >
      <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing overflow-hidden">
        {isMultiImage ? (
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={currentIdx}
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
                src={session.images[currentIdx]}
                alt={`${session.title} therapeutic yoga session`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover pointer-events-none select-none"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <Image
            src={session.images[0]}
            alt={`${session.title} therapeutic yoga session`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover pointer-events-none select-none transition-transform duration-1000 ease-out group-hover:scale-110"
            priority={index === 0}
          />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 rounded-[30px] border border-white/25 transition-colors duration-500 group-hover:border-emerald-200/70 pointer-events-none" />

      {/* MINI GALLERY INDICATOR DOTS */}
      {isMultiImage && (
        <div className="absolute top-4 right-4 z-25 flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-md px-2.5 py-1.5 border border-white/10">
          {session.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIdx === i ? "w-4 bg-emerald-400" : "w-1.5 bg-white/40 hover:bg-white"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      <div className="absolute inset-x-5 bottom-5 rounded-[26px] text-white sm:inset-x-6 sm:bottom-6 sm:p-5 pointer-events-none">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-200">
          Restorative Care
        </p>

        <h3 className="text-xl sm:text-2xl font-black leading-tight">
          {session.title}
        </h3>

        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/80 line-clamp-3">
          {session.description}
        </p>


      </div>
    </motion.article>
  );
};

export const PremiumYogaSection = () => {
  return (
    <section
      id="yoga-session"
      aria-labelledby="yoga-session-title"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf8_52%,#ffffff_100%)] pt-8 pb-14 sm:pt-10 sm:pb-18 lg:pt-12 lg:pb-24"
    >
      <div className="pointer-events-none absolute -top-28 left-8 h-80 w-80 rounded-full bg-emerald-200/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-8 right-0 h-96 w-96 rounded-full bg-lime-200/30 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-28 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-10"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-[0_16px_45px_rgba(16,185,129,0.12)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Best Therapeutic Wellness
          </span>

          <h2
            id="yoga-session-title"
            className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Yoga Session
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Therapeutic yoga programs designed to enhance physical wellness,
            flexibility, mindfulness, and emotional recovery.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10"
        >
          {yogaSessions.map((session, index) => (
            <YogaSessionCard key={session.title} session={session} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const YogaSection = PremiumYogaSection;
