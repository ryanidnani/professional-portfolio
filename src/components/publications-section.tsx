import { Entry, EntryList, EntryMeta, EntryNote } from "@/components/entry-list";
import { Section } from "@/components/section";
import { TextLink } from "@/components/text-link";
import type { Publication } from "@/content/types";
import { getPublications, scholarSearchUrl } from "@/lib/get-publications";

const statusLabel = {
  published: "Published",
  preprint: "Preprint",
  "in-review": "In review",
  poster: "Poster",
} as const;

function citationLabel(count: number): string {
  return count === 1 ? "1 citation" : `${count} citations`;
}

function formatSyncedDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

function PublicationList({ items }: { items: Publication[] }) {
  return (
    <EntryList>
      {items.map((pub) => {
        const showStatus = pub.status !== "published" && pub.status !== "poster";

        return (
          <Entry
            key={pub.id}
            year={pub.year}
            title={pub.title}
            href={pub.url}
            isSample={pub.isSample}
          >
            <EntryMeta>{pub.authors}</EntryMeta>
            <EntryMeta>
              {pub.venue}
              {showStatus ? ` · ${statusLabel[pub.status]}` : null}
              {pub.citedBy > 0 ? (
                <>
                  {" · "}
                  <TextLink
                    href={pub.citedByUrl ?? scholarSearchUrl(pub.title)}
                    className="tabular-nums"
                  >
                    {citationLabel(pub.citedBy)}
                  </TextLink>
                </>
              ) : null}
            </EntryMeta>
            {pub.summary && pub.status !== "poster" ? (
              <EntryNote>{pub.summary}</EntryNote>
            ) : null}
          </Entry>
        );
      })}
    </EntryList>
  );
}

export async function PublicationsSection() {
  const { items: publications, source, syncedAt } = await getPublications();
  const papers = publications.filter((pub) => pub.status !== "poster");
  const posters = publications.filter((pub) => pub.status === "poster");
  const syncedOn = formatSyncedDate(syncedAt);
  const syncNote =
    source === "google-scholar"
      ? `Publication list synced from Google Scholar on ${syncedOn}.`
      : `Showing the saved publication list. Google Scholar could not be reached on ${syncedOn}.`;

  return (
    <Section id="publications">
      <h2 className="section-title">Publications</h2>
      <p className="mt-2 text-[0.8125rem] leading-relaxed text-[var(--ink-muted)]">
        {syncNote}
      </p>

      {papers.length > 0 ? (
        <div className="mt-8">
          <h3 className="section-label">Papers</h3>
          <PublicationList items={papers} />
        </div>
      ) : null}

      {posters.length > 0 ? (
        <div className="mt-12">
          <h3 className="section-label">Conference Abstracts</h3>
          <PublicationList items={posters} />
        </div>
      ) : null}
    </Section>
  );
}
