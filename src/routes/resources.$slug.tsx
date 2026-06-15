import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Download } from "lucide-react";
import { toast } from "sonner";
import { PageHero, Section } from "@/components/site/Layout";
import { RESOURCES } from "@/lib/site-data";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const r = RESOURCES.find((x) => x.slug === params.slug);
    if (!r) throw notFound();
    return { res: r };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: `${loaderData.res.title} — Elchay Resources` }, { name: "description", content: loaderData.res.body }] : [],
  }),
  component: ResourceDetail,
  notFoundComponent: () => <Section><p>Resource not found.</p></Section>,
});

function ResourceDetail() {
  const { res } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={res.type} title={res.title} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <Link to="/resources" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"><ArrowLeft className="h-4 w-4" /> All resources</Link>
          <article className="prose prose-neutral mt-6 max-w-none">
            <p className="text-size-lg leading-relaxed">{res.body}</p>
            <p className="text-muted-foreground">This guide is freely available for any family, teacher or clinician. If it helps you, please consider sharing it — and supporting our work.</p>
          </article>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => toast.success("Download started", { description: `${res.title}.pdf` })} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground">
              <Download className="h-4 w-4" /> Download PDF
            </button>
            <Link to="/donate" className="rounded-full bg-accent px-5 py-2.5 font-semibold text-accent-foreground">Support this work</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
