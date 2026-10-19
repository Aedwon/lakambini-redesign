import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function FounderStory() {
  return (
    <section className="w-full bg-ink section-y">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* Portrait */}
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-raised">
              <Image
                src="/images/anchie-rosas.jpg"
                alt="Anchie Rosas, Founder and CEO of Lakambini"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="numeral mt-4 text-mist">Anchie Rosas, Founder</p>
          </Reveal>

          {/* Text */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <Reveal>
              <div className="flex items-center gap-4 text-mist">
                <span aria-hidden="true" className="h-px w-10 bg-brass/70" />
                <span className="eyebrow">Founder, CEO &amp; Creative Director</span>
              </div>
              <h2 className="display-md text-ivory text-balance mt-8">Anchie Rosas</h2>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="body-lg text-mist max-w-[60ch]">
                As Founder, CEO and Creative Director of Lakambini, Anchie Rosas brings over 10
                years of experience in top corporate environments to event production. She is also
                recognized as a BNI Master Connector for her work building business relationships
                across her network.
              </p>
            </Reveal>

            {/* Company principle (not a personal quote) */}
            <Reveal delay={0.05}>
              <div className="border-y hairline py-10 md:py-14">
                <p className="eyebrow text-brass mb-6">What we believe</p>
                <p className="display-sm text-ivory text-balance">
                  The LAKAMBINI client values their guests&apos; experience as much as their own peace
                  of mind. We exist to be the team that makes that possible.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="body-lg text-mist max-w-[60ch]">
                From multinational corporate summits to intimate high-end celebrations, her approach is
                strategic and driven by a passion for exceeding expectations.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
