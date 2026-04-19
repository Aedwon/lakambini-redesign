import type { Metadata } from "next";
import DivisionHero from "@/components/sections/DivisionHero";
import DivisionCrossLinks from "@/components/sections/DivisionCrossLinks";
import CTABanner from "@/components/sections/CTABanner";
import { getDivisionBySlug } from "@/lib/divisions";
import { notFound } from "next/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "TAYO — Experiential Architecture",
  description:
    "Custom fabrication, spatial design, and large-scale builds — from event stages and exhibition booths to permanent retail spaces and immersive environments.",
  openGraph: {
    title: "TAYO | Lakambini Events",
    description:
      "Custom fabrication, spatial design, and large-scale builds — from event stages and exhibition booths to permanent retail spaces and immersive environments.",
    url: "/services/tayo",
  },
};

export default function TayoPage() {
  const division = getDivisionBySlug("tayo");
  if (!division) return notFound();

  return (
    <div className="bg-surface text-on-surface">
      <DivisionHero division={division} />

      {/* Deep-Dive 1: Stage Design & Fabrication */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <span className="label-sm text-primary tracking-[0.2em] uppercase block mb-4">Stage Design</span>
            <h2 className="headline-lg text-primary mb-8">Stage Design & Fabrication</h2>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-10">
              We design and build stages from scratch. From compact acoustic setups to kinetic festival stages with moving parts — every structure is engineered for safety, visual impact, and practical load-in logistics.
            </p>
            <div className="flex gap-4">
               {["Custom Engineering", "Kinetic Movement"].map(tag => (
                 <span key={tag} className="border border-primary/20 bg-surface-container px-6 py-2 rounded-full label-sm uppercase tracking-widest text-primary/80">{tag}</span>
               ))}
            </div>
          </div>
          <div className="lg:col-span-7 relative aspect-video lg:aspect-[16/10] rounded-sm overflow-hidden editorial-shadow group order-1 lg:order-2">
            <Image 
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2000&auto=format&fit=crop"
              alt="Stage Design & Fabrication"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105 mix-blend-luminosity grayscale group-hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* Deep-Dive 2: Immersive Physical Rooms (Bento Grid) */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="mb-12">
            <h2 className="headline-lg text-primary">Immersive Physical Rooms</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* The Sensory Room */}
            <div className="md:col-span-8 md:row-span-2 bg-surface border border-outline-variant/20 p-8 md:p-12 flex flex-col justify-end group overflow-hidden relative">
              <Image 
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop"
                alt="The Sensory Room"
                fill
                className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
              <div className="relative z-10 w-full max-w-xl">
                <h3 className="headline-md text-on-surface mb-3">The Sensory Room</h3>
                <p className="body-lg text-on-surface-variant font-light leading-relaxed">
                  Complete environmental design. We build rooms that control light, sound, temperature, and even scent — creating fully immersive spaces that transport guests into a different reality.
                </p>
              </div>
            </div>

            {/* Description Panel */}
            <div className="md:col-span-4 bg-surface-container border border-outline-variant/20 p-8 flex flex-col justify-center">
              <p className="body-md text-on-surface-variant font-light leading-relaxed">
                Full environmental control. We design spaces that engage every sense, using acoustics, textures, and atmospheric effects to ground the guest in the moment.
              </p>
            </div>

            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              {/* Acoustic Engineering */}
              <div className="bg-surface border border-outline-variant/20 p-8 flex flex-col justify-end">
                <h3 className="headline-sm text-primary mb-2">Acoustic Engineering</h3>
                <p className="body-sm text-on-surface-variant font-light">Soundscapes designed for intimacy and impact. Custom audio environments tailored to the space.</p>
              </div>

              {/* Scent Design */}
              <div className="bg-surface border border-outline-variant/20 p-8 flex flex-col justify-end">
                <h3 className="headline-sm text-primary mb-2">Scent Design</h3>
                <p className="body-sm text-on-surface-variant font-light">Custom scent profiles integrated into the physical space. A subtle but powerful tool for setting mood.</p>
              </div>
            </div>
            
          </div>

        </div>
      </section>

      {/* Deep-Dive 3: Custom Event Booths & Kiosks */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-6 relative aspect-square lg:aspect-[4/3] rounded-sm overflow-hidden editorial-shadow group">
            <Image 
              src="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1200&auto=format&fit=crop"
              alt="Custom Event Booths"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="label-sm text-primary tracking-[0.2em] uppercase block mb-4">Custom Builds</span>
            <h2 className="headline-lg text-primary mb-8">Custom Event Booths & Kiosks</h2>
            <p className="body-lg text-on-surface-variant font-light leading-relaxed mb-10">
              Modular booth systems designed for rapid assembly without sacrificing quality. We build retail environments and event kiosks that function as standalone architecture — not generic shell schemes.
            </p>
            <ul className="space-y-4">
              {["Modular framing systems", "Hand-finished surfaces", "Integrated smart lighting systems"].map(item => (
                <li key={item} className="flex items-center gap-4 text-on-surface body-md">
                  <span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Signature Feature: Spatial Planning & Installation Art */}
      <section className="py-32 bg-surface-container-lowest border-t border-outline-variant/10 text-center relative overflow-hidden">
        {/* Marble Texture Overlay */}
        <div className="absolute inset-0 marble-texture mix-blend-overlay opacity-10 pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 text-left">
            {/* Spatial Planning */}
            <div className="flex flex-col group">
              <div className="relative aspect-[3/2] w-full mb-10 overflow-hidden mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm editorial-shadow">
                <Image 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                  alt="Spatial Planning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <h2 className="headline-lg text-on-surface mb-6">Spatial Planning</h2>
              <p className="body-lg text-on-surface-variant font-light leading-relaxed">
                We plan how people move through a space. Using human-centric movement patterns, we design floor plans and event layouts that guide traffic flow naturally — no barriers, no bottlenecks.
              </p>
            </div>

            {/* Installation Art */}
            <div className="flex flex-col group lg:mt-24">
              <div className="relative aspect-[3/2] w-full mb-10 overflow-hidden mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm editorial-shadow">
                <Image 
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop"
                  alt="Installation Art"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <h2 className="headline-lg text-on-surface mb-6">Large-Scale Installation Art</h2>
              <p className="body-lg text-on-surface-variant font-light leading-relaxed">
                Physical installations that act as focal points for social interaction and photography. Designed to be visually striking at scale and engineered for structural safety and durability.
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
