import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop */
  duration?: number;
  className?: string;
}

/**
 * Infinite horizontal scroll. Children are rendered twice so the loop is
 * seamless; the copy is hidden from assistive tech. Stops under reduced motion.
 */
export default function Marquee({ children, duration = 60, className = "" }: MarqueeProps) {
  return (
    <div
      className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${className}`}
    >
      <div
        className="animate-marquee flex w-max hover:[animation-play-state:paused]"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
