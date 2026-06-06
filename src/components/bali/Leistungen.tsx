import { WHATSAPP_URL } from "@/lib/contact";
import { Reveal } from "./Reveal";
import { Heart } from "lucide-react";
import { Pampas } from "./Pampas";

const tiers = [
  {
    name: "Natural",
    sub: "1:1 Wimpern",
    rows: [
      { label: "Neuauflage", price: "99 €" },
      { label: "Auffüllen", price: "60 €" },
    ],
  },
  {
    name: "Volume",
    sub: "Hybrid / leichtes Volumen",
    rows: [
      { label: "Neuauflage", price: "125 €" },
      { label: "Auffüllen", price: "70 €" },
    ],
  },
  {
    name: "Luxury",
    sub: "Wispy / dichtes Volumen",
    rows: [
      { label: "Neuauflage", price: "145 €" },
      { label: "Auffüllen", price: "85 €" },
    ],
  },
];

function PriceRow({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex items-baseline gap-3 text-[color:var(--ink)]">
      <span className="font-display text-[20px] md:text-[22px] tracking-wide">{label}</span>
      <span
        aria-hidden
        className="flex-1 border-b border-dotted border-[color:var(--gold)]/50 translate-y-[-4px]"
      />
      <span className="font-display text-[20px] md:text-[22px] text-[color:var(--ink)] font-[500]">{price}</span>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 my-10" aria-hidden>
      <span className="h-px w-16 md:w-28 bg-[color:var(--gold)]/40" />
      <Heart className="text-[color:var(--gold)]" size={14} strokeWidth={1.4} fill="currentColor" />
      <span className="h-px w-16 md:w-28 bg-[color:var(--gold)]/40" />
    </div>
  );
}

export function Leistungen() {
  return (
    <section
      id="leistungen"
      className="relative overflow-hidden bg-[color:var(--cream)] py-24 md:py-32"
    >
      <Pampas side="left" />

      {/* Großes transparentes B im Hintergrund */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        style={{ zIndex: 0 }}
      >
        <span
          className="font-display leading-none text-[color:var(--gold)]"
          style={{
            fontSize: "clamp(28rem, 60vw, 56rem)",
            opacity: 0.05,
            fontWeight: 400,
          }}
        >
          B
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-5">
              Leistungen &amp; Preise
            </p>
            <h2 className="font-script text-6xl md:text-7xl text-[color:var(--brown)] leading-none">
              Preisliste
            </h2>
            <p className="mt-6 text-[color:var(--ink-soft)] leading-relaxed max-w-xl mx-auto">
              Welche Technik zu dir passt, entscheidet Angelina gemeinsam mit dir nach Beratung,
              Augenform und gewünschtem Ergebnis.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 rounded-[2rem] bg-[color:var(--sand)]/60 backdrop-blur-sm border border-[color:var(--gold)]/20 shadow-warm-sm px-6 py-12 md:px-16 md:py-16">
            {tiers.map((t, i) => (
              <div key={t.name}>
                <div className="text-center mb-6">
                  <h3 className="font-script text-4xl md:text-5xl text-[color:var(--brown)] leading-none">
                    {t.name}
                  </h3>
                  <p className="mt-2 text-xs tracking-[0.28em] uppercase text-[color:var(--gold)]">
                    {t.sub}
                  </p>
                </div>
                <div className="space-y-3 max-w-md mx-auto">
                  {t.rows.map((r) => (
                    <PriceRow key={r.label} {...r} />
                  ))}
                </div>
                {i < tiers.length - 1 && <Divider />}
              </div>
            ))}

            <Divider />

            <div className="max-w-md mx-auto">
              <PriceRow label="Wimpern entfernen" price="25 €" />
            </div>

            <div className="mt-12 flex items-center justify-center gap-3" aria-hidden>
              <Heart
                className="text-[color:var(--gold)]"
                size={12}
                strokeWidth={1.4}
                fill="currentColor"
              />
              <Heart
                className="text-[color:var(--gold)]"
                size={16}
                strokeWidth={1.4}
                fill="currentColor"
              />
              <Heart
                className="text-[color:var(--gold)]"
                size={12}
                strokeWidth={1.4}
                fill="currentColor"
              />
            </div>

            <p className="mt-10 text-center text-sm md:text-base text-[color:var(--ink-soft)] leading-relaxed max-w-xl mx-auto italic">
              Ich arbeite mit dem{" "}
              <span className="text-[color:var(--ink)] not-italic">UV-System</span> für beste
              Haltbarkeit und langanhaltende Ergebnisse. Die Auffüllpreise beinhalten 4–5 Wochen.
              Ab der sechsten Woche wird der Neupreis berechnet.
            </p>

            <div className="mt-10 text-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#6B4A36] text-[#F8F4EE] h-[52px] px-8 text-[15px] font-[500] tracking-[0.02em] leading-[1.4] hover:bg-[#7A5540] transition-colors duration-300"
              >
                Beratung anfragen
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
