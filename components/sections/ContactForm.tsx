"use client";

import { useState } from "react";
import InputField, { fieldClasses, fieldLabelClasses } from "@/components/ui/InputField";
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

const INQUIRY_EMAIL = "admin@lakambinievents.com";

const buildMailto = (d: FormState): string => {
  const subject = `Event inquiry: ${d.company.trim() || d.fullName.trim()}`;
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
      <div className="flex flex-col gap-8 items-start border-t hairline pt-10" role="status" aria-live="polite">
        <p className="eyebrow text-brass">{status === "success-mailto" ? "One more step" : "Sent"}</p>
        <h2 className="display-sm text-ivory text-balance">
          {status === "success-mailto" ? "Your email app should be open" : "Message received"}
        </h2>
        <p className="body-lg text-mist max-w-[52ch]">
          {status === "success-mailto"
            ? `Your email app opened with your inquiry filled in. Press send there to reach us. If nothing opened, write to ${INQUIRY_EMAIL} directly.`
            : "Thanks for reaching out. We will get back to you by email."}
        </p>
        <Button variant="secondary" onClick={reset}>
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-9 md:gap-11" aria-busy={status === "submitting"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-10">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-10">
        <div className="flex flex-col gap-1 w-full relative">
          <label htmlFor="eventType" className={fieldLabelClasses}>
            What do you need?
          </label>
          <select
            id="eventType"
            name="eventType"
            className={`${fieldClasses} appearance-none cursor-pointer pr-8`}
            value={formData.eventType}
            onChange={handleChange}
          >
            <option value="" className="bg-ink-raised text-mist">Select a service area</option>
            {divisions.map((d) => (
              <option key={d.slug} value={`${d.name} - ${d.subtitle}`} className="bg-ink-raised text-ivory">
                {d.name} - {d.subtitle}
              </option>
            ))}
            <option value="Not sure yet / Other" className="bg-ink-raised text-ivory">Not sure yet / Other</option>
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 12 8"
            className="absolute right-0 bottom-[22px] h-2 w-3 pointer-events-none text-brass"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
          >
            <path d="M1 1.5l5 5 5-5" />
          </svg>
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

      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="message" className={fieldLabelClasses}>
          Message<span className="text-brass ml-1" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          rows={3}
          placeholder="What are you planning? Include scale, location and any requirements."
          className={`${fieldClasses} resize-none min-h-[96px] overflow-hidden`}
          value={formData.message}
          onChange={handleChange}
          onInput={(e) => {
            const el = e.currentTarget;
            el.style.height = "auto";
            el.style.height = `${el.scrollHeight}px`;
          }}
        />
      </div>

      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === "error" && (
          <p role="alert" className="body-md text-ivory">
            Sorry, we could not send your message. Please try again, or email us at{" "}
            <a href={`mailto:${INQUIRY_EMAIL}`} className="text-brass underline underline-offset-4">
              {INQUIRY_EMAIL}
            </a>
            .
          </p>
        )}
        {status === "submitting" && <p className="body-md text-mist">Sending your message…</p>}
      </div>

      <div>
        <Button variant="primary" size="lg" type="submit" className="w-full md:w-auto">
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
