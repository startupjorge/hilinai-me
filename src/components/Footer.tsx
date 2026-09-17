import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/routing";
import { brand, socials, tagline, whatsappLink } from "@/content/site";
import { Logo } from "./Logo";
import { MailIcon } from "./ui";
import { SocialIcon } from "./SocialIcon";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const nav = [
    { href: localePath(locale, "/"), label: dict.nav.home },
    { href: localePath(locale, "/services"), label: dict.nav.services },
    { href: localePath(locale, "/about"), label: dict.nav.about },
    { href: `${localePath(locale, "/about")}#how-i-work`, label: dict.aboutPage.approachTitle },
    { href: `${localePath(locale, "/about")}#my-path`, label: dict.aboutPage.storyTitle },
    { href: localePath(locale, "/contact"), label: dict.nav.contact },
    { href: localePath(locale, "/book"), label: dict.nav.book },
  ];

  return (
    <footer className="mt-auto border-t border-ink/10 bg-paper-deep">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo variant="horizontal" height={32} />
          <p className="mt-4 max-w-sm font-display text-base leading-relaxed text-ink-soft">
            {tagline[locale]}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
            {dict.footer.nav}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink-soft hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
            {dict.footer.contact}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-soft hover:text-ink"
              >
                <SocialIcon name="whatsapp" className="h-4 w-4" />
                {brand.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex items-center gap-2 text-ink-soft hover:text-ink"
              >
                <MailIcon className="h-4 w-4" />
                {brand.email}
              </a>
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:border-sea hover:text-sea"
              >
                <SocialIcon name={s.key} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            &copy; {new Date().getFullYear()} {brand.legalName}. {dict.footer.rights}
          </p>
          <p>{locale === "es" ? brand.availabilityEs : brand.availabilityEn}</p>
        </div>
      </div>
    </footer>
  );
}
