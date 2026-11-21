import { attributesByGroup, attributeById, filterStays, type SortKey } from "@/data/catalog";
import { StayCard } from "@/components/stay-card";

export type BrowserState = {
  q: string;
  category: string;
  subsection: string;
  attrs: string[];
  state: string;
  sort: SortKey;
};

export function Browser({
  value,
  onChange,
  lockCategory,
  subsections,
  showFilters = true,
}: {
  value: BrowserState;
  onChange: (next: BrowserState) => void;
  lockCategory?: boolean;
  subsections?: { id: string; label: string }[];
  showFilters?: boolean;
}) {
  const results = filterStays({
    q: value.q,
    category: value.category || undefined,
    subsection: value.subsection || undefined,
    attrs: value.attrs,
    state: value.state || undefined,
    sort: value.sort,
  });

  function toggleAttr(id: string) {
    const attrs = value.attrs.includes(id)
      ? value.attrs.filter((item) => item !== id)
      : [...value.attrs, id];
    onChange({ ...value, attrs });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
      {showFilters ? (
      <form
        className="flex flex-col gap-5"
        onSubmit={(event) => event.preventDefault()}
        aria-label="Filter stays"
      >
        <label className="flex flex-col gap-2 text-sm font-medium">
          Search
          <input
            value={value.q}
            onChange={(event) => onChange({ ...value, q: event.target.value })}
            placeholder="Pool, dog, Civic, billabong…"
            className="min-h-11 rounded-lg border border-line bg-card px-3 text-base font-normal text-ink"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium">
          State
          <select
            value={value.state}
            onChange={(event) => onChange({ ...value, state: event.target.value })}
            className="min-h-11 rounded-lg border border-line bg-card px-3 text-base font-normal"
          >
            <option value="">Anywhere reviewed</option>
            <option value="ACT">ACT</option>
            <option value="NSW">New South Wales</option>
            <option value="QLD">Queensland</option>
            <option value="VIC">Victoria</option>
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium">
          Sort
          <select
            value={value.sort}
            onChange={(event) =>
              onChange({ ...value, sort: event.target.value === "name" ? "name" : "score" })
            }
            className="min-h-11 rounded-lg border border-line bg-card px-3 text-base font-normal"
          >
            <option value="score">Highest score</option>
            <option value="name">Name</option>
          </select>
        </label>

        {subsections && subsections.length > 0 ? (
          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-medium">Subsection</legend>
            <div className="flex flex-wrap gap-2">
              <FilterChip
                pressed={value.subsection === ""}
                onClick={() => onChange({ ...value, subsection: "" })}
                label="All"
              />
              {subsections.map((sub) => (
                <FilterChip
                  key={sub.id}
                  pressed={value.subsection === sub.id}
                  onClick={() =>
                    onChange({
                      ...value,
                      subsection: value.subsection === sub.id ? "" : sub.id,
                    })
                  }
                  label={sub.label}
                />
              ))}
            </div>
          </fieldset>
        ) : null}

        {!lockCategory ? (
          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-medium">Category</legend>
            <div className="flex flex-wrap gap-2">
              {[
                ["", "All"],
                ["hotel", "Hotels"],
                ["resort", "Resorts"],
                ["camping", "Camping"],
                ["tourist-park", "Tourist parks"],
              ].map(([id, label]) => (
                <FilterChip
                  key={id || "all"}
                  pressed={value.category === id}
                  onClick={() => onChange({ ...value, category: id, subsection: "" })}
                  label={label}
                />
              ))}
            </div>
          </fieldset>
        ) : null}

        <div className="flex flex-col gap-4">
          {attributesByGroup().map((group) => (
            <fieldset key={group.group} className="flex flex-col gap-2">
              <legend className="text-sm font-medium">{group.group}</legend>
              <div className="flex flex-wrap gap-2">
                {group.items.map((attr) => (
                  <FilterChip
                    key={attr.id}
                    pressed={value.attrs.includes(attr.id)}
                    onClick={() => toggleAttr(attr.id)}
                    label={attr.label}
                  />
                ))}
              </div>
            </fieldset>
          ))}
        </div>

        {value.attrs.length > 0 ? (
          <button
            type="button"
            className="min-h-11 self-start text-sm font-medium text-ember"
            onClick={() => onChange({ ...value, attrs: [] })}
          >
            Clear attributes
          </button>
        ) : null}
      </form>
      ) : null}

      <div>
        <p className="mb-4 text-sm text-muted">
          <span className="tabular-nums text-ink">{results.length}</span>{" "}
          {results.length === 1 ? "stay" : "stays"}
          {value.attrs.length > 0
            ? ` with ${value.attrs.map((id) => attributeById(id)?.label ?? id).join(", ")}`
            : ""}
        </p>
        {results.length === 0 ? (
          <div className="rounded-lg border border-line bg-card p-6">
            <h2 className="font-display text-2xl">Nothing in the ledger matches.</h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              A few of these filters contradict each other — pet friendly and no pets, fires and no fires.
              Loosen one. This first edition reviews four places in full; empty subsections are briefs, not
              hidden stays.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {results.map((stay) => (
              <StayCard key={stay.slug} stay={stay} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterChip({
  pressed,
  onClick,
  label,
}: {
  pressed: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`inline-flex min-h-11 items-center rounded-full px-3 text-sm ${
        pressed ? "bg-ink text-paper" : "border border-line bg-card text-ink"
      }`}
    >
      {label}
    </button>
  );
}
