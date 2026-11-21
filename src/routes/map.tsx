import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Shell } from "@/components/shell";
import { categoryColor, StayMap } from "@/components/stay-map";
import { CATEGORIES, STAYS, type CategoryId } from "@/data/catalog";

type MapSearch = {
  cats: string;
  stay: string;
};

const CATEGORY_IDS = new Set<string>(CATEGORIES.map((category) => category.id));

export const Route = createFileRoute("/map")({
  validateSearch: (search: Record<string, unknown>): MapSearch => ({
    cats: typeof search.cats === "string" ? search.cats : "",
    stay: typeof search.stay === "string" ? search.stay : "",
  }),
  component: MapPage,
});

function selectedCategories(cats: string): Set<CategoryId> {
  if (!cats) return new Set(CATEGORIES.map((category) => category.id));
  if (cats === "none") return new Set();
  const ids = cats.split(",").filter((id): id is CategoryId => CATEGORY_IDS.has(id));
  return new Set(ids);
}

function MapPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/map" });
  const [focusTick, setFocusTick] = useState(0);
  const selected = selectedCategories(search.cats);
  const visible = STAYS.filter((stay) => selected.has(stay.category));
  const focus = visible.find((stay) => stay.slug === search.stay) ?? null;

  function write(next: Set<CategoryId>, stay: string) {
    const all = next.size === CATEGORIES.length;
    navigate({
      search: {
        cats: all ? "" : next.size === 0 ? "none" : [...next].join(","),
        stay,
      },
    });
  }

  function toggle(id: CategoryId) {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    const stayStillShown = STAYS.some((stay) => stay.slug === search.stay && next.has(stay.category));
    write(next, stayStillShown ? search.stay : "");
  }

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-sm font-medium tracking-wide text-ember">Places, not a sketch</p>
        <h1 className="mt-2 font-display text-4xl leading-tight sm:text-5xl">Map</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Drag to move, pinch or use the controls to zoom. Turn categories on or off — one, or several.
          Pins sit on the published coordinates for each stay.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {CATEGORIES.map((category) => {
            const on = selected.has(category.id);
            const count = STAYS.filter((stay) => stay.category === category.id).length;
            return (
              <button
                key={category.id}
                type="button"
                role="switch"
                aria-checked={on}
                onClick={() => toggle(category.id)}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-3 text-sm font-medium ${
                  on ? "border-ink bg-card text-ink" : "border-line bg-paper text-muted"
                }`}
              >
                <span
                  className={`relative h-6 w-11 shrink-0 rounded-full ${on ? "" : "bg-line"}`}
                  style={on ? { background: categoryColor(category.id) } : undefined}
                >
                  <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-card shadow ${
                      on ? "left-5" : "left-0.5"
                    }`}
                  />
                </span>
                {category.label}
                <span className="tabular-nums">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-5">
          <StayMap stays={visible} focusSlug={focus?.slug ?? ""} focusTick={focusTick} />
        </div>
        <p className="mt-2 text-xs text-muted">
          Basemap is the Geoscience Australia National Base Map. Gootchie Creek is a 600-acre property; the
          pin is the published camp point, not every site. On a phone the names sit in the list under the
          map, so the coast stays readable.
        </p>

        <ul className="mt-6 flex flex-col gap-2">
          {visible.length === 0 ? (
            <li className="rounded-lg border border-line bg-card px-4 py-4 text-sm text-muted">
              No categories are on. Switch at least one back on to see a stay.
            </li>
          ) : (
            visible.map((stay) => (
              <li key={stay.slug}>
                <div
                  className={`flex flex-wrap items-center justify-between gap-3 rounded-lg border px-4 py-3 ${
                    stay.slug === search.stay ? "border-ember bg-ember-soft" : "border-line bg-card"
                  }`}
                >
                  <div>
                    <p className="font-medium">{stay.name}</p>
                    <p className="text-sm text-muted">
                      {CATEGORIES.find((category) => category.id === stay.category)?.label} ·{" "}
                      {formatCoord(stay.lat, stay.lng)}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        write(selected, stay.slug);
                        setFocusTick((tick) => tick + 1);
                      }}
                      className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-paper"
                    >
                      Centre
                    </button>
                    <Link
                      to="/stays/$slug"
                      params={{ slug: stay.slug }}
                      className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-medium"
                    >
                      Review
                    </Link>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </Shell>
  );
}

function formatCoord(lat: number, lng: number) {
  const latHem = lat < 0 ? "S" : "N";
  const lngHem = lng < 0 ? "W" : "E";
  return `${Math.abs(lat).toFixed(5)}° ${latHem}, ${Math.abs(lng).toFixed(5)}° ${lngHem}`;
}
