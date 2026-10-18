interface Pillar {
  label: string;
  text: string;
}

const pillars: Pillar[] = [
  {
    label: "Mission",
    text: "To elevate the status of women and women at heart within the creatives, marketing, gaming and events industry. We provide a platform for these talented individuals to showcase their expertise and contribute meaningfully to the field, and we offer companies comprehensive 360-degree creative and marketing strategies, addressing their challenges with innovative solutions and unparalleled professionalism.",
  },
  {
    label: "Vision",
    text: "To cultivate enduring loyalty with our clients by consistently exceeding their expectations, and to be recognized for our expertise, professionalism, and ability to deliver results.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-surface py-24 md:py-32 w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {pillars.map((p) => (
            <div key={p.label} className="flex flex-col gap-6">
              <span className="label-sm text-primary tracking-widest uppercase">{p.label}</span>
              <p className="headline-sm text-on-surface max-w-[65ch] leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="body-lg text-on-surface-variant max-w-[65ch] mt-16 md:mt-24">
          The name comes from <em>lakambini</em>, Tagalog for a noble lady or muse. It reflects what we set out to do: champion women and women at heart in the industry.
        </p>
      </div>
    </section>
  );
}
