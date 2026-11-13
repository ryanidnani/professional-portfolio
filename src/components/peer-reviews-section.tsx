import { Entry, EntryList, EntryMeta } from "@/components/entry-list";
import { Section } from "@/components/section";
import { confidentialReviewGroups, publishedReviews } from "@/content";

function reviewCount(count: number): string {
  return count === 1 ? "1 review" : `${count} reviews`;
}

export function PeerReviewsSection() {
  const confidential = confidentialReviewGroups();

  return (
    <Section id="peer-reviews">
      <h2 className="section-title">Peer reviews</h2>

      {publishedReviews.length > 0 ? (
        <div className="mt-8">
          <h3 className="section-label">Acknowledged</h3>
          <EntryList>
            {publishedReviews.map((review) => (
              <Entry
                key={review.id}
                year={review.year}
                title={review.manuscriptTitle}
                href={review.acknowledgmentUrl}
                isSample={review.isSample}
              >
                <EntryMeta>
                  {review.venue} · {review.role}
                </EntryMeta>
              </Entry>
            ))}
          </EntryList>
        </div>
      ) : null}

      {confidential.length > 0 ? (
        <div className="mt-12">
          <h3 className="section-label">Confidential</h3>
          <EntryList>
            {confidential.map((group) => (
              <Entry
                key={group.id}
                year={group.year}
                title={group.venue}
                isSample={group.isSample}
              >
                <EntryMeta>
                  {group.role} · {reviewCount(group.count)}
                </EntryMeta>
              </Entry>
            ))}
          </EntryList>
        </div>
      ) : null}
    </Section>
  );
}
