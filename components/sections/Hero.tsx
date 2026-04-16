import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-surface overflow-hidden pt-20">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 bg-surface-container-low">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center gap-6 mt-12">
        <span className="label-sm text-on-surface-variant uppercase tracking-widest">
          The Platinum Standard
        </span>
        <h1 className="display-lg text-primary max-w-4xl tracking-tight leading-tight">
          Where Vision Meets Immaculate Execution.
        </h1>
        <p className="body-lg text-on-surface-variant max-w-2xl font-light mb-8">
          Lakambini Events orchestrates premium B2B digital solutions and elite experiences for the most discerning brands.
        </p>
        <Button variant="primary" size="lg" href="/contact">
          Consult With Us
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-on-surface-variant animate-pulse">
        <span className="label-sm">DISCOVER</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
