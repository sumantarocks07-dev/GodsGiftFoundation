import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/Animations";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | God's Gift Foundation",
  description:
    "Get in touch with God's Gift Foundation. Call, email, or visit us for rehabilitation and wellness services.",
};

export default function ContactPage() {
  return (
    <main className="pt-28 pb-10 md:pt-36">
      <Section className="mb-8 text-center">
        <FadeIn direction="up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re here to support your journey. Contact us anytime.
          </p>
        </FadeIn>
      </Section>

      <Section className="relative overflow-hidden bg-[#020817]">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />

        {/* Animated Stars */}
        <div className="absolute inset-0 overflow-hidden">
          <span className="absolute left-[10%] top-[15%] h-1 w-1 animate-pulse rounded-full bg-white" />
          <span className="absolute left-[25%] top-[70%] h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400" />
          <span className="absolute left-[50%] top-[20%] h-1 w-1 animate-pulse rounded-full bg-white" />
          <span className="absolute left-[70%] top-[40%] h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
          <span className="absolute left-[85%] top-[25%] h-1 w-1 animate-ping rounded-full bg-white" />
          <span className="absolute left-[90%] top-[80%] h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
          <span className="absolute left-[35%] top-[45%] h-1 w-1 animate-pulse rounded-full bg-white" />
          <span className="absolute left-[15%] top-[90%] h-1 w-1 animate-ping rounded-full bg-cyan-300" />
        </div>

        <div className="relative z-10">
          {/* Top Contact Boxes */}
          <div id="call-us" className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            <FadeIn direction="left">
              <Card className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_0_30px_rgba(0,255,170,0.05)] backdrop-blur-xl">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-green-500 to-emerald-500">
                  <Phone className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">Call Us</h3>

                <div className="space-y-1">
                  <a
                    href="tel:+918240232359"
                    className="block text-base font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    Sumanta Das: +91 82402 32359
                  </a>
                  <a
                    href="tel:+916289579910"
                    className="block text-base font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    Puja Das: +91 62895 79910
                  </a>
                </div>

                <p className="mt-2 text-gray-400">Available 24/7</p>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <Card className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_0_30px_rgba(0,255,170,0.05)] backdrop-blur-xl">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500">
                  <Mail className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">Email Us</h3>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=godsgiftfoundation2021@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-lg font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  godsgiftfoundation2021@gmail.com
                </a>

                <p className="mt-2 text-gray-400">Response within 24 hours</p>
              </Card>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <Card className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_0_30px_rgba(0,255,170,0.05)] backdrop-blur-xl">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-pink-500">
                  <MapPin className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">
                  Visit Us
                </h3>

                <p className="font-semibold text-gray-300">
                  19 V Rd, near Apanjan club, Dasnagar, Howrah, West Bengal 711105
                </p>
                <p className="mt-2 text-gray-400">By appointment preferred</p>
              </Card>
            </FadeIn>
          </div>

          {/* Form + Support */}
          <div
            id="contact-form"
            className="grid grid-cols-1 gap-12 lg:grid-cols-2"
          >
            <FadeIn direction="left">
              <Card className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_0_40px_rgba(0,255,170,0.06)] backdrop-blur-xl">
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Send us a Message
                </h2>

                <ContactForm />
              </Card>
            </FadeIn>

            <FadeIn direction="right">
              <Card className="h-full rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_0_40px_rgba(0,255,170,0.06)] backdrop-blur-xl">
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Get Support
                </h2>

                <div className="space-y-8">
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-emerald-400">
                      Emergency Support
                    </h4>

                    <p className="mb-3 text-gray-300">
                      Need immediate assistance? Call our emergency line available
                      24/7.
                    </p>

                    <div className="space-y-1">
                      <a
                        href="tel:+918240232359"
                        className="block text-xl font-bold text-emerald-400"
                      >
                        Sumanta Das: +91 82402 32359
                      </a>
                      <a
                        href="tel:+916289579910"
                        className="block text-xl font-bold text-emerald-400"
                      >
                        Puja Das: +91 62895 79910
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <h4 className="mb-2 text-lg font-bold text-emerald-400">
                      WhatsApp Support
                    </h4>

                    <p className="mb-3 text-gray-300">
                      Connect with us instantly via WhatsApp for quick responses.
                    </p>

                    <a
                      href="https://wa.me/918240232359"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>

                  <div className="border-t border-white/10 pt-8">
                    <h4 className="mb-2 text-lg font-bold text-emerald-400">
                      Office Hours
                    </h4>

                    <p className="text-gray-300">
                      <strong>Monday - Sunday:</strong> 9:00 AM - 8:00 PM
                    </p>

                    <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-5">
                      <p className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-red-400">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
                        </span>
                        24/7 Emergency Help
                      </p>
                      <a
                        href="tel:+919051396351"
                        className="block text-3xl font-bold text-white transition-colors hover:text-red-300"
                      >
                        +91 90513 96351
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section>
        <FadeIn direction="up">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us Here</h2>
          <Card className="group relative overflow-hidden rounded-[32px] border border-gray-100 bg-white p-0 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <div className="h-[400px] w-full md:h-[500px]">
              <iframe
                src="https://maps.google.com/maps?q=God's+Gift+Foundation,+19+V+Rd,+near+Apanjan+club,+Dasnagar,+Howrah,+West+Bengal+711105&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="God's Gift Foundation Location"
                className="h-full w-full saturate-[0.8] transition-all duration-700 group-hover:saturate-100"
              ></iframe>
            </div>

            <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8">
              <a
                href="https://maps.app.goo.gl/B5fGBbu3xddkf6s48?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-emerald-600"
              >
                <MapPin size={20} />
                Open in Google Maps
              </a>
            </div>
          </Card>
        </FadeIn>
      </Section>
    </main>
  );
}
