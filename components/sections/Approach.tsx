export default function Approach() {
  const approaches = [
    {
      icon: "auto_awesome",
      title: "Seamless Execution",
      desc: "Logistics are the silent architecture of beauty. We handle the thousand moving parts so you only see the harmony.",
      elevated: false,
    },
    {
      icon: "temp_preferences_custom",
      title: "Your Focus, Our Priority",
      desc: "Our primary goal is your presence. By managing the complexities, we return the gift of time back to the host.",
      elevated: true,
      badge: "Core",
    },
    {
      icon: "history_edu",
      title: "Lasting Results",
      desc: "We don't aim for the temporary. We aim for legacies—events that are whispered about for years to come.",
      elevated: false,
    }
  ];

  return (
    <section className="py-32 overflow-hidden w-full bg-surface">
      <div className="max-w-[1440px] mx-auto px-12">
        
        <div className="text-center mb-24">
          <span className="text-primary font-label tracking-[0.4em] uppercase text-xs mb-4 block">Core Philosophy</span>
          <h2 className="font-headline text-5xl md:text-6xl tracking-tight text-on-surface">Managing the Experience</h2>
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
              <h3 className={`font-headline text-2xl mb-6 ${item.elevated ? "text-primary" : "text-on-surface"}`}>
                {item.title}
              </h3>
              <p className="text-on-surface-variant font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
