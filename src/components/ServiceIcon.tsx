type Props = { name: string; className?: string };

/** Small line icons for the service cards. Stroke inherits currentColor. */
export function ServiceIcon({ name, className = "h-6 w-6" }: Props) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "compass":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2 5-5 2 2-5z" />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      );
    case "tree":
      return (
        <svg {...common}>
          <path d="M12 22v-6" />
          <path d="M12 16c-3.5 0-6-2.5-6-5.5S8.5 4 12 4s6 3 6 6.5S15.5 16 12 16Z" />
          <path d="M9 10.5 12 13l3-2.5" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
          <path d="M12 9c1 1.6 1.4 2 3 3-1.6 1-2 1.4-3 3-1-1.6-1.4-2-3-3 1.6-1 2-1.4 3-3Z" />
        </svg>
      );
    case "circle":
      return (
        <svg {...common}>
          <circle cx="7" cy="12" r="3" />
          <circle cx="17" cy="8" r="3" />
          <circle cx="16" cy="17" r="3" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
