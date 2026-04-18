export default function StatsBar() {
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "500+", label: "Events Delivered" },
    { value: "9", label: "Specialized Divisions" },
    { value: "100+", label: "Clients Served" },
  ];

  return (
    <section className="bg-surface-container-lowest py-16 w-full border-y border-outline-variant/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center text-center px-4 ${
                i !== stats.length - 1 ? "md:border-r md:border-outline-variant/10" : ""
              }`}
            >
              <span className="display-lg text-primary font-headline font-bold mb-2 tracking-tighter">
                {stat.value}
              </span>
              <span className="label-sm text-on-surface-variant uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
