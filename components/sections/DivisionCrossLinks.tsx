import Link from "next/link";
import { divisions } from "@/lib/divisions";

interface DivisionCrossLinksProps {
  currentSlug: string;
}

export default function DivisionCrossLinks({ currentSlug }: DivisionCrossLinksProps) {
  const otherDivisions = divisions.filter(d => d.slug !== currentSlug);

  return (
    <section className="py-24 bg-surface overflow-hidden border-t border-outline-variant/20 relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-8">
        <h2 className="label-sm text-primary tracking-[0.2em] uppercase">Explore Other Divisions</h2>
      </div>
      
      {/* Scrollable track */}
      <div className="flex overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-6 md:px-12 snap-x snap-mandatory">
        <div className="flex gap-4 md:gap-6 min-w-max">
          {otherDivisions.map((division) => (
            <Link 
              key={division.id} 
              href={`/services/${division.slug}`}
              className="group snap-start scroll-ml-6 md:scroll-ml-12 w-[280px] md:w-[320px] border border-outline-variant/30 bg-surface-container-low hover:bg-surface-container hover:border-primary/40 p-8 transition-all duration-300 flex flex-col h-[200px] md:h-[240px] relative overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10">
                <span className="headline-sm text-primary/40 font-bold block mb-4 transition-colors duration-300 group-hover:text-primary">
                  {division.id}
                </span>
                <h3 className="headline-md text-on-surface mb-2 transition-colors duration-300 group-hover:text-primary">
                  {division.name}
                </h3>
                <p className="label-sm text-on-surface-variant">
                  {division.subtitle}
                </p>
              </div>
              
              <div className="flex items-center gap-2 mt-auto text-primary opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 relative z-10">
                <span className="label-sm uppercase tracking-widest">Explore</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
