import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";

export const Route = createFileRoute("/numbers")({
  head: () => ({
    meta: [{ title: "How a score is made · Fieldstay" }],
  }),
  component: NumbersPage,
});

function NumbersPage() {
  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-4 py-8">
        <p className="text-sm">
          <Link to="/" className="font-medium text-ember underline">
            Back to the ledger
          </Link>
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight">How a score is made</h1>
        <div className="mt-6 grid gap-4 text-base leading-relaxed">
          <p>
            The Australian Offroad Academy stay ledger. Scores lead with personal experience from Dingo Dave
            and AORA travel and road trips. Public listings and guest write-ups sit under “Additional
            details from” on each review. They do not set the number. Facilities, fees and rules change —
            confirm pets, generators, fires and turtle-light curfews before you book. Photographs are real
            and credited.
          </p>
          <p>
            Where an academy crew has slept at the place, the number starts with how it worked on that road
            trip: the drive in, the sleep, and whether another crew should be sent. It is not an average of
            scraped stars.
          </p>
          <p>
            Where no academy crew has slept there yet, the number is a reading of what the operator publishes
            until a road trip rewrites it. That is stated on the review. It is still not an average of
            scraped stars.
          </p>
          <p>
            The about page was written from the academy’s about page, course list and Knowledge Centre; the
            National 4x4 Outdoors Show Melbourne 2026 speaker note on Dave Darmody; Drive Straya’s 2026
            ambassador announcement; a 2015 account of his K’gari instruction; and Burnett Mary Regional
            Group’s May 2025 note on his Rainbow Beach training. Checked November 2026.
          </p>
        </div>
      </article>
    </Shell>
  );
}
