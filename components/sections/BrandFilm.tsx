"use client";

import { useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";

export default function BrandFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setPlaying(true);
    // Play on the next frame so the video element is visible and focusable.
    requestAnimationFrame(() => {
      const v = videoRef.current;
      if (!v) return;
      v.play().catch(() => {
        /* Native controls remain available if autoplay is blocked. */
      });
      v.focus();
    });
  };

  return (
    <section className="w-full bg-ink pt-16 md:pt-24">
      <div className="container-x">
        <Reveal>
          <div className="relative aspect-video w-full overflow-hidden bg-ink-deep">
            <video
              ref={videoRef}
              title="Lakambini Events Agency company film"
              className="absolute inset-0 h-full w-full object-cover"
              poster="/video/lakambini-film-poster.jpg"
              preload="none"
              playsInline
              controls={playing}
              src="/video/lakambini-film.mp4"
            />

            {!playing && (
              <button
                type="button"
                onClick={start}
                aria-label="Play the Lakambini company film, 2 minutes"
                className="group absolute inset-0 z-10 flex cursor-pointer flex-col items-center justify-center gap-6 bg-ink/55 transition-colors duration-500 hover:bg-ink/40 focus-visible:outline-1 focus-visible:outline-brass focus-visible:-outline-offset-8"
              >
                <span className="flex h-20 w-20 md:h-28 md:w-28 items-center justify-center rounded-full ring-1 ring-inset ring-brass transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-105">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 md:h-9 md:w-9 translate-x-[2px] fill-ivory"
                  >
                    <path d="M6 3.5v17L21 12z" />
                  </svg>
                </span>
                <span className="eyebrow text-ivory">Watch the film · 2 min</span>
              </button>
            )}
          </div>
        </Reveal>

        <p className="numeral mt-4 text-mist">
          <span className="text-brass">●</span>&nbsp; Lakambini Events Agency, company film
        </p>
      </div>
    </section>
  );
}
