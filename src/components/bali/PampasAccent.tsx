import type { ReactElement } from "react";

type Position = "hero-right" | "hero-left" | "side-left" | "side-right" | "center-soft";

const SVGS: Record<Position, ReactElement> = {
  "hero-right": (
    <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g stroke="#b89770" strokeWidth="1.1" strokeLinecap="round" opacity="0.9">
        {Array.from({ length: 38 }).map((_, i) => {
          const angle = -8 + i * 1.6;
          const len = 240 + (i % 7) * 30;
          const x2 = 200 + Math.sin((angle * Math.PI) / 180) * len;
          const y2 = 580 - Math.cos((angle * Math.PI) / 180) * len;
          return <line key={i} x1="200" y1="580" x2={x2} y2={y2} />;
        })}
        {Array.from({ length: 22 }).map((_, i) => {
          const angle = -20 + i * 2;
          const len = 180 + (i % 5) * 22;
          const x2 = 260 + Math.sin((angle * Math.PI) / 180) * len;
          const y2 = 590 - Math.cos((angle * Math.PI) / 180) * len;
          return <line key={`b${i}`} x1="260" y1="590" x2={x2} y2={y2} opacity="0.7" />;
        })}
      </g>
    </svg>
  ),
  "hero-left": (
    <svg viewBox="0 0 300 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g stroke="#c2a079" strokeWidth="1" strokeLinecap="round">
        {Array.from({ length: 28 }).map((_, i) => {
          const angle = -6 + i * 1.4;
          const len = 200 + (i % 6) * 24;
          const x2 = 100 + Math.sin((angle * Math.PI) / 180) * len;
          const y2 = 490 - Math.cos((angle * Math.PI) / 180) * len;
          return <line key={i} x1="100" y1="490" x2={x2} y2={y2} />;
        })}
      </g>
    </svg>
  ),
  "side-left": (
    <svg viewBox="0 0 220 700" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g stroke="#b89770" strokeWidth="1" strokeLinecap="round">
        {Array.from({ length: 30 }).map((_, i) => {
          const angle = 10 + i * 1.2;
          const len = 320 + (i % 5) * 20;
          const x2 = 30 + Math.sin((angle * Math.PI) / 180) * len;
          const y2 = 700 - Math.cos((angle * Math.PI) / 180) * len;
          return <line key={i} x1="30" y1="700" x2={x2} y2={y2} />;
        })}
        {Array.from({ length: 18 }).map((_, i) => {
          const angle = -4 + i * 1.6;
          const len = 220 + (i % 4) * 18;
          const x2 = 70 + Math.sin((angle * Math.PI) / 180) * len;
          const y2 = 720 - Math.cos((angle * Math.PI) / 180) * len;
          return <line key={`b${i}`} x1="70" y1="720" x2={x2} y2={y2} opacity="0.7" />;
        })}
      </g>
    </svg>
  ),
  "side-right": (
    <svg viewBox="0 0 220 700" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g stroke="#b89770" strokeWidth="1" strokeLinecap="round">
        {Array.from({ length: 30 }).map((_, i) => {
          const angle = -10 - i * 1.2;
          const len = 320 + (i % 5) * 20;
          const x2 = 190 + Math.sin((angle * Math.PI) / 180) * len;
          const y2 = 700 - Math.cos((angle * Math.PI) / 180) * len;
          return <line key={i} x1="190" y1="700" x2={x2} y2={y2} />;
        })}
        {Array.from({ length: 18 }).map((_, i) => {
          const angle = 4 - i * 1.6;
          const len = 220 + (i % 4) * 18;
          const x2 = 150 + Math.sin((angle * Math.PI) / 180) * len;
          const y2 = 720 - Math.cos((angle * Math.PI) / 180) * len;
          return <line key={`b${i}`} x1="150" y1="720" x2={x2} y2={y2} opacity="0.7" />;
        })}
      </g>
    </svg>
  ),
  "center-soft": (
    <svg viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g stroke="#c2a079" strokeWidth="0.9" strokeLinecap="round">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = -22 + i * 2;
          const len = 180 + (i % 5) * 16;
          const x2 = 300 + Math.sin((angle * Math.PI) / 180) * len;
          const y2 = 300 - Math.cos((angle * Math.PI) / 180) * len;
          return <line key={i} x1="300" y1="300" x2={x2} y2={y2} />;
        })}
      </g>
    </svg>
  ),
};

export function PampasAccent({
  position,
  className = "",
  opacity = 0.12,
}: {
  position: Position;
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute hidden md:block ${className}`}
      style={{ opacity, zIndex: 0 }}
    >
      {SVGS[position]}
    </div>
  );
}
