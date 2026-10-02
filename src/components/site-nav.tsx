import { profile } from "@/content";

const links = [
  { href: "#publications", label: "Publications" },
  { href: "#peer-reviews", label: "Peer reviews" },
  { href: "#projects", label: "Projects" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-3xl items-baseline justify-between gap-6 px-5 py-3.5 sm:px-6"
      >
        <a
          href="#top"
          className="shrink-0 font-[family-name:var(--font-serif)] text-[0.95rem] font-semibold text-[var(--ink)] focus-visible:outline-none focus-visible:underline"
        >
          {profile.name}
        </a>
        <ul className="flex flex-wrap items-baseline justify-end gap-x-4 gap-y-1 text-[0.8125rem] text-[var(--ink-muted)]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-[var(--ink)] focus-visible:outline-none focus-visible:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
