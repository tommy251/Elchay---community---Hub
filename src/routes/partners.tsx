import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { PageHero, Section } from "@/components/site/Layout";
import { PARTNERS } from "@/lib/site-data";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Sponsors — Elchay Autism Initiative" },
      { name: "description", content: "Partner with Elchay — corporate sponsorship, school partnerships and foundation grants." },
      { property: "og:title", content: "Partners & Sponsors" },
      { property: "og:description", content: "Partner with Elchay Autism Initiative." },
    ],
  }),
  component: Partners,
});

const TIERS = [
  { t: "Friend", a: "₦500,000+", b: "Logo on our website + quarterly impact report" },
  { t: "Champion", a: "₦2,500,000+", b: "Sponsor a therapy cohort + naming opportunity" },
  { t: "Catalyst", a: "₦10,000,000+", b: "Co-design a program with our clinical team" },
];

function Partners() {
  const [busy, setBusy] = useState(false);
  return (
    <>
      <PageHero eyebrow="Partners & Sponsors" title="Together we go further." lead="We partner with corporates, foundations, schools and healthcare providers to deliver care at scale." />
      <Section>
        <h2 className="font-display text-2xl font-bold">Our current partners</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((p) => (
            <li key={p} className="rounded-2xl border border-border bg-card px-5 py-4 text-sm font-semibold text-foreground">{p}</li>
          ))}
        </ul>
      </Section>
      <Section className="!pt-0">
        <h2 className="font-display text-2xl font-bold">Sponsorship tiers</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {TIERS.map((t) => (
            <div key={t.t} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{t.t}</p>
              <p className="mt-2 font-display text-3xl font-bold">{t.a}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.b}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="!pt-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setBusy(true);
            setTimeout(() => {
              toast.success("Thanks — our partnerships team will email you within 3 working days.");
              (e.target as HTMLFormElement).reset();
              setBusy(false);
            }, 600);
          }}
          className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-6 lg:p-8"
        >
          <h2 className="font-display text-2xl font-bold">Start a partnership conversation</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <input required name="name" placeholder="Your name" className="rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
            <input required name="org" placeholder="Organisation" className="rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
            <input required type="email" name="email" placeholder="Work email" className="rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
            <input name="phone" placeholder="Phone" className="rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
            <textarea name="msg" rows={4} placeholder="Tell us about your partnership idea" className="rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent sm:col-span-2" />
          </div>
          <button disabled={busy} className="mt-5 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground disabled:opacity-60">{busy ? "Sending…" : "Send enquiry"}</button>
        </form>
      </Section>
    </>
  );
}
