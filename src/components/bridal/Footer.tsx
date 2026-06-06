import { WHATSAPP_URL, BRAND_NAME, CONTACT_EMAIL, STUDIO_LOCATION } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-[color:var(--cream)] border-t border-[color:var(--border)]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-2xl text-[color:var(--ink)]">{BRAND_NAME}</p>
          <p className="mt-3 text-sm text-[color:var(--ink-soft)] max-w-xs leading-relaxed">
            Mobiles Brautstyling für moderne, romantische Bräute – mit Ruhe, Zeit und Persönlichkeit.
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-[color:var(--rose)] mb-4">Kontakt</p>
          <ul className="space-y-2 text-sm text-[color:var(--ink-soft)]">
            <li>{STUDIO_LOCATION}</li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[color:var(--ink)] transition-colors">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--ink)] transition-colors">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-[color:var(--rose)] mb-4">Menü</p>
          <ul className="space-y-2 text-sm text-[color:var(--ink-soft)]">
            <li><a href="#about" className="hover:text-[color:var(--ink)] transition-colors">Über mich</a></li>
            <li><a href="#looks" className="hover:text-[color:var(--ink)] transition-colors">Hochzeitslooks</a></li>
            <li><a href="#ablauf" className="hover:text-[color:var(--ink)] transition-colors">Ablauf</a></li>
            <li><a href="#leistungen" className="hover:text-[color:var(--ink)] transition-colors">Leistungen</a></li>
            <li><a href="#faq" className="hover:text-[color:var(--ink)] transition-colors">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 py-6 text-xs text-[color:var(--ink-soft)] flex flex-col sm:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} {BRAND_NAME} · Alle Rechte vorbehalten.</p>
          <p className="font-script text-lg text-[color:var(--rose)] leading-none">made with love</p>
        </div>
      </div>
    </footer>
  );
}