import { Reveal } from "./Reveal";

const values = [
  { title: "Qualität", text: "Premium-Materialien und das UV-System für lange Haltbarkeit." },
  { title: "Sauberkeit", text: "Hygiene auf medizinischem Niveau – jedes Werkzeug steril." },
  { title: "Individuell", text: "Ausführliche Beratung. Dein Look wird zu deinem Auge gemacht." },
];

const gallery = [
  { src: "/images/studio1.jpg", label: "Willkommen", sub: "Dein erster Eindruck" },
  { src: "/images/studio2.jpg", label: "Ein Ort zum Wohlfühlen", sub: "Wärme, Ruhe und Entspannung" },
  { src: "/images/studio3.jpg", label: "Deine Behandlung", sub: "Präzision & Ästhetik" },
];

export function Studio() {
  return (
    <section id="studio" className="bg-[color:var(--sand)] py-24 md:py-32">

      {/* Text + cards */}
      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-5">
            Das Studio
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Ein Ort zum{" "}
            <span className="font-script text-[color:var(--gold)]">Wohlfühlen</span>
          </h2>
          <p className="mt-6 text-[color:var(--ink-soft)] text-lg leading-relaxed max-w-2xl mx-auto">
            Warme Naturtöne, sanftes Licht und eine ruhige Atmosphäre schaffen eine kleine Auszeit
            vom Alltag. Bei BALI ÄSTHETIK steht nicht nur das Ergebnis im Mittelpunkt, sondern auch
            das Gefühl, sich gut aufgehoben zu fühlen.
          </p>
          <div className="mt-12 grid sm:grid-cols-3 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-[color:var(--cream)] border border-[color:var(--border)] p-6 text-left"
              >
                <p className="font-display text-xl text-[color:var(--ink)]">{v.title}</p>
                <div className="h-px w-8 bg-[color:var(--gold)] my-3" />
                <p className="text-sm text-[color:var(--ink-soft)] leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Studio gallery */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 mt-16 md:mt-20">
        <Reveal delay={120}>
          <div className="grid sm:grid-cols-3 gap-5 md:gap-7">
            {gallery.map((item) => (
              <div key={item.label} className="flex flex-col gap-4">
                <div
                  className="overflow-hidden bg-[color:var(--cream)]"
                  style={{
                    borderRadius: "28px",
                    boxShadow: "0 16px 48px -12px rgba(139, 106, 67, 0.14)",
                  }}
                >
                  <img
                    src={item.src}
                    alt={`BALI Ästhetik Studio – ${item.label}`}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <div className="text-center pt-1">
                  <p className="text-[11px] tracking-[0.26em] uppercase text-[color:var(--gold)]">
                    {item.label}
                  </p>
                  <p className="mt-1.5 font-display text-[17px] text-[color:var(--ink)] leading-snug">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

    </section>
  );
}
