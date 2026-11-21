import { EXTRA_STAYS } from "./stays-extra";
import {
  ATTRIBUTES,
  CATEGORIES,
  SUBSECTIONS,
  type AttributeId,
  type CategoryId,
  type Stay,
} from "./stay-model";

export {
  ATTRIBUTES,
  CATEGORIES,
  SUBSECTIONS,
  type AttributeId,
  type CategoryId,
  type ScoreRow,
  type Stay,
  type StayPhoto,
} from "./stay-model";

export const STAYS: Stay[] = [
  {
    slug: "meriton-suites-canberra",
    name: "Meriton Suites Canberra",
    category: "hotel",
    subsection: "city-aparthotel",
    also: ["convention", "long-stay"],
    region: "Civic, Canberra",
    state: "ACT",
    address: "40 Allara Street, Canberra ACT 2601",
    lat: -35.282884,
    lng: 149.133063,
    score: 8.6,
    priceBand: "$$$",
    priceNote:
      "Midweek suites are often advertised from the low-to-mid hundreds. Sitting weeks, Floriade and big conferences move the rate sharply.",
    attributes: [
      "kitchen",
      "laundry",
      "wifi",
      "parking",
      "ev",
      "accessible",
      "front-desk",
      "pool",
      "spa",
      "gym",
      "city-walk",
      "no-pets",
      "week-plus",
    ],
    photos: [
      {
        src: "/photos/meriton-canberra-dusk.jpg",
        alt: "Dusk view from a Civic balcony toward the lit colonnade of the National Library of Australia, with Parliament House and the flag mast behind it",
        caption: "National Library and Parliament House at dusk, from a balcony",
        credit: "AORA, November 2026",
      },
      {
        src: "/photos/meriton-canberra-pool.jpg",
        alt: "Indoor rooftop pool at Meriton Suites Canberra, under a triangulated glass roof, with three purple diamond light panels on the end wall",
        caption: "Indoor pool on the leisure floor, under the glass roof",
        credit: "AORA, November 2026",
      },
      {
        src: "/photos/meriton-canberra-balcony.jpg",
        alt: "Sulphur-crested cockatoo perched on a balcony rail, with Civic office buildings behind",
        caption: "Sulphur-crested cockatoo on a suite balcony",
        credit: "AORA, November 2026",
      },
      {
        src: "/photos/meriton-canberra-city-walk.jpg",
        alt: "Anne Ross sculpture The Other Side of Midnight on City Walk, a painted girl and two carousel dogs, with the Quest Canberra City Walk sign behind",
        caption: "The Other Side of Midnight, City Walk — a walk from the hotel, not the hotel",
        credit: "AORA, November 2026",
      },
      {
        src: "/photos/meriton-canberra-casino.jpg",
        alt: "Illuminated Casino Canberra sign at night on a dark ribbed wall",
        caption: "Casino Canberra, a short stroll from Allara Street",
        credit: "AORA, November 2026",
      },
      {
        src: "/photos/meriton-canberra.jpg",
        alt: "Eastern side of Meriton Suites Canberra, a glass tower on Allara Street",
        credit: "Nick-D",
        creditHref:
          "https://commons.wikimedia.org/wiki/File:Eastern_side_of_the_Meriton_Suites_Canberra_September_2023.jpg",
        licence: "CC BY-SA 4.0",
        licenceHref: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
    ],
    summary:
      "A large Civic aparthotel that behaves like a proper apartment for the nights you are actually there, with a heated rooftop pool on top of a very walkable address.",
    aoraExperience:
      "The AORA Canberra stop is a Civic base, not a bush night. The score starts with that stay: a suite you can cook and wash in, a walk to a session at the Convention Centre, and a heated pool after a day on footpaths. The November 2026 frames are that pool under the glass roof, a sulphur-crested cockatoo on the balcony rail, dusk with the National Library colonnade in front of the flag mast, and the walk out to Anne Ross’s carousel sculpture on City Walk and the Casino Canberra sign. Parking is paid. The building is anonymous once you are above the street. It earns the mark as a working city apartment, not as a camp.",
    verdict:
      "The best ordinary way to stay in Civic if you want a kitchen and a pool more than a lobby pianist. It is polished, central, and a little anonymous — which is exactly why it works for a week.",
    bestFor:
      "Couples and families doing Canberra properly, and anyone with sessions at the Convention Centre who refuses a shuttle.",
    skipIf:
      "You want a small hotel with a point of view, a pet in the room, or a memorable breakfast included. This is not that building.",
    scores: [
      { label: "Location", value: 9.6 },
      { label: "Suite comfort", value: 9.0 },
      { label: "Pool & gym", value: 8.8 },
      { label: "Value", value: 8.2 },
      { label: "Character", value: 6.6 },
    ],
    sections: [
      {
        heading: "The stay, without the brochure",
        paragraphs: [
          "Meriton Suites Canberra is an aparthotel on Allara Street, in the middle of Civic. You are not booking a classic hotel room. You are booking a serviced apartment — studio through to three-bedroom suites and penthouses — with a full kitchen, and in most layouts a washing machine, so a four-night trip does not collapse into takeaway containers and a laundromat.",
          "Public guest scores sit around 9 out of 10 on Booking.com from well over four thousand reviews, with location repeatedly near 9.5, cleanliness and comfort in the low-to-mid 9s, and value a step behind at about 8.8 to 8.9. Wi-Fi is the soft number, often in the mid-8s. That pattern matches the building: the address and the apartment do the work; the hotel theatre does not.",
        ],
      },
      {
        heading: "What the suite actually gives you",
        paragraphs: [
          "Count on air-conditioning, a private bathroom, a kitchen you can cook in (fridge, cooktop, the usual bench kit), and on many floors a balcony. South-facing balconies look over Civic roofs to the National Library colonnade and Parliament House. A sulphur-crested cockatoo on the rail is ordinary Civic, not a special. One published complaint is a balcony onto the internal courtyard that behaves like a wind tunnel — ask for an outward face if the view matters. One-bedroom layouts are the sweet spot for a couple who want a door between the bed and the lounge. Two- and three-bedroom suites are the family answer, and they are why this place beats a standard king room once children are involved.",
          "Housekeeping and presentation generally draw praise. The irritations are operational rather than structural. Guests report the air-conditioning cycling off while they are in the room — unpleasant in a Canberra 38-degree afternoon — television handover between rooms that does not always behave, and slow restocking of basics when the desk is thin. None of that ruins a well-priced suite. All of it is worth knowing before you decide the penthouse is “five-star” in the old sense. It is a new, comfortable apartment building with hotel services, not The Hyatt.",
        ],
      },
      {
        heading: "Rooftop pool, sauna, gym",
        paragraphs: [
          "The leisure floor is the reason a Meriton beats a serviced-apartment listing with a kettle. The heated indoor pool sits under a triangulated glass roof, with three purple diamond light panels on the end wall, and opens onto a sundeck. Guests place that floor at level 15, with the spa, sauna and gym beside it. Guests who use them rate them highly; guests who wanted a hotel breakfast do not, and one public scorecard had breakfast down near 6. Cook downstairs, or walk out. Glebe Park is across the street. Coffee and a proper breakfast are on City Walk and in the Canberra Centre, which is effectively next door.",
          "There is a staffed front desk, luggage storage, and lifts. Parking is on site and it is paid — useful in Civic, not a free perk. Electric-vehicle charging is listed by the property on major booking sites. Accessible parking and step-free circulation are part of the offer; if you need a specific room layout, say so when you book rather than hoping the allocation is kind.",
        ],
      },
      {
        heading: "Where you can walk",
        paragraphs: [
          "National Convention Centre is about a four-minute walk. Canberra Centre and the City Walk cafes are closer than that. On City Walk, Anne Ross’s The Other Side of Midnight (2012) — the painted girl and two carousel dogs — stands in front of Quest Canberra City Walk. That is a walk from Allara Street, not this building. Civic Square and the Casino Canberra sign sit inside a short stroll the other way. Parliament House is the flag mast you can see from a south balcony, then a short drive or a longer walk or tram-and-walk. It is not a step outside the door.",
          "Canberra Airport is roughly eight kilometres. For a self-drive trip this is an easy city hotel: you can park, then ignore the car until you leave. For a no-car weekend it is one of the few Canberra stays where that is realistic.",
        ],
      },
      {
        heading: "Who should book it",
        paragraphs: [
          "Book it for a long weekend or a sitting week when you want to eat in once, swim once, and walk to dinner. Families with children do well because the living room absorbs the mess and the kitchen absorbs the breakfast. Convention visitors do well because the walk is short and the bed is quiet enough.",
          "Skip it if the trip is about design, a bar with a view you will remember, or a dog. Pets are not the brief. Skip it too if you are price-sensitive in a major event week — the same suite that feels like value on a Tuesday in July can look arrogant when Floriade or a summit is on. And if the phones go unanswered, that complaint shows up often enough that we would not rely on a last-minute verbal request. Put it in the booking.",
        ],
      },
    ],
    practical: [
      { label: "Kind of stay", value: "Aparthotel, about 190–210 suites depending on how the building is counted" },
      { label: "Sleeping", value: "Studio, one-, two- and three-bedroom suites, penthouses" },
      { label: "Check-in rhythm", value: "Staffed desk; treat it as a hotel arrival, not a lockbox" },
      { label: "Parking", value: "On-site garage, paid. EV charging listed" },
      { label: "Pets", value: "Not a pet hotel" },
      { label: "Pool", value: "Heated indoor rooftop pool, spa, sauna, gym" },
      { label: "Kitchen", value: "Full kitchen in the suite; laundry in most layouts" },
      { label: "Wi-Fi", value: "Free, and the most common soft complaint" },
    ],
    pros: [
      "Genuinely central — Convention Centre, Canberra Centre and City Walk on foot",
      "Apartment layouts that make three nights with children workable",
      "Heated pool, spa and sauna that guests actually use",
      "You can cook and wash clothes without leaving the building",
    ],
    cons: [
      "Paid parking, and event-week rates that forget the word value",
      "Wi-Fi and the desk can feel thin for the rate",
      "Air-conditioning that sometimes clocks off while you are still in the room",
      "Little character once you are above the podium",
    ],
    sources: [
      "Booking.com guest scores for Meriton Suites Canberra, Allara Street (location, cleanliness, facilities, value, Wi-Fi), checked November 2026",
      "Property descriptions via Booking.com and hotel summaries: rooftop pool, sauna, gym, EV charging, suite kitchens",
      "Guest themes from Booking.com and Trip.com: central walk, pool praise, occasional AC cut-out, slow amenity restock, paid parking, and a balcony onto the internal courtyard",
      "Trivago property note: heated indoor pool, sauna and gym on the 15th floor",
      "AORA photographs, November 2026, from the Civic stay: indoor pool under the glass roof (same roof and purple diamond panels as the published pool photograph), balcony, dusk view to the National Library and Parliament House, Anne Ross’s The Other Side of Midnight on City Walk outside Quest Canberra City Walk, Casino Canberra sign",
    ],
  },
  {
    slug: "oaks-caloundra",
    name: "Oaks Caloundra",
    aka: "Oaks Sunshine Coast Oasis Resort",
    category: "resort",
    subsection: "family-beach",
    also: ["water-park"],
    region: "Caloundra, Sunshine Coast",
    state: "QLD",
    address: "2 Landsborough Parade, Caloundra QLD 4551",
    lat: -26.806886,
    lng: 153.12196,
    score: 7.8,
    priceBand: "$$",
    priceNote:
      "Apartments are often advertised from a bit over $100 a night outside school holidays. Holiday weeks and water-park weather are a different tariff.",
    attributes: [
      "kitchen",
      "wifi",
      "parking",
      "free-parking",
      "pool",
      "beach",
      "kids",
      "no-pets",
      "week-plus",
    ],
    photos: [
      {
        src: "/photos/oaks-caloundra.jpg",
        alt: "Water-play pool and slides at Oaks Sunshine Coast Oasis Resort, Caloundra",
        credit: "Oaks Sunshine Coast Oasis Resort, via a public hotel listing",
      },
    ],
    summary:
      "The family resort in central Caloundra — water park, pool, putt-putt and a jumping pillow — a short walk from Golden Beach, not a private beach club.",
    aoraExperience:
      "AORA treats this as a family resort stop on the Sunshine Coast, not a track camp. The score starts with the grounds: the water park holds children, the apartments have a kitchen, and Golden Beach is a walk rather than a private beach gate. It is the right call when the trip includes kids who need containing, and the wrong call when the crew wanted quiet or sand at the door. This is Landsborough Parade. Oaks Caloundra Shores on the esplanade is a different stay.",
    verdict:
      "Book this when the children are the itinerary. It is a well-placed, slightly worn-in family machine with a real water park. It is not a quiet luxury resort, and it should not be sold as one.",
    bestFor:
      "Families with primary-school children who want slides, a pool and the beach in the same postcode, and who will cook at least some meals.",
    skipIf:
      "You wanted adults-only, a room on the sand, or Oaks Caloundra Shores — that is a different, lower-rise property on the Golden Beach front.",
    scores: [
      { label: "For children", value: 9.2 },
      { label: "Facilities", value: 8.6 },
      { label: "Location", value: 8.4 },
      { label: "Comfort", value: 7.8 },
      { label: "Quiet", value: 5.8 },
    ],
    sections: [
      {
        heading: "Which Oaks this is",
        paragraphs: [
          "The property people mean by “Oaks Caloundra” in the resort sense is Oaks Sunshine Coast Oasis Resort, at 2 Landsborough Parade. It has also long been called Oaks Oasis. It is not Oaks Caloundra Shores. Shores is the separate apartment property on the Golden Beach esplanade. If your booking confirmation says Landsborough Parade, you are at the water-park resort. If it says the esplanade, you are not, and this review is the wrong one.",
          "Google’s public rating has sat around 4.0 from roughly two thousand reviews: a solid family stay, not a loved one. Aggregated stay scores tend to put location in the high 8s out of 10, staff close behind, cleanliness and comfort in the mid-8s, and value a little lower. That is a fair portrait.",
        ],
      },
      {
        heading: "The grounds do the parenting",
        paragraphs: [
          "The resort spreads across landscaped gardens — about four hectares in the property’s own telling — with a dedicated water-play park of around 500 square metres, slides included. Entry to that water park comes with the stay, which matters, because paid top-up attractions are how family resorts nickel-and-dime a holiday. There is also a resort pool and spa, mini golf, a sandpit, a climbing frame and a giant kangaroo jumping pillow.",
          "In school holidays this is the product working as designed: children cycle from slides to putt-putt to the pillow and you see them at meals. In a quiet midweek outside holidays it can feel like a lot of infrastructure for a couple who wanted to read. Choose accordingly. The grounds are not serene. They are useful.",
        ],
      },
      {
        heading: "Apartments, not hotel rooms",
        paragraphs: [
          "Accommodation runs from one-bedroom apartments to three-bedroom villas, in the order of just under two hundred keys. Expect air-conditioning, television, and a kitchen or kitchenette rather than a minibar and a prayer. Balconies and patios face the gardens. This is self-catering with a resort wrapped around it, which is the correct setup for a family week and a poor setup if you wanted turn-down service.",
          "Refurbishment has moved through the property in recent years. Even so, read the latest room photos for the exact category you book. Family resorts age in the traffic lanes — chair legs, balcony furniture, the villa that still has the old splashback. The public comfort scores say “fine”, not “new”.",
        ],
      },
      {
        heading: "Beach, shops, food",
        paragraphs: [
          "Golden Beach is a short walk; Bulcock Beach and the Caloundra strip are a little further on foot and still realistic without the car. Stockland Caloundra is about a seven-minute walk, which is more useful on day three than another pool slide. You are central Caloundra, not Kings Beach front-row, and not a resort with a private beach gate.",
          "There is on-site dining. Google lists Oak & Vine; older guides describe a lily-pond restaurant (Reflections) and Legends Bar with a poolside lean. Names on resort restaurants move. What does not move is the advice: eat on site when everyone is wet and tired, and walk out when you want a better dinner. Breakfast is an extra charge, not a quiet inclusion. Check-in is generally 2pm and check-out 10am — a brisk morning if you are packing a villa.",
        ],
      },
      {
        heading: "The disappointments, plainly",
        paragraphs: [
          "Holiday weeks are busy, and service at peak is the thing guests notice when it slips. This is not the place for a honeymoon that requires silence after 8pm. Pets are not part of the offer. The beach is a walk, so anyone selling “swim straight off the balcony” is selling a different Caloundra.",
          "Free parking and free Wi-Fi are real advantages against Civic-style aparthotels, and the phone on the door is (07) 5491 0333 if you need the resort rather than an online agent. Australia Zoo, Aussie World and the rest of the Sunshine Coast are drives, not strolls — fine as day trips, irrelevant to whether the pillow is comfortable.",
        ],
      },
    ],
    practical: [
      { label: "Official name", value: "Oaks Sunshine Coast Oasis Resort" },
      { label: "Not this review", value: "Oaks Caloundra Shores, on the Golden Beach front" },
      { label: "Phone", value: "(07) 5491 0333" },
      { label: "Keys", value: "Roughly 190 apartments and villas, one to three bedrooms" },
      { label: "Water park", value: "On site, about 500 m², included with the stay" },
      { label: "Also on the grass", value: "Pool, spa, putt-putt, sandpit, climbing frame, kangaroo jumper" },
      { label: "Parking & Wi-Fi", value: "Both free" },
      { label: "Pets", value: "No" },
      { label: "Hours", value: "Check-in about 2pm, check-out 10am" },
    ],
    pros: [
      "Water park, pool and play equipment in one set of grounds",
      "Kitchens, so a family week is not three restaurant bills a day",
      "Free parking and a walk to Golden Beach, Bulcock and the shopping centre",
      "Genuinely aimed at children, and it shows",
    ],
    cons: [
      "Noisy and crowded in school holidays — that is the trade",
      "Not beachfront, and not luxurious",
      "Comfort is uneven once you leave the newest rooms",
      "Easy to book the wrong Oaks if you only search the town name",
    ],
    sources: [
      "Oaks Sunshine Coast Oasis Resort public listings: 2 Landsborough Parade, water park, family facilities, free parking",
      "Google hotel summary, around 4.0 from roughly 2,000 reviews; check-in 2pm, check-out 10am",
      "Facility notes from resort descriptions: putt-putt, kangaroo jumper, kitchens, Oak & Vine / on-site dining",
    ],
  },
  {
    slug: "gootchie-creek",
    name: "Gootchie Creek Escape",
    category: "camping",
    subsection: "farm-creek",
    also: ["swim-camp", "pet-camp"],
    region: "Glenwood, north of Gympie",
    state: "QLD",
    address: "Off Gootchie Road, about 1.3 km west of the Bruce Highway, Glenwood QLD",
    lat: -25.873073,
    lng: 152.580202,
    score: 8.4,
    priceBand: "$",
    priceNote:
      "A 2021 camp guide quoted about $15 an adult and $10 a child per night. Treat that as history. It is still a modest per-person farm fee — confirm the current rate when you book.",
    attributes: [
      "pets",
      "unpowered",
      "campfire",
      "hot-shower",
      "dump-point",
      "bush",
      "natural-swim",
      "unsealed",
      "two-wd",
      "larger-rigs",
      "kids",
    ],
    photos: [
      {
        src: "/photos/gootchie-creek.jpg",
        alt: "Grassy camp beside the billabong at Gootchie Creek Escape, with a rooftop tent",
        credit: "Gootchie Creek Escape, via Hipcamp",
        creditHref: "https://www.hipcamp.com/en-AU/land/queensland-gootchie-creek-escape-dw9h6jwk",
      },
    ],
    summary:
      "A 600-acre working cattle farm between Gympie and Maryborough: unpowered sites you choose yourself, a spring-fed billabong, hot showers, and enough room that Easter does not mean neighbour’s annex in your swag.",
    aoraExperience:
      "This is the road-trip stay. The score starts with the drive: about 1.3 kilometres off the Bruce, a short dirt gate a 2WD handles in the dry and should not trust after heavy rain, then unpowered grass you choose yourself. The billabong swims all year. Dogs stay on a lead. Fires are in the drums when the ban is off. Fishing is off because of the platypus and turtles. No power is the point, unless the crew arrived expecting a pedestal.",
    verdict:
      "One of the better easy-access farm camps on the Bruce Highway run, if you want a fire, a dog and a swim and you do not need power. It is still a paddock on a cattle place. That is the compliment.",
    bestFor:
      "Families and couples in a camper, rooftop tent or van who want space within an easy highway detour, including people travelling with a dog on a lead.",
    skipIf:
      "You need 15-amp power, a telco signal you can work on, a fish, or a sealed site pad. Also skip it straight after heavy rain if you are in a low 2WD and unwilling to walk the last bit.",
    scores: [
      { label: "Setting", value: 9.3 },
      { label: "Space", value: 9.1 },
      { label: "Bush facilities", value: 8.2 },
      { label: "Value", value: 8.8 },
      { label: "Ease of access", value: 8.0 },
    ],
    sections: [
      {
        heading: "What this camp is",
        paragraphs: [
          "Gootchie Creek Escape is a working cattle property of about 600 acres, currently running a reduced herd — the hosts talk about a hundred head — so campers can use the grass. It sits in the Glenwood area, roughly 45 kilometres north of Gympie and a similar thought south of Maryborough, which puts it about two and a half hours from Brisbane if the Bruce is kind. You are 1.3 kilometres off the highway on the western side. The last stretch is dirt, in the order of 500 metres, and it is 2WD-friendly most of the year. After heavy rain it goes slippery. That is the whole access story, and it is a good one: bush camp, not a recovered track.",
          "Sites are unpowered, flat and grassy. You pick a spot by the billabong, under the gums, or out in the open. Caravans, camper trailers, motorhomes, rooftop tents and swags are all in play. Hipcamp’s listing allows vehicles under about 13 metres, so a sensible touring van fits; a road-train does not. There is no electrical hookup. If your trip only works with air-conditioning on the pedestal, this is the wrong creek.",
        ],
      },
      {
        heading: "The billabong, and what you may not do in it",
        paragraphs: [
          "The swim is a large spring-fed billabong that the hosts say holds water all year, not a chlorinated pool and not a dam that vanishes in October. People swim, float and paddle. Fishing is not allowed. The reason is specific and worth repeating to children before the lines come out: platypus and turtles live in it. That single rule tells you what kind of camp this is.",
          "Campfires are part of the stay, in drums or pits the property provides, and not during fire bans. Firewood is sold on site. Wildlife is not a brochure line — campers regularly report cattle wandering past, birds, and the general sense of being on a farm that happens to take tents. Long weekends and school holidays sometimes add low-key events. A guest mentioned a “Gootch stampede”. Ask what is on; do not assume a festival.",
        ],
      },
      {
        heading: "Amenities, honestly",
        paragraphs: [
          "This is no longer a drop-toilet paddock. There are flushing toilets and hot showers, included, with a baby bath. The hosts put the amenities up out of the flood country and describe them as cleaned to a standard they are proud of. Toilets are septic: nothing down them but the obvious, and hygiene products go in the bin.",
          "Drinking water is available from a tank tap. Sites are not individually plumbed, so bring containers. There is a small general store or kiosk rather than a camp kitchen with a six-burner stove. There is no meaningful Wi-Fi — do not plan to work. Rubbish is largely pack-it-out; do not arrive expecting wheelie bins at every tree. A dump point has been added and is listed on Hipcamp. If your black tank is the reason you chose the place, confirm it is open when you book, because farm infrastructure moves.",
          "Generators are the fuzzy rule. An older camp write-up allowed a short evening window. A current Hipcamp listing marks generators as not allowed. Believe the stricter version until the host says otherwise. The same goes for motorbikes and recreational four-wheel driving. The public FAQ raises the question, which on a working farm usually means “ask, and expect a no unless you are told yes.” This is not a playground for quad bikes.",
        ],
      },
      {
        heading: "Who fits",
        paragraphs: [
          "Dogs are welcome on a lead, and you pick up after them. That, plus the space, is why families with children and a kelpie keep coming back. Easter can still be social, but “social” here means you can ride a bike between sites without threading a village of awnings.",
          "The hosts have claimed nomination for best campground in 2022, 2023 and 2024. Treat “nominated” as their claim, not a trophy we watched them lift. On Hipcamp, one listing was showing a recommend rate around 98 percent from several hundred ratings when we checked. The praise clusters around space, the billabong, clean showers and hosts who are present. The complaints, such as they are, cluster around the things the camp never promised: power, fishing, bins, connectivity.",
          "Weddings and functions run on the property too. If you arrive into a marquee weekend, the serenity will be relative. Ask.",
        ],
      },
    ],
    practical: [
      { label: "Where", value: "45 km north of Gympie, 1.3 km off the Bruce, short dirt access" },
      { label: "Phone", value: "0448 313 897" },
      { label: "Email", value: "info@gootchiecreek.com" },
      { label: "Sites", value: "Unpowered, grassy, choose-your-own. Rigs under about 13 m" },
      { label: "Power", value: "None. Generators: public listings disagree — assume no" },
      { label: "Swim", value: "Spring-fed billabong, year round. No fishing" },
      { label: "Fires", value: "Yes, in provided drums or pits, outside bans. Wood for sale" },
      { label: "Pets", value: "Yes, on a lead, pick up" },
      { label: "Amenities", value: "Flush toilets, hot showers, baby bath. Septic — be kind to it" },
      { label: "Water & waste", value: "Tank water on site. Dump point listed. Pack rubbish out" },
      { label: "Work from here", value: "No Wi-Fi. Do not try" },
    ],
    pros: [
      "Room to spread out, even on a long weekend",
      "A real swim that does not depend on the last storm",
      "Hot showers and flush toilets without turning the place into a suburb",
      "Dogs, fires, and an easy highway approach in the dry",
    ],
    cons: [
      "No power, and generator rules you should not gamble on",
      "Dirt access can be greasy after rain",
      "No fishing, no bins to speak of, no Wi-Fi",
      "Fees and event weekends need a phone call, not a guess from an old blog",
    ],
    sources: [
      "Gootchie Creek Escape — property notes on the farm, amenities, pets, unpowered sites, billabong swimming",
      "Host FAQ themes: 45 km north of Gympie, 1.3 km and a short dirt road off the Bruce, 2WD most of the year, pets on lead, no powered sites, no fishing, hot showers",
      "Hipcamp listing: rigs under about 13 m, dump point, flush toilets, pack-it-out rubbish, generators marked not allowed, high recommend rate",
      "Camp And Travel (2021) for the older per-person price and the short generator window — both treated as out of date until confirmed",
    ],
  },
  {
    slug: "turtle-sands",
    name: "Turtle Sands",
    aka: "NRMA Turtle Sands Nature Resort",
    category: "tourist-park",
    subsection: "beachfront-park",
    also: ["nature-resort", "cabin-village", "big-rig"],
    region: "Mon Repos, Bundaberg",
    state: "QLD",
    address: "159 Mon Repos Road, Mon Repos QLD 4670",
    lat: -24.800056,
    lng: 152.443796,
    score: 8.7,
    priceBand: "$$",
    priceNote:
      "Powered sites are the accessible end of the tariff. Villas and glamping cost properly more. BIG4 has advertised stay-seven, pay-six deals — check dates before you count on one.",
    attributes: [
      "pool",
      "beach",
      "powered",
      "hot-shower",
      "camp-kitchen",
      "laundry",
      "accessible",
      "ev",
      "kids",
      "no-pets",
      "no-fires",
      "parking",
      "larger-rigs",
      "week-plus",
    ],
    photos: [
      {
        src: "/photos/turtle-sands-site.jpg",
        alt: "Red academy ute and a Jayco Expanda on a grass site at Turtle Sands, casuarinas behind a fence, pavers in the foreground",
        caption: "Grass site at Turtle Sands, with the she-oak line behind the fence",
        credit: "AORA, October 2026",
      },
      {
        src: "/photos/turtle-sands-rig.jpg",
        alt: "Side view of a Jayco Expanda camper with the annex out, parked beside the Australian Offroad Academy ute on grass",
        caption: "Jayco Expanda with the annex out, same site",
        credit: "AORA, October 2026",
      },
      {
        src: "/photos/turtle-sands-beach.jpg",
        alt: "Ocean seen through casuarina trees from under an annex flyscreen, with a timber fence in the foreground",
        caption: "The beach through the she-oaks, from under the annex",
        credit: "AORA, October 2026",
      },
      {
        src: "/photos/turtle-sands.jpg",
        alt: "NRMA Turtle Sands behind the dunes at Mon Repos, aerial view at sunset",
        credit: "NRMA Parks & Resorts, contributed to Bundaberg Now",
        creditHref: "https://www.brcnow.bundaberg.qld.gov.au/2024/09/19/nrmas-turtle-sands-opens-at-mon-repos-beach/",
      },
    ],
    summary:
      "A new nature park behind the dunes at Mon Repos, next to the turtle centre: powered beach sites, glamping and villas, a pool, and a hard curfew on lights and dogs.",
    aoraExperience:
      "The AORA read starts at Mon Repos, not in Bundaberg. The park sits behind the dune beside the turtle centre, so a night tour does not end in a drive. The October 2026 stop was a grass site on that dune edge: the Expanda annex out in full sun, a casuarina line on the fence, and the surf in the gap between the she-oaks. Powered sites and villas are both real options. The rules are part of the stay: no dogs, no fires, lights down after about 7:30pm while turtles are using the beach. The pad itself was open — the trees are the backdrop, not a canopy. October is the shoulder, before the tours start in November. The address is the same.",
    verdict:
      "The best reason to stay near Bundaberg if the turtles are the point, and a very good beach tourist park even when they are not nesting. Accept the rules or book somewhere with a fire pit and a kennel.",
    bestFor:
      "Families and couples who want the sand close, a proper amenities block, and — from November to March — a realistic chance of seeing turtles without a midnight drive.",
    skipIf:
      "You travel with a dog, you want a campfire, or you need deep shade on every site. The trees here are still growing into the job.",
    scores: [
      { label: "Setting", value: 9.5 },
      { label: "Wildlife access", value: 9.6 },
      { label: "Facilities", value: 8.8 },
      { label: "Sites & shade", value: 7.2 },
      { label: "Value", value: 7.6 },
    ],
    sections: [
      {
        heading: "Why the park is here",
        paragraphs: [
          "NRMA Turtle Sands Nature Resort sits at 159 Mon Repos Road, behind the dunes of Mon Repos Beach, beside Mon Repos Conservation Park. It is about twenty minutes from Bundaberg and the airport. The point of the address is blunt: this is one of the only places on the Australian mainland where you can sleep in a villa, a glamping tent or a caravan a short walk from a globally significant turtle rookery. Loggerhead, flatback and green turtles use this beach. The Mon Repos Turtle Centre is a few minutes on foot through the scrub, which matters at 11pm more than any pool does.",
          "The park was rebuilt and opened as a new nature resort around 2024. BIG4, where it is listed as a partner park, has shown a score around 9.3 from more than 650 reviews. That is a new park still in its honeymoon, and the facilities feel like it. It is also a park with a job — protecting the nesting beach — and the rules are not mood lighting.",
        ],
      },
      {
        heading: "How you can sleep",
        paragraphs: [
          "There are powered, level grass sites, including beachfront sites closest to the sand, suitable for caravans, camper trailers and tents. Beachfront powered sites are described as taking rigs under about 11 metres, with power, water and a vehicle space. Further into the park you will find studio cabins, multi-bedroom villas (some with two bathrooms, up to three bedrooms in the family stock) and glamping tents that reviewers have been frankly delighted by.",
          "Shade is the honest weakness. A lot of the vegetation is young. The October 2026 grass site had mature she-oaks along the fence and open sun on the van — the trees are a backdrop, not a roof. On a long summer stay, bring your own cover. The trade is space, a new bathroom, and the sound of the surf if you are on the dune side.",
        ],
      },
      {
        heading: "Facilities that make a park, not a paddock",
        paragraphs: [
          "The amenities block is new and it shows — reviewers who live in vans notice this immediately. There is a large camp kitchen with a verandah, barbecues, fridges and indoor-outdoor seating; one write-up had it open from about 6am to 10pm, which is the right shape for a park (early kettle, late dishes). It doubles as the wet-weather room and the footy room. Self-service laundry is on site.",
          "The pool is shaped, unmistakably, with turtles in mind, and it has an accessible entry. That plus the new paths makes this a more realistic stay for someone who cannot do a soft dune track at night — though the beach and the turtle tour are still sand, and no pool ramp fixes that. E-bikes are hired for the run into Bargara. EV charging has been reported by families staying in the villas; confirm the plug before you arrive on empty.",
          "There is no campfire culture here. Hipcamp’s park rules mark fires as not allowed, which fits a coastal conservation neighbour. If the night only works with a drum fire, go inland. Gootchie Creek, on this same coast’s highway, is the opposite answer.",
        ],
      },
      {
        heading: "Turtles, lights, and no dogs",
        paragraphs: [
          "Turtle Encounter tours run in season, roughly November to March, from the centre next door. Nesting is the earlier part of that window; hatchlings tend to dominate later, into the new year. Tours book out. If the sighting is why you came, reserve it when you reserve the site, not from the camp kitchen on night one.",
          "Every guest is asked to accept a turtle policy. The practical version: unnecessary lights out after about 7:30pm. Hatchlings and nesting turtles navigate by the glow on the horizon. A van’s awning light is not a neutral act. Phones down, torches red if you must walk, and no wandering the nesting beach on your own program.",
          "Dogs are not allowed. The conservation park is the reason, and it is not a rule the front desk will wink at. If the labrador is non-negotiable, this park is.",
        ],
      },
      {
        heading: "Who it suits, outside the season too",
        paragraphs: [
          "From April to October you still have a beachfront tourist park with a good kitchen, a pool and Bargara close by. It is a fair winter stop between the Fraser Coast and the Capricorn Coast. You will not see hatchlings, and you should not pay a peak turtle premium if the diary is empty — ask what the rate is actually for.",
          "In season, with a villa or a dune-side site and a tour already booked, it is the stay we would pick on this stretch of coast. The value score is the one we mark down: new parks price the novelty, and a powered site with a light curfew is not automatically a bargain. You are paying for the address. The address is real.",
        ],
      },
    ],
    practical: [
      { label: "Park", value: "NRMA Turtle Sands Nature Resort, also listed with BIG4" },
      { label: "Address", value: "159 Mon Repos Road, Mon Repos QLD 4670" },
      { label: "From Bundaberg", value: "About 20 minutes, including from the airport" },
      { label: "Sleeping", value: "Powered sites, glamping tents, studios and villas up to three bedrooms" },
      { label: "Beach sites", value: "Level grass, power and water. Around 11 m rig limit on the beachfront row" },
      { label: "Pool", value: "Resort pool with accessible entry" },
      { label: "Kitchen", value: "Camp kitchen with verandah; villa kitchens vary by cabin type" },
      { label: "Pets", value: "No" },
      { label: "Fires", value: "No" },
      { label: "Lights", value: "Down after about 7:30pm under the turtle policy" },
      { label: "Tours", value: "Mon Repos Turtle Encounter, roughly November to March. Book ahead" },
    ],
    pros: [
      "You can walk to the rookery and the turtle centre",
      "New amenities, a proper camp kitchen, and an accessible pool",
      "Real choice: powered site, glamping tent, or a villa with bedrooms",
      "The beach is the back fence, not a suburb away",
    ],
    cons: [
      "No dogs, no fires, and a serious lights-out rule",
      "Shade is still establishing — summer sites can be exposed",
      "Peak season and turtle tours sell out",
      "You pay for a new park and a rare address",
    ],
    sources: [
      "RV Daily review of NRMA Turtle Sands: beachfront sites, new amenities, camp kitchen, accessible pool, light curfew, no dogs, shade caveat, tour timing",
      "Escape and family-stay write-ups: villas, glamping, Mon Repos Turtle Centre on foot, camp kitchen hours, e-bikes, EV charging, laundry",
      "BIG4 partner listing: 159 Mon Repos Road, pool, camp kitchen, e-bikes, score about 9.3 from 650-plus reviews, stay-7-pay-6 offer",
      "Hipcamp park notes: powered beachfront sites, rig guidance, no campfires, no pets",
      "AORA photographs, October 2026: grass site, Jayco Expanda with the annex out, and the beach through the casuarinas from under the annex",
    ],
  },
  ...EXTRA_STAYS,
];

export function categoryById(id: string) {
  return CATEGORIES.find((c) => c.id === id);
}

export function stayBySlug(slug: string) {
  return STAYS.find((s) => s.slug === slug);
}

export function subsectionsFor(category: CategoryId) {
  return SUBSECTIONS.filter((s) => s.category === category);
}

export function subsectionById(id: string) {
  return SUBSECTIONS.find((s) => s.id === id);
}

export function attributeById(id: string) {
  return ATTRIBUTES.find((a) => a.id === id);
}

const GROUPS = ["Practical", "Comfort", "Setting", "Camp craft", "Who and rules"] as const;

export function attributesByGroup() {
  return GROUPS.map((group) => ({
    group,
    items: ATTRIBUTES.filter((a) => a.group === group),
  }));
}

export type SortKey = "score" | "name";

export function filterStays(input: {
  q?: string;
  category?: string;
  subsection?: string;
  attrs?: string[];
  state?: string;
  sort?: SortKey;
}) {
  const q = (input.q ?? "").trim().toLowerCase();
  const attrs = input.attrs ?? [];
  let list = STAYS.filter((stay) => {
    if (input.category && stay.category !== input.category) return false;
    if (input.state && stay.state !== input.state) return false;
    if (input.subsection && stay.subsection !== input.subsection && !stay.also.includes(input.subsection)) {
      return false;
    }
    if (attrs.length > 0 && !attrs.every((id) => stay.attributes.includes(id as AttributeId))) return false;
    if (!q) return true;
    const labels = stay.attributes.map((id) => attributeById(id)?.label ?? id);
    const sub = subsectionById(stay.subsection);
    const hay = [
      stay.name,
      stay.aka ?? "",
      stay.region,
      stay.address,
      stay.summary,
      stay.verdict,
      stay.category,
      sub?.label ?? "",
      ...labels,
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
  list = [...list].sort((a, b) => {
    if (input.sort === "name") return a.name.localeCompare(b.name);
    return b.score - a.score;
  });
  return list;
}
