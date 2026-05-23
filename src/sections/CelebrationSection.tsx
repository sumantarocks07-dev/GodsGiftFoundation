"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/Animations";

const categories = [
  { id: "all", name: "All Events", icon: "✨" },
  { id: "holi", name: "Holi Festival", icon: "🎨" },
  { id: "christmas", name: "Christmas Celebration", icon: "🎄" },
  { id: "birthday", name: "Birthday Parties", icon: "🎂" }
];

const galleryItems = [
  // Holi
  { id: "holi-1", category: "holi", src: "/image/holi1.png", title: "Festival of Colors", desc: "Joyous Holi celebration with residents and staff" },
  { id: "holi-2", category: "holi", src: "/image/holi2.png", title: "Vibrant Smiles", desc: "Spreading colors of hope, love, and recovery" },
  { id: "holi-3", category: "holi", src: "/image/holi3.png", title: "Community Togetherness", desc: "Unity in color and spirit" },
  { id: "holi-4", category: "holi", src: "/image/holi4.png", title: "Joyful Celebrations", desc: "Traditional festivity filled with laughter" },
  { id: "holi-5", category: "holi", src: "/image/holi5.png", title: "Colors of Healing", desc: "Creative activities promoting wellness" },
  { id: "holi-6", category: "holi", src: "/image/holi6.png", title: "Bright Memories", desc: "Capturing cherishable moments of recovery" },
  
  // Christmas
  { id: "christmas-1", category: "christmas", src: "/image/christmas1.png", title: "Christmas Cheers", desc: "Christmas celebration with holiday lights and decorations" },
  { id: "christmas-2", category: "christmas", src: "/image/christmas2.png", title: "Merry & Bright", desc: "Spreading warmth and cheer during the winter season" },
  { id: "christmas-3", category: "christmas", src: "/image/christmas3.png", title: "Holiday Festivities", desc: "Gifts, carols, and delicious meals shared with love" },
  
  // Birthdays
  { id: "birthday-1", category: "birthday", src: "/image/birthday1.png", title: "Birthday Joy", desc: "Special birthday parties honoring residents" },
  { id: "birthday-2", category: "birthday", src: "/image/birthday2.png", title: "Warm Wishes", desc: "Personal celebrations with cakes and gifts" },
  { id: "birthday-3", category: "birthday", src: "/image/birthday3.png", title: "Together in Celebration", desc: "Group cheers and blessings for the birthday person" },
  { id: "birthday-4", category: "birthday", src: "/image/birthday4.png", title: "Sweet Moments", desc: "Birthday cake cutting and delicious treats" },
  { id: "birthday-5", category: "birthday", src: "/image/birthday5.png", title: "Smiles & Happiness", desc: "A day filled with attention, warmth, and care" },
  { id: "birthday-6", category: "birthday", src: "/image/birthday6.png", title: "Birthday Blessings", desc: "Community wishes and encouraging messages" },
  { id: "birthday-7", category: "birthday", src: "/image/birthday7.png", title: "Love & Care", desc: "Ensuring every resident feels valued and celebrated" },
];

const GalleryCard = ({ item, onClick }: { item: any, onClick: (id: string) => void }) => {
  return (
    <div
      onClick={() => onClick(item.id)}
      className="group relative overflow-hidden rounded-[28px] aspect-[4/3] bg-stone-100 border border-stone-200/40 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 cursor-zoom-in transition-all duration-300"
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        sizes="(max-w-7xl) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute top-4 right-4 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-full bg-white/90 backdrop-blur-sm text-stone-800 shadow-sm">
          {item.category}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
        <h4 className="text-lg font-bold truncate mb-1">{item.title}</h4>
        <p className="text-xs text-stone-200 line-clamp-2">{item.desc}</p>
      </div>
    </div>
  );
};


export const CelebrationSection = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Lock body & documentElement scroll when lightbox is active to prevent page layout breaks
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

  const filteredItems = React.useMemo(() => {
    if (selectedTab !== "all") {
      return galleryItems.filter(item => item.category === selectedTab);
    }
    
    const allItems = [...galleryItems];
    if (mounted) {
      // Simple random shuffle for 'All Events'
      for (let i = allItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allItems[i], allItems[j]] = [allItems[j], allItems[i]];
      }
    }
    return allItems;
  }, [selectedTab, mounted]);

  const displayItems = filteredItems.slice(0, 2);
  const marqueeItems = [...displayItems, ...displayItems, ...displayItems, ...displayItems];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === null ? prev : prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === null ? prev : prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const handleItemClick = (itemId: string) => {
    const index = filteredItems.findIndex(item => item.id === itemId);
    setLightboxIndex(index);
  };

  return (
    <Section className="relative overflow-hidden pt-10 pb-24 bg-stone-50/30">
      {/* Animated background circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="blur-circle absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 opacity-5"
          animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="blur-circle absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400 to-teal-400 opacity-5"
          animate={{ x: [0, -30, 30, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </div>

      <FadeIn direction="up">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/50">
            Community Spirit
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 tracking-tight text-stone-800">
            Festival <span className="gradient-text">Celebrations</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Sharing joy, togetherness, and cultural traditions. Our festive celebrations bring hope, foster strong community bonds, and create cherishable memories.
          </p>
        </div>
      </FadeIn>

      {/* Category Tabs Selector */}
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto px-4 mb-12 relative z-10">
        {categories.map((cat) => {
          const isActive = selectedTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedTab(cat.id);
                setLightboxIndex(null);
              }}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                isActive
                  ? "border-emerald-600 text-white"
                  : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50 hover:border-stone-300"
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

      {/* Infinite Marquee Slider */}
      <div className="relative w-full overflow-hidden py-8">
        <motion.div 
          className="flex w-max gap-6 sm:gap-10 px-6 sm:px-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {marqueeItems.map((item, index) => (
             <div key={`${item.id}-${index}`} className="w-[85vw] sm:w-[50vw] lg:w-[600px] shrink-0">
                <GalleryCard item={item} onClick={handleItemClick} />
             </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal via Portal */}
      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-md cursor-zoom-out touch-none"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 text-white/75 hover:text-white transition-colors duration-300 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 z-50 cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>

              {/* Image Container with prev/next buttons */}
              <div className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
                
                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/60 hover:scale-105 active:scale-95 cursor-pointer animate-fade-in"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
                </button>

                {/* Image Frame */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 select-none">
                  <Image
                    src={filteredItems[lightboxIndex].src}
                    alt={filteredItems[lightboxIndex].title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/60 hover:scale-105 active:scale-95 cursor-pointer animate-fade-in"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>

              {/* Footer with Title and Description */}
              <div className="mt-6 text-center max-w-2xl px-4 text-white z-10 select-none">
                <h4 className="text-xl font-bold sm:text-2xl mb-1">{filteredItems[lightboxIndex].title}</h4>
                <p className="text-sm sm:text-base text-gray-400">{filteredItems[lightboxIndex].desc}</p>
                <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40 inline-block">
                  {categories.find(cat => cat.id === filteredItems[lightboxIndex].category)?.name}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Philosophy Quote */}
      <div className="mt-24 text-center p-12 rounded-[32px] bg-gradient-to-r from-emerald-50/60 to-green-50/60 border border-emerald-100/50 max-w-5xl mx-auto shadow-sm">
        <p className="text-xl md:text-2xl font-bold text-stone-800 mb-4 italic leading-relaxed">
          "Celebration brings hope, creates memories, and strengthens the spirit."
        </p>
        <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">- God's Gift Foundation Philosophy</p>
      </div>
    </Section>
  );
};
