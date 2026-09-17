import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/routing";
import { getService, serviceCopy, services, whatsappLink } from "@/content/site";
import { Container, Button, Eyebrow, WhatsAppIcon } from "@/components/ui";
import { ServiceIcon } from "@/components/ServiceIcon";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const l = isLocale(locale) ? locale : "es";
  const service = getService(slug);
  if (!service) return { title: getDictionary(l).servicesPage.notFound };
  const c = serviceCopy(service, l);
  return { title: c.name, description: c.tagline };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/[locale]/services/[slug]">) {
  const { locale, slug } = await params;
  const l = isLocale(locale) ? locale : "es";
  const dict = getDictionary(l);
  const t = dict.servicesPage;
  const service = getService(slug);
  if (!service) notFound();
  const c = serviceCopy(service, l);

  const waText =
    l === "es"
      ? `Hola Maria Elena, me interesa "${c.name}".`
      : `Hi Maria Elena, I am interested in "${c.name}".`;

  return (
    <>
      <section className="border-b border-ink/10 bg-mist/50">
        <Container className="py-14 sm:py-16">
          <Link
            href={localePath(l, "/services")}
            className="text-sm text-ink-soft hover:text-ink"
          >
            {t.backToServices}
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sea/10 text-sea">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
            <Eyebrow>{dict.servicesPage.eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {c.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {c.tagline}
          </p>
        </Container>
      </section>

      <section>
        <Container className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-10">
            <p className="text-base leading-relaxed text-ink-soft">{c.summary}</p>

            <div>
              <h2 className="font-display text-xl font-semibold text-ink">
                {t.forWho}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {c.forWho}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-xl font-semibold text-ink">
                  {t.includes}
                </h2>
                <ul className="mt-3 space-y-2">
                  {c.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sea" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-ink">
                  {t.outcomes}
                </h2>
                <ul className="mt-3 space-y-2">
                  {c.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sand-deep" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-ink/10 bg-paper-deep/60 p-7">
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ink-soft">
                    {t.investment}
                  </dt>
                  <dd className="font-display text-2xl font-semibold text-ink">
                    {c.price}
                  </dd>
                  {c.priceNote && (
                    <dd className="mt-1 text-xs text-ink-soft">{c.priceNote}</dd>
                  )}
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ink-soft">
                    {t.format}
                  </dt>
                  <dd className="text-ink">{c.format}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ink-soft">
                    {t.duration}
                  </dt>
                  <dd className="text-ink">{c.duration}</dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-col gap-2">
                <Button
                  href={localePath(l, `/book?service=${service.slug}`)}
                  className="w-full"
                >
                  {t.bookThis}
                </Button>
                <a
                  href={whatsappLink(waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-sea/40 px-5 py-2.5 text-sm font-medium text-sea transition-colors hover:bg-sea/5"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {dict.cta.whatsapp}
                </a>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
