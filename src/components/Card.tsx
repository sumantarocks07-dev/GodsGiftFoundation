"use client";

import React from "react";
import { cn } from "@/lib/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  glass?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, glass = false, ...props }, ref) => (
    <div
      className={cn(
        "rounded-3xl p-6 md:p-8 transition-all duration-500",
        glass
          ? "glass-effect"
          : "bg-white border border-gray-100 shadow-lg",
        hover && "hover:shadow-2xl hover:scale-105",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);

Card.displayName = "Card";
