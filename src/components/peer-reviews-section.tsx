import {
  Entry,
  EntryList,
  EntryMeta,
  EntryNote,
} from "@/components/entry-list";
import { Section } from "@/components/section";
import { peerReviews } from "@/content";

const visibilityLabel = {
  published: "Published acknowledgment",
  unpublished: "Confidential review",
} as const;

export function PeerReviewsSection() {
  return (
    <Section id="peer-reviews">
      <h2 className="section-title">Peer reviews</h2>
      <p className="section-lede mt-2">
        Published acknowledgments and confidential reviewing.
      </p>

      <EntryList>
        {peerReviews.map((review) => (
          <Entry
            key={review.id}
            year={review.year}
            title={review.manuscriptTitle ?? review.venue}
            href={review.acknowledgmentUrl}
            isSample={review.isSample}
          >
            <EntryMeta>
              {review.venue} · {review.role} ·{" "}
              {visibilityLabel[review.visibility]}
            </EntryMeta>
            <EntryNote>{review.note}</EntryNote>
          </Entry>
        ))}
      </EntryList>
    </Section>
  );
}
