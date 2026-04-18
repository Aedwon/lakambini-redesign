import DivisionHero from "@/components/sections/DivisionHero";
import DivisionCrossLinks from "@/components/sections/DivisionCrossLinks";
import CTABanner from "@/components/sections/CTABanner";
import { getDivisionBySlug } from "@/lib/divisions";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function MerkatoPage() {
  const division = getDivisionBySlug("merkato");
  if (!division) return notFound();

  return (
    <main className="bg-surface text-on-surface">
      <DivisionHero division={division} />

      {/* Deep-Dive 1: Pop-Up Shops */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="md:col-span-6 relative aspect-square md:aspect-[4/5] rounded-sm overflow-hidden editorial-shadow group">
            <Image 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200&auto=format&fit=crop"
              alt="Pop-Up Shops"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="md:col-span-6 md:pl-8 flex flex-col justify-center">
            <h2 className="headline-lg text-primary mb-8">Pop-Up Shops</h2>
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
          <h2 className="headline-lg text-primary mb-8">Guerrilla Marketing</h2>
          <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-10">
            High-impact, low-overhead marketing interventions in public spaces. We plan and deploy unconventional activations that cut through the noise — turning streets, walls, and public moments into brand touchpoints.
          </p>
          <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-8">
            No permits wasted, no half-measures. Every guerrilla activation is planned with precision to maximize visibility and shareability.
          </p>
          <span className="label-sm uppercase tracking-widest text-primary/80 border border-primary/20 px-6 py-2 rounded-full inline-block">Urban Interventions</span>
        </div>
      </section>

      {/* Deep-Dive 3: Service Grid (3-Column) */}
      <section className="py-24 bg-surface border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Product Sampling */}
            <div className="bg-surface-container border border-outline-variant/20 p-8 flex flex-col items-start hover:border-primary/30 transition-colors duration-300">
              <div className="text-primary/40 text-4xl mb-6 font-headline italic">01</div>
              <h3 className="headline-md text-on-surface mb-4">Product Sampling</h3>
              <p className="body-md text-on-surface-variant font-light">
                Targeted sampling programs that put your product directly in the hands of the right audience. We handle logistics, staffing, and reporting — you get measurable results.
              </p>
            </div>

            {/* In-Store Demonstrations */}
            <div className="bg-surface-container border border-outline-variant/20 p-8 flex flex-col items-start hover:border-primary/30 transition-colors duration-300 md:translate-y-8">
              <div className="text-primary/40 text-4xl mb-6 font-headline italic">02</div>
              <h3 className="headline-md text-on-surface mb-4">In-Store Demonstrations</h3>
              <p className="body-md text-on-surface-variant font-light">
                Live product demos inside retail environments. Our trained brand ambassadors engage shoppers with hands-on, face-to-face interactions that drive immediate conversion.
              </p>
            </div>

            {/* Street Teams */}
            <div className="bg-surface-container border border-outline-variant/20 p-8 flex flex-col items-start hover:border-primary/30 transition-colors duration-300 md:translate-y-16">
              <div className="text-primary/40 text-4xl mb-6 font-headline italic">03</div>
              <h3 className="headline-md text-on-surface mb-4">Street Teams</h3>
              <p className="body-md text-on-surface-variant font-light">
                On-the-ground brand ambassadors selected for their energy and alignment with your brand. Deployed in high-traffic areas for maximum reach and authentic engagement.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Signature Feature: Affiliate Marketing & Branded Merch */}
      <section className="py-24 md:py-48 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          <div className="flex flex-col gap-16 lg:gap-32">
            <div>
              <h2 className="headline-lg text-primary mb-6">Affiliate Marketing</h2>
              <p className="body-lg text-on-surface-variant font-light leading-relaxed">
                Strategic partnerships with networks and creators that drive measurable sales. We identify, vet, and manage affiliate relationships aligned with your brand positioning.
              </p>
            </div>
            
            <div>
              <h2 className="headline-lg text-primary mb-6">Branded Swag & Merchandising</h2>
              <p className="body-lg text-on-surface-variant font-light leading-relaxed">
                Design and production of promotional items and merchandise. From premium giveaways to limited-edition product runs — physical brand assets that people actually want to keep.
              </p>
            </div>
          </div>

          <div className="sticky top-48 self-start pt-12 border-t lg:border-t-0 lg:border-l border-primary/20 lg:pl-16">
            <blockquote className="headline-sm italic font-light text-on-surface leading-loose mb-6">
              &quot;Marketing isn&apos;t about the things you make — it&apos;s about the stories you tell. The physical world is the most powerful stage for those stories.&quot;
            </blockquote>
            <cite className="label-sm tracking-[0.2em] uppercase text-primary/80 not-italic block">
              — Lakambini Philosophy
            </cite>
          </div>
          
        </div>
      </section>

      <DivisionCrossLinks currentSlug={division.slug} />

      <CTABanner 
        headline={division.ctaHeadline} 
        ctaLabel="Book a Discovery Call" 
        ctaHref="/contact" 
      />
    </main>
  );
}
