import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Heart, Search } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
const elem4 = "/elc-elem-4.png";
const logoAsset = "/elchay-logo.png";
const elem1 = "/elc-elem-1.png";
const elem2 = "/elc-elem-2.png";
const elem3 = "/elc-elem-3.png";
const NAV = [
  { to: "/", label: "Home" },
  { to: "/community", label: "Community" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/get-help", label: "Get Help" },
  { to: "/stories", label: "Stories" },
  { to: "/resources", label: "Resources" },
  { to: "/events", label: "Events" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/partners", label: "Partners" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
      <img
        src={logoAsset}
        alt="Elchay Autism Initiative"
        className="h-10 w-auto object-contain sm:h-11"
        loading="eager"
        width="160"
        height="44"
      />
    </Link>
  );
}


function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:rounded focus:bg-primary focus:px-3 focus:py-1 focus:text-primary-foreground">Skip to content</a>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
          <Logo />
          <div className="flex items-center gap-3">
            <Link
              to="/donate"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition hover:brightness-95"
            >
              <Heart className="h-4 w-4" aria-hidden /> Donate
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-grid h-10 w-10 place-items-center rounded-md border border-border transition hover:bg-muted"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay nav */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-primary text-primary-foreground overflow-y-auto">
          {/* Overlay top bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-primary-foreground/15 shrink-0">
            <Link to="/" onClick={() => setOpen(false)}>
              <img src={logoAsset} alt="Elchay Autism Initiative" className="h-14 w-auto object-contain brightness-0 invert" />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="inline-grid h-10 w-10 place-items-center rounded-md border border-primary-foreground/30 transition hover:bg-primary-foreground/10"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          {/* Nav links */}
          <nav className="flex flex-1 flex-col justify-center px-8 py-8 lg:px-20" aria-label="Main navigation">
            <ul className="space-y-1">
              {[...NAV, { to: "/donate" as const, label: "Donate" }].map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 font-display text-2xl font-bold text-primary-foreground/70 transition hover:text-accent sm:text-3xl lg:text-4xl"
                    activeProps={{ className: "block py-2.5 font-display text-2xl font-bold text-accent sm:text-3xl lg:text-4xl" }}
                    activeOptions={{ exact: n.to === "/" }}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Overlay footer info */}
          <div className="border-t border-primary-foreground/15 px-8 py-5 text-sm opacity-70 shrink-0 lg:px-20">
            <p>elchayautismorg@gmail.com · +234 703 959 3543</p>
          </div>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <img
            src={logoAsset}
            alt="Elchay Autism Initiative"
            className="h-9 w-auto object-contain"
            loading="lazy"
            width="140"
            height="36"
          />
          <p className="mt-3 text-sm opacity-85">A community hub for families, professionals, volunteers, donors and partners advancing inclusion for autistic children and children with neurological conditions in Nigeria.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90">Join the Community</h3>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li><Link to="/community" className="hover:underline">Community Hub</Link></li>
            <li><Link to="/get-help" className="hover:underline">Get Support</Link></li>
            <li><Link to="/volunteer" className="hover:underline">Volunteer</Link></li>
            <li><Link to="/partners" className="hover:underline">Partner With Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/programs" className="hover:underline">Our Programs</Link></li>
            <li><Link to="/stories" className="hover:underline">Community Stories</Link></li>
            <li><Link to="/blog" className="hover:underline">News & Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider opacity-90">Stay In Touch</h3>
          <p className="mt-3 text-sm opacity-90"><a className="hover:underline" href="https://www.instagram.com/elchayautism_initiative" target="_blank" rel="noreferrer">@elchayautism_initiative</a></p>
          <p className="mt-1 text-sm opacity-90"><a className="hover:underline" href="mailto:elchayautismorg@gmail.com">elchayautismorg@gmail.com</a></p>
          <p className="mt-1 text-sm opacity-90">WhatsApp: <a className="hover:underline" href="https://wa.me/2347039593543">+234 703 959 3543</a></p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-4 text-center text-xs opacity-75">
        © {new Date().getFullYear()} Elchay Autism Initiative. All rights reserved.
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-dvh flex-col">
      {/* Site-wide brand pattern background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <img src={elem1} alt="" className="absolute -left-24 top-24 w-[28rem] opacity-[0.07] rotate-[-12deg]" />
        <img src={elem4} alt="" className="absolute -right-32 top-[40vh] w-[34rem] opacity-[0.06] rotate-[8deg]" />
        <img src={elem1} alt="" className="absolute left-[20%] top-[110vh] w-[22rem] opacity-[0.05] rotate-[24deg]" />
        <img src={elem4} alt="" className="absolute -left-20 top-[180vh] w-[30rem] opacity-[0.06] rotate-[-18deg]" />
        <img src={elem1} alt="" className="absolute right-[5%] top-[240vh] w-[26rem] opacity-[0.06] rotate-[15deg]" />
        <img src={elem4} alt="" className="absolute -right-24 top-[320vh] w-[32rem] opacity-[0.05] rotate-[-6deg]" />
      </div>
      <Header />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
      <Toaster richColors closeButton position="top-right" />
    </div>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-secondary/60 to-background">
      <div className="mx-auto max-w-5xl px-4 py-14 lg:px-6 lg:py-20">
        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>}
        <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">{title}</h1>
        {lead && <p className="mt-4 max-w-3xl text-size-lg text-muted-foreground">{lead}</p>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16 ${className}`}>{children}</section>;
}

export function Search_Stub() { return <Search />; }
