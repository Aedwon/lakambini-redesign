import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

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
    title: "OPPO Hyper Legend Cup 2026: Discord operations bot",
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
    title: "Ilocos Sur Festival Esports: tournament Discord bot",
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
    <p className="numeral text-mist leading-relaxed">{items.join(" · ")}</p>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="border-b hairline">
      {items.map((f, i) => (
        <li key={f} className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-t hairline py-3.5">
          <span className="numeral text-mist pt-1">{String(i + 1).padStart(2, "0")}</span>
          <span className="body-md text-ivory/90">{f}</span>
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
      className="w-28 h-auto text-brass/50 shrink-0"
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
    <section className="section-y-sm pb-24 md:pb-32">
      <div className="container-x">
        <SectionHeader
          label="Built by DALOY"
          title={
            <>
              Tools built for <em>real events</em>
            </>
          }
          aside="Software made in-house by Lakambini's developer for tournaments and activations we run or support."
        />

        {/* Feature: kiosk */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t hairline pt-10 md:pt-14 mb-20 md:mb-28">
          {/* Free-standing touchscreen kiosk mock-up (pure CSS) */}
          <Reveal className="lg:col-span-7">
            <figure className="relative m-0 flex flex-col items-center justify-end bg-[radial-gradient(ellipse_at_50%_35%,var(--color-forest),var(--color-ink-deep)_75%)] px-6 pt-12 md:pt-16">
              <div className="w-full max-w-[560px] flex flex-col items-center">
                {/* Screen + bezel */}
                <div className="w-full rounded-[10px] bg-[#0b0d0c] p-[10px] md:p-[14px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/5">
                  <div className="relative aspect-[1.62] w-full overflow-hidden rounded-[2px]">
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
              <figcaption className="self-stretch numeral text-mist py-4 text-center">
                Touchscreen kiosk · Honor of Kings Festival of Lanterns
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5 flex flex-col">
            <p className="eyebrow text-brass mb-5">Client: Honor of Kings</p>
            <h3 className="headline-lg text-ivory mb-4">Festival of Lanterns survey kiosk</h3>
            <p className="body-md text-mist mb-8 max-w-[52ch]">
              A Flutter app that runs full-screen on a TV in locked kiosk mode, taking visitors from welcome screen to thank-you screen.
            </p>
            <div className="mb-8">
              <FeatureList items={kioskFeatures} />
            </div>
            <div className="mt-auto">
              <TechChips items={["Flutter", "Kiosk mode", "Offline data export"]} />
            </div>
          </Reveal>
        </article>

        {/* Bots */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
          {botProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="border-t hairline pt-8 md:pt-10 flex flex-col h-full">
                <div className="flex items-start justify-between gap-6 mb-6">
                  <p className="eyebrow text-brass">{p.client}</p>
                  <Motif kind={p.motif} />
                </div>
                <h3 className="headline-lg text-ivory mb-4">{p.title}</h3>
                <p className="body-md text-mist mb-8 max-w-[52ch]">{p.summary}</p>
                <div className="mb-8">
                  <FeatureList items={p.features} />
                </div>
                <div className="mt-auto">
                  <TechChips items={p.tech} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Concept project: e-commerce brand site, to be added; must be labelled as a concept/fictional brand */}
      </div>
    </section>
  );
}
