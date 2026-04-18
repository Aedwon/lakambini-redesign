import Image from "next/image";
import type { DivisionData } from "@/lib/divisions";

interface DivisionHeroProps {
  division: DivisionData;
}

export default function DivisionHero({ division }: DivisionHeroProps) {
  return (
    <section className="w-full hero-gradient relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12">
      {/* Marble Texture Overlay */}
      <div className="absolute inset-0 marble-texture pointer-events-none mix-blend-overlay"></div>
      
      {/* Decorative Text Watermark */}
      <div 
        className="absolute right-0 sm:right-12 lg:right-24 top-[30%] -translate-y-1/2 font-headline font-bold text-primary opacity-[0.03] pointer-events-none select-none"
        style={{ fontSize: "clamp(12rem, 25vw, 25rem)", lineHeight: 1 }}
        aria-hidden="true"
      >
        {division.name}
      </div>
      
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          <span className="label-sm text-primary tracking-[0.3em] uppercase mb-6 block">
            {division.id}
          </span>
          <h1 className="display-lg text-on-surface font-extrabold tracking-tighter leading-[1.0] lg:leading-[0.9] mb-4">
            {division.name}
          </h1>
          <h2 className="headline-sm italic text-primary/90 font-light mb-8">
            {division.subtitle}
          </h2>
          <p className="body-lg text-on-surface-variant font-light leading-relaxed max-w-xl mb-10">
            {division.description}
          </p>
          <ul className="flex flex-wrap gap-3">
            {division.capabilities.map((t) => (
              <li key={t} className="px-4 py-1.5 border border-outline-variant/30 rounded-full label-sm text-primary/80">
                {t}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="lg:col-span-5 w-full flex justify-end">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl editorial-shadow group">
            <Image
              src={division.heroImage}
              alt={`${division.name} - ${division.subtitle}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-90 transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
