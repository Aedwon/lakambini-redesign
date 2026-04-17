import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="The Lakambini Legacy" 
        subtitle="Established on the core of Filipino heritage, fused with architectural precision."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
      />
      
      {/* Basic Structure Placeholder for Timeline */}
      <section className="bg-surface py-20 md:py-32 flex justify-center">
        <div className="max-w-7xl w-full text-center py-20 md:py-32 bg-surface-container-low">
          <SectionHeading 
            overline="Origins"
            title="Legacy Timeline"
            description="Our journey mapped out. To be populated with founder details and milestone phases."
            className="items-center mx-auto"
          />
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
