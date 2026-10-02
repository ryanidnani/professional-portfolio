import { TextLink } from "@/components/text-link";
import { profile } from "@/content";

export function Hero() {
  return (
    <section id="top" className="px-5 pt-14 pb-12 sm:px-6 sm:pt-16 sm:pb-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-[family-name:var(--font-serif)] text-[2rem] font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
          {profile.name}
        </h1>
        <ul className="mt-5 space-y-1 text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
          {profile.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
        <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
          {profile.education}
        </p>
        <p className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {profile.email ? (
            <TextLink href={`mailto:${profile.email}`}>Email</TextLink>
          ) : null}
          {profile.links.map((link) => (
            <TextLink key={link.href + link.label} href={link.href}>
              {link.label}
            </TextLink>
          ))}
        </p>
      </div>
    </section>
  );
}
