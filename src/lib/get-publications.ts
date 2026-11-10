import { fallbackPublications, knownPublicationLinks } from "@/content/publications";
import type { Publication } from "@/content/types";

export const GOOGLE_SCHOLAR_USER_ID = "XKmKMLYAAAAJ";
export const GOOGLE_SCHOLAR_PROFILE_URL = `https://scholar.google.com/citations?user=${GOOGLE_SCHOLAR_USER_ID}&hl=en`;

const SCHOLAR_HEADERS = {
  Accept: "text/html,application/xhtml+xml",
  "Accept-Language": "en-US,en;q=0.9",
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
};

function decodeHtml(value: string): string {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex: string) =>
      String.fromCodePoint(Number.parseInt(hex, 16)),
    )
    .replace(/&#(\d+);/g, (_, n: string) =>
      String.fromCodePoint(Number.parseInt(n, 10)),
    );
}

function stripTags(value: string): string {
  return decodeHtml(value.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function cleanVenue(venue: string): string {
  return venue.replace(/,?\s*\d{4}\s*$/, "").trim();
}

function inferStatus(title: string, venue: string): Publication["status"] {
  const haystack = `${title} ${venue}`.toLowerCase();
  if (
    /^\d{3,4}\b/.test(title) ||
    /annual meeting|suppl|abstract|conference|proceedings|meetingapp/.test(
      haystack,
    )
  ) {
    return "poster";
  }
  return "published";
}

function knownWork(title: string): { summary: string; url: string } | undefined {
  // Prefer the JITC poster (starts with 1025) over the similarly titled AIChE paper.
  const match = knownPublicationLinks.find((entry) => entry.match.test(title));
  return match ? { summary: match.summary, url: match.url } : undefined;
}

function scholarCitationUrl(href: string): string {
  if (href.startsWith("http")) return href;
  return `https://scholar.google.com${href}`;
}

export function parseScholarProfile(html: string): Publication[] {
  const rows = [...html.matchAll(/<tr class="gsc_a_tr">([\s\S]*?)<\/tr>/g)];
  const publications: Publication[] = [];

  for (const [, row] of rows) {
    const titleMatch = row.match(
      /<a href="([^"]*)" class="gsc_a_at">([\s\S]*?)<\/a>/,
    );
    if (!titleMatch) continue;

    const title = stripTags(titleMatch[2]);
    if (!title) continue;

    const gray = [...row.matchAll(/<div class="gs_gray">([\s\S]*?)<\/div>/g)].map(
      (match) => stripTags(match[1]),
    );
    const citeMatch = row.match(
      /<a href="([^"]*)" class="gsc_a_ac[^"]*">([\s\S]*?)<\/a>/,
    );
    const yearMatch = row.match(
      /class="gsc_a_y">[\s\S]*?class="gsc_a_h[^"]*">(\d{4})/,
    );

    const citedBy = Number.parseInt(stripTags(citeMatch?.[2] ?? ""), 10) || 0;
    const citeHref = decodeHtml(citeMatch?.[1] ?? "").trim();
    const known = knownWork(title);
    const venue = cleanVenue(gray[1] ?? "");
    const scholarHref = decodeHtml(titleMatch[1]);

    publications.push({
      id: `scholar-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 48)}`,
      title,
      venue: venue || "Publication",
      year: yearMatch ? Number.parseInt(yearMatch[1], 10) : 0,
      authors: gray[0] || "R Idnani",
      summary: known?.summary ?? "",
      url: known?.url ?? scholarCitationUrl(scholarHref),
      status: inferStatus(title, venue),
      citedBy,
      citedByUrl: citeHref ? scholarCitationUrl(citeHref) : undefined,
      isSample: false,
    });
  }

  return publications;
}

function sortLikeScholar(publications: Publication[]): Publication[] {
  return [...publications].sort((a, b) => {
    if (b.citedBy !== a.citedBy) return b.citedBy - a.citedBy;
    if (b.year !== a.year) return b.year - a.year;
    return a.title.localeCompare(b.title);
  });
}

async function fetchScholarPage(start: number): Promise<string | null> {
  const url = `${GOOGLE_SCHOLAR_PROFILE_URL}&cstart=${start}&pagesize=100`;
  try {
    const response = await fetch(url, {
      headers: SCHOLAR_HEADERS,
    });
    if (!response.ok) return null;
    return await response.text();
  } catch {
    return null;
  }
}

export function scholarSearchUrl(title: string): string {
  return `https://scholar.google.com/scholar?q=${encodeURIComponent(`intitle:"${title}"`)}`;
}

export async function getPublications(): Promise<Publication[]> {
  const collected: Publication[] = [];
  const seen = new Set<string>();

  for (let start = 0; start < 500; start += 100) {
    const html = await fetchScholarPage(start);
    if (!html || !html.includes("gsc_a_tr")) break;
    const page = parseScholarProfile(html);
    if (page.length === 0) break;
    for (const pub of page) {
      if (seen.has(pub.id)) continue;
      seen.add(pub.id);
      collected.push(pub);
    }
    if (page.length < 100) break;
  }

  if (collected.length === 0) {
    console.warn("Google Scholar was unavailable. Using the saved publication list.");
    return sortLikeScholar(fallbackPublications);
  }
  console.log(`Loaded ${collected.length} publications from Google Scholar.`);
  return sortLikeScholar(collected);
}
