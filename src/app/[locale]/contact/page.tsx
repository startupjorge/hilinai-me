import type { Metadata } from "next";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { brand, socials, whatsappLink } from "@/content/site";
import { Container, Eyebrow, WhatsAppIcon } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { SocialIcon } from "@/components/SocialIcon";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "es");
  return { title: dict.contactPage.title, description: dict.contactPage.lead };
}

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "es";
  const dict = getDictionary(l);
  const t = dict.contactPage;

  const rows: {
    label: string;
    value: string;
    href: string;
    icon: "whatsapp" | (typeof socials)[number]["key"];
  }[] = [
    {
      label: t.whatsappLabel,
      value: brand.whatsappDisplay,
      href: whatsappLink(),
      icon: "whatsapp",
    },
    ...socials.map((s) => ({
      label: s.label,
      value: s.label,
      href: s.href,
      icon: s.key,
    })),
  ];

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
        </Container>
      </section>

      <section>
        <Container className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {dict.cta.whatsapp}
            </a>

            <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {rows.map((r) => (
                <div key={r.label} className="flex items-center justify-between gap-4 py-3.5">
                  <dt className="flex items-center gap-2.5 text-sm text-ink-soft">
                    <span className="text-sea">
                      <SocialIcon name={r.icon} className="h-4 w-4" />
                    </span>
                    {r.label}
                  </dt>
                  <dd>
                    <a
                      href={r.href}
                      target={r.href.startsWith("http") ? "_blank" : undefined}
                      rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-ink hover:text-sea"
                    >
                      {r.value}
                    </a>
                  </dd>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 py-3.5">
                <dt className="text-sm text-ink-soft">{t.locationLabel}</dt>
                <dd className="text-sm font-medium text-ink text-right">
                  {t.locationValue}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-paper-deep/50 p-7 sm:p-9">
            <h2 className="font-display text-xl font-semibold text-ink">
              {t.formTitle}
            </h2>
            <div className="mt-5">
              <ContactForm dict={t} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
