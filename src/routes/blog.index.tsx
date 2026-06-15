import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Layout";
import { POSTS } from "@/lib/site-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "News & Blog — Elchay Autism Initiative" },
      { name: "description", content: "Stories, perspectives and updates from the Elchay team." },
      { property: "og:title", content: "News & Blog" },
      { property: "og:description", content: "Stories and updates from Elchay." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero eyebrow="News & Blog" title="Perspectives, updates and reflections." lead="Written by our clinicians, parents and community partners." />
      <Section>
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <li key={p.slug}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="block rounded-2xl border border-border bg-card p-6 transition hover:border-accent hover:shadow-md">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{p.date}</p>
                <h2 className="mt-2 font-display text-xl font-semibold">{p.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{p.body}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-primary">Read post →</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
