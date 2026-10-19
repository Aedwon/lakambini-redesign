import Reveal from "@/components/ui/Reveal";

const facts = [
  { value: "2024", label: "Established" },
  { value: "9", label: "In-house divisions" },
  { value: "30+", label: "Projects delivered" },
];

export default function Manifesto() {
  return (
    <section className="section-y bg-ink">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-4 text-mist">
            <span aria-hidden="true" className="h-px w-10 bg-brass/70" />
            <span className="eyebrow">The agency</span>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="mt-10 md:mt-14">
          <p className="display-md max-w-[24ch] md:max-w-[28ch] lg:max-w-[32ch] text-ivory text-balance">
            A full-service events and creative agency{" "}
            <span className="text-mist">
              from championship finals at SM Mall of Asia to school caravans across Cavite.
            </span>
          </p>
        </Reveal>

        <dl className="mt-16 md:mt-24 grid grid-cols-1 border-t hairline sm:grid-cols-3">
          {facts.map((fact, i) => (
            <Reveal
              key={fact.label}
              delay={i * 0.08}
              className={`flex flex-row items-baseline justify-between gap-6 border-b hairline py-6 sm:flex-col sm:items-start sm:justify-start sm:gap-4 sm:border-b-0 sm:py-8 sm:pr-6 ${
                i > 0 ? "sm:border-l sm:pl-8 lg:pl-12" : ""
              }`}
            >
              <dd className="order-2 font-display text-[3.25rem] leading-none text-ivory sm:order-1 md:text-[4.5rem]">
                {fact.value}
              </dd>
              <dt className="eyebrow order-1 text-mist sm:order-2">{fact.label}</dt>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
