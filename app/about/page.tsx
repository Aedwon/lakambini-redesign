import type { Metadata } from "next";
import BrandFilm from "@/components/sections/BrandFilm";
import AboutHero from "@/components/sections/AboutHero";
import CompanyStory from "@/components/sections/CompanyStory";
import MissionVision from "@/components/sections/MissionVision";
import FounderStory from "@/components/sections/FounderStory";
import StatsBar from "@/components/sections/StatsBar";
import Approach from "@/components/sections/Approach";
import ClientLogos from "@/components/sections/ClientLogos";
import EditorialGallery from "@/components/sections/EditorialGallery";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Lakambini Events is a full-service events and creative production agency based in Cavite, established in 2024, with nine in-house divisions.",
  openGraph: {
    title: "About Lakambini Events",
    description:
      "Lakambini Events is a full-service events and creative production agency based in Cavite, established in 2024, with nine in-house divisions.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-ink">
      <AboutHero />
      <BrandFilm />
      <CompanyStory />
      <StatsBar />
      <MissionVision />
      <FounderStory />
      <Approach />
      <ClientLogos />
      <EditorialGallery />
      <CTABanner
        headline="Ready to plan what&apos;s next?"
        subtitle="Tell us what you have in mind."
        ctaLabel="Book a Discovery Call"
        ctaHref="/contact"
      />
    </div>
  );
}
