import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";

export const Route = createFileRoute("/on-air")({
  head: () => ({
    meta: [
      { title: "On air · Fieldstay" },
      {
        name: "description",
        content:
          "Working public mentions of Dingo Dave, Dave Darmody and the Australian Offroad Academy on six Australian shows.",
      },
    ],
  }),
  component: OnAirPage,
});

type Mention = {
  date: string;
  title: string;
  where: string;
  quote: string;
  href: string;
};

type Show = {
  id: string;
  name: string;
  note?: string;
  mentions: Mention[];
};

const SHOWS: Show[] = [
  {
    id: "whats-up-downunder",
    name: "What's Up Downunder",
    note: "Network 10's public pages for this show do not write these names. The K'gari story below is on the show's own site.",
    mentions: [
      {
        date: "15 June 2016",
        title: "Season 7, episode 12: Some important lessons with Australian Offroad Academy",
        where: "YouTube description",
        quote:
          "Dave from the Australian Offroad Academy runs us through the essential gear for off road driving before putting Ally through her paces behind the wheel.",
        href: "https://www.youtube.com/watch?v=CPbdq6CMgqQ",
      },
      {
        date: "6 May 2019",
        title: "Fraser Island",
        where: "YouTube description",
        quote:
          "Roadstar Caravans owner Ken, along with Dave Darmody take the Roadstar Caravans for a test up to Fraser Island.",
        href: "https://www.youtube.com/watch?v=yEpPsd_eOUI",
      },
      {
        date: "29 July 2019",
        title: "Season 10, episode 15: Australian Offroad Academy",
        where: "YouTube title",
        quote:
          "The video is titled WUDU S10E15 Australian Offroad Academy. The description field itself is blank, so the name is in the title on the show's channel, not in a written description.",
        href: "https://www.youtube.com/watch?v=qZ5LrOChFtc",
      },
      {
        date: "26 September 2026",
        title: "Queensland: Noosa to Hervey Bay and K'gari",
        where: "Show site, episode story",
        quote:
          "Emily Rose from Australian Offroad Academy starts with one of the most important steps: lowering the tyre pressures before tackling the island's soft sand and inland tracks.",
        href: "https://whatsupdownunder.com.au/watch/episode/queensland-noosa-to-hervey-bay-kgari/",
      },
    ],
  },
  {
    id: "creek-to-coast",
    name: "Creek to Coast",
    note: "No working public mention. A 2019 upload titled Creek to Coast Dunga Derby story names Dave Darmody in a description search engines still quote. The video is not available, so it is not linked. The 7plus catalogue was read in full and does not name him, Dingo Dave or the academy. The only dingo in those episode stories is pro surfer Dingo Morrison.",
    mentions: [],
  },
  {
    id: "great-south-east",
    name: "Great South East",
    note: "No working public mention on the show site, an episode story, or a YouTube description. Great South East is not on 7plus.",
    mentions: [],
  },
  {
    id: "qld-weekender",
    name: "Qld Weekender",
    note: "No working public mention on the show site, an episode story, or a YouTube description. Searched as Qld Weekender and Queensland Weekender. The 7plus catalogues for both were read and do not name them.",
    mentions: [],
  },
  {
    id: "offroad-adventure-show",
    name: "Offroad Adventure Show",
    note: "Episode stories below are the blurbs still published with the show on Plex. The old show domain now parks a sales page and does not name anyone, so it is not linked. Clips on the academy's own channel that say they first aired on this show are not listed here. Network 10's public show page names Leash, Borgy, Jillaroo Jess and Jamie Hazelden. It does not name Dingo Dave, Dave Darmody or the academy, so that page is not linked.",
    mentions: [
      {
        date: "16 October 2016",
        title: "Season 3, episode 1: Barrington Tops",
        where: "Episode story",
        quote:
          "Dave from Australian Offroad Academy is explaining why we drop our tyre pressures when we head offroad.",
        href: "https://watch.plex.tv/show/the-offroad-adventure-show/season/3/episode/1",
      },
      {
        date: "29 October 2016",
        title: "Season 3, episode 2: Lithgow / Hill End",
        where: "Episode story",
        quote:
          "Dave from Australian Offroad Academy is explaining how to engage 4WD when we head offroad.",
        href: "https://watch.plex.tv/show/the-offroad-adventure-show/season/3/episode/2",
      },
      {
        date: "27 November 2016",
        title: "Season 3, episode 6: Wild Western Australia (2)",
        where: "Episode story",
        quote: "Dave Darmody is helping us learn how to conserve fuel!",
        href: "https://watch.plex.tv/show/the-offroad-adventure-show/season/3/episode/6",
      },
      {
        date: "18 December 2016",
        title: "Season 3, episode 7: Fraser Island's Hidden Secrets",
        where: "Episode story",
        quote:
          "Rick and Jamie are joined by Dave Cook from Tough Dog Suspension and Dave Darmody from Australian Offroad Academy for a great couple of days on Fraser Island.",
        href: "https://watch.plex.tv/show/the-offroad-adventure-show/season/3/episode/7",
      },
      {
        date: "12 February 2017",
        title: "Season 3, episode 12: Cape York (2): The Tip and Beyond",
        where: "Episode story",
        quote:
          "This week we are joined by our good mate Dave Darmody and we decide to tackle the southern part of the Old Telegraph Track.",
        href: "https://watch.plex.tv/show/the-offroad-adventure-show/season/3/episode/12",
      },
      {
        date: "12 November 2017",
        title: "Season 4, episode 2: Plenty Highway",
        where: "Episode story",
        quote:
          "Rick is joined by Dingo Dave from Australia Offroad Academy and Ricks good mate Steve Zammit from Ezytrail.",
        href: "https://watch.plex.tv/show/the-offroad-adventure-show/season/4/episode/2",
      },
      {
        date: "3 December 2017",
        title: "Season 4, episode 4: Trek to Uluru",
        where: "Episode story",
        quote:
          "Tune in as Rick along with Dingo Dave and Steve Zammit from Ezytrail explore the things to see and do when you travel from Alice Springs to Uluru.",
        href: "https://watch.plex.tv/show/the-offroad-adventure-show/season/4/episode/4",
      },
      {
        date: "17 December 2017",
        title: "Season 4, episode 5: Yalwal",
        where: "Episode story",
        quote: "Dave Darmody is teaching us about reading terrain.",
        href: "https://watch.plex.tv/show/the-offroad-adventure-show/season/4/episode/5",
      },
      {
        date: "21 January 2018",
        title: "Season 4, episode 10: Grampians National Park",
        where: "Episode story",
        quote:
          "Dave (Dingo) is back with some great tips on fuel consumption for your travels, that will save you on your next trip.",
        href: "https://watch.plex.tv/show/the-offroad-adventure-show/season/4/episode/10",
      },
      {
        date: "9 February 2018",
        title: "Offroad Advice: MUD",
        where: "YouTube description",
        quote: "Offroad advice from Dingo Dave on driving through MUD.",
        href: "https://www.youtube.com/watch?v=l2ZdXtb-8YU",
      },
      {
        date: "4 November 2018",
        title: "Dingo Diaries: Outback travel",
        where: "Show page",
        quote:
          "Each week, Dingo Dave from Australian Offroad Academy - Offroad Ready. will dive into some of the things that you should consider before attempting the trips you see on that weekend's The Offroad Adventure Show.",
        href: "https://www.facebook.com/reel/430103644402462/",
      },
    ],
  },
  {
    id: "great-australian-doorstep",
    name: "Great Australian Doorstep",
    note: "No working public mention on the show site, an episode story, or a YouTube description. The 7plus catalogue was read and does not name them.",
    mentions: [],
  },
];

function OnAirPage() {
  const found = SHOWS.reduce((sum, show) => sum + show.mentions.length, 0);

  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-4 py-8">
        <p className="text-sm font-semibold tracking-wide text-ember">Fieldstay</p>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">On air</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Public mentions of Dingo Dave, Dave Darmody or the Australian Offroad Academy, sorted by
          show. A link is here only if the page still opens and the name is written on it.
        </p>
        <p className="mt-4 text-base leading-relaxed">
          Checked November 2026 across What's Up Downunder, Creek to Coast, Great South East, Qld
          Weekender, the Offroad Adventure Show and Great Australian Doorstep. {found} links. A name
          spoken on a tape, and never written in a story or a description, is not in this index.
          Channel 7's 7plus catalogues for Creek to Coast, Queensland Weekender, Weekender and The
          Great Australian Doorstep were read and do not name them. Great South East is not on
          7plus. Channel 10's public pages for What's Up Down Under and The Offroad Adventure Show
          do not name them either. Older 10 episode lists do not come down with the public page, so
          those blurbs could not be read.
        </p>
        <nav className="mt-6 flex flex-wrap gap-2" aria-label="Shows">
          {SHOWS.map((show) => (
            <a
              key={show.id}
              href={`#${show.id}`}
              className="inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 text-sm font-medium"
            >
              {show.name}
              <span className="ml-2 tabular-nums text-ember">{show.mentions.length}</span>
            </a>
          ))}
        </nav>

        {SHOWS.map((show) => (
          <section key={show.id} id={show.id} className="mt-12 scroll-mt-6">
            <h2 className="font-display text-3xl">{show.name}</h2>
            {show.note ? <p className="mt-3 text-base leading-relaxed text-muted">{show.note}</p> : null}
            {show.mentions.length === 0 ? null : (
              <ol className="mt-4 space-y-4">
                {show.mentions.map((mention) => (
                  <li key={mention.href} className="rounded-lg border border-line bg-card p-4">
                    <p className="text-sm font-medium text-ember">{mention.date}</p>
                    <h3 className="mt-1 font-display text-xl leading-snug">
                      <a
                        href={mention.href}
                        className="underline decoration-ember underline-offset-4"
                      >
                        {mention.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm text-muted">{mention.where}</p>
                    <p className="mt-3 text-base leading-relaxed">{mention.quote}</p>
                  </li>
                ))}
              </ol>
            )}
          </section>
        ))}

        <p className="mt-12 text-sm text-muted">
          The longer note on who he is sits on{" "}
          <Link to="/about" hash="dingo-dave" className="font-medium text-ember underline">
            About
          </Link>
          .
        </p>
      </article>
    </Shell>
  );
}
