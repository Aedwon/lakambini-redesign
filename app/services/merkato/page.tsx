import type { Metadata } from "next";
import DivisionHero from "@/components/sections/DivisionHero";
import DivisionCrossLinks from "@/components/sections/DivisionCrossLinks";
import CTABanner from "@/components/sections/CTABanner";
import { getDivisionBySlug } from "@/lib/divisions";
import { notFound } from "next/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MERKATO — Experiential Marketing",
  description:
    "Product sampling, pop-up activations, street teams, and guerrilla campaigns — direct-to-consumer marketing strategies that drive real engagement.",
  openGraph: {
    title: "MERKATO | Lakambini Events",
    description:
      "Product sampling, pop-up activations, street teams, and guerrilla campaigns — direct-to-consumer marketing strategies that drive real engagement.",
    url: "/services/merkato",
  },
};

export default function MerkatoPage() {
  const division = getDivisionBySlug("merkato");
  if (!division) return notFound();

  return (
    <div className="bg-surface text-on-surface">
      <DivisionHero division={division} />

      {/* Deep-Dive 1: Pop-Up Shops */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="md:col-span-6 relative aspect-square md:aspect-[4/5] rounded-sm overflow-hidden editorial-shadow group">
            <Image 
              src="/images/events/mlbb-milo-handprint-wall.jpg"
              alt="MLBB x Milo booth with a handprint wall"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="md:col-span-6 md:pl-8 flex flex-col justify-center">
            <h2 className="headline-lg text-on-surface mb-8">Pop-Up Shops</h2>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-6">
              Temporary retail experiences designed to drive urgency and create buzz. We handle concept, design, build-out, and staffing — from modular container setups to full storefront takeovers.
            </p>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed">
              Pop-ups work because they&apos;re finite. We lean into that — creating environments that feel exclusive and time-sensitive, giving your audience a reason to show up now, not later.
            </p>
          </div>
        </div>
      </section>

      {/* Deep-Dive 2: Guerrilla Marketing (Marble Reveal) */}
      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="absolute inset-0 marble-texture mix-blend-overlay opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="headline-lg text-on-surface mb-8">Guerrilla Marketing</h2>
          <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-10">
            High-impact, low-overhead marketing interventions in public spaces. We plan and deploy unconventional activations that cut through the noise — turning streets, walls, and public moments into brand touchpoints.
          </p>
          <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-8">
            Every guerrilla activation is planned carefully, with the right approvals, to maximize visibility and shareability.
          </p>
          <span className="label-sm uppercase tracking-widest text-primary inline-block">Urban Interventions</span>
        </div>
      </section>

      {/* Deep-Dive 3: Service Grid (3-Column) */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Product Sampling */}
            <div className="bg-surface-container p-8 flex flex-col items-start">
              <div className="text-primary text-4xl mb-6 font-headline">01</div>
              <h3 className="headline-md text-on-surface mb-4">Product Sampling</h3>
              <p className="body-md text-on-surface-variant font-light">
                Targeted sampling programs that put your product directly in the hands of the right audience. We handle logistics, staffing, and reporting — you get measurable results.
              </p>
            </div>

            {/* In-Store Demonstrations */}
            <div className="bg-surface-container p-8 flex flex-col items-start md:translate-y-8">
              <div className="text-primary text-4xl mb-6 font-headline">02</div>
              <h3 className="headline-md text-on-surface mb-4">In-Store Demonstrations</h3>
              <p className="body-md text-on-surface-variant font-light">
                Live product demos inside retail environments. Our trained brand ambassadors engage shoppers with hands-on, face-to-face interactions that drive immediate conversion.
              </p>
            </div>

            {/* Street Teams */}
            <div className="bg-surface-container p-8 flex flex-col items-start md:translate-y-16">
              <div className="text-primary text-4xl mb-6 font-headline">03</div>
              <h3 className="headline-md text-on-surface mb-4">Street Teams</h3>
              <p className="body-md text-on-surface-variant font-light">
                On-the-ground brand ambassadors selected for their energy and alignment with your brand. Deployed in high-traffic areas for maximum reach and authentic engagement.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Signature Feature: Affiliate Marketing & Branded Merch */}
      <section className="py-24 md:py-32 bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          <div className="flex flex-col gap-16 lg:gap-32">
            <div>
              <h2 className="headline-lg text-on-surface mb-6">Affiliate Marketing</h2>
              <p className="body-lg text-on-surface-variant font-light leading-relaxed">
                Strategic partnerships with networks and creators that drive measurable sales. We identify, vet, and manage affiliate relationships aligned with your brand positioning.
              </p>
            </div>
            
            <div>
              <h2 className="headline-lg text-on-surface mb-6">Branded Swag & Merchandising</h2>
              <p className="body-lg text-on-surface-variant font-light leading-relaxed">
                Design and production of promotional items and merchandise. From premium giveaways to limited-edition product runs — physical brand assets that people actually want to keep.
              </p>
            </div>
          </div>

          <div className="sticky top-48 self-start relative aspect-[4/5] w-full overflow-hidden editorial-shadow group">
            <Image
              src="/images/events/mlbb-naruto-booth-interior.jpg"
              alt="Inside a fabricated MLBB x Naruto activation booth"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          
        </div>
      </section>

      <DivisionCrossLinks currentSlug={division.slug} />

      <CTABanner 
        headline={division.ctaHeadline} 
        ctaLabel="Book a Discovery Call" 
        ctaHref="/contact" 
      />
    </div>
  );
}
