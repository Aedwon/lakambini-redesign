import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

interface ApproachItem {
  title: string;
  desc: string;
}

const approaches: ApproachItem[] = [
  {
    title: "Every moving part",
    desc: "Vendors, logistics and on-site operations, handled so nothing falls through the cracks.",
  },
  {
    title: "No hand-offs",
    desc: "No finger-pointing between vendors, no surprises on event day.",
  },
  {
    title: "Built for repeat work",
    desc: "On brief, on time and on budget, so the next one is an easy yes.",
  },
];

export default function Approach() {
  return (
    <section className="w-full bg-ink-raised section-y">
      <div className="container-x">
        <SectionHeader
          index="05"
          label="How we work"
          title={
            <>
              One team, <em>start to strike.</em>
            </>
          }
        />

        <ol className="grid grid-cols-1 md:grid-cols-3 border-t hairline">
          {approaches.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 0.08}
              className={`flex flex-col gap-6 py-10 md:py-12 border-b md:border-b-0 hairline ${
                i > 0 ? "md:border-l md:pl-10" : ""
              } ${i < approaches.length - 1 ? "md:pr-10" : ""}`}
            >
              <span className="numeral text-brass">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="headline-md text-ivory">{item.title}</h3>
              <p className="body-md text-mist max-w-[40ch]">{item.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
