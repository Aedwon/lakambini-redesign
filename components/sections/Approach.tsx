import Image from "next/image";

export default function Approach() {
  const approaches = [
    {
      title: "End-to-End Execution",
      desc: "We manage every moving part — from vendor coordination to on-site ops — so nothing falls through the cracks.",
      elevated: false,
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
    },
    {
      title: "One Point of Contact",
      desc: "You talk to one team. We handle the rest. No finger-pointing between vendors, no surprises on event day.",
      elevated: true,
      badge: "Core",
      img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80"
    },
    {
      title: "Proven Track Record",
      desc: "500+ events delivered. Clients come back because we consistently hit the brief, on time and on budget.",
      elevated: false,
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-32 overflow-hidden w-full bg-surface">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-24">
          <span className="label-sm text-primary tracking-[0.4em] uppercase mb-4 block">How We Work</span>
          <h2 className="display-sm tracking-tight text-on-surface">Straightforward. Reliable. Done Right.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {approaches.map((item, i) => (
            <div 
              key={i} 
              className={`p-12 transition-all duration-500 overflow-hidden group hover:-translate-y-4 hover:shadow-2xl hover:shadow-[rgba(4,21,15,0.4)] relative ${
                item.elevated 
                  ? "scale-[1.05] border border-outline-variant/20 shadow-[0_20px_50px_rgba(4,21,15,0.4)] z-10" 
                  : "bg-surface-container-high"
              }`}
            >
              {/* Background Image Overlay instead of an SVG line art */}
              <Image 
                src={item.img} 
                alt={item.title} 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`object-cover transition-transform duration-1000 ease-out group-hover:scale-105 ${
                  item.elevated ? "opacity-30 mix-blend-overlay" : "opacity-10 grayscale group-hover:grayscale-0"
                }`}
              />
              <div className={`absolute inset-0 z-0 ${item.elevated ? "bg-primary/5" : "bg-surface/60"}`}></div>

              <div className="relative z-10 h-full flex flex-col justify-end min-h-[200px]">
                {item.badge && (
                  <div className="absolute top-0 right-0 bg-primary text-on-primary text-[11px] font-bold tracking-[0.2em] px-5 py-2 uppercase rounded-full shadow-lg">
                    {item.badge}
                  </div>
                )}
                <h3 className={`headline-sm mb-6 ${item.elevated ? "text-primary" : "text-on-surface"}`}>
                  {item.title}
                </h3>
                <p className={`body-md font-light leading-relaxed ${item.elevated ? "text-on-surface/90" : "text-on-surface-variant"}`}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
