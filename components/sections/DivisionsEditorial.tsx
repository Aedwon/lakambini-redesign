import Image from "next/image";
import Link from "next/link";
import { divisions, type DivisionData } from "@/lib/divisions";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4";

const bySlug = (slug: string): DivisionData => {
  const d = divisions.find((x) => x.slug === slug);
  if (!d) throw new Error(`Unknown division: ${slug}`);
  return d;
};

interface PartProps {
  d: DivisionData;
  compact?: boolean;
  align?: "left" | "right";
}

const Chips = ({ d, compact, align = "left" }: PartProps) => (
  <ul className={`flex flex-wrap ${compact ? "gap-2" : "gap-3"} ${align === "right" ? "md:justify-end" : ""}`}>
    {d.capabilities.map((t) => (
      <li
        key={t}
        className={`${compact ? "px-3" : "px-4"} py-1 bg-surface-container-high rounded-full label-md text-on-surface`}
      >
        {t}
      </li>
    ))}
  </ul>
);

const LearnMore = ({ d }: { d: DivisionData }) => (
  <Link
    href={`/services/${d.slug}`}
    className={`inline-flex items-center gap-1.5 label-md text-primary hover:text-on-surface transition-colors duration-300 group/learn ${focusRing}`}
  >
    Learn more about {d.name}
    <svg className="w-3 h-3 transition-transform duration-300 group-hover/learn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </Link>
);

const Photo = ({ d, sizes, aspect }: { d: DivisionData; sizes: string; aspect: string }) => (
  <Link
    href={`/services/${d.slug}`}
    tabIndex={-1}
    aria-hidden="true"
    className={`relative block overflow-hidden group ${aspect}`}
  >
    <Image
      src={d.cardImage}
      alt=""
      fill
      sizes={sizes}
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    />
  </Link>
);

const Text = ({ d, large, align = "left" }: { d: DivisionData; large?: boolean; align?: "left" | "right" }) => (
  <div className={`flex flex-col ${align === "right" ? "md:items-end md:text-right" : "items-start text-left"}`}>
    <span className="headline-sm text-primary block mb-4">{d.id}</span>
    <h2 className={`${large ? "headline-lg" : "headline-md"} text-on-surface mb-4`}>{d.name}</h2>
    <p className="label-sm text-on-surface-variant mb-4">{d.subtitle}</p>
    <p className={`${large ? "body-lg" : "body-md"} text-on-surface-variant leading-relaxed mb-6 max-w-[65ch]`}>
      {d.description}
    </p>
    <div className="mb-6">
      <Chips d={d} compact={!large} align={align} />
    </div>
    <LearnMore d={d} />
  </div>
);

const Feature = ({ slug, flip, span = [7, 5], aspect = "aspect-[16/9]" }: { slug: string; flip?: boolean; span?: [number, number]; aspect?: string }) => {
  const d = bySlug(slug);
  const cols: Record<number, string> = { 5: "md:col-span-5", 6: "md:col-span-6", 7: "md:col-span-7" };
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
      <div className={`${cols[span[0]]} ${flip ? "md:order-2" : ""}`}>
        <Photo d={d} aspect={aspect} sizes={`(max-width: 768px) 100vw, ${Math.round((span[0] / 12) * 100)}vw`} />
      </div>
      <div className={`${cols[span[1]]} ${flip ? "md:order-1" : ""}`}>
        <Text d={d} large align={flip ? "right" : "left"} />
      </div>
    </div>
  );
};

const Card = ({ slug, offset }: { slug: string; offset?: string }) => {
  const d = bySlug(slug);
  return (
    <div className={`bg-surface-container-low p-8 md:p-12 flex flex-col h-full ${offset ?? ""}`}>
      <Text d={d} />
      <div className="mt-auto pt-8">
        <Photo d={d} aspect="aspect-[16/9]" sizes="(max-width: 768px) 100vw, 45vw" />
      </div>
    </div>
  );
};

const Column = ({ slug, offset }: { slug: string; offset?: string }) => {
  const d = bySlug(slug);
  return (
    <div className={`flex flex-col ${offset ?? ""}`}>
      <Text d={d} />
      <div className="mt-auto pt-8">
        <Photo d={d} aspect="aspect-square" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
    </div>
  );
};

export default function DivisionsEditorial() {
  return (
    <section className="px-6 md:px-12 max-w-[1440px] mx-auto space-y-24 md:space-y-32 pb-24 md:pb-32 text-on-surface w-full">
      <Feature slug="tanghal" />
      <Feature slug="likha" flip span={[7, 5]} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <Card slug="merkato" />
        <Card slug="tipon" offset="md:mt-24" />
      </div>
      <Feature slug="sibol" span={[6, 6]} aspect="aspect-[3/2]" />
      <Feature slug="guhit" flip span={[6, 6]} aspect="aspect-[3/2]" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-stretch">
        <Column slug="ugnay" />
        <Column slug="daloy" offset="md:mt-16" />
        <Column slug="tayo" offset="md:mt-32" />
      </div>
    </section>
  );
}
