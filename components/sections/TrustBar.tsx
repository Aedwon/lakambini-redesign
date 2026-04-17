export default function TrustBar() {
  // We can use 4-6 placeholders for client logos
  const clients = [
    "TECH CORP",
    "GLOBAL MEDIA",
    "ENTERPRISE ASIA",
    "PHILIPPINE AIR",
    "NEXTGEN STUDIOS",
  ];

  return (
    <section className="w-full bg-surface-container-lowest -mx-12 px-12 xl:mx-[calc(50%-50vw)] xl:px-[calc(50vw-720px+3rem)] py-16 border-y border-surface-container-highest">
      <div className="max-w-[1440px] w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/4">
          <p className="label-md uppercase tracking-widest text-on-surface-variant/70">
            Trusted by leading brands nationwide.
          </p>
        </div>
        
        <div className="md:w-3/4 flex flex-wrap justify-between items-center gap-8 w-full opacity-40 grayscale brightness-150">
          {clients.map((client, index) => (
            <div key={index} className="font-headline text-xl font-bold tracking-tight text-white/80">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
