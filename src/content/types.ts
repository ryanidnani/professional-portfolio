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
  status: "published" | "preprint" | "in-review";
};

export type PeerReview = SampleFlag & {
  id: string;
  venue: string;
  year: number;
  role: string;
  note: string;
  /** Published acknowledgments vs confidential/unpublished reviewing. */
  visibility: "published" | "unpublished";
  acknowledgmentUrl?: string;
};

export type PersonalProject = SampleFlag & {
  id: string;
  name: string;
  year: number;
  blurb: string;
  stack: string[];
  url?: string;
  repoUrl?: string;
};

export type SiteProfile = {
  name: string;
  shortBio: string;
  longBio: string;
  location?: string;
  email?: string;
  links: { label: string; href: string }[];
};
