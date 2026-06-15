import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, MapPin } from "lucide-react";
import { PageHero, Section } from "@/components/site/Layout";
import { EVENTS } from "@/lib/site-data";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events & Training — Elchay Autism Initiative" },
      { name: "description", content: "Upcoming campaigns, training cohorts, workshops and community events." },
      { property: "og:title", content: "Events & Training" },
      { property: "og:description", content: "Campaigns, cohorts and community events." },
    ],
  }),
  component: Events,
});

function Events() {
  return (
    <>
      <PageHero eyebrow="Events" title="Calendar of awareness, training & community." lead="Free or low-cost events for parents, teachers, volunteers and community partners." />
      <Section>
        <ul className="grid gap-5 lg:grid-cols-2">
          {EVENTS.map((e) => (
            <li key={e.slug}>
              <Link to="/events/$slug" params={{ slug: e.slug }} className="block rounded-2xl border border-border bg-card p-6 transition hover:border-accent hover:shadow-md">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">{e.type}</span>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold">{e.title}</h2>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {e.date}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {e.location}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{e.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
