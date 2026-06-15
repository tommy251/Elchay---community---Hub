import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Elchay Autism Initiative" },
      { name: "description", content: "Our mission, vision, values and the team behind Elchay Autism Initiative." },
      { property: "og:title", content: "About Elchay" },
      { property: "og:description", content: "Our mission, vision and team." },
    ],
  }),
  component: About,
});

const VALUES = [
  { t: "Dignity", b: "Every child and family is treated with respect — never as a tragedy or a charity case." },
  { t: "Evidence", b: "We use therapy and education approaches that are backed by research, not myth." },
  { t: "Inclusion", b: "We design for neurodivergent minds first — sensory-friendly, accessible, and welcoming." },
  { t: "Family", b: "Parents and siblings are part of the team. We support the whole family, not just the child." },
];

const TEAM = [
  { name: "Dr. Adaeze N.", role: "Founder & Clinical Director", bio: "Developmental paediatrician with 15+ years in autism care." },
  { name: "Ifeanyi O.", role: "Speech-Language Therapist", bio: "Specialist in AAC and early-intervention speech therapy." },
  { name: "Kemi A.", role: "Family Support Lead", bio: "Trained counsellor and parent of a neurodivergent child." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Walking with families — with dignity and hope." lead="Elchay Autism Initiative was founded by parents and clinicians who believed that no Nigerian family should face autism alone, or be told their child has no future." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 text-muted-foreground">To make assessment, therapy, education and advocacy accessible to every child with autism and developmental disabilities — especially those facing financial, social or accessibility barriers.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 text-muted-foreground">A society where neurodivergent children are understood, included and given every chance to flourish in their families, schools and communities.</p>
          </div>
        </div>
      </Section>
      <Section className="!py-0">
        <div className="rounded-3xl bg-secondary/50 p-8 lg:p-12">
          <h2 className="font-display text-2xl font-bold">Our values</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.t} className="rounded-2xl bg-background p-5">
                <h3 className="font-display text-lg font-semibold text-primary">{v.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="font-display text-2xl font-bold">Meet the team</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-accent to-primary" aria-hidden />
              <h3 className="mt-4 font-display text-lg font-semibold">{t.name}</h3>
              <p className="text-sm font-medium text-accent">{t.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.bio}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/contact" className="inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Get in touch</Link>
        </div>
      </Section>
    </>
  );
}
