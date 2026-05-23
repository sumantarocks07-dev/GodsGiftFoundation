"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/Animations";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Counter = ({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(value);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-8 glass-effect relative overflow-hidden group hover:scale-[1.03] transition-all duration-500 rounded-3xl bg-white/45 backdrop-blur-md border border-stone-200/50 shadow-md">
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-emerald-500 to-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      <p className="text-5xl md:text-6xl font-black gradient-text mb-2 tracking-tight">
        {count}
        {suffix}
      </p>
      <p className="text-sm md:text-base text-stone-700 font-bold tracking-wide uppercase">{label}</p>
    </div>
  );
};

export const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setIsAutoplay(false);
  };

  const goToPrevious = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setIsAutoplay(false);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoplay(false);
  };

  return (
    <Section className="relative pt-10 lg:pt-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blur-circle absolute top-1/4 -left-40 w-96 h-96 bg-yellow-400/10"></div>
        <div className="blur-circle absolute -bottom-40 -right-40 w-96 h-96 bg-orange-400/10"></div>
      </div>

      <FadeIn direction="up">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Real Stories of <span className="gradient-text">Recovery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from those whose lives have been transformed through our
            programs and compassionate care.
          </p>
        </div>
      </FadeIn>

      {/* Testimonial Slider */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Card className="glass-effect p-8 md:p-12 mx-auto max-w-3xl relative">
              <div className="absolute top-6 right-8 md:top-8 md:right-12 opacity-80">
                <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#1a73e8] text-white flex-shrink-0 flex items-center justify-center shadow-md">
                  <span className="text-4xl md:text-5xl font-medium">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <div className="pt-2">
                  <div className="text-xl md:text-2xl font-bold mb-1 text-stone-800">
                    {testimonials[current].name}
                  </div>
                  <p className="text-green-600 font-semibold mb-2">
                    {testimonials[current].role}
                  </p>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed italic">
                "{testimonials[current].content}"
              </p>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={goToPrevious}
            onMouseEnter={() => setIsAutoplay(false)}
            className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-green-600 w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            onMouseEnter={() => setIsAutoplay(false)}
            className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Counter value={50} suffix="+" label="Lives Transformed" />
        <Counter value={98} suffix="%" label="Success Rate" />
        <Counter value={100} suffix="+" label="Happy Families" />
      </div>
    </Section>
  );
};
