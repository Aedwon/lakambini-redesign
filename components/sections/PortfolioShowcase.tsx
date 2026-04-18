import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const projects = [
  {
    title: "Hyper Legend Cup Season 4",
    category: "Esports / Live Event",
    client: "Moonton",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2000&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Alorica Leadership Summit 2025",
    category: "Corporate / Conference",
    client: "Alorica",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
  {
    title: "Vivo × Manila Music Festival",
    category: "Concert / Brand Activation",
    client: "Vivo",
    img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
];

export default function PortfolioShowcase() {
  const hero = projects[0];
  const rest = projects.slice(1);

  return (
    <section className="bg-surface py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <SectionHeading
            overline="Recent Work"
            title="Events we've delivered."
          />
          <Button variant="secondary" href="/portfolio" className="mb-2">
            View Full Portfolio
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          {/* Featured Project — Full Width */}
          <div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden group">
            <div className="absolute inset-0 bg-surface/40 z-10 transition-colors duration-600 group-hover:bg-surface/20" />
            <Image
              src={hero.img}
              alt={hero.title}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 bg-gradient-to-t from-surface/90 to-transparent">
              <span className="label-sm text-primary tracking-widest uppercase">{hero.category}</span>
              <h3 className="display-sm text-on-surface leading-tight mt-2">{hero.title}</h3>
              <span className="body-sm text-on-surface-variant font-light mt-1 block">{hero.client}</span>
            </div>
          </div>

          {/* Secondary Projects — Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((project) => (
              <div key={project.title} className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden group">
                <div className="absolute inset-0 bg-surface/40 z-10 transition-colors duration-600 group-hover:bg-surface/20" />
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-surface/90 to-transparent">
                  <span className="label-sm text-primary tracking-widest uppercase">{project.category}</span>
                  <h3 className="headline-sm text-on-surface leading-tight mt-2">{project.title}</h3>
                  <span className="body-sm text-on-surface-variant font-light mt-1 block">{project.client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
