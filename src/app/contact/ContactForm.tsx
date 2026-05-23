"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
 
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct Gmail compose URL
    const subject = encodeURIComponent(`New Inquiry regarding ${formData.service || 'Services'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`);
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=godsgiftfoundation2021@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
    
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6 text-center">
        <p className="text-2xl font-bold text-green-700 mb-2">Thank You!</p>
        <p className="text-gray-700">
          Your message has been sent successfully. We&apos;ll respond soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-green-500 focus:bg-white/10 focus:outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-green-500 focus:bg-white/10 focus:outline-none transition-colors"
            placeholder="Your email"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-green-500 focus:bg-white/10 focus:outline-none transition-colors"
            placeholder="Your phone"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">
          Service Interested In
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-green-500 focus:bg-white/10 focus:outline-none transition-colors"
        >
          <option value="" className="bg-gray-900 text-white">Select a service</option>
          <option value="Old age care" className="bg-gray-900 text-white">Old age care</option>
          <option value="Detoxification" className="bg-gray-900 text-white">Detoxification</option>
          <option value="Rehabilitation" className="bg-gray-900 text-white">Rehabilitation</option>
          <option value="Psychological problem" className="bg-gray-900 text-white">Psychological problem</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border-2 border-white/10 bg-white/5 text-white placeholder-gray-500 focus:border-green-500 focus:bg-white/10 focus:outline-none transition-colors resize-none"
          placeholder="Tell us more about your inquiry..."
        />
      </div>

      <Button variant="primary" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
