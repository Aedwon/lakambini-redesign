import PageHero from "@/components/sections/PageHero";
import DivisionsEditorial from "@/components/sections/DivisionsEditorial";
import CTABanner from "@/components/sections/CTABanner";
import PageWrapper from "@/components/layout/PageWrapper";

export default function ServicesPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col w-full bg-surface">
        <PageHero 
          overline="Services"
          title={
            <>
              Nine Divisions. <br />
              <span className="italic text-primary">One</span> Team.
            </>
          }
          subtitle="Every capability you need under one roof — from live production and multimedia to tech development and experiential marketing."
        />
        
        {/* Core Divisions Editorial Grid */}
        <DivisionsEditorial />
        
        <CTABanner 
          headline="Let's talk about your next event."
          ctaLabel="Book a Discovery Call"
          ctaHref="/contact"
        />
      </div>
    </PageWrapper>
  );
}
