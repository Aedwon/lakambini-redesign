import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

interface Frame {
  src: string;
  alt: string;
  caption: string;
  sizes: string;
  frame: string;
  wrap: string;
}

const frames: Frame[] = [
  {
    src: "/images/events/mlbb-naruto-ramen-stall.jpg",
    alt: "Fabricated ramen stall built for the MLBB x Naruto activation",
    caption: "01 · MLBB × NARUTO, fabricated ramen stall",
    sizes: "(max-width: 768px) 100vw, 60vw",
    frame: "aspect-[4/3] md:aspect-[5/4]",
    wrap: "md:col-span-7",
  },
  {
    src: "/images/events/m6-watchfest-screen.jpg",
    alt: "Fans watching the M6 World Championship at a mall watch party",
    caption: "02 · M6 watch party, mall screening",
    sizes: "(max-width: 768px) 100vw, 33vw",
    frame: "aspect-[4/3] md:aspect-[4/5]",
    wrap: "md:col-span-4 md:col-start-9 md:mt-24",
  },
  {
    src: "/images/events/team-building-facilitator.jpg",
    alt: "Lakambini facilitator leading a team-building session",
    caption: "03 · Team-building session",
    sizes: "(max-width: 768px) 100vw, 40vw",
    frame: "aspect-[4/3]",
    wrap: "md:col-span-5 md:col-start-3 md:mt-16",
  },
];

export default function EditorialGallery() {
  return (
    <section className="w-full bg-ink section-y">
      <div className="container-x">
        <SectionHeader
          label="Our work"
          title={
            <>
              Moments that <em>define us.</em>
            </>
          }
          aside="Recent builds and activations, from mall booths to championship stages."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 md:gap-y-0">
          {frames.map((f, i) => (
            <Reveal as="figure" key={f.src} delay={i * 0.06} className={f.wrap}>
              <div className={`group relative w-full overflow-hidden bg-ink-raised ${f.frame}`}>
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes={f.sizes}
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="numeral mt-4 text-mist">{f.caption}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
