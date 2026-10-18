import Image from "next/image";
import Button from "@/components/ui/Button";
import GoldWave from "@/components/ui/GoldWave";
import Reveal from "@/components/ui/Reveal";

interface CTABannerProps {
  headline?: string;
  subtitle?: string;
  ctaLabel?: string;
  /** Alias of ctaLabel */
  ctaText?: string;
  ctaHref?: string;
  bgImage?: string;
}

/** Full-bleed cinematic closing band. */
export default function CTABanner({
  headline = "Let's talk about your next project.",
  subtitle = "Tell us what you're planning. We'll tell you how we can help.",
  ctaLabel,
  ctaText,
  ctaHref = "/contact",
  bgImage = "/images/events/mcc-s2-crowd-ledwall.jpg",
}: CTABannerProps) {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center overflow-hidden bg-ink">
      <Image src={bgImage} alt="" fill sizes="100vw" className="object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/45" />
      <div aria-hidden="true" className="absolute inset-0 scrim-left" />
      <div aria-hidden="true" className="absolute inset-0 scrim-bottom" />
      <GoldWave opacity={0.3} className="absolute inset-x-0 bottom-0 h-1/2 w-full opacity-60" />

      <div className="container-x section-y relative z-10">
        <Reveal>
          <h2 className="display-lg max-w-[16ch] text-balance text-ivory">{headline}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-start gap-8">
            {subtitle && <p className="body-lg max-w-[52ch] text-ivory/80">{subtitle}</p>}
            <Button variant="primary" size="lg" href={ctaHref}>
              {ctaText ?? ctaLabel ?? "Book a Discovery Call"}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
