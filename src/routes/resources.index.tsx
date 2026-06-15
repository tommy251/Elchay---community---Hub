import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { PageHero, Section } from "@/components/site/Layout";
import { RESOURCES } from "@/lib/site-data";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Resource Library — Elchay Autism Initiative" },
      { name: "description", content: "Plain-language guides, parent worksheets, therapy tips and printable resources." },
      { property: "og:title", content: "Resource Library" },
      { property: "og:description", content: "Guides, worksheets and therapy tips." },
    ],
  }),
  component: Resources,
});

function Resources() {
  const [q, setQ] = useState("");
  const items = RESOURCES.filter((r) => `${r.title} ${r.type} ${r.body}`.toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageHero eyebrow="Resource Library" title="Knowledge that walks home with you." lead="Free, plain-language guides for parents, teachers and professionals. Updated regularly." />
      <Section>
        <label className="relative mx-auto block max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <span className="sr-only">Search resources</span>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search resources…" className="w-full rounded-full border border-input bg-background py-3 pl-10 pr-4 outline-none focus:border-accent" />
        </label>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <Link key={r.slug} to="/resources/$slug" params={{ slug: r.slug }} className="group rounded-2xl border border-border bg-card p-6 transition hover:border-accent hover:shadow-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">{r.type}</span>
              <h2 className="mt-2 font-display text-lg font-semibold">{r.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{r.body}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-primary group-hover:text-accent">Open →</span>
            </Link>
          ))}
          {items.length === 0 && <p className="text-muted-foreground">No resources match your search.</p>}
        </div>
      </Section>
    </>
  );
}
