import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Browser, type BrowserState } from "@/components/browser";
import { Shell } from "@/components/shell";

type ExploreSearch = {
  q: string;
  category: string;
  subsection: string;
  attrs: string;
  state: string;
  sort: "score" | "name";
};

export const Route = createFileRoute("/explore")({
  validateSearch: (search: Record<string, unknown>): ExploreSearch => ({
    q: typeof search.q === "string" ? search.q : "",
    category: typeof search.category === "string" ? search.category : "",
    subsection: typeof search.subsection === "string" ? search.subsection : "",
    attrs: typeof search.attrs === "string" ? search.attrs : "",
    state: typeof search.state === "string" ? search.state : "",
    sort: search.sort === "name" ? "name" : "score",
  }),
  component: ExplorePage,
});

function ExplorePage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/explore" });
  const [openFilters, setOpenFilters] = useState(true);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    setOpenFilters(wide);
  }, []);

  const value: BrowserState = {
    q: search.q,
    category: search.category,
    subsection: search.subsection,
    attrs: search.attrs ? search.attrs.split(",").filter(Boolean) : [],
    state: search.state,
    sort: search.sort,
  };

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="font-display text-4xl">Browse</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Filter the ledger by category, state, and the attributes that travel with you. Every chip is a hard
          requirement — a stay must have all of them.
        </p>
        <button
          type="button"
          className="mt-4 inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 text-sm lg:hidden"
          onClick={() => setOpenFilters((current) => !current)}
          aria-expanded={openFilters}
        >
          {openFilters ? "Hide filters" : "Show filters"}
        </button>
        <div className="mt-6">
          <Browser
            showFilters={openFilters}
            value={value}
            onChange={(next) => {
              void navigate({
                search: {
                  q: next.q,
                  category: next.category,
                  subsection: next.subsection,
                  attrs: next.attrs.join(","),
                  state: next.state,
                  sort: next.sort,
                },
              });
            }}
          />
        </div>
      </div>
    </Shell>
  );
}
