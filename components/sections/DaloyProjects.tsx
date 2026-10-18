import Image from "next/image";

// Screenshot of the live kiosk welcome screen.
const KIOSK_SCREEN = "/images/daloy/hok-kiosk-screen.webp";

interface BotProject {
  client: string;
  title: string;
  summary: string;
  features: string[];
  tech: string[];
  motif: "ticket" | "bracket";
}

const botProjects: BotProject[] = [
  {
    client: "Client: OPPO",
    title: "OPPO Hyper Legend Cup 2026 — Discord operations bot",
    summary:
      "A Discord bot that runs player verification, support tickets and announcements for the tournament community.",
    features: [
      "Player verification with team selection and in-game UID/server, plus automatic role assignment",
      "Ticketing across League Ops, Technical, Creatives and General, with role-based claiming",
      "HTML transcripts and 5-star ratings",
      "24/48-hour escalation reminders for unclaimed tickets",
      "Scheduled announcements and bulk private thread creation",
      "Auto-created voice rooms and team management with team-wide mentions",
    ],
    tech: ["Python (discord.py)", "MySQL", "Docker"],
    motif: "ticket",
  },
  {
    client: "Ilocos Sur Festival Esports (ISFE 2026)",
    title: "Ilocos Sur Festival Esports — tournament Discord bot",
    summary:
      "A Discord bot that connects tournament brackets to channels and handles the community admin around them.",
    features: [
      "Challonge bracket integration: link a bracket to a channel",
      "Player verification and role management",
      "Ticketing and threads",
      "Voice rooms",
      "Admin logs",
    ],
    tech: ["Python (discord.py)", "MySQL"],
    motif: "bracket",
  },
];

const kioskFeatures = [
  "Branded attract/welcome screen",
  "Guided survey with an on-screen keyboard",
  "Thank-you screen with a QR code",
  "PIN-protected admin dashboard with entry count, CSV export and data reset",
  "Runs full-screen on a TV in locked kiosk mode",
];

function TechChips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className="px-3 py-1 bg-surface-container-high rounded-full label-xs text-on-surface"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function Motif({ kind }: { kind: "ticket" | "bracket" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 160 100"
      fill="none"
      className="w-28 h-auto text-primary/40 shrink-0"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {kind === "ticket" ? (
        <>
          <path d="M12 20h136v18a12 12 0 0 0 0 24v18H12V62a12 12 0 0 0 0-24z" />
          <path d="M104 24v8M104 44v8M104 64v8" />
          <path d="M28 40h54M28 52h38M28 64h46" />
        </>
      ) : (
        <>
          <path d="M12 14h34v22h28M12 58h34V36" />
          <path d="M12 66h34v20h28" />
          <path d="M74 36v50M74 60h30h44" />
          </>
      )}
    </svg>
  );
}

export default function DaloyProjects() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <span className="label-sm text-primary tracking-[0.2em] uppercase block mb-4">
            Built by DALOY
          </span>
          <h2 className="headline-lg text-on-surface mb-6">
            Tools we have built for real events
          </h2>
          <p className="body-lg text-on-surface-variant font-light leading-relaxed max-w-[65ch]">
            Software made in-house by Lakambini&apos;s developer for tournaments
            and activations we run or support.
          </p>
        </div>

        {/* Feature: kiosk */}
        <article className="grid grid-cols-1 lg:grid-cols-12 bg-surface-container-low rounded-xl overflow-hidden editorial-shadow mb-6 md:mb-8">
          {/* Free-standing touchscreen kiosk mock-up (pure CSS) */}
          <figure className="lg:col-span-7 relative m-0 flex flex-col items-center justify-end bg-[radial-gradient(ellipse_at_50%_35%,var(--color-surface-container-high),var(--color-surface-container-lowest)_75%)] px-6 pt-12 md:pt-16">
            <div className="w-full max-w-[560px] flex flex-col items-center">
              {/* Screen + bezel */}
              <div className="w-full rounded-[14px] bg-[#0b0d0c] p-[10px] md:p-[14px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/5">
                <div className="relative aspect-[1.62] w-full overflow-hidden rounded-[4px]">
                  <Image
                    src={KIOSK_SCREEN}
                    alt="Honor of Kings kiosk welcome screen inviting visitors to tap and play"
                    fill
                    sizes="(max-width: 1024px) 90vw, 560px"
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Neck, pole and base */}
              <div aria-hidden="true" className="w-24 h-3 bg-[#141716] rounded-b-md" />
              <div aria-hidden="true" className="w-6 md:w-7 h-28 md:h-36 bg-gradient-to-r from-[#0e100f] via-[#262a28] to-[#0e100f]" />
              <div aria-hidden="true" className="w-48 md:w-56 h-3 rounded-t-[50%] bg-gradient-to-r from-[#0e100f] via-[#2a2e2c] to-[#0e100f]" />
              <div aria-hidden="true" className="w-64 md:w-80 h-6 -mt-1 rounded-[50%] bg-black/50 blur-md" />
            </div>
            <figcaption className="self-stretch label-xs text-on-surface-variant py-3 text-center">
              Touchscreen kiosk · Honor of Kings Festival of Lanterns
            </figcaption>
          </figure>
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col">
            <span className="label-sm text-primary tracking-[0.2em] uppercase block mb-4">
              Client: Honor of Kings
            </span>
            <h3 className="headline-md text-on-surface mb-4">
              Festival of Lanterns survey kiosk
            </h3>
            <p className="body-md text-on-surface-variant font-light leading-relaxed mb-6 max-w-[65ch]">
              A Flutter app that runs full-screen on a TV in locked kiosk mode,
              taking visitors from welcome screen to thank-you screen.
            </p>
            <ul className="space-y-3 mb-8">
              {kioskFeatures.map((f) => (
                <li key={f} className="flex gap-3 body-sm text-on-surface">
                  <span
                    aria-hidden="true"
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                  />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <TechChips items={["Flutter", "Kiosk mode", "Offline data export"]} />
            </div>
          </div>
        </article>

        {/* Bots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {botProjects.map((p) => (
            <article
              key={p.title}
              className="bg-surface-container p-8 md:p-10 rounded-xl flex flex-col"
            >
              <div className="flex items-start justify-between gap-6 mb-6">
                <span className="label-sm text-primary tracking-[0.2em] uppercase block">
                  {p.client}
                </span>
                <Motif kind={p.motif} />
              </div>
              <h3 className="headline-md text-on-surface mb-4">{p.title}</h3>
              <p className="body-md text-on-surface-variant font-light leading-relaxed mb-6 max-w-[65ch]">
                {p.summary}
              </p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 body-sm text-on-surface">
                    <span
                      aria-hidden="true"
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <TechChips items={p.tech} />
              </div>
            </article>
          ))}
        </div>

        {/* Concept project: e-commerce brand site — to be added; must be labelled as a concept/fictional brand */}
      </div>
    </section>
  );
}
