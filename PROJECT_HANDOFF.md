# Project Handoff

Last updated: 2026-06-24

## 0. Quick Start For The Next Thread

If you are taking over this project in a fresh thread, use this order:

1. Read this file first
2. Read `CONTENT_TODO.md`
3. Run `git status`
4. Run `npm run build`
5. Spot-check:
   - `/`
   - one destination hub
   - one guide page
   - one places page
   - `/places/`
   - `/robots.txt`
   - `/sitemap-index.xml`
6. Continue only with pages that are:
   - SEO-safe
   - clearly aligned with a real search intent
   - genuinely useful to first-time visitors

What this project is trying to build:

- an English practical China travel knowledge base
- for first-time visitors
- designed for organic search growth first
- with reusable city-cluster structure rather than random isolated posts

Non-negotiable working priorities:

1. SEO-friendly structure
2. Strong search-intent match
3. Real reader usefulness
4. Reusable cluster pattern that can be copied city to city

Default workflow:

1. Make local edits
2. Run local build
3. Give the user the preview path or confirm what changed
4. Do not push unless the user explicitly asks

Current local repo state at the moment this handoff was updated:

- branch: `main`
- latest pushed commit: `e227d38`
- local uncommitted change: `PROJECT_HANDOFF.md`

That means the code/content state is already pushed, and this handoff update itself is the only expected local change unless later work adds more.

## 1. Project Purpose

This project is an English editorial travel site for first-time visitors planning trips to China.

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
- Google Analytics 4 is already wired into the shared layout using measurement ID `G-T75BH982CN`

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
4. Places pages
5. Trust / conversion pages

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

### Places pages

Places pages are attraction-level practical decision pages.

They replaced the older `/attractions/` concept as the main public structure.

Primary route:

- `src/pages/places/[slug].astro`

Places index:

- `src/pages/places/index.astro`

Places content source:

- `src/content/places/*.md`

Redirect note:

- old `/attractions/*` URLs are redirected to `/places/*` through `public/_redirects`
- old OG routes under `/og/attractions/*` also redirect to `/og/places/*`
- do not reintroduce `/attractions/` as the main information architecture

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
- `public/_redirects`
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
- GA4 tracking through `src/layouts/BaseLayout.astro`
- Dynamic `robots.txt`
- Auto-generated sitemap through Astro sitemap integration

Current sitemap status:

- `sitemap-index.xml` exists
- current production includes `sitemap-0.xml`
- sitemap is intentionally focused on indexable content pages such as home, about, destination hubs, guide articles, topic articles, and topic hubs
- low-priority trust / utility / conversion pages such as `/authors/`, `/contribute/`, `/editorial-policy/`, `/plan-help/`, and `/privacy/` are intentionally excluded from sitemap

Important freshness note:

- the old hardcoded sitemap URL-count note in this handoff is no longer reliable after the latest cluster expansion
- if a future thread needs exact current sitemap counts, inspect the generated production sitemap directly instead of trusting a stale handoff number
- latest successful local build on **2026-06-24** produced `445 page(s) built`, but that number includes page routes beyond only sitemap-indexed travel landing pages

Important note:

- The old `public/robots.txt` placeholder with the example domain was removed
- Only the dynamic `src/pages/robots.txt.ts` version should remain
- excluded low-priority pages also use `noindex, nofollow` so Google stays more focused on travel content that is meant to rank
- keep this philosophy unless a currently excluded page becomes a real search landing page with strong standalone content

### Current title and description strategy

The project is moving away from editor-style naming and toward search-intent-first metadata.

Preferred direction:

- write titles more like real traveler queries, not like internal category labels
- use patterns such as:
  - `Is it worth it`
  - `Best time to go`
  - `How many days`
  - `How to`
  - `Which is better`
  - `What to book`
  - `What to bring`
- prioritize phrases with stronger decision intent such as:
  - `first-time visitors`
  - `where to stay`
  - `tickets`
  - `trains`
  - `reservations`
  - `airport transfers`
  - `how long`
  - `best section`
  - `weather`
  - `cost`
  - `apps`

Description guidance:

- do not overuse the same `A practical...` pattern across the whole site
- write descriptions more like search-result summary copy
- stronger description openers often include:
  - `Decide whether...`
  - `Compare...`
  - `Learn...`
  - `See which...`
  - `Find out whether...`
  - `Use this...`

Important nuance:

- do not turn this into a mechanical template rule
- not every page needs to be phrased as a question
- the goal is stronger search-intent match and better click-through rate, not artificial uniformity or keyword stuffing

City-page positioning rule:

- prefer `First-Time Visitors` as the default framing
- avoid mixing `International Visitors` and `First-Time Visitors` unnecessarily across similar page types
- keep the site's audience definition consistent so Google can understand the core user group more clearly

Place-page positioning rule:

- place pages should increasingly answer:
  - is it worth it
  - is it good for a first trip
  - how long it needs
  - when to go
  - where it fits in the city itinerary
- avoid treating place pages as pure descriptive attraction profiles
- practical decision value is more important than scenic description alone

Do not spend time on `meta keywords`.

The meaningful SEO levers here are:

- title quality
- meta description quality
- page-intent clarity
- consistent audience framing
- internal linking and cluster structure

Overall metadata goal:

1. Make it easier for Google to understand which search need a page is solving
2. Make the result snippet more clickable for real travelers comparing options in search

### `updatedDate` rule

The site visibly surfaces updated dates on cards and article layouts, and those dates also feed structured data.

Use this rule:

- only change `updatedDate` for substantive content changes
- do not bump `updatedDate` for tiny wording tweaks, formatting-only edits, or internal housekeeping
- if a page has no meaningful update, leave the old `updatedDate` alone

Reason:

- inflated freshness signals can weaken trust and create unnecessary noise
- the project prefers fewer but more truthful update signals

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

## 11. Analytics

GA4 is already installed at layout level, so it applies site-wide without per-page duplication.

Implementation note:

- shared layout file:
  - `src/layouts/BaseLayout.astro`
- measurement ID:
  - `G-T75BH982CN`

Do not add a second Google tag on individual pages.

If analytics behavior is questioned later, inspect the shared layout first before touching page templates.

## 12. Current Content Coverage

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
- Hong Kong
- Macau
- Shenzhen

### Current maturity map

Use this as the practical city-priority map for future work.

- `Beijing`
  - strongest model city
  - best example for cluster depth, internal linking, places logic, food layer, family layer, and practical support pages
- `Shanghai`
  - strongest next-tier model city
  - strong places, skyline, food, night, and hotel-comparison structure
  - still worth improving Shanghai positioning copy so the city's scale, cosmopolitan appeal, and first-trip value are stated more vividly where needed
- `Xi'an`
  - strong heritage-city sample
  - still good candidate for more adult decision pages around museum / old-city / Terracotta Warriors support branches
- `Chengdu`
  - good food-and-lifestyle city with meaningful place support
  - worth continuing around panda, teahouse, neighborhood, and relaxed-route logic
- `Chongqing`
  - now much deeper than before, especially in skyline, food, museum, and district decisions
  - close to a real model city, but still slightly less complete than Beijing and Shanghai
- `Guangzhou`
  - strong South China anchor with practical food, stay, airport, and route support
- `Hong Kong`
  - now a real usable cluster, but still wants one or two more iconic place anchors
- `Macau`
  - useful starter cluster, still wants another high-recognition historic place anchor
- `Shenzhen`
  - good modern-city and food/night sample, with room for more practical expansion
- `Hangzhou`
  - valuable city, but not currently the top expansion priority
- `Qingdao`
  - useful supporting coastal city, still relatively lighter than the main sample clusters
- `Zhangjiajie`
  - still more specialized and not as central to the reusable city-cluster template

Recent content additions:

- `qingdao-first-time-guide`
- `qingdao-where-to-stay`
- `beijing-4-day-itinerary`
- `guangzhou-3-day-itinerary`
- `can-tourists-use-alipay-in-china`
- `can-tourists-use-wechat-pay-in-china`
- the full South China regional cluster across:
  - `Hong Kong`
  - `Macau`
  - `Shenzhen`
  - `Guangzhou`
- new Shenzhen place anchors:
  - `shenzhen-bay-and-houhai`
  - `shekou-sea-world`
  - `nantou-ancient-town`
  - `dongmen-old-street`
- new Guangzhou place anchor:
  - `beijing-road`

Current high-maturity cluster:

- Beijing is the most complete current sample city
- Shanghai is the next best single-city sample to deepen using the same pattern
- Xi'an, Chengdu, and Chongqing already have meaningful secondary depth
- South China is now the strongest regional multi-city cluster after the latest work, but it still needs a few more place anchors and child pages to feel as mature as Beijing

### Latest pushed state

Most recent pushed commit:

- `e227d3816fd7e203491516f9a351fc24f109056b`
- short hash: `e227d38`
- commit message: `Build South China city clusters and place guides`

This commit is important because it finished a large South China handoff-safe batch and pushed it to `main`.

At the time of this handoff:

- the pushed site/content batch is already on `main`
- the expected local working-tree change is this `PROJECT_HANDOFF.md` update unless a later thread adds more edits
- the South China batch has already been pushed
- latest local build check passed on **2026-06-24**
- Cloudflare Pages should deploy automatically from that push as usual

### South China cluster status

This is the main new system-level change since the older handoff draft.

The project now has a real regional South China cluster made of:

- `Hong Kong`
- `Macau`
- `Shenzhen`
- `Guangzhou`

The current structure pattern for this regional group is:

1. city hub
2. first-time guide
3. how-many-days page
4. where-to-stay page
5. itinerary page
6. food parent and/or night parent
7. district-food execution pages
8. place anchors
9. route-comparison topic support

#### Hong Kong current structure

Live core pages now include:

- city hub: `src/content/cities/hong-kong.json`
- first-time guide: `src/content/guides/hong-kong-first-time-guide.md`
- `how-many-days-in-hong-kong-for-first-time-visitors`
- `hong-kong-where-to-stay`
- `hong-kong-3-day-itinerary`
- `what-to-do-in-hong-kong-at-night`
- `what-to-eat-in-hong-kong-for-first-time-visitors`
- district food children:
  - `where-to-eat-in-central-and-soho-for-first-time-visitors`
  - `where-to-eat-near-temple-street-for-first-time-visitors`
- place anchors:
  - `victoria-peak`
  - `temple-street-night-market`

#### Macau current structure

Live core pages now include:

- city hub: `src/content/cities/macau.json`
- first-time guide: `src/content/guides/macau-first-time-guide.md`
- `how-many-days-in-macau-for-first-time-visitors`
- `where-to-stay-in-macau-for-first-time-visitors`
- `macau-2-day-itinerary`
- `what-to-eat-in-macau-for-first-time-visitors`
- district food children:
  - `where-to-eat-around-senado-square-for-first-time-visitors`
  - `where-to-eat-in-taipa-village-for-first-time-visitors`
- place anchors:
  - `senado-square`
  - `taipa-village`

#### Shenzhen current structure

Live core pages now include:

- city hub: `src/content/cities/shenzhen.json`
- first-time guide: `src/content/guides/shenzhen-first-time-guide.md`
- `how-many-days-in-shenzhen-for-first-time-visitors`
- `where-to-stay-in-shenzhen-for-first-time-visitors`
- `shenzhen-3-day-itinerary`
- `what-to-do-in-shenzhen-at-night-for-first-time-visitors`
- `what-to-eat-in-shenzhen-for-first-time-visitors`
- district food and execution children:
  - `where-to-eat-in-dongmen-for-first-time-visitors`
  - `where-to-eat-in-sea-world-for-first-time-visitors`
  - `where-to-eat-on-bagua-first-road-for-first-time-visitors`
  - `is-guangming-roast-squab-worth-a-detour-for-first-time-visitors`
  - `is-shajing-oysters-worth-a-detour-for-first-time-visitors`
- place anchors:
  - `shenzhen-bay-and-houhai`
  - `shekou-sea-world`
  - `nantou-ancient-town`
  - `dongmen-old-street`

#### Guangzhou current structure

Live core pages now include:

- city hub: `src/content/cities/guangzhou.json`
- first-time guide: `src/content/guides/guangzhou-first-time-guide.md`
- `guangzhou-how-many-days`
- `guangzhou-where-to-stay`
- `guangzhou-baiyun-airport-to-downtown`
- `guangzhou-3-day-itinerary`
- `what-to-do-in-guangzhou-at-night-for-first-time-visitors`
- `what-to-eat-in-guangzhou-for-first-time-visitors`
- `where-to-eat-in-guangzhou-for-first-time-visitors`
- child execution pages:
  - `where-to-eat-on-beijing-road-for-first-time-visitors`
  - `where-to-eat-near-yongqing-fang-for-first-time-visitors`
  - `how-to-plan-a-liwan-and-shamian-half-day-in-guangzhou-for-first-time-visitors`
  - `guangzhou-hong-kong-or-shenzhen-route`
- place anchors:
  - `beijing-road`
  - `yongqing-fang`
  - `pearl-river-night-cruise`

### South China next-step logic

If another thread continues South China specifically, the cleanest next moves are:

1. deepen `Hong Kong` with one or two additional place anchors such as `star-ferry` or `avenue-of-stars`
2. deepen `Macau` with one stronger old-core support place such as `ruins-of-st-pauls`
3. only after that, add more child execution pages if a place already clearly has parent support

Important rule:

- do not explode South China into too many overlapping place pages at once
- keep adding only pages that answer a real first-time visitor decision
- prefer one place anchor plus one useful execution child over several thin overlapping pages

Recent content model direction:

- Each important city should ideally become a mini cluster:
  - one hub page
  - one first-time guide
  - one where-to-stay guide
  - one itinerary or trip-shaping guide
  - topic links that support practical planning

### Beijing cluster as the current model city

Beijing is the clearest current template for how a strong city cluster should be built and expanded.

Use Beijing as the reference pattern when copying the structure to Shanghai, Xi'an, Guangzhou, or other important cities.

#### The Beijing cluster is not just "one city page plus some articles"

It is built in layers:

1. `city hub`
2. `first-trip decision layer`
3. `execution layer`
4. `places layer`
5. `practical planning layer`
6. `food / night / weather / family support layer`

That layered structure is important because it keeps pages from cannibalizing each other.

#### Layer 1: the city hub

Primary example:

- `src/content/cities/beijing.json`

The city hub should do five jobs:

- define who the city is for
- define the ideal stay length
- explain why the city is worth choosing
- connect to the most important guide pages
- connect to the right place pages and cross-city topic pages

Do not treat the city hub as only a short summary page.

It should be the cluster entry point.

#### Layer 2: first-trip decision pages

These pages answer the earliest city questions:

- should I go
- should this be my first stop
- how many days does it need
- when is the best time
- where should I stay

Beijing examples:

- `beijing-first-time-guide`
- `beijing-first-china-stop`
- `how-many-days-in-beijing-for-first-time-visitors`
- `best-time-to-visit-beijing-for-first-time-visitors`
- `beijing-where-to-stay`

These pages should not all say the same thing.

Their roles are:

- `first-time guide`: broad city prioritization
- `first-china-stop`: route-positioning decision
- `how many days`: stay-length decision
- `best time`: timing and season decision
- `where to stay`: hotel-base decision

#### Layer 3: execution pages

These pages turn the city from an idea into a usable route.

Beijing examples:

- `beijing-3-day-itinerary`
- `beijing-4-day-itinerary`
- `beijing-old-city-day-itinerary`
- airport-specific arrival pages such as:
  - `beijing-capital-airport-to-city-center`
  - `beijing-daxing-airport-to-city-center`

Key rule:

- one page = one execution problem

Do not combine:

- general city overview
- hotel selection
- airport transfer logic
- day-by-day itinerary

into one giant mixed page.

#### Layer 4: places layer

The Beijing places layer is intentionally not a flat attraction directory.

It is organized by trip function.

Use place pages for locations that answer one of these questions:

- is it worth it on a first trip
- how long does it need
- when should I go
- what should it replace or pair with
- where does it fit in the itinerary

Beijing place-page roles currently include:

- `core anchors`
  - Forbidden City
  - Temple of Heaven
  - Mutianyu Great Wall
- `central support places`
  - Jingshan Park
  - Zhongshan Park
  - Qianmen
  - Wangfujing
- `slower scenic layer`
  - Beihai Park
  - Summer Palace
  - Shichahai
- `museum layer`
  - National Museum of China
  - Capital Museum
- `deeper add-ons`
  - Ming Tombs
  - Yuanmingyuan
  - Beijing Olympic Park
  - Tongzhou Grand Canal
- `family or fit-dependent support`
  - Beijing Zoo
  - Beijing Aquarium
  - Universal Beijing Resort

Important rule:

- do not create place pages just because a sight exists
- create them when the place helps shape a real traveler decision

#### Layer 5: practical planning layer

These are city-specific operational pages.

Beijing examples:

- `how-to-get-around-beijing`
- `what-to-book-in-advance-for-beijing`
- airport transfer pages

This layer matters because it connects destination inspiration with real trip execution.

For strong cities, this layer usually produces better SEO value than adding many shallow sightseeing pages.

#### Layer 6: food / weather / evening / family support layer

This is one of the most important lessons from Beijing.

A city cluster starts feeling complete when it covers the non-monument decisions that shape real trips.

Beijing examples:

- food:
  - `what-to-eat-in-beijing-for-first-time-visitors`
  - `where-to-eat-in-beijing`
  - `where-to-eat-peking-duck-in-beijing`
  - `beijing-breakfast-and-snacks`
- evening:
  - `what-to-do-in-beijing-at-night`
- weather:
  - `rainy-day-in-beijing-for-first-time-visitors`
  - `rainy-day-in-beijing-with-kids`
- family:
  - `beijing-with-kids-for-first-time-visitors`
  - `best-things-to-do-in-beijing-with-kids`
  - `best-museums-in-beijing-with-kids`
  - `where-to-stay-in-beijing-with-kids`
  - `beijing-3-day-itinerary-with-kids`
  - `beijing-4-day-itinerary-with-kids`

This support layer is what makes the city feel "lived" rather than only famous.

#### Useful Beijing pattern: summary guides before too many extra place pages

One thing that worked well in Beijing:

- add several meaningful place pages
- then add one decision guide that helps readers compare them

Examples:

- `best-museums-in-beijing-for-first-time-visitors`
- `best-museums-in-beijing-with-kids`
- `best-parks-in-beijing-for-first-time-visitors`

This is usually better than creating many place pages without a comparison layer.

It helps:

- internal linking
- search-intent matching
- reader decision-making
- cluster coherence

#### Internal linking rule from the Beijing model

Every important Beijing page should naturally link to:

- one broader parent page
- one narrower execution page
- one related place page
- one practical planning page
- one or two neighboring support pages such as food, weather, or family

The goal is not "more links."

The goal is:

- give Google a clear cluster map
- move readers from broad planning to narrower action

#### What should be copied to other cities first

When building another city, copy the Beijing pattern in this order:

1. city hub
2. first-time guide
3. where-to-stay guide
4. one strong itinerary
5. airport-to-city page if relevant
6. 3 to 6 high-value place pages
7. one practical movement or booking page
8. one food or evening page
9. one comparison or summary guide such as `best parks`, `best museums`, or `what to do at night`

Do not jump straight from:

- city hub

to

- 20 isolated place pages

That produces weaker SEO structure and weaker user value.

#### Beijing-specific lesson worth preserving

The strongest Beijing pages do not try to describe everything.

They usually answer one practical first-time-traveler decision:

- should I choose this
- how much time should I give it
- what should I cut
- what should this day feel like
- what belongs together

That is the main writing pattern to copy to other cities.

## 13. Current Build Behavior

`npm run build` currently passes, but the repo has recurring Astro content warnings about duplicate ids.

Important context:

- these warnings have appeared across existing content and are not necessarily caused by the current thread's edits
- they should not be ignored forever, but they are not the same thing as a broken production build
- when changing content structure, run `npm run build` and confirm:
  - the build still completes
  - the expected routes still generate
  - no new fatal errors were introduced

Do not "fix" the warning situation casually by deleting content or renaming URLs without checking for SEO consequences first.

## 14. Recommended Next Priorities

If another thread continues this work, the most useful next steps are:

1. Finish the most natural South China follow-up pages
   - `star-ferry`
   - `ruins-of-st-pauls`
   - after that, consider one more Hong Kong or Macau supporting place only if it clearly answers a real first-time-visitor decision

2. Keep strengthening search-intent-first city clusters instead of adding many new cities
   - strongest next content targets after South China:
     - `Shanghai`
     - `Xi'an`
     - `Chengdu`
     - `Chongqing`

3. Use Beijing as the copyable template for what "complete enough" means
   - city hub
   - first-time guide
   - where-to-stay
   - itinerary
   - airport-to-city where relevant
   - 3 to 6 meaningful places
   - practical planning support
   - food / night / weather / family or niche support

4. Continue high-intent practical pages that can monetize later
   - transport
   - booking
   - payment
   - food-decision
   - neighborhood-fit pages

5. Keep strengthening internal links inside existing clusters
   - especially:
     - city hub -> place
     - place -> execution child
     - parent food/night pages -> district children
     - route topics -> relevant city hubs

6. Finish Search Console hygiene if still incomplete
   - verify ownership
   - submit `https://visitchinanotes.com/sitemap-index.xml`
   - request indexing for the strongest cluster pages, not everything at once

7. Keep analytics and deployment simple
   - GA4 is already installed
   - do not duplicate tags
   - Cloudflare Pages should keep auto-deploying from `main`

### Clean next-thread execution options

If the next thread wants the safest immediate content move, pick one of these:

1. South China completion
   - add `star-ferry`
   - add `ruins-of-st-pauls`

2. Shanghai strengthening
   - improve or expand pages that better explain why Shanghai is compelling as China's biggest and most international city
   - keep that framing tied to first-time-visitor decisions, not generic city praise

3. Xi'an refinement
   - add narrower adult decision pages such as `is-terracotta-army-worth-it-for-first-time-visitors`
   - or deepen old-city / Beilin / museum support if the query intent is clean

4. Chengdu continuation
   - expand practical place and neighborhood support around panda, teahouse, food, and relaxed city rhythm decisions

## 15. Working Style and Product Expectations

This matters for anyone continuing the project:

- The user prefers practical execution over long theoretical discussion
- The user responds well to seeing concrete results in the running site
- The site should feel like a real editorial product, not a developer demo
- Avoid creator-facing copy on visitor pages
- Preserve fast static delivery and strong crawlability
- SEO structure should stay coherent: hubs, guides, topics, and internal links should reinforce each other
- Default workflow should be: make the change, give the local preview path, and wait before pushing
- Do not push to GitHub unless the user explicitly asks for push

Content expectations:

- English-facing content for foreign travelers
- Clear, practical, first-time-visitor planning help
- Avoid fluff, vague destination marketing, or generic “top 10 attractions” style writing
- Stronger pages help the user decide, not just browse
- Page titles and descriptions should sound closer to real traveler searches than to editorial section labels
- Search-intent alignment matters more than elegant-but-vague copy

## 16. Notes About Existing Docs

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

## 17. Commands

Useful local commands:

```bash
npm install
npm run dev
npm run build
```

Build note:

- On 2026-06-22, Astro `Duplicate id` warnings were confirmed to be stale generated-cache noise when recently edited content still existed in `.astro/data-store.json`.
- Removing `.astro/data-store.json` and rerunning `npm run build` produced a clean build with no duplicate-id warnings.
- On 2026-06-26, the same warning pattern reappeared while local Guilin / Yangshuo content was in progress; removing `.astro/data-store.json` again produced a clean build, confirming the warning still can be cache-only noise rather than a real source-file duplicate.
- Do not treat those warnings as proof that two real source files exist unless a clean build still shows them.
- If the warning returns only after recent edits, clear the generated `.astro` cache first before renaming or deleting content files.

Git / deploy flow:

```bash
git status
git add .
git commit -m "Your message"
git push
```

Production deploys are expected to happen automatically after push to `main`.

## 18. Guardrails

Do not do these casually:

- do not remove the Google verification HTML file
- do not reintroduce a static `public/robots.txt` with stale content
- do not reintroduce `/attractions/` as the main public content architecture
- do not change canonical domain away from `https://visitchinanotes.com` without a deliberate migration
- do not add heavy runtime dependencies unless they clearly justify the cost
- do not turn the site into a complicated CMS unless there is a real operational need
- do not mass-change `updatedDate` across many pages just to make the site look fresher
- do not push automatically after local work unless the user explicitly asks

## 19. Best Handoff Starting Point

If you are continuing from another thread, start here:

1. Run `npm run build`
2. Inspect:
   - home page
   - one city hub
   - one guide page
   - one places page
   - `/places/`
   - `robots.txt`
   - `sitemap-index.xml`
3. Confirm Cloudflare production matches the latest push
4. Continue with either:
   - SEO/analytics onboarding
   - content cluster expansion
   - lightweight lead-capture improvements

## 20. What Another Thread Should Not Forget

These are the most important practical rules that have repeatedly mattered:

- Do not add pages just because a place exists. Add them when they answer a real decision.
- Do not treat place pages as generic attraction descriptions. Make them solve worth-it / how-long / where-it-fits questions.
- Do not update `updatedDate` unless the content changed in a meaningful way.
- Do not casually change sitemap rules, indexing rules, or canonical logic.
- Do not mass-publish overlapping thin pages.
- Do not push after local work unless the user explicitly asks.
- Always update `CONTENT_TODO.md` when publishing or re-scoping important target pages.
- When in doubt, strengthen an existing cluster before opening a brand-new city.
