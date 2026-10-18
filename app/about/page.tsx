import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import CompanyStory from "@/components/sections/CompanyStory";
import FounderStory from "@/components/sections/FounderStory";
import StatsBar from "@/components/sections/StatsBar";
import Approach from "@/components/sections/Approach";
import ClientLogos from "@/components/sections/ClientLogos";
import EditorialGallery from "@/components/sections/EditorialGallery";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Lakambini Events is a full-service event production agency based in Cavite. One team across nine specialized divisions, from planning to production.",
  openGraph: {
    title: "About Lakambini Events",
    description:
      "Lakambini Events is a full-service event production agency based in Cavite. One team across nine specialized divisions, from planning to production.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-surface">
      {/* 1. About Hero - Custom section with editorial image */}
      <AboutHero />
      
      {/* 2. Company Story - Narrative about Founding & Growth */}
      <CompanyStory />
      
      {/* 3. Founder Story - Enriched bio and blockquote */}
      <FounderStory />
      
      {/* 4. Stats Bar */}
      <StatsBar />
      
      {/* 5. Our Approach - 3-Card Grid */}
      <Approach />
      
      {/* 6. Client Logos - Trust Bar with 5 real brands */}
      <ClientLogos />
      
      {/* 7. Editorial Gallery - With Heading & Responsive fix */}
      <EditorialGallery />

      {/* 8. CTA Banner - Standardized Banner */}
      <CTABanner 
        headline="Ready to plan what&apos;s next?"
        subtitle="Tell us what you have in mind and we will take it from there."
        ctaLabel="Book a Discovery Call"
        ctaHref="/contact"
      />
    </div>
  );
}
