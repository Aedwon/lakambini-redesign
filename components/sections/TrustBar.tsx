import Image from "next/image";
import Marquee from "@/components/ui/Marquee";
import { clients } from "@/lib/clients";

/**
 * Shared client renderer: one implementation used by TrustBar (home) and
 * ClientLogos (/about). Logos are uniform ivory silhouettes; clients without
 * a logo file are set in the display serif at the same visual weight.
 */
export function ClientMarquee({ duration = 50 }: { duration?: number }) {
  return (
    <Marquee duration={duration}>
      {clients.map((client) => (
        <div key={client.slug} className="mx-10 md:mx-14 flex h-10 items-center">
          {client.logo ? (
            <Image
              src={client.logo}
              alt={client.name}
              width={160}
              height={36}
              className="h-7 md:h-9 w-auto max-w-none object-contain brightness-0 invert opacity-70"
            />
          ) : (
            <span className="font-display text-[1.625rem] md:text-[2rem] leading-none text-ivory/70 whitespace-nowrap">
              {client.name}
            </span>
          )}
        </div>
      ))}
    </Marquee>
  );
}

export default function TrustBar() {
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
