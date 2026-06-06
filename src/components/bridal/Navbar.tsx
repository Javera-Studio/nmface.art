import { WHATSAPP_URL, BRAND_NAME } from "@/lib/contact";

const links = [
  { href: "#about", label: "Über mich" },
  { href: "#looks", label: "Hochzeitslooks" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#stimmen", label: "Stimmen" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--cream)]/85 border-b border-[color:var(--border)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 h-20 flex items-center justify-between gap-6">
        <a href="#top" className="font-display text-xl tracking-[0.08em] text-[color:var(--ink)]">
          {BRAND_NAME}
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[12px] tracking-[0.22em] uppercase text-[color:var(--ink-soft)]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[color:var(--rose)] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[color:var(--rose)] text-white h-11 px-6 text-[13px] tracking-[0.12em] uppercase hover:bg-[color:var(--ink)] transition-colors duration-500"
        >
          Termin anfragen
        </a>
      </div>
    </header>
  );
}