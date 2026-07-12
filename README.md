# Field Notes — personal blog

Eleventy-powered personal blog. Paper/ink/terracotta editorial design.
Type system: FK Screamer (hero display), Poppins (headings/nav), Lora (body),
Space Mono (dates/meta/code) — same pairing as the Architect Press style guide.

**FK Screamer is a licensed display face, not on Google Fonts.** Drop your
licensed `.woff2` file(s) into `src/fonts/` as `FKScreamer-Regular.woff2`
(the `@font-face` rule at the top of `src/css/style.css` expects that
filename — rename to match, or edit the rule). Without it, hero headings
fall back to Poppins automatically; nothing breaks, it just won't be
FK Screamer until the file is in place.

## Run locally

```
npm install
npm run serve
```

Opens at `http://localhost:8080`.

## Build for production

```
npm run build
```

Outputs static files to `_site/`.

## Deploy to Netlify

1. Push this repo to Github.
2. In Netlify: **Add new site → Import an existing project** → select the repo.
3. Build command and publish directory are already set in `netlify.toml`
   (`npm run build` → `_site`), so the defaults Netlify detects should match.
4. Point `rufus.blog` at the Netlify site: **Domain management → Add a
   domain** → enter `rufus.blog` → follow Netlify's DNS instructions
   (either delegate to Netlify DNS, or add the A/CNAME records it gives you at
   your registrar). Netlify issues the SSL cert automatically once DNS
   resolves.

## Structure

| Path | Purpose |
|---|---|
| `src/posts/*.md` | Blog posts. Filename format `YYYY-MM-DD-slug.md`; sort order comes from the `date` front-matter field, not the filename. |
| `src/_includes/layouts/base.njk` | Site shell: masthead, nav, colophon footer. |
| `src/_includes/layouts/post.njk` | Single-post layout: header, drop cap, footer. |
| `src/index.njk` | Home page / post index. |
| `src/about.njk` | About page — replace the placeholder bio. |
| `src/css/style.css` | All styling. Design tokens (colors, fonts) at the top. |
| `src/_data/site.json` | Site title, author, description, URL, Github link. **Edit this first.** |

## Before you publish — placeholders to replace

- `src/_data/site.json` — `url` is set to `rufus.blog`; `title`, `author`, `description` are still placeholders.
- `src/about.njk` — bio text is a stand-in.
- The two files in `src/posts/` are demo entries — delete or replace them.
- `src/css/style.css` has a `@font-face` stub for Cormorant Garamond that's
  redundant with the Google Fonts `<link>` in `base.njk` — harmless, but remove
  it if you self-host fonts instead.

## Writing a new post

Create `src/posts/YYYY-MM-DD-your-slug.md`:

```markdown
---
layout: layouts/post.njk
title: Your title
deck: One-sentence subhead, shown on the index and post header.
date: 2026-07-11
---

Body content in markdown.
```

## Adding pages (e.g. a photography page)

Copy `src/about.njk`, change the `permalink` and content, add a link in the
`masthead__nav` block of `base.njk`.
