import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-32 text-center">
      <p className="font-display text-5xl font-semibold text-ink">404</p>
      <p className="text-ink-soft">
        Esta página no existe. / This page does not exist.
      </p>
      <Link
        href="/es"
        className="rounded-full bg-sea px-5 py-2.5 text-sm font-medium text-paper hover:bg-sea-deep"
      >
        Inicio / Home
      </Link>
    </div>
  );
}
