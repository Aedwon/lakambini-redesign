import { ClientMarquee } from "@/components/sections/TrustBar";

export default function ClientLogos() {
  return (
    <section aria-label="Clients" className="border-y hairline bg-ink py-10 md:py-12">
      <div className="container-x flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
        <p className="eyebrow shrink-0 text-mist md:w-32">Trusted by</p>
        <div className="min-w-0 flex-1 md:-mr-[clamp(1.25rem,4vw,4rem)]">
          <ClientMarquee />
        </div>
      </div>
    </section>
  );
}
