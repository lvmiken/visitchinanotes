# Launch Checklist

Current primary domain:

- `https://visitchinanotes.com`

## Immediate next steps

1. Pick the deployment target.
   - Recommended first choice: `Vercel`
   - Alternative: `Cloudflare Pages`

2. Deploy the Astro site.
   - Build command: `npm run build`
   - Output directory: `dist`

3. Attach the custom domain.
   - Add `visitchinanotes.com`
   - Optionally also add `www.visitchinanotes.com`
   - Choose one canonical version and redirect the other to it

4. Verify SEO outputs after deployment.
   - `/robots.txt`
   - `/sitemap-index.xml`
   - canonical tags on a few key pages

5. Open Google Search Console.
   - Add the domain property
   - verify ownership
   - submit `https://visitchinanotes.com/sitemap-index.xml`

6. Decide how form leads should work long-term.
   - keep email-draft mode for now
   - or later connect a real form endpoint

## Recommended canonical choice

For simplicity, use:

- `https://visitchinanotes.com`

Then redirect:

- `https://www.visitchinanotes.com`

to the apex domain.

## Good pages to test after launch

- `/`
- `/destinations/`
- `/destinations/shanghai/`
- `/guides/beijing-first-time-guide/`
- `/topics/`
- `/plan-help/`
- `/contribute/`
- `/robots.txt`
- `/sitemap-index.xml`

## Optional defensive purchases

If still available and low-cost, consider buying one or two backups and redirecting them:

- another preferred `.com`
- common typo or nearby brand variant
