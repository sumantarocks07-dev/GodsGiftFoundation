"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // On inner pages, always use the solid (scrolled) style
  const useSolidStyle = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4 md:px-6 md:pt-4">
      <div className="mx-auto w-full max-w-7xl relative">
        {/* Top Navbar */}
        <nav
          className={`relative z-20 overflow-hidden rounded-[28px] border transition-all duration-500 sm:rounded-full ${
            useSolidStyle
              ? "border-white/60 bg-white/85 text-slate-950 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
              : "border-white/15 bg-white/10 text-white shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-2xl"
          }`}
        >
          <div className="flex min-w-0 items-center justify-between gap-2 px-3 py-2 sm:px-5 md:px-6 md:py-3">
   
        {/* Logo */}
<Link
  href="/"
  onClick={(e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }}
  className="group flex min-w-0 items-center gap-2.5 transition-all duration-300 sm:gap-3"
>
  <div className="flex h-[64px] w-[64px] sm:h-[76px] sm:w-[76px] flex-shrink-0 items-center justify-center transition-all duration-300">
    <Image
      src="/image/logo.png"
      alt="God's Gift Foundation Logo"
      width={76}
      height={76}
      loading="eager"
      className={`h-full w-full object-contain transition-all duration-300 group-hover:scale-[1.05] ${
        useSolidStyle ? "brightness-0 opacity-80" : ""
      }`}
    />
  </div>

  <div className="flex min-w-0 flex-col leading-none">
              <span className="max-w-[58vw] truncate text-[15px] font-bold tracking-tight min-[380px]:text-[17px] sm:max-w-none sm:text-[22px]">
                God's Gift Foundation
              </span>

              <span className="mt-1 max-w-[58vw] truncate text-[10px] font-medium sm:max-w-none sm:text-xs">
                Detox & Rehabilitation Centre 
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className={`relative text-[15px] font-semibold transition-all duration-300 group hover:text-emerald-600 ${isActive ? "text-emerald-600" : "text-inherit"}`}
                >
                  {item.label}

                  {/* Hover/Active Line */}
                  <span className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-300 rounded-full ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              aria-label="Contact us via WhatsApp"
              className="rounded-full border border-emerald-200 bg-emerald-50/65 px-6 py-3 font-semibold text-emerald-700 shadow-[0_10px_24px_rgba(16,185,129,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-100/75 hover:text-emerald-800"
            >
              WhatsApp
            </Link>

            <Link
              href="/contact"
              aria-label="Get professional support from our team"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold shadow-lg shadow-emerald-200 hover:scale-105 hover:shadow-emerald-300 transition-all duration-300"
            >
              Get Support
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[18px] border shadow-[0_8px_26px_rgba(15,23,42,0.16)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.03] lg:hidden ${
              useSolidStyle
                ? " bg-white/70 text-slate-900 hover:bg-emerald-50"
                : " bg-white/15 text-white hover:bg-white/25"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full mt-2 z-10 origin-top"
            >
              <div
                className={`flex flex-col gap-4 rounded-[28px] border p-5 shadow-[0_20px_40px_rgba(0,0,0,0.2)] backdrop-blur-3xl sm:p-6 ${
                  useSolidStyle
                    ? "border-white/60 bg-white/95"
                    : "border-white/20 bg-[#020b2d]/80"
                }`}
              >
                {menuItems.map((item) => {
                  const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`text-lg font-semibold transition-all duration-300 hover:text-emerald-500 px-2 py-1 ${
                        isActive
                          ? "text-emerald-600"
                          : useSolidStyle
                          ? "text-slate-900"
                          : "text-slate-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <div className="flex flex-col gap-3 pt-2 mt-2 border-t border-white/10">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    aria-label="Contact us via WhatsApp"
                    className={`w-full rounded-full border py-3 text-center font-semibold backdrop-blur-xl transition-all duration-300 ${
                      useSolidStyle
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700 hover:border-emerald-300 hover:bg-emerald-100 hover:text-emerald-800"
                        : "border-emerald-300/50 bg-emerald-500/15 text-emerald-100 hover:bg-emerald-500/25"
                    }`}
                  >
                    WhatsApp
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    aria-label="Get professional support from our team"
                    className="w-full py-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-center font-semibold shadow-lg shadow-emerald-200 hover:scale-[1.02] transition-all duration-300"
                  >
                    Get Support
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
