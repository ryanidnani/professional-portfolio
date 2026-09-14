import { SampleBadge } from "@/components/sample-badge";
import { publications } from "@/content";

const statusLabel = {
  published: "Published",
  preprint: "Preprint",
  "in-review": "In review",
} as const;

export function PublicationsSection() {
  return (
    <section
      id="publications"
      className="scroll-mt-24 border-t border-[var(--line)] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">Publications</p>
        <h2 className="section-title mt-3 max-w-2xl">
          Writing that leaves the notebook
        </h2>
        <p className="section-lede mt-4">
          Papers, preprints, and submissions—kept short so the work can speak.
        </p>

        <ul className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {publications.map((pub) => (
            <li
              key={pub.id}
              className="group grid gap-4 py-8 md:grid-cols-[5.5rem_minmax(0,1fr)_auto] md:gap-8"
            >
              <time className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-[var(--accent)] tabular-nums">
                {pub.year}
              </time>
              <div className="min-w-0 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium tracking-[0.12em] text-[var(--ink-muted)] uppercase">
                    {statusLabel[pub.status]}
                  </span>
                  {pub.isSample ? <SampleBadge /> : null}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl leading-snug font-semibold tracking-tight text-[var(--ink)] md:text-2xl">
                  {pub.url ? (
                    <a
                      href={pub.url}
                      className="transition-colors hover:text-[var(--accent)]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="text-sm text-[var(--ink-muted)]">
                  {pub.authors} · {pub.venue}
                </p>
                <p className="max-w-2xl text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
                  {pub.summary}
                </p>
              </div>
              {pub.url ? (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noreferrer"
                  className="self-start text-sm font-medium text-[var(--accent)] opacity-80 transition-opacity group-hover:opacity-100 md:pt-1"
                >
                  Read
                </a>
              ) : (
                <span className="self-start text-sm text-[var(--ink-muted)] md:pt-1">
                  —
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
