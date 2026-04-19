import type { Metadata } from "next";
import DivisionHero from "@/components/sections/DivisionHero";
import DivisionCrossLinks from "@/components/sections/DivisionCrossLinks";
import CTABanner from "@/components/sections/CTABanner";
import { getDivisionBySlug } from "@/lib/divisions";
import { notFound } from "next/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LIKHA — Multimedia Production",
  description:
    "End-to-end video production, motion graphics, and sound design — from brand campaigns and music videos to event coverage and commercial content.",
  openGraph: {
    title: "LIKHA | Lakambini Events",
    description:
      "End-to-end video production, motion graphics, and sound design — from brand campaigns and music videos to event coverage and commercial content.",
    url: "/services/likha",
  },
};

export default function LikhaPage() {
  const division = getDivisionBySlug("likha");
  if (!division) return notFound();

  return (
    <div className="bg-surface text-on-surface">
      <DivisionHero division={division} />

      {/* Deep-Dive 1: Event Video Coverage */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <h2 className="headline-lg text-primary mb-8">Event Video Coverage</h2>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-6">
              Multi-camera coverage designed to capture every key moment — without getting in the way. We set up, shoot, and deliver polished event films with fast turnaround, so your event lives on well beyond the last guest leaving.
            </p>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed">
              Our crews are experienced in high-pressure, live environments. We work quietly and efficiently, capturing candid moments, speaker highlights, and crowd energy with an editorial eye.
            </p>
          </div>
          <div className="lg:col-span-7 relative aspect-video lg:aspect-[4/3] rounded-sm overflow-hidden editorial-shadow group order-1 lg:order-2">
            <Image 
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000&auto=format&fit=crop"
              alt="Event Video Coverage"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Deep-Dive 2: Service Grid (Bento) */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Music Video Production */}
            <div className="md:col-span-8 bg-surface border border-outline-variant/20 p-8 md:p-12 flex flex-col justify-end group overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1200&auto=format&fit=crop"
                alt="Music Video Production"
                fill
                className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              <div className="relative z-10 w-full max-w-lg">
                <h3 className="headline-md text-on-surface mb-3">Music Video Production</h3>
                <p className="body-md text-on-surface-variant font-light">
                  High-concept music videos from pre-production to final delivery. We handle art direction, location scouting, cinematography, and post — all in-house.
                </p>
              </div>
            </div>

            {/* Video Editing */}
            <div className="md:col-span-4 bg-surface-container border border-outline-variant/20 p-8 flex flex-col justify-end">
              <div className="mb-4 text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="headline-md text-on-surface mb-3">Video Editing</h3>
              <p className="body-md text-on-surface-variant font-light">
                Pacing, rhythm, and storytelling. Our editors turn raw footage into clean, compelling content — whether it&apos;s a 30-second social cut or a 10-minute brand film.
              </p>
            </div>

            {/* Sound Design */}
            <div className="md:col-span-4 bg-surface-container border border-outline-variant/20 p-8 flex flex-col justify-end">
              <h3 className="headline-md text-primary mb-3">Sound Design</h3>
              <p className="body-md text-on-surface-variant font-light">
                Audio mixing, sound effects, voiceover recording, and spatial audio. We make sure your content sounds as polished as it looks.
              </p>
            </div>

            {/* Motion Graphic Design */}
            <div className="md:col-span-8 bg-surface border border-outline-variant/20 p-8 md:p-12 flex flex-col justify-end group overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop"
                alt="Motion Graphic Design"
                fill
                className="object-cover opacity-30 mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              <div className="relative z-10 w-full max-w-lg">
                <h3 className="headline-md text-on-surface mb-3">Motion Graphic Design</h3>
                <p className="body-md text-on-surface-variant font-light">
                  Animated titles, data visualizations, social media content, and brand animations. Clean motion design that elevates your visual identity across digital channels.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Signature Feature: Post-Production Services */}
      <section className="py-32 bg-surface text-center">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <span className="label-sm text-primary tracking-[0.2em] uppercase block mb-6">The Final Polish</span>
          <h2 className="display-md text-on-surface mb-20 italic">Post-Production Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-left">
            {/* Color Grading */}
            <div className="flex flex-col">
              <div className="h-0.5 w-12 bg-primary mb-8"></div>
              <h3 className="headline-md text-on-surface mb-4">Color Grading</h3>
              <p className="body-md text-on-surface-variant font-light leading-relaxed">
                Frame-by-frame color work that gives your footage a consistent, professional look. We match color profiles across multi-camera shoots and set the visual tone for your brand.
              </p>
            </div>
            
            {/* Visual Effects */}
            <div className="flex flex-col">
              <div className="h-0.5 w-12 bg-primary/40 mb-8"></div>
              <h3 className="headline-md text-on-surface mb-4">Visual Effects</h3>
              <p className="body-md text-on-surface-variant font-light leading-relaxed">
                Compositing, cleanup, and enhancements that blend seamlessly with live footage. Subtle and effective — the audience shouldn&apos;t notice the work.
              </p>
            </div>
            
            {/* Mastering & Delivery */}
            <div className="flex flex-col">
              <div className="h-0.5 w-12 bg-primary/40 mb-8"></div>
              <h3 className="headline-md text-on-surface mb-4">Mastering & Delivery</h3>
              <p className="body-md text-on-surface-variant font-light leading-relaxed">
                Final output optimized for every platform — cinema, broadcast, web, and social. Consistent quality across every screen size and format.
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
    </div>
  );
}
