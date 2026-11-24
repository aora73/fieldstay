import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { attributeById, categoryById, STAYS, stayBySlug, subsectionById } from "@/data/catalog";
import { useShortlist } from "@/lib/shortlist";

export const Route = createFileRoute("/stays/$slug")({
  component: StayPage,
});

function StayPage() {
  const { slug } = Route.useParams();
  const stay = stayBySlug(slug);
  const { has, toggle } = useShortlist();

  if (!stay) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="font-display text-4xl">No review under that name.</h1>
          <Link
            to="/explore"
            search={{ q: "", category: "", subsection: "", attrs: "", state: "", sort: "score" }}
            className="mt-4 inline-flex min-h-11 items-center text-ember"
          >
            Browse the ledger
          </Link>
        </div>
      </Shell>
    );
  }

  const category = categoryById(stay.category);
  const sub = subsectionById(stay.subsection);
  const saved = has(stay.slug);
  const others = STAYS.filter((item) => item.slug !== stay.slug);

  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-4 py-8">
        <p className="text-sm text-muted">
          <Link to="/categories/$category" params={{ category: stay.category }} className="text-ember">
            {category?.label}
          </Link>
          {" · "}
          {sub?.label}
          {stay.also.length > 0
            ? ` · also ${stay.also
                .map((id) => subsectionById(id)?.label)
                .filter(Boolean)
                .join(", ")}`
            : ""}
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{stay.name}</h1>
        {stay.aka ? <p className="mt-2 text-lg text-muted">Also known as {stay.aka}</p> : null}
        <p className="mt-2 text-muted">{stay.address}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <p className="font-display text-4xl tabular-nums">{stay.score.toFixed(1)}</p>
          <p className="text-sm text-muted">
            <Link to="/about" hash="australian-offroad-academy" className="font-medium text-ember underline">
              AORA
            </Link>{" "}
            score out of 10 · set by{" "}
            <Link to="/about" hash="dingo-dave" className="font-medium text-ember underline">
              Dingo Dave
            </Link>{" "}
            · {stay.priceBand}
          </p>
          <button
            type="button"
            onClick={() => toggle(stay.slug)}
            aria-pressed={saved}
            className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium ${
              saved ? "bg-ember text-on-ember" : "border border-line bg-card"
            }`}
          >
            {saved ? "On the shortlist" : "Save to shortlist"}
          </button>
          <Link
            to="/map"
            search={{ cats: "", stay: stay.slug }}
            className="inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 text-sm font-medium"
          >
            Centre on the map
          </Link>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          {stay.photos.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} className="w-full rounded-lg object-cover" />
              <figcaption className="mt-2 text-xs text-muted">
                {photo.caption ? (
                  <span className="mb-1 block text-sm text-ink">{photo.caption}</span>
                ) : null}
                Photo:{" "}
                {photo.creditHref ? (
                  <a href={photo.creditHref} className="underline">
                    {photo.credit}
                  </a>
                ) : (
                  photo.credit
                )}
                {photo.licence ? (
                  <>
                    {" · "}
                    {photo.licenceHref ? (
                      <a href={photo.licenceHref} className="underline">
                        {photo.licence}
                      </a>
                    ) : (
                      photo.licence
                    )}
                  </>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>

        <blockquote className="mt-8 border-l-4 border-ember pl-4">
          <p className="font-display text-2xl leading-snug">{stay.verdict}</p>
        </blockquote>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-ember-soft p-4">
            <h2 className="text-sm font-medium">Book it if</h2>
            <p className="mt-1 text-sm">{stay.bestFor}</p>
          </div>
          <div className="rounded-lg border border-line bg-card p-4">
            <h2 className="text-sm font-medium">Leave it if</h2>
            <p className="mt-1 text-sm">{stay.skipIf}</p>
          </div>
        </div>

        <section className="mt-8">
          <h2 className="font-display text-2xl">How the score is reached</h2>
          <h3 className="mt-4 font-display text-xl">
            {stay.roadTested === false ? (
              "Not a road-trip night yet"
            ) : (
              <>
                Personal experience from{" "}
                <Link to="/about" hash="dingo-dave" className="text-ember underline">
                  Dingo Dave
                </Link>{" "}
                and{" "}
                <Link to="/about" hash="australian-offroad-academy" className="text-ember underline">
                  AORA
                </Link>{" "}
                travel and road trips
              </>
            )}
          </h3>
          <p className="mt-2 text-base leading-relaxed">{stay.aoraExperience}</p>
          <p className="mt-2 text-sm text-muted">
            {stay.roadTested === false
              ? "No academy crew has slept here yet. The paragraph above is that fact, and the number is a reading of what the operator publishes until a road trip rewrites it. It is not an average of scraped stars."
              : "This is the first criterion, for this stay and for every stay that follows. The number starts with how the place worked on an AORA road trip — the drive in, the sleep, and whether we would send another crew. It is not an average of scraped stars."}
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {stay.scores.map((row) => (
              <li key={row.label} className="grid grid-cols-[8rem_1fr_2.5rem] items-center gap-3 text-sm">
                <span>{row.label}</span>
                <span className="h-2 rounded-full bg-line">
                  <span
                    className="block h-2 rounded-full bg-ember"
                    style={{ width: `${row.value * 10}%` }}
                  />
                </span>
                <span className="tabular-nums text-right">{row.value.toFixed(1)}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 font-display text-xl">Additional details from</h3>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
            {stay.sources.map((source) => (
              <li key={source}>{source}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted">{stay.priceNote}</p>
        </section>

        {stay.sections.map((section) => (
          <section key={section.heading} className="mt-8">
            <h2 className="font-display text-3xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="mt-3 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        {stay.comparison ? (
          <section className="mt-10">
            <h2 className="font-display text-3xl">Side by side</h2>
            <div className="mt-4 overflow-x-auto rounded-lg border border-line">
              <table className="w-full min-w-[36rem] text-left text-sm">
                <thead className="bg-card">
                  <tr>
                    <th className="px-3 py-3 font-medium" />
                    {stay.comparison.columns.map((column) => (
                      <th key={column} className="px-3 py-3 font-medium">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {stay.comparison.rows.map((row) => (
                    <tr key={row.label} className="border-t border-line align-top">
                      <th className="px-3 py-3 font-medium text-muted">{row.label}</th>
                      {row.cells.map((cell, index) => (
                        <td key={`${row.label}-${index}`} className="px-3 py-3">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted">{stay.comparison.caption}</p>
          </section>
        ) : null}

        <section className="mt-10">
          <h2 className="font-display text-3xl">Practical</h2>
          <dl className="mt-4 divide-y divide-line border-y border-line">
            {stay.practical.map((row) => (
              <div key={row.label} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr]">
                <dt className="text-sm font-medium text-muted">{row.label}</dt>
                <dd className="text-sm">{row.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl">Worth it</h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {stay.pros.map((item) => (
                <li key={item} className="rounded-lg bg-card px-3 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl">The catches</h2>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {stay.cons.map((item) => (
                <li key={item} className="rounded-lg bg-card px-3 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-2xl">Searchable as</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {stay.attributes.map((id) => (
              <li key={id}>
                <Link
                  to="/explore"
                  search={{
                    q: "",
                    category: "",
                    subsection: "",
                    attrs: id,
                    state: "",
                    sort: "score",
                  }}
                  className="inline-flex min-h-11 items-center rounded-full border border-line bg-card px-3 text-sm"
                >
                  {attributeById(id)?.label ?? id}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl">The other three</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/stays/$slug"
                  params={{ slug: item.slug }}
                  className="flex min-h-11 items-center justify-between gap-3 rounded-lg border border-line bg-card px-4 py-3 text-sm"
                >
                  <span>{item.name}</span>
                  <span className="tabular-nums text-muted">{item.score.toFixed(1)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </Shell>
  );
}
