import { profile } from "@/content";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-[var(--line)] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-16">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title mt-3">A focused public record</h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
          <p>{profile.longBio}</p>
          <p className="text-sm text-[var(--ink-muted)]">
            Entries marked <span className="font-medium text-amber-900/80">Sample</span>{" "}
            are layout placeholders—not verified credentials. Replace them in{" "}
            <code className="rounded bg-black/5 px-1.5 py-0.5 font-mono text-[0.85em]">
              src/content/
            </code>
            .
          </p>
          {profile.location ? (
            <p className="text-sm text-[var(--ink-muted)]">{profile.location}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
