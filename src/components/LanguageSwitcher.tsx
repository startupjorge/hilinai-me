"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/routing";
import type { Locale } from "@/i18n/config";

export function LanguageSwitcher({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname() || `/${locale}`;

  return (
    <div
      className={`inline-flex items-center rounded-full border border-ink/15 p-0.5 text-xs font-medium ${className}`}
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={switchLocalePath(pathname, l)}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${
              active
                ? "bg-sea text-paper"
                : "text-ink-soft hover:text-ink"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
