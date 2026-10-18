interface GoldWaveProps {
  className?: string;
  /** Number of strands in the ribbon */
  strands?: number;
  /** Overall stroke opacity (0-1) */
  opacity?: number;
}

const W = 1200;
const H = 400;

/**
 * The flowing brass line-art ribbon from the company profile deck, drawn as
 * a set of offset cubic curves. Purely decorative, use it once or twice per
 * page (hero corner, CTA band, footer), never as a divider between every section.
 */
export default function GoldWave({ className = "", strands = 34, opacity = 0.55 }: GoldWaveProps) {
  const paths = Array.from({ length: strands }, (_, i) => {
    const t = i / (strands - 1);
    const spread = 70 + t * 150;
    const y0 = 300 - t * 60;
    const y1 = 40 + t * spread;
    const y2 = 380 - t * spread * 0.9;
    const y3 = 110 + t * 90;
    return `M -20 ${y0.toFixed(1)} C ${(300 + t * 60).toFixed(1)} ${y1.toFixed(1)}, ${(720 - t * 80).toFixed(1)} ${y2.toFixed(1)}, ${W + 20} ${y3.toFixed(1)}`;
  });

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={`pointer-events-none ${className}`}
      fill="none"
    >
      <defs>
        <linearGradient id="goldwave-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#c9a45c" stopOpacity="0" />
          <stop offset="0.35" stopColor="#e0c48a" stopOpacity="1" />
          <stop offset="0.7" stopColor="#c9a45c" stopOpacity="0.9" />
          <stop offset="1" stopColor="#c9a45c" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="url(#goldwave-fade)" strokeWidth="0.6" opacity={opacity}>
        {paths.map((d, i) => (
          <path key={i} d={d} vectorEffect="non-scaling-stroke" />
        ))}
      </g>
    </svg>
  );
}
