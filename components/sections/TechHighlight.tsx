import Image from "next/image";

export default function TechHighlight() {
  const features = [
    { title: "Custom Event Apps", desc: "Fully branded mobile apps for real-time scheduling, networking, and engagement." },
    { title: "Interactive Kiosks", desc: "Offline-first systems and experiential game booths for large crowds." },
    { title: "Real-time Analytics", desc: "Data capture tools and VIP registration dashboards to track ROI." }
  ];

  return (
    <section className="w-full pt-20 pb-12">
      <div className="bg-surface-container-high rounded-none md:rounded-xl overflow-hidden flex flex-col lg:flex-row shadow-[0_20px_50px_rgba(4,21,15,0.2)]">
        
        {/* Left Side - Content */}
        <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
          <span className="label-sm text-primary uppercase tracking-widest mb-4">
            Daloy Division
          </span>
          <h2 className="headline-lg text-on-surface mb-8">
            The future of events is hybrid. We build the <span className="text-primary italic">digital infrastructure.</span>
          </h2>
          
          <div className="flex flex-col gap-8">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="title-md font-medium text-on-surface mb-2">{feature.title}</h3>
                  <p className="body-md text-on-surface-variant font-light">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
          <Image 
            src="/images/placeholder-tech.jpg" 
            alt="Event Technology Infrastructure" 
            layout="fill" 
            objectFit="cover" 
            className="z-0"
          />
        </div>

      </div>
    </section>
  );
}
