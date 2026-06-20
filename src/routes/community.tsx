import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  HandHelping,
  BookOpen,
  Heart,
  Stethoscope,
  GraduationCap,
  Megaphone,
  ArrowRight,
  MessageCircle,
  Calendar,
  FileText,
  Video,
  MapPin,
  Clock,
  Mail,
  Phone,
} from "lucide-react";
import { PageHero, Section } from "@/components/site/Layout";
import { CountUp } from "@/components/site/CountUp";
import { COMMUNITY_PULSE, EVENTS } from "@/lib/site-data";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community Hub — Elchay Autism Initiative" },
      {
        name: "description",
        content:
          "Join the Elchay community: families, professionals, volunteers, donors and partners building inclusion together.",
      },
      {
        property: "og:title",
        content: "Elchay Community Hub",
      },
      {
        property: "og:description",
        content:
          "Families, professionals, volunteers, donors and advocates — all in one place.",
      },
    ],
  }),
  component: Community,
});

const STAKEHOLDERS = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Families",
    body: "Parents, siblings, caregivers and extended family. Share your journey, find support circles, access free resources and connect with families who understand.",
    cta: "Join the family circle",
    to: "/get-help",
  },
  {
    icon: <HandHelping className="h-6 w-6" />,
    title: "Volunteers",
    body: "Students, professionals, creatives and community members. Give your time to therapy sessions, events, content creation and outreach.",
    cta: "Find your role",
    to: "/volunteer",
  },
  {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Professionals",
    body: "Therapists, teachers, doctors, researchers and advocates. Share knowledge, access training, mentor families and grow the field together.",
    cta: "Join the professional network",
    to: "/community",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Partners & Donors",
    body: "Corporates, foundations, schools and healthcare providers. Fund programs, sponsor children, or co-design inclusive solutions.",
    cta: "Start a partnership",
    to: "/partners",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Schools & Educators",
    body: "Mainstream and special schools, teachers and administrators. Access training, IEP support and inclusive classroom resources.",
    cta: "Access school resources",
    to: "/resources",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Donors & Supporters",
    body: "Individuals and organizations who believe every child deserves care. Your gift directly funds assessments, therapy and scholarships.",
    cta: "Donate today",
    to: "/donate",
  },
];

const HOW_TO_CONNECT = [
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: "WhatsApp Community",
    body: "Join our family support group on WhatsApp. Daily encouragement, Q&A with clinicians and peer mentorship.",
    action: "Join on WhatsApp",
    href: "https://wa.me/2347039593543",
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    title: "Attend an Event",
    body: "Walks, workshops, parent circles and training sessions. Meet the community in person or online.",
    action: "See events",
    to: "/events",
  },
  {
    icon: <Video className="h-5 w-5" />,
    title: "Share Your Story",
    body: "Add your voice to the 1,000 Voices for Inclusion campaign. Film, write, or speak your truth.",
    action: "Share your story",
    to: "/get-help",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Access Free Resources",
    body: "Download guides, worksheets, webinars and therapy explainers from the E-Library — free for every Nigerian family.",
    action: "Browse resources",
    to: "/resources",
  },
];

function Community() {
  return (
    <>
      <PageHero
        eyebrow="Community Hub"
        title="Everyone has a role in this community."
        lead="Elchay is not an organization you read about — it is a community you join. Families, professionals, volunteers, donors and advocates, all building inclusion together."
      />

      {/* Stakeholder Ecosystem */}
      <Section>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            The Ecosystem
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Who makes this community work?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Six groups of people. One shared mission. Find your place and start contributing.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STAKEHOLDERS.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="inline-grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                {s.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {s.title}
              </h3>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">
                {s.body}
              </p>
              <Link
                to={s.to}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent"
              >
                {s.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Community Pulse on this page */}
      <Section className="!py-0">
        <div className="rounded-3xl bg-secondary/50 p-8 lg:p-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Live Activity
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                What the community is doing right now
              </h2>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMMUNITY_PULSE.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  {item.type === "event" && (
                    <Calendar className="h-3.5 w-3.5" />
                  )}
                  {item.type === "story" && (
                    <MessageCircle className="h-3.5 w-3.5" />
                  )}
                  {item.type === "resource" && (
                    <FileText className="h-3.5 w-3.5" />
                  )}
                  {item.type === "campaign" && (
                    <Megaphone className="h-3.5 w-3.5" />
                  )}
                  {item.type === "training" && (
                    <Video className="h-3.5 w-3.5" />
                  )}
                  <span>{item.tag}</span>
                </div>
                <p className="mt-2 font-display text-base font-semibold leading-snug">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.body}
                </p>
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

      {/* How to Connect */}
      <Section>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Get Involved
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Four ways to plug into the community today.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_TO_CONNECT.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="inline-grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                {item.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent"
                >
                  {item.action} <ArrowRight className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  to={item.to!}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent"
                >
                  {item.action} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Community Values */}
      <Section className="!py-0">
        <div className="rounded-3xl bg-primary p-8 text-primary-foreground lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Our Community Values
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            How we show up for each other.
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Dignity",
                b: "Every person is treated with respect — never as a tragedy or a case.",
              },
              {
                t: "Evidence",
                b: "We share knowledge backed by research, not myth or fear.",
              },
              {
                t: "Inclusion",
                b: "We design for neurodivergent minds first — sensory-friendly, accessible, welcoming.",
              },
              {
                t: "Family",
                b: "Parents and siblings are part of the team. We support the whole unit, not just the child.",
              },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl bg-primary-foreground/10 p-5">
                <h3 className="font-display text-lg font-semibold text-accent">
                  {v.t}
                </h3>
                <p className="mt-2 text-sm opacity-90">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Upcoming Events */}
      <Section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Community Calendar
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              Upcoming gatherings and training
            </h2>
          </div>
          <Link
            to="/events"
            className="hidden text-sm font-semibold text-primary hover:underline sm:inline"
          >
            Full calendar →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {EVENTS.map((e) => (
            <Link
              key={e.slug}
              to="/events/$slug"
              params={{ slug: e.slug }}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:bg-secondary/40"
            >
              <div className="rounded-xl bg-secondary px-3 py-2 text-center">
                <p className="text-xs font-bold uppercase text-primary">
                  {e.date.split(" ")[0]}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {e.date.split(" ").slice(1).join(" ")}
                </p>
              </div>
              <div>
                <p className="font-display text-base font-semibold">{e.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{e.body}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {e.location} · {e.type}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Community Stats + Contact */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Community Growth
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold">
              Built by all of us.
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { n: 35, l: "Children screened" },
                { n: 18, l: "Families supported" },
                { n: 12, l: "Volunteers engaged" },
                { n: 132, l: "Voices recorded" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-secondary/50 p-5 text-center">
                  <p className="font-display text-3xl font-bold text-primary">
                    <CountUp end={s.n} />
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-secondary p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Reach the Community Team
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold">
              Not sure where to start?
            </h3>
            <p className="mt-3 text-muted-foreground">
              Our community coordinators will help you find the right group, event or resource. No question is too small.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-card text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <a
                  href="mailto:elchayautismorg@gmail.com"
                  className="text-sm font-semibold text-primary underline"
                >
                  elchayautismorg@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-card text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <a
                  href="https://wa.me/2347039593543"
                  className="text-sm font-semibold text-primary underline"
                >
                  WhatsApp +234 703 959 3543
                </a>
              </div>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
            >
              Contact the community team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
