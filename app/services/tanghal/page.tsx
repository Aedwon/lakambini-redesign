import DivisionHero from "@/components/sections/DivisionHero";
import DivisionCrossLinks from "@/components/sections/DivisionCrossLinks";
import CTABanner from "@/components/sections/CTABanner";
import { getDivisionBySlug } from "@/lib/divisions";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function TanghalPage() {
  const division = getDivisionBySlug("tanghal");
  if (!division) return notFound();

  return (
    <main className="bg-surface text-on-surface">
      <DivisionHero division={division} />

      {/* Deep-Dive 1: Live Concerts & Festivals */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7 relative aspect-video lg:aspect-[4/3] rounded-sm overflow-hidden editorial-shadow group">
            <Image 
              src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2000&auto=format&fit=crop"
              alt="Live Concerts and Festivals"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="headline-lg text-primary mb-8">Live Concerts & Festivals</h2>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-6">
              From solo acoustic sets to full-scale outdoor festivals, we produce live music events end-to-end. That means staging, sound, lighting, artist coordination, run-of-show, and on-the-day production management — all handled by one team.
            </p>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed">
              Whether it&apos;s a 200-person venue show or a 10,000-capacity open-air festival, the approach stays the same: plan every detail upfront, execute cleanly on the day, and give the audience a show they&apos;ll remember.
            </p>
          </div>
        </div>
      </section>

      {/* Deep-Dive 2: Performance Types (Bento Grid) */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Solo Artist */}
            <div className="md:col-span-8 bg-surface border border-outline-variant/20 p-8 md:p-12 flex flex-col justify-end group overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
                alt="Solo Artist"
                fill
                className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              <div className="relative z-10 w-full max-w-lg">
                <h3 className="headline-md text-on-surface mb-3">Solo Artist Performances</h3>
                <p className="body-md text-on-surface-variant font-light">
                  Intimate stage setups designed around a single performer. We handle everything from sound design to lighting cues so the artist can focus on the performance.
                </p>
              </div>
            </div>

            {/* Band & Ensemble */}
            <div className="md:col-span-4 bg-surface-container border border-outline-variant/20 p-8 flex flex-col justify-end">
              <h3 className="headline-md text-on-surface mb-3">Band & Ensemble Shows</h3>
              <p className="body-md text-on-surface-variant font-light">
                Full production for multi-artist lineups. Multi-channel sound, coordinated lighting, stage management, and seamless transitions between acts.
              </p>
            </div>

            {/* Music Festivals */}
            <div className="md:col-span-4 bg-surface-container border border-outline-variant/20 p-8 flex flex-col justify-end">
              <h3 className="headline-md text-primary mb-3">Music Festivals</h3>
              <p className="body-md text-on-surface-variant font-light">
                Multi-stage, multi-day festival production. We manage the infrastructure — stages, vendor coordination, crowd flow, artist scheduling, and safety logistics.
              </p>
            </div>

            {/* Virtual Concerts */}
            <div className="md:col-span-8 bg-surface border border-outline-variant/20 p-8 md:p-12 flex flex-col justify-end group overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1200&auto=format&fit=crop"
                alt="Virtual Concerts"
                fill
                className="object-cover opacity-40 transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              <div className="relative z-10 w-full max-w-lg">
                <h3 className="headline-md text-on-surface mb-3">Virtual Concerts</h3>
                <p className="body-md text-on-surface-variant font-light">
                  Professional-grade livestream production with multi-camera setups, real-time mixing, and audience interaction tools. Built for reach without sacrificing production quality.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Signature Feature: Talent Management */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="sticky top-32">
            <span className="label-sm text-primary tracking-[0.2em] uppercase block mb-4">Beyond the Stage</span>
            <h2 className="headline-lg text-on-surface mb-8">Talent Management</h2>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-6">
              We don&apos;t just produce shows — we work with artists year-round. Our talent management arm handles booking, scheduling, contract coordination, and tour logistics so artists can focus on their craft.
            </p>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-10">
              For event organizers, this means direct access to our roster of performers with a single point of contact for availability, requirements, and pricing. No middlemen. No back-and-forth.
            </p>
            
            <ul className="space-y-4">
              {[
                "Artist booking & scheduling",
                "Tour logistics coordination",
                "Contract management",
                "Rider & technical requirements",
                "On-site artist liaison"
              ].map(item => (
                <li key={item} className="flex items-center gap-4 text-on-surface body-md">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden editorial-shadow group">
            <Image 
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop"
              alt="Talent Management"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
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
    </main>
  );
}
