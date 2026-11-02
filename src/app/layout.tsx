import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const description = "Publications, peer reviews, and projects.";

export const metadata: Metadata = {
  title: {
    default: "Ryan Idnani",
    template: "%s · Ryan Idnani",
  },
  description,
  authors: [{ name: "Ryan Idnani" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ryan Idnani",
    description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-[15px] leading-relaxed text-[var(--ink)]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100 focus:bg-[var(--paper)] focus:px-3 focus:py-2 focus:text-sm focus:text-[var(--link)]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
