import DivisionHero from "@/components/sections/DivisionHero";
import DivisionCrossLinks from "@/components/sections/DivisionCrossLinks";
import CTABanner from "@/components/sections/CTABanner";
import { getDivisionBySlug } from "@/lib/divisions";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function GuhitPage() {
  const division = getDivisionBySlug("guhit");
  if (!division) return notFound();

  return (
    <main className="bg-surface text-on-surface">
      <DivisionHero division={division} />

      {/* Deep-Dive 1: Branding & Logo Creation (2-Column) */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start mb-16">
            <div>
              <h2 className="headline-lg text-primary mb-6">Branding Guidelines</h2>
              <p className="body-lg text-on-surface-variant font-light leading-relaxed">
                A brand without rules is a brand without consistency. We create comprehensive visual identity systems — defining your colors, typography, spacing, and usage rules — so your brand looks the same everywhere, every time.
              </p>
            </div>
            <div className="md:pt-12">
              <h2 className="headline-lg text-primary mb-6">Logo Creation</h2>
              <p className="body-lg text-on-surface-variant font-light leading-relaxed">
                We design marks that work at every scale — from app icons to building signage. Each logo is built on a clear visual rationale, not trends. Simple, distinctive, and built to last.
              </p>
            </div>
          </div>
          
          <div className="relative aspect-[21/9] w-full rounded-sm overflow-hidden editorial-shadow group flex items-center justify-center">
            <Image 
              src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=2000&auto=format&fit=crop"
              alt="Brand Guidelines"
              fill
              className="object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-surface/20 mix-blend-multiply"></div>
            <span className="relative z-10 label-sm uppercase tracking-[0.3em] bg-surface/90 text-primary px-8 py-4 backdrop-blur-sm border border-outline-variant/20 italic">
              Every stroke is deliberate.
            </span>
          </div>
        </div>
      </section>

      {/* Deep-Dive 2: Graphic Design & Illustration (Bento Grid) */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="mb-12">
            <h2 className="headline-lg text-primary">The Design Studio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Editorial Layouts */}
            <div className="md:col-span-8 bg-surface border border-outline-variant/20 p-8 md:p-12 flex flex-col justify-end group overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop"
                alt="Editorial Layouts"
                fill
                className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              <div className="relative z-10 w-full max-w-lg">
                <h3 className="headline-md text-on-surface mb-3">Editorial Layouts</h3>
                <p className="body-md text-on-surface-variant font-light">
                  Publication design for print and digital — annual reports, event programs, pitch decks, and marketing collateral. Clean layouts that communicate clearly and look premium.
                </p>
              </div>
            </div>

            {/* Custom Illustration */}
            <div className="md:col-span-4 bg-surface border border-outline-variant/20 p-8 flex flex-col justify-end group overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
                alt="Custom Illustration"
                fill
                className="object-cover opacity-40 transition-transform duration-1000 group-hover:scale-105 mix-blend-luminosity grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              <div className="relative z-10">
                <h3 className="headline-md text-on-surface mb-3">Custom Illustration</h3>
                <p className="body-sm text-on-surface-variant font-light">
                  Hand-crafted digital illustrations for brands that want something beyond stock photography. Character design, iconography, and editorial artwork.
                </p>
              </div>
            </div>

            {/* Systematic Precision */}
            <div className="md:col-span-5 bg-surface-container border border-outline-variant/20 p-8 md:p-12 flex flex-col justify-end">
              <h3 className="headline-md text-primary mb-3">Systematic Precision</h3>
              <p className="body-md text-on-surface-variant font-light">
                Design systems, component libraries, and template frameworks that keep your visual output consistent across teams and campaigns.
              </p>
            </div>
            
            <div className="md:col-span-7 bg-surface overflow-hidden relative border border-outline-variant/20 group">
                <Image 
                 src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop"
                 alt="Systematic Precision"
                 fill
                 className="object-cover opacity-80 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-surface/40 group-hover:bg-transparent transition-colors duration-500"></div>
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
                src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1200&auto=format&fit=crop"
                alt="OOH & Billboard Design"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
            </div>
            <h2 className="headline-lg text-primary mb-6">OOH & Billboard Design</h2>
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
              <Image 
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop"
                alt="Color Grading & Correction"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <h2 className="headline-lg text-primary mb-6">Color Grading & Correction</h2>
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
    </main>
  );
}
