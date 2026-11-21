import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function DiaryShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <header className="bg-ink text-paper">
        <div className="h-1.5 bg-ember" aria-hidden="true" />
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
          <Link to="/diary" className="inline-flex min-h-11 items-center gap-3">
            <img src="/photos/dingo-mark.png?v=2" alt="" className="h-11 w-11 shrink-0" />
            <span className="flex flex-col justify-center">
              <span className="text-xs font-medium tracking-wide text-mist">Australian Offroad Academy</span>
              <span className="font-display text-xl font-semibold leading-none">Dingo’s Diary</span>
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex min-h-11 items-center text-sm font-medium text-paper underline decoration-ember underline-offset-4"
          >
            Stay ledger
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-16 border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>A notebook beside Fieldstay. Not a stay review, and not a course booking.</p>
          <a
            href="https://www.australianoffroadacademy.com.au/"
            className="font-medium text-ember underline underline-offset-4"
          >
            Australian Offroad Academy
          </a>
        </div>
      </footer>
    </div>
  );
}
