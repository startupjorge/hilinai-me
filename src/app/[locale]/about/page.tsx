import Image from "next/image";
import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/routing";
import { brand, philosophy, story, whatsappLink } from "@/content/site";
import { Container, Eyebrow, Button, WhatsAppIcon } from "@/components/ui";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "es");
  return {
    title: dict.aboutPage.title,
    description: dict.aboutPage.introParagraphs[0],
  };
}

export default async function AboutPage({
  params,
}: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "es";
  const dict = getDictionary(l);
  const t = dict.aboutPage;
  const s = story[l];

  return (
    <>
      <section className="border-b border-ink/10 bg-mist/50">
        <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {t.title}
            </h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-sea">
              {t.role}
            </p>
            <div className="mt-5 max-w-xl space-y-4">
              {t.introParagraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-ink/10 shadow-xl shadow-ink/10">
            <Image
              src="/images/hero-coast.jpg"
              alt={brand.practitioner}
              fill
              priority
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Approach: How I Work */}
      <section id="how-i-work" className="scroll-mt-20">
        <Container className="py-16 sm:py-20">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            {t.approachTitle}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {t.approach.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-ink/10 bg-paper p-7"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Story: My Path */}
      <section id="my-path" className="scroll-mt-20 border-y border-ink/10 bg-paper-deep">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {t.storyTitle}
            </h2>
            <p className="mt-5 font-display text-xl leading-relaxed text-ink">
              {s.lead}
            </p>
            <div className="mt-8 space-y-5">
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>

            <blockquote className="mt-10 border-l-2 border-sea/40 pl-5">
              <p className="font-display text-lg italic leading-relaxed text-ink">
                &ldquo;{philosophy[l]}&rdquo;
              </p>
              <footer className="mt-2 text-xs font-medium uppercase tracking-wide text-ink-soft">
                {t.philosophyLabel}
              </footer>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t.ctaTitle}
            </h2>
            <p className="mt-3 text-ink-soft">{t.ctaBody}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button href={localePath(l, "/book")}>{dict.cta.book}</Button>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-sea/40 px-5 py-2.5 text-sm font-medium text-sea transition-colors hover:bg-sea/5"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {dict.cta.whatsapp}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
