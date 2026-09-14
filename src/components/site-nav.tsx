"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#publications", label: "Publications" },
  { href: "#peer-reviews", label: "Peer reviews" },
  { href: "#projects", label: "Projects" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--mist)_88%,transparent)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-[var(--ink)]"
        >
          Ryan Idnani
        </a>
        <ul className="hidden items-center gap-6 text-sm text-[var(--ink-muted)] sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-[var(--ink)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:hello@ryanidnani.example"
          className="text-sm font-medium text-[var(--accent)] transition-opacity hover:opacity-80"
        >
          Email
        </a>
      </nav>
    </header>
  );
}
