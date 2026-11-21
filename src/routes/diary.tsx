import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { DiaryShell } from "@/components/diary-shell";

export const Route = createFileRoute("/diary")({
  head: () => ({
    meta: [
      { title: "You don’t have to conquer it · Dingo’s Diary" },
      {
        name: "description",
        content:
          "How Dingo Dave teaches four-wheel driving: read the country, take the fear out, and come home.",
      },
    ],
  }),
  component: DiaryPost,
});

const DAVE_PAGE = "https://www.australianoffroadacademy.com.au/about-dingo-dave";
const ABOUT_PAGE = "https://www.australianoffroadacademy.com.au/about-us";
const COURSES_PAGE = "https://www.australianoffroadacademy.com.au/offroad-ready-courses";

const SECTIONS = [
  { id: "the-lesson", label: "The lesson" },
  { id: "respect-the-country", label: "Respect the country" },
  { id: "read-the-country", label: "Read the country" },
  { id: "confidence", label: "Confidence" },
  { id: "unglamorous", label: "The unglamorous work" },
  { id: "what-a-teacher-is-for", label: "What a teacher is for" },
  { id: "the-mark", label: "The mark" },
  { id: "notes", label: "Notes" },
];

const NOTES = [
  {
    label: "Australian Offroad Academy, About",
    href: "https://www.australianoffroadacademy.com.au/about-us",
  },
  {
    label: "Offroad Ready courses",
    href: "https://www.australianoffroadacademy.com.au/offroad-ready-courses",
  },
  {
    label: "Dave Darmody, “Are you ready for a remote camping trip?”, RV Daily, 21 December 2022",
    href: "https://rvdaily.com.au/are-you-ready-for-a-remote-camping-trip/",
  },
  {
    label: "Dave Darmody, “Do you really need to pack that?”, RV Daily",
    href: "https://rvdaily.com.au/do-you-really-need-to-pack-that-beginners-tips-for-off-road-towing/",
  },
  {
    label: "Dave Darmody, “What goes on in female-only 4WD sessions?”, Unsealed 4X4, 17 April 2023",
    href: "https://unsealed4x4.com.au/what-goes-on-in-female-only-4wd-sessions/",
  },
  {
    label: "Dave Darmody, “Must-do’s for your 4WD”, Unsealed 4X4, 13 February 2023",
    href: "https://unsealed4x4.com.au/must-dos-for-your-4wd/",
  },
  {
    label: "You Don’t Have to Conquer It, with Dave Darmody, Jamie Hazelden and Rick O’Brien, 16 August 2026",
    href: "https://www.youtube.com/watch?v=hl2ei3XvwJQ",
  },
  {
    label: "Dingo Dave, directory",
    href: "https://dingo-dave.com.au/",
  },
];

function DiaryPost() {
  return (
    <DiaryShell>
      <article className="mx-auto max-w-6xl px-4 py-10 lg:py-16">
        <div className="lg:grid lg:grid-cols-[13rem_minmax(0,40rem)] lg:gap-16">
          <nav aria-label="In this essay" className="mb-8 min-w-0 lg:mb-0">
            <p className="hidden text-xs font-medium tracking-wide text-muted lg:block">In this essay</p>
            <ol className="flex gap-2 overflow-x-auto pb-1 lg:sticky lg:top-8 lg:mt-3 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
              {SECTIONS.map((section, index) => (
                <li key={section.id} className="shrink-0">
                  <a
                    href={`#${section.id}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 text-sm lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:text-muted lg:hover:text-ember"
                  >
                    <span className="mr-2 tabular-nums text-ember">{index + 1}</span>
                    {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div>
            <p className="text-sm font-semibold tracking-wide text-ember">Teaching</p>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">You don’t have to conquer it</h1>
            <p className="mt-5 text-xl leading-relaxed text-muted">
              Dingo Dave teaches four-wheel driving as outdoor education. The trip is the point. The skill
              is what makes the trip possible. The country is not something you are supposed to beat.
            </p>
            <p className="mt-6 text-sm text-muted">
              A reading of Dave Darmody · Australian Offroad Academy
              <span className="mx-2 text-line">/</span>
              <time dateTime="2026-11-21">21 November 2026</time>
            </p>
            <EssayPhoto
              src="/photos/dingo-dave-briefing.jpg"
              alt="Dingo Dave in a cap and sunglasses, a radio on his chest, both hands up as he explains a point."
              caption="Dingo Dave, mid-briefing."
              href={DAVE_PAGE}
            />

            <section id="the-lesson" className="mt-12 scroll-mt-6">
              <h2 className="font-display text-3xl">The lesson</h2>
              <p className="mt-4 text-lg leading-relaxed">
                That line runs through the academy and through his own writing. The mission is skills enough
                that the driver and the vehicle can handle the terrain they actually chose — safely,
                securely, and with real joy. Adult education sits at the centre: engaging, interesting,
                entertaining, and safe, whether the day is a course or a tour.
              </p>
              <p className="mt-4 leading-relaxed">
                He describes himself as a qualified outdoor and environmental education teacher, and he has
                spent that career on real tracks. Owning a four-wheel drive is not the same as knowing how
                to use one. The low-range day exists to close that gap. Big adventures, as he still says it,
                start with the right skills.
              </p>
              <PullQuote>
                Safely, securely and with real joy. The academy’s own test of a day that worked.
              </PullQuote>
            </section>

            <section id="respect-the-country" className="mt-12 scroll-mt-6">
              <h2 className="font-display text-3xl">Respect the country</h2>
              <p className="mt-4 leading-relaxed">
                Low impact is not a line added at the end of a day. It is how the vehicle is driven. Stay
                in the track that is already there. Don’t widen it for a photograph. Don’t cut a corner
                because the ruts look deep. On sand, a chopped-up beach at the end of the holidays is what
                happens when every driver picks a new line. One wheel track, used again, marks the place
                less than a fresh scar beside it.
              </p>
              <EssayPhoto
                src="/photos/aora-dune.jpg"
                alt="A four-wheel drive on a red sand dune, with earlier wheel tracks in the sand behind it."
                caption="The line that is already there. A new one beside it is the damage."
                href={ABOUT_PAGE}
              />
              <p className="mt-4 leading-relaxed">
                The camp is the same rule. A fire only where a fire is allowed, and in a place that already
                takes one. Rubbish that leaves with you. A creek you walk before you drive, and that you
                leave alone when the bank will not survive the climb out. Sustainable, in this teaching, is
                not a softer trip. It is the trip the country can still offer next season. On K’gari that
                includes a World Heritage coast, and the dingoes, as country you do not get to damage.
              </p>
              <p className="mt-4 leading-relaxed">
                Access is the part that disappears quietly. Beaches, tracks and camps stay open while the
                people who manage them still trust the next convoy. A wrecked dune, a toilet in the bush, a
                vehicle through a closure: that is how a gate goes up. The habit has to travel further than
                the drivers who already have it. A family who heard it said plainly, a passenger who was
                not mocked for asking, a notebook that does not treat the country as something to beat.
                People who come back are the ones who look after the place. People who were never taught
                will not. Spreading that message is part of keeping the gate open.
              </p>
            </section>

            <section id="read-the-country" className="mt-12 scroll-mt-6">
              <h2 className="font-display text-3xl">Read the country</h2>
              <p className="mt-4 leading-relaxed">
                The practical version is simple, and it is stricter than a tip sheet. You read the track
                before you drive it. You set the vehicle up for that surface. You climb and descend
                properly. A water crossing includes knowing when not to attempt it. Recovery is for the bog
                you are actually likely to meet. Minimum-impact driving sits on that same list, for the
                reason just given.
              </p>
              <EssayPhoto
                src="/photos/aora-crossing.jpg"
                alt="A four-wheel drive and camper trailer part-way through a shallow, clear creek."
                caption="A crossing. The lesson includes the ones you do not attempt."
                href={ABOUT_PAGE}
              />
              <p className="mt-4 leading-relaxed">
                Sand is the same idea on a different surface. In Dingo’s Diary he refuses a single magic
                tyre pressure. Rain-hardened sand and a chopped-up K’gari beach at the end of the holidays
                are not the same number. The tide comes before the beach. Once the tyres are down, the
                driving has to change: slower, no hard braking, no sharp turns, or a bead comes off the
                rim. The lesson is not “let them down.” It is that the sand you have today decides the rest.
              </p>
              <EssayPhoto
                src="/photos/dingo-dave-sand.jpg"
                alt="Dingo Dave on a pale beach in an Offroad Ready shirt, a camera crew and paperbarks behind him."
                caption="On the sand, with the camera still rolling."
                href={DAVE_PAGE}
              />
              <p className="mt-4 leading-relaxed">
                Planning gets the same treatment. Do not bite off a day’s distance that pushes you into the
                night, among animals, short of fuel. Carry the extra fuel. Carry two spares and a plug kit.
                Half a holiday in a remote town waiting for a tyre to be flown in is not the fun.
              </p>
              <PullQuote>
                You don’t have to conquer an environment to enjoy it. You do not have to cross the Simpson
                to have been in the desert.
              </PullQuote>
              <p className="mt-4 leading-relaxed">
                He said the first of those sentences in 2026, in a conversation with Jamie Hazelden and Rick
                O’Brien. Conquest is the habit he is pushing back on. Fifteen dunes in can be the whole
                experience. The Cape is not a trophy you fail by not finishing.
              </p>
            </section>

            <section id="confidence" className="mt-12 scroll-mt-6">
              <h2 className="font-display text-3xl">Confidence is taught</h2>
              <p className="mt-4 leading-relaxed">
                Fear is the thing to take out, not the thing to mock. On K’gari he has described the job as
                taking the fear out of beach driving while still treating a World Heritage coast, dingoes
                included, as country you do not get to damage.
              </p>
              <p className="mt-4 leading-relaxed">
                He is careful about whose confidence is in the car. The driver’s confidence does not
                transfer to a partner, a mate, or a child. Start them on something they can finish. A
                shower, a decent chair and a fire are not softness. They are why people come back, and
                people who come back are the ones who will look after the place. Getting children outside
                is, in his diary, part of keeping the country open.
              </p>
              <p className="mt-4 leading-relaxed">
                The same idea shows up in the women-only days. A lot of the people he wants in the driver’s
                seat have been permanent passengers, or they would rather learn from someone who is not
                their partner. Girls Got Grit, built with Tourism Queensland, was a structured weekend:
                learn the vehicle, drive the island or the country, get dirty, and still enjoy the place.
                His test of a good day is that the ego and the self-doubt both drop, no question is silly,
                and the trainer is there for the skill — not to lead a convoy that happens to have a swag
                on the roof.
              </p>
            </section>

            <section id="unglamorous" className="mt-12 scroll-mt-6">
              <h2 className="font-display text-3xl">The unglamorous work</h2>
              <p className="mt-4 leading-relaxed">
                He is impatient with the catalogue. “Off-road”, “extreme” and “tactical” are marketing
                words. A long drawbar does not make a trailer more capable. Packing the house into the
                camper does not make the trip better. Comfortable chairs and a warm bag, yes. An extra of
                everything, no. The further you actually want to go, the more compact the trailer needs to
                be.
              </p>
              <p className="mt-4 leading-relaxed">
                The must-dos he writes down are the dull ones: rustproofing, a proper cargo barrier, tyres
                that match the load, and reading the insurance wording to see whether “off-road” is actually
                covered. Before a remote trip he wants a shakedown close to home, so a bolt that walks out
                does it on a weekend, not on day nine.
              </p>
              <PullQuote>Remote is a state of mind, not a place.</PullQuote>
              <p className="mt-4 leading-relaxed">
                That is from his 2022 note on remote camping. Distance from the nearest people, not a badge
                for how far you drove. You do not need to be in the middle of the desert to feel a long way
                from the crowd. A plan is a starting set of ideas. A torn sidewall, or a better camp
                mentioned at a roadhouse, should be allowed to change it. Someone at home still needs to
                know when you were meant to call. A personal locator beacon is the simple version of that
                promise. Lithium, purple lights and a complicated camp are optional. A torch and a burner
                that you have already tested are not.
              </p>
              <p className="mt-4 leading-relaxed">
                Recovery is taught by doing it. At Rainbow Beach in 2025 he had a crew bog a vehicle on
                purpose. A practised recovery is the point. A surprise one is how people get hurt. Winch,
                dampener, recovery points, convoy radio, the check before you start. Theory, then the sand.
              </p>
              <EssayPhoto
                src="/photos/aora-recovery.jpg"
                alt="A person kneeling at the front of a Toyota, fitting orange recovery boards in the mud."
                caption="Recovery boards out, on a course day."
                href={COURSES_PAGE}
              />
            </section>

            <section id="what-a-teacher-is-for" className="mt-12 scroll-mt-6">
              <h2 className="font-display text-3xl">What a teacher is for</h2>
              <p className="mt-4 leading-relaxed">
                Share the mistake you have already made, so the next driver does not have to make it in the
                same creek. Say it plainly enough that a family can use it: in a diary, on the Offroad
                Adventure Show, or on a show lawn talking about how to prepare for the outback. Then get
                them home.
              </p>
              <EssayPhoto
                src="/photos/dingo-dave-crew.jpg"
                alt="Dingo Dave, seen from behind in a cap, briefing a crew in high-visibility orange beside a four-wheel drive."
                caption="The briefing beside the vehicles. The sleeve reads the academy site."
                href={DAVE_PAGE}
              />
              <p className="mt-4 leading-relaxed">
                The trainers around him are described the same way he teaches: experienced, nationally
                accredited, approachable in a group or one to one. The four-wheel drive, in the academy’s
                own words, is how families get to the trip. Fieldstay scores a bed by that standard. This
                notebook is the reason the number starts with the road, not with a booking-site star.
              </p>
              <p className="mt-6 text-sm">
                <Link to="/about" hash="dingo-dave" className="font-medium text-ember underline">
                  Dingo Dave, on the stay ledger
                </Link>
                <span className="mx-2 text-line">/</span>
                <Link to="/" className="font-medium text-ember underline">
                  The reviews
                </Link>
              </p>
            </section>

            <section id="the-mark" className="mt-12 scroll-mt-6">
              <h2 className="font-display text-3xl">The mark</h2>
              <p className="mt-4 leading-relaxed">
                The directory uses two stamps, and they are not the same name. Dingo Dave Approved.
                Dingo Dave Recommends. Under them sit the places a trip actually uses: campgrounds and
                free camps, hotels, motels and bed and breakfasts, caravan parks, national parks, state
                forests. The film is the stamp coming down. The patch is the same name, sewn — a vehicle,
                a winch, a fire, the tools.
              </p>
              <figure className="mt-6">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/photos/dingo-approved-poster.jpg"
                  className="w-full rounded-lg border border-line bg-card"
                >
                  <source src="/media/dingo-approved.mp4" type="video/mp4" />
                </video>
                <figcaption className="mt-2 text-sm text-muted">
                  Dingo Approved. Six seconds.
                </figcaption>
              </figure>
              <figure className="mx-auto mt-8 w-full max-w-64">
                <img
                  src="/photos/dingo-dave-patch.png?v=3"
                  alt="An embroidered shield patch: a pink dingo, a four-wheel drive, a winch, a campfire and crossed tools, lettered Dingo Dave."
                  className="w-full"
                />
                <figcaption className="mt-2 text-sm text-muted">
                  The sewn mark.{" "}
                  <a
                    href="https://dingo-dave.com.au/"
                    className="font-medium text-ink underline decoration-line underline-offset-4"
                  >
                    Dingo Dave
                  </a>
                </figcaption>
              </figure>
              <p className="mt-4 leading-relaxed">
                The site states the work in three lines: educate, share the trips, and celebrate the ones
                other people bring back. Fieldstay still scores a stay from a road trip. This stamp is
                his, and it is a different mark.
              </p>
            </section>

            <section id="notes" className="mt-14 scroll-mt-6 border-t border-line pt-8">
              <h2 className="font-display text-3xl">Notes</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Drawn from his published writing and from the academy’s own account of how a day is taught.
                Not a transcript of a private conversation, and not a course outline.
              </p>
              <ol className="mt-4 flex flex-col gap-3 text-sm">
                {NOTES.map((note, index) => (
                  <li key={note.href} className="flex gap-3">
                    <span className="tabular-nums text-ember">{index + 1}</span>
                    <a href={note.href} className="text-ink underline decoration-line underline-offset-4">
                      {note.label}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </article>
    </DiaryShell>
  );
}

function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-8 border-l-4 border-ember pl-5">
      <p className="font-display text-xl leading-snug sm:text-2xl">{children}</p>
    </blockquote>
  );
}

function EssayPhoto({
  src,
  alt,
  caption,
  href,
}: {
  src: string;
  alt: string;
  caption: string;
  href: string;
}) {
  return (
    <figure className="my-8">
      <img src={src} alt={alt} className="w-full rounded-lg border border-line" />
      <figcaption className="mt-2 text-sm leading-relaxed text-muted">
        {caption}{" "}
        <a href={href} className="font-medium text-ink underline decoration-line underline-offset-4">
          Photo: Australian Offroad Academy
        </a>
      </figcaption>
    </figure>
  );
}
