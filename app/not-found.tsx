import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import GoldWave from "@/components/ui/GoldWave";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-ink">
      <GoldWave opacity={0.3} className="absolute inset-x-0 top-1/4 h-1/2 w-full opacity-50" />
      <div className="container-x relative z-10 pb-20 pt-40 md:pb-28">
        <p className="eyebrow mb-8 flex items-center gap-4 text-mist">
          <span aria-hidden="true" className="h-px w-10 bg-brass" />
          <span className="numeral text-brass">404</span>
          Page not found
        </p>
        <h1 className="display-hero max-w-[14ch] text-balance text-ivory">
          Lost the <em className="italic text-brass">plot?</em>
        </h1>
        <p className="body-lg mt-10 max-w-[44ch] text-mist">
          This page isn&apos;t on the run sheet. Head back to the main stage and we&apos;ll pick it up from there.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button variant="primary" href="/">
            Back to home
          </Button>
          <Button variant="tertiary" href="/portfolio">
            See the work
          </Button>
        </div>
      </div>
    </section>
  );
}
