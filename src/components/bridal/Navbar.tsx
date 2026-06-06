import { useState } from "react";
import { WHATSAPP_URL, BRAND_NAME } from "@/lib/contact";

const links = [
  { href: "#about", label: "Über mich" },
  { href: "#looks", label: "Hochzeitslooks" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#stimmen", label: "Bewertungen" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40"
        style={{
          backgroundColor: "rgba(200, 177, 182, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 2px 16px 0 rgba(95, 85, 84, 0.13)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 h-[70px] flex items-center justify-between gap-6">
          <a href="#top" aria-label={BRAND_NAME}>
            <img src="/images/logotransparent.png" alt={BRAND_NAME} className="h-[89px] md:h-[102px] w-auto" />
          </a>

          {/* Desktop nav */}
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

          {/* Desktop CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-white h-11 px-6 text-[13px] tracking-[0.12em] uppercase transition-colors duration-300 hover:bg-white/90"
            style={{ color: "#5F5552" }}
          >
            Brautstyling anfragen
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-8"
            onClick={() => setOpen(true)}
            aria-label="Menü öffnen"
          >
            <span className="block w-6 h-[1.5px] bg-white rounded-full" />
            <span className="block w-5 h-[1.5px] bg-white rounded-full" />
            <span className="block w-4 h-[1.5px] bg-white rounded-full" />
          </button>
        </div>
      </header>

      {/* Backdrop — closes menu on outside tap */}
      {open && (
        <div
          className="fixed inset-0 z-[49] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile dropdown menu */}
      <div
        className={`fixed top-[70px] left-0 right-0 z-50 md:hidden transition-all duration-300 ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
        style={{ backgroundColor: "rgba(200, 177, 182, 0.97)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
      >
        <nav className="flex flex-col gap-5 px-8 pt-6 pb-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-[22px] text-white/90 hover:text-white transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="px-8 pb-7">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block w-full text-center rounded-full bg-white py-3.5 text-[12px] tracking-[0.2em] uppercase transition-colors hover:bg-white/90"
            style={{ color: "#5F5552" }}
          >
            Brautstyling anfragen
          </a>
        </div>
      </div>
    </>
  );
}
