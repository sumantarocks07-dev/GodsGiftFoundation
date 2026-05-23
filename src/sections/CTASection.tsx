"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/Animations";
import { Heart } from "lucide-react";

export const CTASection = () => {
  return (
    <Section className="relative !pt-0 pb-20 md:pb-28">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="blur-circle absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-400 to-emerald-400 opacity-20"
          animate={{ x: [0, 30, -30, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="blur-circle absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-400 to-orange-400 opacity-20"
          animate={{ x: [0, -30, 30, 0], y: [0, 40, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
        ></motion.div>
      </div>

      <FadeIn direction="up">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <Heart
              size={64}
              className="text-red-500 fill-red-500 mx-auto"
            />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Together We{" "}
            <span className="gradient-text">Heal Lives</span>
          </h2>

          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Join us in our mission to transform lives through compassionate care,
            professional support, and community healing. Every contribution makes
            a difference.
          </p>



          {/* Trust badges */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              { emoji: "✅", text: "Verified & Certified" },
              { emoji: "🏥", text: "Professional Staff" },
              { emoji: "💚", text: "Compassionate Care" },
            ].map((badge) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-4xl">{badge.emoji}</span>
                <p className="text-sm font-semibold text-gray-700">
                  {badge.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Emergency contact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200"
          >
            <p className="text-red-700 font-semibold mb-2">
              Need Immediate Support?
            </p>
            <p className="text-2xl font-bold text-red-900 mb-4">
              Call: +91 90513 96351
            </p>
            <p className="text-red-600">
              Available 24/7 for emergency assistance
            </p>
          </motion.div>
        </div>
      </FadeIn>
    </Section>
  );
};
