import { profile } from "@/content";

export function Hero() {
  return (
    <section id="top" className="px-5 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-[family-name:var(--font-serif)] text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-[1.05rem]">
          {profile.shortBio}
        </p>
        <p className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--ink-muted)]">
          <a href="#publications" className="text-[var(--link)] hover:underline">
            Publications
          </a>
          <a href="#peer-reviews" className="text-[var(--link)] hover:underline">
            Peer reviews
          </a>
          <a href="#projects" className="text-[var(--link)] hover:underline">
            Projects
          </a>
          {profile.email ? (
            <a
              href={`mailto:${profile.email}`}
              className="text-[var(--link)] hover:underline"
            >
              Email
            </a>
          ) : null}
        </p>
      </div>
    </section>
  );
}
