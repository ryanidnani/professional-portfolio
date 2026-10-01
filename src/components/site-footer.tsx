import { TextLink } from "@/components/text-link";
import { profile } from "@/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-10 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-[family-name:var(--font-serif)] text-sm font-semibold text-[var(--ink)]">
          {profile.name}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {profile.email ? (
            <TextLink href={`mailto:${profile.email}`}>Email</TextLink>
          ) : null}
          {profile.links.map((link) => (
            <TextLink key={link.href + link.label} href={link.href}>
              {link.label}
            </TextLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
