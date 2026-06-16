import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/get-help")({
  head: () => ({
    meta: [
      { title: "Get Help — Elchay Autism Initiative" },
      { name: "description", content: "Request support or refer a child for assessment and care. No family is turned away." },
      { property: "og:title", content: "Get Help" },
      { property: "og:description", content: "Request support or refer a child." },
    ],
  }),
  component: GetHelp,
});

function GetHelp() {
  const [tab, setTab] = useState<"support" | "refer">("support");
  return (
    <>
      <PageHero eyebrow="Get Help" title="We're here for your family." lead="Whether you're a parent seeking assessment or a professional referring a child, we'll get back to you within two working days." />
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-2 gap-1 rounded-full bg-secondary p-1">
            {(["support", "refer"] as const).map((k) => (
              <button key={k} onClick={() => setTab(k)} className={`rounded-full py-2.5 text-sm font-semibold transition ${tab === k ? "bg-primary text-primary-foreground" : "text-foreground"}`}>
                {k === "support" ? "Request Support" : "Refer a Child"}
              </button>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-border bg-card p-6 lg:p-8">
            {tab === "support" ? <RequestForm /> : <ReferralForm />}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Prefer to talk? WhatsApp us at <a className="text-primary underline" href="https://wa.me/2347039593543">+234 703 959 3543</a> · or email <a className="text-primary underline" href="mailto:elchayautismorg@gmail.com">elchayautismorg@gmail.com</a>.</p>
        </div>
      </Section>
    </>
  );
}

function RequestForm() {
  return (
    <BaseForm
      title="Request support"
      fields={[
        { name: "parent", label: "Parent / Caregiver name", required: true },
        { name: "child", label: "Child's first name & age", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Phone / WhatsApp", required: true },
        { name: "city", label: "City / State" },
        { name: "needs", label: "Tell us a little about what you're looking for", textarea: true, required: true },
      ]}
      success="Thanks — our family-support team will be in touch within 2 working days."
    />
  );
}

function ReferralForm() {
  return (
    <BaseForm
      title="Refer a child"
      fields={[
        { name: "referrer", label: "Your name", required: true },
        { name: "role", label: "Your role (teacher, doctor, social worker…)", required: true },
        { name: "org", label: "Organisation" },
        { name: "email", label: "Your email", type: "email", required: true },
        { name: "child", label: "Child's first name & age", required: true },
        { name: "consent", label: "Has the family consented to this referral?", required: true },
        { name: "notes", label: "Any clinical or contextual notes", textarea: true },
      ]}
      success="Referral received. We will reach out to the family after confirming consent."
    />
  );
}

type Field = { name: string; label: string; type?: string; required?: boolean; textarea?: boolean };

function BaseForm({ title, fields, success }: { title: string; fields: Field[]; success: string }) {
  const [busy, setBusy] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setBusy(true);
        const form = e.target as HTMLFormElement;
        const fd = new FormData(form);
        const lines: string[] = [];
        fields.forEach((f) => lines.push(`${f.label}: ${String(fd.get(f.name) ?? "")}`));
        const body = `${title} request from the Elchay website:\n\n${lines.join("\n")}`;
        const href = `mailto:elchayautismorg@gmail.com?subject=${encodeURIComponent(title + " — Elchay website")}&body=${encodeURIComponent(body)}`;
        window.location.href = href;
        setTimeout(() => {
          toast.success(success, { description: "Your request was sent to elchayautismorg@gmail.com." });
          form.reset();
          setBusy(false);
        }, 400);
      }}
    >
      <h2 className="font-display text-2xl font-bold">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">Submissions are sent to <span className="font-semibold text-foreground">elchayautismorg@gmail.com</span>.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map((f) => (
          <label key={f.name} className={`block ${f.textarea ? "sm:col-span-2" : ""}`}>
            <span className="mb-1 block text-sm font-medium">{f.label}{f.required && <span className="text-destructive"> *</span>}</span>
            {f.textarea ? (
              <textarea name={f.name} required={f.required} rows={4} className="w-full rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
            ) : (
              <input name={f.name} type={f.type ?? "text"} required={f.required} className="w-full rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
            )}
          </label>
        ))}
      </div>
      <button disabled={busy} className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground disabled:opacity-60">
        {busy ? "Opening…" : "Submit"}
      </button>
    </form>
  );
}
