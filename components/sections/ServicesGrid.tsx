import Image from "next/image";
import Button from "@/components/ui/Button";

const divisions = [
  {
    num: "01",
    name: "TANGHAL",
    desc: "Live Entertainment & Talent",
    detail: "Concerts, festivals, and live performances — from solo artists to full-scale music events.",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1000&auto=format&fit=crop",
    size: "col-span-12 md:col-span-7 row-span-2",
  },
  {
    num: "02",
    name: "LIKHA",
    desc: "Multimedia Production",
    detail: "Video production, motion graphics, and sound design for events and campaigns.",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop",
    size: "col-span-12 md:col-span-5 row-span-1",
  },
  {
    num: "03",
    name: "MERKATO",
    desc: "Experiential Marketing",
    detail: "Pop-ups, product sampling, street teams, and brand activations that drive real engagement.",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop",
    size: "col-span-12 md:col-span-5 row-span-1",
  },
  {
    num: "04",
    name: "TAYO",
    desc: "Experiential Architecture",
    detail: "Stage design, immersive rooms, custom booths, and large-scale installation art.",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop",
    size: "col-span-12 md:col-span-7 row-span-1",
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full bg-surface-container-lowest py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full flex flex-col gap-12">
        <div className="flex flex-col gap-4 max-w-2xl">
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

        {/* Bento Grid — 4 featured divisions */}
        <div className="grid grid-cols-12 auto-rows-[260px] md:auto-rows-[300px] gap-4 md:gap-6">
          {divisions.map((div) => (
            <div
              key={div.num}
              className={`relative group overflow-hidden bg-surface-container-highest cursor-pointer ${div.size}`}
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
                <span className="headline-sm font-bold text-primary/30 mb-2">{div.num}</span>
                <h3 className="title-lg text-on-surface font-semibold mb-1 group-hover:text-primary transition-colors duration-300">{div.name}</h3>
                <p className="label-sm text-on-surface-variant uppercase tracking-widest mb-3">{div.desc}</p>
                <p className="body-sm text-on-surface/70 font-light max-w-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">{div.detail}</p>
              </div>
            </div>
          ))}
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
