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
  headline = "Let's talk about your next event.",
  subtitle = "Tell us what you're planning. We'll tell you how we can help.",
  ctaLabel = "Book a Discovery Call",
  ctaHref = "/contact",
  bgImage = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
}: CTABannerProps) {
  return (
    <section className="w-full bg-surface pt-24 pb-32 relative overflow-hidden group">
      
      {/* Background Image */}
      <Image 
        src={bgImage} 
        alt="CTA Background" 
        fill
        sizes="100vw"
        className="object-cover opacity-10 transition-transform duration-1000 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-surface/80 rounded-none pointer-events-none z-0 mix-blend-overlay"></div>
      
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
