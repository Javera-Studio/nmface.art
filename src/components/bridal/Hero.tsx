import heroImg from "@/assets/hero-bride.png";
import { WHATSAPP_URL } from "@/lib/contact";

export function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Braut bei Sonnenuntergang in einem eleganten Hochzeitskleid"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "95% top", filter: "brightness(1.12)" }}
      />

      {/* Warm soft overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(255, 245, 240, 0.15)" }} />

      {/* Subtle left-side gradient behind headline text */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(245, 238, 228, 0.38) 0%, rgba(245, 238, 228, 0.18) 45%, transparent 70%)" }} />

      {/* Minimal bottom gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Content — lower-left, directly on image */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 pb-16 sm:pb-20 md:pb-24">
          <div className="max-w-2xl space-y-5">
            <p
              className="font-script text-[36px] sm:text-[44px] leading-none"
              style={{ color: "rgba(180, 148, 156, 0.88)" }}
            >
              you are beautiful
            </p>

            <h1 className="font-display text-[44px] sm:text-[60px] md:text-[72px] leading-[1.04] text-white">
              Natürliches Brautstyling für deinen schönsten Tag
            </h1>

            <p className="text-[15px] sm:text-base text-white/70 tracking-wide pt-1">
              Mobile Brautstylings in Heilbronn &amp; Umgebung
            </p>

            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/90 text-[color:var(--ink)] h-12 px-8 text-[13px] tracking-[0.16em] uppercase hover:bg-white transition-colors duration-500"
              >
                Brautstyling anfragen
              </a>
              <a
                href="#ablauf"
                className="inline-flex items-center justify-center rounded-full border border-white/40 text-white h-12 px-8 text-[13px] tracking-[0.16em] uppercase hover:border-white/80 transition-colors duration-500"
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