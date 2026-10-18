import type { Metadata } from "next";
import DivisionHero from "@/components/sections/DivisionHero";
import DivisionCrossLinks from "@/components/sections/DivisionCrossLinks";
import CTABanner from "@/components/sections/CTABanner";
import { getDivisionBySlug } from "@/lib/divisions";
import { notFound } from "next/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "GUHIT — Design & Visual Identity",
  description:
    "Graphic design, branding, out-of-home advertising, and illustration — building cohesive visual identities for brands, campaigns, and events alike.",
  openGraph: {
    title: "GUHIT | Lakambini Events",
    description:
      "Graphic design, branding, out-of-home advertising, and illustration — building cohesive visual identities for brands, campaigns, and events alike.",
    url: "/services/guhit",
  },
};

export default function GuhitPage() {
  const division = getDivisionBySlug("guhit");
  if (!division) return notFound();

  return (
    <div className="bg-surface text-on-surface">
      <DivisionHero division={division} />

      {/* Deep-Dive 1: Branding & Logo Creation (2-Column) */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start mb-16">
            <div>
              <h2 className="headline-lg text-on-surface mb-6">Branding Guidelines</h2>
              <p className="body-lg text-on-surface-variant font-light leading-relaxed">
                A brand without rules is a brand without consistency. We create comprehensive visual identity systems — defining your colors, typography, spacing, and usage rules — so your brand looks the same everywhere, every time.
              </p>
            </div>
            <div className="md:pt-12">
              <h2 className="headline-lg text-on-surface mb-6">Logo Creation</h2>
              <p className="body-lg text-on-surface-variant font-light leading-relaxed">
                We design marks that work at every scale — from app icons to building signage. Each logo is built on a clear visual rationale, not trends. Simple and distinctive.
              </p>
            </div>
          </div>
          
          <div className="relative aspect-[21/9] w-full rounded-sm overflow-hidden editorial-shadow group flex items-center justify-center">
            <Image 
              src="/images/events/allstar-2025-banners.jpg"
              alt="Branded banners and backdrops at the MLBB All Star 2025 installation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
                      </div>
        </div>
      </section>

      {/* Deep-Dive 2: Graphic Design & Illustration (Bento Grid) */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="mb-12">
            <h2 className="headline-lg text-on-surface">The Design Studio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Editorial Layouts */}
            <div className="md:col-span-8 bg-surface p-8 md:p-12 flex flex-col justify-end group overflow-hidden relative">
              {/* TODO(client): no real photo yet — needs real or AI-generated editorial/print layout mockups (annual report, event program) */}
              <Image 
                src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop"
                alt="Editorial Layouts"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
              <div className="relative z-10 w-full max-w-lg">
                <h3 className="headline-md text-on-surface mb-3">Editorial Layouts</h3>
                <p className="body-md text-on-surface-variant font-light">
                  Publication design for print and digital — annual reports, event programs, pitch decks, and marketing collateral. Clean layouts that communicate clearly.
                </p>
              </div>
            </div>

            {/* Custom Illustration */}
            <div className="md:col-span-4 bg-surface p-8 flex flex-col justify-end group overflow-hidden relative">
              {/* TODO(client): no real photo yet — needs real or AI-generated custom illustration sample */}
              <Image 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
                alt="Custom Illustration"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="headline-md text-on-surface mb-3">Custom Illustration</h3>
                <p className="body-sm text-on-surface-variant font-light">
                  Hand-crafted digital illustrations for brands that want something beyond stock photography. Character design, iconography, and editorial artwork.
                </p>
              </div>
            </div>

            {/* Systematic Precision */}
            <div className="md:col-span-5 bg-surface-container p-8 md:p-12 flex flex-col justify-end">
              <h3 className="headline-md text-on-surface mb-3">Systematic Precision</h3>
              <p className="body-md text-on-surface-variant font-light">
                Design systems, component libraries, and template frameworks that keep your visual output consistent across teams and campaigns.
              </p>
            </div>
            
            <div className="md:col-span-7 bg-surface overflow-hidden relative group">
                <Image 
                 src="/images/events/allstar-2025-standee.jpg"
                 alt="Branded standee from the MLBB All Star 2025 installation"
                 fill
                 sizes="(max-width: 1024px) 100vw, 50vw"
                 className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
            </div>
          </div>

        </div>
      </section>

      {/* Signature Feature: OOH & Billboard + Color Grading */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* OOH */}
          <div className="flex flex-col">
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden editorial-shadow group mb-10">
              <Image 
                src="/images/events/pamigay-caravan-arch.jpg"
                alt="Branded entrance arch at the MLBB Pamigay Caravan"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <h2 className="headline-lg text-on-surface mb-6">OOH & Billboard Design</h2>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-8">
              Out-of-home advertising designed for the physical world, not the screen. We optimize for high-impact visibility — large format, high contrast, and instant readability at speed.
            </p>
            <ul className="space-y-4">
              {["Large format layout optimization", "High-contrast readability testing", "Environmental context planning (where will this live?)"].map(item => (
                <li key={item} className="flex items-center gap-4 text-on-surface body-md">
                  <span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Color Grading */}
          <div className="flex flex-col lg:translate-y-24">
             <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden editorial-shadow group mb-10">
              {/* TODO(client): no real photo yet — needs real or AI-generated before/after color-grade still */}
              <Image 
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop"
                alt="Color Grading & Correction"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <h2 className="headline-lg text-on-surface mb-6">Color Grading & Correction</h2>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed">
              Consistent color treatment across your photo and video assets. We match color profiles, set tonal direction, and ensure your visual content has a cohesive, professional look.
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
