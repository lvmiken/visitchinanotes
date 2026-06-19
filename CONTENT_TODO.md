# Content Todo

Last updated: 2026-06-20

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
- `src/content/guides/beijing-airport-to-city.md` and `src/content/guides/shanghai-airport-to-city.md` are broad city-arrival pages. Airport-specific child pages should narrow by airport and transfer decision, while the broader city pages stay live as parent landing pages.
- `src/content/topics/metro-taxi-ridehailing.md` should stay live as the broader city-movement page. Narrower ride-hailing help such as `How to Use Didi in China` should sit underneath it and link back clearly.

## Backlog Tracker

| # | Status | Priority | Target topic | Suggested slug | Existing or related page |
| --- | --- | --- | --- | --- | --- |
| 1 | done | batch-1 | Can Tourists Use Alipay in China? A Step-by-Step Setup Guide | `can-tourists-use-alipay-in-china` | `src/content/topics/can-tourists-use-alipay-in-china.md` |
| 2 | done | batch-1 | Can Tourists Use WeChat Pay in China? What Actually Works | `can-tourists-use-wechat-pay-in-china` | `src/content/topics/can-tourists-use-wechat-pay-in-china.md` |
| 3 | done | batch-1 | Best eSIM for China in 2026: Tourist-Friendly Options Compared | `best-esim-for-china` | `src/content/topics/best-esim-for-china.md` |
| 4 | done | batch-1 | Do You Need a VPN in China? What Travelers Should Know | `do-you-need-a-vpn-in-china` | `src/content/topics/do-you-need-a-vpn-in-china.md` |
| 5 | done | batch-1 | How to Get From Beijing Capital Airport to the City Center | `beijing-capital-airport-to-city-center` | `src/content/guides/beijing-capital-airport-to-city-center.md` |
| 6 | done | later | How to Get From Beijing Daxing Airport to the City Center | `beijing-daxing-airport-to-city-center` | `src/content/guides/beijing-daxing-airport-to-city-center.md` |
| 7 | done | batch-1 | How to Get From Shanghai Pudong Airport to the City Center | `shanghai-pudong-airport-to-city-center` | `src/content/guides/shanghai-pudong-airport-to-city-center.md` |
| 8 | done | later | How to Get From Shanghai Hongqiao Airport to the City Center | `shanghai-hongqiao-airport-to-city-center` | `src/content/guides/shanghai-hongqiao-airport-to-city-center.md` |
| 9 | done | later | How to Get From Guangzhou Baiyun Airport to Downtown | `guangzhou-baiyun-airport-to-downtown` | `src/content/guides/guangzhou-baiyun-airport-to-downtown.md` |
| 10 | done | later | How to Get From Chengdu Tianfu Airport to the City | `chengdu-tianfu-airport-to-city` | `src/content/guides/chengdu-tianfu-airport-to-city.md` |
| 11 | done | batch-1 | How to Book Forbidden City Tickets as a Foreigner | `how-to-book-forbidden-city-tickets` | `src/content/topics/how-to-book-forbidden-city-tickets.md` |
| 12 | done | later | How to Book Terracotta Warriors Tickets Without Stress | `how-to-book-terracotta-warriors-tickets` | `src/content/topics/how-to-book-terracotta-warriors-tickets.md` |
| 13 | done | batch-1 | How to Ride China High-Speed Rail for the First Time | `how-to-ride-china-high-speed-rail` | `src/content/topics/high-speed-rail.md` |
| 14 | done | later | 12306 for Foreigners: How to Book Trains in China | `12306-for-foreigners` | `src/content/topics/12306-for-foreigners.md` |
| 15 | done | later | China Train Classes Explained: Second Class vs First Class vs Business | `china-train-classes-explained` | `src/content/topics/china-train-classes-explained.md` |
| 16 | done | batch-1 | How to Use Didi in China Without Speaking Chinese | `how-to-use-didi-in-china` | `src/content/topics/how-to-use-didi-in-china.md` |
| 17 | done | later | What Apps You Need for a China Trip | `what-apps-you-need-for-a-china-trip` | `src/content/topics/what-apps-you-need-for-a-china-trip.md` |
| 18 | done | later | Cash, Card, Alipay, or WeChat Pay: How to Pay in China | `how-to-pay-in-china` | `src/content/topics/how-to-pay-in-china.md` |
| 19 | done | later | How Much Does a Trip to China Cost in 2026? | `china-trip-cost-2026` | `src/content/topics/china-trip-cost-2026.md` |
| 20 | done | later | Best Time to Visit China for First-Time Visitors | `best-time-to-visit-china` | `src/content/topics/best-time-to-visit-china.md` |
| 21 | done | later | China Packing List for First-Time Visitors | `china-packing-list-for-first-time-visitors` | `src/content/topics/china-packing-list-for-first-time-visitors.md` |
| 22 | done | later | What to Wear in China by Season and City | `what-to-wear-in-china` | `src/content/topics/what-to-wear-in-china.md` |
| 23 | done | later | China Travel Mistakes First-Time Visitors Make | `china-travel-mistakes-first-time-visitors-make` | `src/content/topics/china-travel-mistakes-first-time-visitors-make.md` |
| 24 | done | later | Is China Easy to Travel Independently in 2026? | `is-china-easy-to-travel-independently` | `src/content/topics/is-china-easy-to-travel-independently.md` |
| 25 | done | later | How Many Days Do You Need for Your First China Trip? | `how-many-days-do-you-need-for-your-first-china-trip` | `src/content/topics/how-many-days-do-you-need-for-your-first-china-trip.md` |
| 26 | done | later | Beijing or Shanghai for First-Time Visitors? | `beijing-or-shanghai-for-first-time-visitors` | `src/content/topics/beijing-or-shanghai-for-first-time-visitors.md` |
| 27 | done | later | Shanghai or Guangzhou: Which City Fits Your Trip Better? | `shanghai-or-guangzhou` | `src/content/topics/shanghai-or-guangzhou.md` |
| 28 | done | batch-1 | Best China Itinerary for 7 Days | `best-china-itinerary-7-days` | `src/content/topics/best-china-itinerary-7-days.md` |
| 29 | done | later | Best China Itinerary for 10 Days | `best-china-itinerary-10-days` | `src/content/topics/best-china-itinerary-10-days.md` |
| 30 | done | later | Best China Itinerary for 14 Days | `best-china-itinerary-14-days` | `src/content/topics/best-china-itinerary-14-days.md` |

## Notes On Already-Live Coverage

- `src/content/topics/high-speed-rail.md` is already close to query #13 and should be treated as live coverage unless replaced by a clearly stronger version.
- `src/content/topics/best-time-to-visit-china.md` already covers query #20 well enough and should be treated as the main page for that intent.
- `src/content/topics/alipay-wechat-pay.md` should remain the broader parent page for China mobile payments after narrower `Alipay` and `WeChat Pay` setup pages are published.
- `src/content/topics/esim-and-internet.md` should remain the broader parent page for China internet prep after narrower `Best eSIM for China` and `Do You Need a VPN in China?` pages are published.
- The airport pages for Beijing and Shanghai are useful cluster pieces, but they are still broader than the airport-specific searches listed above.

## Cluster Expansion Backlog

Use this section for narrower city-cluster pages that sit outside the original 30-topic list but still support search growth.

| Status | Cluster | Search intent | Current landing page | Notes |
| --- | --- | --- | --- | --- |
| done | Beijing | Rainy day in Beijing with kids | `src/content/guides/rainy-day-in-beijing-with-kids.md` | New family weather-recovery page that narrows the broader rainy-day guide into child-energy, indoor fallback, and lower-friction transport decisions. |
| done | Beijing | What to book in advance for Beijing with kids | `src/content/guides/what-to-book-in-advance-for-beijing-with-kids.md` | New family-booking page that narrows the broader Beijing reservation logic into hotel-base, Palace Museum, Great Wall, and real-name family booking priorities. |
| done | Beijing | How many days in Beijing for first-time visitors | `src/content/guides/how-many-days-in-beijing-for-first-time-visitors.md` | New trip-length decision page that bridges the broad Beijing hub with the narrower 3-day and 4-day itinerary pages. |
| done | Beijing | Best time to visit Beijing for first-time visitors | `src/content/guides/best-time-to-visit-beijing-for-first-time-visitors.md` | New city-specific timing page that narrows the broader China season question into Beijing weather, holiday-pressure, and first-trip comfort tradeoffs. |
| done | Beijing | Where to stay in Beijing with kids | `src/content/guides/where-to-stay-in-beijing-with-kids.md` | New family hotel-area page that narrows the broader Beijing stay decision into central Dongcheng, Qianmen, and Sanlitun tradeoffs for first-time families. |
| done | Beijing | Beijing with kids for first-time visitors | `src/content/guides/beijing-with-kids-for-first-time-visitors.md` | New family-planning page that helps readers decide what to prioritize, what to cut, and when lower-friction transport or park time improves the trip. |
| done | Beijing | Rainy day in Beijing for first-time visitors | `src/content/guides/rainy-day-in-beijing-for-first-time-visitors.md` | New weather-recovery page that helps readers protect hard bookings, choose indoor pivots, and simplify rainy-day transport. |
| done | Beijing | Best museums in Beijing for first-time visitors | `src/content/guides/best-museums-in-beijing-for-first-time-visitors.md` | New museum decision page that helps readers choose between the Palace Museum, National Museum of China, and a lighter museum option without overbuilding the trip. |
| done | Beijing | Best museums in Beijing with kids | `src/content/guides/best-museums-in-beijing-with-kids.md` | New family museum decision page that separates interactive, iconic, and shorter indoor options so parents can choose by age, energy, and weather instead of only by fame. |
| done | Beijing | Best things to do in Beijing with kids | `src/content/guides/best-things-to-do-in-beijing-with-kids.md` | New family activity-shortlist page that connects Mutianyu, the Forbidden City, parks, evening areas, and museum backups into a clearer first-trip activity mix. |
| done | Beijing | Beijing 3-day itinerary with kids | `src/content/guides/beijing-3-day-itinerary-with-kids.md` | New short-stay family execution page that narrows the Beijing family cluster into one central day, one full Great Wall day, and one calmer final day. |
| done | Beijing | Beijing 4-day itinerary with kids | `src/content/guides/beijing-4-day-itinerary-with-kids.md` | New family execution page that turns the broader activity shortlist into a calmer 4-day route with one main anchor per day, softer evenings, and a flexible Day 4. |
| done | Beijing | How to plan Universal Beijing Resort for first-time visitors | `src/content/guides/how-to-plan-universal-beijing-resort.md` | New practical Universal planning page that narrows the broader place page into full-day fit, official schedule and reservation checks, app setup, and itinerary placement logic. |
| done | Beijing | Representative 4A places for first-time visitors | `src/content/places/confucius-temple-and-guozijian.md` and related pages | Added practical place pages for Confucius Temple and Guozijian, Ditan Park, Fragrant Hills, National Botanical Garden, and Beijing Zoo, then linked them into old-city, park, and family Beijing clusters instead of treating them like a flat directory list. |
| done | Beijing | Representative 4A expansion for central park, family indoor, and middle-weight museum choices | `src/content/places/zhongshan-park.md`, `src/content/places/beijing-aquarium.md`, and `src/content/places/capital-museum.md` | Added three practical supporting pages that cover central-core park logic, child-friendly indoor backup, and a middle-weight museum choice, then linked them into itinerary, museum, rainy-day, and family pages. |
| done | Beijing | Best parks in Beijing for first-time visitors | `src/content/guides/best-parks-in-beijing-for-first-time-visitors.md` | New park decision page that turns Beijing's growing park layer into one search-friendly comparison instead of forcing readers to infer the difference between Jingshan, Beihai, Summer Palace, Zhongshan, Fragrant Hills, and the Botanical Garden. |
| done | Beijing | What to do in Beijing at night for first-time visitors | `src/content/guides/what-to-do-in-beijing-at-night.md` | New supporting guide that turns Qianmen, Wangfujing, Sanlitun, and dinner logic into a clear evening-decision page. |
| done | Beijing | Old Beijing day itinerary for first-time visitors | `src/content/guides/beijing-old-city-day-itinerary.md` | New supporting itinerary that connects hutongs, Beihai Park, Qianmen, snacks, and food pages into one executable slower-day route. |
| done | Beijing | Food cluster deepening beyond duck and by district | `src/content/guides/what-to-eat-in-beijing-besides-peking-duck.md` and `src/content/guides/best-food-streets-in-beijing-for-first-time-visitors.md` | Added a narrower non-duck food decision page and a food-streets comparison page so the Beijing food cluster now covers dishes, duck, breakfast/snacks, districts, and evening food logic with clearer child-intent pages. |
| done | Beijing | Qianmen and Niujie neighborhood food child pages | `src/content/guides/where-to-eat-in-qianmen-for-first-time-visitors.md` and `src/content/guides/niujie-food-guide-for-first-time-visitors.md` | Added two district-level child pages so the Beijing food cluster now descends from broad food pages to district comparison, then to old-core Qianmen and halal-food Niujie execution pages. |
| done | Beijing | Wangfujing central-convenience food child page | `src/content/guides/where-to-eat-in-wangfujing-for-first-time-visitors.md` | Added a central-convenience child page so the Beijing food cluster now has a direct execution page for easy central meals, shopping-and-dinner combinations, and honest Wangfujing planning instead of leaving that intent diluted across broader food and night pages. |
| done | Beijing | Huguosi snack child page | `src/content/guides/huguosi-snack-guide-for-first-time-visitors.md` | Added a snack-focused child page so the Beijing food cluster now has a direct execution page for time-honored Beijing snacks, lighter breakfast blocks, and honest Huguosi planning instead of leaving that intent buried inside broader breakfast and food-streets pages. |
| done | Beijing | Guijie late-night food street child page | `src/content/guides/guijie-food-guide-for-first-time-visitors.md` | Added a lively dinner-street child page so the Beijing food cluster now covers Guijie as the practical answer for crayfish, hotpot, barbecue, and later-night food energy instead of forcing that intent into Qianmen, Wangfujing, or Sanlitun pages. |
| done | Beijing | Best Beijing hotpot for first-time visitors | `src/content/guides/best-beijing-hotpot-for-first-time-visitors.md` | Added a dish-specific child page that turns copper hotpot and instant-boiled mutton into a clear first-trip dinner decision, then links that choice back into Donglaishun, Niujie, Guijie, and central Wangfujing planning instead of leaving hotpot scattered across broader food pages. |
| done | Beijing | Sanlitun modern-dining child page | `src/content/guides/where-to-eat-in-sanlitun-for-first-time-visitors.md` | Added a modern-dining child page so the Beijing food cluster now has a direct execution page for polished Chinese dinners, Western or international fallback, and food-plus-drinks evenings in Sanlitun rather than leaving that intent spread across broader food and nightlife pages. |
| done | Beijing | Modern nightlife and bar-friendly evening child page | `src/content/guides/best-bars-and-modern-nightlife-in-beijing-for-first-time-visitors.md` | Added a modern-evening child page so the Beijing cluster now has a cleaner branch for Sanlitun, bars, cocktails, Western-dining fallback, and Liangma River vs Shichahai nightlife choices without confusing that intent with classic Beijing food pages. |
| done | Xi'an | How to get from Xi'an Xianyang Airport to the city center | `src/content/guides/xian-xianyang-airport-to-city-center.md` | Added as a direct child page under the Xi'an cluster and linked from the airport hub plus Xi'an first-time guide. |
| done | Xi'an | How to get from Xi'an to the Terracotta Army | `src/content/guides/terracotta-army-half-day-from-xian.md` | Existing guide repurposed to target the transport-plus-half-day intent without creating a cannibalizing duplicate URL. |

## Update Rule

When a new page is published:

1. change the topic status here
2. add the exact file path in the last column
3. note whether an older broader page should stay live, be repurposed, or be internally linked as a supporting page

## Attraction Layer Notes

- Keep attractions as city-linked practical pages first, not as province archive pages.
- Use attraction pages for anchor sights that shape a city day or require dedicated planning.
- Current live attraction sample:
  - `src/content/attractions/forbidden-city.md`
- Good next attraction candidates:
  - `mutianyu-great-wall`
  - `summer-palace`
  - `temple-of-heaven`
  - `terracotta-warriors`
