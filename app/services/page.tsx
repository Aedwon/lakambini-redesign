import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import DivisionsEditorial from "@/components/sections/DivisionsEditorial";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Live entertainment, multimedia, experiential marketing, events, technology and more, across nine in-house divisions.",
  openGraph: {
    title: "Services | Lakambini Events",
    description:
      "Live entertainment, multimedia, experiential marketing, events, technology and more, across nine in-house divisions.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-ink">
      <PageHero
        overline="Services"
        bgImage="/images/events/mlbb-naruto-booth-build.jpg"
        title="Nine teams under one roof."
        subtitle="From live production and multimedia to tech and experiential builds, all in-house."
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
