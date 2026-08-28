"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { booking } from "@/content/site";
import type { Locale } from "@/i18n/config";

/** Cal.com inline booking widget. Theme and language follow the site. */
export function CalEmbed({
  locale,
  notes,
}: {
  locale: Locale;
  notes?: string;
}) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: booking.namespace });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#2f6d9e" },
          dark: { "cal-brand": "#a7c8dd" },
        },
      });
    })();
  }, []);

  return (
    <Cal
      namespace={booking.namespace}
      calLink={booking.calLink}
      style={{ width: "100%", height: "100%", overflow: "auto" }}
      config={{
        layout: "month_view",
        language: locale,
        ...(notes ? { notes } : {}),
      }}
    />
  );
}
