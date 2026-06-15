import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PageHero, Section } from "@/components/site/Layout";
import { EVENTS } from "@/lib/site-data";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const e = EVENTS.find((x) => x.slug === params.slug);
    if (!e) throw notFound();
    return { event: e };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: `${loaderData.event.title} — Elchay Events` }, { name: "description", content: loaderData.event.body }] : [],
  }),
  component: EventDetail,
  notFoundComponent: () => <Section><p>Event not found.</p></Section>,
});

function EventDetail() {
  const { event } = Route.useLoaderData();
  const [busy, setBusy] = useState(false);
  return (
    <>
      <PageHero eyebrow={event.type} title={event.title} lead={event.body} />
      <Section>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            <Link to="/events" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"><ArrowLeft className="h-4 w-4" /> All events</Link>
            <div className="mt-6 flex flex-wrap gap-6 text-muted-foreground">
              <span className="inline-flex items-center gap-2"><CalendarDays className="h-5 w-5 text-primary" /> {event.date}</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /> {event.location}</span>
            </div>
            <p className="mt-6 text-size-lg leading-relaxed">{event.body}</p>
            <h3 className="mt-8 font-display text-xl font-semibold">What to expect</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Sensory-friendly venue with a quiet room available</li>
              <li>Light refreshments and accessible facilities</li>
              <li>Certificate of completion for training events</li>
              <li>Materials provided in plain language</li>
            </ul>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setBusy(true);
              setTimeout(() => {
                toast.success("You're registered!", { description: `See you at ${event.title}.` });
                (e.target as HTMLFormElement).reset();
                setBusy(false);
              }, 600);
            }}
            className="h-fit rounded-3xl border border-border bg-card p-6"
          >
            <h3 className="font-display text-xl font-semibold">Register</h3>
            <p className="mt-1 text-sm text-muted-foreground">Free — confirmation sent by email.</p>
            <div className="mt-4 space-y-3">
              <input required name="name" placeholder="Full name" className="w-full rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
              <input required type="email" name="email" placeholder="Email" className="w-full rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
              <input name="phone" placeholder="Phone (optional)" className="w-full rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" className="mt-1" />
                <span>Yes, I'd like accessibility accommodations</span>
              </label>
            </div>
            <button disabled={busy} className="mt-5 w-full rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground disabled:opacity-60">{busy ? "Registering…" : "Confirm registration"}</button>
          </form>
        </div>
      </Section>
    </>
  );
}
