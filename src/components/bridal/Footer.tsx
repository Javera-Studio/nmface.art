import { WHATSAPP_URL, BRAND_NAME, CONTACT_EMAIL, INSTAGRAM_URL } from "@/lib/contact";

const MailIcon = ({ size = 15 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

const InstagramIcon = ({ size = 15 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

const WhatsAppIcon = ({ size = 15 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export function Footer() {
  return (
    <footer style={{ backgroundColor: "rgba(200, 177, 182, 1)" }}>

      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden px-6 pt-8 pb-6">

        {/* Logo */}
        <img src="/images/logotransparent.png" alt="NM Faceart" className="h-16 w-auto mb-3" />

        {/* Tagline */}
        <p className="text-[16px] text-white/75 leading-relaxed mb-6 max-w-[280px]">
          Mobiles Brautstyling für moderne, romantische Bräute – mit Ruhe, Zeit und Persönlichkeit.
        </p>

        {/* Kontakt */}
        <p className="text-[14px] tracking-[0.38em] uppercase text-white/55 mb-3">Kontakt</p>
        <ul className="space-y-2 text-[17px] text-white/80 mb-6">
          <li className="text-[15px] text-white/60">Heilbronn &amp; Umgebung · Mobiler Service</li>
          <li>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
              <MailIcon size={18} />{CONTACT_EMAIL}
            </a>
          </li>
          <li>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors">
              <InstagramIcon size={18} />@nmface.art
            </a>
          </li>
          <li>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors">
              <WhatsAppIcon size={18} />Direkt kontaktieren
            </a>
          </li>
        </ul>

        {/* Menü */}
        <p className="text-[14px] tracking-[0.38em] uppercase text-white/55 mb-3">Menü</p>
        <ul className="space-y-2 text-[17px] text-white/80 mb-8">
          <li><a href="#about" className="hover:text-white transition-colors">Über mich</a></li>
          <li><a href="#looks" className="hover:text-white transition-colors">Hochzeitslooks</a></li>
          <li><a href="#ablauf" className="hover:text-white transition-colors">Ablauf</a></li>
          <li><a href="#leistungen" className="hover:text-white transition-colors">Leistungen</a></li>
          <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
        </ul>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-4 text-[12px] text-white/45 flex flex-col gap-1">
          <p>© {new Date().getFullYear()} {BRAND_NAME} · Alle Rechte vorbehalten.</p>
          <p>
            Webdesign by{" "}
            <a href="https://javera-studio.at" target="_blank" rel="noopener noreferrer" className="text-white/60 tracking-[0.14em] uppercase hover:text-white transition-colors">
              JAVERA STUDIO
            </a>
          </p>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-6xl px-10 py-14 grid md:grid-cols-3 gap-12 md:gap-20">

          {/* Col 1: Brand */}
          <div>
            <img src="/images/logotransparent.png" alt="NM Faceart" className="h-[120px] w-auto mb-5" />
            <p className="text-[14px] text-white/70 max-w-[230px] leading-relaxed">
              Mobiles Brautstyling für moderne, romantische Bräute – mit Ruhe, Zeit und Persönlichkeit.
            </p>
          </div>

          {/* Col 2: Kontakt */}
          <div>
            <p className="text-[13px] tracking-[0.42em] uppercase text-white/60 mb-6">Kontakt</p>
            <ul className="space-y-4 text-[14px] text-white/75 leading-relaxed">
              <li>Heilbronn &amp; Umgebung · Mobiler Service</li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <MailIcon />{CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <InstagramIcon />@nmface.art
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <WhatsAppIcon />Direkt kontaktieren
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Menü */}
          <div>
            <p className="text-[13px] tracking-[0.42em] uppercase text-white/60 mb-6">Menü</p>
            <ul className="space-y-4 text-[14px] text-white/75">
              <li><a href="#about" className="hover:text-white transition-colors">Über mich</a></li>
              <li><a href="#looks" className="hover:text-white transition-colors">Hochzeitslooks</a></li>
              <li><a href="#ablauf" className="hover:text-white transition-colors">Ablauf</a></li>
              <li><a href="#leistungen" className="hover:text-white transition-colors">Leistungen</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20">
          <div className="mx-auto max-w-6xl px-10 py-5 text-[13px] text-white/50 flex flex-col sm:flex-row gap-2 justify-between items-center">
            <p>© {new Date().getFullYear()} {BRAND_NAME} · Alle Rechte vorbehalten.</p>
            <p>
              Webdesign by{" "}
              <a href="https://javera-studio.at" target="_blank" rel="noopener noreferrer" className="text-white/70 tracking-[0.18em] uppercase hover:text-white transition-colors duration-300">
                JAVERA STUDIO
              </a>
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
