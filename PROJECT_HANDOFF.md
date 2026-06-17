# Project Handoff

Last updated: 2026-06-17

## 1. Project Purpose

This project is an English editorial travel site for international visitors planning trips to China.

Core positioning:

- Content-first travel media site
- No custom tour operation by the site itself
- SEO is a primary goal
- Low operating cost matters, but not at the expense of speed, crawlability, or content structure

Current commercial direction:

1. Early stage: build search traffic and trust
2. Near-term monetization: Google AdSense when content and traffic are strong enough
3. Later monetization: planning-lead handoff to travel partners via form or live chat

## 2. Current Production Setup

- Live domain: `https://visitchinanotes.com`
- GitHub repo: `https://github.com/lvmiken/visitchinanotes`
- Hosting: Cloudflare Pages
- Canonical site URL is configured in `astro.config.mjs`
- Production branch: `main`

Deployment pipeline:

1. Local changes are committed and pushed to `main`
2. GitHub triggers Cloudflare Pages
3. Cloudflare builds the Astro site and deploys to production

Important:

- GitHub integration issues previously existed but were fixed by reconnecting the repo in Cloudflare
- Automatic deployments are currently working again

## 3. Local Workspace Context

Current working directory is still:

- `D:\dev\yucms`

This is a historical directory name. The product brand is now `Visit China Notes` / `visitchinanotes.com`, but the local folder was not renamed successfully because of file/process locks earlier.

Do not assume the folder name matches the site name.

## 4. Tech Stack

- Astro static site
- Astro content collections
- Markdown/MDX-style content files for guides and topics
- JSON data files for city hubs and authors
- Cloudflare Pages for deployment

Key packages:

- `astro`
- `@astrojs/mdx`
- `@astrojs/sitemap`
- `zod`

## 5. Site Architecture

The site is structured as an SEO cluster model:

1. Destination hubs
2. Guide articles
3. Topic articles
4. Trust / conversion pages

### Destination hubs

Each city page is a hub that connects:

- city summary
- planning priorities
- related guides
- supporting topic pages
- related pairing cities

Primary file:

- `src/pages/destinations/[city].astro`

City data source:

- `src/content/cities/*.json`

### Guide pages

Guide pages are city-specific or planning-specific articles.

Examples:

- first-time city guides
- where to stay
- itinerary pages

Primary route:

- `src/pages/guides/[slug].astro`

Guide content source:

- `src/content/guides/*.md`

### Topic pages

Topic pages solve cross-city planning questions such as:

- visas
- payments
- rail
- airport transfers
- hotel location

Primary route:

- `src/pages/topics/[slug].astro`

Topic content source:

- `src/content/topics/*.md`

### Trust / business pages

- `/about/`
- `/authors/`
- `/editorial-policy/`
- `/privacy/`
- `/plan-help/`
- `/contribute/`

## 6. Important Files

### Core config

- `astro.config.mjs`
- `package.json`
- `src/content/config.ts`

### Layouts and shared components

- `src/layouts/BaseLayout.astro`
- `src/layouts/ArticleLayout.astro`
- `src/layouts/TopicHubLayout.astro`
- `src/components/HeadSEO.astro`

### Key routes

- `src/pages/index.astro`
- `src/pages/destinations/index.astro`
- `src/pages/destinations/[city].astro`
- `src/pages/guides/index.astro`
- `src/pages/guides/[slug].astro`
- `src/pages/topics/index.astro`
- `src/pages/topics/[slug].astro`

### Form-related files

- `src/pages/plan-help/index.astro`
- `src/pages/contribute/index.astro`
- `src/components/PlanningRequestForm.astro`
- `src/components/ContributeForm.astro`

### SEO / verification / public assets

- `src/pages/robots.txt.ts`
- `public/google51b67721ad70b186.html`
- `public/favicon.svg`
- `public/og-default.svg`

## 7. Current SEO State

Already implemented:

- Canonical tags
- Title and description control through shared SEO component
- Open Graph and Twitter tags
- Default OG image fallback
- JSON-LD structured data on key page types
- shared `WebSite` and `Organization` JSON-LD through `src/layouts/BaseLayout.astro`
- Dynamic `robots.txt`
- Auto-generated sitemap through Astro sitemap integration

Current sitemap status:

- `sitemap-index.xml` exists
- current production includes `sitemap-0.xml`
- current URL count after latest content expansion: `60`
- sitemap is intentionally focused on indexable content pages such as home, about, destination hubs, guide articles, topic articles, and topic hubs
- low-priority trust / utility / conversion pages such as `/authors/`, `/contribute/`, `/editorial-policy/`, `/plan-help/`, and `/privacy/` are intentionally excluded from sitemap

Important note:

- The old `public/robots.txt` placeholder with the example domain was removed
- Only the dynamic `src/pages/robots.txt.ts` version should remain
- excluded low-priority pages also use `noindex, nofollow` so Google stays more focused on travel content that is meant to rank
- keep this philosophy unless a currently excluded page becomes a real search landing page with strong standalone content

## 8. Forms and Lead Capture

The site currently does **not** have a real backend admin system.

Current form behavior:

- `Plan Help` and `Contribute` pages support static-site-friendly form handling
- If a real endpoint is configured, forms can `POST` there
- If only `PUBLIC_CONTACT_EMAIL` is configured, the site opens a pre-filled `mailto:` draft

Current live production state:

- `PUBLIC_CONTACT_EMAIL` is configured in Cloudflare build variables
- production pages render the email fallback correctly
- there is no real submission storage yet

Current contact email:

- `anchoryu84@gmail.com`

Important implementation note:

- The UI was updated so it no longer shows creator-facing `preview mode` copy on production
- Some older docs still mention `preview mode`; treat those as partially stale

Relevant docs:

- `FORM_SETUP.md`

But note:

- `FORM_SETUP.md` is historically useful, but parts of its wording are no longer exact after the form-copy cleanup

## 9. Search Console and Verification

Google Search Console HTML verification file has already been added:

- `public/google51b67721ad70b186.html`

This file must be kept.

Do not delete it after verification.

Expected production URL:

- `https://visitchinanotes.com/google51b67721ad70b186.html`

## 10. Branding and Social Assets

Added recently:

- favicon: `public/favicon.svg`
- default social image: `public/og-default.svg`

Current state:

- destination, guide, and topic pages already get stable auto-generated OG images through:
  - `src/pages/og/destinations/[city].svg.ts`
  - `src/pages/og/guides/[slug].svg.ts`
  - `src/pages/og/topics/[slug].svg.ts`
- the shared resolver is:
  - `src/lib/socialImages.ts`
- if a page has no custom `ogImage`, the site now falls back to a generated page-specific social card before falling back to the global default image
- use explicit `ogImage` overrides only for pages that deserve a more curated branded asset

Possible future improvement:

- gradually add custom `ogImage` overrides for the highest-priority city hubs and money pages where a hand-tuned card is worth the effort

## 11. Current Content Coverage

Current destination coverage includes:

- Beijing
- Shanghai
- Xi'an
- Chengdu
- Hangzhou
- Guangzhou
- Chongqing
- Zhangjiajie
- Qingdao

Recent content additions:

- `qingdao-first-time-guide`
- `qingdao-where-to-stay`
- `beijing-4-day-itinerary`
- `guangzhou-3-day-itinerary`
- `can-tourists-use-alipay-in-china`
- `can-tourists-use-wechat-pay-in-china`

Recent content model direction:

- Each important city should ideally become a mini cluster:
  - one hub page
  - one first-time guide
  - one where-to-stay guide
  - one itinerary or trip-shaping guide
  - topic links that support practical planning

## 12. Recommended Next Priorities

If another thread continues this work, the most useful next steps are:

1. Finish Search Console onboarding
   - verify ownership
   - submit `https://visitchinanotes.com/sitemap-index.xml`
   - request indexing for key pages

2. Enable Cloudflare Web Analytics
   - if not already enabled
   - verify data appears after a deployment

3. Deepen the strongest city clusters
   - Shanghai
   - Beijing
   - Guangzhou
   - Qingdao

4. Add more guide depth before adding too many new cities
   - this is better for SEO than creating many thin destination pages

5. Decide long-term form handling
   - keep email fallback for now
   - later connect a real form endpoint
   - later build lightweight admin/review flow if needed

6. Consider richer media later
   - city-specific OG images
   - author photos or editorial visuals
   - simple branded illustrations

## 13. Working Style and Product Expectations

This matters for anyone continuing the project:

- The user prefers practical execution over long theoretical discussion
- The user responds well to seeing concrete results in the running site
- The site should feel like a real editorial product, not a developer demo
- Avoid creator-facing copy on visitor pages
- Preserve fast static delivery and strong crawlability
- SEO structure should stay coherent: hubs, guides, topics, and internal links should reinforce each other

Content expectations:

- English-facing content for foreign travelers
- Clear, practical, first-time-visitor planning help
- Avoid fluff, vague destination marketing, or generic “top 10 attractions” style writing
- Stronger pages help the user decide, not just browse

## 14. Notes About Existing Docs

These documents exist:

- `README.md`
- `LAUNCH_CHECKLIST.md`
- `FORM_SETUP.md`
- `CONTENT_TODO.md`

They are useful, but some sections are historical.

Examples:

- `LAUNCH_CHECKLIST.md` was written before Cloudflare Pages became the settled deployment path
- `FORM_SETUP.md` still describes older preview-mode wording
- `CONTENT_TODO.md` is the working backlog for future search-intent content and should be updated whenever a new target page is published or re-scoped

Use them as support material, but treat this handoff file as the current source of project state.

## 15. Commands

Useful local commands:

```bash
npm install
npm run dev
npm run build
```

Git / deploy flow:

```bash
git status
git add .
git commit -m "Your message"
git push
```

Production deploys are expected to happen automatically after push to `main`.

## 16. Guardrails

Do not do these casually:

- do not remove the Google verification HTML file
- do not reintroduce a static `public/robots.txt` with stale content
- do not change canonical domain away from `https://visitchinanotes.com` without a deliberate migration
- do not add heavy runtime dependencies unless they clearly justify the cost
- do not turn the site into a complicated CMS unless there is a real operational need

## 17. Best Handoff Starting Point

If you are continuing from another thread, start here:

1. Run `npm run build`
2. Inspect:
   - home page
   - one city hub
   - one guide page
   - `robots.txt`
   - `sitemap-index.xml`
3. Confirm Cloudflare production matches the latest push
4. Continue with either:
   - SEO/analytics onboarding
   - content cluster expansion
   - lightweight lead-capture improvements
