/**
 * Placeholder brand mark for Hilina'i Me.
 * A sacred geometry octagram echoing Maria Elena's mandala.
 * Swap for the final logo asset when available.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  const cx = 50;
  const cy = 50;
  const r = 42;
  const outer = Array.from({ length: 8 }, (_, i) => {
    const a = (Math.PI / 4) * i - Math.PI / 2;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const;
  });
  const inner = Array.from({ length: 8 }, (_, i) => {
    const a = (Math.PI / 4) * i - Math.PI / 2 + Math.PI / 8;
    return [cx + r * 0.62 * Math.cos(a), cy + r * 0.62 * Math.sin(a)] as const;
  });

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Hilina'i Me"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points={outer.map((p) => p.join(",")).join(" ")}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.35"
      />
      {outer.map((p, i) => {
        const q = outer[(i + 3) % 8];
        return (
          <line
            key={i}
            x1={p[0]}
            y1={p[1]}
            x2={q[0]}
            y2={q[1]}
            stroke="currentColor"
            strokeWidth="1.4"
            opacity="0.7"
          />
        );
      })}
      <polygon
        points={inner.map((p) => p.join(",")).join(" ")}
        fill="currentColor"
        opacity="0.12"
      />
      <circle cx={cx} cy={cy} r="4.5" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-lg font-semibold tracking-tight ${className}`}
    >
      Hilina&apos;i Me
    </span>
  );
}
