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
| done | Shanghai | Best bars and modern nightlife in Shanghai for first-time visitors | `src/content/guides/best-bars-and-modern-nightlife-in-shanghai-for-first-time-visitors.md` | New nightlife child page that narrows the broader Shanghai night layer into Xintiandi, Fumin Road, FOUND158, Jing'an, and Bund-adjacent drinks logic so readers can choose one realistic bar night instead of treating the whole city as one generic nightlife list. |
| done | Shanghai | What to do in Shanghai at night for first-time visitors | `src/content/guides/what-to-do-in-shanghai-at-night.md` | New evening-decision page that turns Shanghai nights into a practical cluster around the Bund, Huangpu River cruises, Xintiandi or French Concession, Jing'an, and weather-proof museum-night logic so the city now has a clearer night layer to match its growing food and itinerary structure. |
| done | Shanghai | What to eat in Shanghai for first-time visitors | `src/content/guides/what-to-eat-in-shanghai-for-first-time-visitors.md` | New dish-first parent page that turns the Shanghai food layer into a clearer cluster by separating what deserves a meal slot from where that meal should happen, then links xiaolongbao, shengjian, noodles, proper benbang dinners, and seasonal crab logic back into district planning. |
| done | Shanghai | Where to eat in Shanghai for first-time visitors | `src/content/guides/where-to-eat-in-shanghai-for-first-time-visitors.md` | New district-first food decision page that connects skyline dinners, French Concession neighborhood meals, Jing'an polished dinners, and Yu Garden old-city food blocks so the Shanghai cluster starts matching Beijing's stronger itinerary-plus-food structure. |
| done | Shanghai | Best time to visit Shanghai for first-time visitors | `src/content/guides/best-time-to-visit-shanghai-for-first-time-visitors.md` | New city-specific timing page that narrows the broader China season question into Shanghai humidity, plum-rain, typhoon-window, and first-trip walking-comfort tradeoffs. |
| done | Shanghai | What to book in advance for Shanghai | `src/content/guides/what-to-book-in-advance-for-shanghai.md` | New Shanghai booking-order page that turns the city's easier reputation into a practical reservation strategy around hotel timing, any true Disney anchor day, onward trains, museum or exhibition nuance, and when food or skyline bookings actually deserve commitment. |
| done | Shanghai | How to get around Shanghai for first-time visitors | `src/content/guides/how-to-get-around-shanghai.md` | New Shanghai transport decision page that turns the city's easy-transport reputation into practical metro-versus-Didi logic around foreign-card payment, SH MaaS, ferries, buses, hotel-area tradeoffs, family movement, and when to pay more to protect the day. |
| done | Shanghai | How many days in Shanghai for first-time visitors | `src/content/guides/how-many-days-in-shanghai-for-first-time-visitors.md` | New trip-length decision page that gives Shanghai a cleaner first-time planning layer, bridges the broad city guide with the narrower 3-day itinerary, and clarifies when 2, 3, 4, or 5 days actually make sense. |
| done | Shanghai | Rainy day in Shanghai for first-time visitors | `src/content/guides/rainy-day-in-shanghai-for-first-time-visitors.md` | New weather-recovery page that gives the Shanghai cluster a practical bad-weather layer around Bund visibility, French Concession rescue logic, museum pivots, and easier transport decisions instead of leaving rain guidance buried inside broader season or itinerary pages. |
| done | Shanghai | Shanghai with kids for first-time visitors | `src/content/guides/shanghai-with-kids-for-first-time-visitors.md` | New family-planning parent page that gives the Shanghai cluster a reusable kids layer around Disneyland, Bund skyline logic, indoor museum or aquarium backups, easier transport decisions, and honest cuts for short family trips instead of leaving that intent buried inside adult-first itinerary pages. |
| done | Shanghai | Where to stay in Shanghai with kids for first-time visitors | `src/content/guides/where-to-stay-in-shanghai-with-kids.md` | New family hotel-area child page that narrows the broader Shanghai stay decision into central Puxi, French Concession, Pudong, and Disney-area tradeoffs so family readers can choose based on tired returns, easier dinners, and real Disneyland-day logistics instead of adult-first neighborhood criteria. |
| done | Shanghai | What to book in advance for Shanghai with kids | `src/content/guides/what-to-book-in-advance-for-shanghai-with-kids.md` | New family booking-order page that narrows the broader Shanghai reservation logic into hotel-base, Disneyland, onward train, flexible indoor backup, and must-have family dinner priorities so parents can protect the trip without overlocking every museum, aquarium, or evening plan. |
| done | Shanghai | Should you stay near Shanghai Disneyland or in central Shanghai | `src/content/guides/where-to-stay-near-shanghai-disneyland-vs-central-shanghai.md` | New Disney-specific hotel decision page that narrows the broader Shanghai family stay layer into central base, Disney-area, and split-stay logic so readers can decide whether one park day truly deserves moving the whole hotel strategy. |
| done | Shanghai | Best time to visit Shanghai Disneyland for first-time visitors | `src/content/guides/best-time-to-visit-shanghai-disneyland-for-first-time-visitors.md` | New Disney timing child page that narrows the broader Shanghai season layer into the easiest park months, weekday-vs-holiday logic, and summer or winter tradeoffs so first-time visitors can choose a better Disney day rather than only a convenient one. |
| done | Shanghai | How to buy Shanghai Disneyland tickets for first-time visitors | `src/content/guides/how-to-buy-shanghai-disneyland-tickets-for-first-time-visitors.md` | New Disney ticket child page that narrows the broader Shanghai planning layer into official booking channels, passport and ID rules, child-pricing checks, and ticket-type decisions so first-time visitors can book the park day correctly without treating tickets like a vague afterthought. |
| done | Shanghai | How to use the Shanghai Disneyland app for first-time visitors | `src/content/guides/how-to-use-the-shanghai-disneyland-app-for-first-time-visitors.md` | New Disney app child page that narrows the broader planning layer into account setup, linked family tickets, wait-time and show checks, plus how the official app supports Disney Standby Pass, Premier Access, and Early Park Entry so the park day feels more executable instead of more abstract. |
| done | Shanghai | Is Early Park Entry worth it at Shanghai Disneyland | `src/content/guides/is-early-park-entry-worth-it-at-shanghai-disneyland.md` | New Disney add-on decision page that narrows the broader planning layer into one specific first-hour tradeoff around crowded dates, family stress, select-attraction limits, the official Zootopia exclusion, and whether an earlier start actually solves a real park-day problem. |
| done | Shanghai | Is Disney Premier Access worth it at Shanghai Disneyland | `src/content/guides/is-disney-premier-access-worth-it-at-shanghai-disneyland.md` | New Disney add-on decision page that narrows the broader planning layer into one specific later-queue tradeoff around selected attractions, crowd pressure, child energy, app-based purchase flow, and whether paying to protect a few priorities is smarter than paying for a vague feeling of doing more. |
| done | Shanghai | Best Shanghai Disneyland rides for first-time visitors | `src/content/guides/best-shanghai-disneyland-rides-for-first-time-visitors.md` | New Disney priority page that narrows the broader planning layer into one realistic ride shortlist around Pirates, TRON, Soaring, Zootopia, height limits, family-vs-thrill tradeoffs, and which attractions actually deserve Early Park Entry or Premier Access protection on a first visit. |
| done | Shanghai | What to do at Shanghai Disneyland with young kids | `src/content/guides/what-to-do-at-shanghai-disneyland-with-young-kids.md` | New Disney young-kids execution page that narrows the broader family planning layer into lower-height ride choices, stroller and baby-care support, Rider Switch logic, gentler pacing, and how to avoid letting a thrill-led park strategy overwhelm toddlers or preschoolers. |
| done | Shanghai | What to pack for Shanghai Disneyland for first-time visitors | `src/content/guides/what-to-pack-for-shanghai-disneyland-for-first-time-visitors.md` | New Disney packing child page that narrows the broader China packing layer into park-entry bag limits, passport carry, child snacks, stroller logic, and storage choices so first-time visitors can bring what helps and leave out what only slows the day down. |
| done | Shanghai | Best things to do in Shanghai with kids | `src/content/guides/best-things-to-do-in-shanghai-with-kids.md` | New family activity-shortlist page that narrows the broader Shanghai kids layer into Disneyland, the Bund, Natural History Museum, aquarium or animal options, selective old-core choices, and easier evening logic so parents can protect the highest-value days instead of trying to cover every district. |
| done | Shanghai | How to plan Shanghai Disneyland for first-time visitors | `src/content/guides/how-to-plan-shanghai-disneyland-for-first-time-visitors.md` | New high-intent execution page that narrows the broader Shanghai kids cluster into one Disney-specific planning decision around full-day fit, official app setup, live park-hours checks, real-name ticketing, and whether early entry or paid queue-skipping is actually worth it. |
| done | Shanghai | Shanghai 3-day itinerary with kids | `src/content/guides/shanghai-3-day-itinerary-with-kids.md` | New family execution page that turns the broader Shanghai kids cluster into one realistic short-stay route, including when Disneyland deserves a full day, when a non-Disney version is smarter, and how to use one calmer museum, aquarium, or old-core day to keep the family trip enjoyable. |
| done | Shanghai | Shanghai 4-day itinerary with kids | `src/content/guides/shanghai-4-day-itinerary-with-kids.md` | New calmer family execution page that extends the Shanghai kids cluster into a fuller 4-day version around one skyline day, one full Disneyland day, one indoor or old-core day, and one slower flexible day so families can use the city more comfortably than the tighter 3-day version. |
| done | Shanghai | Rainy day in Shanghai with kids | `src/content/guides/rainy-day-in-shanghai-with-kids.md` | New family weather-recovery page that turns the broader rainy-day Shanghai logic into one practical child-energy and backup-decision page around the Bund, Shanghai Museum, Natural History Museum, Ocean Aquarium, and the reopened Science and Technology Museum so parents can rescue a wet day without overcomplicating the route. |
| done | Beijing | Best Beijing restaurants for first-time visitors | `src/content/guides/best-beijing-restaurants-for-first-time-visitors.md` | New restaurant-decision page that targets a more natural tourist search, turns the food cluster from dish and district logic into actual restaurant-style picks, and uses trip style, queue tolerance, and route fit instead of a generic top-10 list. |
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
| done | Xi'an | What to book in advance for Xi'an | `src/content/guides/what-to-book-in-advance-for-xian.md` | New booking-order child page that turns the Xi'an cluster into a more reusable template by narrowing the city into hotel timing, Terracotta Army reservation logic, onward trains, and when Shaanxi History Museum is important enough to reserve instead of leaving every short-stop decision vague. |
| done | Xi'an | How to get around Xi'an for first-time visitors | `src/content/guides/how-to-get-around-xian.md` | New city-movement child page that makes the Xi'an cluster more complete by narrowing the stop into metro-versus-Didi logic, foreign-card payment limits, hotel-area tradeoffs, and the important rule that the Terracotta Army and airport should be treated as separate transport decisions rather than ordinary city rides. |

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
