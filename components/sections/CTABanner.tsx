import Image from "next/image";
import Button from "@/components/ui/Button";
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
    <section className="relative flex min-h-[64vh] w-full items-end overflow-hidden bg-ink-deep">
      <Image src={bgImage} alt="" fill sizes="100vw" className="object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/45" />
      <div aria-hidden="true" className="absolute inset-0 scrim-left" />
      {/* Fade into the footer so the band and footer read as one closing scene */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-deep/40 to-ink-deep" />

      <div className="container-x relative z-10 grid grid-cols-1 items-end gap-10 pb-16 pt-40 md:pb-24 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-8">
          <h2 className="display-lg max-w-[16ch] text-balance text-ivory">{headline}</h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-4 lg:pb-3">
          <div className="flex flex-col items-start gap-8">
            {subtitle && <p className="body-md max-w-[42ch] text-ivory/80">{subtitle}</p>}
            <Button variant="primary" size="lg" href={ctaHref}>
              {ctaText ?? ctaLabel ?? "Book a Discovery Call"}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
