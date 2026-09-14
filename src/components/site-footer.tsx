import { profile } from "@/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-10 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-[family-name:var(--font-serif)] text-sm font-semibold text-[var(--ink)]">
          {profile.name}
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-[var(--ink-muted)]">
          {profile.email ? (
            <a
              href={`mailto:${profile.email}`}
              className="text-[var(--link)] hover:underline"
            >
              Email
            </a>
          ) : null}
          {profile.links.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
