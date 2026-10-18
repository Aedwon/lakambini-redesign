import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function AboutHero() {
  return (
    <section className="w-full bg-ink">
      <div className="container-x pt-40 md:pt-52 pb-14 md:pb-20">
        <Reveal>
          <p className="eyebrow text-mist">
            <span className="text-brass">·</span>&nbsp; About
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <Reveal delay={0.05} className="lg:col-span-8">
            <h1 className="display-hero text-ivory text-balance">
              The Lakambini <em className="italic text-brass">story.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-4 lg:pb-3">
            <p className="body-lg text-mist max-w-[46ch]">
              We produce events, activations and fan experiences with precision and reliability.
            </p>
          </Reveal>
        </div>
      </div>

      <figure className="w-full">
        <div className="group relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-ink-raised">
          <Image
            src="/images/events/mcc-s2-team-celebration.jpg"
            alt="Players celebrating on stage at the MCC Season 2 finals"
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />
        </div>
        <figcaption className="container-x mt-4 flex justify-between gap-6 text-mist">
          <span className="numeral">MLBB Collegiate Cup, Season 2 finals</span>
          <span className="numeral hidden sm:inline">Est. January 2024</span>
        </figcaption>
      </figure>
    </section>
  );
}
