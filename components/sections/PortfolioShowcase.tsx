import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function PortfolioShowcase() {
  return (
    <section className="bg-surface py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <SectionHeading 
            overline="Selected Works"
            title="Engineering unforgettable momentum."
          />
          <Button variant="secondary" href="/portfolio" className="mb-2">
            View Full Portfolio
          </Button>
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {/* Featured Project 1 */}
          <div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden group">
            <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-600 group-hover:bg-black/20"></div>
            <Image 
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80" 
              alt="OPPO Hyper Legend Cup"
              fill
              className="object-cover transition-transform duration-600 ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 flex flex-col gap-4 max-w-3xl">
              <span className="label-md text-primary tracking-widest uppercase">Esports / Broadcast</span>
              <h3 className="display-sm text-on-surface leading-tight">OPPO Hyper Legend Cup</h3>
            </div>
          </div>

          {/* Featured Project 2 */}
          <div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden group">
            <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-600 group-hover:bg-black/20"></div>
            <Image 
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80" 
              alt="Moonton x DepEd"
              fill
              className="object-cover transition-transform duration-600 ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 flex flex-col gap-4 max-w-3xl">
              <span className="label-md text-primary tracking-widest uppercase">Corporate / Educational</span>
              <h3 className="display-sm text-on-surface leading-tight">Moonton x DepEd Summit</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
