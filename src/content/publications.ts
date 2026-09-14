import type { Publication } from "./types";

/**
 * Real publications from Google Scholar (journal articles only).
 * Conference abstracts (JITC suppl / AIChE) are intentionally omitted.
 */
export const publications: Publication[] = [
  {
    id: "pub-hypoxia-chamber-2022",
    title:
      "An Inexpensive Open-Source Chamber for Controlled Hypoxia/Hyperoxia Exposure",
    venue: "Frontiers in Physiology",
    year: 2022,
    authors: "T. C. Hillman, R. Idnani, C. G. Wilson",
    summary:
      "Open-source hardware for controlled hypoxia and hyperoxia exposure in perinatal biology research.",
    url: "https://doi.org/10.3389/fphys.2022.891005",
    status: "published",
    isSample: false,
  },
  {
    id: "pub-bioprinting-review-2025",
    title:
      "Engineering the future of organ transplantation: A comprehensive review of 3D bioprinting advances for organ bioengineering",
    venue: "Bioprinting",
    year: 2025,
    authors: "R. Idnani, S. Khan",
    summary:
      "Review of organ-scale 3D bioprinting spanning design constraints, bioprinting physics, biomaterials, and translational considerations.",
    url: "https://doi.org/10.1016/j.bprint.2025.e00463",
    status: "published",
    isSample: false,
  },
  {
    id: "pub-asaio-navier-stokes-2026",
    title:
      "Leveraging Navier–Stokes Principles to Engineer Perfusable Bioorgans: A Physics-Guided Paradigm for Bioprinting",
    venue: "ASAIO Journal",
    year: 2026,
    authors: "S. Khan, R. Idnani, A. Vera Garcia",
    summary:
      "Physics-guided framing of perfusable bioorgan design using Navier–Stokes principles for bioprinting.",
    url: "https://doi.org/10.1097/mat.0000000000002834",
    status: "published",
    isSample: false,
  },
];
