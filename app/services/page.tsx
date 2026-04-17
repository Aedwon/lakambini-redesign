import PageHero from "@/components/sections/PageHero";
import DivisionsPreview from "@/components/sections/DivisionsPreview";
import CTABanner from "@/components/sections/CTABanner";
import Accordion from "@/components/ui/Accordion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesPage() {
  const focusDivisions = [
    { name: "TANGHAL", desc: "Our Live Experiences division orchestrates premium gala dinners, product launches, and massive conferences with flawless architectural logic. We control every facet of the physical space to create deep immersion." },
    { name: "MERKATO", desc: "Brand positioning, go-to-market strategies, and marketing rollouts. Merkato treats the digital and physical space as a high-end publication, tailoring campaigns for regal audiences." },
    { name: "UGNAY", desc: "Public relations, media handling, and strategic communications. We build bridges between your brand and essential stakeholders, utilizing a calculated, editorial approach to reputation." },
    { name: "DALOY", desc: "The pulse of our Digital Solutions. From custom platforms to interactive microsites, we engineer digital touchpoints that scale massively without losing their premium fidelity." },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Our Core Divisions" 
        subtitle="Nine specialized pillars structuring the Lakambini ecosystem."
        backgroundImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
      />
      
      {/* Core Divisions Grid (Reusing existing Bento layout logic) */}
      <DivisionsPreview />
      
      {/* Service Detail Accordions */}
      <section className="bg-surface py-20 md:py-32 w-full">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
          <SectionHeading 
              overline="Deep Dive"
              title="Execution Strategies"
              description="A closer look at how our primary divisions operate in tandem."
          />
          <div className="flex flex-col border-t border-outline-variant/20 pt-4 max-w-4xl">
            {focusDivisions.map((div, i) => (
              <Accordion key={div.name} title={`0${i + 1} // ${div.name}`} defaultOpen={i === 0}>
                <p className="max-w-3xl pt-2">{div.desc}</p>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
