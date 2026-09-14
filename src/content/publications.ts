import type { Publication } from "./types";

/**
 * Replace these sample publications with Ryan’s real list.
 * Keep `isSample: false` (or remove the flag) once an entry is verified.
 */
export const publications: Publication[] = [
  {
    id: "pub-sample-systems-latency",
    title: "Measuring Tail Latency Under Partial Failure in Edge Caches",
    venue: "Workshop on Reliable Distributed Systems (sample venue)",
    year: 2024,
    authors: "R. Idnani, A. Chen, M. Okonkwo",
    summary:
      "Sample abstract: a measurement study of cache failover paths, with a small toolkit for reproducing percentile-sensitive load patterns.",
    url: "https://example.com/sample-paper-tail-latency",
    status: "published",
    isSample: true,
  },
  {
    id: "pub-sample-review-quality",
    title: "What Makes a Useful Peer Review? Signals from Open Acknowledgments",
    venue: "Preprint (sample)",
    year: 2025,
    authors: "R. Idnani",
    summary:
      "Sample note: early analysis of publicly acknowledged reviews and how specificity correlates with later citation of the reviewed work.",
    url: "https://example.com/sample-preprint-review-quality",
    status: "preprint",
    isSample: true,
  },
  {
    id: "pub-sample-tooling",
    title: "Lightweight Provenance for Local Research Artifacts",
    venue: "Journal submission (sample)",
    year: 2025,
    authors: "R. Idnani, S. Patel",
    summary:
      "Sample description: a small CLI and format for attaching durable metadata to datasets and notebooks without a full research-data platform.",
    status: "in-review",
    isSample: true,
  },
];
