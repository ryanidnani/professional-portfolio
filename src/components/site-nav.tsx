const links = [
  { href: "#about", label: "About" },
  { href: "#publications", label: "Publications" },
  { href: "#peer-reviews", label: "Peer reviews" },
  { href: "#projects", label: "Projects" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-3xl flex-col gap-2 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-3.5"
      >
        <a
          href="#top"
          className="font-[family-name:var(--font-serif)] text-[0.95rem] font-semibold text-[var(--ink)] focus-visible:outline-none focus-visible:underline"
        >
          Ryan Idnani
        </a>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.8125rem] text-[var(--ink-muted)] sm:justify-end">
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
