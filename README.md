# Hilina'i Me

Bilingual (Spanish and English) website for Maria Elena Acevedo, Conscious Transformation Facilitator, Miami and Fort Lauderdale area.

Built with Next.js 16 (App Router) and Tailwind CSS v4.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3002. The site redirects `/` to `/es` (Spanish default) or `/en` based on the browser language.

## Project layout

| Path | What it holds |
| --- | --- |
| `src/app/[locale]/` | Pages: home, `services`, `services/[slug]`, `about`, `book`, `contact` |
| `src/content/site.ts` | Brand details, services, pricing, Maria Elena's story, the tagline |
| `src/i18n/dictionaries.ts` | All UI text in both languages |
| `src/proxy.ts` | Locale detection and redirect (Next.js 16 renamed middleware to proxy) |
| `public/images/` | Photography (currently placeholder shots, replace with final images) |

To edit copy, change `src/content/site.ts` and `src/i18n/dictionaries.ts`. Everything is in one place per language.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Contact form delivery. Get a free key at https://web3forms.com using Mane78@hotmail.com. If empty, the form falls back to opening the visitor's mail app. |

## Deploy to Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. In Vercel, **Add New Project** and import the repo. Vercel detects Next.js automatically, no settings to change.
3. Under **Settings, Environment Variables**, add `NEXT_PUBLIC_WEB3FORMS_KEY` with the Web3Forms key.
4. Deploy. Vercel gives a `*.vercel.app` URL right away.
5. To use a custom domain, add it under **Settings, Domains** and follow the DNS instructions.

Every push to the default branch deploys to production. Pull requests get their own preview URL.

## Still to finalize

- Final logo asset (replace the placeholder mark in `src/components/Logo.tsx`)
- Real photography in `public/images/`
- TikTok and YouTube URLs in `src/content/site.ts`
- Membership program price in `src/content/site.ts`
- Real booking calendar on `/book` (Cal.com embed recommended)
