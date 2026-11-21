import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { STAYS, stayBySlug } from "@/data/catalog";
import { useShortlist } from "@/lib/shortlist";

export const Route = createFileRoute("/shortlist")({
  component: ShortlistPage,
});

const ROWS = [
  { label: "Score", value: (slug: string) => stayBySlug(slug)?.score.toFixed(1) ?? "—" },
  { label: "Where", value: (slug: string) => stayBySlug(slug)?.region ?? "—" },
  { label: "Kind", value: (slug: string) => stayBySlug(slug)?.category ?? "—" },
  { label: "Price band", value: (slug: string) => stayBySlug(slug)?.priceBand ?? "—" },
  { label: "Best for", value: (slug: string) => stayBySlug(slug)?.bestFor ?? "—" },
  { label: "Leave it if", value: (slug: string) => stayBySlug(slug)?.skipIf ?? "—" },
];

function ShortlistPage() {
  const { slugs, toggle, clear, ready } = useShortlist();
  const stays = slugs.map((slug) => stayBySlug(slug)).filter((stay) => stay !== undefined);

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-display text-4xl">Shortlist</h1>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Saved on this device. Two or more stays open a side-by-side read so the decision is about the
              trip, not the brochure.
            </p>
          </div>
          {stays.length > 0 ? (
            <button type="button" onClick={clear} className="min-h-11 text-sm font-medium text-ember">
              Clear shortlist
            </button>
          ) : null}
        </div>

        {!ready ? <p className="mt-8 text-sm text-muted">Opening your shortlist…</p> : null}

        {ready && stays.length === 0 ? (
          <div className="mt-8 rounded-lg border border-line bg-card p-6">
            <h2 className="font-display text-2xl">Nothing saved yet.</h2>
            <p className="mt-2 text-sm text-muted">
              Open a review and save it, or start from the four stays already in the ledger.
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {STAYS.map((stay) => (
                <li key={stay.slug}>
                  <Link
                    to="/stays/$slug"
                    params={{ slug: stay.slug }}
                    className="inline-flex min-h-11 items-center text-ember"
                  >
                    {stay.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {stays.length > 0 ? (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {stays.map((stay) => (
              <li key={stay.slug} className="rounded-lg border border-line bg-card p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-2xl">
                      <Link to="/stays/$slug" params={{ slug: stay.slug }}>
                        {stay.name}
                      </Link>
                    </h2>
                    <p className="text-sm text-muted">{stay.region}</p>
                  </div>
                  <Link
                    to="/about"
                    hash="dingo-dave"
                    aria-label={`AORA score ${stay.score.toFixed(1)}. Read Dingo Dave.`}
                    className="font-display text-2xl tabular-nums hover:text-ember"
                  >
                    {stay.score.toFixed(1)}
                  </Link>
                </div>
                <button
                  type="button"
                  onClick={() => toggle(stay.slug)}
                  className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-ember"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : null}

        {stays.length >= 2 ? (
          <div className="mt-10 overflow-x-auto">
            <h2 className="font-display text-3xl">Side by side</h2>
            <table className="mt-4 w-full min-w-[40rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="py-3 pr-4 font-medium text-muted"> </th>
                  {stays.map((stay) => (
                    <th key={stay.slug} className="py-3 pr-4 font-display text-xl font-medium text-ink">
                      {stay.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-line align-top">
                    <th className="py-3 pr-4 font-medium text-muted">{row.label}</th>
                    {stays.map((stay) => (
                      <td key={stay.slug} className="py-3 pr-4">
                        {row.label === "Score" ? (
                          <Link to="/about" hash="dingo-dave" className="text-ember underline">
                            {row.value(stay.slug)}
                          </Link>
                        ) : (
                          row.value(stay.slug)
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </Shell>
  );
}
