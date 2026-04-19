import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A decade of events, productions, and experiences across every division. Browse our portfolio of delivered work.",
  openGraph: {
    title: "Portfolio | Lakambini Events",
    description:
      "A decade of events, productions, and experiences across every division. Browse our portfolio of delivered work.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full bg-surface">
      <PageHero
        overline="Portfolio"
        title="Work We've Delivered"
        subtitle="A decade of events, productions, and experiences — across every division."
        decorativeText="Archive"
        bgImage="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop"
      />

      <PortfolioGrid />

      <CTABanner
        headline="Let's talk about your next project."
        ctaLabel="Book a Discovery Call"
        ctaHref="/contact"
      />
    </div>
  );
}
