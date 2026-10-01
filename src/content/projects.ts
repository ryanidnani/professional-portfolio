import type { PersonalProject } from "./types";

/**
 * Personal builds that show craft outside formal publications.
 * Do not invent names, links, or stack without `isSample: true`.
 */
export const projects: PersonalProject[] = [
  {
    id: "proj-kaiya-dashboard",
    name: "Kaiya Dashboard",
    year: 2026,
    blurb:
      "Personal health analytics platform that aggregates WHOOP, smart-scale, training, and nutrition data to surface trends and correlation insights for fitness, recovery, and body composition.",
    stack: ["Python", "Starlette", "JavaScript"],
    url: "https://health-data-production.up.railway.app",
    isSample: false,
  },
  {
    id: "proj-kalshi-polymarket-arb",
    name: "Kalshi–Polymarket Arbitrage Scanner",
    year: 2026,
    blurb:
      "Cross-exchange scanner that matches equivalent Kalshi and Polymarket markets and streams active arb opportunities on a live dashboard.",
    stack: ["Python", "HTML"],
    url: "http://34.232.65.155:8788",
    isSample: false,
  },
  {
    id: "proj-stock-predictions",
    name: "Stock Market Predictions Model",
    year: 2025,
    blurb:
      "Event-driven research framework for golden-cross and death-cross detections, with machine-learning trade screening and a daily public dashboard. Education and research only—not investment advice.",
    stack: ["Python", "LightGBM", "JavaScript"],
    url: "https://ryanidnani.github.io/StockMarketPredictionModel/",
    repoUrl: "https://github.com/ryanidnani/StockMarketPredictionModel",
    isSample: false,
  },
  {
    id: "proj-ultimate-grid",
    name: "Ultimate Grid",
    year: 2025,
    blurb:
      "Full-stack sports trivia platform that expands Immaculate Grid into every team-by-team combination in the NFL, NBA, and MLB, with historical player databases and an optimizer that maximizes filled squares.",
    stack: ["Python", "Flask", "JavaScript"],
    url: "https://ultimategrid.app",
    isSample: false,
  },
  {
    id: "proj-strikeouts-hits",
    name: "Correlating Strikeouts and Hits with Success",
    year: 2022,
    blurb:
      "Sports analytics study for the Sports Analytics Group at Berkeley on how strikeouts, hits, and extra-base-hit rate relate to team success in MLB.",
    stack: ["Sports analytics"],
    url: "https://sportsanalytics.berkeley.edu/articles/strikeouts-and-hits.html",
    isSample: false,
  },
  {
    id: "proj-pull-up-three",
    name: "Is the Pull-Up Three Worth it?",
    year: 2022,
    blurb:
      "Sports analytics study for the Sports Analytics Group at Berkeley on pull-up three-point efficiency versus catch-and-shoot threes among high-volume NBA shooters.",
    stack: ["Sports analytics"],
    url: "https://sportsanalytics.berkeley.edu/articles/pull-up-three.html",
    isSample: false,
  },
];
