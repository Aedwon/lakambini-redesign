import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import type { DivisionData } from "@/lib/divisions";

interface DivisionHeroProps {
  division: DivisionData;
  intro: string;
  total?: number;
}

export default function DivisionHero({ division, intro, total = 9 }: DivisionHeroProps) {
  return (
    <section className="relative w-full bg-ink pt-40 md:pt-52 pb-16 md:pb-24">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
        <div className="lg:col-span-7 order-1">
          <Reveal>
            <p className="eyebrow text-mist flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-brass/70" />
              Division {division.id} / {String(total).padStart(2, "0")}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="display-hero text-ivory mt-8 md:mt-10">{division.name}</h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="display-sm italic text-mist mt-6 md:mt-8 text-balance">{division.subtitle}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="body-lg text-ivory/80 mt-10 md:mt-12 max-w-[56ch]">{intro}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-5 order-2">
          <figure className="group relative aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-ink-raised">
            <Image
              src={division.heroImage}
              alt={`${division.name}, ${division.subtitle}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
