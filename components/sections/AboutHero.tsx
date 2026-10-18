import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="w-full hero-gradient relative overflow-hidden">
      {/* Marble Texture Overlay */}
      <div className="absolute inset-0 marble-texture pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-40 pb-24 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-end">
          
          {/* Text Column */}
          <div className="md:col-span-7">
            <span className="label-sm text-primary tracking-[0.4em] uppercase mb-8 block font-medium">
              Full-Service Event Production
            </span>
            <h1 className="display-lg text-on-surface font-bold tracking-tighter leading-[1.0] lg:leading-[0.95] mb-10 max-w-2xl">
              The Lakambini Story
            </h1>
            <p className="body-lg text-on-surface/80 font-light leading-relaxed max-w-xl">
              We produce events, activations, and fan experiences with precision and reliability. We don&apos;t just plan — we build experiences from the first brief to the final strike.
            </p>
          </div>

          {/* Image Column */}
          <div className="md:col-span-5 relative h-[500px] md:h-[600px] group overflow-hidden">
            <Image 
              src="/images/events/mcc-s2-team-celebration.jpg"
              alt="Players celebrating on stage at the MCC Season 2 finals"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
                      </div>

        </div>
      </div>
    </section>
  );
}
