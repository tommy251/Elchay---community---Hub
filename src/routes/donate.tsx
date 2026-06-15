import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Heart, CreditCard, Building2, Globe, Repeat } from "lucide-react";
import { PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate to Support a Child — Elchay Autism Initiative" },
      { name: "description", content: "Your gift funds assessment, therapy, education and family support. Every donation is receipted." },
      { property: "og:title", content: "Donate — Elchay" },
      { property: "og:description", content: "Donate to support a child with autism." },
    ],
  }),
  component: Donate,
});

const PRESETS = [10, 25, 50, 100, 250] as const;

function Donate() {
  const [amount, setAmount] = useState<number>(50);
  const [custom, setCustom] = useState("");
  const [freq, setFreq] = useState<"once" | "monthly">("monthly");
  const [method, setMethod] = useState<"card" | "bank" | "intl">("card");
  const [busy, setBusy] = useState(false);

  const final = custom ? Math.max(1, Number(custom) || 0) : amount;

  return (
    <>
      <PageHero eyebrow="Donate" title="Your gift becomes therapy, school fees and hope." lead="Every gift — large or small, one-time or monthly — is acknowledged with an automatic receipt." />
      <Section>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.4fr_1fr]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setBusy(true);
              setTimeout(() => {
                toast.success(`Thank you! $${final} ${freq === "monthly" ? "/ month" : ""} pledged.`, {
                  description: "A receipt has been emailed to you. (Demo confirmation)",
                });
                setBusy(false);
              }, 800);
            }}
            className="rounded-3xl border border-border bg-card p-6 lg:p-8"
          >
            <fieldset>
              <legend className="font-display text-xl font-semibold">Choose your gift</legend>
              <div className="mt-4 grid grid-cols-2 gap-2 rounded-full bg-secondary p-1 sm:max-w-sm">
                {(["monthly", "once"] as const).map((f) => (
                  <button type="button" key={f} onClick={() => setFreq(f)} className={`rounded-full py-2 text-sm font-semibold capitalize ${freq === f ? "bg-primary text-primary-foreground" : ""}`}>
                    {f === "monthly" ? "Monthly" : "One-time"}
                  </button>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {PRESETS.map((p) => (
                  <button type="button" key={p} onClick={() => { setAmount(p); setCustom(""); }} className={`rounded-full border px-5 py-2.5 font-semibold ${!custom && amount === p ? "border-accent bg-accent text-accent-foreground" : "border-border bg-background"}`}>
                    ${p}
                  </button>
                ))}
                <input value={custom} onChange={(e) => setCustom(e.target.value.replace(/\D/g, ""))} placeholder="Other" inputMode="numeric" className="w-28 rounded-full border border-input bg-background px-4 py-2.5 outline-none focus:border-accent" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">${final} {freq === "monthly" ? "every month" : "today"} ≈ {Math.max(1, Math.round(final / 10))} hour(s) of therapy.</p>
            </fieldset>

            <fieldset className="mt-8">
              <legend className="font-display text-xl font-semibold">Payment method</legend>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                <MethodBtn active={method === "card"} onClick={() => setMethod("card")} icon={<CreditCard className="h-4 w-4" />}>Card</MethodBtn>
                <MethodBtn active={method === "bank"} onClick={() => setMethod("bank")} icon={<Building2 className="h-4 w-4" />}>Bank transfer</MethodBtn>
                <MethodBtn active={method === "intl"} onClick={() => setMethod("intl")} icon={<Globe className="h-4 w-4" />}>International</MethodBtn>
              </div>
            </fieldset>

            <fieldset className="mt-8">
              <legend className="font-display text-xl font-semibold">Your details</legend>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input required name="name" placeholder="Full name" className="rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
                <input required type="email" name="email" placeholder="Email (for receipt)" className="rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
              </div>
            </fieldset>

            <button disabled={busy} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-foreground disabled:opacity-60">
              <Heart className="h-5 w-5" /> {busy ? "Processing…" : `Donate $${final}${freq === "monthly" ? " / month" : ""}`}
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">Secured via TLS. We never store card details on our servers.</p>
          </form>

          <aside className="space-y-4">
            <div className="rounded-3xl bg-primary p-6 text-primary-foreground">
              <Repeat className="h-6 w-6 text-accent" />
              <h3 className="mt-3 font-display text-xl font-semibold">Join the Elchay Circle</h3>
              <p className="mt-2 text-sm opacity-90">A monthly gift of $10 / ₦10,000 covers a full week of speech therapy for one child.</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Other ways to give</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Corporate sponsorship — <a className="text-primary underline" href="mailto:partners@elchayautism.org">partners@elchayautism.org</a></li>
                <li>Bank transfer (Nigeria): GTBank · 0123456789 · Elchay Autism Initiative</li>
                <li>International wire — request details by email</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function MethodBtn({ active, onClick, icon, children }: { active: boolean; onClick: () => void; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold ${active ? "border-accent bg-accent text-accent-foreground" : "border-border bg-background"}`}>
      {icon} {children}
    </button>
  );
}
