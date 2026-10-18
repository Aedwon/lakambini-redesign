import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import ProjectIndex from "@/components/sections/ProjectIndex";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Esports tournaments, fan-event activations, school caravans and team building, mostly for Moonton and Mobile Legends: Bang Bang.",
  openGraph: {
    title: "Portfolio | Lakambini Events",
    description:
      "Esports tournaments, fan-event activations, school caravans and team building, mostly for Moonton and Mobile Legends: Bang Bang.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="flex w-full flex-col bg-ink">
      <PageHero
        overline="Work"
        title="The work."
        subtitle="Esports finals, fan-event builds, school caravans and team building, since 2024."
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
