# Content Todo

Last updated: 2026-06-17

## Goal

Build `Visit China Notes` into an English practical China travel knowledge base that earns steady organic traffic from first-time-visitor questions, then monetizes with ads and later affiliate or partner-intent pages.

## Workflow

- Publish gradually instead of dropping many overlapping pages at once.
- Favor one clear search intent per page.
- Use this structure by default: who it is for, how to choose, what to watch out for, common mistakes, related reads.
- Update this file every time a topic changes from `todo` to `partial` or `done`.
- Avoid publishing multiple pages that target the same query too closely without first deciding which page should be the main landing page.

## Status Legend

- `done`: a live page already matches the search intent well enough
- `partial`: a related page exists, but the intent is still broader or less exact than the target query
- `todo`: no strong page exists yet

## Current Release Plan

### Batch 1: highest-priority query pages

1. `Can Tourists Use Alipay in China? A Step-by-Step Setup Guide`
2. `Can Tourists Use WeChat Pay in China? What Actually Works`
3. `Best eSIM for China in 2026: Tourist-Friendly Options Compared`
4. `Do You Need a VPN in China? What Travelers Should Know`
5. `How to Get From Beijing Capital Airport to the City Center`
6. `How to Get From Shanghai Pudong Airport to the City Center`
7. `How to Book Forbidden City Tickets as a Foreigner`
8. `How to Ride China High-Speed Rail for the First Time`
9. `How to Use Didi in China Without Speaking Chinese`
10. `Best China Itinerary for 7 Days`

### Cannibalization notes before Batch 1

- `src/content/topics/alipay-wechat-pay.md` should stay live as the broader payments page. Publish narrower `Alipay` and `WeChat Pay` pages as child-intent pages, then internally link all three pages clearly.
- `src/content/topics/esim-and-internet.md` is a broad internet-prep page. It can stay as a hub, but the future `Best eSIM for China in 2026` page should be more comparison-focused and commercial-intent-friendly.
- `src/content/guides/beijing-airport-to-city.md` and `src/content/guides/shanghai-airport-to-city.md` are broad city-arrival pages. The future airport-specific pages should narrow by airport and transfer decision.

## Backlog Tracker

| # | Status | Priority | Target topic | Suggested slug | Existing or related page |
| --- | --- | --- | --- | --- | --- |
| 1 | done | batch-1 | Can Tourists Use Alipay in China? A Step-by-Step Setup Guide | `can-tourists-use-alipay-in-china` | `src/content/topics/can-tourists-use-alipay-in-china.md` |
| 2 | done | batch-1 | Can Tourists Use WeChat Pay in China? What Actually Works | `can-tourists-use-wechat-pay-in-china` | `src/content/topics/can-tourists-use-wechat-pay-in-china.md` |
| 3 | done | batch-1 | Best eSIM for China in 2026: Tourist-Friendly Options Compared | `best-esim-for-china` | `src/content/topics/best-esim-for-china.md` |
| 4 | done | batch-1 | Do You Need a VPN in China? What Travelers Should Know | `do-you-need-a-vpn-in-china` | `src/content/topics/do-you-need-a-vpn-in-china.md` |
| 5 | partial | batch-1 | How to Get From Beijing Capital Airport to the City Center | `beijing-capital-airport-to-city-center` | `src/content/guides/beijing-airport-to-city.md` |
| 6 | partial | later | How to Get From Beijing Daxing Airport to the City Center | `beijing-daxing-airport-to-city-center` | `src/content/guides/beijing-airport-to-city.md` |
| 7 | partial | batch-1 | How to Get From Shanghai Pudong Airport to the City Center | `shanghai-pudong-airport-to-city-center` | `src/content/guides/shanghai-airport-to-city.md` |
| 8 | partial | later | How to Get From Shanghai Hongqiao Airport to the City Center | `shanghai-hongqiao-airport-to-city-center` | `src/content/guides/shanghai-airport-to-city.md` |
| 9 | todo | later | How to Get From Guangzhou Baiyun Airport to Downtown | `guangzhou-baiyun-airport-to-downtown` | no exact page yet |
| 10 | todo | later | How to Get From Chengdu Tianfu Airport to the City | `chengdu-tianfu-airport-to-city` | no exact page yet |
| 11 | partial | batch-1 | How to Book Forbidden City Tickets as a Foreigner | `how-to-book-forbidden-city-tickets` | `src/content/topics/attraction-reservations.md` |
| 12 | partial | later | How to Book Terracotta Warriors Tickets Without Stress | `how-to-book-terracotta-warriors-tickets` | `src/content/topics/attraction-reservations.md` |
| 13 | done | batch-1 | How to Ride China High-Speed Rail for the First Time | `how-to-ride-china-high-speed-rail` | `src/content/topics/high-speed-rail.md` |
| 14 | partial | later | 12306 for Foreigners: How to Book Trains in China | `12306-for-foreigners` | `src/content/topics/book-high-speed-train.md` |
| 15 | partial | later | China Train Classes Explained: Second Class vs First Class vs Business | `china-train-classes-explained` | `src/content/topics/high-speed-rail.md` |
| 16 | partial | batch-1 | How to Use Didi in China Without Speaking Chinese | `how-to-use-didi-in-china` | `src/content/topics/metro-taxi-ridehailing.md` |
| 17 | todo | later | What Apps You Need for a China Trip | `what-apps-you-need-for-a-china-trip` | no exact page yet |
| 18 | partial | later | Cash, Card, Alipay, or WeChat Pay: How to Pay in China | `how-to-pay-in-china` | `src/content/topics/alipay-wechat-pay.md` |
| 19 | todo | later | How Much Does a Trip to China Cost in 2026? | `china-trip-cost-2026` | no exact page yet |
| 20 | done | later | Best Time to Visit China for First-Time Visitors | `best-time-to-visit-china` | `src/content/topics/best-time-to-visit-china.md` |
| 21 | todo | later | China Packing List for First-Time Visitors | `china-packing-list-for-first-time-visitors` | no exact page yet |
| 22 | todo | later | What to Wear in China by Season and City | `what-to-wear-in-china` | no exact page yet |
| 23 | todo | later | China Travel Mistakes First-Time Visitors Make | `china-travel-mistakes-first-time-visitors-make` | no exact page yet |
| 24 | todo | later | Is China Easy to Travel Independently in 2026? | `is-china-easy-to-travel-independently` | no exact page yet |
| 25 | partial | later | How Many Days Do You Need for Your First China Trip? | `how-many-days-do-you-need-for-your-first-china-trip` | `src/content/topics/plan-your-trip.md` |
| 26 | partial | later | Beijing or Shanghai for First-Time Visitors? | `beijing-or-shanghai-for-first-time-visitors` | `src/content/topics/where-to-start.md`, `src/content/guides/beijing-first-china-stop.md` |
| 27 | todo | later | Shanghai or Guangzhou: Which City Fits Your Trip Better? | `shanghai-or-guangzhou` | no exact page yet |
| 28 | todo | batch-1 | Best China Itinerary for 7 Days | `best-china-itinerary-7-days` | no exact page yet |
| 29 | todo | later | Best China Itinerary for 10 Days | `best-china-itinerary-10-days` | no exact page yet |
| 30 | todo | later | Best China Itinerary for 14 Days | `best-china-itinerary-14-days` | no exact page yet |

## Notes On Already-Live Coverage

- `src/content/topics/high-speed-rail.md` is already close to query #13 and should be treated as live coverage unless replaced by a clearly stronger version.
- `src/content/topics/best-time-to-visit-china.md` already covers query #20 well enough and should be treated as the main page for that intent.
- `src/content/topics/alipay-wechat-pay.md` should remain the broader parent page for China mobile payments after narrower `Alipay` and `WeChat Pay` setup pages are published.
- `src/content/topics/esim-and-internet.md` should remain the broader parent page for China internet prep after narrower `Best eSIM for China` and `Do You Need a VPN in China?` pages are published.
- The airport pages for Beijing and Shanghai are useful cluster pieces, but they are still broader than the airport-specific searches listed above.

## Update Rule

When a new page is published:

1. change the topic status here
2. add the exact file path in the last column
3. note whether an older broader page should stay live, be repurposed, or be internally linked as a supporting page
