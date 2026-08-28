import Link from "next/link";
import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/routing";
import { services, serviceCopy } from "@/content/site";
import { Container, SectionHeading, Button } from "@/components/ui";
import { ServiceIcon } from "@/components/ServiceIcon";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/services">): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "es");
  return {
    title: dict.servicesPage.title,
    description: dict.servicesPage.lead,
  };
}

export default async function ServicesPage({
  params,
}: PageProps<"/[locale]/services">) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "es";
  const dict = getDictionary(l);
  const t = dict.servicesPage;

  return (
    <>
      <section className="border-b border-ink/10 bg-mist/50">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        </Container>
      </section>

      <section>
        <Container className="py-14 sm:py-16">
          <div className="grid gap-8">
            {services.map((s) => {
              const c = serviceCopy(s, l);
              return (
                <article
                  key={s.slug}
                  className="grid gap-6 rounded-2xl border border-ink/10 bg-paper p-7 sm:p-9 lg:grid-cols-[1.4fr_1fr]"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sea/10 text-sea">
                        <ServiceIcon name={s.icon} />
                      </span>
                      {s.featured && (
                        <span className="rounded-full bg-coral/15 px-3 py-1 text-xs font-medium text-coral-deep">
                          {l === "es" ? "Proceso completo" : "Full process"}
                        </span>
                      )}
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
                      {c.name}
                    </h2>
                    <p className="mt-2 text-sm font-medium text-ink-soft">
                      {c.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                      {c.summary}
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                      <span className="font-semibold text-ink">{t.forWho}: </span>
                      {c.forWho}
                    </p>
                  </div>

                  <div className="rounded-xl border border-ink/10 bg-paper-deep/60 p-6">
                    <dl className="space-y-3 text-sm">
                      <div>
                        <dt className="text-xs uppercase tracking-wide text-ink-soft">
                          {t.investment}
                        </dt>
                        <dd className="font-display text-xl font-semibold text-ink">
                          {c.price}
                        </dd>
                        {c.priceNote && (
                          <dd className="mt-1 text-xs text-ink-soft">
                            {c.priceNote}
                          </dd>
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
                    <div className="mt-5 flex flex-col gap-2">
                      <Button
                        href={localePath(l, `/services/${s.slug}`)}
                        variant="outline"
                        className="w-full"
                      >
                        {dict.cta.learnMore}
                      </Button>
                      <Button
                        href={localePath(l, `/book?service=${s.slug}`)}
                        className="w-full"
                      >
                        {t.bookThis}
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
