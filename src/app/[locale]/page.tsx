import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/routing";
import { services, serviceCopy, brand, slogan, whatsappLink } from "@/content/site";
import { Button, Container, Eyebrow, SectionHeading, WhatsAppIcon } from "@/components/ui";
import { ServiceIcon } from "@/components/ServiceIcon";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "es");
  return {
    title: { absolute: `${brand.name} | ${brand.practitioner}` },
    description: dict.home.heroLead,
  };
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "es";
  const dict = getDictionary(l);
  const t = dict.home;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <Eyebrow>{slogan}</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              {t.heroLead}
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
              {t.heroLead2}
            </p>
            <p className="mt-4 max-w-xl text-sm text-ink-soft/80">{t.heroNote}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={localePath(l, "/book")}>{dict.cta.book}</Button>
              <Button href={localePath(l, "/services")} variant="outline">
                {dict.cta.explore}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-ink/10 shadow-xl shadow-ink/10">
              <Image
                src="/images/practitioner-balcony.jpg"
                alt={brand.practitioner}
                fill
                priority
                sizes="(min-width: 1024px) 460px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-ink/10 bg-paper px-5 py-4 shadow-lg shadow-ink/10 sm:block">
              <p className="font-display text-lg font-semibold text-ink">
                {brand.practitioner}
              </p>
              <p className="text-xs text-ink-soft">
                {l === "es" ? brand.roleEs : brand.roleEn}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="border-y border-ink/10 bg-mist/50">
        <Container className="py-16 sm:py-20">
          <SectionHeading title={t.pillarsTitle} align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-ink/10 bg-paper p-7"
              >
                <h3 className="font-display text-xl font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow={dict.servicesPage.eyebrow}
            title={t.servicesTitle}
            lead={t.servicesLead}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s) => {
              const c = serviceCopy(s, l);
              return (
                <Link
                  key={s.slug}
                  href={localePath(l, `/services/${s.slug}`)}
                  className="group flex flex-col rounded-2xl border border-ink/10 bg-paper p-7 transition-colors hover:border-sea/40"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sea/10 text-sea">
                    <ServiceIcon name={s.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {c.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {c.tagline}
                  </p>
                  <p className="mt-4 text-sm font-medium text-sea">
                    {c.price}
                    <span className="ml-2 text-ink-soft/70 transition-transform group-hover:translate-x-0.5 inline-block">
                      &rarr;
                    </span>
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="mt-10">
            <Button href={localePath(l, "/services")} variant="ghost">
              {dict.cta.allServices} &rarr;
            </Button>
          </div>
        </Container>
      </section>

      {/* About preview */}
      <section className="border-y border-ink/10 bg-paper-deep">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-ink/10 shadow-lg shadow-ink/10">
            <Image
              src="/images/seaside-sculpture.jpg"
              alt={brand.practitioner}
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>{dict.aboutPage.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t.aboutTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              {t.aboutBody}
            </p>
            <div className="mt-7">
              <Button href={localePath(l, "/about")} variant="outline">
                {t.aboutLink}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quotes */}
      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading title={t.quoteTitle} align="center" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {t.quotes.map((q, i) => (
              <blockquote
                key={i}
                className="relative rounded-2xl border border-ink/10 bg-mist/40 p-7"
              >
                <span
                  aria-hidden
                  className="font-display text-5xl leading-none text-sea/30"
                >
                  &ldquo;
                </span>
                <p className="-mt-4 font-display text-lg leading-relaxed text-ink">
                  {q}
                </p>
                <footer className="mt-4 text-sm font-medium text-ink-soft">
                  {brand.practitioner}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-sea text-paper">
        <Container className="flex flex-col items-start gap-6 py-16 sm:py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.ctaTitle}
            </h2>
            <p className="mt-3 text-paper/85">{t.ctaBody}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={localePath(l, "/book")}
              className="inline-flex items-center justify-center rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-sea transition-colors hover:bg-paper-deep"
            >
              {dict.cta.book}
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/40 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-paper/10"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {dict.cta.whatsapp}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
