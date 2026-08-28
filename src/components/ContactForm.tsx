"use client";

import { useState } from "react";
import { brand } from "@/content/site";
import type { Dictionary } from "@/i18n/dictionaries";

type Status = "idle" | "sending" | "success" | "error";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export function ContactForm({ dict }: { dict: Dictionary["contactPage"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const interest = String(data.get("interest") ?? "");
    const message = String(data.get("message") ?? "");

    // No key configured: fall back to opening the visitor's mail app.
    if (!WEB3FORMS_KEY) {
      const body = `${message}\n\n${interest ? `[${interest}]\n` : ""}${name}\n${email}`;
      window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(
        name,
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Hilina'i Me: mensaje de ${name}`,
          from_name: "Hilina'i Me",
          name,
          email,
          interest,
          message,
          botcheck: data.get("botcheck") ? true : undefined,
        }),
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
      if (json.success) form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-1.5 w-full rounded-lg border border-ink/15 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-sea disabled:opacity-60";

  if (status === "success") {
    return (
      <div className="rounded-xl border border-sea/25 bg-mist/50 p-6 text-sm text-ink">
        {dict.formSuccess}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          {dict.formName}
          <input name="name" required className={field} />
        </label>
        <label className="block text-sm font-medium text-ink">
          {dict.formEmail}
          <input name="email" type="email" required className={field} />
        </label>
      </div>
      <label className="block text-sm font-medium text-ink">
        {dict.formInterest}
        <input name="interest" className={field} />
      </label>
      <label className="block text-sm font-medium text-ink">
        {dict.formMessage}
        <textarea name="message" rows={5} required className={field} />
      </label>

      {/* Honeypot: hidden from people, catches bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-sea px-6 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-sea-deep disabled:opacity-60"
      >
        {status === "sending" ? dict.formSending : dict.formSubmit}
      </button>

      <p
        className={`text-xs ${status === "error" ? "text-coral-deep" : "text-ink-soft"}`}
      >
        {status === "error" ? dict.formError : dict.formNote}
      </p>
    </form>
  );
}
