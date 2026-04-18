import DivisionHero from "@/components/sections/DivisionHero";
import DivisionCrossLinks from "@/components/sections/DivisionCrossLinks";
import CTABanner from "@/components/sections/CTABanner";
import { getDivisionBySlug } from "@/lib/divisions";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function DaloyPage() {
  const division = getDivisionBySlug("daloy");
  if (!division) return notFound();

  return (
    <main className="bg-surface text-on-surface flex flex-col">
      <DivisionHero division={division} />

      {/* Deep-Dive 1: Core Services (Bento Grid) */}
      <section className="py-24 border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Custom Web & Mobile App Development */}
            <div className="md:col-span-8 md:row-span-2 bg-surface border border-outline-variant/20 p-8 md:p-12 flex flex-col justify-end group overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
                alt="Custom Web and Mobile App Development"
                fill
                className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-90"></div>
              <div className="relative z-10 w-full max-w-xl">
                <h3 className="headline-md text-on-surface mb-4">Custom Web & Mobile App Development</h3>
                <p className="body-lg text-on-surface-variant font-light leading-relaxed">
                  Purpose-built digital products designed for reliability. We build web and mobile applications from the ground up — responsive, performant, and tailored to your specific workflows and audience.
                </p>
              </div>
            </div>

            {/* VIP Registration Systems */}
            <div className="md:col-span-4 bg-surface-container border border-outline-variant/20 p-8 flex flex-col justify-end group">
              <h3 className="headline-md text-on-surface mb-3">VIP Registration Systems</h3>
              <p className="body-md text-on-surface-variant font-light">
                Custom registration and check-in platforms for events, conferences, and private functions. QR-based entry, guest list management, and real-time attendance tracking.
              </p>
            </div>

            {/* Offline-First Software Solutions */}
            <div className="md:col-span-4 bg-surface-container border border-outline-variant/20 p-8 flex flex-col justify-end">
              <h3 className="headline-md text-primary mb-3">Offline-First Solutions</h3>
              <p className="body-sm text-on-surface-variant font-light">
                Applications that work without an internet connection. Critical for event venues, remote locations, and any environment where connectivity can&apos;t be guaranteed. Data syncs automatically when connection is restored.
              </p>
            </div>

            {/* Real-Time Analytics Dashboards */}
            <div className="md:col-span-6 bg-surface border border-outline-variant/20 p-8 flex flex-col justify-end group overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                alt="Real-Time Analytics Dashboards"
                fill
                className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105 mix-blend-luminosity grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              <div className="relative z-10">
                <span className="label-xs uppercase tracking-widest text-primary mb-3 block">Precision Monitoring</span>
                <h3 className="headline-sm text-on-surface mb-2">Real-Time Analytics Dashboards</h3>
                <p className="body-sm text-on-surface-variant font-light">
                  Live data dashboards that give you visibility into what&apos;s happening — attendee flow, engagement metrics, ticket sales, and operational status — all in real time.
                </p>
              </div>
            </div>

            {/* Zero-Party Data Capture */}
            <div className="md:col-span-6 bg-surface-container border border-outline-variant/20 p-8 flex flex-col justify-end">
              <h3 className="headline-md text-on-surface mb-3">Zero-Party Data Capture</h3>
              <p className="body-md text-on-surface-variant font-light">
                Data collection strategies that prioritize privacy while maximizing insight. We build opt-in tools — surveys, preference centers, and feedback loops — that give you valuable audience intelligence without compromising trust.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Signature Feature A: Automated Workflows */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
           <div className="relative aspect-square md:aspect-[4/3] w-full rounded-sm overflow-hidden editorial-shadow group mix-blend-luminosity">
            <Image 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
              alt="Automated Workflows"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Tech Overlay */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-color"></div>
          </div>

          <div className="flex flex-col">
            <span className="label-sm text-primary tracking-[0.2em] uppercase block mb-4">Operational Efficiency</span>
            <h2 className="headline-lg text-on-surface mb-6">Automated Workflows</h2>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-10">
              We build tools that remove friction from your operations. Our automated workflows eliminate manual handoffs and repetitive tasks — letting your team focus on decisions, not data entry.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {["Instant RSVP verification & alerts", "Automated post-event reports", "Dynamic guest list sync", "Smart scheduling & routing"].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="body-sm text-on-surface">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-12 border-t border-outline-variant/20 pt-8">
               <div>
                 <span className="display-sm text-primary font-black block mb-1">99.9<span className="text-2xl">%</span></span>
                 <span className="label-sm uppercase tracking-widest text-on-surface-variant">Uptime Target</span>
               </div>
               <div>
                 <span className="display-sm text-primary font-black block mb-1">&lt;100<span className="text-2xl">ms</span></span>
                 <span className="label-sm uppercase tracking-widest text-on-surface-variant">Response Time Goal</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Feature B: Survey Kiosks */}
      <section className="py-24 md:py-32 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="headline-lg text-primary">Survey Kiosks</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface border border-outline-variant/30 p-10 flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-primary mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
              </svg>
              <h3 className="headline-sm text-on-surface mb-4">Touch Interfaces</h3>
              <p className="body-md text-on-surface-variant font-light">
                Premium touchscreen kiosks for on-site feedback collection. Clean UI, fast interactions, and reliable hardware — designed for high-traffic environments.
              </p>
            </div>

            <div className="bg-surface border border-outline-variant/30 p-10 flex flex-col items-center text-center relative z-10 md:-translate-y-8 editorial-shadow">
               <svg className="w-8 h-8 text-primary mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
              </svg>
              <h3 className="headline-sm text-on-surface mb-4">Sentiment Analysis</h3>
              <p className="body-md text-on-surface-variant font-light">
                AI-driven analysis of guest feedback that maps satisfaction trends and highlights actionable insights from survey responses.
              </p>
            </div>

            <div className="bg-surface border border-outline-variant/30 p-10 flex flex-col items-center text-center">
              <svg className="w-8 h-8 text-primary mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
              </svg>
              <h3 className="headline-sm text-on-surface mb-4">Identity Integration</h3>
              <p className="body-md text-on-surface-variant font-light">
                NFC and QR-based recognition for personalized kiosk interactions. Returning users get a tailored experience based on prior responses.
              </p>
            </div>
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
