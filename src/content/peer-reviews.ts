import type { PeerReview } from "./types";

/**
 * Split published acknowledgments from unpublished / confidential reviewing.
 * Do not invent venue claims without `isSample: true` until Ryan confirms them.
 */
export const peerReviews: PeerReview[] = [
  {
    id: "review-pub-frontiers-decm-2026",
    venue: "Frontiers in Bioengineering and Biotechnology",
    year: 2026,
    role: "Peer reviewer",
    manuscriptTitle:
      "From biological scaffold to multifunctional bioplatform: research progress and applications of decellularized extracellular matrix",
    note: "Reviewer listed on the published article.",
    visibility: "published",
    acknowledgmentUrl:
      "https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2026.1917527/full",
    isSample: false,
  },
  {
    id: "review-unpub-frontiers-bioreactor-2026",
    venue: "Frontiers in Bioengineering and Biotechnology",
    year: 2026,
    role: "Peer reviewer",
    manuscriptTitle:
      "Bioreactor Optimization through Coupled Fluid–Structure Interaction and Data-Driven Analysis",
    note: "Manuscript reviewed; the article was not accepted for publication.",
    visibility: "unpublished",
    isSample: false,
  },
  {
    id: "review-unpub-results-hypoxia-chamber-2026",
    venue: "Results in Engineering",
    year: 2026,
    role: "Peer reviewer",
    manuscriptTitle:
      "Design and Validation of an Open-Source Chamber for Controlled Intermittent Hypoxia in Rodents",
    note: "Review completed; the manuscript has not yet been accepted.",
    visibility: "unpublished",
    isSample: false,
  },
];

export const publishedReviews = peerReviews.filter(
  (review) => review.visibility === "published",
);

export const unpublishedReviews = peerReviews.filter(
  (review) => review.visibility === "unpublished",
);
