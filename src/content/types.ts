export type SampleFlag = {
  /** Mark placeholder entries so real credentials are never implied. */
  isSample: boolean;
};

export type Publication = SampleFlag & {
  id: string;
  title: string;
  venue: string;
  year: number;
  authors: string;
  summary: string;
  url?: string;
  status: "published" | "preprint" | "in-review" | "poster";
  citedBy: number;
  citedByUrl?: string;
};

/**
 * Acknowledged reviews may name the article and link to the journal page.
 * Confidential reviews keep only the journal, year, and role.
 */
export type PeerReview = SampleFlag & {
  id: string;
  venue: string;
  year: number;
  role: string;
} & (
    | {
        visibility: "published";
        manuscriptTitle: string;
        acknowledgmentUrl: string;
      }
    | {
        visibility: "unpublished";
      }
  );

export type PersonalProject = SampleFlag & {
  id: string;
  name: string;
  year: number;
  blurb: string;
  stack: string[];
  /** Deployed project. */
  url?: string;
  /** Source repository. */
  repoUrl?: string;
  /** Article or longer write-up. */
  writeUpUrl?: string;
};

export type SiteProfile = {
  name: string;
  tagline: string;
  email?: string;
  links: { label: string; href: string }[];
};
