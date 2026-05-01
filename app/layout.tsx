import type { Metadata } from "next";
import { Instrument_Serif, Schibsted_Grotesk, Italianno } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "ASM Sprinkler & Landscaping — Visalia's Sprinkler Specialists Since 1971",
  description:
    "Family-owned Visalia sprinkler and irrigation specialists since 1971. Sprinkler repair, installation, drip irrigation, valve replacement, and landscape design across Tulare County. Stacy Mattoon, owner.",
  openGraph: {
    title:
      "ASM Sprinkler & Landscaping — Visalia's Sprinkler Specialists Since 1971",
    description:
      "Fifty-plus years of Central Valley irrigation. BBB tenured. BuildZoom 93/100.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${schibsted.variable} ${italianno.variable} antialiased`}
    >
      <body className="paper-grain min-h-[100dvh] flex flex-col">
        {children}
      </body>
    </html>
  );
}
