"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Section } from "@/components/Section";
import { Users, Heart, MessageSquare, Shield, Sparkles } from "lucide-react";

const sessions = [
  {
    icon: MessageSquare,
    title: "One-on-One Counseling",
    description:
      "Private sessions with professional therapists for personalized support.",
    color: "from-blue-500 to-cyan-500 shadow-blue-500/20",
  },
  {
    icon: Users,
    title: "Group Recovery Meetings",
    description:
      "Supportive community meetings for shared healing and growth.",
    color: "from-purple-500 to-indigo-500 shadow-purple-500/20",
  },
  {
    icon: Heart,
    title: "Family Consultation",
    description:
      "Inclusive sessions involving family members in the recovery journey.",
    color: "from-rose-500 to-pink-500 shadow-rose-500/20",
  },
  {
    icon: Shield,
    title: "Mental Support Sessions",
    description:
      "Specialized programs addressing mental health and emotional wellness.",
    color: "from-emerald-500 to-teal-500 shadow-emerald-500/20",
  },
];

const timelineSteps = [
  { phase: "Assessment", desc: "Initial evaluation and recovery planning." },
  { phase: "Treatment", desc: "Active therapy, counseling, and recovery." },
  { phase: "Integration", desc: "Rebuilding routines and coping skills." },
  { phase: "Aftercare", desc: "Long-term support and wellness check-ups." },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const MeetingSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sessions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section className="relative bg-[linear-gradient(180deg,#ffffff_0%,#fafcfb_50%,#ffffff_100%)] pt-8 pb-14 sm:pt-10 sm:pb-18 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute top-10 right-10 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-80 w-80 rounded-full bg-emerald-100/35 blur-3xl" />

      {/* Header Block */}
      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-5 py-2 text-sm font-semibold text-emerald-700 shadow-[0_16px_45px_rgba(16,185,129,0.12)] backdrop-blur-xl">
          <Sparkles className="h-4 w-4" />
          Compassionate Guidance
        </span>
        <h2 className="text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Counseling & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Support Sessions</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Professional mental health support in individual and group settings,
          fostering healing and recovery through compassionate counseling.
        </p>
      </div>

      {/* Interactive Sessions - Responsive Layout */}
      {/* Mobile Swipe View (Visible only on Mobile <= 768px) */}
      <div className="block md:hidden relative px-1">
        <div className="relative overflow-hidden rounded-[30px] border border-slate-100 bg-white/40 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl min-h-[290px] flex flex-col justify-between">
          {/* Active Accent strip */}
          <div className="absolute top-0 left-0 w-2.5 h-full bg-gradient-to-b from-emerald-400 to-teal-500" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4 pl-2"
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${sessions[activeSlide].color} text-white shadow-lg`}>
                  {(() => {
                    const Icon = sessions[activeSlide].icon;
                    return <Icon className="h-7 w-7" />;
                  })()}
                </div>
                <h3 className="text-xl font-black text-slate-950 leading-tight">
                  {sessions[activeSlide].title}
                </h3>
              </div>
              
              <p className="text-sm leading-relaxed text-slate-700">
                {sessions[activeSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 pt-5 border-t border-slate-100/60 flex items-center justify-between pl-2">
            <button className="inline-flex items-center gap-1 text-sm font-bold text-emerald-600">
              Learn More →
            </button>

            {/* Micro Dot Indicators */}
            <div className="flex gap-2">
              {sessions.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeSlide ? "w-6 bg-emerald-600" : "w-2.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Grid View (Hidden on Mobile) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="hidden md:grid grid-cols-2 gap-6"
      >
        {sessions.map((session) => {
          const Icon = session.icon;
          return (
            <motion.div
              key={session.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[30px] border border-white/80 bg-white/30 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/50 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_24px_60px_rgba(16,185,129,0.12)] hover:ring-emerald-200/50"
            >
              <div className="absolute top-0 left-0 w-2.5 h-full bg-gradient-to-b from-emerald-400 to-teal-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start pl-1">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${session.color} text-white shadow-lg`}>
                  <Icon className="h-7 w-7" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-black text-slate-950 sm:text-2xl transition-colors duration-300 group-hover:text-emerald-700">
                    {session.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">
                    {session.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100/60">
                    <button className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-emerald-600 transition-colors duration-300 hover:text-emerald-700">
                      Learn More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Recovery Timeline Block */}
      <div className="mt-16 sm:mt-24">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur-xl">
            Path to Recovery
          </span>
          <h3 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Our Recovery Timeline
          </h3>
        </div>

        {/* Timeline Steps Layout */}
        <div className="relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-[3px] bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 rounded-full" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {timelineSteps.map((item, idx) => (
              <motion.div
                key={item.phase}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div className="relative z-10 flex h-[90px] w-[90px] items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-emerald-400 to-teal-500 text-white font-black text-2xl shadow-[0_12px_30px_rgba(16,185,129,0.25)] transition-transform duration-500 group-hover:scale-110">
                  {idx + 1}
                  {/* Pulse effect on hover */}
                  <div className="absolute inset-0 -z-10 rounded-full bg-emerald-400/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Step Card */}
                <div className="mt-5 w-full rounded-[24px] border border-white/60 bg-white/40 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl ring-1 ring-slate-100/50 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(16,185,129,0.1)] hover:border-emerald-200/50">
                  <h4 className="text-lg font-black text-slate-950">{item.phase}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
