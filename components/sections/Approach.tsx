import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import StepIllustration, { IllustrationName } from "@/components/ui/StepIllustration";

interface ApproachItem {
  title: string;
  desc: string;
  art: IllustrationName;
}

const approaches: ApproachItem[] = [
  {
    title: "Every moving part",
    art: "orbit",
    desc: "Vendors, logistics and on-site operations, handled so nothing falls through the cracks.",
  },
  {
    title: "No hand-offs",
    art: "thread",
    desc: "No finger-pointing between vendors, no surprises on event day.",
  },
  {
    title: "Built for repeat work",
    art: "arches",
    desc: "On brief, on time and on budget, so the next one is an easy yes.",
  },
];

// Asymmetric padding with equal totals keeps every column (and its plate) the same width
const PAD = ["md:pr-12 lg:pr-20", "md:px-6 md:border-l lg:px-10", "md:pl-12 md:border-l lg:pl-20"];

export default function Approach() {
  return (
    <section className="w-full bg-ink-raised section-y">
      <div className="container-x">
        <SectionHeader
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
              className={`flex flex-col gap-6 py-10 md:py-12 border-b md:border-b-0 hairline ${PAD[i]}`}
            >
              <StepIllustration name={item.art} className="mb-2" />
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
