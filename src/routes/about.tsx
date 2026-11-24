import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const DAVE = [
  "Dave Darmody is Dingo Dave, founder, director and principal instructor of the Australian Offroad Academy. He has more than twenty years in outdoor and environmental education, and he still teaches on the ground: sand, dirt, and the moment a four-wheel drive stops behaving like a car.",
  "That time on the track is the lesson. On K'gari he has taught beach driving that takes the fear out of the sand, and treated a World Heritage coast, dingoes included, as country you do not get to damage. At Rainbow Beach he has put field crews through tyre pressures, recovery points, winching and convoy communication, and bogged a vehicle on purpose so the recovery is real. Low range, water, steep ground and remote planning are taught because he has driven them.",
  "He communicates the work as carefully as he teaches it. Dingo's Diary is his public notebook on sand, desert, steep country and trips where help is a long way off. He has been a long-term guest presenter on the Offroad Adventure Show. In 2026 he speaks at the National 4x4 Outdoors Show in Melbourne, on preparing for the outback and on adventures across Australia, and Drive Straya has named him a drive ambassador. Skill first, then the trip, in words someone else can use.",
  "He is also event director of the Dunga Derby, a charity event for families in need. On Fieldstay his road-trip notes are the first criterion of every score. Brochures and guest sites sit underneath. They do not set the number.",
];

const ACADEMY = [
  "The Australian Offroad Academy, AORA, trains people to drive offroad and then takes them there. It works with recreational drivers, families, corporate teams and government clients across Australia, and it describes itself as one of the country's leading offroad and touring educators. A course is not a scenic convoy. It is built so the driver and the vehicle can handle the country they chose, and come home.",
  "Accredited training is delivered with Health Security Education, registered training organisation 40907. The units run from a light vehicle and a four-wheel drive through recovery, a heavy vehicle on an unsealed road, quad bikes and side-by-sides. An instructors' program trains people who will teach the same work. Beside the qualifications are Offroad Ready days: low range, sand, desert, towing, touring and advanced recovery, without a formal assessment. Trucks, camper trailers and custom vehicles are taught when a set syllabus does not fit. Trainers are nationally accredited, experienced, and as ready one to one as they are with a group.",
  "The teaching continues on the road. Tours have taken groups to K'gari, Cape York, Birdsville, Stradbroke Island and the Mount Isa Rodeo. Adult education is the centre of the course and the tour: engaging, interesting, entertaining, and safe. The Knowledge Centre and Dingo's Diary publish those same lessons.",
  "Fieldstay is that habit. A score starts with how a place worked on an academy road trip: the drive in, the sleep, and whether another crew should be sent. Listings are additional detail. They do not move the mark.",
];

function AboutPage() {
  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-4 py-8">
        <p className="text-sm font-semibold tracking-wide text-ember">Fieldstay</p>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">About us</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          The number on a review is not an average of booking-site stars. It starts with a road trip. These
          are the two voices behind that number.
        </p>
        <p className="mt-6 text-sm">
          The longer reading, kept as its own notebook, is{" "}
          <Link to="/diary" className="font-medium text-ember underline">
            You don’t have to conquer it
          </Link>
          . Public mentions on the shows are indexed on{" "}
          <Link to="/on-air" className="font-medium text-ember underline">
            On air
          </Link>
          .
        </p>
        <nav className="mt-6 flex flex-wrap gap-2" aria-label="On this page">
          <a
            href="#dingo-dave"
            className="inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 text-sm font-medium"
          >
            Dingo Dave
          </a>
          <a
            href="#australian-offroad-academy"
            className="inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 text-sm font-medium"
          >
            Australian Offroad Academy
          </a>
        </nav>

        <section id="dingo-dave" className="mt-12 scroll-mt-6">
          <h2 className="font-display text-4xl">Dingo Dave</h2>
          <p className="mt-2 text-sm text-muted">
            Dave Darmody · Founder, director and principal instructor
          </p>
          <figure className="mt-5">
            <img
              src="/photos/dingo-dave-briefing.jpg"
              alt="Dingo Dave in a cap and sunglasses, a radio on his chest, both hands up as he explains a point."
              className="aspect-[3/4] w-full rounded-lg border border-line object-cover object-top sm:max-h-[32rem]"
            />
            <figcaption className="mt-2 text-sm text-muted">
              Dingo Dave, mid-briefing.{" "}
              <a
                href="https://www.australianoffroadacademy.com.au/about-dingo-dave"
                className="font-medium text-ink underline decoration-line underline-offset-4"
              >
                Photo: Australian Offroad Academy
              </a>
            </figcaption>
          </figure>
          {DAVE.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="mt-4 text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>

        <section id="australian-offroad-academy" className="mt-12 scroll-mt-6">
          <h2 className="font-display text-4xl">Australian Offroad Academy</h2>
          <p className="mt-2 text-sm text-muted">4x4 training, touring, and the reason a score exists</p>
          <figure className="mt-5">
            <img
              src="/photos/aora-dune.jpg"
              alt="A four-wheel drive on a red sand dune, tracks behind it, under a clear sky."
              className="aspect-[3/2] w-full rounded-lg border border-line object-cover"
            />
            <figcaption className="mt-2 text-sm text-muted">
              Sand, read before it is driven.{" "}
              <a
                href="https://www.australianoffroadacademy.com.au/about-us"
                className="font-medium text-ink underline decoration-line underline-offset-4"
              >
                Photo: Australian Offroad Academy
              </a>
            </figcaption>
          </figure>
          {ACADEMY.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="mt-4 text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
          <p className="mt-4 text-sm">
            <a
              href="https://www.australianoffroadacademy.com.au/about-us"
              className="font-medium text-ember underline"
            >
              The academy’s own about page
            </a>
            {" · "}
            <a
              href="https://www.australianoffroadacademy.com.au/knowledge-centre"
              className="font-medium text-ember underline"
            >
              Knowledge Centre
            </a>
          </p>
        </section>

        <p className="mt-12 text-sm leading-relaxed text-muted">
          Written from the academy’s about page, course list and Knowledge Centre; the National 4x4 Outdoors
          Show Melbourne 2026 speaker note on Dave Darmody; Drive Straya’s 2026 ambassador announcement; a
          2015 account of his K’gari instruction; and Burnett Mary Regional Group’s May 2025 note on his
          Rainbow Beach training. Checked November 2026.
        </p>
      </article>
    </Shell>
  );
}
