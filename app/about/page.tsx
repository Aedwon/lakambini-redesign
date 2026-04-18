import PageHero from "@/components/sections/PageHero";
import FounderStory from "@/components/sections/FounderStory";
import Approach from "@/components/sections/Approach";
import EditorialGallery from "@/components/sections/EditorialGallery";
import CTABanner from "@/components/sections/CTABanner";

export default function AboutPage() {
  return (
      <div className="flex flex-col w-full bg-surface">
        <PageHero 
          overline="About Us"
          title={
            <>
              The <span className="italic text-primary">Lakambini</span> Legacy
            </>
          }
          subtitle="Over a decade of delivering high-stakes productions for clients who can't afford anything less than flawless."
        />
        
        <FounderStory />
        <Approach />
        <EditorialGallery />

        <CTABanner 
          headline="We'd like to hear about your next event."
          subtitle="Tell us what you're planning. We'll tell you how we can help."
          ctaLabel="Get in Touch"
          ctaHref="/contact"
        />
      </div>
  );
}
