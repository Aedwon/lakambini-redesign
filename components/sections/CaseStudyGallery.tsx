import Image from "next/image";
import type { PortfolioProject } from "@/lib/portfolioData";
import Reveal from "@/components/ui/Reveal";

interface CaseStudyGalleryProps {
  project: PortfolioProject;
}

type Block = { kind: "full"; idx: number } | { kind: "pair"; idx: [number, number] };

/** Alternate a full-bleed single with a 2-up pair; a lone trailing image goes full. */
function sequence(count: number): Block[] {
  const blocks: Block[] = [];
  let i = 0;
  let full = true;
  while (i < count) {
    if (full || i === count - 1) {
      blocks.push({ kind: "full", idx: i });
      i += 1;
    } else {
      blocks.push({ kind: "pair", idx: [i, i + 1] });
      i += 2;
    }
    full = !full;
  }
  return blocks;
}

export default function CaseStudyGallery({ project }: CaseStudyGalleryProps) {
  const images = project.images;
  if (images.length === 0) return null;
  const total = String(images.length).padStart(2, "0");

  const frame = (i: number, sizes: string, aspect: string) => (
    <figure>
      <div className={`group relative overflow-hidden rounded-[2px] bg-ink-raised ${aspect}`}>
        <Image
          src={images[i]}
          alt={`${project.title}, photo ${i + 1}`}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="numeral mt-3 text-mist">
        {String(i + 1).padStart(2, "0")} / {total}
      </figcaption>
    </figure>
  );

  return (
    <section className="bg-ink-raised pb-24 pt-20 md:pb-36 md:pt-28" aria-label={`${project.title} gallery`}>
      <div className="flex flex-col gap-14 md:gap-24">
        {sequence(images.length).map((b) =>
          b.kind === "full" ? (
            <Reveal key={b.idx} y={32}>
              {frame(b.idx, "100vw", "aspect-[4/3] md:aspect-[21/9]")}
            </Reveal>
          ) : (
            <div key={b.idx[0]} className="container-x grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-8">
              {b.idx.map((i, n) => (
                <Reveal key={i} delay={n * 0.1} y={32}>
                  {frame(i, "(max-width: 768px) 100vw, 50vw", "aspect-[4/3] md:aspect-[4/5]")}
                </Reveal>
              ))}
            </div>
          )
        )}
      </div>
    </section>
  );
}
