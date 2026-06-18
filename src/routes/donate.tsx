import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Heart, CreditCard, Building2, Globe, Repeat, Copy, Check } from "lucide-react";
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

const PRESETS = [5000, 15000, 30000, 50000, 100000] as const;
const NGN = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 });

const BANK = {
  name: "Elchay Autism Therapy Services",
  bank: "Nomba MFB",
  account: "3235992773",
};

function Donate() {
  const [amount, setAmount] = useState<number>(15000);
  const [custom, setCustom] = useState("");
  const [freq, setFreq] = useState<"once" | "monthly">("monthly");
  const [method, setMethod] = useState<"card" | "bank" | "intl">("bank");
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const final = custom ? Math.max(100, Number(custom) || 0) : amount;
  const hours = Math.max(1, Math.round(final / 5000));

  const copy = (label: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      toast.success(`${label} copied`);
      setTimeout(() => setCopied(null), 1500);
    });
  };

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
                toast.success(`Thank you! ${NGN.format(final)} ${freq === "monthly" ? "/ month" : ""} pledged.`, {
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
                    ₦{p.toLocaleString()}
                  </button>
                ))}
                <input value={custom} onChange={(e) => setCustom(e.target.value.replace(/\D/g, ""))} placeholder="Other ₦" inputMode="numeric" className="w-32 rounded-full border border-input bg-background px-4 py-2.5 outline-none focus:border-accent" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{NGN.format(final)} {freq === "monthly" ? "every month" : "today"} ≈ {hours} hour(s) of therapy for one child.</p>
            </fieldset>

            <fieldset className="mt-8">
              <legend className="font-display text-xl font-semibold">Payment method</legend>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                <MethodBtn active={method === "bank"} onClick={() => setMethod("bank")} icon={<Building2 className="h-4 w-4" />}>Bank transfer</MethodBtn>
                <MethodBtn active={method === "card"} onClick={() => setMethod("card")} icon={<CreditCard className="h-4 w-4" />}>Card</MethodBtn>
                <MethodBtn active={method === "intl"} onClick={() => setMethod("intl")} icon={<Globe className="h-4 w-4" />}>International</MethodBtn>
              </div>

              {method === "bank" && (
                <div className="mt-5 rounded-2xl border border-border bg-secondary/40 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Transfer directly (Nigeria)</p>
                  <dl className="mt-3 grid gap-3 text-sm">
                    {[
                      { k: "Account name", v: BANK.name },
                      { k: "Bank name", v: BANK.bank },
                      { k: "Account number", v: BANK.account },
                    ].map((row) => (
                      <div key={row.k} className="flex items-center justify-between gap-3 rounded-xl bg-background px-4 py-3">
                        <div>
                          <dt className="text-xs uppercase tracking-wider text-muted-foreground">{row.k}</dt>
                          <dd className="mt-0.5 font-mono font-semibold text-foreground">{row.v}</dd>
                        </div>
                        <button type="button" onClick={() => copy(row.k, row.v)} className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:border-accent">
                          {copied === row.k ? <><Check className="h-3.5 w-3.5" /> Copied</> : <><Copy className="h-3.5 w-3.5" /> Copy</>}
                        </button>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-xs text-muted-foreground">After transferring, please send your proof of payment to <a className="text-primary underline" href="mailto:elchayautismorg@gmail.com">elchayautismorg@gmail.com</a> so we can issue your receipt.</p>
                </div>
              )}
              {method === "card" && (
                <p className="mt-4 text-sm text-muted-foreground">Card payments via Paystack / Flutterwave coming soon. For now, please use <button type="button" onClick={() => setMethod("bank")} className="font-semibold text-primary underline">bank transfer</button> or email us.</p>
              )}
              {method === "intl" && (
                <p className="mt-4 text-sm text-muted-foreground">For international wires (USD/GBP/EUR), email <a className="text-primary underline" href="mailto:elchayautismorg@gmail.com">elchayautismorg@gmail.com</a> and we will share full SWIFT instructions within 24 hours.</p>
              )}
            </fieldset>

            <fieldset className="mt-8">
              <legend className="font-display text-xl font-semibold">Your details</legend>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input required name="name" placeholder="Full name" className="rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
                <input required type="email" name="email" placeholder="Email (for receipt)" className="rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
              </div>
            </fieldset>

            <button disabled={busy} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-foreground disabled:opacity-60">
              <Heart className="h-5 w-5" /> {busy ? "Processing…" : `Pledge ${NGN.format(final)}${freq === "monthly" ? " / month" : ""}`}
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">Secured via TLS. We never store card details on our servers.</p>
          </form>

          <aside className="space-y-4">
            <div className="rounded-3xl bg-primary p-6 text-primary-foreground">
              <Repeat className="h-6 w-6 text-accent" />
              <h3 className="mt-3 font-display text-xl font-semibold">Join the Elchay Circle</h3>
              <p className="mt-2 text-sm opacity-90">A monthly gift of ₦15,000 covers a full week of speech therapy for one child. ₦50,000 sponsors a child's full assessment.</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Your impact</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>₦5,000 — one therapy hour</li>
                <li>₦15,000 — one week of speech therapy</li>
                <li>₦30,000 — sensory tools for one child</li>
                <li>₦50,000 — full developmental assessment</li>
                <li>₦100,000+ — a full therapy block (1 month)</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Other ways to give</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Corporate sponsorship — <a className="text-primary underline" href="mailto:elchayautismorg@gmail.com">elchayautismorg@gmail.com</a></li>
                <li>WhatsApp: <a className="text-primary underline" href="https://wa.me/2347039593543">+234 703 959 3543</a></li>
                <li>In-kind: therapy materials, books, sensory toys</li>
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
