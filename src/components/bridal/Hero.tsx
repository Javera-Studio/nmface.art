import heroImg from "@/assets/hero-bride.png";
import { WHATSAPP_URL } from "@/lib/contact";

export function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Braut bei Sonnenuntergang in einem eleganten Hochzeitskleid"
        className="absolute object-cover"
        style={{
          top: "-7.5%",
          left: "0",
          width: "112%",
          height: "115%",
          objectPosition: "right top",
          filter: "brightness(1.12)",
        }}
      />

      {/* Warm soft overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(255, 245, 240, 0.15)" }} />

      {/* Localized dark gradient behind text area only */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(80, 60, 55, 0.32) 0%, rgba(80, 60, 55, 0.14) 40%, transparent 65%)" }} />

      {/* Minimal bottom gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Cream fade at bottom — blends into page background */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[color:var(--cream)] to-transparent" />

      {/* Content — lower-left, directly on image */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 pb-10 sm:pb-12 md:pb-16">
          <div className="max-w-2xl space-y-5">
            <p
              className="font-script text-[44px] sm:text-[54px] leading-none"
              style={{ color: "#CFAFB7" }}
            >
              you are beautiful
            </p>

            <h1
              className="font-display font-medium text-[36px] sm:text-[60px] md:text-[72px] leading-[1.04] text-white"
              style={{ textShadow: "0 2px 16px rgba(60, 45, 40, 0.35)" }}
            >
              Natürliches Brautstyling<br />
              für deinen<br />
              schönsten Tag
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