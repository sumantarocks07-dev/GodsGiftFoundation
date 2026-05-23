import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/Animations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | God's Gift Foundation",
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-16">
      <Section>
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Privacy Policy</h1>

        <Card className="prose prose-lg max-w-none p-8">
          <h2 className="text-3xl font-bold mt-6 mb-4">
            Privacy Policy - God's Gift Foundation
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            This Privacy Policy describes how God's Gift Foundation ("we," "us," "our," or
            "Company") collects, uses, and shares information about you when you visit our
            website, contact us, or use our services.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h3>
          <p className="text-gray-700 mb-4">
            We collect information you provide directly, such as when you fill out contact
            forms, subscribe to our newsletter, or request our services. This includes your
            name, email address, phone number, and any other information you choose to provide.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>To respond to your inquiries and provide requested services</li>
            <li>To send you promotional emails and newsletters</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and prevent fraud</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Data Security</h3>
          <p className="text-gray-700 mb-6">
            We implement appropriate technical and organizational measures to protect your
            personal information against unauthorized access, disclosure, or modification.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Your Rights</h3>
          <p className="text-gray-700 mb-4">
            You have the right to access, correct, or delete your personal information. To
            exercise these rights, please contact us at info@godsgiftfoundation.org.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Contact Us</h3>
          <p className="text-gray-700">
            If you have questions about this Privacy Policy, please contact us at:
            <br />
            Email: info@godsgiftfoundation.org
            <br />
            Phone: +91 82402 32359 (Sumanta Das)
          </p>
        </Card>
      </Section>
    </main>
  );
}
