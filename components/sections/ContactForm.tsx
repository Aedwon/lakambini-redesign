"use client";

import { useState } from "react";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";
import { divisions } from "@/lib/divisions";

type Status = "idle" | "submitting" | "success-formspree" | "success-mailto" | "error";

interface FormState {
  fullName: string;
  email: string;
  company: string;
  eventType: string;
  eventDate: string;
  message: string;
}

const initialState: FormState = {
  fullName: "",
  email: "",
  company: "",
  eventType: "",
  eventDate: "",
  message: "",
};

// TODO(client): confirm inquiry inbox
const INQUIRY_EMAIL = "hello@lakambini.com";

const buildMailto = (d: FormState): string => {
  const subject = `Event inquiry — ${d.company.trim() || d.fullName.trim()}`;
  const body = [
    `Full name: ${d.fullName}`,
    `Email: ${d.email}`,
    `Company / brand: ${d.company || "-"}`,
    `What do you need: ${d.eventType || "-"}`,
    `Target event date: ${d.eventDate || "-"}`,
    "",
    "Message:",
    d.message,
  ].join("\n");
  return `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState<FormState>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (!formspreeId) {
      window.location.href = buildMailto(formData);
      setStatus("success-mailto");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      setStatus("success-formspree");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setFormData(initialState);
    setStatus("idle");
  };

  const succeeded = status === "success-formspree" || status === "success-mailto";

  if (succeeded) {
    return (
      <section className="bg-surface-container py-24 md:py-32 px-6 flex items-center justify-center text-center">
        <div className="max-w-2xl flex flex-col gap-8 items-center" role="status" aria-live="polite">
          <div className="w-20 h-20 rounded-full flex items-center justify-center bg-surface-container-high mb-2">
            <span className="text-primary text-4xl" aria-hidden="true">✓</span>
          </div>
          <h2 className="headline-lg text-on-surface">
            {status === "success-mailto" ? "Your email app should be open" : "Message received"}
          </h2>
          <p className="body-lg text-on-surface-variant max-w-lg mb-4">
            {status === "success-mailto"
              ? `Your email app opened with your inquiry filled in. Press send there to reach us. If nothing opened, write to ${INQUIRY_EMAIL} directly.`
              : "Thanks for reaching out. We will get back to you by email."}
          </p>
          <Button variant="secondary" onClick={reset}>
            Send another inquiry
          </Button>
        </div>
      </section>
    );
  }

  const inputClasses =
    "w-full bg-transparent border-b border-outline-variant/40 py-3 min-h-[44px] text-on-surface body-md rounded-none focus:outline-none focus:border-b-2 focus:border-primary transition-all duration-300 placeholder:text-on-surface-variant/60";

  return (
    <section className="bg-surface-container py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16 relative z-10">
        <div className="flex flex-col gap-4">
          <span className="label-sm text-primary tracking-widest uppercase">Inquiries</span>
          <h2 className="display-sm text-on-surface">Start the conversation.</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10" aria-busy={status === "submitting"}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <InputField
              label="Full name"
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

          <InputField
            label="Company / brand"
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Optional"
            value={formData.company}
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-2 w-full relative">
              <label htmlFor="eventType" className="label-sm text-on-surface tracking-widest uppercase">
                What do you need?
              </label>
              <select
                id="eventType"
                name="eventType"
                className={`${inputClasses} appearance-none cursor-pointer pr-6`}
                value={formData.eventType}
                onChange={handleChange}
              >
                <option value="" className="bg-surface-container text-on-surface-variant">Select a service area</option>
                {divisions.map((d) => (
                  <option key={d.slug} value={`${d.name} - ${d.subtitle}`} className="bg-surface-container text-on-surface">
                    {d.name} — {d.subtitle}
                  </option>
                ))}
                <option value="Not sure yet / Other" className="bg-surface-container text-on-surface">Not sure yet / Other</option>
              </select>
              <div className="absolute right-0 bottom-4 pointer-events-none text-primary text-xs" aria-hidden="true">▼</div>
            </div>

            <InputField
              label="Target event date"
              id="eventDate"
              name="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="message" className="label-sm text-on-surface tracking-widest uppercase">
              Message<span className="text-primary ml-1" aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              aria-required="true"
              rows={5}
              placeholder="What are you planning? Include scale, location, and any specific requirements."
              className={`${inputClasses} resize-none min-h-[120px]`}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div aria-live="polite" className="min-h-[1.5rem]">
            {status === "error" && (
              <p role="alert" className="body-md text-on-surface">
                Sorry, we could not send your message. Please try again, or email us at{" "}
                <a href={`mailto:${INQUIRY_EMAIL}`} className="text-primary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4">
                  {INQUIRY_EMAIL}
                </a>
                .
              </p>
            )}
            {status === "submitting" && <p className="body-md text-on-surface-variant">Sending your message…</p>}
          </div>

          <div className="flex justify-end">
            <Button variant="primary" size="lg" type="submit" className="w-full md:w-auto">
              {status === "submitting" ? "Sending…" : "Send message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
