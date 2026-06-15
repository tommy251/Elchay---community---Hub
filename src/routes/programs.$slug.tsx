import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHero, Section } from "@/components/site/Layout";
import { PROGRAMS } from "@/lib/site-data";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const p = PROGRAMS.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return { program: p };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.program.title} — Elchay Programs` },
      { name: "description", content: loaderData.program.summary },
      { property: "og:title", content: loaderData.program.title },
      { property: "og:description", content: loaderData.program.summary },
    ] : [],
  }),
  component: ProgramDetail,
  notFoundComponent: () => (
    <Section>
      <p>Program not found.</p>
      <Link to="/programs" className="text-primary underline">Back to programs</Link>
    </Section>
  ),
});

function ProgramDetail() {
  const { program } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow="Program" title={program.title} lead={program.summary} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <Link to="/programs" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"><ArrowLeft className="h-4 w-4" /> All programs</Link>
          <p className="mt-6 text-size-lg leading-relaxed text-foreground">{program.details}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/get-help" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Request this service</Link>
            <Link to="/donate" className="rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground">Support this program</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
