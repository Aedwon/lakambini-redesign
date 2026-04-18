import AboutHero from "@/components/sections/AboutHero";
import CompanyStory from "@/components/sections/CompanyStory";
import FounderStory from "@/components/sections/FounderStory";
import StatsBar from "@/components/sections/StatsBar";
import Approach from "@/components/sections/Approach";
import ClientLogos from "@/components/sections/ClientLogos";
import EditorialGallery from "@/components/sections/EditorialGallery";
import CTABanner from "@/components/sections/CTABanner";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-surface">
      {/* 1. About Hero - Custom section with editorial image */}
      <AboutHero />
      
      {/* 2. Company Story - Narrative about Founding & Growth */}
      <CompanyStory />
      
      {/* 3. Founder Story - Enriched bio and blockquote */}
      <FounderStory />
      
      {/* 4. Stats Bar - Key Metrics */}
      <StatsBar />
      
      {/* 5. Our Approach - 3-Card Grid */}
      <Approach />
      
      {/* 6. Client Logos - Trust Bar with 5 real brands */}
      <ClientLogos />
      
      {/* 7. Editorial Gallery - With Heading & Responsive fix */}
      <EditorialGallery />

      {/* 8. CTA Banner - Standardized Banner */}
      <CTABanner 
        headline="Ready to define your legacy?"
        subtitle="Limited availability for 2026. Begin the journey with a private consultation."
        ctaLabel="Book a Private Consultation"
        ctaHref="/contact"
      />
    </div>
  );
}
