"use client";

import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/utils/seo";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#020b2d] text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-emerald-500/20 blur-3xl rounded-full" />

        <div className="stars" />
        <div className="stars2" />
        <div className="stars3" />
      </div>

      {/* Top Animated Waves */}
      <div className="absolute top-0 left-0 w-full z-[1] overflow-hidden pointer-events-none line-height-0 h-[70px] md:h-[120px]">
        {/* Back Wave (Stationary) */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-30"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 100 Q 360 40 720 100 T 1440 100 L 1440 0 L 0 0 Z"
            fill="#ffffff"
          />
        </svg>

        {/* Front Wave (Moving Solid) */}
        <div className="absolute top-0 left-0 w-[200%] h-full">
          <motion.svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 2880 120"
            preserveAspectRatio="none"
            animate={{ x: [0, "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 12 }}
          >
            <path
              d="M 0 70 Q 360 10 720 70 T 1440 70 T 2160 70 T 2880 70 L 2880 0 L 0 0 Z"
              fill="#ffffff"
            />
          </motion.svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* LEFT SIDE */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] flex items-center justify-center shrink-0">
                <Image
                  src="/image/logo.png"
                  alt="God's Gift Foundation"
                  width={76}
                  height={76}
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-4xl font-extrabold leading-tight">
                  God&apos;s Gift Foundation
                </h2>

                <p className="text-green-400 text-sm font-medium mt-2 tracking-wide">
                  Compassion | Recovery | Wellness
                </p>
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <div className="mt-9 space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <MapPin className="text-green-400" size={20} />
                </div>

                <div>
                  <p className="text-gray-200 ">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <Phone className="text-green-400" size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>

                  <div className="space-y-1.5">
                    <a
                      href="tel:+918240232359"
                      className="text-gray-200 hover:text-green-400 transition-colors block text-sm"
                    >
                      Sumanta Das: +91 82402 32359
                    </a>
                    <a
                      href="tel:+916289579910"
                      className="text-gray-200 hover:text-green-400 transition-colors block text-sm"
                    >
                      Puja Das: +91 62895 79910
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <Mail className="text-green-400" size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>

                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.contact.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-green-400 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-5 mt-10">
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#1877F2] transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
              >
                <FaFacebookF
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>

              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:bg-pink-500 transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
              >
                <FaInstagram
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>

              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:bg-green-500 transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
              >
                <FaWhatsapp
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:pl-20">
            <h3 className="text-3xl font-bold mb-10 uppercase tracking-wide">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-6 mb-12">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="group flex items-center gap-3 text-gray-300 hover:text-green-400 transition-all duration-300 text-lg"
                >
                  <ChevronRight
                    size={20}
                    className="group-hover:translate-x-1 transition-all"
                  />

                  {item}
                </Link>
              ))}
            </div>

            {/* EMERGENCY BLOCK */}
            <div className="rounded-xl bg-red-500/10 border border-red-500/30 p-5 max-w-sm">
              <p className="text-sm font-bold text-red-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                24/7 Emergency Help
              </p>
              <a
                href="tel:+919051396351"
                className="text-white text-3xl font-bold hover:text-red-300 transition-colors block"
              >
                +91 90513 96351
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-gray-400 text-sm text-center md:text-left">
            Copyright {currentYear} God&apos;s Gift Foundation. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-green-400 transition-colors text-sm"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-gray-400 hover:text-green-400 transition-colors text-sm"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Stars Animation */}
      <style jsx>{`
        .stars,
        .stars2,
        .stars3 {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          animation: moveStars linear infinite;
        }

        .stars {
          background-image:
            radial-gradient(
              2px 2px at 20px 30px,
              rgba(255, 255, 255, 0.8),
              transparent
            ),
            radial-gradient(
              2px 2px at 40px 70px,
              rgba(0, 255, 170, 0.7),
              transparent
            );

          background-size: 200px 200px;
          animation-duration: 180s;
        }

        .stars2 {
          background-image:
            radial-gradient(
              1px 1px at 50px 50px,
              rgba(255, 255, 255, 0.5),
              transparent
            );

          background-size: 300px 300px;
          animation-duration: 250s;
          opacity: 0.7;
        }

        .stars3 {
          background-image:
            radial-gradient(
              2px 2px at 100px 100px,
              rgba(0, 255, 170, 0.4),
              transparent
            );

          background-size: 400px 400px;
          animation-duration: 350s;
          opacity: 0.5;
        }

        @keyframes moveStars {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(-2000px);
          }
        }
      `}</style>
    </footer>
  );
};
