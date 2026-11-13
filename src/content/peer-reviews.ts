import type { PeerReview } from "./types";

/**
 * Acknowledged reviews can name the article. Unpublished reviews record only
 * the journal, year, and role — no manuscript title, decision, or link.
 */
export const peerReviews: PeerReview[] = [
  {
    id: "review-pub-frontiers-decm-2026",
    venue: "Frontiers in Bioengineering and Biotechnology",
    year: 2026,
    role: "Peer reviewer",
    manuscriptTitle:
      "From biological scaffold to multifunctional bioplatform: research progress and applications of decellularized extracellular matrix",
    visibility: "published",
    acknowledgmentUrl:
      "https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2026.1917527/full",
    isSample: false,
  },
  {
    id: "review-unpub-frontiers-2026-a",
    venue: "Frontiers in Bioengineering and Biotechnology",
    year: 2026,
    role: "Peer reviewer",
    visibility: "unpublished",
    isSample: false,
  },
  {
    id: "review-unpub-results-2026-a",
    venue: "Results in Engineering",
    year: 2026,
    role: "Peer reviewer",
    visibility: "unpublished",
    isSample: false,
  },
  {
    id: "review-unpub-frontiers-2026-b",
    venue: "Frontiers in Bioengineering and Biotechnology",
    year: 2026,
    role: "Peer reviewer",
    visibility: "unpublished",
    isSample: false,
  },
];

export const publishedReviews = peerReviews.filter(
  (review): review is Extract<PeerReview, { visibility: "published" }> =>
    review.visibility === "published",
);

export const unpublishedReviews = peerReviews.filter(
  (review): review is Extract<PeerReview, { visibility: "unpublished" }> =>
    review.visibility === "unpublished",
);

export type ConfidentialReviewGroup = {
  id: string;
  venue: string;
  year: number;
  role: string;
  count: number;
  isSample: boolean;
};

/** Collapse confidential reviews so the page shows journal, year, role, and count. */
export function confidentialReviewGroups(
  reviews: Extract<PeerReview, { visibility: "unpublished" }>[] = unpublishedReviews,
): ConfidentialReviewGroup[] {
  const groups = new Map<string, ConfidentialReviewGroup>();

  for (const review of reviews) {
    const id = [review.year, review.venue, review.role, review.isSample].join(
      "\0",
    );
    const existing = groups.get(id);
    if (existing) {
      existing.count += 1;
      continue;
    }
    groups.set(id, {
      id,
      venue: review.venue,
      year: review.year,
      role: review.role,
      count: 1,
      isSample: review.isSample,
    });
  }

  return [...groups.values()].sort(
    (a, b) => b.year - a.year || a.venue.localeCompare(b.venue),
  );
}
