import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function ServicesGrid() {
  const services = [
    { title: "Corporate Activations", desc: "Premium brand launches and gala dinners." },
    { title: "Esports Tournaments", desc: "End-to-end league operations and broadcasts." },
    { title: "Digital Solutions", desc: "Custom platforms and interactive microsites." },
    { title: "Creative Branding", desc: "High-end visual identity and art direction." }
  ];

  return (
    <section className="bg-surface-container-low py-24 border-y border-surface-container/50">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-16">
        <SectionHeading 
          overline="Expertise"
          title="Mastery across the multidisciplinary spectrum."
          offsetRight
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((svc, i) => (
             <Card 
               key={svc.title}
               imageSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
               aspectRatio={i % 3 === 0 ? "aspect-[2/1]" : "aspect-square"}
               className="h-full"
             >
                <h3 className="title-lg text-primary">{svc.title}</h3>
                <p className="body-sm text-on-surface-variant">{svc.desc}</p>
             </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
