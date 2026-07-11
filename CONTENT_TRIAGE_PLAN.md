# Content Triage Plan

This file defines how to clean up pages that feel too templated for AdSense review.

## One clear rule for now

For the next cleanup round, use only **two** actions:

- `Rewrite` for pages that target important search intent or sit close to a main city funnel.
- `Noindex` for narrow, repetitive micro-pages that add little unique value on their own.

## What we are **not** doing right now

- no large-scale page merging
- no broad deletions
- no simultaneous rewrite of everything

Merging is deferred because it is slow, easy to overdo, and creates more URL and internal-link churn than needed.

## Decision standard

### Rewrite

Use `Rewrite` if the page is:

- a city-level utility page such as `how many days`, `how to get around`, or `what to book in advance`
- a page likely to matter in route planning or bookings
- a page that already has strong internal links or hub visibility
- a page whose intent is real, but whose execution still feels too formulaic

### Noindex

Use `Noindex` if the page is:

- hyper-narrow neighborhood food intent
- hyper-narrow nightlife or bar intent
- mostly a location-specific variant of a stronger parent page
- not essential to destination, itinerary, hotel, or booking decisions
- likely to make the site feel scaled rather than editorial

## Technical note

Content pages now support `noindex: true` in frontmatter for:

- `guides`
- `topics`
- `places`

That support is wired through:

- `src/content/config.ts`
- `src/layouts/ArticleLayout.astro`
- `src/layouts/PlaceLayout.astro`

## First cleanup recommendation

### Batch A: Noindex first

These are the strongest first candidates because they are the narrowest, most repetitive, and easiest to remove from index without harming the site's main route-planning value.

- `src/content/guides/where-to-eat-breakfast-in-suzhou-for-first-time-visitors.md`
- `src/content/guides/where-to-eat-breakfast-in-nanjing-for-first-time-visitors.md`
- `src/content/guides/where-to-eat-breakfast-in-wuhan-for-first-time-visitors.md`
- `src/content/guides/where-to-eat-breakfast-in-qianmen-for-first-time-visitors.md`
- `src/content/guides/where-to-eat-breakfast-near-forbidden-city-in-beijing.md`
- `src/content/guides/where-to-eat-after-jingshan-park-in-beijing.md`
- `src/content/guides/where-to-eat-lunch-in-qianmen-for-first-time-visitors.md`
- `src/content/guides/where-to-eat-dinner-after-the-forbidden-city-in-beijing.md`
- `src/content/guides/where-to-eat-near-temple-of-heaven-in-beijing.md`
- `src/content/guides/where-to-eat-near-pingjiang-road-in-suzhou-for-first-time-visitors.md`
- `src/content/guides/where-to-eat-near-west-lake-for-first-time-visitors.md`
- `src/content/guides/where-to-eat-near-hefang-street-and-gaoyin-street-for-first-time-visitors.md`
- `src/content/guides/where-to-eat-near-giant-wild-goose-pagoda-in-xian.md`
- `src/content/guides/where-to-eat-near-giant-wild-goose-pagoda-in-xian-with-kids.md`
- `src/content/guides/where-to-go-in-chengdu-at-night-for-anshun-bridge-views-and-jiuyanqiao-bars.md`
- `src/content/guides/where-to-go-in-yulin-for-craft-beer-little-bars-and-a-slower-chengdu-night.md`
- `src/content/guides/where-to-go-in-chongqing-for-bomb-shelter-bars-bunkers-and-underground-culture.md`
- `src/content/guides/where-to-go-in-xian-for-craft-beer-jazz-or-a-softer-night.md`
- `src/content/guides/where-to-go-in-shanghai-for-bund-view-rooftop-drinks-without-wasting-the-night.md`
- `src/content/guides/where-to-get-a-foot-massage-or-overnight-spa-in-chongqing-after-a-long-day.md`

### Batch B: Rewrite, not noindex

These are too important to hide. They should stay indexed but be rewritten into fewer, stronger, less templated city-utility pages.

- `src/content/guides/how-many-days-in-beijing-for-first-time-visitors.md`
- `src/content/guides/how-many-days-in-shanghai-for-first-time-visitors.md`
- `src/content/guides/how-many-days-in-guangzhou-for-first-time-visitors.md`
- `src/content/guides/how-many-days-in-chengdu-for-first-time-visitors.md`
- `src/content/guides/how-many-days-in-chongqing-for-first-time-visitors.md`
- `src/content/guides/how-many-days-in-xian-for-first-time-visitors.md`
- `src/content/guides/how-to-get-around-beijing.md`
- `src/content/guides/how-to-get-around-guangzhou-for-first-time-visitors.md`
- `src/content/guides/how-to-get-around-shanghai-for-first-time-visitors.md`
- `src/content/guides/what-to-book-in-advance-for-beijing.md`
- `src/content/guides/what-to-book-in-advance-for-shanghai.md`
- `src/content/guides/what-to-book-in-advance-for-guangzhou.md`
- `src/content/guides/what-to-book-in-advance-for-xian.md`

## Operational sequence

Use this order:

1. `Noindex` Batch A.
2. Rebuild and resubmit sitemap.
3. Rewrite Batch B.
4. Re-evaluate whether more micro-pages should stay indexed.

## The practical principle

When in doubt:

- if the page is a narrow child of a stronger parent, `Noindex` it
- if the page is a core planning page, keep it indexed and rewrite it
