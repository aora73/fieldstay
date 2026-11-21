import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { StayCard } from "@/components/stay-card";
import { ATTRIBUTES, CATEGORIES, STAYS } from "@/data/catalog";

export const Route = createFileRoute("/")({ component: Home });

const SHORTCUTS = ["pets", "pool", "beach", "campfire", "kitchen", "kids", "no-pets", "powered", "unpowered"];

function Home() {
  return (
    <Shell>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1.3fr_0.7fr] lg:py-16">
        <div>
          <p className="text-sm font-semibold tracking-wide text-ember">
            <Link to="/about" hash="australian-offroad-academy">
              Australian Offroad Academy
            </Link>
          </p>
          <h1 className="mt-3 max-w-xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Sleep somewhere worth the drive.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Fieldstay is the AORA ledger of Australian stays. Browse by the kind of roof, or by the detail
            that actually decides it — a dog, a fire, a kitchen, a powered site, a beach over the dune.
          </p>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Scores are set by{" "}
            <Link to="/about" hash="dingo-dave" className="font-medium text-ember underline">
              Dingo Dave
            </Link>{" "}
            for the{" "}
            <Link to="/about" hash="australian-offroad-academy" className="font-medium text-ember underline">
              academy
            </Link>
            . How he teaches is a separate notebook,{" "}
            <Link to="/diary" className="font-medium text-ember underline">
              Dingo’s Diary
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/explore"
              search={emptySearch()}
              className="inline-flex min-h-11 items-center rounded-full bg-ember px-5 text-sm font-medium text-on-ember"
            >
              Browse the ledger
            </Link>
            <Link
              to="/map"
              search={{ cats: "", stay: "" }}
              className="inline-flex min-h-11 items-center rounded-full border border-line bg-card px-5 text-sm font-medium"
            >
              Open the map
            </Link>
          </div>
          <figure className="mt-8 max-w-xl">
            <img
              src="/photos/aora-beach-line.jpg"
              alt="A line of four-wheel drives on a wide beach, the lead Toyota facing the camera."
              className="aspect-[3/2] w-full rounded-lg border border-line object-cover"
            />
            <figcaption className="mt-2 text-sm text-muted">
              Academy vehicles on the sand.{" "}
              <a
                href="https://www.australianoffroadacademy.com.au/about-us"
                className="font-medium text-ink underline decoration-line underline-offset-4"
              >
                Photo: Australian Offroad Academy
              </a>
            </figcaption>
          </figure>
        </div>
        <aside className="rounded-lg border border-line bg-card p-5">
          <h2 className="font-display text-2xl">If you are choosing between these four</h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <Choice stay="meriton-suites-canberra" label="Kitchen and a rooftop pool in Civic" />
            <Choice stay="oaks-caloundra" label="Children contained for three days in Caloundra" />
            <Choice stay="gootchie-creek" label="Fire, a dog, a billabong, no power" />
            <Choice stay="turtle-sands" label="Turtles, sand, and either a villa or a powered site" />
          </ul>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-3xl">By category</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {CATEGORIES.map((category) => {
            const count = STAYS.filter((stay) => stay.category === category.id).length;
            return (
              <Link
                key={category.id}
                to="/categories/$category"
                params={{ category: category.id }}
                className="rounded-lg border border-line bg-card p-5 hover:border-ember"
              >
                <p className="text-sm text-muted">{count} full {count === 1 ? "review" : "reviews"}</p>
                <h3 className="mt-1 font-display text-3xl">{category.label}</h3>
                <p className="mt-2 text-sm text-muted">{category.blurb}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4">
        <h2 className="font-display text-3xl">By what you need</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Attributes stack. Pet friendly plus a campfire will not also return a city hotel.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {SHORTCUTS.map((id) => {
            const attr = ATTRIBUTES.find((item) => item.id === id);
            if (!attr) return null;
            return (
              <Link
                key={id}
                to="/explore"
                search={{ ...emptySearch(), attrs: id }}
                className="inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 text-sm"
              >
                {attr.label}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4">
        <h2 className="font-display text-3xl">The reviews</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {STAYS.map((stay) => (
            <StayCard key={stay.slug} stay={stay} />
          ))}
        </div>
      </section>
    </Shell>
  );
}

function Choice({ stay, label }: { stay: string; label: string }) {
  return (
    <li>
      <Link to="/stays/$slug" params={{ slug: stay }} className="block rounded-lg bg-paper px-3 py-3 hover:text-ember">
        <span className="block font-medium text-ink">{label}</span>
      </Link>
    </li>
  );
}

export function emptySearch() {
  return {
    q: "",
    category: "",
    subsection: "",
    attrs: "",
    state: "",
    sort: "score" as const,
  };
}
