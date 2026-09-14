import { SampleBadge } from "@/components/sample-badge";
import { publishedReviews, unpublishedReviews } from "@/content";
import type { PeerReview } from "@/content";

function ReviewList({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: PeerReview[];
}) {
  return (
    <div>
      <h3 className="text-base font-semibold text-[var(--ink)]">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-[var(--ink-muted)]">
        {description}
      </p>
      <ul className="mt-6 space-y-6">
        {items.map((review) => (
          <li key={review.id}>
            <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--ink-muted)]">
              <time className="tabular-nums">{review.year}</time>
              {review.isSample ? <SampleBadge /> : null}
            </div>
            <p className="mt-1.5 font-medium text-[var(--ink)]">
              {review.venue}
            </p>
            <p className="mt-0.5 text-sm text-[var(--ink-muted)]">
              {review.role}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
              {review.note}
            </p>
            {review.acknowledgmentUrl ? (
              <a
                href={review.acknowledgmentUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-[var(--link)] hover:underline"
              >
                Acknowledgment
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PeerReviewsSection() {
  return (
    <section
      id="peer-reviews"
      className="scroll-mt-16 border-t border-[var(--line)] px-5 py-14 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="section-title">Peer reviews</h2>
        <p className="section-lede mt-2">
          Published acknowledgments and confidential reviewing.
        </p>

        <div className="mt-10 grid gap-12 sm:grid-cols-2 sm:gap-10">
          <ReviewList
            title="Published"
            description="Reviews later acknowledged by a venue or article."
            items={publishedReviews}
          />
          <ReviewList
            title="Unpublished"
            description="Confidential cycles without a public acknowledgment."
            items={unpublishedReviews}
          />
        </div>
      </div>
    </section>
  );
}
