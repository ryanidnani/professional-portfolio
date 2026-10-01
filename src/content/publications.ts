import type { Publication } from "./types";

/**
 * Descriptions and canonical links for known works. The live list and
 * citation counts always come from Google Scholar.
 */
export const publicationSummaries: { match: RegExp; summary: string; url: string }[] = [
  {
    match: /inexpensive open.?source chamber/i,
    summary:
      "Open-source hardware for controlled hypoxia and hyperoxia exposure in perinatal biology research.",
    url: "https://doi.org/10.3389/fphys.2022.891005",
  },
  {
    match: /engineering the future of organ transplantation/i,
    summary:
      "Review of organ-scale 3D bioprinting spanning design constraints, bioprinting physics, biomaterials, and translational considerations.",
    url: "https://doi.org/10.1016/j.bprint.2025.e00463",
  },
  {
    match: /navier/i,
    summary:
      "Physics-guided framing of perfusable bioorgan design using Navier–Stokes principles for bioprinting.",
    url: "https://doi.org/10.1097/mat.0000000000002834",
  },
  {
    match: /^1025\b/i,
    summary:
      "Conference abstract: PBAE nanoparticles deliver antigen-processing machinery genes to restore tumor immunogenicity.",
    url: "https://doi.org/10.1136/jitc-2025-sitc2025.1025",
  },
  {
    match: /^(?!1025\b).*structurally diverse pbae/i,
    summary:
      "Conference abstract at the 2025 AIChE Annual Meeting on PBAE nanoparticles for restoring tumor immunogenicity.",
    url: "https://aiche.confex.com/aiche/2025/meetingapp.cgi/Paper/713417",
  },
];

/** Snapshot of the Scholar profile used if Google Scholar cannot be reached. */
export const fallbackPublications: Publication[] = [
  {
    id: "scholar-hypoxia-chamber",
    title:
      "An inexpensive open-source chamber for controlled hypoxia/hyperoxia exposure",
    venue: "Frontiers in Physiology",
    year: 2022,
    authors: "TC Hillman, R Idnani, CG Wilson",
    summary: publicationSummaries[0].summary,
    url: publicationSummaries[0].url,
    status: "published",
    citedBy: 13,
    citedByUrl:
      "https://scholar.google.com/scholar?oi=bibs&hl=en&cites=2716538558916661193",
    isSample: false,
  },
  {
    id: "scholar-bioprinting-review",
    title:
      "Engineering the Future of Organ Transplantation: A Comprehensive Review of 3D Bioprinting Advances for Organ Bioengineering",
    venue: "Bioprinting",
    year: 2025,
    authors: "R Idnani, S Khan",
    summary: publicationSummaries[1].summary,
    url: publicationSummaries[1].url,
    status: "published",
    citedBy: 4,
    isSample: false,
  },
  {
    id: "scholar-asaio-navier-stokes",
    title:
      "Leveraging Navier–Stokes Principles to Engineer Perfusable Bioorgans: A Physics-Guided Paradigm for Bioprinting",
    venue: "ASAIO Journal",
    year: 2026,
    authors: "S Khan, R Idnani, AV Garcia",
    summary: publicationSummaries[2].summary,
    url: publicationSummaries[2].url,
    status: "published",
    citedBy: 0,
    isSample: false,
  },
  {
    id: "scholar-jitc-pbae",
    title:
      "1025 Engineering structurally diverse PBAE nanoparticles to restore tumor immunogenicity via antigen processing machinery pDNA delivery",
    venue: "Journal for ImmunoTherapy of Cancer",
    year: 2025,
    authors: "GM Shoemaker, J Kollings, KK Zhang, R Idnani, SR Shannon, ...",
    summary: publicationSummaries[3].summary,
    url: publicationSummaries[3].url,
    status: "abstract",
    citedBy: 0,
    isSample: false,
  },
  {
    id: "scholar-aiche-pbae",
    title:
      "Engineering Structurally Diverse Pbae Nanoparticles to Restore Tumor Immunogenicity Via Antigen Processing Machinery Delivery",
    venue: "2025 AIChE Annual Meeting",
    year: 2025,
    authors:
      "G Shoemaker, J Kollings, R Idnani, L Xu, R Blanco-Sarmiento, K Zhang, ...",
    summary: publicationSummaries[4].summary,
    url: publicationSummaries[4].url,
    status: "abstract",
    citedBy: 0,
    isSample: false,
  },
];
