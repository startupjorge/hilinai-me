import Image from "next/image";

/**
 * Official HILINAI logo assets. Do not recreate, redraw, recolor or modify
 * these files: swap the source PNGs in public/logo/ if the brand updates them.
 */
const LOGO = {
  horizontal: { src: "/logo/horizontal-slogan-en.png", ratio: 1600 / 589 },
  stacked: { src: "/logo/stacked-slogan-en.png", ratio: 1000 / 908 },
  stackedNoSlogan: { src: "/logo/stacked-no-slogan.png", ratio: 1000 / 908 },
  icon: { src: "/logo/icon-square.png", ratio: 1 },
} as const;

export function Logo({
  variant = "horizontal",
  height = 36,
  className = "",
  priority = false,
}: {
  variant?: keyof typeof LOGO;
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  const { src, ratio } = LOGO[variant];
  const width = Math.round(height * ratio);
  return (
    <Image
      src={src}
      alt="Hilinai"
      width={width}
      height={height}
      priority={priority}
      className={`h-auto w-auto object-contain ${className}`}
      style={{ height, width }}
    />
  );
}
