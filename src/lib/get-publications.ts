import { fallbackPublications, publicationSummaries } from "@/content/publications";
import type { Publication } from "@/content/types";

const SEMANTIC_SCHOLAR_AUTHOR_ID = "2400782617";
const OPENALEX_AUTHOR_IDS = [
  "A5008786279",
  "A5121187813",
  "A5120257626",
] as const;

const REVALIDATE_SECONDS = 60 * 60 * 24;
const MAILTO = "hello@ryanidnani.example";

const VENUE_ALIASES: Record<string, string> = {
  "regular and young investigator award abstracts":
    "Journal for ImmunoTherapy of Cancer",
  "asaio journal (1992)": "ASAIO Journal",
};

type SemanticScholarPaper = {
  paperId: string;
  title?: string;
  year?: number | null;
  citationCount?: number | null;
  venue?: string | null;
  url?: string | null;
  publicationTypes?: string[] | null;
  externalIds?: { DOI?: string } | null;
  authors?: { name?: string }[] | null;
};

type OpenAlexWork = {
  id: string;
  display_name?: string;
  publication_year?: number | null;
  cited_by_count?: number | null;
  type?: string | null;
  doi?: string | null;
  authorships?: { author?: { display_name?: string } }[] | null;
  primary_location?: {
    landing_page_url?: string | null;
    source?: { display_name?: string | null } | null;
  } | null;
};

function normalizeDoi(value?: string | null): string | undefined {
  if (!value) return undefined;
  const doi = value
    .trim()
    .replace(/^https?:\/\/(dx\.)?doi\.org\//i, "")
    .replace(/^doi:\s*/i, "")
    .toLowerCase();
  return doi || undefined;
}

function cleanText(value: string): string {
  return value.replace(/\s+/g, " ").replace(/\u2005/g, " ").trim();
}

function displayVenue(venue: string): string {
  const alias = VENUE_ALIASES[venue.toLowerCase()];
  return alias ?? venue;
}

function scholarCitedByUrl(title: string): string {
  return `https://scholar.google.com/scholar?q=${encodeURIComponent(`intitle:"${title}"`)}`;
}

function doiUrl(doi: string): string {
  return `https://doi.org/${doi}`;
}

function mergePublication(
  current: Publication | undefined,
  incoming: Publication,
): Publication {
  if (!current) return incoming;
  return {
    ...current,
    ...incoming,
    citedBy: Math.max(current.citedBy, incoming.citedBy),
    summary: incoming.summary || current.summary,
    url: incoming.url ?? current.url,
    venue: incoming.venue || current.venue,
    authors: incoming.authors || current.authors,
  };
}

function withSummary(pub: Publication): Publication {
  const doi = normalizeDoi(pub.url);
  const summary = (doi && publicationSummaries[doi]) || pub.summary;
  return { ...pub, summary };
}

function sortLikeScholar(publications: Publication[]): Publication[] {
  return [...publications].sort((a, b) => {
    if (b.citedBy !== a.citedBy) return b.citedBy - a.citedBy;
    if (b.year !== a.year) return b.year - a.year;
    return a.title.localeCompare(b.title);
  });
}

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": `ryan-idnani-portfolio (mailto:${MAILTO})`,
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

function fromSemanticScholar(paper: SemanticScholarPaper): Publication | null {
  const title = paper.title ? cleanText(paper.title) : "";
  if (!title) return null;
  const doi = normalizeDoi(paper.externalIds?.DOI);
  const authors = (paper.authors ?? [])
    .map((author) => author.name)
    .filter((name): name is string => Boolean(name))
    .join(", ");
  const isAbstract = (paper.publicationTypes ?? []).length === 0;
  const venue = displayVenue(paper.venue?.trim() || "Publication");
  return {
    id: doi ? `doi-${doi}` : `s2-${paper.paperId}`,
    title,
    venue,
    year: paper.year ?? 0,
    authors: authors || "Ryan Idnani",
    summary: "",
    url: doi ? doiUrl(doi) : (paper.url ?? undefined),
    status: isAbstract ? "abstract" : "published",
    citedBy: paper.citationCount ?? 0,
    isSample: false,
  };
}

function fromOpenAlex(work: OpenAlexWork): Publication | null {
  const title = work.display_name ? cleanText(work.display_name) : "";
  if (!title) return null;
  const doi = normalizeDoi(work.doi);
  const authors = (work.authorships ?? [])
    .map((authorship) => authorship.author?.display_name)
    .filter((name): name is string => Boolean(name))
    .join(", ");
  const venue = displayVenue(
    work.primary_location?.source?.display_name?.trim() || "Publication",
  );
  return {
    id: doi ? `doi-${doi}` : `openalex-${work.id.split("/").pop()}`,
    title,
    venue,
    year: work.publication_year ?? 0,
    authors: authors || "Ryan Idnani",
    summary: "",
    url: doi ? doiUrl(doi) : (work.primary_location?.landing_page_url ?? undefined),
    status: work.type === "conference-paper" ? "abstract" : "published",
    citedBy: work.cited_by_count ?? 0,
    isSample: false,
  };
}

async function fetchSemanticScholar(): Promise<Publication[]> {
  const data = await fetchJson<{ data?: SemanticScholarPaper[] }>(
    `https://api.semanticscholar.org/graph/v1/author/${SEMANTIC_SCHOLAR_AUTHOR_ID}/papers?fields=title,year,citationCount,venue,authors,externalIds,url,publicationTypes&limit=100`,
  );
  return (data?.data ?? [])
    .map(fromSemanticScholar)
    .filter((pub): pub is Publication => pub !== null);
}

async function fetchOpenAlex(): Promise<Publication[]> {
  const filter = OPENALEX_AUTHOR_IDS.map((id) => id).join("|");
  const data = await fetchJson<{ results?: OpenAlexWork[] }>(
    `https://api.openalex.org/works?filter=author.id:${filter}&per_page=50&mailto=${encodeURIComponent(MAILTO)}`,
  );
  return (data?.results ?? [])
    .map(fromOpenAlex)
    .filter((pub): pub is Publication => pub !== null);
}

export function scholarSearchUrl(title: string): string {
  return scholarCitedByUrl(title);
}

export async function getPublications(): Promise<Publication[]> {
  const [semanticScholar, openAlex] = await Promise.all([
    fetchSemanticScholar(),
    fetchOpenAlex(),
  ]);

  const byKey = new Map<string, Publication>();
  for (const pub of [...semanticScholar, ...openAlex]) {
    const doi = normalizeDoi(pub.url);
    const key = doi ?? pub.title.toLowerCase();
    byKey.set(key, mergePublication(byKey.get(key), pub));
  }

  const live = [...byKey.values()].map(withSummary);
  if (live.length === 0) {
    return sortLikeScholar(fallbackPublications.map(withSummary));
  }
  return sortLikeScholar(live);
}
