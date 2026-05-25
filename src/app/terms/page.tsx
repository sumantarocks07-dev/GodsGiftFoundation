import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | God's Gift Foundation",
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-16">
      <Section>
        <h1 className="text-5xl md:text-7xl font-bold mb-8">Terms of Service</h1>

        <Card className="prose prose-lg max-w-none p-8">
          <h2 className="text-3xl font-bold mt-6 mb-4">
            Terms and Conditions - God's Gift Foundation
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to God's Gift Foundation. These terms and conditions outline the rules
            and regulations for the use of our website and services.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Use License</h3>
          <p className="text-gray-700 mb-6">
            Unless otherwise stated, God's Gift Foundation and its licensors own the
            intellectual property rights for all material on this website. All intellectual
            property rights are reserved. You may view and print pages from the website for
            personal use, subject to restrictions set in these terms and conditions.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Restrictions</h3>
          <p className="text-gray-700 mb-4">You are restricted from:</p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Publishing material from the website without proper attribution</li>
            <li>Selling, renting, or sub-licensing website material</li>
            <li>Reproducing, duplicating, or copying material for commercial purposes</li>
            <li>Attempting to gain unauthorized access to restricted portions</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Disclaimers</h3>
          <p className="text-gray-700 mb-6">
            The information on this website is provided "as is" without any representations
            or warranties, express or implied. God's Gift Foundation makes no representations
            or warranties regarding this website or the information contained.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Limitations of Liability</h3>
          <p className="text-gray-700 mb-6">
            In no event shall God's Gift Foundation or its suppliers be liable for damages
            (including, without limitation, damages for loss of data or profit, or due to
            business interruption) arising out of the use of the website.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. Modifications</h3>
          <p className="text-gray-700 mb-6">
            God's Gift Foundation may revise these terms and conditions without notice.
            By using this website, you are agreeing to be bound by the then current version
            of these terms and conditions.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">6. Governing Law</h3>
          <p className="text-gray-700 mb-6">
            These terms and conditions are governed by and construed in accordance with the
            laws of India, and you irrevocably submit to the exclusive jurisdiction of the
            courts located in Kolkata, West Bengal.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Contact Us</h3>
          <p className="text-gray-700">
            If you have any questions about these Terms of Service, please contact us at:
            <br />
            Email: godsgiftfoundation2021@gmail.com
            <br />
            Phone: +91 82402 32359 (Sumanta Das)
          </p>
        </Card>
      </Section>
    </main>
  );
}
