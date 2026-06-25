import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  HandHelping,
  Users,
  BookOpen,
  ArrowRight,
  Stethoscope,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Calendar,
  MessageCircle,
  Video,
  FileText,
  MapPin,
  Clock,
  Megaphone,
} from "lucide-react";
import heroPoster from "@/assets/hero-therapy.jpg";
const heroVideo = "/hero-dancing.mp4";
const successStoryVideo = "/success-story.mp4";
const familyImg = "/family.jpg";
import programsImg from "@/assets/programs.jpg";
const elem1 = "/elc-elem-1.png";
const elem2 = "/elc-elem-2.png";
const elem3 = "/elc-elem-3.png";
const elem4 = "/elc-elem-4.png";
import { Section } from "@/components/site/Layout";
import { CountUp } from "@/components/site/CountUp";
import { PROGRAMS, STORIES, EVENTS, COMMUNITY_PULSE } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elchay Community Hub — Join the Movement for Inclusion" },
      {
        name: "description",
        content:
          "A community hub for families, professionals, volunteers, donors and partners advancing inclusion for autistic children and children with neurological conditions in Nigeria.",
      },
      {
        property: "og:title",
        content: "Elchay Community Hub — Join the Movement",
      },
      {
        property: "og:description",
        content:
          "Families, professionals, volunteers and donors — all in one place, building inclusion together.",
      },
    ],
  }),
  component: Home,
});

const PORTALS = [
  {
    to: "/get-help",
    icon: <Users className="h-6 w-6" />,
    title: "Families",
    body: "Find support, share your story, connect with other families and access free resources.",
    cta: "Join as a family",
  },
  {
    to: "/volunteer",
    icon: <HandHelping className="h-6 w-6" />,
    title: "Volunteers",
    body: "Lend your skills to therapy days, events, content creation and community outreach.",
    cta: "Join as a volunteer",
  },
  {
    to: "/partners",
    icon: <BookOpen className="h-6 w-6" />,
    title: "Partners & Donors",
    body: "Fund a program, sponsor a child, or co-design inclusive solutions with us.",
    cta: "Partner with us",
  },
  {
    to: "/community",
    icon: <Sparkles className="h-6 w-6" />,
    title: "Professionals",
    body: "Clinicians, teachers, researchers and advocates — share knowledge and grow the field.",
    cta: "Join the network",
  },
] as const;

function Home() {
  return (
    <>
      {/* Hero — Community Hub Welcome */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-6 lg:py-20">
          <div>
            <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Community Hub
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              You belong here. <span className="text-accent">We rise together.</span>
            </h1>
            <p className="mt-5 max-w-xl text-size-lg text-muted-foreground">
              Elchay is a community of families, professionals, volunteers, donors and advocates — all working together so no child is denied support because of cost, location or stigma.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/community"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-sm transition hover:brightness-95"
              >
                <Users className="h-5 w-5" /> Join the Community
              </Link>
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 font-semibold text-primary transition hover:bg-secondary"
              >
                Support a Child <Heart className="h-4 w-4" />
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
              <Stat n={35} label="Children screened" />
              <Stat n={18} label="Families in community" />
              <Stat n={12} label="Volunteers engaged" />
            </dl>
          </div>
          <div className="relative">
            <video
              src={heroVideo}
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
              <p className="text-xs uppercase tracking-wider opacity-80">
                Community growing since 2025
              </p>
              <p className="mt-1 font-display text-lg font-semibold">
                35 children · 18 families · 12 volunteers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Video — click to play with sound */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/40">
        <img src={elem1} alt="" aria-hidden className="pointer-events-none absolute -top-10 -left-10 h-48 w-48 opacity-60 sm:h-64 sm:w-64" />
        <img src={elem2} alt="" aria-hidden className="pointer-events-none absolute -top-6 right-0 h-40 w-40 opacity-70 sm:h-56 sm:w-56" />
        <img src={elem3} alt="" aria-hidden className="pointer-events-none absolute bottom-0 -left-6 h-40 w-52 opacity-60 sm:h-48 sm:w-64" />
        <img src={elem4} alt="" aria-hidden className="pointer-events-none absolute -bottom-8 right-0 h-40 w-52 opacity-60 sm:h-48 sm:w-64" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-6 lg:py-20">
          <div className="overflow-hidden rounded-3xl bg-primary shadow-xl">
            <video
              src={successStoryVideo}
              controls
              preload="metadata"
              playsInline
              aria-label="Success story: Mr. Olawande and an Elchay family share their two-year journey"
              className="h-auto w-full"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">A Real Success Story</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">From silent tantrums to straight A's.</h2>
            <p className="mt-4 text-muted-foreground">
              Hear directly from <strong>Mr. Olawande</strong>, founder of Elchay Autism, and a parent whose son moved from broken report cards to a result sheet of A's after two years of speech therapy and a full rehabilitation package. This is why we are building standard, affordable autism centres — so no child stays hidden indoors for 8 years again.
            </p>
            <p className="mt-3 text-sm text-muted-foreground italic">▶ Click play to watch — with sound.</p>
          </div>
        </div>
      </section>
{/* anchor */}
      <Section>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Who's Here
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            A community built for every kind of champion.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Whether you are a parent seeking help, a therapist with skills to share, a donor ready to fund change, or a teacher building inclusion — there is a place for you here.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PORTALS.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:border-accent hover:shadow-md"
            >
              <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                {p.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {p.title}
              </h3>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">
                {p.body}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent">
                {p.cta} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Community Pulse — Recent Activity */}
      <Section className="!py-0">
        <div className="rounded-3xl bg-secondary/50 p-8 lg:p-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Community Pulse
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                What's happening right now
              </h2>
            </div>
            <Link
              to="/community"
              className="hidden text-sm font-semibold text-primary hover:underline sm:inline"
            >
              See all activity →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMMUNITY_PULSE.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  {item.type === "event" && <Calendar className="h-3.5 w-3.5" />}
                  {item.type === "story" && <MessageCircle className="h-3.5 w-3.5" />}
                  {item.type === "resource" && <FileText className="h-3.5 w-3.5" />}
                  {item.type === "campaign" && <Megaphone className="h-3.5 w-3.5" />}
                  {item.type === "training" && <Video className="h-3.5 w-3.5" />}
                  <span>{item.tag}</span>
                </div>
                <p className="mt-2 font-display text-base font-semibold leading-snug">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{item.time}</span>
                  {"location" in item && item.location && (
                    <>
                      <span className="mx-1">·</span>
                      <MapPin className="h-3 w-3" />
                      <span>{item.location}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why We Exist — Reframed as community purpose */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Why We Exist
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              No family should carry this weight alone.
            </h2>
            <p className="mt-4 text-muted-foreground">
              In Nigeria, families raising autistic children face a triple weight: a long search for answers, a system that rarely meets them with dignity, and the cost of care that quickly becomes impossible. Elchay is a community built to lift that weight — together.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Why
              icon={<Stethoscope className="h-6 w-6" />}
              title="The barriers we face"
              body="Long waitlists, stigma in clinics and classrooms, and very few clinicians trained in autism-affirming care."
            />
            <Why
              icon={<Heart className="h-6 w-6" />}
              title="The cost of care"
              body="Assessment plus therapy can cost more than a household's monthly income. Many families walk away after diagnosis."
            />
            <Why
              icon={<GraduationCap className="h-6 w-6" />}
              title="Why scholarships matter"
              body="Scholarships keep children in therapy long enough for change to take hold — and keep families together."
            />
            <Why
              icon={<ShieldCheck className="h-6 w-6" />}
              title="How we help together"
              body="Every donation, volunteer hour and shared story directly funds care for a family who otherwise could not afford it."
            />
          </div>
        </div>
      </section>

      {/* Our Journey — Community Impact */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Our Community Impact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Five months in. Just getting started.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Elchay is a young community, but we are growing out of a centre that has supported neurodivergent learners for more than six years. These are the numbers our community has built together — and the reason we are inviting more people in.
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
          One community mission:{" "}
          <span className="text-accent">
            ensuring no child is denied support because of financial barriers.
          </span>
        </p>
      </Section>

      {/* Programs — Community offerings */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Community Programs
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Care that meets the whole family, where they are.
            </h2>
            <p className="mt-3 text-muted-foreground">
              From first assessment to inclusive schooling and lifelong advocacy — six community-built programs designed around dignity and evidence.
            </p>
            <Link
              to="/programs"
              className="mt-5 inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
            >
              Explore all programs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {PROGRAMS.slice(0, 4).map((p) => (
              <Link
                key={p.slug}
                to="/programs/$slug"
                params={{ slug: p.slug }}
                className="group rounded-2xl border border-border bg-card p-5 transition hover:border-accent hover:shadow-md"
              >
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Fundraising band — Community-driven */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:items-center lg:px-6">
          <img
            src={familyImg}
            alt="A mother holding her son in warm evening light"
            loading="lazy"
            width={1200}
            height={900}
            className="h-72 w-full rounded-3xl object-cover lg:h-96"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Community Fundraising
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              We are building this together.
            </h2>
            <p className="mt-4 text-size-lg opacity-95">
              Every donation, partnership and shared post directly helps us reach more children and families. As we pursue our first major round of community funding, your gift today decides how many more families we can say <em>yes</em> to next month.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground"
              >
                Donate now <Heart className="h-4 w-4" />
              </Link>
              <Link
                to="/partners"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                Become a funding partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1,000 Voices campaign band */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Community Campaign
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                1,000 Voices for Inclusion.
              </h2>
              <p className="mt-4 text-muted-foreground">
                We are gathering 1,000 stories from autistic Nigerians, their families, teachers and clinicians — to change how the country sees autism, and to push for inclusive policy. Add your voice, share a film, or host a screening.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/get-help"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
                >
                  Share your story
                </Link>
                <Link
                  to="/programs/$slug"
                  params={{ slug: "1000-voices" }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 font-semibold text-primary hover:bg-secondary"
                >
                  About the campaign <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { n: 132, l: "Voices recorded" },
                { n: 14, l: "Schools engaged" },
                { n: 9, l: "States reached" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-border bg-card p-5 text-center"
                >
                  <p className="font-display text-3xl font-bold text-primary">
                    <CountUp end={s.n} />
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.l}
                  </p>
                </div>
              ))}
              <div className="col-span-3 rounded-2xl bg-primary p-5 text-primary-foreground">
                <p className="text-xs uppercase tracking-wider opacity-80">
                  Target by April 2026
                </p>
                <p className="mt-1 font-display text-xl font-semibold">
                  1,000 voices · 36 states · 1 inclusive Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Library & digital learning */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-8 lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Free Community Resource
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              The Elchay E-Library
            </h2>
            <p className="mt-4 text-muted-foreground">
              Plain-language guides, printable worksheets, parent webinars and therapy explainers — built with our clinical team and free to download. Wherever you are in Nigeria, evidence-based autism support is one click away.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/resources"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground"
              >
                Browse the library <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/programs/$slug"
                params={{ slug: "digital-learning" }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 font-semibold text-primary hover:bg-secondary"
              >
                Upcoming webinars
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-secondary p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Back to school
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold">
              Academic Re-integration
            </h3>
            <p className="mt-3 text-muted-foreground">
              After therapy, we walk children — and their teachers — back into the classroom with shadow support, IEPs and school coaching.
            </p>
            <Link
              to="/programs/$slug"
              params={{ slug: "academic-reintegration" }}
              className="mt-4 inline-flex items-center gap-1 font-semibold text-primary hover:text-accent"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Stories — Community Testimonials */}
      <Section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Community Voices
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Three families. Three turning points.
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              A family who could not afford therapy. A family who began and had to stop. A family who finished — and saw their child thrive. Your support changes which ending becomes possible.
            </p>
          </div>
          <Link
            to="/stories"
            className="hidden text-sm font-semibold text-primary hover:underline sm:inline"
          >
            All community stories →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {STORIES.map((s) => (
            <Link
              key={s.slug}
              to="/stories/$slug"
              params={{ slug: s.slug }}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:shadow-md"
            >
              <span className="inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {s.category}
              </span>
              <p className="mt-4 font-display text-lg leading-snug">
                &ldquo;{s.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-primary">
                — {s.name}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Upcoming Events + Newsletter */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <Calendar className="h-7 w-7 text-primary" />
            <h3 className="mt-3 font-display text-2xl font-bold">
              Upcoming community events
            </h3>
            <p className="mt-2 text-muted-foreground">
              Join workshops, walks, training and awareness campaigns. Everyone is welcome.
            </p>
            <div className="mt-5 space-y-3">
              {EVENTS.slice(0, 3).map((e) => (
                <Link
                  key={e.slug}
                  to="/events/$slug"
                  params={{ slug: e.slug }}
                  className="flex items-start gap-3 rounded-xl border border-border p-3 transition hover:bg-secondary/40"
                >
                  <div className="rounded-lg bg-secondary px-2.5 py-1 text-center text-xs font-bold uppercase tracking-wider text-primary">
                    {e.date.split(" ")[0]}
                    <div className="text-[10px] font-normal opacity-70">
                      {e.date.split(" ").slice(1).join(" ")}
                    </div>
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold">
                      {e.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {e.location} · {e.type}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              to="/events"
              className="mt-4 inline-flex items-center gap-1 font-semibold text-primary hover:underline"
            >
              Full community calendar <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <NewsletterCard />
        </div>
      </Section>

      <Section>
        <img
          src={programsImg}
          alt="Children learning together in a warm classroom"
          loading="lazy"
          width={1200}
          height={900}
          className="h-64 w-full rounded-3xl object-cover lg:h-96"
        />
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
      <dd className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </dd>
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

function Why({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
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
        toast.success("You're subscribed!", {
          description: "Welcome to the Elchay community newsletter.",
        });
        setEmail("");
      }}
      className="rounded-3xl border border-border bg-card p-8"
    >
      <h3 className="font-display text-2xl font-bold">
        Get the community newsletter
      </h3>
      <p className="mt-2 text-muted-foreground">
        Family stories, therapy tips, volunteer calls and ways to help —
        straight to your inbox.
      </p>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor="nl-email">
          Email address
        </label>
        <input
          id="nl-email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-full border border-input bg-background px-4 py-3 outline-none focus:border-accent"
        />
        <button className="rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground">
          Subscribe
        </button>
      </div>
    </form>
  );
}
