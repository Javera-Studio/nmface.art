import { WHATSAPP_URL, BRAND_NAME, CONTACT_EMAIL, INSTAGRAM_URL } from "@/lib/contact";

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[color:var(--cream)] border-t border-[color:var(--rose)]/20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-12 grid md:grid-cols-3 gap-8 md:gap-14">

        {/* Col 1: Brand */}
        <div>
          <img src="/images/logoneu.png" alt="NM Faceart" className="h-20 w-auto mb-4" />
          <p className="text-[12px] text-[color:var(--ink-soft)] max-w-[220px] leading-relaxed">
            Mobiles Brautstyling für moderne, romantische Bräute – mit Ruhe, Zeit und Persönlichkeit.
          </p>
        </div>

        {/* Col 2: Kontakt */}
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--rose)] mb-5">Kontakt</p>
          <ul className="space-y-3 text-[12px] text-[color:var(--ink-soft)]">
            <li>Heilbronn &amp; Umgebung · Mobiler Service</li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 hover:text-[color:var(--ink)] transition-colors"
              >
                <MailIcon />
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[color:var(--ink)] transition-colors"
              >
                <InstagramIcon />
                @nmface.art
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[color:var(--ink)] transition-colors"
              >
                <WhatsAppIcon />
                Direkt kontaktieren
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Menü */}
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--rose)] mb-5">Menü</p>
          <ul className="space-y-3 text-[12px] text-[color:var(--ink-soft)]">
            <li><a href="#about" className="hover:text-[color:var(--ink)] transition-colors">Über mich</a></li>
            <li><a href="#looks" className="hover:text-[color:var(--ink)] transition-colors">Hochzeitslooks</a></li>
            <li><a href="#ablauf" className="hover:text-[color:var(--ink)] transition-colors">Ablauf</a></li>
            <li><a href="#leistungen" className="hover:text-[color:var(--ink)] transition-colors">Leistungen</a></li>
            <li><a href="#faq" className="hover:text-[color:var(--ink)] transition-colors">FAQ</a></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-[color:var(--rose)]/20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 py-5 text-[11px] text-[color:var(--ink-soft)] flex flex-col sm:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} {BRAND_NAME} · Alle Rechte vorbehalten.</p>
          <p>
            Webdesign by{" "}
            <a
              href="https://javera-studio.at"
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-[0.12em] uppercase hover:text-[color:var(--ink)] transition-colors"
            >
              JAVERA STUDIO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
