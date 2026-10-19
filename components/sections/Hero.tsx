import HeroVideo from "@/components/sections/HeroVideo";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full flex-col justify-end overflow-hidden bg-ink">
      <HeroVideo />

      {/* Legibility scrims */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink/25" />
      <div aria-hidden="true" className="absolute inset-0 scrim-bottom" />
      <div aria-hidden="true" className="absolute inset-0 scrim-left hidden md:block" />

      <div className="relative z-10 container-x pb-10 md:pb-14">
        <p className="eyebrow text-ivory/80 mb-6 md:mb-8">
          Lakambini<span className="hidden sm:inline"> Events Agency</span> <span className="text-brass">·</span> Est. 2024
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <h1 className="display-hero text-ivory lg:col-span-8">
            Events people <br />
            <em className="italic text-brass">line up</em> for.
          </h1>

          <div className="lg:col-span-4 flex flex-col gap-8 lg:pb-3">
            <p className="body-md text-ivory/80 max-w-[42ch]">
              Championship stages, school caravans, mall activations. Nine in-house teams plan,
              build and run brand experiences for Moonton, OPPO, Infinix and more.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button variant="primary" href="/contact">
                Start a project
              </Button>
              <Button variant="tertiary" href="/portfolio">
                See the work
              </Button>
            </div>
          </div>
        </div>

        {/* Caption rail */}
        <div className="mt-12 md:mt-16 flex items-center justify-between gap-6 border-t hairline pt-5 text-mist">
          <p className="numeral">
            <span className="text-brass">●</span>&nbsp; Showreel: MLBB Collegiate Cup<span className="hidden sm:inline">, MLBB × NARUTO &amp; more</span>
          </p>
          <p className="numeral hidden sm:block">Scroll</p>
        </div>
      </div>
    </section>
  );
}
