import Image from "next/image";
import { clients } from "@/lib/clients";

/**
 * Shared client logo row — single implementation used by TrustBar (home)
 * and ClientLogos (/about). Logos render as uniform light silhouettes;
 * clients without a logo file fall back to their name in text.
 */
export function ClientLogoRow({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-14 ${className}`}
    >
      {clients.map((client) => (
        <li key={client.slug} className="flex items-center justify-center h-8">
          {client.logo ? (
            <Image
              src={client.logo}
              alt={client.name}
              width={160}
              height={32}
              className="h-7 md:h-8 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          ) : (
            <span className="font-headline text-lg md:text-xl font-semibold tracking-tight text-on-surface opacity-60 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {client.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function TrustBar() {
  return (
    <section className="w-full bg-surface-container-lowest py-14 md:py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center gap-8">
        <p className="label-sm text-on-surface-variant tracking-widest">
          Trusted by
        </p>
        <ClientLogoRow />
      </div>
    </section>
  );
}
