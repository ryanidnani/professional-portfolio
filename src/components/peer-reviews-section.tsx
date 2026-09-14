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
      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--ink)] md:text-xl">
        {title}
      </h3>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--ink-muted)]">
        {description}
      </p>
      <ul className="mt-8 space-y-6">
        {items.map((review) => (
          <li
            key={review.id}
            className="border-l-2 border-[var(--accent)]/35 pl-5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--accent)] tabular-nums">
                {review.year}
              </span>
              {review.isSample ? <SampleBadge /> : null}
            </div>
            <p className="mt-2 font-medium text-[var(--ink)]">
              {review.venue}
            </p>
            <p className="mt-1 text-sm text-[var(--ink-muted)]">{review.role}</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
              {review.note}
            </p>
            {review.acknowledgmentUrl ? (
              <a
                href={review.acknowledgmentUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-medium text-[var(--accent)] hover:opacity-80"
              >
                View acknowledgment
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
      className="scroll-mt-24 border-t border-[var(--line)] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">Peer reviews</p>
        <h2 className="section-title mt-3 max-w-2xl">
          Careful reading, on and off the record
        </h2>
        <p className="section-lede mt-4">
          Published acknowledgments sit beside confidential cycles that stay
          unpublished by design.
        </p>

        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-16">
          <ReviewList
            title="Published"
            description="Reviews later acknowledged by a venue or article page."
            items={publishedReviews}
          />
          <ReviewList
            title="Unpublished"
            description="Confidential reviewing without a public thank-you yet—or ever."
            items={unpublishedReviews}
          />
        </div>
      </div>
    </section>
  );
}
