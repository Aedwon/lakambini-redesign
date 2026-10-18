import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import ProjectIndex from "@/components/sections/ProjectIndex";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Esports tournaments, fan-event activations, school caravans and team building we have produced, mostly for Moonton and Mobile Legends: Bang Bang.",
  openGraph: {
    title: "Portfolio | Lakambini Events",
    description:
      "Esports tournaments, fan-event activations, school caravans and team building we have produced, mostly for Moonton and Mobile Legends: Bang Bang.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full bg-surface">
      <PageHero
        overline="Portfolio"
        title="Work We've Delivered"
        subtitle="Esports finals, fan-event booths, school caravans and team building. Here is what we have built and run."
        decorativeText="Archive"
        bgImage="/images/events/m6-watchfest-screen.jpg"
      />

      <PortfolioGrid />

      <ProjectIndex />

      <CTABanner
        headline="Let's talk about your next project."
        ctaLabel="Book a Discovery Call"
        ctaHref="/contact"
      />
    </div>
  );
}
