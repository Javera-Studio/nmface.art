import heroImg from "@/assets/hero-bride.jpg";
import { WHATSAPP_URL } from "@/lib/contact";

export function Hero() {
  return (
    <section id="top" className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Braut bei Sonnenuntergang in einem eleganten Hochzeitskleid"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--cream)]/30 via-transparent to-[color:var(--cream)]/60" />
      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-10 pb-16 md:pb-0">
          <div className="max-w-2xl md:bg-[color:var(--cream)]/70 md:backdrop-blur-sm md:p-12 md:rounded-sm">
            <p className="text-[11px] tracking-[0.38em] uppercase text-[color:var(--rose)] mb-6">
              Bridal Styling · Wien
            </p>
            <h1 className="font-display text-[42px] sm:text-[56px] md:text-[64px] leading-[1.05] text-[color:var(--ink)]">
              Natürliches Brautstyling für deinen schönsten Tag
            </h1>
            <p
              className="font-script text-3xl md:text-4xl mt-5 leading-none"
              style={{ color: "var(--script-rose)" }}
            >
              you are beautiful
            </p>
            <p className="mt-7 text-base md:text-lg text-[color:var(--ink-soft)] leading-relaxed max-w-xl">
              Mobile Brautstylings mit individueller Beratung, Probetermin und persönlicher Begleitung für einen entspannten Hochzeitstag.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--rose)] text-white h-12 px-8 text-[13px] tracking-[0.16em] uppercase hover:bg-[color:var(--ink)] transition-colors duration-500"
              >
                Termin anfragen
              </a>
              <a
                href="#ablauf"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--ink)]/30 text-[color:var(--ink)] h-12 px-8 text-[13px] tracking-[0.16em] uppercase hover:border-[color:var(--rose)] hover:text-[color:var(--rose)] transition-colors duration-500"
              >
                Ablauf ansehen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}