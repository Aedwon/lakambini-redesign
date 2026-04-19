import type { Metadata } from "next";
import DivisionHero from "@/components/sections/DivisionHero";
import DivisionCrossLinks from "@/components/sections/DivisionCrossLinks";
import CTABanner from "@/components/sections/CTABanner";
import { getDivisionBySlug } from "@/lib/divisions";
import { notFound } from "next/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "UGNAY — Community Management & Growth",
  description:
    "End-to-end community management, audience development, and influencer partnerships — building and retaining engaged digital communities across any platform.",
  openGraph: {
    title: "UGNAY | Lakambini Events",
    description:
      "End-to-end community management, audience development, and influencer partnerships — building and retaining engaged digital communities across any platform.",
    url: "/services/ugnay",
  },
};

export default function UgnayPage() {
  const division = getDivisionBySlug("ugnay");
  if (!division) return notFound();

  return (
    <div className="bg-surface text-on-surface">
      <DivisionHero division={division} />

      {/* Deep-Dive 1: Grassroots Engagement Programs */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="headline-lg text-primary mb-12">Grassroots Engagement Programs</h2>
            
            <div className="mb-10">
              <h3 className="headline-sm text-on-surface mb-4">Organic Foundations</h3>
              <p className="body-lg text-on-surface-variant font-light leading-relaxed">
                We build direct connections between brands and people — no algorithmic shortcuts. Our grassroots strategies focus on local relevance, cultural authenticity, and real relationships that compound over time.
              </p>
            </div>
            
            <div>
              <h3 className="headline-sm text-on-surface mb-4">Loyalty Architecture</h3>
              <p className="body-lg text-on-surface-variant font-light leading-relaxed">
                Retention programs that reward your earliest and most engaged members. We build frameworks that make loyal community members feel recognized and valued — giving them a reason to stay and advocate.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 relative aspect-[4/3] rounded-sm overflow-hidden editorial-shadow group">
            <Image 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000&auto=format&fit=crop"
              alt="Grassroots Engagement"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Deep-Dive 2: Community Management & Channel Moderation (Bento Grid) */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="mb-12">
            <h2 className="headline-lg text-primary">Community Management</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
             {/* Channel Moderation (tall) */}
            <div className="md:col-span-4 md:row-span-2 bg-surface border border-outline-variant/20 p-8 flex flex-col justify-end group overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop"
                alt="Channel Moderation"
                fill
                className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-90"></div>
              <div className="relative z-10">
                <h3 className="headline-md text-primary mb-3">Channel Moderation</h3>
                <p className="body-md text-on-surface-variant font-light mb-6">
                  24/7 moderation across Discord, Facebook Groups, and other platforms. We don&apos;t just enforce rules — we set the tone for productive, respectful conversation that reflects your brand&apos;s values.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Discord", "Facebook Groups", "Slack", "Custom Platforms"].map(tag => (
                    <span key={tag} className="px-3 py-1 border border-outline-variant/30 rounded-full label-xs text-primary/80 uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Community Management (wide) */}
            <div className="md:col-span-8 md:row-span-2 bg-surface-container border border-outline-variant/20 p-8 md:p-12 flex flex-col justify-end group overflow-hidden relative">
               <Image 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop"
                alt="Community Engagement"
                fill
                className="object-cover opacity-40 transition-transform duration-1000 group-hover:scale-105 mix-blend-luminosity group-hover:mix-blend-normal"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              <div className="relative z-10 w-full max-w-lg">
                <h3 className="headline-md text-on-surface mb-3">Community Management</h3>
                <p className="body-lg text-on-surface-variant font-light leading-relaxed">
                  Active, daily engagement that feels human, not scripted. We respond, facilitate conversations, flag issues, and keep your community spaces healthy and growing.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Signature Feature: Influencer Seeding & Localized Rollouts */}
      <section className="py-24 md:py-32 bg-surface border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* KOL Seeding */}
          <div className="flex flex-col">
            <span className="label-sm text-primary tracking-[0.2em] uppercase block mb-4">KOL Seeding</span>
            <h2 className="headline-md text-on-surface mb-6">The Right Voices, Not the Loudest</h2>
            <div className="relative aspect-video w-full mb-8 rounded-sm overflow-hidden mix-blend-luminosity grayscale">
               <Image 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop"
                alt="Influencer Seeding"
                fill
                className="object-cover"
              />
            </div>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-6">
              We identify and partner with influencers who don&apos;t just have followers — they have credibility. Our seeding approach is selective: we match creators whose audience, values, and content style genuinely align with your brand.
            </p>
            <p className="body-lg text-primary/80 font-light leading-relaxed italic">
              No spray-and-pray. Every partnership is planned, briefed, and measured.
            </p>
          </div>
          
          {/* Localized Rollouts */}
          <div className="flex flex-col lg:pt-32">
            <span className="label-sm text-primary tracking-[0.2em] uppercase block mb-4">Localized Rollouts</span>
            <h2 className="headline-md text-on-surface mb-6">Global Vision, Local Execution</h2>
            <div className="relative aspect-video w-full mb-8 rounded-sm overflow-hidden mix-blend-luminosity grayscale">
               <Image 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                alt="Localized Rollouts"
                fill
                className="object-cover"
              />
            </div>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-8">
              Translating brand messaging into local markets. We handle the cultural nuances of regional community rollouts — ensuring your brand enters new territories with authenticity, not just awareness.
            </p>
            <ul className="space-y-4">
              {["Cultural context mapping", "Regional influencer alignment", "Localized content strategy"].map(item => (
                <li key={item} className="flex items-center gap-4 text-on-surface body-md">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
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
