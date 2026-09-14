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
      className="scroll-mt-16 border-t border-[var(--line)] px-5 py-14 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="section-title">Publications</h2>
        <p className="section-lede mt-2">
          Papers, preprints, and submissions.
        </p>

        <ul className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {publications.map((pub) => (
            <li key={pub.id} className="py-7">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-[var(--ink-muted)]">
                <time className="tabular-nums">{pub.year}</time>
                <span aria-hidden="true">·</span>
                <span>{statusLabel[pub.status]}</span>
                {pub.isSample ? <SampleBadge /> : null}
              </div>
              <h3 className="mt-2 font-[family-name:var(--font-serif)] text-lg font-semibold leading-snug text-[var(--ink)]">
                {pub.url ? (
                  <a
                    href={pub.url}
                    className="text-[var(--link)] hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {pub.title}
                  </a>
                ) : (
                  pub.title
                )}
              </h3>
              <p className="mt-2 text-sm text-[var(--ink-muted)]">
                {pub.authors}
                <br />
                {pub.venue}
              </p>
              <p className="mt-3 text-[0.925rem] leading-relaxed text-[var(--ink-soft)]">
                {pub.summary}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
