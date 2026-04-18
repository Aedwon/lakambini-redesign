import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-end bg-surface overflow-hidden">
      {/* Full-bleed Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop"
        alt="Packed live event with dramatic stage lighting"
        fill
        priority
        sizes="100vw"
        className="object-cover z-0"
      />

      {/* Gradient Overlay — strong from bottom for text legibility */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface via-surface/70 to-transparent" />

      {/* Subtle secondary gradient for top-right ambient warmth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-transparent via-transparent to-primary/10 pointer-events-none" />

      {/* Bottom-left anchored content */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-16 md:pb-24 pt-40 flex flex-col gap-8 items-start">
        <span className="label-sm text-primary uppercase tracking-widest bg-surface-container/60 backdrop-blur-md py-2 px-4 rounded-full border border-outline-variant/20">
          Full-Service Event Production
        </span>
        <h1 className="display-lg text-on-surface leading-[1.05] font-extrabold max-w-4xl">
          We turn bold ideas into <br />
          <span className="gold-gradient-text italic font-medium">exceptional</span> event experiences.
        </h1>
        <p className="body-lg text-on-surface/80 max-w-xl font-light">
          From concept to execution — we plan, produce, and deliver events that make an impact.
        </p>
        <div className="flex flex-wrap items-center gap-6 mt-2">
          <Button variant="primary" href="/contact">
            Book a Discovery Call
          </Button>
          <Button variant="secondary" href="/services">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
