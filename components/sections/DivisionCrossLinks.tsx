import Link from "next/link";
import { divisions } from "@/lib/divisions";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

interface DivisionCrossLinksProps {
  currentSlug: string;
  index?: string;
}

export default function DivisionCrossLinks({ currentSlug, index }: DivisionCrossLinksProps) {
  const others = divisions.filter((d) => d.slug !== currentSlug);

  return (
    <section className="bg-ink-raised section-y">
      <div className="container-x">
        <SectionHeader
          index={index}
          label="Divisions"
          title={
            <>
              Explore other <em>divisions</em>
            </>
          }
        />
        <ul className="border-b hairline">
          {others.map((d, i) => (
            <Reveal key={d.slug} as="li" delay={Math.min(i, 5) * 0.04} className="border-t hairline">
              <Link
                href={`/services/${d.slug}`}
                className="group grid grid-cols-[2.5rem_1fr] md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1fr)_2rem] items-baseline gap-x-4 gap-y-1 py-6 md:py-8"
              >
                <span className="numeral text-brass">{d.id}</span>
                <span className="headline-lg text-ivory transition-colors duration-500 group-hover:text-brass-soft">
                  {d.name}
                </span>
                <span className="col-start-2 md:col-start-auto body-md italic text-mist">{d.subtitle}</span>
                <span
                  aria-hidden="true"
                  className="hidden md:block text-mist transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1 group-hover:text-brass"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
