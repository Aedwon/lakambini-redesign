import Button from "@/components/ui/Button";
import Image from "next/image";

interface CTABannerProps {
  headline?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  bgImage?: string;
}

export default function CTABanner({
  headline = "Let's talk about your next project.",
  subtitle = "Tell us what you're planning. We'll tell you how we can help.",
  ctaLabel = "Book a Discovery Call",
  ctaHref = "/contact",
  bgImage = "/images/events/mcc-s2-stage.jpg",
}: CTABannerProps) {
  return (
    <section className="w-full bg-surface py-24 md:py-32 relative overflow-hidden group">

      {/* Background Image */}
      <Image
        src={bgImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-40 transition-transform duration-1000 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-surface/70 pointer-events-none z-0"></div>

      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8 relative z-10 px-6 md:px-12">
        <h2 className="headline-lg text-on-surface leading-[1.2]">
          {headline}
        </h2>
        {subtitle && (
          <p className="body-lg text-on-surface max-w-xl">
            {subtitle}
          </p>
        )}
        <div className="pt-4">
          <Button variant="primary" href={ctaHref}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
