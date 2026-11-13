import type { PersonalProject } from "./types";

/**
 * Personal builds that show craft outside formal publications.
 * Do not invent names, links, or stack without `isSample: true`.
 */
export const projects: PersonalProject[] = [
  {
    id: "proj-kaiya-dashboard",
    name: "Kaiya Health Dashboard",
    year: 2026,
    blurb:
      "Personal health analytics platform that aggregates WHOOP, smart-scale, training, and nutrition data to surface trends and correlation insights for fitness, recovery, and body composition.",
    stack: ["Python", "Starlette", "JavaScript"],
    url: "https://kaiyahealth.app",
    isSample: false,
  },
  {
    id: "proj-ultimate-grid",
    name: "Ultimate Grid",
    year: 2026,
    blurb:
      "Full-stack sports trivia platform that expands Immaculate Grid into every team-by-team combination in the NFL, NBA, and MLB, with historical player databases and an optimizer that maximizes filled squares.",
    stack: ["Python", "Flask", "JavaScript"],
    url: "https://ultimategrid.app",
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
    id: "proj-strikeouts-hits",
    name: "Correlating Strikeouts and Hits with Success",
    year: 2022,
    blurb:
      "Examines whether striking out less and collecting more hits helps baseball teams win.",
    stack: ["Sports analytics"],
    writeUpUrl:
      "https://sportsanalytics.berkeley.edu/articles/strikeouts-and-hits.html",
    isSample: false,
  },
  {
    id: "proj-pull-up-three",
    name: "Is the Pull-Up Three Worth it?",
    year: 2022,
    blurb:
      "Evaluates whether pull-up threes are worth taking for basketball players who shoot a high volume of them.",
    stack: ["Sports analytics"],
    writeUpUrl: "https://sportsanalytics.berkeley.edu/articles/pull-up-three.html",
    isSample: false,
  },
];
