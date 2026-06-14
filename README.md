# China Travel Notes MVP

This directory now contains an Astro content-site prototype for a China travel editorial project.

## What is included

- `Astro` static site setup
- `Content Collections` for guides, destinations, and trip topics
- Reusable SEO head component
- Dynamic pages for destination hubs, guide articles, and topic articles
- Example Markdown content so the structure is easy to inspect
- Trust pages for `About`, `Editorial Policy`, and `Privacy`
- A static-friendly planning request form with preview mode and optional live endpoint support
- A static-friendly contributor pitch form with optional email fallback

## Run locally

```bash
npm install
npm run dev
```

To turn the planning-help form into a live submission flow, create a local `.env` file and add:

```bash
PUBLIC_PLANNING_FORM_ENDPOINT=https://your-form-endpoint.example/submit
PUBLIC_CONTRIBUTION_FORM_ENDPOINT=https://your-form-endpoint.example/contribute
PUBLIC_CONTACT_EMAIL=editor@example.com
```

Without these variables, the forms stay in local preview mode and show the success state without sending data anywhere.

## Key places to inspect

- `src/content/config.ts`
- `src/pages/index.astro`
- `src/pages/destinations/[city].astro`
- `src/pages/guides/[slug].astro`
- `src/components/HeadSEO.astro`
- `src/components/PlanningRequestForm.astro`
- `FORM_SETUP.md`

## Suggested next steps

1. Deploy the site to your hosting platform and attach `visitchinanotes.com`.
2. Verify `/robots.txt` and `/sitemap-index.xml` on production.
3. Connect the form to your real endpoint or keep email-draft mode for now.
