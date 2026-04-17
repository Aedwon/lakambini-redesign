import Button from "@/components/ui/Button";

interface CTABannerProps {
  headline?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CTABanner({
  headline = "Let's talk about your next event.",
  subtitle = "Tell us what you're planning. We'll tell you how we can help.",
  ctaLabel = "Book a Discovery Call",
  ctaHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="w-full bg-surface pt-12 pb-24 relative overflow-hidden">
      
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8 relative z-10 px-12">
        <h2 className="headline-lg text-on-surface leading-[1.2]">
          {headline}
        </h2>
        {subtitle && (
          <p className="body-lg text-on-surface-variant font-light max-w-xl">
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
