export default function ProblemSolution() {
  return (
    <section className="w-full bg-surface pt-20 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
        
        {/* Left Column - The Problem */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h2 className="headline-lg text-on-surface leading-[1.3]">
            Managing a dozen separate providers is a logistical burden. <br />
            <span className="text-primary italic">We simplify it.</span>
          </h2>
        </div>

        {/* Right Column - The Solution Cards */}
        <div className="lg:col-span-7 flex flex-col sm:flex-row gap-6">
          
          <div className="flex-1 bg-surface-container-low border-l-4 border-primary p-10 flex flex-col gap-4">
            <div className="text-primary mb-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="title-lg font-medium text-on-surface">One Unified Team</h3>
            <p className="body-md text-on-surface/80 leading-relaxed font-light">
              One point of contact for creative, technical, and operational execution. No more miscommunication between siloed vendors.
            </p>
          </div>

          <div className="flex-1 bg-surface-container-low border-l-4 border-secondary p-10 flex flex-col gap-4">
            <div className="text-secondary mb-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="title-lg font-medium text-on-surface">Consistently Excellent</h3>
            <p className="body-md text-on-surface/80 leading-relaxed font-light">
              By owning the entire process, we maintain strict quality control from initial concept to the final strike.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
