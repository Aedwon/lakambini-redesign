import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import DivisionsEditorial from "@/components/sections/DivisionsEditorial";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Nine specialized divisions under one roof — live entertainment, multimedia production, experiential marketing, events, technology, and more.",
  openGraph: {
    title: "Services | Lakambini Events",
    description:
      "Nine specialized divisions under one roof — live entertainment, multimedia production, experiential marketing, events, technology, and more.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-surface">
      <PageHero
        overline="Services"
        decorativeText="9"
        bgImage="/images/events/mlbb-naruto-booth-build.jpg"
        title={
          <>
            Nine Divisions. <br />
            One Team.
          </>
        }
        subtitle="Every capability you need under one roof — from live production and multimedia to tech development and experiential architecture."
      />

      {/* Core Divisions Editorial Grid */}
      <DivisionsEditorial />

      <CTABanner
        headline="Let's talk about your next project."
        ctaLabel="Book a Discovery Call"
        ctaHref="/contact"
      />
    </div>
  );
}
