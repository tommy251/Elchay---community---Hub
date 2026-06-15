import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, HandHelping, Users, BookOpen, Calendar, Sparkles } from "lucide-react";
import hero from "@/assets/hero-therapy.jpg";
import programsImg from "@/assets/programs.jpg";
import familyImg from "@/assets/family.jpg";
import { Section } from "@/components/site/Layout";
import { PROGRAMS, STORIES } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elchay Autism Initiative — A gift for all, understanding for one" },
      { name: "description", content: "Assessment, therapy, education and advocacy for children with autism in Nigeria. Donate to support a child today." },
      { property: "og:title", content: "Elchay Autism Initiative" },
      { property: "og:description", content: "Donate to support a child with autism — assessment, therapy, education and advocacy." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-6 lg:py-20">
          <div>
            <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">Advocacy · Education · Treatment</span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              A gift for all, <span className="text-accent">understanding</span> for one.
            </h1>
            <p className="mt-5 max-w-xl text-size-lg text-muted-foreground">
              Elchay walks alongside children with autism and developmental disabilities — and the families who love them — with evidence-based therapy, inclusive education, and dignified advocacy.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-sm transition hover:brightness-95">
                <Heart className="h-5 w-5" /> Donate to Support a Child
              </Link>
              <Link to="/get-help" className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 font-semibold text-primary transition hover:bg-secondary">
                Request Support <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
              <Stat n="1,200+" label="Children supported" />
              <Stat n="450" label="Families served" />
              <Stat n="80" label="Scholarships granted" />
            </dl>
          </div>
          <div className="relative">
            <img src={hero} alt="A therapist and a smiling child during a play-based therapy session" width={1600} height={1100} className="h-auto w-full rounded-3xl object-cover shadow-xl" />
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-primary px-5 py-4 text-primary-foreground shadow-lg sm:block">
              <p className="text-xs uppercase tracking-wider opacity-80">Current milestone</p>
              <p className="mt-1 font-display text-lg font-semibold">20 hours of free sensitization delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick actions */}
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ActionCard to="/get-help" icon={<HandHelping className="h-6 w-6" />} title="Request Support" body="Get personalised guidance from our family-support team." />
          <ActionCard to="/get-help" icon={<Users className="h-6 w-6" />} title="Refer a Child" body="Refer a child to assessment and care — no family turned away." />
          <ActionCard to="/volunteer" icon={<Sparkles className="h-6 w-6" />} title="Volunteer" body="Lend your skills to therapy days, events and campaigns." />
          <ActionCard to="/partners" icon={<BookOpen className="h-6 w-6" />} title="Partner With Us" body="Corporate, school and foundation partnerships." />
        </div>
      </Section>

      {/* Programs */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Our Programs</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Care that meets the whole family, where they are.</h2>
            <p className="mt-3 text-muted-foreground">From first assessment to inclusive schooling and lifelong advocacy — six interlocking programs designed around dignity and evidence.</p>
            <Link to="/programs" className="mt-5 inline-flex items-center gap-1.5 font-semibold text-primary hover:underline">Explore all programs <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {PROGRAMS.slice(0, 4).map((p) => (
              <Link key={p.slug} to="/programs/$slug" params={{ slug: p.slug }} className="group rounded-2xl border border-border bg-card p-5 transition hover:border-accent hover:shadow-md">
                <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent">Learn more <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Impact band */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:px-6">
          <img src={familyImg} alt="A mother holding her son in warm evening light" loading="lazy" width={1200} height={900} className="h-72 w-full rounded-3xl object-cover lg:h-96" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">You make this possible</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">You've been changing the narrative around autism with us since day one.</h2>
            <p className="mt-4 opacity-90">A monthly gift of $10 / ₦10,000 covers a full week of speech therapy for one child. Become part of the Elchay Circle.</p>
            <Link to="/donate" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground">Join the Elchay Circle <Heart className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* Stories */}
      <Section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Stories of hope</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Shared with consent. Told with dignity.</h2>
          </div>
          <Link to="/stories" className="hidden text-sm font-semibold text-primary hover:underline sm:inline">All stories →</Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {STORIES.map((s) => (
            <Link key={s.slug} to="/stories/$slug" params={{ slug: s.slug }} className="rounded-2xl border border-border bg-card p-6 transition hover:shadow-md">
              <p className="font-display text-lg leading-snug">&ldquo;{s.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-primary">— {s.name}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Newsletter + events teaser */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <NewsletterCard />
          <Link to="/events" className="group rounded-3xl border border-border bg-secondary/40 p-8 transition hover:bg-secondary">
            <Calendar className="h-7 w-7 text-primary" />
            <h3 className="mt-3 font-display text-2xl font-bold">Upcoming events & training</h3>
            <p className="mt-2 text-muted-foreground">Autism Awareness Week, parent cohorts, inclusive-teacher workshops, and community walks.</p>
            <span className="mt-4 inline-flex items-center gap-1 font-semibold text-primary group-hover:text-accent">See the calendar <ArrowRight className="h-4 w-4" /></span>
          </Link>
        </div>
      </Section>

      <Section>
        <img src={programsImg} alt="Children learning together in a warm classroom" loading="lazy" width={1200} height={900} className="h-64 w-full rounded-3xl object-cover lg:h-96" />
      </Section>
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-2xl font-bold text-primary sm:text-3xl">{n}</dt>
      <dd className="text-xs uppercase tracking-wider text-muted-foreground">{label}</dd>
    </div>
  );
}

function ActionCard({ to, icon, title, body }: { to: "/get-help" | "/volunteer" | "/partners"; icon: React.ReactNode; title: string; body: string }) {
  return (
    <Link to={to} className="group rounded-2xl border border-border bg-card p-6 transition hover:border-accent hover:shadow-md">
      <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">{icon}</div>
      <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </Link>
  );
}

import { useState } from "react";
import { toast } from "sonner";
function NewsletterCard() {
  const [email, setEmail] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        toast.success("You're subscribed!", { description: "Welcome to the Elchay newsletter." });
        setEmail("");
      }}
      className="rounded-3xl border border-border bg-card p-8"
    >
      <h3 className="font-display text-2xl font-bold">Get the monthly newsletter</h3>
      <p className="mt-2 text-muted-foreground">Family stories, therapy tips, and ways to help — straight to your inbox.</p>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor="nl-email">Email address</label>
        <input
          id="nl-email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-full border border-input bg-background px-4 py-3 outline-none focus:border-accent"
        />
        <button className="rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground">Subscribe</button>
      </div>
    </form>
  );
}
