"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/918240232359?text=Hello%20God's%20Gift%20Foundation%20!%20I%20need%20help"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </Link>
  );
};
