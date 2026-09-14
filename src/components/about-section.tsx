import { profile } from "@/content";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 px-5 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="section-title">About</h2>
        <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
          <p>{profile.longBio}</p>
          <p className="text-sm text-[var(--ink-muted)]">
            Entries marked{" "}
            <span className="font-medium text-stone-700">Sample</span> are
            layout placeholders, not verified credentials. Replace them in{" "}
            <code className="rounded bg-stone-100 px-1 py-0.5 font-mono text-[0.8em]">
              src/content/
            </code>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
