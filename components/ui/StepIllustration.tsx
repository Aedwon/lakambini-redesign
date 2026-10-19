"use client";

import { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Brass line-art plates for the "How we work" steps (Home: Process, About: Approach).
 * Geometry is generated once at module load (deterministic, rounded) so server and
 * client markup match. Strokes draw in on first view; a slow ambient loop follows.
 * Under reduced motion the plate renders fully drawn and still.
 */

export type IllustrationName =
  | "discovery"
  | "concept"
  | "production"
  | "delivery"
  | "orbit"
  | "thread"
  | "arches";

type Tone = "brass" | "ivory";

interface Stroke {
  d: string;
  tone?: Tone;
  /** Stroke opacity */
  o?: number;
  w?: number;
  /** Draw-in delay (s) */
  t?: number;
  /** Draw-in duration (s) */
  dur?: number;
  dash?: string;
}

interface Plate {
  strokes: Stroke[];
  /** Ambient layer, faded in after the draw-in */
  ambient?: (reduce: boolean) => ReactNode;
  /** Layer that draws itself in (inherits the draw variants) and then moves */
  live?: (reduce: boolean) => ReactNode;
}

/* ---------- geometry helpers ---------- */

const W = 400;
const H = 300;
const r = (n: number) => Math.round(n * 100) / 100;
const rad = (deg: number) => (deg * Math.PI) / 180;

const line = (x1: number, y1: number, x2: number, y2: number) =>
  `M${r(x1)} ${r(y1)}L${r(x2)} ${r(y2)}`;

const ellipse = (cx: number, cy: number, rx: number, ry: number) =>
  `M${r(cx - rx)} ${r(cy)}A${r(rx)} ${r(ry)} 0 1 0 ${r(cx + rx)} ${r(cy)}A${r(rx)} ${r(ry)} 0 1 0 ${r(cx - rx)} ${r(cy)}`;

const circle = (cx: number, cy: number, rr: number) => ellipse(cx, cy, rr, rr);

const arc = (cx: number, cy: number, rr: number, a0: number, a1: number) => {
  const x0 = cx + rr * Math.cos(rad(a0));
  const y0 = cy + rr * Math.sin(rad(a0));
  const x1 = cx + rr * Math.cos(rad(a1));
  const y1 = cy + rr * Math.sin(rad(a1));
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
  return `M${r(x0)} ${r(y0)}A${r(rr)} ${r(rr)} 0 ${large} 1 ${r(x1)} ${r(y1)}`;
};

const poly = (pts: [number, number][], close = false) =>
  pts.map(([x, y], i) => `${i ? "L" : "M"}${r(x)} ${r(y)}`).join("") + (close ? "Z" : "");

/** Rotated ellipse sampled as a closed polyline (usable for draw-in and animateMotion) */
const tiltedEllipse = (cx: number, cy: number, rx: number, ry: number, deg: number, n = 96) => {
  const c = Math.cos(rad(deg));
  const s = Math.sin(rad(deg));
  const pts: [number, number][] = [];
  for (let i = 0; i <= n; i++) {
    const a = (i / n) * Math.PI * 2;
    const x = rx * Math.cos(a);
    const y = ry * Math.sin(a);
    pts.push([cx + x * c - y * s, cy + x * s + y * c]);
  }
  return poly(pts);
};

/** Small deterministic pseudo-random in [0, 1) */
const rand = (i: number) => {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const amb = (name: string, dur: number, delay = 0, origin?: string): CSSProperties => ({
  animation: `${name} ${dur}s ${name === "ill-sway" ? "ease-in-out" : "linear"} ${delay}s infinite`,
  transformBox: "view-box",
  transformOrigin: origin,
});

/* ---------- plates ---------- */

/** Discovery: listening. Ripples spreading across a floor from a single voice. */
const discovery: Plate = (() => {
  const cx = 200;
  const cy = 212;
  const strokes: Stroke[] = [];
  for (let i = 0; i < 12; i++) {
    const rx = 14 + i * 15;
    strokes.push({
      d: ellipse(cx, cy, rx, rx * 0.28),
      tone: i < 5 ? "brass" : "ivory",
      o: i < 5 ? 0.85 - i * 0.12 : 0.32 - (i - 5) * 0.035,
      t: 0.3 + i * 0.07,
    });
  }
  strokes.push({ d: line(cx, cy, cx, 96), tone: "brass", o: 0.8, t: 0.1, dur: 0.9 });
  strokes.push({ d: circle(cx, 88, 7), tone: "brass", o: 0.95, t: 0.9 });
  strokes.push({ d: circle(cx, 88, 15), tone: "ivory", o: 0.25, t: 1 });
  [28, 44, 60].forEach((rr, i) => {
    strokes.push({ d: arc(cx, 88, rr, -38, 38), tone: i ? "ivory" : "brass", o: 0.7 - i * 0.2, t: 1.1 + i * 0.12 });
    strokes.push({ d: arc(cx, 88, rr, 142, 218), tone: i ? "ivory" : "brass", o: 0.7 - i * 0.2, t: 1.1 + i * 0.12 });
  });
  // Horizon
  strokes.push({ d: line(24, cy, 376, cy), tone: "ivory", o: 0.1, t: 0, dur: 1.4 });

  return {
    strokes,
    ambient: (reduce) => (
      <>
        {!reduce &&
          [0, 2.2].map((delay) => (
            <path
              key={delay}
              d={ellipse(cx, cy, 186, 52)}
              stroke="var(--color-brass)"
              strokeWidth={1}
              fill="none"
              vectorEffect="non-scaling-stroke"
              className="ill-anim"
              style={{ ...amb("ill-ripple", 4.4, 2 + delay, `${cx}px ${cy}px`), opacity: 0 }}
            />
          ))}
        {/* Voices: points scattered on the rings */}
        {Array.from({ length: 9 }, (_, i) => {
          const ring = 3 + Math.floor(rand(i) * 9);
          const rx = 14 + ring * 15;
          const a = rand(i + 40) * Math.PI * 2;
          return (
            <circle
              key={i}
              cx={r(cx + rx * Math.cos(a))}
              cy={r(cy + rx * 0.28 * Math.sin(a))}
              r={1.6}
              fill="var(--color-ivory)"
              className="ill-anim"
              style={amb("ill-twinkle", 3 + rand(i + 9) * 3, rand(i + 3) * 3)}
            />
          );
        })}
      </>
    ),
  };
})();

/** Concept & strategy: a golden-ratio construction, the plan before the build. */
const concept: Plate = (() => {
  const phi = (1 + Math.sqrt(5)) / 2;
  let x = 52;
  let w = 296;
  let h = w / phi;
  let y = (H - h) / 2 + 8;
  const ox = x;
  const oy = y;
  const ow = w;
  const oh = h;
  const strokes: Stroke[] = [
    { d: poly([[ox, oy], [ox + ow, oy], [ox + ow, oy + oh], [ox, oy + oh]], true), tone: "ivory", o: 0.3, t: 0, dur: 1.4 },
  ];
  let spiral = "";
  let ex = 0;
  let ey = 0;
  for (let k = 0; k < 11; k++) {
    const dir = k % 4;
    let s: number;
    let sx: number;
    let sy: number;
    let tx: number;
    let ty: number;
    if (dir === 0) {
      s = h;
      [sx, sy] = [x, y];
      spiral += `${k ? "" : `M${r(x)} ${r(y + s)}`}A${r(s)} ${r(s)} 0 0 1 ${r(x + s)} ${r(y)}`;
      [tx, ty] = [x + s, y];
      strokes.push({ d: line(x + s, y, x + s, y + h), tone: "ivory", o: 0.2, t: 0.4 + k * 0.1 });
      x += s;
      w -= s;
    } else if (dir === 1) {
      s = w;
      [sx, sy] = [x, y];
      spiral += `A${r(s)} ${r(s)} 0 0 1 ${r(x + s)} ${r(y + s)}`;
      [tx, ty] = [x + s, y + s];
      strokes.push({ d: line(x, y + s, x + w, y + s), tone: "ivory", o: 0.2, t: 0.4 + k * 0.1 });
      y += s;
      h -= s;
    } else if (dir === 2) {
      s = h;
      [sx, sy] = [x + w - s, y];
      spiral += `A${r(s)} ${r(s)} 0 0 1 ${r(x + w - s)} ${r(y + s)}`;
      [tx, ty] = [x + w - s, y + s];
      strokes.push({ d: line(x + w - s, y, x + w - s, y + h), tone: "ivory", o: 0.2, t: 0.4 + k * 0.1 });
      w -= s;
    } else {
      s = w;
      [sx, sy] = [x, y + h - s];
      spiral += `A${r(s)} ${r(s)} 0 0 1 ${r(x)} ${r(y + h - s)}`;
      [tx, ty] = [x, y + h - s];
      strokes.push({ d: line(x, y + h - s, x + w, y + h - s), tone: "ivory", o: 0.2, t: 0.4 + k * 0.1 });
      h -= s;
    }
    void sx;
    void sy;
    ex = tx;
    ey = ty;
  }
  strokes.push({ d: spiral, tone: "brass", o: 0.95, w: 1.25, t: 0.9, dur: 2.4 });
  // Construction: the first square's circle and the guides through the eye
  strokes.push({ d: circle(ox + oh, oy + oh, oh), tone: "ivory", o: 0.1, t: 0.2, dur: 1.8, dash: "2 4" });
  strokes.push({ d: line(ox - 16, ey, ox + ow + 16, ey), tone: "ivory", o: 0.14, t: 1.6 });
  strokes.push({ d: line(ex, oy - 16, ex, oy + oh + 16), tone: "ivory", o: 0.14, t: 1.6 });
  // Ruler ticks along the top edge
  for (let i = 0; i <= 37; i++) {
    const tx = ox + i * 8;
    strokes.push({ d: line(tx, oy - 14, tx, oy - (i % 5 === 0 ? 24 : 18)), tone: "ivory", o: i % 5 === 0 ? 0.4 : 0.2, t: 0.1 + i * 0.015, dur: 0.3 });
  }

  return {
    strokes,
    ambient: () => (
      <>
        <g className="ill-anim" style={amb("ill-spin", 40, 0, `${r(ex)}px ${r(ey)}px`)}>
          <path d={circle(ex, ey, 24)} stroke="var(--color-brass)" strokeOpacity={0.5} strokeDasharray="1 5" fill="none" vectorEffect="non-scaling-stroke" />
        </g>
        <circle cx={r(ex)} cy={r(ey)} r={2.4} fill="var(--color-brass)" />
        <circle cx={r(ex)} cy={r(ey)} r={7} fill="var(--color-brass)" className="ill-anim" style={{ ...amb("ill-glow", 3.2, 2.5, `${r(ex)}px ${r(ey)}px`), opacity: 0.15 }} />
      </>
    ),
  };
})();

/** Production & execution: truss, fixtures and crossing beams over a stage. */
const production: Plate = (() => {
  const strokes: Stroke[] = [];
  // Stage floor in perspective
  const front = 266;
  const back = 206;
  strokes.push({ d: poly([[34, front], [366, front], [314, back], [86, back]], true), tone: "ivory", o: 0.4, t: 0, dur: 1.2 });
  for (let i = 1; i < 8; i++) {
    const fx = 34 + (332 * i) / 8;
    const bx = 86 + (228 * i) / 8;
    strokes.push({ d: line(fx, front, bx, back), tone: "ivory", o: 0.1, t: 0.2 + i * 0.04 });
  }
  [0.35, 0.62, 0.84].forEach((p, i) => {
    const yy = back + (front - back) * p;
    const lx = 86 + (34 - 86) * p;
    strokes.push({ d: line(lx, yy, W - lx, yy), tone: "ivory", o: 0.1, t: 0.3 + i * 0.05 });
  });
  // Truss: two rails with a lattice
  const t1 = 38;
  const t2 = 50;
  strokes.push({ d: line(46, t1, 354, t1), tone: "brass", o: 0.7, t: 0.2, dur: 1 });
  strokes.push({ d: line(46, t2, 354, t2), tone: "brass", o: 0.7, t: 0.25, dur: 1 });
  let zig = `M46 ${t2}`;
  for (let xx = 46, up = true; xx < 354; xx += 11, up = !up) zig += `L${r(xx + 11)} ${up ? t1 : t2}`;
  strokes.push({ d: zig, tone: "brass", o: 0.35, t: 0.5, dur: 1.4 });
  // Legs
  [[54, 64], [336, 346]].forEach(([a, b], i) => {
    strokes.push({ d: line(a, t2, a, back + 8), tone: "ivory", o: 0.3, t: 0.3 + i * 0.1 });
    strokes.push({ d: line(b, t2, b, back + 8), tone: "ivory", o: 0.3, t: 0.3 + i * 0.1 });
    let lz = `M${a} ${t2}`;
    for (let yy = t2, left = true; yy < back; yy += 12, left = !left) lz += `L${left ? b : a} ${r(Math.min(yy + 12, back + 8))}`;
    strokes.push({ d: lz, tone: "ivory", o: 0.14, t: 0.6 + i * 0.1, dur: 1.2 });
  });

  const fixtures = [
    { x: 112, tx: 236 },
    { x: 156, tx: 128 },
    { x: 200, tx: 200 },
    { x: 244, tx: 272 },
    { x: 288, tx: 164 },
  ];
  const fy = 58;
  const ty = 238;
  const beams = fixtures.map((f, j) => {
    const lines: Stroke[] = [];
    for (let k = -4; k <= 4; k++) {
      const edge = Math.abs(k) === 4;
      lines.push({
        d: line(f.x, fy, f.tx + k * 6.5, ty + Math.abs(k) * 0.4),
        tone: edge ? "brass" : "ivory",
        o: edge ? 0.55 : 0.08 + (4 - Math.abs(k)) * 0.025,
        t: 1.1 + j * 0.12,
        dur: 1,
      });
    }
    lines.push({ d: ellipse(f.tx, ty, 28, 6), tone: "brass", o: 0.7, t: 1.8 + j * 0.12, dur: 0.8 });
    return lines;
  });

  return {
    strokes: [
      ...strokes,
      ...fixtures.map((f, j) => ({
        d: poly([[f.x - 5, t2 + 3], [f.x + 5, t2 + 3], [f.x + 3.5, fy + 2], [f.x - 3.5, fy + 2]], true),
        tone: "brass" as Tone,
        o: 0.95,
        t: 0.9 + j * 0.08,
        dur: 0.4,
      })),
    ],
    live: (reduce) => (
      <>
        {beams.map((lines, j) => (
          <g
            key={j}
            className="ill-anim"
            style={reduce ? undefined : amb("ill-sway", 7 + j * 1.3, -j * 1.7, `${fixtures[j].x}px ${fy}px`)}
          >
            {lines.map((s, i) => (
              <DrawPath key={i} s={s} reduce={reduce} />
            ))}
          </g>
        ))}
      </>
    ),
  };
})();

/** Delivery & results: the final bow. A confetti burst over a cheering crowd. */
const delivery: Plate = (() => {
  const cx = 200;
  const cy = 112;
  const strokes: Stroke[] = [];
  const confetti: { x: number; y: number; a: number; brass: boolean; i: number }[] = [];
  const n = 60;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * 360 + rand(i) * 3;
    const inner = 20 + rand(i + 7) * 10;
    const outer = 58 + rand(i + 21) * 62;
    const brass = i % 2 === 0;
    strokes.push({
      d: line(cx + inner * Math.cos(rad(a)), cy + inner * Math.sin(rad(a)), cx + outer * Math.cos(rad(a)), cy + outer * Math.sin(rad(a))),
      tone: brass ? "brass" : "ivory",
      o: brass ? 0.75 : 0.25,
      t: 0.6 + rand(i + 3) * 0.5,
      dur: 0.9,
    });
    if (i % 3 !== 1) confetti.push({ x: cx + (outer + 8) * Math.cos(rad(a)), y: cy + (outer + 8) * Math.sin(rad(a)), a, brass, i });
  }
  strokes.push({ d: circle(cx, cy, 9), tone: "brass", o: 0.95, t: 0.4 });
  strokes.push({ d: circle(cx, cy, 136), tone: "ivory", o: 0.08, t: 0.2, dur: 2, dash: "1 6" });

  // Crowd: a row of heads and shoulders, a few arms up
  const base = 280;
  for (let i = 0; i < 19; i++) {
    const x = 28 + i * 19.1 + (rand(i + 50) - 0.5) * 4;
    const hy = base - 22 - rand(i + 60) * 8;
    const hr = 5 + rand(i + 70) * 1.6;
    const t = 0.2 + Math.abs(i - 9) * 0.035;
    strokes.push({ d: circle(x, hy, hr), tone: "ivory", o: 0.4, t, dur: 0.5 });
    strokes.push({ d: arc(x, hy + hr + 14, 12, 200, 340), tone: "ivory", o: 0.3, t, dur: 0.5 });
    if (i % 3 === 1) {
      const side = i % 6 === 1 ? -1 : 1;
      strokes.push({ d: poly([[x + side * 8, hy + hr + 9], [x + side * 13, hy - 10], [x + side * 11, hy - 26]]), tone: "brass", o: 0.6, t: t + 0.4, dur: 0.6 });
    }
  }

  return {
    strokes,
    ambient: () => (
      <g className="ill-anim" style={amb("ill-spin", 90, 0, `${cx}px ${cy}px`)}>
        {confetti.map((c) => (
          <rect
            key={c.i}
            x={r(c.x - 1.6)}
            y={r(c.y - 3)}
            width={3.2}
            height={6}
            transform={`rotate(${r(c.a + rand(c.i) * 90)} ${r(c.x)} ${r(c.y)})`}
            fill={c.brass ? "var(--color-brass)" : "var(--color-ivory)"}
            fillOpacity={c.brass ? 0.85 : 0.45}
            className="ill-anim"
            style={amb("ill-twinkle", 2.4 + rand(c.i + 5) * 3, rand(c.i + 8) * 3)}
          />
        ))}
      </g>
    ),
  };
})();

/** Every moving part: tilted orbits around one centre, each carrying a part. */
const orbit: Plate = (() => {
  const cx = 200;
  const cy = 150;
  const rings = [
    { rx: 158, ry: 40, deg: -14, dur: 16 },
    { rx: 128, ry: 52, deg: 28, dur: 12 },
    { rx: 104, ry: 64, deg: 74, dur: 10 },
    { rx: 70, ry: 30, deg: -58, dur: 8 },
  ].map((o) => ({ ...o, d: tiltedEllipse(cx, cy, o.rx, o.ry, o.deg) }));
  const strokes: Stroke[] = [
    { d: circle(cx, cy, 138), tone: "ivory", o: 0.08, t: 0, dur: 1.8, dash: "1 5" },
    ...rings.map((o, i) => ({ d: o.d, tone: (i % 2 ? "ivory" : "brass") as Tone, o: i % 2 ? 0.35 : 0.75, t: 0.3 + i * 0.2, dur: 1.6 })),
    { d: circle(cx, cy, 10), tone: "brass", o: 0.95, t: 0.2 },
    { d: circle(cx, cy, 22), tone: "ivory", o: 0.25, t: 0.3 },
  ];
  for (let i = 0; i < 24; i++) {
    const a = i * 15;
    const len = i % 6 === 0 ? 10 : 5;
    strokes.push({ d: line(cx + 148 * Math.cos(rad(a)), cy + 148 * Math.sin(rad(a)), cx + (148 + len) * Math.cos(rad(a)), cy + (148 + len) * Math.sin(rad(a))), tone: "ivory", o: 0.3, t: 0.1 + i * 0.02, dur: 0.3 });
  }

  return {
    strokes,
    ambient: (reduce) => (
      <>
        {rings.map((o, i) => {
          // Static fallback position: a point a quarter of the way round
          const [sx, sy] = o.d.split("L")[24].split(" ").map(Number);
          return (
            <g key={i}>
              <circle r={i % 2 ? 3 : 4} cx={reduce ? sx : 0} cy={reduce ? sy : 0} fill={i % 2 ? "var(--color-ivory)" : "var(--color-brass)"}>
                {!reduce && <animateMotion dur={`${o.dur}s`} begin={`${-i * 2.3}s`} repeatCount="indefinite" path={o.d} />}
              </circle>
            </g>
          );
        })}
      </>
    ),
  };
})();

/** No hand-offs: one unbroken line from start to finish. */
const thread: Plate = (() => {
  const cx = 200;
  const cy = 152;
  const curve = (sx: number, sy: number) => {
    const pts: [number, number][] = [];
    for (let i = 0; i <= 480; i++) {
      const t = (i / 480) * Math.PI * 2;
      pts.push([cx + sx * Math.sin(3 * t + Math.PI / 2), cy + sy * Math.sin(2 * t)]);
    }
    return poly(pts);
  };
  const main = curve(150, 104);
  const strokes: Stroke[] = [
    { d: curve(166, 116), tone: "ivory", o: 0.08, t: 0.1, dur: 2.6 },
    { d: curve(134, 92), tone: "ivory", o: 0.12, t: 0.2, dur: 2.6 },
    { d: main, tone: "brass", o: 0.9, w: 1.25, t: 0.4, dur: 3.2 },
    { d: line(cx - 176, cy, cx + 176, cy), tone: "ivory", o: 0.1, t: 0, dur: 1.2 },
    { d: line(cx, cy - 128, cx, cy + 128), tone: "ivory", o: 0.1, t: 0, dur: 1.2 },
  ];
  return {
    strokes,
    ambient: (reduce) => (
      <>
        <circle cx={reduce ? cx + 150 : 0} cy={reduce ? cy : 0} r={4} fill="var(--color-brass)">
          {!reduce && <animateMotion dur="18s" begin="3.6s" repeatCount="indefinite" path={main} />}
        </circle>
        <circle cx={reduce ? cx + 150 : 0} cy={reduce ? cy : 0} r={10} fill="var(--color-brass)" opacity={0.15}>
          {!reduce && <animateMotion dur="18s" begin="3.6s" repeatCount="indefinite" path={main} />}
        </circle>
      </>
    ),
  };
})();

/** Built for repeat work: a colonnade of arches receding to one point. */
const arches: Plate = (() => {
  const vx = 200;
  const vy = 146;
  const archAt = (s: number) => {
    const p = (x: number, y: number): [number, number] => [vx + (x - vx) * s, vy + (y - vy) * s];
    const hw = 132 * s;
    const [lx, ly] = p(68, 284);
    const [, sy] = p(68, 150);
    const rx = vx + hw;
    return `M${r(lx)} ${r(ly)}L${r(lx)} ${r(sy)}A${r(hw)} ${r(hw)} 0 0 1 ${r(rx)} ${r(sy)}L${r(rx)} ${r(ly)}`;
  };
  const scales = Array.from({ length: 10 }, (_, i) => Math.pow(0.8, i));
  const strokes: Stroke[] = scales.map((s, i) => ({
    d: archAt(s),
    tone: (i < 4 ? "brass" : "ivory") as Tone,
    o: i < 4 ? 0.85 - i * 0.15 : 0.32 - (i - 4) * 0.04,
    t: 0.2 + i * 0.12,
    dur: 1.2,
  }));
  // Floor and spring lines converging on the vanishing point
  [[68, 284], [332, 284], [68, 150], [332, 150], [148, 284], [252, 284], [20, 284], [380, 284]].forEach(([x, y], i) => {
    strokes.push({ d: line(x, y, vx + (x - vx) * 0.1, vy + (y - vy) * 0.1), tone: "ivory", o: i < 4 ? 0.16 : 0.09, t: 0.1 + i * 0.05, dur: 1.4 });
  });
  strokes.push({ d: line(16, 284, 384, 284), tone: "ivory", o: 0.25, t: 0, dur: 1.2 });

  return {
    strokes,
    ambient: (reduce) => (
      <>
        {!reduce &&
          scales.map((s, i) => (
            <path
              key={i}
              d={archAt(s)}
              stroke="var(--color-brass)"
              strokeWidth={1.25}
              fill="none"
              vectorEffect="non-scaling-stroke"
              className="ill-anim"
              style={{ ...amb("ill-pass", 5, 2.4 + (scales.length - 1 - i) * 0.32), opacity: 0 }}
            />
          ))}
        <circle cx={vx} cy={vy} r={2.2} fill="var(--color-brass)" />
      </>
    ),
  };
})();

const PLATES: Record<IllustrationName, Plate> = {
  discovery,
  concept,
  production,
  delivery,
  orbit,
  thread,
  arches,
};

/* ---------- rendering ---------- */

function DrawPath({ s, reduce }: { s: Stroke; reduce: boolean }) {
  const common = {
    d: s.d,
    fill: "none",
    stroke: s.tone === "ivory" ? "var(--color-ivory)" : "var(--color-brass)",
    strokeOpacity: s.o ?? 1,
    strokeWidth: s.w ?? 1,
    strokeDasharray: s.dash,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    vectorEffect: "non-scaling-stroke" as const,
  };
  // Dashed strokes can't use pathLength (it overrides the dash array), so they fade in
  if (reduce) return <path {...common} />;
  if (s.dash) {
    return (
      <motion.path
        {...common}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: s.dur ?? 1.2, delay: s.t ?? 0 } } }}
      />
    );
  }
  return (
    <motion.path
      {...common}
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        show: {
          pathLength: 1,
          opacity: 1,
          transition: {
            pathLength: { duration: s.dur ?? 1.1, delay: s.t ?? 0, ease: [0.65, 0, 0.35, 1] },
            opacity: { duration: 0.01, delay: s.t ?? 0 },
          },
        },
      }}
    />
  );
}

interface StepIllustrationProps {
  name: IllustrationName;
  className?: string;
}

export default function StepIllustration({ name, className = "" }: StepIllustrationProps) {
  const reduce = Boolean(useReducedMotion());
  const plate = PLATES[name];

  return (
    <div
      aria-hidden="true"
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-[radial-gradient(ellipse_at_50%_42%,color-mix(in_oklab,var(--color-forest)_70%,transparent),var(--color-ink-deep)_72%)] ring-1 ring-inset ring-line ${className}`}
    >
      <motion.svg
        viewBox={`0 0 ${W} ${H}`}
        className="absolute inset-0 h-full w-full"
        initial={reduce ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        {plate.strokes.map((s, i) => (
          <DrawPath key={i} s={s} reduce={reduce} />
        ))}
        {plate.live?.(reduce)}
        <motion.g
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1, delay: reduce ? 0 : 1.6 } } }}
        >
          {plate.ambient?.(reduce)}
        </motion.g>
        {/* Registration marks */}
        {[
          [14, 14, 1, 1],
          [W - 14, 14, -1, 1],
          [14, H - 14, 1, -1],
          [W - 14, H - 14, -1, -1],
        ].map(([x, y, sx, sy], i) => (
          <path
            key={i}
            d={`M${x} ${y + sy * 8}L${x} ${y}L${x + sx * 8} ${y}`}
            fill="none"
            stroke="var(--color-ivory)"
            strokeOpacity={0.3}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </motion.svg>
    </div>
  );
}
