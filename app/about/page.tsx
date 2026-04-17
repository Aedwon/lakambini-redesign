import PageHero from "@/components/sections/PageHero";
import FounderStory from "@/components/sections/FounderStory";
import Approach from "@/components/sections/Approach";
import EditorialGallery from "@/components/sections/EditorialGallery";
import CTABanner from "@/components/sections/CTABanner";
import PageWrapper from "@/components/layout/PageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col w-full bg-surface">
        <PageHero 
          overline="Est. 2014"
          title={
            <>
              The <span className="italic text-primary">Lakambini</span> Legacy
            </>
          }
          subtitle="A decade of orchestrating the extraordinary. We don't just plan events; we curate enduring memories for the world's most discerning hosts."
        />
        
        <FounderStory />
        <Approach />
        <EditorialGallery />

        <CTABanner 
          headline="Ready to start your next project?"
          subtitle="Limited availability for 2025. Begin the journey with a private consultation."
          ctaLabel="Book a Private Consultation"
          ctaHref="/contact"
        />
      </div>
    </PageWrapper>
  );
}
