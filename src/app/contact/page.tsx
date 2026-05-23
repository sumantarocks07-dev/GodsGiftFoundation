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
    <main className="pt-28 md:pt-36 pb-10">
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
    {/* TOP CONTACT BOXES */}
    <div id="call-us" className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
      <FadeIn direction="left">
        <Card className="text-center p-6 border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(0,255,170,0.05)]">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
            <Phone className="text-white" size={32} />
          </div>

          <h3 className="text-2xl font-bold mb-3 text-white">
            Call Us
          </h3>

          <div className="space-y-1">
            <a
              href="tel:+918240232359"
              className="text-emerald-400 hover:text-emerald-300 text-base font-semibold block"
            >
              Sumanta Das: +91 82402 32359
            </a>
            <a
              href="tel:+916289579910"
              className="text-emerald-400 hover:text-emerald-300 text-base font-semibold block"
            >
              Puja Das: +91 62895 79910
            </a>
          </div>

          <p className="text-gray-400 mt-2">
            Available 24/7
          </p>
        </Card>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <Card className="text-center p-8 border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(0,255,170,0.05)]">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-6">
            <Mail className="text-white" size={32} />
          </div>

          <h3 className="text-2xl font-bold mb-3 text-white">
            Email Us
          </h3>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=godsgiftfoundation2021@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 text-lg font-semibold break-all"
          >
            godsgiftfoundation2021@gmail.com
          </a>

          <p className="text-gray-400 mt-2">
            Response within 24 hours
          </p>
        </Card>
      </FadeIn>

      <FadeIn direction="right" delay={0.4}>
        <Card className="text-center p-8 border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(0,255,170,0.05)]">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
            <MapPin className="text-white" size={32} />
          </div>

          <h3 className="text-2xl font-bold mb-3 text-white">
            Visit Us
          </h3>

          <p className="text-gray-300 font-semibold">
            Kolkata, India
          </p>

          <p className="text-gray-400 mt-2">
            By appointment preferred
          </p>
        </Card>
      </FadeIn>
    </div>

    {/* FORM + SUPPORT */}
    <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <FadeIn direction="left">
        <Card className="border border-white/10 bg-white/5 backdrop-blur-xl p-8 rounded-[32px] shadow-[0_0_40px_rgba(0,255,170,0.06)]">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Send us a Message
          </h2>

          <ContactForm />
        </Card>
      </FadeIn>

      <FadeIn direction="right">
        <Card className="border border-white/10 bg-white/5 backdrop-blur-xl p-8 rounded-[32px] h-full shadow-[0_0_40px_rgba(0,255,170,0.06)]">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Get Support
          </h2>

          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-lg mb-2 text-emerald-400">
                Emergency Support
              </h4>

              <p className="text-gray-300 mb-3">
                Need immediate assistance? Call our emergency line available
                24/7.
              </p>

              <div className="space-y-1">
                <a
                  href="tel:+918240232359"
                  className="text-xl font-bold text-emerald-400 block"
                >
                  Sumanta Das: +91 82402 32359
                </a>
                <a
                  href="tel:+916289579910"
                  className="text-xl font-bold text-emerald-400 block"
                >
                  Puja Das: +91 62895 79910
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h4 className="font-bold text-lg mb-2 text-emerald-400">
                WhatsApp Support
              </h4>

              <p className="text-gray-300 mb-3">
                Connect with us instantly via WhatsApp for quick responses.
              </p>

              <a
                href="https://wa.me/918240232359"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:scale-105 transition-all duration-300"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h4 className="font-bold text-lg mb-2 text-emerald-400">
                Office Hours
              </h4>

              <p className="text-gray-300">
                <strong>Monday - Sunday:</strong> 9:00 AM - 8:00 PM
              </p>

              <div className="rounded-xl bg-red-500/10 border border-red-500/30 p-5 mt-6">
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
        </Card>
      </FadeIn>
    </div>
  </div>
</Section>
      <Section>
        <FadeIn direction="up">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us Here</h2>
          <Card className="overflow-hidden p-0 rounded-[32px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] bg-white relative group">
            <div className="w-full h-[400px] md:h-[500px]">
              <iframe
                src="https://maps.google.com/maps?q=God's+Gift+Foundation,+19+V+Rd,+near+Apanjan+club,+Dasnagar,+Howrah,+West+Bengal+711105&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="God's Gift Foundation Location"
                className="w-full h-full filter saturate-[0.8] group-hover:saturate-100 transition-all duration-700"
              ></iframe>
            </div>
            
            {/* Map Overlay Button */}
            <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8">
              <a
                href="https://maps.app.goo.gl/B5fGBbu3xddkf6s48?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105"
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
