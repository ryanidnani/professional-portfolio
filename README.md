# Ryan Idnani — Portfolio

A simple, professional public portfolio for **Ryan Idnani** (science / biotech / pharma tone), covering three things only:

1. Publications
2. Peer reviews (published and unpublished)
3. Personal projects

Calm typography, muted palette, minimal chrome. Placeholder entries are labeled **Sample** so the layout can be reviewed before real content is swapped in.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43127](http://127.0.0.1:43127).

Production build:

```bash
npm run build
npm start
```

## Updating content

Edit the typed modules under `src/content/`:

| File | Purpose |
| --- | --- |
| `profile.ts` | Name, bios, email, links |
| `publications.ts` | Fallback Scholar snapshot and known-work summaries (live list is fetched from Google Scholar) |
| `peer-reviews.ts` | Published vs unpublished reviews |
| `projects.ts` | Personal builds |

Set `isSample: false` (or remove sample markers) once an entry is verified. Do not invent hard claims without that marker.

## Out of scope

No auth, database, CMS, or contact backend—email uses a simple `mailto:` link.
