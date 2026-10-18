import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "2024", label: "Established" },
  { value: "9", label: "In-house divisions" },
  { value: "30+", label: "Projects delivered" },
];

export default function StatsBar() {
  return (
    <section className="w-full bg-ink" aria-label="Lakambini in numbers">
      <div className="container-x">
        <dl className="grid grid-cols-1 md:grid-cols-3 border-y hairline">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`flex flex-col-reverse gap-5 py-10 md:py-16 ${
                i > 0 ? "border-t md:border-t-0 md:border-l hairline md:pl-10" : ""
              }`}
            >
              <dt className="eyebrow text-mist">{s.label}</dt>
              <dd className="display-lg text-ivory">{s.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
