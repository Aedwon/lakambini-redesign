export default function TrustBar() {
  const logos = [
    { name: "Brand 1", id: 1 },
    { name: "Brand 2", id: 2 },
    { name: "Brand 3", id: 3 },
    { name: "Brand 4", id: 4 },
    { name: "Brand 5", id: 5 },
  ];

  return (
    <section className="bg-surface-container-low py-16">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center gap-10">
        <h3 className="label-md text-on-surface-variant uppercase tracking-widest text-center">
          Trusted by leading brands
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
          {logos.map(logo => (
            <div 
              key={logo.id} 
              className="text-on-surface-variant hover:text-primary transition-colors duration-400 ease-out cursor-pointer headline-sm grayscale hover:grayscale-0"
            >
              <span className="font-serif italic font-medium tracking-tight opacity-70 hover:opacity-100 transition-opacity">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
