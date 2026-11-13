# Ryan Idnani — Portfolio

A curated public index for **Ryan Idnani**: selected publications, peer reviews, and self-directed projects in bioengineering, data, and computation.

Calm typography, muted palette, minimal chrome. It complements LinkedIn rather than repeating a résumé.

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
| `profile.ts` | Name, tagline, and profile links |
| `publications.ts` | Saved Scholar snapshot and known-work summaries. The live list is fetched from Google Scholar when the site is built, and the page notes that sync date. |
| `peer-reviews.ts` | Acknowledged reviews, and confidential reviews counted by journal |
| `projects.ts` | Personal builds, with separate live, source, and write-up links |

### Peer reviews

Unpublished manuscripts stay confidential. Record only the journal, year, and role. Do not add a manuscript title, an editorial decision, or a link. Add a title and acknowledgment link only after the journal has publicly named the reviewer.

### Projects

Set the link that matches the artifact, and leave the others unset:

- `url` — live project
- `repoUrl` — source code
- `writeUpUrl` — detailed write-up

`isSample: true` badges an entry that is not yet verified. Verified entries keep it `false`. Do not invent claims.

## Out of scope

No auth, database, CMS, or contact backend—email uses a simple `mailto:` link.
