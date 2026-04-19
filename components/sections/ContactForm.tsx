"use client";

import { useState } from "react";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    eventType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form Payload:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="bg-surface-container py-20 md:py-32 px-6 flex items-center justify-center text-center">
        <div className="max-w-2xl flex flex-col gap-8 items-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center ghost-border shadow-[0_0_30px_rgba(233,194,85,0.15)] mb-2">
            <span className="text-primary text-4xl">✓</span>
          </div>
          <h2 className="headline-lg text-primary">Message Received</h2>
          <p className="body-lg text-on-surface-variant font-light max-w-lg mb-4">
            Thanks for reaching out. Someone from our team will get back to you within 24 hours.
          </p>
          <Button variant="secondary" onClick={() => setIsSubmitted(false)}>
            Send Another Message
          </Button>
        </div>
      </section>
    );
  }

  const inputClasses = "w-full bg-transparent border-b border-outline-variant/40 py-3 min-h-[44px] text-on-surface body-md rounded-none focus:outline-none focus:border-b-2 focus:border-primary focus:shadow-[0_4px_15px_-3px_rgba(233,194,85,0.15)] transition-all duration-300 placeholder:text-on-surface-variant/60";

  return (
    <section className="bg-surface-container py-20 md:py-32 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 flex flex-col gap-16 relative z-10">
        <div className="flex flex-col gap-4">
          <span className="label-sm text-primary tracking-widest uppercase">Inquiries</span>
          <h2 className="display-sm text-on-surface">Start the conversation.</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <InputField
              label="Full Name"
              id="fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              value={formData.fullName}
              onChange={handleChange}
            />
            <InputField
              label="Email"
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="flex flex-col gap-2 w-full relative">
            <label htmlFor="eventType" className="label-sm text-on-surface tracking-widest uppercase">
              What do you need?
            </label>
            <select
              id="eventType"
              name="eventType"
              required
              aria-required="true"
              className={`${inputClasses} appearance-none cursor-pointer`}
              value={formData.eventType}
              onChange={handleChange}
            >
              <option value="" disabled className="bg-surface-container text-on-surface-variant">Select a service area</option>
              <option value="TANGHAL - Live Events" className="bg-surface-container text-on-surface">Live Events & Entertainment</option>
              <option value="LIKHA - Video Production" className="bg-surface-container text-on-surface">Video & Multimedia Production</option>
              <option value="MERKATO - Marketing" className="bg-surface-container text-on-surface">Experiential Marketing</option>
              <option value="TIPON - Events" className="bg-surface-container text-on-surface">Events & Activations</option>
              <option value="DALOY - Tech" className="bg-surface-container text-on-surface">Tech & Digital Solutions</option>
              <option value="Other" className="bg-surface-container text-on-surface">Other / General Inquiry</option>
            </select>
            {/* Custom dropdown caret */}
            <div className="absolute right-0 bottom-4 pointer-events-none text-primary" aria-hidden="true">
              ▼
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="message" className="label-sm text-on-surface tracking-widest uppercase">
              Tell us more
            </label>
            <textarea
              id="message"
              name="message"
              required
              aria-required="true"
              rows={5}
              placeholder="What are you planning? Include dates, scale, and any specific requirements..."
              className={`${inputClasses} resize-none min-h-[120px]`}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="pt-6 flex justify-end">
            <Button variant="primary" size="lg" type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
