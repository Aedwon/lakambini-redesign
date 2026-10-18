import type { Metadata } from "next";
import DivisionHero from "@/components/sections/DivisionHero";
import DivisionCrossLinks from "@/components/sections/DivisionCrossLinks";
import DaloyProjects from "@/components/sections/DaloyProjects";
import CTABanner from "@/components/sections/CTABanner";
import { getDivisionBySlug } from "@/lib/divisions";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "DALOY — Technology & Development",
  description:
    "Web and mobile development, custom software, workflow automation and interactive kiosks — including Discord tournament bots and a survey kiosk built in-house.",
  openGraph: {
    title: "DALOY | Lakambini Events",
    description:
      "Web and mobile development, custom software, workflow automation and interactive kiosks — including Discord tournament bots and a survey kiosk built in-house.",
    url: "/services/daloy",
  },
};

export default function DaloyPage() {
  const division = getDivisionBySlug("daloy");
  if (!division) return notFound();

  return (
    <div className="bg-surface text-on-surface flex flex-col">
      <DivisionHero division={division} />

      <DaloyProjects />

      <section className="py-14 md:py-16 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h2 className="label-sm text-primary tracking-[0.2em] uppercase mb-6">
            What DALOY builds
          </h2>
          <ul className="flex flex-wrap gap-x-10 gap-y-3">
            {division.capabilities.map((c) => (
              <li key={c} className="body-lg text-on-surface">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DivisionCrossLinks currentSlug={division.slug} />

      <CTABanner
        headline={division.ctaHeadline}
        ctaLabel="Book a Discovery Call"
        ctaHref="/contact"
      />
    </div>
  );
}
