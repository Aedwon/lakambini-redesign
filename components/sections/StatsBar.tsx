export default function StatsBar() {
  const stats = [
    { value: "2024", label: "Established" },
    { value: "9", label: "In-house divisions" },
    { value: "Cavite", label: "Home base, working nationwide" },
  ];

  return (
    <section className="bg-surface-container-lowest py-14 md:py-16 w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="flex flex-col items-center text-center px-4"
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
