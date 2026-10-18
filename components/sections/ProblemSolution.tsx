export default function ProblemSolution() {
  return (
    <section className="w-full bg-surface-container-low py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column - Value Proposition */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <span className="label-sm text-primary uppercase tracking-widest">
            Why Lakambini
          </span>
          <h2 className="headline-lg text-on-surface">
            You bring the vision. We bring it to life.
          </h2>
          <p className="body-lg text-on-surface-variant max-w-[65ch] leading-relaxed">
            Whether you have a fully formed concept or just a business goal that needs an event — we handle the rest. Strategy, creative, production, and execution. One team from start to finish.
          </p>
        </div>

        {/* Right Column - Two calm tiles */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-surface-container p-8 md:p-10 flex flex-col gap-4">
            <div className="text-primary mb-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <h3 className="title-lg text-on-surface">From Concept to Reality</h3>
            <p className="body-md text-on-surface-variant leading-relaxed">
              Many clients come to us with an idea, not a plan. We turn that idea into a detailed creative concept, a production roadmap, and a flawless execution.
            </p>
          </div>

          <div className="bg-surface-container p-8 md:p-10 flex flex-col gap-4">
            <div className="text-primary mb-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="title-lg text-on-surface">One Team, Full Control</h3>
            <p className="body-md text-on-surface-variant leading-relaxed">
              No juggling vendors. No miscommunication. Our in-house divisions cover creative, technical, and operational — so quality stays consistent from brief to strike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
