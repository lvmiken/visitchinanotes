# Editorial Team Rules

This file is the source of truth for public bylines on `visitchinanotes.com`.

## Current public editors

Five women:

- `Amelia Chen`: Beijing, Xi'an, northern history, museum-heavy coverage
- `Sophia Li`: Shanghai, Suzhou, architecture, design, district culture
- `Grace Lin`: Guangzhou, Shenzhen, Hong Kong, Macau, Pearl River Delta routes
- `Hannah Zhou`: Chengdu, Chongqing, food, nightlife, youth culture
- `Olivia Wang`: Guilin, Yangshuo, Zhangjiajie, scenic pacing, outdoor routes

Five men:

- `Daniel Xu`: Hangzhou, Nanjing, Qingdao, East China city coverage
- `Leo Sun`: Wuhan, Harbin, secondary-city practical planning
- `Ethan Zhao`: multi-city routes, pairings, comparisons, itinerary architecture
- `Jason Liu`: airports, rail, payments, apps, booking mechanics
- `Marcus He`: visa and transit, family travel, travel-readiness content

## Current public desk structure

Desks still exist as institutional review lanes and should remain public:

- city desks
- route-planning desk
- transport-and-payments desk
- travel-readiness desk
- entry-and-visa desk
- family-travel desk

Editors own the public byline. Desks explain review structure and accountability.

## Bylines: how new content should be assigned

Use these rules in order.

### 1. City-first rule

If the page is primarily about one city, assign the city editor:

- `beijing`, `xian`, `dunhuang`, `shanxi` -> `Amelia Chen`
- `shanghai`, `suzhou` -> `Sophia Li`
- `guangzhou`, `shenzhen`, `hong-kong`, `macau` -> `Grace Lin`
- `chengdu`, `chongqing` -> `Hannah Zhou`
- `guilin`, `yangshuo`, `zhangjiajie` -> `Olivia Wang`
- `hangzhou`, `nanjing`, `qingdao` -> `Daniel Xu`
- `wuhan`, `harbin` -> `Leo Sun`

### 2. Specialist override rule

If the slug or topic is clearly specialist-led, override the city rule:

- visa / transit / entry / immigration -> `Marcus He`
- kids / family / elderly-parents -> `Marcus He`
- airport / airport-to-city / rail / train / transport / booking / payments / Alipay / WeChat Pay / Didi / apps -> `Jason Liu`
- multi-city route / pairing / comparison / loop / order / itinerary architecture across cities -> `Ethan Zhao`

### 3. Route-first rule

If the page spans multiple cities and no stronger specialist override applies, use `Ethan Zhao`.

## How to add a new editor later

When a future thread adds or changes staff editors, do all of these together:

1. Add a new JSON file under `src/content/authors/`.
2. Keep `entityType` as `person` for public byline editors.
3. Update this file with the editor's coverage lane.
4. Reassign content `author:` fields where needed.
5. Check `/authors/`, `/masthead/`, and one article page after build.

## Files future threads should inspect first

- `EDITORIAL_TEAM.md`
- `CONTENT_TRIAGE_PLAN.md`
- `src/content/authors/`
- `src/pages/authors/index.astro`
- `src/pages/masthead/index.astro`
- `src/lib/authors.ts`

## Important note

Do not switch back to broad bylines like `Editorial Team` for normal published content.

That label can remain as a fallback concept in code, but public travel pages should use named editors unless there is a specific reason not to.
