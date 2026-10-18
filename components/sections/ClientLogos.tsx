import { ClientLogoRow } from "@/components/sections/TrustBar";

export default function ClientLogos() {
  return (
    <section className="bg-surface py-14 md:py-16 w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center gap-8">
        <span className="label-sm text-primary tracking-widest">Trusted by</span>
        <ClientLogoRow />
      </div>
    </section>
  );
}
