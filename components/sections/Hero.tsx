import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-surface hero-gradient overflow-hidden -mx-12 px-12 xl:mx-[calc(50%-50vw)] xl:px-[calc(50vw-720px+3rem)] overflow-x-hidden">
      {/* Marble Texture Overlay */}
      <div className="absolute inset-0 marble-texture pointer-events-none mix-blend-overlay"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full max-w-[1440px] pt-32 pb-20 relative z-10 items-center">
        {/* Left Content (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-8 items-start">
          <span className="label-sm text-primary uppercase tracking-widest bg-surface-container py-2 px-4 rounded-full border border-outline-variant/30">
            Full-Service Event Production
          </span>
          <h1 className="display-lg text-on-surface leading-[1.1] font-extrabold max-w-3xl">
            We turn bold ideas into <br />
            <span className="gold-gradient-text italic font-medium">exceptional</span> event experiences.
          </h1>
          <p className="body-lg text-on-surface-variant max-w-xl font-light">
            Full-service event production. From planning and execution to custom technology — one team, one standard.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-4">
            <Button variant="primary" href="/contact">
              Book a Discovery Call
            </Button>
            <Button variant="secondary" href="/services">
              Explore Our Services
            </Button>
          </div>
        </div>

        {/* Right Content - Floating Images (5 cols) */}
        <div className="lg:col-span-5 relative h-[500px] hidden md:block">
          <div className="absolute top-0 right-10 w-64 h-80 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(4,21,15,0.4)] rotate-3 hover:rotate-0 transition-transform duration-700 ease-out z-20">
            <Image 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop" 
              alt="Live Concert Execution" 
              layout="fill" 
              objectFit="cover" 
              className="hover:scale-105 transition-transform duration-700 ease-out" 
            />
          </div>
          <div className="absolute bottom-10 left-0 w-72 h-64 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(4,21,15,0.4)] -rotate-6 hover:rotate-0 transition-transform duration-700 ease-out z-10">
            <Image 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop" 
              alt="Stage Technical Setup" 
              layout="fill" 
              objectFit="cover" 
              className="hover:scale-105 transition-transform duration-700 ease-out" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
