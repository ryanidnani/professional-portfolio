import type { PeerReview } from "./types";

/**
 * Split published acknowledgments from unpublished / confidential reviewing.
 * Do not invent venue claims without `isSample: true` until Ryan confirms them.
 */
export const peerReviews: PeerReview[] = [
  {
    id: "review-pub-sample-osdi",
    venue: "Systems conference proceedings (sample acknowledgment)",
    year: 2024,
    role: "External reviewer",
    note: "Sample published acknowledgment listed in the venue’s thank-you page.",
    visibility: "published",
    acknowledgmentUrl: "https://example.com/sample-ack-page",
    isSample: true,
  },
  {
    id: "review-pub-sample-journal",
    venue: "Open-access methods journal (sample)",
    year: 2025,
    role: "Peer reviewer",
    note: "Sample entry for a review later acknowledged on the article page.",
    visibility: "published",
    acknowledgmentUrl: "https://example.com/sample-article-ack",
    isSample: true,
  },
  {
    id: "review-unpub-sample-workshop",
    venue: "Research workshop program committee (sample)",
    year: 2024,
    role: "PC member",
    note: "Sample unpublished reviewing: confidential cycle, no public acknowledgment yet.",
    visibility: "unpublished",
    isSample: true,
  },
  {
    id: "review-unpub-sample-journal",
    venue: "Specialty journal (sample, confidential)",
    year: 2025,
    role: "Ad-hoc reviewer",
    note: "Sample confidential review completed under standard double-blind rules.",
    visibility: "unpublished",
    isSample: true,
  },
];

export const publishedReviews = peerReviews.filter(
  (review) => review.visibility === "published",
);

export const unpublishedReviews = peerReviews.filter(
  (review) => review.visibility === "unpublished",
);
