import type { Metadata } from "next";
import DivisionHero from "@/components/sections/DivisionHero";
import DivisionCrossLinks from "@/components/sections/DivisionCrossLinks";
import CTABanner from "@/components/sections/CTABanner";
import { getDivisionBySlug } from "@/lib/divisions";
import { notFound } from "next/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "TIPON — Event Production & Management",
  description:
    "Trade shows, sponsorship activations, fun runs, and mall events. Reliable logistics from load-in to strike.",
  openGraph: {
    title: "TIPON | Lakambini Events",
    description:
      "Trade shows, sponsorship activations, fun runs, and mall events. Reliable logistics from load-in to strike.",
    url: "/services/tipon",
  },
};

export default function TiponPage() {
  const division = getDivisionBySlug("tipon");
  if (!division) return notFound();

  return (
    <div className="bg-surface text-on-surface">
      <DivisionHero division={division} />

      {/* Deep-Dive 1: Service Grid (Bento) */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Trade Shows & Exhibits */}
            <div className="md:col-span-8 bg-surface p-8 md:p-12 flex flex-col justify-end group overflow-hidden relative">
              <Image 
                src="/images/events/mlbb-naruto-booth-build.jpg"
                alt="Fabricated MLBB x Naruto booths at a convention"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
              <div className="relative z-10 w-full max-w-lg">
                <h3 className="headline-md text-on-surface mb-3">Trade Shows & Exhibits</h3>
                <p className="body-md text-on-surface-variant font-light">
                  We design and manage trade show presences that stand out on the floor. From booth design and build-out to staffing and lead capture — your brand gets seen.
                </p>
              </div>
            </div>

            {/* Conventions */}
            <div className="md:col-span-4 bg-surface-container p-8 flex flex-col justify-end">
              <h3 className="headline-md text-on-surface mb-3">Conventions</h3>
              <p className="body-md text-on-surface-variant font-light">
                Large-scale event logistics at their most complex. We manage crowd flow, programming schedules, speaker coordination, and vendor operations so everything runs on time.
              </p>
            </div>

            {/* Mall Activations */}
            <div className="md:col-span-4 bg-surface-container p-8 flex flex-col justify-end">
              <h3 className="headline-md text-on-surface mb-3">Mall Activations</h3>
              <p className="body-md text-on-surface-variant font-light">
                High-traffic pop-up experiences inside shopping malls. We build immersive setups that stop foot traffic and turn passersby into participants.
              </p>
            </div>

            {/* Fairs */}
            <div className="md:col-span-4 bg-surface p-8 flex flex-col justify-end group overflow-hidden relative">
              <Image 
                src="/images/events/pamigay-caravan-crowd.jpg"
                alt="Crowd at the MLBB Pamigay Caravan"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="headline-md text-on-surface mb-3">Fairs</h3>
                <p className="body-sm text-on-surface-variant font-light">
                  Outdoor and indoor fairs that run on schedule. From artisanal markets to community festivals — reliable production regardless of scale.
                </p>
              </div>
            </div>

            {/* Outreach Programs */}
            <div className="md:col-span-4 bg-surface-container p-8 flex flex-col justify-end">
              <h3 className="headline-md text-on-surface mb-3">Outreach Programs</h3>
              <p className="body-md text-on-surface-variant font-light">
                Corporate social responsibility events done right. We bridge the gap between brand values and community impact through well-organized, dignified engagement.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Deep-Dive 2: Outdoor Festivals & Open-Air Events */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <span className="label-sm text-primary tracking-[0.2em] uppercase block mb-4">Large Scale</span>
            <h2 className="headline-lg text-on-surface mb-8">Outdoor Festivals & Open-Air Events</h2>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-10">
              Open-air events require a different level of planning. Weather contingencies, power infrastructure, crowd management, sanitation, and multi-zone layouts — we handle the complexity so your outdoor event runs smoothly.
            </p>
            
            <ul className="space-y-6">
              <li className="pl-6">
                <h4 className="headline-sm text-on-surface mb-2">Spatial Coordination</h4>
                <p className="body-sm text-on-surface-variant font-light">Intuitive crowd flow planning without physical barriers</p>
              </li>
              <li className="pl-6">
                <h4 className="headline-sm text-on-surface mb-2">Environmental Integration</h4>
                <p className="body-sm text-on-surface-variant font-light">Using natural surroundings and lighting conditions to enhance the event atmosphere</p>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7 relative aspect-square lg:aspect-[4/3] rounded-sm overflow-hidden editorial-shadow group order-1 lg:order-2">
            <Image 
              src="/images/events/pamigay-caravan-stage.jpg"
              alt="Main stage at the MLBB Pamigay Caravan"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>

      {/* Signature Feature: Fun Runs & Corporate Events */}
      <section className="py-24 md:py-32 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <div className="bg-surface p-8 md:p-12 lg:p-16 flex flex-col">
            <div className="relative aspect-video w-full mb-10 overflow-hidden rounded-sm">
              {/* TODO(client): no real photo yet — needs real fun-run photo */}
              <Image 
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1200&auto=format&fit=crop"
                alt="Fun Runs"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <h3 className="headline-md text-on-surface mb-2">Fun Runs</h3>
            <p className="label-sm text-primary mb-6">Wellness meets brand visibility.</p>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed">
              We produce race day experiences end-to-end — from kit design and route planning to branded archways and finish-line celebrations. 
            </p>
          </div>

          <div className="bg-surface p-8 md:p-12 lg:p-16 flex flex-col lg:translate-y-12">
            <div className="relative aspect-video w-full mb-10 overflow-hidden rounded-sm">
              <Image 
                src="/images/events/team-building-ball.jpg"
                alt="Corporate team-building game run by the Lakambini crew"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <h3 className="headline-md text-on-surface mb-2">Corporate & Social Events</h3>
            <p className="label-sm text-primary mb-6">The art of the company gathering.</p>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed">
              Internal celebrations, team socials, year-end parties, and client appreciation events. We bring the same production standards to your company culture as we do to your public-facing brand.
            </p>
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
