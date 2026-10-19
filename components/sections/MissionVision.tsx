import GoldWave from "@/components/ui/GoldWave";
import Reveal from "@/components/ui/Reveal";

interface Pillar {
  label: string;
  text: string;
}

const pillars: Pillar[] = [
  {
    label: "Mission",
    text: "To elevate the status of women and women at heart within the creatives, marketing, gaming and events industry. We provide a platform for these talented individuals to showcase their expertise, and we offer companies 360-degree creative and marketing strategies with innovative solutions and professionalism.",
  },
  {
    label: "Vision",
    text: "To cultivate enduring client loyalty by consistently exceeding expectations, and to be recognized for our expertise, professionalism and results.",
  },
];

export default function MissionVision() {
  return (
    <section className="relative w-full overflow-hidden bg-forest section-y">
      <GoldWave className="absolute inset-x-0 bottom-0 h-[60%] w-full" opacity={0.35} />

      <div className="relative z-10 container-x flex flex-col gap-20 md:gap-28">
        {pillars.map((p) => (
          <div key={p.label} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <Reveal className="lg:col-span-3">
              <div className="flex items-center gap-4 text-mist">
                <span aria-hidden="true" className="h-px w-10 bg-brass/70" />
                <span className="eyebrow">{p.label}</span>
              </div>
            </Reveal>
            <Reveal delay={0.06} className="lg:col-span-9">
              <p
                className={`${
                  p.label === "Mission" ? "headline-lg" : "display-sm"
                } text-ivory text-balance max-w-[34ch] lg:max-w-[44ch]`}
              >
                {p.text}
              </p>
            </Reveal>
          </div>
        ))}

        <Reveal>
          <p className="body-lg text-mist max-w-[60ch] border-t hairline pt-8 lg:ml-[25%]">
            The name comes from <em className="text-ivory">lakambini</em>, Tagalog for a noble lady
            or muse.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
