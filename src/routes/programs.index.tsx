import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/site/Layout";
import { PROGRAMS } from "@/lib/site-data";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Our Programs — Elchay Autism Initiative" },
      { name: "description", content: "Assessment, therapy, inclusive education, family support, advocacy and scholarships." },
      { property: "og:title", content: "Our Programs" },
      { property: "og:description", content: "Six interlocking programs from assessment to inclusive schooling." },
    ],
  }),
  component: Programs,
});

function Programs() {
  return (
    <>
      <PageHero eyebrow="Our Programs" title="Six programs. One family." lead="From the first assessment to long-term advocacy, our programs are designed to meet families where they are and walk with them as long as it takes." />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <Link key={p.slug} to="/programs/$slug" params={{ slug: p.slug }} className="group rounded-2xl border border-border bg-card p-6 transition hover:border-accent hover:shadow-md">
              <h2 className="font-display text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent">Read more <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
