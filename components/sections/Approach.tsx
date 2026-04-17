export default function Approach() {
  const approaches = [
    {
      title: "End-to-End Execution",
      desc: "We manage every moving part — from vendor coordination to on-site ops — so nothing falls through the cracks.",
      elevated: false,
    },
    {
      title: "One Point of Contact",
      desc: "You talk to one team. We handle the rest. No finger-pointing between vendors, no surprises on event day.",
      elevated: true,
      badge: "Core",
    },
    {
      title: "Proven Track Record",
      desc: "500+ events delivered. Clients come back because we consistently hit the brief, on time and on budget.",
      elevated: false,
    }
  ];

  return (
    <section className="py-32 overflow-hidden w-full bg-surface">
      <div className="max-w-[1440px] mx-auto px-12">
        
        <div className="text-center mb-24">
          <span className="label-sm text-primary tracking-[0.4em] uppercase mb-4 block">How We Work</span>
          <h2 className="display-sm tracking-tight text-on-surface">Straightforward. Reliable. Done Right.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {approaches.map((item, i) => (
            <div 
              key={i} 
              className={`p-12 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-[rgba(4,21,15,0.4)] relative ${
                item.elevated 
                  ? "bg-surface-container-highest scale-[1.05] border border-outline-variant/20 shadow-[0_20px_50px_rgba(4,21,15,0.4)] z-10" 
                  : "bg-surface-container-high"
              }`}
            >
              {item.badge && (
                <div className="absolute -top-4 -right-4 bg-primary text-on-primary text-[10px] font-bold tracking-tighter px-3 py-1 uppercase rounded-full">
                  {item.badge}
                </div>
              )}
              <svg className="w-12 h-12 text-primary mb-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <h3 className={`headline-sm mb-6 ${item.elevated ? "text-primary" : "text-on-surface"}`}>
                {item.title}
              </h3>
              <p className="body-md text-on-surface-variant font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
