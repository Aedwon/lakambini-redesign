import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-end bg-surface overflow-hidden">
      {/* Real event photo at full strength */}
      <Image
        src="/images/events/mcc-s2-champions-confetti.jpg"
        alt="Champions celebrating under falling confetti at the MCC Season 2 finals"
        fill
        priority
        sizes="100vw"
        className="object-cover z-0"
      />

      {/* Scrims: bottom + left, strong enough for AA text contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-surface/80 via-surface/30 to-transparent" />

      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-16 md:pb-24 pt-36 md:pt-44">
        <div className="max-w-3xl flex flex-col gap-6 md:gap-8 items-start text-left">
          <span className="label-sm text-primary tracking-widest bg-surface-container/70 backdrop-blur-md py-2 px-4 rounded-full">
            Events &amp; Creative Agency · Cavite, Philippines
          </span>
          <h1 className="display-hero text-on-surface font-semibold">
            Events people{" "}
            <span className="gold-gradient-text italic font-medium inline-block pr-[0.15em]">
              line up
            </span>{" "}
            for.
          </h1>
          <p className="body-lg text-on-surface max-w-xl md:text-lg">
            From championship stages to school caravans and mall activations, we plan, build, and run brand experiences for Moonton, OPPO, Infinix and more — one team from brief to strike.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-2">
            <Button variant="primary" href="/contact">
              Book a Discovery Call
            </Button>
            <Button variant="secondary" href="/services">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Photo credit chip */}
      <p className="hidden md:block absolute z-20 bottom-10 right-12 label-xs text-on-surface glassmorphism rounded-full py-2 px-4">
        MCC Season 2 Finals · SM Mall of Asia
      </p>
    </section>
  );
}
