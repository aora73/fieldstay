export const CATEGORIES = [
  {
    id: "hotel",
    label: "Hotels",
    blurb: "A real bed, a front desk, and a city that starts outside the door.",
    essay:
      "A hotel, here, means you are not pitching anything. Someone else made the bed, there is a desk if the key fails, and the building is the destination’s infrastructure — civic, conference, or simply a week in one postcode. We split hotels by how you actually use them, not by star count.",
  },
  {
    id: "resort",
    label: "Resorts",
    blurb: "The grounds are the point. Pools, play, and a reason not to leave.",
    essay:
      "A resort earns the name when the property is the holiday, not a bed near one. We separate family beach places, on-site water parks, quiet adult grounds, and hinterland or golf stays — because a jumping pillow and a couples’ spa are not the same product.",
  },
  {
    id: "camping",
    label: "Camping",
    blurb: "Your shelter, their land. Fires, creeks, and the rules that come with both.",
    essay:
      "Camping means you bring the roof, or at least the swag. These are farms, creeks, stations and bush blocks — not a row of cabins with a jumping pillow. Power, pets, fires and the last kilometre of road matter more than a star rating.",
  },
  {
    id: "tourist-park",
    label: "Tourist parks",
    blurb: "Powered sites, cabins and a camp kitchen, run as a park rather than a paddock.",
    essay:
      "Tourist parks sit between a hotel and a farm camp: powered sites, amenities blocks, often cabins or glamping, sometimes a pool. We sort them by beach, by the wildlife they are built around, by whether a long van fits, and by cabin villages for the half of the group who will not camp.",
  },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export const SUBSECTIONS: {
  id: string;
  category: CategoryId;
  label: string;
  blurb: string;
}[] = [
  {
    id: "city-aparthotel",
    category: "hotel",
    label: "City aparthotels",
    blurb: "A kitchen, a laundry, and enough room that day four does not feel like a suitcase.",
  },
  {
    id: "convention",
    category: "hotel",
    label: "Convention & civic",
    blurb: "Walk to the centre. Skip the shuttle and the taxi queue after the last session.",
  },
  {
    id: "long-stay",
    category: "hotel",
    label: "Long-stay suites",
    blurb: "Separate sleeping, a real fridge, and a week that does not depend on room service.",
  },
  {
    id: "classic-room",
    category: "hotel",
    label: "Classic hotel rooms",
    blurb: "Front desk, breakfast, turndown. No kitchen, and that is the deal.",
  },
  {
    id: "country-motel",
    category: "hotel",
    label: "Country motels",
    blurb: "A door near the car, or a room off the pub, on the way to somewhere rougher.",
  },
  {
    id: "family-beach",
    category: "resort",
    label: "Family beach",
    blurb: "Contained fun, sand within a walk, and somewhere to eat when nobody will cook.",
  },
  {
    id: "water-park",
    category: "resort",
    label: "Water parks",
    blurb: "Slides and splash on the grounds, so the beach is a bonus rather than the whole day.",
  },
  {
    id: "quiet-couples",
    category: "resort",
    label: "Quiet couples",
    blurb: "No jumping pillow under the balcony. Pools, dining, and an earlier night.",
  },
  {
    id: "hinterland",
    category: "resort",
    label: "Hinterland & golf",
    blurb: "Off the strip. Greens, lookouts, and a drive down to the water when you want it.",
  },
  {
    id: "farm-creek",
    category: "camping",
    label: "Farm & creek camps",
    blurb: "Private land, space between sites, and a waterhole that is not a chlorinated pool.",
  },
  {
    id: "swim-camp",
    category: "camping",
    label: "Swim camps",
    blurb: "The swim is the reason: billabong, river or gorge, and a fire after.",
  },
  {
    id: "pet-camp",
    category: "camping",
    label: "Pet camps",
    blurb: "Dogs allowed, on a lead, with a host who means it.",
  },
  {
    id: "station",
    category: "camping",
    label: "Station & remote",
    blurb: "Longer dirt, your own water plan, and no servo at the gate.",
  },
  {
    id: "alpine-river",
    category: "camping",
    label: "Alpine river camps",
    blurb: "Booked national-park sites on a river, town behind you and the mountain up the road.",
  },
  {
    id: "beach-bush",
    category: "camping",
    label: "Beach bush camps",
    blurb: "National park sand, a high-clearance track in, and the rules that come with both.",
  },
  {
    id: "beachfront-park",
    category: "tourist-park",
    label: "Beachfront parks",
    blurb: "Sand over the dune, not a ten-minute drive and a car park.",
  },
  {
    id: "nature-resort",
    category: "tourist-park",
    label: "Nature resorts",
    blurb: "The wildlife is the booking. Comfort is there so you can stay for it.",
  },
  {
    id: "big-rig",
    category: "tourist-park",
    label: "Big-rig powered",
    blurb: "Level sites, a dump point, and room for a van that is not a pop-top.",
  },
  {
    id: "cabin-village",
    category: "tourist-park",
    label: "Cabin villages",
    blurb: "When half the group wants linen and the other half wants the annex out.",
  },
  {
    id: "riverside-town",
    category: "tourist-park",
    label: "Riverside & town",
    blurb: "A river or a main street outside the gate, and a shower that is already hot.",
  },
];

export const ATTRIBUTES = [
  { id: "kitchen", label: "Kitchen", group: "Practical" },
  { id: "laundry", label: "Laundry", group: "Practical" },
  { id: "wifi", label: "Wi-Fi", group: "Practical" },
  { id: "parking", label: "On-site parking", group: "Practical" },
  { id: "free-parking", label: "Free parking", group: "Practical" },
  { id: "ev", label: "EV charging", group: "Practical" },
  { id: "accessible", label: "Accessible facilities", group: "Practical" },
  { id: "front-desk", label: "Staffed desk", group: "Practical" },
  { id: "pool", label: "Pool", group: "Comfort" },
  { id: "spa", label: "Spa or sauna", group: "Comfort" },
  { id: "gym", label: "Gym", group: "Comfort" },
  { id: "camp-kitchen", label: "Camp kitchen", group: "Comfort" },
  { id: "hot-shower", label: "Hot showers", group: "Comfort" },
  { id: "city-walk", label: "Walkable city", group: "Setting" },
  { id: "beach", label: "Beach access", group: "Setting" },
  { id: "bush", label: "Bush setting", group: "Setting" },
  { id: "natural-swim", label: "Natural swimming", group: "Setting" },
  { id: "powered", label: "Powered sites", group: "Camp craft" },
  { id: "unpowered", label: "Unpowered sites", group: "Camp craft" },
  { id: "campfire", label: "Campfires", group: "Camp craft" },
  { id: "no-fires", label: "No campfires", group: "Camp craft" },
  { id: "dump-point", label: "Dump point", group: "Camp craft" },
  { id: "larger-rigs", label: "Rigs toward 12 m", group: "Camp craft" },
  { id: "unsealed", label: "Unsealed access", group: "Camp craft" },
  { id: "two-wd", label: "2WD in the dry", group: "Camp craft" },
  { id: "kids", label: "Strong for kids", group: "Who and rules" },
  { id: "pets", label: "Pet friendly", group: "Who and rules" },
  { id: "no-pets", label: "No pets", group: "Who and rules" },
  { id: "week-plus", label: "Good for a week", group: "Who and rules" },
] as const;

export type AttributeId = (typeof ATTRIBUTES)[number]["id"];

export type StayPhoto = {
  src: string;
  alt: string;
  credit: string;
  creditHref?: string;
  licence?: string;
  licenceHref?: string;
  /** Shown above the credit when the frame needs a place name. */
  caption?: string;
};

export type ScoreRow = { label: string; value: number };

export type StayComparison = {
  caption: string;
  columns: [string, string];
  rows: { label: string; cells: [string, string] }[];
};

export type Stay = {
  slug: string;
  name: string;
  aka?: string;
  category: CategoryId;
  subsection: string;
  also: string[];
  region: string;
  state: "ACT" | "NSW" | "QLD" | "VIC";
  address: string;
  lat: number;
  lng: number;
  score: number;
  /** False only when no AORA crew has slept here. The page then says the number is a desk reading. */
  roadTested?: boolean;
  priceBand: "$" | "$$" | "$$$";
  priceNote: string;
  attributes: AttributeId[];
  photos: StayPhoto[];
  summary: string;
  aoraExperience: string;
  verdict: string;
  bestFor: string;
  skipIf: string;
  scores: ScoreRow[];
  sections: { heading: string; paragraphs: string[] }[];
  comparison?: StayComparison;
  practical: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  sources: string[];
};

