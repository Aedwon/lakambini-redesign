"use client";

import { useEffect, useRef, useState } from "react";

const POSTER = "/video/hero-reel-poster.jpg";

/**
 * Muted, looping highlight reel behind the home hero. Falls back to the
 * poster frame when the visitor prefers reduced motion or saves data.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce || saveData) {
      ref.current?.pause();
      // Defer so the state change happens outside the effect body
      requestAnimationFrame(() => setStill(true));
    }
  }, []);

  if (still) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={POSTER} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
    );
  }

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={POSTER}
      aria-hidden="true"
    >
      <source src="/video/hero-reel.webm" type="video/webm" />
      <source src="/video/hero-reel.mp4" type="video/mp4" />
    </video>
  );
}
