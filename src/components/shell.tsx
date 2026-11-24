import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { CATEGORIES } from "@/data/catalog";
import { useShortlist } from "@/lib/shortlist";

const NAV = [
  { to: "/explore", label: "Browse" },
  { to: "/map", label: "Map" },
  { to: "/about", label: "About" },
  ...CATEGORIES.map((category) => ({
    to: `/categories/${category.id}`,
    label: category.label,
  })),
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const { slugs } = useShortlist();

  return (
    <div className="min-h-screen overflow-x-clip">
      <header className="border-b border-line bg-card">
        <div className="flex h-1.5" aria-hidden="true">
          <div className="h-full w-2/5 bg-ink" />
          <div className="h-full flex-1 bg-ember" />
        </div>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex min-h-11 items-center gap-3">
            <img
              src="/aora-mark.png"
              alt="Australian Offroad Academy"
              className="h-11 w-auto sm:hidden"
            />
            <img
              src="/aora-logo.png"
              alt="Australian Offroad Academy"
              className="hidden h-11 w-auto sm:block"
            />
            <span className="border-l border-line pl-3">
              <span className="block font-display text-lg font-semibold leading-none tracking-tight text-ink">
                Fieldstay
              </span>
              <span className="mt-1 block text-xs font-medium tracking-wide text-muted">Stay ledger</span>
            </span>
          </Link>
          <Link
            to="/shortlist"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-card px-4 text-sm font-medium text-ink"
          >
            Shortlist
            <span className="tabular-nums text-ember">{slugs.length}</span>
          </Link>
        </div>
        <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-3">
          {NAV.map((item) => {
            const active = path === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`inline-flex min-h-11 shrink-0 items-center rounded-full px-4 text-sm font-medium ${
                  active ? "bg-ink text-paper" : "bg-paper text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="mt-16 bg-ink text-mist">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-3xl">
            <p className="font-display text-base font-semibold text-paper">Fieldstay</p>
            <p className="mt-2">
              The Australian Offroad Academy stay ledger. Scores lead with personal experience from{" "}
              <Link
                to="/about"
                hash="dingo-dave"
                className="font-medium text-paper underline decoration-ember underline-offset-4"
              >
                Dingo Dave
              </Link>{" "}
              and{" "}
              <Link
                to="/about"
                hash="australian-offroad-academy"
                className="font-medium text-paper underline decoration-ember underline-offset-4"
              >
                AORA
              </Link>{" "}
              travel and road trips. Public listings and guest write-ups sit under “Additional details
              from” on each review. They do not set the number. Facilities, fees and rules change — confirm
              pets, generators, fires and turtle-light curfews before you book. Photographs are real and
              credited.
            </p>
          </div>
          <p className="shrink-0">
            <a
              href="https://www.australianoffroadacademy.com.au/"
              className="font-medium text-paper underline decoration-ember underline-offset-4"
            >
              Australian Offroad Academy
            </a>
            <span className="mt-1 block">Checked November 2026</span>
            <Link
              to="/diary"
              className="mt-3 inline-flex min-h-11 items-center font-medium text-paper underline decoration-ember underline-offset-4"
            >
              Dingo’s Diary
            </Link>
            <Link
              to="/on-air"
              className="mt-1 inline-flex min-h-11 items-center font-medium text-paper underline decoration-ember underline-offset-4"
            >
              On air
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
