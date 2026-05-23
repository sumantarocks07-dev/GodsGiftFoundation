import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { MeditationSection } from "@/sections/MeditationSection";
import { YogaSection } from "@/sections/YogaSection";
import { MeetingSection } from "@/sections/MeetingSection";
import { InventorySection } from "@/sections/InventorySection";
import { GamingSection } from "@/sections/GamingSection";
import { CelebrationSection } from "@/sections/CelebrationSection";
import { AwarenessSection } from "@/sections/AwarenessSection";
import { TestimonialSection } from "@/sections/TestimonialSection";
import { FAQSection } from "@/sections/FAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detox & Rehabilitation Centre in Howrah | God's Gift Foundation",
  description:
    "Get compassionate detoxification, addiction rehabilitation, meditation therapy, yoga wellness, and old age care at God's Gift Foundation in Howrah, West Bengal.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MeditationSection />
      <YogaSection />
      <MeetingSection />
      <InventorySection />
      <GamingSection />
      <CelebrationSection />
      <AwarenessSection />
      <TestimonialSection />
      <FAQSection />
    </>
  );
}
