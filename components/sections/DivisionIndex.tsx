"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { divisions } from "@/lib/divisions";

const PREVIEW_W = 320;
const PREVIEW_H = 400;

export default function DivisionIndex() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const [finePointer, setFinePointer] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 30, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 260, damping: 30, mass: 0.6 });
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1024px)");
    const update = () => setFinePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const showPreview = finePointer && !reduce;

  const place = useCallback(
    (clientX: number, clientY: number) => {
      const px = Math.min(clientX + 48, window.innerWidth - PREVIEW_W - 24);
      const py = Math.min(Math.max(clientY - PREVIEW_H / 2, 16), window.innerHeight - PREVIEW_H - 16);
      x.set(px);
      y.set(py);
    },
    [x, y],
  );

  return (
    <section className="section-y bg-ink-raised">
      <div className="container-x">
        <SectionHeader
          index="03"
          label="What we do"
          title={
            <>
              Nine teams. <em>One</em> point of contact.
            </>
          }
          aside="A brief goes to one team, not nine vendors."
        />

        <ul
          ref={listRef}
          className="border-t hairline"
          onMouseLeave={() => setActive(null)}
          onMouseMove={(e) => showPreview && place(e.clientX, e.clientY)}
        >
          {divisions.map((d, i) => (
            <Reveal as="li" key={d.slug} delay={Math.min(i, 4) * 0.04} className="border-b hairline">
              <Link
                href={`/services/${d.slug}`}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-1 py-6 md:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1fr)_auto] md:gap-x-8 md:py-9"
                onMouseEnter={(e) => {
                  if (!showPreview) return;
                  place(e.clientX, e.clientY);
                  setActive(i);
                }}
                onFocus={(e) => {
                  if (!showPreview) return;
                  const r = e.currentTarget.getBoundingClientRect();
                  place(r.left + r.width * 0.55, r.top + r.height / 2);
                  setActive(i);
                }}
                onBlur={() => setActive(null)}
              >
                <span className="numeral text-brass">{d.id}</span>

                <div className="min-w-0">
                  <h3 className="display-sm text-ivory transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-2 group-focus-visible:translate-x-2">
                    {d.name}
                  </h3>
                  <p className="mt-2 body-sm text-mist md:hidden">{d.subtitle}</p>
                  <p className="mt-1 body-sm text-mist/80 md:hidden max-w-[46ch]">{d.description}</p>
                </div>

                <p className="hidden md:block body-md text-mist">{d.subtitle}</p>

                <div className="flex items-center gap-4">
                  <span className="relative block h-16 w-12 shrink-0 overflow-hidden rounded-[2px] lg:hidden">
                    <Image src={d.cardImage} alt="" fill sizes="48px" className="object-cover" />
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="h-5 w-5 shrink-0 text-mist transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1 group-hover:text-brass group-focus-visible:text-brass"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                  >
                    <path d="M1 8h13M9 3l5 5-5 5" />
                  </svg>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 md:mt-16">
          <Button variant="secondary" href="/services">
            Explore all services
          </Button>
        </Reveal>
      </div>

      {/* Cursor-following preview: desktop, fine pointer, motion allowed */}
      {showPreview && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-40 overflow-hidden rounded-[2px] bg-ink"
          style={{ x: sx, y: sy, width: PREVIEW_W, height: PREVIEW_H }}
          animate={{ opacity: active === null ? 0 : 1 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {divisions.map((d, i) => (
            <Image
              key={d.slug}
              src={d.cardImage}
              alt=""
              fill
              sizes="320px"
              className={`object-cover transition-opacity duration-500 ${active === i ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </motion.div>
      )}
    </section>
  );
}
