import Image from "next/image";
import Button from "@/components/ui/Button";

const divisions = [
  {
    num: "01",
    name: "TANGHAL",
    desc: "Live Entertainment & Talent",
    detail: "Concerts, festivals, and live performances — from solo artists to full-scale music events.",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "02",
    name: "LIKHA",
    desc: "Multimedia Production",
    detail: "Video production, motion graphics, and sound design — for brands, campaigns, and live events.",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "03",
    name: "MERKATO",
    desc: "Experiential Marketing",
    detail: "Pop-ups, product sampling, street teams, and direct-to-consumer activations that drive real engagement.",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "04",
    name: "TAYO",
    desc: "Experiential Architecture",
    detail: "Custom fabrication and spatial design — from event stages to permanent installations and immersive environments.",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop",
  },
];

function DivisionCard({
  div,
  className = "",
}: {
  div: (typeof divisions)[number];
  className?: string;
}) {
  return (
    <div
      className={`relative group overflow-hidden bg-surface-container-highest cursor-pointer ${className}`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={div.img}
          alt={div.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-50 transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface-dim/95 via-surface-dim/40 to-transparent" />

      <div className="relative z-20 h-full w-full p-8 md:p-10 flex flex-col justify-end">
        <h3 className="title-lg text-on-surface font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
          {div.name}
        </h3>
        <p className="label-sm text-on-surface-variant uppercase tracking-widest mb-3">
          {div.desc}
        </p>
        <p className="body-sm text-on-surface/70 font-light max-w-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          {div.detail}
        </p>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="w-full bg-surface-container-lowest py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full flex flex-col gap-12">
        <div className="flex flex-col gap-4 max-w-2xl ml-auto text-right">
          <span className="label-sm text-primary uppercase tracking-widest">
            Our Capabilities
          </span>
          <h2 className="headline-lg text-on-surface leading-[1.2]">
            Everything you need, under <span className="text-primary italic">one roof.</span>
          </h2>
          <p className="body-lg text-on-surface-variant font-light">
            Four of our nine specialized divisions — each built to handle a different dimension of event production.
          </p>
        </div>

        {/* Bento Grid — asymmetric layout with no gaps between stacked cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Left column — tall hero card */}
          <DivisionCard
            div={divisions[0]}
            className="col-span-1 md:col-span-7 min-h-[280px] md:min-h-[620px]"
          />

          {/* Right column — two cards stacked with no leftover gap */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-4 md:gap-6">
            <DivisionCard
              div={divisions[1]}
              className="flex-1 min-h-[240px]"
            />
            <DivisionCard
              div={divisions[2]}
              className="flex-1 min-h-[240px]"
            />
          </div>

          {/* Bottom row — full width card */}
          <DivisionCard
            div={divisions[3]}
            className="col-span-1 md:col-span-12 min-h-[260px] md:min-h-[320px]"
          />
        </div>

        {/* CTA to full services page */}
        <div className="flex justify-center pt-4">
          <Button variant="secondary" href="/services">
            Explore All 9 Divisions
          </Button>
        </div>
      </div>
    </section>
  );
}
