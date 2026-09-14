import type { PersonalProject } from "./types";

/**
 * Personal builds that show craft outside formal publications.
 * Mark samples until Ryan supplies real project names, links, and stack.
 */
export const projects: PersonalProject[] = [
  {
    id: "proj-sample-review-desk",
    name: "Review Desk",
    year: 2025,
    blurb:
      "Sample project: a local-first checklist for structuring peer reviews—claims, evidence, and residual questions—exported as Markdown.",
    stack: ["TypeScript", "Bun", "Markdown"],
    repoUrl: "https://github.com/example/sample-review-desk",
    isSample: true,
  },
  {
    id: "proj-sample-cite-garden",
    name: "Cite Garden",
    year: 2024,
    blurb:
      "Sample project: a small static site generator that turns a BibTeX file into a readable publications page with status badges.",
    stack: ["Python", "Jinja", "BibTeX"],
    url: "https://example.com/sample-cite-garden",
    repoUrl: "https://github.com/example/sample-cite-garden",
    isSample: true,
  },
  {
    id: "proj-sample-latency-lab",
    name: "Latency Lab",
    year: 2024,
    blurb:
      "Sample project: reproducible harness for plotting p95/p99 under induced packet loss, paired with notebook write-ups.",
    stack: ["Go", "Prometheus", "Jupyter"],
    repoUrl: "https://github.com/example/sample-latency-lab",
    isSample: true,
  },
];
