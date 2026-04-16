import SectionHeading from "@/components/ui/SectionHeading";

export default function DivisionsPreview() {
  const divisions = [
    { name: "TANGHAL", tag: "Live Experiences", icon: "✨" },
    { name: "MERKATO", tag: "Brand Marketing", icon: "📈" },
    { name: "UGNAY", tag: "Public Relations", icon: "🤝" },
    { name: "TIPON", tag: "Community Building", icon: "👥" },
    { name: "DALOY", tag: "Digital Campaigns", icon: "🌊" },
    { name: "GUHIT", tag: "Creative & Art", icon: "🎨" },
    { name: "SIBOL", tag: "Talent Management", icon: "🌱" },
    { name: "TAYO", tag: "Internal Culture", icon: "🔥" },
    { name: "LIKHA", tag: "Innovation Hub", icon: "💡" },
  ];

  return (
    <section className="bg-surface-container py-24">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-4 items-center text-center">
          <SectionHeading 
            overline="Internal Structure"
            title="Our Core Divisions"
            description="Nine specialized pillars shaping the Lakambini ecosystem."
            className="items-center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {divisions.map((div) => (
            <div key={div.name} className="bg-surface-container-high p-8 flex flex-col gap-6 items-start hover:bg-surface-container-highest transition-colors duration-400 ease-out ghost-border">
              <span className="text-primary text-2xl">{div.icon}</span>
              <div className="flex flex-col gap-2 items-start text-left">
                <h3 className="title-lg text-on-surface">{div.name}</h3>
                <p className="body-sm text-on-surface-variant uppercase tracking-widest">{div.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
