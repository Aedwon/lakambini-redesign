import PageHero from "@/components/sections/PageHero";
import DivisionsEditorial from "@/components/sections/DivisionsEditorial";
import CTABanner from "@/components/sections/CTABanner";
import PageWrapper from "@/components/layout/PageWrapper";

export default function ServicesPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col w-full bg-surface">
        <PageHero 
          overline="Our Capabilities"
          title={
            <>
              The Art of <br />
              <span className="italic text-primary">Exceptional</span> Experiences
            </>
          }
          subtitle="A multi-disciplinary collective of nine specialized divisions, meticulously designed to deliver world-class executions across the digital and physical realms."
        />
        
        {/* Core Divisions Editorial Grid */}
        <DivisionsEditorial />
        
        <CTABanner 
          headline="Ready to start your next project?"
          ctaLabel="Start Your Project"
          ctaHref="/contact"
        />
      </div>
    </PageWrapper>
  );
}
