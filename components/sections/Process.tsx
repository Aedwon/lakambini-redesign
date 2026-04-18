const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn about your goals, audience, and vision. Whether it's a product launch, concert, or company summit — we start by listening.",
  },
  {
    num: "02",
    title: "Concept & Strategy",
    desc: "Our creative team develops a tailored concept, timeline, and production plan. You approve the direction before anything moves forward.",
  },
  {
    num: "03",
    title: "Production & Execution",
    desc: "Our specialized divisions — from stage design to multimedia — work as one unit to build and deliver your event.",
  },
  {
    num: "04",
    title: "Delivery & Results",
    desc: "We execute on the day, handle every detail, and provide post-event reporting so you can measure impact.",
  },
];

export default function Process() {
  return (
    <section className="w-full bg-surface-container-low py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto text-center">
          <span className="label-sm text-primary uppercase tracking-widest">
            How We Work
          </span>
          <h2 className="headline-lg text-on-surface leading-[1.2]">
            From first call to final bow — <span className="text-primary italic">here&apos;s the process.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/10">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="bg-surface-container-low p-8 md:p-10 flex flex-col gap-6 relative group"
            >
              {/* Gold accent line at top */}
              <div className="absolute top-0 left-0 w-full h-px bg-primary/20 group-hover:bg-primary/50 transition-colors duration-500" />

              {/* Step number */}
              <span className="display-sm font-bold text-primary/25 group-hover:text-primary/50 transition-colors duration-500">
                {step.num}
              </span>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="title-lg font-medium text-on-surface">
                  {step.title}
                </h3>
                <p className="body-md text-on-surface-variant font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Connecting arrow on desktop (hidden on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-primary/30 z-10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
