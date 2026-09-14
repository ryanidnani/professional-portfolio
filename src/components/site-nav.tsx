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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-[var(--paper)]/95 backdrop-blur-sm",
        scrolled ? "border-[var(--line)]" : "border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
        <a
          href="#top"
          className="font-[family-name:var(--font-serif)] text-[0.95rem] font-semibold text-[var(--ink)]"
        >
          Ryan Idnani
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-[0.8125rem] text-[var(--ink-muted)]">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-[var(--ink)]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
