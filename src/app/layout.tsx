import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Corbert Demibold, the official HILINAI brand typeface for titles and
 * slogans. Only the Demibold weight was supplied; body copy still runs on
 * Inter until Corbert Regular (and Chennai Regular for short uppercase
 * labels) are provided.
 */
const corbert = localFont({
  variable: "--font-corbert",
  display: "swap",
  src: [
    { path: "../fonts/Corbert-DemiBold.otf", weight: "600", style: "normal" },
    {
      path: "../fonts/Corbert-DemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hilinai.me"),
  title: {
    default: "HILINAI | Trust Your Confidence",
    template: "%s | HILINAI",
  },
  description:
    "Hilinai is an invitation to recognition, clarity and conscious action, with Maria Elena Acevedo. Individual and group experiences, virtually in English and Spanish.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${corbert.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
