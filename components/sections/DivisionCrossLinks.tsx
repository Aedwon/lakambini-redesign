import Link from "next/link";
import { divisions } from "@/lib/divisions";

interface DivisionCrossLinksProps {
  currentSlug: string;
}

export default function DivisionCrossLinks({ currentSlug }: DivisionCrossLinksProps) {
  const otherDivisions = divisions.filter(d => d.slug !== currentSlug);

  return (
    <section className="py-24 md:py-32 bg-surface-container-low overflow-hidden relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <h2 className="label-sm text-primary tracking-[0.2em] uppercase">Explore Other Divisions</h2>
      </div>
      
      {/* Scrollable track */}
      <div className="flex overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-6 md:px-12 snap-x snap-mandatory">
        <div className="flex gap-4 md:gap-6 min-w-max">
          {otherDivisions.map((division) => (
            <Link 
              key={division.id} 
              href={`/services/${division.slug}`}
              className="group snap-start scroll-ml-6 md:scroll-ml-12 w-[280px] md:w-[320px] bg-surface-container hover:bg-surface-container-high p-8 transition-all duration-300 flex flex-col h-[200px] md:h-[240px] relative overflow-hidden focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
            >

              <div className="relative z-10">
                <span className="headline-sm text-primary font-bold block mb-4">
                  {division.id}
                </span>
                <h3 className="headline-md text-on-surface mb-2">
                  {division.name}
                </h3>
                <p className="label-sm text-on-surface-variant">
                  {division.subtitle}
                </p>
              </div>
              
              <div className="flex items-center gap-2 mt-auto text-primary relative z-10">
                <span className="label-sm uppercase tracking-widest">Explore</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
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
