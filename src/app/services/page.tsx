import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/Animations";
import { Brain, HeartPulse, Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | God's Gift Foundation",
  description:
    "Comprehensive rehabilitation, detoxification, meditation therapy, yoga, old age care, and counseling services.",
};

const careApproach = [
  {
    title: "Medical Care",
    description:
      "Professional medical supervision, medication management, and 24/7 health monitoring for optimal patient care.",
    icon: HeartPulse,
    direction: "left" as const,
    delay: 0,
  },
  {
    title: "Mental Health",
    description:
      "Individual and group therapy sessions, counseling, and mental wellness programs with expert professionals.",
    icon: Brain,
    direction: "up" as const,
    delay: 0.2,
  },
  {
    title: "Holistic Wellness",
    description:
      "Meditation, yoga, spiritual guidance, and traditional healing practices for complete mind-body wellness.",
    icon: Leaf,
    direction: "right" as const,
    delay: 0.4,
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-16 bg-stone-50">
      {/* Hero */}
      <Section className="relative mb-0 overflow-hidden rounded-[40px] min-h-[430px]">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <Image
            src="/images/pickup-team.jpeg"
            alt="God's Gift Foundation team"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </Section>

      <Section className="pb-0 pt-10 text-center md:pt-14">
        <FadeIn direction="up">
          <h1 className="mb-6 text-5xl font-bold text-stone-950 md:text-7xl">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="mx-auto max-w-3xl text-2xl font-medium text-slate-800">
            Comprehensive programs designed for holistic healing and recovery
          </p>
        </FadeIn>
      </Section>

      {/* Services Grid */}
      <Section className="mt-8 md:mt-1">
        <div className="rounded-[38px] border border-white/55 bg-white/38 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-md md:p-8">
          <StaggerContainer staggerDelay={0.15}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <StaggerItem key={service.id}>
                    <Card className="group overflow-hidden border border-white/75 bg-white/92 shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,23,42,0.18)]">
                      <div
                        className={`mb-6 flex h-32 items-center justify-center bg-linear-to-br ${service.color} transition-transform group-hover:scale-[1.02]`}
                      >
                        <Icon size={64} className="text-white" />
                      </div>
                      <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                      <p className="mb-6 text-gray-600">{service.description}</p>
                      <div className="mb-6 space-y-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <span
                              aria-hidden="true"
                              className="font-bold text-green-500"
                            >
                              ✓
                            </span>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button className="font-semibold text-green-600 hover:text-green-700">
                        Learn More →
                      </button>
                    </Card>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </Section>

      {/* Service Details */}
      <Section>
        <div className="rounded-[38px] border border-stone-200/70 bg-white/88 p-8 shadow-[0_28px_90px_rgba(15,23,42,0.14)] backdrop-blur-xl md:p-10">
          <h2 className="mb-12 text-center text-4xl font-bold text-stone-900">
            Comprehensive Care Approach
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {careApproach.map((item) => (
              <FadeIn
                key={item.title}
                direction={item.direction}
                delay={item.delay}
              >
                <Card className="border border-stone-200 bg-white text-center shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 shadow-inner">
                    <item.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="rounded-[34px] border border-white/60 bg-white/62 px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-md">
          <h2 className="mb-6 text-4xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-700">
            Contact our team today to discuss which service best fits your needs.
          </p>
          <Link href="/contact#contact-form">
            <Button size="lg" variant="primary">
              Get Started
            </Button>
          </Link>
        </div>
      </Section>
    </main>
  );
}
