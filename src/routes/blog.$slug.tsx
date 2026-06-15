import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHero, Section } from "@/components/site/Layout";
import { POSTS } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const p = POSTS.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return { post: p };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: `${loaderData.post.title} — Elchay Blog` }, { name: "description", content: loaderData.post.body }] : [],
  }),
  component: Post,
  notFoundComponent: () => <Section><p>Post not found.</p></Section>,
});

function Post() {
  const { post } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={post.date} title={post.title} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"><ArrowLeft className="h-4 w-4" /> All posts</Link>
          <article className="mt-6">
            <p className="text-size-lg leading-relaxed">{post.body}</p>
            <p className="mt-6 text-muted-foreground">Thank you for reading. If this resonated, share it with someone — and consider supporting our work.</p>
          </article>
        </div>
      </Section>
    </>
  );
}
