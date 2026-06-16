import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import volunteersImg from "@/assets/volunteers.jpg";
import { PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Elchay Autism Initiative" },
      { name: "description", content: "Lend your skills to therapy days, events, fundraising and inclusive education." },
      { property: "og:title", content: "Volunteer With Elchay" },
      { property: "og:description", content: "Roles for clinicians, teachers, creatives and community members." },
    ],
  }),
  component: Volunteer,
});

const ROLES = [
  { t: "Therapy assistant", b: "Support our therapists during weekly sessions. Training provided." },
  { t: "Event volunteer", b: "Help run awareness walks, parent days and community fairs." },
  { t: "Creative & content", b: "Photography, design, writing and social media." },
  { t: "Teacher trainer", b: "Co-deliver inclusive-classroom workshops to schools." },
];

function Volunteer() {
  const [busy, setBusy] = useState(false);
  return (
    <>
      <PageHero eyebrow="Volunteer" title="Bring your hands, your heart, your skill." lead="There is a role for every kind of helper — clinical or not. We onboard and train every volunteer." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <img src={volunteersImg} alt="Smiling volunteers at a community event" loading="lazy" width={1200} height={900} className="h-72 w-full rounded-3xl object-cover" />
            <h2 className="mt-8 font-display text-2xl font-bold">Open roles</h2>
            <ul className="mt-4 space-y-3">
              {ROLES.map((r) => (
                <li key={r.t} className="rounded-2xl border border-border bg-card p-4">
                  <p className="font-display text-lg font-semibold">{r.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{r.b}</p>
                </li>
              ))}
            </ul>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setBusy(true);
              const form = e.target as HTMLFormElement;
              const fd = new FormData(form);
              const body = [
                `Full name: ${fd.get("name")}`,
                `Email: ${fd.get("email")}`,
                `Phone: ${fd.get("phone")}`,
                `City: ${fd.get("city")}`,
                `Role of interest: ${fd.get("role")}`,
                "",
                `About: ${fd.get("about")}`,
              ].join("\n");
              const href = `mailto:elchayautismorg@gmail.com?subject=${encodeURIComponent("Volunteer application — Elchay website")}&body=${encodeURIComponent(body)}`;
              window.location.href = href;
              setTimeout(() => {
                toast.success("Thank you for volunteering!", { description: "Your application was sent to elchayautismorg@gmail.com." });
                form.reset();
                setBusy(false);
              }, 400);
            }}
            className="rounded-3xl border border-border bg-card p-6 lg:p-8"
          >
            <h2 className="font-display text-2xl font-bold">Apply to volunteer</h2>
            <p className="mt-1 text-sm text-muted-foreground">Applications are sent to <span className="font-semibold text-foreground">elchayautismorg@gmail.com</span>.</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Full name" required />
              <Field name="email" type="email" label="Email" required />
              <Field name="phone" label="Phone" />
              <Field name="city" label="City" />
              <label className="sm:col-span-2">
                <span className="mb-1 block text-sm font-medium">Role of interest *</span>
                <select required name="role" className="w-full rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent">
                  <option value="">Choose a role…</option>
                  {ROLES.map((r) => <option key={r.t}>{r.t}</option>)}
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1 block text-sm font-medium">Tell us about yourself</span>
                <textarea name="about" rows={4} className="w-full rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
              </label>
            </div>
            <button disabled={busy} className="mt-5 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground disabled:opacity-60">{busy ? "Opening…" : "Submit application"}</button>
          </form>
        </div>
      </Section>
    </>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium">{label}{required && <span className="text-destructive"> *</span>}</span>
      <input name={name} type={type} required={required} className="w-full rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
    </label>
  );
}
