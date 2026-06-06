import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        scrolled
          ? "backdrop-blur-md bg-[color:var(--cream)]/90 border-b border-[color:var(--border)] shadow-soft-sm"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 h-20 flex items-center justify-between gap-6">
        <a
          href="#top"
          className={[
            "font-display text-xl tracking-[0.08em] transition-colors duration-500",
            scrolled ? "text-[color:var(--ink)]" : "text-white",
          ].join(" ")}
        >
          {BRAND_NAME}
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[12px] tracking-[0.22em] uppercase">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={[
                "transition-colors duration-300 hover:text-[color:var(--rose)]",
                scrolled ? "text-[color:var(--ink-soft)]" : "text-white/80",
              ].join(" ")}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={[
            "inline-flex items-center justify-center rounded-full h-11 px-6 text-[13px] tracking-[0.12em] uppercase transition-all duration-500",
            scrolled
              ? "bg-[color:var(--rose)] text-white hover:bg-[color:var(--ink)]"
              : "bg-white/20 text-white border border-white/40 hover:bg-white/30",
          ].join(" ")}
        >
          Termin anfragen
        </a>
      </div>
    </header>
  );
}