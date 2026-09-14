import { profile } from "@/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--ink)]">
            {profile.name}
          </p>
          <p className="mt-2 max-w-md text-sm text-[var(--ink-muted)]">
            Publications, peer reviews, and personal projects—nothing else on
            the homepage.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          {profile.email ? (
            <a
              href={`mailto:${profile.email}`}
              className="font-medium text-[var(--accent)] hover:opacity-80"
            >
              {profile.email}
            </a>
          ) : null}
          {profile.links.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--ink-muted)] hover:text-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
