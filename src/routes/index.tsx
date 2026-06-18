import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, HandHelping, Users, BookOpen, Calendar, Sparkles, ShieldCheck, Stethoscope, GraduationCap } from "lucide-react";
import heroPoster from "@/assets/hero-therapy.jpg";
import programsImg from "@/assets/programs.jpg";
import familyImg from "@/assets/family.jpg";
import { Section } from "@/components/site/Layout";
import { CountUp } from "@/components/site/CountUp";
import { PROGRAMS, STORIES } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elchay Autism Initiative — A gift for all, understanding for one" },
      { name: "description", content: "A young Nigerian non-profit providing assessment, therapy, education and advocacy for autistic children and children with neurological conditions. Donate to break financial barriers to care." },
      { property: "og:title", content: "Elchay Autism Initiative" },
      { property: "og:description", content: "Help ensure no child is denied support because of financial barriers." },
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
              Elchay walks alongside autistic children, children with other neurological conditions, and the families who love them — with evidence-based therapy, inclusive education, and dignified advocacy.
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
              <Stat n={35} label="Children screened & assessed" />
              <Stat n={18} label="Families guided & supported" />
              <Stat n={6} label="Children in active intervention" />
            </dl>
          </div>
          <div className="relative">
            <video
              src="/hero-dancing.mp4"
              poster={heroPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="A mother and her son dancing joyfully in their living room"
              className="h-auto w-full rounded-3xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-primary px-5 py-4 text-primary-foreground shadow-lg sm:block">
              <p className="text-xs uppercase tracking-wider opacity-80">First 5 months</p>
              <p className="mt-1 font-display text-lg font-semibold">35 children assessed · 18 families supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Why We Exist</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">No child should lose a future because of what their family can afford.</h2>
            <p className="mt-4 text-muted-foreground">
              In Nigeria, families raising autistic children and children with other neurological conditions face a triple weight: a long search for answers, a system that rarely meets them with dignity, and the cost of care that quickly becomes impossible. Elchay exists to lift that weight — one child, one family, one community at a time.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Why icon={<Stethoscope className="h-6 w-6" />} title="The barriers we see" body="Long waitlists, stigma in clinics and classrooms, and very few clinicians trained in autism-affirming care across most of the country." />
            <Why icon={<Heart className="h-6 w-6" />} title="The cost of care" body="A full assessment plus consistent therapy can cost more than a household's monthly income. Many families simply walk away after diagnosis." />
            <Why icon={<GraduationCap className="h-6 w-6" />} title="Why scholarships matter" body="Scholarships keep children in therapy long enough for change to take hold — and keep families together while they navigate it." />
            <Why icon={<ShieldCheck className="h-6 w-6" />} title="How your gift helps" body="Every donation directly funds assessments, therapy blocks, parent coaching and school advocacy for a family who otherwise could not afford it." />
          </div>
        </div>
      </section>

      {/* Our Journey So Far */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Our Journey So Far</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Five months in. Just getting started.</h2>
            <p className="mt-4 text-muted-foreground">
              Elchay Autism Initiative is a young non-profit working out of a centre that has supported neurodivergent learners for more than six years. These are the numbers behind our first five months of formal operation — and the reason we are seeking our first major funding.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            <Journey n={35} label="Children screened & assessed" />
            <Journey n={18} label="Families guided & supported" />
            <Journey n={6} label="Children in active intervention" />
            <Journey n={12} label="Volunteer professionals engaged" />
          </ul>
        </div>
        <p className="mt-10 rounded-3xl bg-primary px-6 py-6 font-display text-xl text-primary-foreground sm:text-2xl lg:px-10 lg:py-8">
          One mission: <span className="text-accent">ensuring no child is denied support because of financial barriers.</span>
        </p>
      </Section>

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

      {/* Fundraising band */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:px-6">
          <img src={familyImg} alt="A mother holding her son in warm evening light" loading="lazy" width={1200} height={900} className="h-72 w-full rounded-3xl object-cover lg:h-96" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">For Fundraising</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">We are at the beginning of our journey.</h2>
            <p className="mt-4 text-size-lg opacity-95">
              Every donation directly helps us reach more children and families who cannot afford assessment, therapy, education and support services. As we pursue our first major round of funding, your gift today decides how many more families we can say <em>yes</em> to next month.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground">Donate now <Heart className="h-4 w-4" /></Link>
              <Link to="/partners" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10">Become a funding partner</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1,000 Voices campaign band */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Our Flagship Campaign</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">1,000 Voices for Inclusion.</h2>
              <p className="mt-4 text-muted-foreground">
                We are gathering 1,000 stories from autistic Nigerians, their families, teachers and clinicians — to change how the country sees autism, and to push for inclusive policy in classrooms, clinics and communities. Add your voice, share a film, or host a screening in your school or workplace.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/get-help" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Share your story</Link>
                <Link to="/programs/$slug" params={{ slug: "1000-voices" }} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 font-semibold text-primary hover:bg-secondary">Learn about the campaign <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { n: 132, l: "Voices recorded" },
                { n: 14, l: "Schools engaged" },
                { n: 9, l: "States reached" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card p-5 text-center">
                  <p className="font-display text-3xl font-bold text-primary"><CountUp end={s.n} /></p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
                </div>
              ))}
              <div className="col-span-3 rounded-2xl bg-primary p-5 text-primary-foreground">
                <p className="text-xs uppercase tracking-wider opacity-80">Target by April 2026</p>
                <p className="mt-1 font-display text-xl font-semibold">1,000 voices · 36 states · 1 inclusive Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Library & digital learning */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl border border-border bg-card p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Free for every Nigerian family</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">The Elchay E-Library</h2>
            <p className="mt-4 text-muted-foreground">Plain-language guides, printable worksheets, parent webinars and therapy explainers — built with our clinical team and free to download. Wherever you are in Nigeria, evidence-based autism support is one click away.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/resources" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground">Browse the library <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/programs/$slug" params={{ slug: "digital-learning" }} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 font-semibold text-primary hover:bg-secondary">Upcoming webinars</Link>
            </div>
          </div>
          <div className="rounded-3xl bg-secondary p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Back to school</p>
            <h3 className="mt-3 font-display text-2xl font-bold">Academic Re-integration</h3>
            <p className="mt-3 text-muted-foreground">After therapy, we walk children — and their teachers — back into the classroom with shadow support, IEPs and school coaching.</p>
            <Link to="/programs/$slug" params={{ slug: "academic-reintegration" }} className="mt-4 inline-flex items-center gap-1 font-semibold text-primary hover:text-accent">Learn more <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>

      {/* Stories */}
      <Section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Real Stories</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Three families. Three turning points.</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">A family who couldn't afford therapy after assessment. A family who began and had to stop. A family who finished — and saw their child thrive. Your support changes which ending becomes possible.</p>
          </div>
          <Link to="/stories" className="hidden text-sm font-semibold text-primary hover:underline sm:inline">All stories →</Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {STORIES.map((s) => (
            <Link key={s.slug} to="/stories/$slug" params={{ slug: s.slug }} className="flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:shadow-md">
              <span className="inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">{s.category}</span>
              <p className="mt-4 font-display text-lg leading-snug">&ldquo;{s.quote}&rdquo;</p>
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

function Stat({ n, label }: { n: number; label: string }) {
  return (
    <div>
      <dt className="font-display text-2xl font-bold text-primary sm:text-3xl">
        <CountUp end={n} />
      </dt>
      <dd className="text-xs uppercase tracking-wider text-muted-foreground">{label}</dd>
    </div>
  );
}

function Journey({ n, label }: { n: number; label: string }) {
  return (
    <li className="rounded-2xl border border-border bg-card p-6">
      <p className="font-display text-4xl font-bold text-primary sm:text-5xl">
        <CountUp end={n} />
      </p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
    </li>
  );
}

function Why({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">{icon}</div>
      <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
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
