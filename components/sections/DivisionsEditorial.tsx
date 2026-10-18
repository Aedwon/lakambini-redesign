import Image from "next/image";
import Link from "next/link";
import { divisions } from "@/lib/divisions";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

/** Editorial catalogue: nine large alternating rows, image 7 cols / text 5. */
export default function DivisionsEditorial() {
  return (
    <section className="bg-ink section-y">
      <div className="container-x flex flex-col gap-24 md:gap-40">
        {divisions.map((d, i) => {
          const flip = i % 2 === 1;
          return (
            <article key={d.slug} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
              <Reveal y={40} className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
                <Link
                  href={`/services/${d.slug}`}
                  aria-label={`Explore ${d.name}`}
                  tabIndex={-1}
                  className="group relative block aspect-[4/3] md:aspect-[5/4] overflow-hidden rounded-[2px] bg-ink-raised"
                >
                  <Image
                    src={d.cardImage}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </Link>
              </Reveal>

              <Reveal delay={0.1} className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
                <div className="flex items-center gap-4 text-mist">
                  <span className="numeral text-brass">{d.id}</span>
                  <span aria-hidden="true" className="h-px w-10 bg-line" />
                  <span className="eyebrow">Division {d.id} / 09</span>
                </div>
                <h2 className="display-md text-ivory mt-6">{d.name}</h2>
                <p className="headline-sm italic text-mist mt-3">{d.subtitle}</p>
                <p className="body-md text-ivory/80 mt-6 max-w-[48ch]">{d.description}</p>
                <p className="numeral text-mist mt-8 leading-relaxed max-w-[48ch]">
                  {d.capabilities.join(", ")}
                </p>
                <div className="mt-10">
                  <Button variant="tertiary" href={`/services/${d.slug}`}>
                    Explore {d.name}
                  </Button>
                </div>
              </Reveal>
            </article>
          );
        })}
      </div>
    </section>
  );
}
