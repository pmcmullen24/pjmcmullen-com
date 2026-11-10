import type { Metadata } from "next";
import { Faustina, Sono, Tenor_Sans } from "next/font/google";
import "./globals.css";

// Faustina (Omnibus-Type press series): a text face for books, newspapers and magazines.
// Used for headings and reading copy. Tenor Sans: nav, buttons, captions. Sono: small labels.
const serif = Faustina({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const sans = Tenor_Sans({ subsets: ["latin"], weight: "400", variable: "--font-sans" });
const mono = Sono({ subsets: ["latin"], axes: ["MONO"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pjmcmullen.com"),
  title: "PJ McMullen",
  description: "PJ McMullen makes software in Rochester, NY. A few things he's built.",
  openGraph: {
    title: "PJ McMullen",
    description: "A few things I've built.",
    url: "https://pjmcmullen.com",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
