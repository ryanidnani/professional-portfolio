import type { Publication } from "./types";

/**
 * Short descriptions keyed by DOI. Live records come from Semantic Scholar
 * and OpenAlex (Google Scholar has no public API and blocks scrapers).
 */
export const publicationSummaries: Record<string, string> = {
  "10.3389/fphys.2022.891005":
    "Open-source hardware for controlled hypoxia and hyperoxia exposure in perinatal biology research.",
  "10.1016/j.bprint.2025.e00463":
    "Review of organ-scale 3D bioprinting spanning design constraints, bioprinting physics, biomaterials, and translational considerations.",
  "10.1097/mat.0000000000002834":
    "Physics-guided framing of perfusable bioorgan design using Navier–Stokes principles for bioprinting.",
  "10.1136/jitc-2025-sitc2025.1025":
    "Conference abstract: PBAE nanoparticles deliver antigen-processing machinery genes to restore tumor immunogenicity.",
};

/** Used when live scholarly APIs are unavailable. Ordered by citation count. */
export const fallbackPublications: Publication[] = [
  {
    id: "doi-10.3389/fphys.2022.891005",
    title:
      "An Inexpensive Open-Source Chamber for Controlled Hypoxia/Hyperoxia Exposure",
    venue: "Frontiers in Physiology",
    year: 2022,
    authors: "Tyler C. Hillman, Ryan Idnani, Christopher G. Wilson",
    summary: publicationSummaries["10.3389/fphys.2022.891005"],
    url: "https://doi.org/10.3389/fphys.2022.891005",
    status: "published",
    citedBy: 6,
    isSample: false,
  },
  {
    id: "doi-10.1016/j.bprint.2025.e00463",
    title:
      "Engineering the future of organ transplantation: A comprehensive review of 3D bioprinting advances for organ bioengineering",
    venue: "Bioprinting",
    year: 2025,
    authors: "Ryan Idnani, Sahil Khan",
    summary: publicationSummaries["10.1016/j.bprint.2025.e00463"],
    url: "https://doi.org/10.1016/j.bprint.2025.e00463",
    status: "published",
    citedBy: 2,
    isSample: false,
  },
  {
    id: "doi-10.1097/mat.0000000000002834",
    title:
      "Leveraging Navier–Stokes Principles to Engineer Perfusable Bioorgans: A Physics-Guided Paradigm for Bioprinting",
    venue: "ASAIO Journal",
    year: 2026,
    authors: "Sahil Khan, Ryan Idnani, Alejandro Vera García",
    summary: publicationSummaries["10.1097/mat.0000000000002834"],
    url: "https://doi.org/10.1097/mat.0000000000002834",
    status: "published",
    citedBy: 0,
    isSample: false,
  },
  {
    id: "doi-10.1136/jitc-2025-sitc2025.1025",
    title:
      "1025 Engineering structurally diverse PBAE nanoparticles to restore tumor immunogenicity via antigen processing machinery pDNA delivery",
    venue: "Journal for ImmunoTherapy of Cancer",
    year: 2025,
    authors:
      "Grace M. Shoemaker, Jack Kollings, Kevin Zhang, Ryan Idnani, Sydney R. Shannon, Romina Blanco-Sarmiento, Ethan Idnani, Kathryn M Luly, Lance Xu, Stephany Y. Tzeng, Jordan J. Green, Joel Sunshine",
    summary: publicationSummaries["10.1136/jitc-2025-sitc2025.1025"],
    url: "https://doi.org/10.1136/jitc-2025-sitc2025.1025",
    status: "abstract",
    citedBy: 0,
    isSample: false,
  },
];
