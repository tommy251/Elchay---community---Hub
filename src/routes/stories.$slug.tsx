import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHero, Section } from "@/components/site/Layout";
import { STORIES } from "@/lib/site-data";

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }) => {
    const s = STORIES.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return { story: s };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.story.name} — Elchay Stories` },
      { name: "description", content: loaderData.story.quote },
    ] : [],
  }),
  component: StoryDetail,
  notFoundComponent: () => <Section><p>Story not found.</p></Section>,
});

function StoryDetail() {
  const { story } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow="A story of hope" title={story.name} lead={`"${story.quote}"`} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <Link to="/stories" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"><ArrowLeft className="h-4 w-4" /> All stories</Link>
          <p className="mt-6 text-size-lg leading-relaxed">{story.body}</p>
          <div className="mt-10 rounded-2xl bg-secondary p-6">
            <p className="font-semibold">Want to make stories like this possible?</p>
            <Link to="/donate" className="mt-3 inline-flex rounded-full bg-accent px-5 py-2.5 font-semibold text-accent-foreground">Donate to Support a Child</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
