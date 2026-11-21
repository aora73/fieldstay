import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Browser, type BrowserState } from "@/components/browser";
import { Shell } from "@/components/shell";
import { categoryById, subsectionsFor, type CategoryId } from "@/data/catalog";

export const Route = createFileRoute("/categories/$category")({
  component: CategoryPage,
});

function CategoryPage() {
  const { category: categoryId } = Route.useParams();
  const category = categoryById(categoryId);
  const [value, setValue] = useState<BrowserState>({
    q: "",
    category: categoryId,
    subsection: "",
    attrs: [],
    state: "",
    sort: "score",
  });

  if (!category) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="font-display text-4xl">That category is not in the ledger.</h1>
          <Link to="/" className="mt-4 inline-flex min-h-11 items-center text-ember">
            Back home
          </Link>
        </div>
      </Shell>
    );
  }

  const subs = subsectionsFor(category.id as CategoryId).map((sub) => ({
    id: sub.id,
    label: sub.label,
  }));
  const active = value.category === category.id ? value : { ...value, category: category.id, subsection: "" };

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-sm font-medium text-ember">Category</p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">{category.label}</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">{category.essay}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {subsectionsFor(category.id as CategoryId).map((sub) => (
            <button
              key={sub.id}
              type="button"
              onClick={() =>
                setValue((current) => ({
                  ...current,
                  category: category.id,
                  subsection: current.subsection === sub.id ? "" : sub.id,
                }))
              }
              className={`rounded-lg border p-4 text-left ${
                active.subsection === sub.id ? "border-ember bg-ember-soft" : "border-line bg-card"
              }`}
            >
              <h2 className="font-display text-2xl">{sub.label}</h2>
              <p className="mt-1 text-sm text-muted">{sub.blurb}</p>
            </button>
          ))}
        </div>
        <div className="mt-10">
          <Browser
            value={active}
            lockCategory
            subsections={subs}
            onChange={(next) => setValue({ ...next, category: category.id })}
          />
        </div>
      </div>
    </Shell>
  );
}
