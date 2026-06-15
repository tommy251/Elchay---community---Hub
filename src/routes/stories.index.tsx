import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Layout";
import { STORIES } from "@/lib/site-data";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "Success Stories — Elchay Autism Initiative" },
      { name: "description", content: "Stories from families and children supported by Elchay — shared with consent, told with dignity." },
      { property: "og:title", content: "Success Stories" },
      { property: "og:description", content: "Stories told with dignity." },
    ],
  }),
  component: Stories,
});

function Stories() {
  return (
    <>
      <PageHero eyebrow="Success Stories" title="Real children. Real families. Real progress." lead="Every story on this page is published with the family's explicit consent and approved by them word for word." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s) => (
            <Link key={s.slug} to="/stories/$slug" params={{ slug: s.slug }} className="rounded-2xl border border-border bg-card p-6 transition hover:shadow-md">
              <p className="font-display text-xl leading-snug">&ldquo;{s.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-primary">— {s.name}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
