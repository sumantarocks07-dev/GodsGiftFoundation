import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import Link from "next/link";
import { services } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | God's Gift Foundation",
  description:
    "Comprehensive rehabilitation, detoxification, meditation therapy, yoga, old age care, and counseling services.",
};

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-16">
      {/* Hero */}
      <Section className="mb-0 text-center">
        <FadeIn direction="up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed for holistic healing and recovery
          </p>
        </FadeIn>
      </Section>

      {/* Services Grid */}
      <Section>
        <StaggerContainer staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.id}>
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon size={64} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <span className="text-green-500 font-bold">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="text-green-600 hover:text-green-700 font-semibold">
                      Learn More →
                    </button>
                  </Card>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </Section>

      {/* Service Details */}
      <Section>
        <h2 className="text-4xl font-bold text-center mb-12">
          Comprehensive Care Approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn direction="left">
            <Card className="glass-effect text-center p-8">
              <p className="text-5xl mb-4">🏥</p>
              <h3 className="text-2xl font-bold mb-4">Medical Care</h3>
              <p className="text-gray-700">
                Professional medical supervision, medication management, and
                24/7 health monitoring for optimal patient care.
              </p>
            </Card>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <Card className="glass-effect text-center p-8">
              <p className="text-5xl mb-4">🧠</p>
              <h3 className="text-2xl font-bold mb-4">Mental Health</h3>
              <p className="text-gray-700">
                Individual and group therapy sessions, counseling, and mental
                wellness programs with expert professionals.
              </p>
            </Card>
          </FadeIn>
          <FadeIn direction="right" delay={0.4}>
            <Card className="glass-effect text-center p-8">
              <p className="text-5xl mb-4">🌿</p>
              <h3 className="text-2xl font-bold mb-4">Holistic Wellness</h3>
              <p className="text-gray-700">
                Meditation, yoga, spiritual guidance, and traditional healing
                practices for complete mind-body wellness.
              </p>
            </Card>
          </FadeIn>
        </div>
      </Section>



      {/* CTA */}
      <Section className="text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact our team today to discuss which service best fits your needs.
        </p>
        <Link href="/contact#contact-form">
          <Button size="lg" variant="primary">
            Get Started
          </Button>
        </Link>
      </Section>
    </main>
  );
}
