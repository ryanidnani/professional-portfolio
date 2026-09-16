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

## Prerequisites

- [Node.js](https://nodejs.org/) **20.9 or later** (this also installs `npm`)
- Check with `node -v` — if that command is missing, install Node and open a new terminal

## Run locally

From this project folder:

```bash
npm install
npm run dev
```

Then open [http://127.0.0.1:43127](http://127.0.0.1:43127) in a browser. Leave the terminal open while you use the site. Stop the server with `Ctrl+C`.

`npm install` is only required the first time, or after `package.json` changes.

Production build:

```bash
npm run build
npm start
```

`npm start` only works after a successful `npm run build`.

### Troubleshooting

| What you see | What to do |
| --- | --- |
| `npm: command not found` or `node: command not found` | Install Node.js 20.9+ from [nodejs.org](https://nodejs.org/), then open a new terminal |
| `EADDRINUSE` / port 43127 already in use | Stop the other process using that port, or run `npx next dev --port 3000` and open [http://127.0.0.1:3000](http://127.0.0.1:3000) |
| Browser says connection refused | Make sure `npm run dev` (or `npm start`) is still running |
| You opened an `.html` file and the page is blank | This is a Next.js app — it has to be served with `npm run dev`, not opened as a file |

## Updating content

Edit the typed modules under `src/content/`:

| File | Purpose |
| --- | --- |
| `profile.ts` | Name, bios, email, links |
| `publications.ts` | Papers / preprints / submissions |
| `peer-reviews.ts` | Published vs unpublished reviews |
| `projects.ts` | Personal builds |

Set `isSample: false` (or remove sample markers) once an entry is verified. Do not invent hard claims without that marker.

## Out of scope

No auth, database, CMS, or contact backend—email uses a simple `mailto:` link.
