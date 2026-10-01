import { SampleBadge } from "@/components/sample-badge";
import { Section } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { profile } from "@/content";
import type { Publication } from "@/content/types";
import { getPublications, scholarSearchUrl } from "@/lib/get-publications";

const statusLabel = {
  published: "Published",
  preprint: "Preprint",
  "in-review": "In review",
  abstract: "Abstract",
} as const;

function citationLabel(count: number): string {
  return count === 1 ? "1 citation" : `${count} citations`;
}

function PublicationList({ items }: { items: Publication[] }) {
  return (
    <ul className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
      {items.map((pub) => (
        <li key={pub.id} className="py-7">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm text-[var(--ink-muted)]">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <time className="tabular-nums">{pub.year}</time>
              <span aria-hidden="true">·</span>
              <span>{statusLabel[pub.status]}</span>
              {pub.isSample ? <SampleBadge /> : null}
            </div>
            {pub.citedBy > 0 ? (
              <TextLink
                href={pub.citedByUrl ?? scholarSearchUrl(pub.title)}
                className="tabular-nums"
              >
                {citationLabel(pub.citedBy)}
              </TextLink>
            ) : null}
          </div>
          <h3 className="mt-2 font-[family-name:var(--font-serif)] text-lg font-semibold leading-snug text-[var(--ink)]">
            {pub.url ? (
              <TextLink href={pub.url}>{pub.title}</TextLink>
            ) : (
              pub.title
            )}
          </h3>
          <p className="mt-2 text-sm text-[var(--ink-muted)]">
            {pub.authors}
            <br />
            {pub.venue}
          </p>
          {pub.summary ? (
            <p className="mt-3 text-[0.925rem] leading-relaxed text-[var(--ink-soft)]">
              {pub.summary}
            </p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export async function PublicationsSection() {
  const publications = await getPublications();
  const papers = publications.filter((pub) => pub.status !== "abstract");
  const abstracts = publications.filter((pub) => pub.status === "abstract");
  const scholarLink = profile.links.find((link) => link.label === "Scholar");

  return (
    <Section id="publications">
      <h2 className="section-title">Publications</h2>
      <p className="section-lede mt-2">
        Ordered by citation count
        {scholarLink ? (
          <>
            , as on <TextLink href={scholarLink.href}>Google Scholar</TextLink>
          </>
        ) : null}
        .
      </p>
      <PublicationList items={papers} />

      {abstracts.length > 0 ? (
        <div className="mt-14">
          <h3 className="section-label">Abstracts</h3>
          <PublicationList items={abstracts} />
        </div>
      ) : null}
    </Section>
  );
}
