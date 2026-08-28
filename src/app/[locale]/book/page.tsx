import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  brand,
  getService,
  serviceCopy,
  services,
  whatsappLink,
} from "@/content/site";
import { Container, Eyebrow, WhatsAppIcon } from "@/components/ui";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/book">): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "es");
  return { title: dict.bookPage.title, description: dict.bookPage.lead };
}

export default async function BookPage({
  params,
  searchParams,
}: PageProps<"/[locale]/book">) {
  const { locale } = await params;
  const sp = await searchParams;
  const l = isLocale(locale) ? locale : "es";
  const dict = getDictionary(l);
  const t = dict.bookPage;

  const rawService = Array.isArray(sp.service) ? sp.service[0] : sp.service;
  const selected = rawService ? getService(rawService) : undefined;
  const selectedName = selected ? serviceCopy(selected, l).name : undefined;

  const waText = selectedName
    ? l === "es"
      ? `Hola Maria Elena, quiero reservar "${selectedName}".`
      : `Hi Maria Elena, I would like to book "${selectedName}".`
    : l === "es"
      ? "Hola Maria Elena, quiero reservar una sesión."
      : "Hi Maria Elena, I would like to book a session.";

  const emailSubject = selectedName
    ? `${l === "es" ? "Reserva" : "Booking"}: ${selectedName}`
    : l === "es"
      ? "Reserva de sesión"
      : "Session booking";

  return (
    <>
      <section className="border-b border-ink/10 bg-mist/50">
        <Container className="py-16 sm:py-20">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {t.lead}
          </p>
          {selectedName && (
            <p className="mt-4 inline-flex rounded-full bg-sea/10 px-4 py-1.5 text-sm font-medium text-sea">
              {t.chooseService}: {selectedName}
            </p>
          )}
        </Container>
      </section>

      <section>
        <Container className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              {t.calendarTitle}
            </h2>
            <div className="mt-4 flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-ink/25 bg-paper-deep/50 p-8 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sea/10 text-sea">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-6 w-6"
                >
                  <rect x="3" y="4.5" width="18" height="16" rx="2" />
                  <path d="M3 9h18M8 2.5v4M16 2.5v4" />
                </svg>
              </span>
              <p className="mt-4 text-sm font-medium text-ink">
                {t.calendarPlaceholder}
              </p>
              <p className="mt-2 max-w-sm text-sm text-ink-soft">
                {t.calendarNote}
              </p>
            </div>

            <h2 className="mt-10 font-display text-xl font-semibold text-ink">
              {t.stepsTitle}
            </h2>
            <ol className="mt-4 space-y-4">
              {t.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sea text-xs font-semibold text-paper">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-ink-soft">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-ink/10 bg-paper p-7">
              <h2 className="font-display text-lg font-semibold text-ink">
                {dict.contactPage.title}
              </h2>
              <div className="mt-5 space-y-3">
                <a
                  href={whatsappLink(waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {dict.cta.whatsapp}
                </a>
                <a
                  href={`mailto:${brand.email}?subject=${encodeURIComponent(emailSubject)}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-sea/40 px-5 py-3 text-sm font-medium text-sea transition-colors hover:bg-sea/5"
                >
                  {dict.contactPage.emailLabel}
                </a>
              </div>
              <p className="mt-4 text-xs text-ink-soft">
                {brand.whatsappDisplay} &middot; {brand.city}
              </p>

              <div className="mt-6 border-t border-ink/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                  {dict.servicesPage.eyebrow}
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  {services.map((svc) => {
                    const c = serviceCopy(svc, l);
                    return (
                      <li
                        key={svc.slug}
                        className="flex items-center justify-between gap-3"
                      >
                        <span className="text-ink-soft">{c.name}</span>
                        <span className="font-medium text-ink">{c.price}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
