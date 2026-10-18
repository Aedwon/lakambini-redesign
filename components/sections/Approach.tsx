import Image from "next/image";

interface ApproachItem {
  title: string;
  desc: string;
  img: string;
  alt: string;
}

const approaches: ApproachItem[] = [
  {
    title: "End-to-End Execution",
    desc: "We manage every moving part — from vendor coordination to on-site ops — so nothing falls through the cracks.",
    img: "/images/events/pamigay-caravan-signing.jpg",
    alt: "",
  },
  {
    title: "One Point of Contact",
    desc: "You talk to one team. We handle the rest. No finger-pointing between vendors, no surprises on event day.",
    img: "/images/events/lakambini-crew-onsite.jpg",
    alt: "",
  },
  {
    title: "Built for Repeat Work",
    desc: "We plan every event to hit the brief, on time and on budget, so the next one is an easy yes.",
    img: "/images/events/mcc-s2-crowd-ledwall.jpg",
    alt: "",
  },
];

export default function Approach() {
  return (
    <section className="py-24 md:py-32 overflow-hidden w-full bg-surface">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="label-sm text-primary tracking-[0.4em] uppercase mb-4 block">How We Work</span>
          <h2 className="display-sm tracking-tight text-on-surface">Straightforward. Reliable. Done Right.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {approaches.map((item) => (
            <div key={item.title} className="p-10 md:p-12 overflow-hidden group relative bg-surface-container-high min-h-[360px] flex">
              <Image
                src={item.img}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-40 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-surface via-surface/60 to-surface/20"></div>
              <div className="relative z-10 flex flex-col justify-end">
                <h3 className="headline-sm mb-4 text-on-surface">{item.title}</h3>
                <p className="body-md leading-relaxed text-on-surface">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
