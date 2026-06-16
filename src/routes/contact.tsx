import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Elchay Autism Initiative" },
      { name: "description", content: "Reach our team by email, phone, WhatsApp, or send a message through the form." },
      { property: "og:title", content: "Contact Elchay" },
      { property: "og:description", content: "Get in touch with our team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [busy, setBusy] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="We'd love to hear from you." lead="For clinical enquiries, please use Get Help. For everything else, this is the place." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-4">
            <Card icon={<Mail className="h-5 w-5" />} title="Email" body={<a className="text-primary underline" href="mailto:elchayautismorg@gmail.com">elchayautismorg@gmail.com</a>} />
            <Card icon={<Phone className="h-5 w-5" />} title="Phone" body={<a className="text-primary underline" href="tel:+2347039593543">+234 703 959 3543</a>} />
            <Card icon={<MessageCircle className="h-5 w-5" />} title="WhatsApp" body={<a className="text-primary underline" href="https://wa.me/2347039593543">Chat on WhatsApp</a>} />
            <Card icon={<MapPin className="h-5 w-5" />} title="Visit" body="Elchay Centre, Lagos, Nigeria" />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setBusy(true);
              const fd = new FormData(e.target as HTMLFormElement);
              const name = String(fd.get("name") ?? "");
              const email = String(fd.get("email") ?? "");
              const subject = String(fd.get("subject") ?? "Message from Elchay website");
              const msg = String(fd.get("msg") ?? "");
              const body = `Name: ${name}\nEmail: ${email}\n\n${msg}`;
              const href = `mailto:elchayautismorg@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              window.location.href = href;
              setTimeout(() => {
                toast.success("Opening your email app", { description: "Your message will be sent to elchayautismorg@gmail.com." });
                (e.target as HTMLFormElement).reset();
                setBusy(false);
              }, 400);
            }}
            className="rounded-3xl border border-border bg-card p-6 lg:p-8"
          >
            <h2 className="font-display text-2xl font-bold">Send a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">Your message will be sent to <span className="font-semibold text-foreground">elchayautismorg@gmail.com</span>.</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Your name" className="rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
              <input required type="email" name="email" placeholder="Email" className="rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent" />
              <input name="subject" placeholder="Subject" className="rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent sm:col-span-2" />
              <textarea required name="msg" rows={6} placeholder="Your message" className="rounded-xl border border-input bg-background px-3 py-2.5 outline-none focus:border-accent sm:col-span-2" />
            </div>
            <button disabled={busy} className="mt-5 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground disabled:opacity-60">{busy ? "Opening…" : "Send message"}</button>
          </form>
        </div>
      </Section>
    </>
  );
}

function Card({ icon, title, body }: { icon: React.ReactNode; title: string; body: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">{icon}</div>
      <div className="min-w-0">
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}
