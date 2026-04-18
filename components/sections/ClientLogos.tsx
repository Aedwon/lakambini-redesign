export default function ClientLogos() {
  const brands = ["MOONTON", "ALORICA", "OPPO", "REALME", "INFINIX"];

  return (
    <section className="bg-surface py-24 w-full border-b border-outline-variant/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <span className="label-sm text-primary/70 uppercase tracking-[0.4em] mb-12 block font-medium">
          Trusted By
        </span>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40">
          {brands.map((brand) => (
            <div 
              key={brand} 
              className="font-headline text-2xl md:text-3xl font-bold tracking-tighter text-on-surface hover:opacity-100 transition-opacity duration-500 cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
