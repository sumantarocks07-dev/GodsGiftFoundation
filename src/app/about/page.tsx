import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { Button } from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | God's Gift Foundation",
  description:
    "Learn about God's Gift Foundation's mission, vision, history, and team dedicated to rehabilitation and community healing.",
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-16 relative">
      {/* Page Background Image */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <Image
          src="/images/Freedom_of_goodwill.png"
          alt="Background"
          fill
          className="object-cover opacity-[0.12] mix-blend-multiply"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/40 via-white/40 to-stone-100/60" />
      </div>

      {/* Hero Section */}
      <Section className="mb-0">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="gradient-text">God's Gift Foundation</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              A journey of compassion, healing, and community transformation
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn direction="left">
            <Card className="p-8">
              <h2 className="text-4xl font-bold mb-4 gradient-text">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                To provide dignified, comprehensive rehabilitation and wellness
                services that empower individuals to reclaim their lives and
                fulfill their potential through professional care and community support.
              </p>
              <p className="text-gray-600">
                We believe in the transformative power of compassion combined with
                professional expertise and holistic healing approaches.
              </p>
            </Card>
          </FadeIn>

          <FadeIn direction="right">
            <Card className="p-8">
              <h2 className="text-4xl font-bold mb-4 gradient-text">
                Our Vision
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-9">
                To be recognized as a premier rehabilitation and old age care
                institution, fostering hope, healing, and dignity for all members
                of our community.
              </p>
              <p className="text-gray-600">
                We envision a world where everyone has access to quality care
                and the opportunity to rebuild their lives with confidence.
              </p>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* History */}
      <Section>
        <FadeIn direction="up">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center mb-8">
              Founded with a vision to transform lives, God's Gift Foundation has
              been serving the community for over two decades. What started as a
              small rehabilitation center has grown into a comprehensive care
              institution providing detoxification, rehabilitation, meditation
              therapy, yoga sessions, and compassionate old age care.
            </p>
            <div className="border-t-2 border-green-200 pt-8 mt-8">
              <p className="text-center text-gray-600 italic">
                "Through dedication, compassion, and professional excellence,
                we've helped thousands reclaim their lives and dignity."
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* NA Core Principles Section */}
      <Section className="relative overflow-hidden bg-stone-50/50 pt-16 pb-20 mt-12 rounded-[40px] border border-stone-200/50 shadow-sm mx-4 md:mx-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/20 blur-[100px] rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20 px-6">
          {/* Logo Side */}
          <FadeIn direction="right" className="w-full md:w-5/12 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-[0_20px_40px_rgba(16,185,129,0.25)]">
              <div className="absolute inset-0 bg-emerald-400 blur-[80px] opacity-20 rounded-full mix-blend-multiply animate-pulse"></div>
              <Image
                src="/images/na_logo.png"
                alt="Narcotics Anonymous Logo"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain hover:scale-[1.03] transition-transform duration-700 ease-out z-10"
              />
            </div>
          </FadeIn>

          {/* List Side */}
          <FadeIn direction="left" className="w-full md:w-7/12">
            <div className="mb-10 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[12px] font-black tracking-widest uppercase rounded-full bg-white border border-stone-200 text-emerald-700 shadow-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Core Principles
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-stone-800 tracking-tight">
                Narcotics <span className="gradient-text">Anonymous</span>
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                We strongly believe in the power of the NA fellowship and actively integrate these life-saving principles into our daily recovery programs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                "12 Steps & 12 Traditions",
                "Just for Today",
                "Serenity Prayer",
                "Keep Coming Back",
                "Together We Can",
                "This to self us",
              ].map((principle, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-[20px] bg-white p-5 border border-stone-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.12)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-400 to-green-600 transform origin-top scale-y-40 group-hover:scale-y-100 transition-transform duration-300 ease-out"></div>
                  <div className="flex items-center gap-4 pl-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50/80 flex items-center justify-center text-emerald-600 font-extrabold shadow-inner border border-emerald-100/50 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                      {idx + 1}
                    </div>
                    <p className="font-bold text-stone-700 text-[1.05rem] group-hover:text-emerald-700 transition-colors duration-300 leading-snug">
                      {principle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <h2 className="text-4xl font-bold text-center mb-12">Founders</h2>
        <StaggerContainer staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              {
                role: "Founder & Director",
                name: "Sumanta Das",
                image: "/images/sumanta-das.png",
              },
              {
                role: "Founder & Director",
                name: "Puja Das",
                image: "/images/puja-das.png",
              },
            ].map((member) => (
              <StaggerItem key={member.name}>
                <Card className="text-center p-8 md:p-10">
                  <div className="relative w-full max-w-[340px] aspect-[4/5] mx-auto mb-8 overflow-hidden rounded-3xl border border-stone-200 shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      loading={member.name === "Sumanta Das" ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 320px, 340px"
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                  <p className="text-green-600 text-xl font-semibold mb-3">
                    {member.role}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </Section>

      {/* Call to Action */}
      <Section className="text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with our team to learn more about our services and how we can
          support your healing journey.
        </p>
        <Link href="/contact#call-us">
          <Button size="lg" variant="primary">
            Contact Us Today
          </Button>
        </Link>
      </Section>
    </main>
  );
}
