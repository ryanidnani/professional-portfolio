import { SampleBadge } from "@/components/sample-badge";
import { Section } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { peerReviews } from "@/content";

const visibilityLabel = {
  published: "Published",
  unpublished: "Unpublished",
} as const;

export function PeerReviewsSection() {
  return (
    <Section id="peer-reviews">
      <h2 className="section-title">Peer reviews</h2>
      <p className="section-lede mt-2">
        Published acknowledgments and confidential reviewing.
      </p>

      <ul className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {peerReviews.map((review) => (
          <li key={review.id} className="py-7">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-[var(--ink-muted)]">
              <time className="tabular-nums">{review.year}</time>
              <span aria-hidden="true">·</span>
              <span>{visibilityLabel[review.visibility]}</span>
              {review.isSample ? <SampleBadge /> : null}
            </div>
            <h3 className="mt-2 font-[family-name:var(--font-serif)] text-lg font-semibold leading-snug text-[var(--ink)]">
              {review.acknowledgmentUrl && review.manuscriptTitle ? (
                <TextLink href={review.acknowledgmentUrl}>
                  {review.manuscriptTitle}
                </TextLink>
              ) : (
                (review.manuscriptTitle ?? review.venue)
              )}
            </h3>
            <p className="mt-2 text-sm text-[var(--ink-muted)]">
              {review.venue}
              <br />
              {review.role}
            </p>
            <p className="mt-3 text-[0.925rem] leading-relaxed text-[var(--ink-soft)]">
              {review.note}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
