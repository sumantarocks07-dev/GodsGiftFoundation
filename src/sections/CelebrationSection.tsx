"use client";

import React, { useMemo, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/Animations";

type CategoryId = "all" | "holi" | "christmas" | "birthday";
type EventCategoryId = Exclude<CategoryId, "all">;

interface Category {
  id: CategoryId;
  name: string;
  icon: string;
}

interface GalleryItem {
  id: string;
  category: EventCategoryId;
  src: string;
  title: string;
  desc: string;
}

const categories: Category[] = [
  { id: "all", name: "All Events", icon: "All" },
  { id: "holi", name: "Holi Festival", icon: "Holi" },
  { id: "christmas", name: "Christmas Celebration", icon: "Xmas" },
  { id: "birthday", name: "Birthday Parties", icon: "Bday" },
];

const galleryItems: GalleryItem[] = [
  { id: "holi-1", category: "holi", src: "/image/holi1.png", title: "Festival of Colors", desc: "Joyous Holi celebration with residents and staff" },
  { id: "holi-2", category: "holi", src: "/image/holi2.png", title: "Vibrant Smiles", desc: "Spreading colors of hope, love, and recovery" },
  { id: "holi-3", category: "holi", src: "/image/holi3.png", title: "Community Togetherness", desc: "Unity in color and spirit" },
  { id: "holi-4", category: "holi", src: "/image/holi4.png", title: "Joyful Celebrations", desc: "Traditional festivity filled with laughter" },
  { id: "holi-5", category: "holi", src: "/image/holi5.png", title: "Colors of Healing", desc: "Creative activities promoting wellness" },
  { id: "holi-6", category: "holi", src: "/image/holi6.png", title: "Bright Memories", desc: "Capturing cherishable moments of recovery" },
  { id: "christmas-1", category: "christmas", src: "/image/christmas1.png", title: "Christmas Cheers", desc: "Christmas celebration with holiday lights and decorations" },
  { id: "christmas-2", category: "christmas", src: "/image/christmas2.png", title: "Merry & Bright", desc: "Spreading warmth and cheer during the winter season" },
  { id: "christmas-3", category: "christmas", src: "/image/christmas3.png", title: "Holiday Festivities", desc: "Gifts, carols, and delicious meals shared with love" },
  { id: "birthday-1", category: "birthday", src: "/image/birthday1.png", title: "Birthday Joy", desc: "Special birthday parties honoring residents" },
  { id: "birthday-2", category: "birthday", src: "/image/birthday2.png", title: "Warm Wishes", desc: "Personal celebrations with cakes and gifts" },
  { id: "birthday-3", category: "birthday", src: "/image/birthday3.png", title: "Together in Celebration", desc: "Group cheers and blessings for the birthday person" },
  { id: "birthday-4", category: "birthday", src: "/image/birthday4.png", title: "Sweet Moments", desc: "Birthday cake cutting and delicious treats" },
  { id: "birthday-5", category: "birthday", src: "/image/birthday5.png", title: "Smiles & Happiness", desc: "A day filled with attention, warmth, and care" },
  { id: "birthday-6", category: "birthday", src: "/image/birthday6.png", title: "Birthday Blessings", desc: "Community wishes and encouraging messages" },
  { id: "birthday-7", category: "birthday", src: "/image/birthday7.png", title: "Love & Care", desc: "Ensuring every resident feels valued and celebrated" },
];

const allEventsOrder: GalleryItem[] = [
  ...galleryItems.filter((item) => item.category === "holi"),
  ...galleryItems.filter((item) => item.category === "christmas"),
  ...galleryItems.filter((item) => item.category === "birthday"),
];

const GalleryCard = ({
  item,
  onClick,
}: {
  item: GalleryItem;
  onClick: (id: string) => void;
}) => {
  return (
    <div
      onClick={() => onClick(item.id)}
      className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-[28px] border border-stone-200/40 bg-stone-100 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20"
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        sizes="(max-width: 1024px) 85vw, 600px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute right-4 top-4 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-stone-800 shadow-sm backdrop-blur-sm">
          {item.category}
        </span>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 translate-y-4 p-5 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <h4 className="mb-1 truncate text-lg font-bold">{item.title}</h4>
        <p className="line-clamp-2 text-xs text-stone-200">{item.desc}</p>
      </div>
    </div>
  );
};

export const CelebrationSection = () => {
  const [selectedTab, setSelectedTab] = useState<CategoryId>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const portalRoot = typeof document !== "undefined" ? document.body : null;

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [lightboxIndex]);

  const filteredItems = useMemo(() => {
    if (selectedTab === "all") {
      return allEventsOrder;
    }

    return galleryItems.filter((item) => item.category === selectedTab);
  }, [selectedTab]);

  const displayItems = filteredItems.slice(0, 2);
  const marqueeItems = [...displayItems, ...displayItems, ...displayItems, ...displayItems];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? prev : prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? prev : prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  const handleItemClick = (itemId: string) => {
    const index = filteredItems.findIndex((item) => item.id === itemId);
    setLightboxIndex(index);
  };

  return (
    <Section className="relative overflow-hidden bg-stone-50/30 pb-24 pt-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="blur-circle absolute left-1/4 top-1/4 h-96 w-96 bg-gradient-to-br from-purple-400 to-pink-400 opacity-5"
          animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="blur-circle absolute bottom-1/4 right-1/4 h-96 w-96 bg-gradient-to-br from-emerald-400 to-teal-400 opacity-5"
          animate={{ x: [0, -30, 30, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </div>

      <FadeIn direction="up">
        <div className="mb-16 text-center">
          <span className="rounded-full border border-emerald-200/50 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-600">
            Community Spirit
          </span>
          <h2 className="mt-4 mb-6 text-5xl font-bold tracking-tight text-stone-800 md:text-6xl">
            Festival <span className="gradient-text">Celebrations</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-600 md:text-xl">
            Sharing joy, togetherness, and cultural traditions. Our festive celebrations bring hope, foster strong community bonds, and create cherishable memories.
          </p>
        </div>
      </FadeIn>

      <div className="relative z-10 mx-auto mb-12 flex max-w-4xl flex-wrap justify-center gap-3 px-4">
        {categories.map((cat) => {
          const isActive = selectedTab === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedTab(cat.id);
                setLightboxIndex(null);
              }}
              className={`relative flex cursor-pointer items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "border-emerald-600 text-white"
                  : "border-stone-200 bg-white text-stone-600 hover:border-stone-300 hover:bg-stone-50"
              }`}
            >
              <span className="relative z-10">{cat.icon}</span>
              <span className="relative z-10">{cat.name}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 z-0 rounded-full bg-emerald-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="relative w-full overflow-hidden py-8">
        <motion.div
          className="flex w-max gap-6 px-6 sm:gap-10 sm:px-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[85vw] shrink-0 sm:w-[50vw] lg:w-[600px]"
            >
              <GalleryCard item={item} onClick={handleItemClick} />
            </div>
          ))}
        </motion.div>
      </div>

      {portalRoot &&
        createPortal(
          <AnimatePresence>
            {lightboxIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxIndex(null)}
                className="fixed inset-0 z-[99999] flex cursor-zoom-out touch-none flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-md md:p-8"
              >
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="absolute right-6 top-6 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition-colors duration-300 hover:bg-white/10 hover:text-white"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div
                  className="relative flex h-[65vh] w-full max-w-5xl items-center justify-center sm:h-[75vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={handlePrev}
                    className="animate-fade-in absolute left-2 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/60 active:scale-95 sm:left-4"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div className="relative h-full w-full select-none overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
                    <Image
                      src={filteredItems[lightboxIndex].src}
                      alt={filteredItems[lightboxIndex].title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  <button
                    onClick={handleNext}
                    className="animate-fade-in absolute right-2 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/60 active:scale-95 sm:right-4"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="z-10 mt-6 max-w-2xl select-none px-4 text-center text-white">
                  <h4 className="mb-1 text-xl font-bold sm:text-2xl">
                    {filteredItems[lightboxIndex].title}
                  </h4>
                  <p className="text-sm text-gray-400 sm:text-base">
                    {filteredItems[lightboxIndex].desc}
                  </p>
                  <div className="mt-3 inline-block rounded-full border border-emerald-800/40 bg-emerald-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    {categories.find(
                      (cat) => cat.id === filteredItems[lightboxIndex].category
                    )?.name}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          portalRoot
        )}

      <div className="mx-auto mt-24 max-w-5xl rounded-[32px] border border-emerald-100/50 bg-gradient-to-r from-emerald-50/60 to-green-50/60 p-12 text-center shadow-sm">
        <p className="mb-4 text-xl font-bold italic leading-relaxed text-stone-800 md:text-2xl">
          "Celebration brings hope, creates memories, and strengthens the spirit."
        </p>
        <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
          - God&apos;s Gift Foundation Philosophy
        </p>
      </div>
    </Section>
  );
};
