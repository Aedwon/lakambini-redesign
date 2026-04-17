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
          <h2 className="headline-lg text-primary">Intelligence Received</h2>
          <p className="body-lg text-on-surface-variant font-light max-w-lg mb-4">
            Thank you for engaging Lakambini Events. A structural engineer will review your blueprint and be in touch within 24 hours.
          </p>
          <Button variant="secondary" onClick={() => setIsSubmitted(false)}>
            Submit Another Query
          </Button>
        </div>
      </section>
    );
  }

  // Derived to match Phase 2 InputField for Dropdown/Textarea standardization 
  const externalInputClasses = "w-full bg-transparent border-b border-outline-variant/40 py-3 text-on-surface body-md rounded-none focus:outline-none focus:border-b-2 focus:border-primary focus:shadow-[0_4px_15px_-3px_rgba(233,194,85,0.15)] transition-all duration-300 placeholder:text-on-surface-variant/50";

  return (
    <section className="bg-surface-container py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto flex flex-col gap-16 relative z-10">
        <div className="flex flex-col gap-4">
          <span className="label-sm text-primary tracking-widest uppercase">Inquiries</span>
          <h2 className="display-sm text-on-surface">Initiate the blueprint.</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <InputField 
              label="Full Name" 
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Primary Operative"
              value={formData.fullName}
              onChange={handleChange}
            />
            <InputField 
              label="Company Email" 
              id="email"
              name="email"
              type="email"
              required
              placeholder="operative@brand.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="flex flex-col gap-2 w-full relative">
            <label htmlFor="eventType" className="label-sm text-on-surface tracking-widest uppercase">
              Event Classification
            </label>
            <select
              id="eventType"
              name="eventType"
              required
              className={`${externalInputClasses} appearance-none cursor-pointer`}
              value={formData.eventType}
              onChange={handleChange}
            >
              <option value="" disabled className="bg-surface-container text-on-surface-variant">Select division or format</option>
              <option value="TANGHAL - Live Experiences" className="bg-surface-container text-on-surface">TANGHAL - Premium Live Event</option>
              <option value="MERKATO - Brand Marketing" className="bg-surface-container text-on-surface">MERKATO - Brand Marketing</option>
              <option value="UGNAY - Public Relations" className="bg-surface-container text-on-surface">UGNAY - Press or PR Request</option>
              <option value="DALOY - Digital Campaign" className="bg-surface-container text-on-surface">DALOY - Digital Integration</option>
              <option value="Other" className="bg-surface-container text-on-surface">Open Inquiry / Consultancy</option>
            </select>
            {/* Custom dropdown caret */}
            <div className="absolute right-0 bottom-4 pointer-events-none text-primary">
              ▼
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="message" className="label-sm text-on-surface tracking-widest uppercase">
              Operational Directives
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Outline the scale, ambition, and constraints of your undertaking..."
              className={`${externalInputClasses} resize-none min-h-[120px]`}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="pt-6 flex justify-end">
            <Button variant="primary" size="lg" type="submit" className="w-full md:w-auto">
              Draft Transmission
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
