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
    <header
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        backgroundColor: "rgba(200, 177, 182, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 2px 16px 0 rgba(95, 85, 84, 0.13)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 h-[90px] flex items-center justify-between gap-6">
        <a href="#top" aria-label={BRAND_NAME}>
          <img src="/images/logotransparent.png" alt={BRAND_NAME} className="h-28 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[12px] tracking-[0.22em] uppercase">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/85 hover:text-white transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white h-11 px-6 text-[13px] tracking-[0.12em] uppercase transition-colors duration-300 hover:bg-white/90"
          style={{ color: "#5F5552" }}
        >
          Brautstyling anfragen
        </a>
      </div>
    </header>
  );
}