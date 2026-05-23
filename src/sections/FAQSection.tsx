"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { faqs } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="relative pt-10 lg:pt-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blur-circle absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10"></div>
      </div>

      <FadeIn direction="up">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our programs and services.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-4xl mx-auto">
        <StaggerContainer staggerDelay={0.05}>
          {faqs.map((faq, index) => (
            <StaggerItem key={faq.id}>
              <motion.div className="mb-4" layout>
                <Card
                  className={`p-6 cursor-pointer border transition-all duration-300 ${
                    openIndex === index
                      ? "bg-gradient-to-r from-green-50/70 to-emerald-50/70 border-green-200 shadow-md"
                      : "hover:shadow-lg hover:border-gray-200 border-gray-100 bg-white"
                  }`}
                  hover={false}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div
                          className={`text-lg font-bold transition-colors ${
                            openIndex === index
                              ? "text-green-700"
                              : "text-gray-800"
                          }`}
                        >
                          {faq.question}
                        </div>
                      </div>
                      <motion.div
                        animate={{
                          rotate: openIndex === index ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 mt-1"
                      >
                        <ChevronDown
                          className={`transition-colors ${
                            openIndex === index
                              ? "text-green-600"
                              : "text-gray-400"
                          }`}
                        />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-green-100">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-16 text-center"
      >
        <p className="text-lg text-gray-600 mb-6">
          Have more questions? We're here to help!
        </p>
        <a
          href="tel:8240232359"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold hover:shadow-lg transition-all duration-300"
        >
          Contact Our Team
        </a>
      </motion.div>
    </Section>
  );
};
