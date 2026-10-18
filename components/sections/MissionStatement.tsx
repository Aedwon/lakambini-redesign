import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import GoldWave from "@/components/ui/GoldWave";

export default function MissionStatement() {
  return (
    <section className="section-y relative overflow-hidden bg-forest">
      <GoldWave
        opacity={0.28}
        className="absolute inset-x-0 bottom-0 h-[60%] w-full"
      />
      <div className="container-x relative grid grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-16 lg:gap-24">
        <Reveal as="figure" className="md:col-span-5 lg:col-span-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-none bg-ink-raised">
            <Image
              src="/images/anchie-rosas.jpg"
              alt="Anchie Rosas, Founder and CEO of Lakambini"
              fill
              sizes="(min-width: 1024px) 28vw, (min-width: 768px) 40vw, 92vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 flex items-center gap-4 text-mist">
            <span className="numeral text-brass">05</span>
            <span aria-hidden="true" className="h-px w-8 bg-line" />
            <span className="label-xs">Founded by Anchie Rosas</span>
          </figcaption>
        </Reveal>

        <div className="flex flex-col gap-8 md:col-span-7 lg:col-span-7 lg:col-start-6">
          <Reveal>
            <div className="flex items-center gap-4 text-mist">
              <span className="numeral text-brass">05</span>
              <span aria-hidden="true" className="h-px w-10 bg-ivory/20" />
              <span className="eyebrow">Why we exist</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="display-sm text-ivory text-balance [&_em]:italic [&_em]:text-brass">
              Lakambini exists to elevate <em>women and women at heart</em> in the creative, marketing,
              gaming, and events industry.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-lg max-w-[56ch] text-ivory/75">
              <em>Lakambini</em> is Tagalog for a noble lady, or a muse. Established in January 2024 by
              professionals with over a decade of experience each.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <Button variant="tertiary" href="/about">
              Our story
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
