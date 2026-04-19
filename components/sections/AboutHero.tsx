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
              Over a Decade of Experience
            </span>
            <h1 className="display-lg text-on-surface font-extrabold tracking-tighter leading-[1.0] lg:leading-[0.95] mb-10 max-w-2xl">
              The <span className="gold-gradient-text italic font-medium inline-block pr-[0.1em]">Lakambini</span> Legacy
            </h1>
            <p className="body-lg text-on-surface/80 font-light leading-relaxed max-w-xl">
              Since 2014, we have delivered high-stakes event productions for the world&apos;s most discerning clients. We don&apos;t just plan — we create enduring experiences with precision and reliability.
            </p>
          </div>

          {/* Image Column */}
          <div className="md:col-span-5 relative h-[500px] md:h-[600px] group overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
              alt="Luxury gala event production"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
