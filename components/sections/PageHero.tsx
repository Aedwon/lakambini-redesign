import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

interface PageHeroProps {
  overline: string;
  title: React.ReactNode;
  subtitle?: string;
  /** Accepted for backwards compatibility; no longer rendered. */
  decorativeText?: string;
  bgImage?: string;
}

/** Editorial page opener: type first, then a full-bleed image below like a magazine spread. */
export default function PageHero({ overline, title, subtitle, bgImage }: PageHeroProps) {
  return (
    <section className="w-full bg-ink">
      <div className="container-x pb-16 pt-40 md:pt-52">
        <Reveal>
          <p className="eyebrow mb-8 flex items-center gap-4 text-mist">
            <span aria-hidden="true" className="h-px w-10 bg-brass" />
            {overline}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="display-lg max-w-[18ch] text-balance text-ivory [&_em]:italic [&_em]:text-brass">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.14}>
            <p className="body-lg mt-10 max-w-[52ch] text-mist">{subtitle}</p>
          </Reveal>
        )}
      </div>

      {bgImage && (
        <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[21/9]">
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}
    </section>
  );
}
