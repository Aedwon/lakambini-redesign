import Image from "next/image";

export default function ServicesGrid() {
  const divisions = [
    { num: "01", name: "TANGHAL", desc: "Live Entertainment & Talent", size: "col-span-12 md:col-span-8 row-span-2" },
    { num: "02", name: "LIKHA", desc: "Multimedia Production", size: "col-span-12 md:col-span-4 row-span-1" },
    { num: "03", name: "MERKATO", desc: "Experiential Marketing", size: "col-span-12 md:col-span-4 row-span-1" },
    { num: "04", name: "TIPON", desc: "Events & Activations", size: "col-span-12 md:col-span-4 row-span-1" },
    { num: "05", name: "SIBOL", desc: "Learning & Development", size: "col-span-12 md:col-span-4 row-span-1" },
    { num: "06", name: "GUHIT", desc: "Design & Visual Identity", size: "col-span-12 md:col-span-4 row-span-1" },
    { num: "07", name: "UGNAY", desc: "Community & Engagement", size: "col-span-12 md:col-span-4 row-span-1" },
    { num: "08", name: "DALOY", desc: "Technology & Development", size: "col-span-12 md:col-span-4 row-span-1" },
    { num: "09", name: "TAYO", desc: "Experiential Architecture", size: "col-span-12 md:col-span-4 row-span-1" },
  ];

  return (
    <section className="w-full bg-surface-container-lowest py-24 relative border-y border-surface-container-low">
      <div className="max-w-[1440px] mx-auto px-12 w-full flex flex-col gap-12">
        <div className="flex flex-col gap-4 max-w-2xl">
          <h2 className="headline-lg text-on-surface leading-[1.2]">
            Everything you need, under <span className="text-primary italic">one roof.</span>
          </h2>
          <p className="body-lg text-on-surface-variant font-light">
            Nine divisions covering every stage of event production — creative, technical, and operational.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 auto-rows-[280px] gap-6">
          {divisions.map((div, i) => (
            <div 
              key={div.num} 
              className={`relative group overflow-hidden bg-surface-container-highest cursor-pointer ${div.size}`}
            >
              <div className="absolute inset-0 z-0 bg-surface-dim">
                <Image 
                  src={"https://images.unsplash.com/photo-" + ["1492684223066-81342ee5ff30", "1540575467063-178a50c2df87", "1511795409834-ef04bbd61622"][i % 3] + "?q=80&w=1000&auto=format&fit=crop"} 
                  alt={div.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-40 transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface-dim/95 via-surface-dim/50 to-transparent"></div>
              
              <div className="relative z-20 h-full w-full p-8 flex flex-col justify-end">
                <span className="headline-sm font-bold text-primary/40 mb-2">{div.num}</span>
                <h3 className="title-lg text-on-surface font-semibold mb-1 group-hover:text-primary transition-colors">{div.name}</h3>
                <p className="label-sm text-on-surface-variant">{div.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
