import { Link } from "@tanstack/react-router";
import { categoryById, subsectionById, type Stay } from "@/data/catalog";
import { useShortlist } from "@/lib/shortlist";

export function StayCard({ stay }: { stay: Stay }) {
  const category = categoryById(stay.category);
  const sub = subsectionById(stay.subsection);
  const { has, toggle } = useShortlist();
  const saved = has(stay.slug);

  const lead = stay.photos[0];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-card">
      <Link to="/stays/$slug" params={{ slug: stay.slug }} className="block">
        {lead ? (
          <img src={lead.src} alt={lead.alt} className="h-48 w-full object-cover" />
        ) : (
          <div className="flex h-48 items-end bg-ember-soft p-4 text-sm">AORA photo to come</div>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm text-muted">
            {category?.label} · {sub?.label}
          </p>
          <div className="text-right">
            <p className="font-display text-2xl tabular-nums leading-none text-ink">
              {stay.score.toFixed(1)}
            </p>
            <Link
              to="/about"
              hash="dingo-dave"
              className="mt-1 inline-flex min-h-11 items-center text-xs font-medium text-ember"
            >
              AORA score
            </Link>
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl leading-tight">
            <Link to="/stays/$slug" params={{ slug: stay.slug }} className="hover:text-ember">
              {stay.name}
            </Link>
          </h2>
          <p className="mt-1 text-sm text-muted">
            {stay.region} · {stay.state} · {stay.priceBand}
          </p>
        </div>
        <p className="text-sm text-ink">{stay.summary}</p>
        {lead ? (
          <p className="text-xs text-muted">
            Photo: {lead.credit}
            {lead.licence ? `, ${lead.licence}` : ""}
          </p>
        ) : null}
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <Link
            to="/stays/$slug"
            params={{ slug: stay.slug }}
            className="inline-flex min-h-11 items-center text-sm font-medium text-ember"
          >
            Read the review
          </Link>
          <button
            type="button"
            onClick={() => toggle(stay.slug)}
            className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium ${
              saved ? "bg-ember text-on-ember" : "border border-line bg-paper text-ink"
            }`}
            aria-pressed={saved}
          >
            {saved ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </article>
  );
}
