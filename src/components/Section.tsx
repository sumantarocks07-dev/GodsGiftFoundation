"use client";

import React from "react";
import { cn } from "@/lib/cn";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => (
    <section
      className={cn("section-padding container-max relative z-10", className)}
      ref={ref}
      {...props}
    >
      {children}
    </section>
  )
);

Section.displayName = "Section";
