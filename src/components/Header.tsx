"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/routing";
import { socials } from "@/content/site";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SocialIcon } from "./SocialIcon";

export function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "";

  const links = [
    { href: localePath(locale, "/services"), label: dict.nav.services },
    { href: localePath(locale, "/about"), label: dict.nav.about },
    { href: localePath(locale, "/contact"), label: dict.nav.contact },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href={localePath(locale, "/")}
          onClick={() => setOpen(false)}
        >
          <Logo variant="horizontal" height={30} priority className="hidden sm:block" />
          <Logo variant="icon" height={34} priority className="sm:hidden" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors hover:text-ink ${
                isActive(l.href)
                  ? "text-ink font-medium"
                  : "text-ink-soft"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1">
            {socials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-mist hover:text-sea"
              >
                <SocialIcon name={s.key} className="h-4 w-4" />
              </a>
            ))}
          </div>
          <LanguageSwitcher locale={locale} />
          <Link
            href={localePath(locale, "/book")}
            className="rounded-full bg-sea px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-sea-deep"
          >
            {dict.cta.bookShort}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 text-ink md:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-transform ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-current transition-transform ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-paper md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm ${
                  isActive(l.href)
                    ? "bg-paper-deep text-ink font-medium"
                    : "text-ink-soft"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between border-t border-ink/10 pt-4">
              <LanguageSwitcher locale={locale} />
              <Link
                href={localePath(locale, "/book")}
                onClick={() => setOpen(false)}
                className="rounded-full bg-sea px-4 py-2 text-sm font-medium text-paper"
              >
                {dict.cta.bookShort}
              </Link>
            </div>
            {socials.length > 0 && (
              <div className="mt-3 flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink-soft"
                  >
                    <SocialIcon name={s.key} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
