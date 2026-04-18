import DivisionHero from "@/components/sections/DivisionHero";
import DivisionCrossLinks from "@/components/sections/DivisionCrossLinks";
import CTABanner from "@/components/sections/CTABanner";
import { getDivisionBySlug } from "@/lib/divisions";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function TiponPage() {
  const division = getDivisionBySlug("tipon");
  if (!division) return notFound();

  return (
    <main className="bg-surface text-on-surface">
      <DivisionHero division={division} />

      {/* Deep-Dive 1: Service Grid (Bento) */}
      <section className="py-24 border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Trade Shows & Exhibits */}
            <div className="md:col-span-8 bg-surface border border-outline-variant/20 p-8 md:p-12 flex flex-col justify-end group overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop"
                alt="Trade Shows and Exhibits"
                fill
                className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              <div className="relative z-10 w-full max-w-lg">
                <h3 className="headline-md text-on-surface mb-3">Trade Shows & Exhibits</h3>
                <p className="body-md text-on-surface-variant font-light">
                  We design and manage trade show presences that stand out on the floor. From booth design and build-out to staffing and lead capture — your brand gets the attention it deserves.
                </p>
              </div>
            </div>

            {/* Conventions */}
            <div className="md:col-span-4 bg-surface-container border border-outline-variant/20 p-8 flex flex-col justify-end">
              <h3 className="headline-md text-on-surface mb-3">Conventions</h3>
              <p className="body-md text-on-surface-variant font-light">
                Large-scale event logistics at their most complex. We manage crowd flow, programming schedules, speaker coordination, and vendor operations so everything runs on time.
              </p>
            </div>

            {/* Mall Activations */}
            <div className="md:col-span-4 bg-surface-container border border-outline-variant/20 p-8 flex flex-col justify-end">
              <h3 className="headline-md text-primary mb-3">Mall Activations</h3>
              <p className="body-md text-on-surface-variant font-light">
                High-traffic pop-up experiences inside shopping malls. We build immersive setups that stop foot traffic and turn passersby into participants.
              </p>
            </div>

            {/* Fairs */}
            <div className="md:col-span-4 bg-surface border border-outline-variant/20 p-8 flex flex-col justify-end group overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1473286835901-04adb1afab03?q=80&w=800&auto=format&fit=crop"
                alt="Fairs"
                fill
                className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              <div className="relative z-10">
                <h3 className="headline-md text-on-surface mb-3">Fairs</h3>
                <p className="body-sm text-on-surface-variant font-light">
                  Outdoor and indoor fairs with a polished, organized feel. From artisanal markets to community festivals — reliable production regardless of scale.
                </p>
              </div>
            </div>

            {/* Outreach Programs */}
            <div className="md:col-span-4 bg-surface-container border border-outline-variant/20 p-8 flex flex-col justify-end">
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
              Open-air events require a different level of planning. Weather contingencies, power infrastructure, crowd management, sanitation, and multi-zone layouts — we handle the complexity so your outdoor event feels seamless.
            </p>
            
            <ul className="space-y-6">
              <li className="border-l-2 border-primary/30 pl-6">
                <h4 className="headline-sm text-primary mb-2">Spatial Coordination</h4>
                <p className="body-sm text-on-surface-variant font-light">Intuitive crowd flow planning without physical barriers</p>
              </li>
              <li className="border-l-2 border-primary/30 pl-6">
                <h4 className="headline-sm text-primary mb-2">Environmental Integration</h4>
                <p className="body-sm text-on-surface-variant font-light">Using natural surroundings and lighting conditions to enhance the event atmosphere</p>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7 relative aspect-square lg:aspect-[4/3] rounded-sm overflow-hidden editorial-shadow group order-1 lg:order-2">
            <Image 
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000&auto=format&fit=crop"
              alt="Outdoor Event Space"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Signature Feature: Fun Runs & Corporate Events */}
      <section className="py-24 md:py-32 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          <div className="bg-surface border border-outline-variant/20 p-8 md:p-12 lg:p-16 flex flex-col group hover:border-primary/40 transition-colors duration-500">
            <div className="relative aspect-video w-full mb-10 overflow-hidden mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500 rounded-sm">
              <Image 
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1200&auto=format&fit=crop"
                alt="Fun Runs"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="headline-md text-on-surface mb-2">Fun Runs</h3>
            <p className="label-sm text-primary italic mb-6">Wellness meets brand visibility.</p>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed">
              We produce race day experiences end-to-end — from kit design and route planning to branded archways and finish-line celebrations. Your brand&apos;s commitment to health, reflected in every detail.
            </p>
          </div>

          <div className="bg-surface border border-outline-variant/20 p-8 md:p-12 lg:p-16 flex flex-col group hover:border-primary/40 transition-colors duration-500 lg:translate-y-12">
            <div className="relative aspect-video w-full mb-10 overflow-hidden mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500 rounded-sm">
              <Image 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
                alt="Corporate Events"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="headline-md text-on-surface mb-2">Corporate & Social Events</h3>
            <p className="label-sm text-primary italic mb-6">The art of the company gathering.</p>
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
    </main>
  );
}
