import { WHATSAPP_URL } from "@/lib/contact";

const logo = "/images/logo.png";

const MAPS_EMBED =
  "https://maps.google.com/maps?q=Bitburger+Stra%C3%9Fe+2,+54636+Rittersdorf,+Germany&z=15&output=embed";
const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Bitburger+Stra%C3%9Fe+2,+54636+Rittersdorf,+Germany";

const navLinks = [
  { label: "Studio", href: "#studio" },
  { label: "Preise", href: "#leistungen" },
  { label: "Lash Styles", href: "#looks" },
  { label: "Ergebnisse", href: "#ergebnisse" },
  { label: "Über mich", href: "#about" },
  { label: "Kontakt", href: WHATSAPP_URL, external: true },
];

export function Footer() {
  return (
    <footer className="bg-[color:var(--cream)] border-t border-[color:var(--border)]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 py-14 grid md:grid-cols-3 gap-8 items-start">

        {/* Spalte 1 – Marke */}
        <div className="flex flex-col gap-4">
          <img src={logo} alt="BALI ÄSTHETIK" className="w-[100px] h-auto" />
          <div className="text-sm text-[color:var(--ink-soft)] leading-relaxed space-y-1">
            <p className="text-[color:var(--ink)] font-[500]">BALI ÄSTHETIK by Angelina Balizki</p>
            <p>Lashes &amp; Brows</p>
            <p>Bitburger Straße 2, 54636 Rittersdorf</p>
          </div>
        </div>

        {/* Spalte 2 – Navigation */}
        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-[color:var(--gold)] mb-5">
            Navigation
          </p>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Spalte 3 – Standort */}
        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-[color:var(--gold)] mb-5">
            Standort
          </p>
          <div className="text-sm text-[color:var(--ink-soft)] leading-relaxed space-y-1 mb-4">
            <p>Bitburger Straße 2<br />54636 Rittersdorf</p>
            <p className="text-[color:var(--ink-soft)]/70 text-xs tracking-wide pt-1">
              Nach Terminvereinbarung
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-[color:var(--border)] mb-3" style={{ width: "100%", maxWidth: "280px" }}>
            <iframe
              title="BALI ÄSTHETIK Standort"
              src={MAPS_EMBED}
              width="100%"
              height="160"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs tracking-[0.08em] text-[color:var(--gold)] hover:text-[color:var(--brown)] transition-colors duration-200"
          >
            Route öffnen <span aria-hidden>→</span>
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[color:var(--ink-soft)]">
          <p>© {new Date().getFullYear()} BALI ÄSTHETIK · Alle Rechte vorbehalten.</p>
          <a
            href="https://javera-studio.at"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-500"
            aria-label="Webdesign by JAVERA STUDIO"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[color:var(--ink)] group-hover:text-[color:var(--gold)] transition-colors duration-500 shrink-0"
              aria-hidden="true"
            >
              <path d="M16 2L28 8.5V23.5L16 30L4 23.5V8.5L16 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M16 2V30M4 8.5L28 23.5M28 8.5L4 23.5" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
            </svg>
            <span className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--ink-soft)] group-hover:text-[color:var(--ink)] transition-colors duration-500 font-light">
              Webdesign by <span className="tracking-[0.3em] font-normal">JAVERA STUDIO</span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
