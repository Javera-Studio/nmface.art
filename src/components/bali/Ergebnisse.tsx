import { Reveal } from "./Reveal";
import { Pampas } from "./Pampas";
import { WHATSAPP_URL } from "@/lib/contact";

const gallery = [
  { src: "/images/lash1.png", alt: "Wimpernverlängerung Ergebnis 1" },
  { src: "/images/lash2.png", alt: "Wimpernverlängerung Ergebnis 2" },
  { src: "/images/lash3.png", alt: "Wimpernverlängerung Ergebnis 3" },
  { src: "/images/lash4.png", alt: "Wimpernverlängerung Ergebnis 4" },
];

export function Ergebnisse() {
  return (
    <section id="ergebnisse" className="relative overflow-hidden bg-[color:var(--cream)] py-24 md:py-32">
      <Pampas side="right" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-5">
              Ergebnisse
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Feine Arbeit.{" "}
              <span className="font-script text-[color:var(--gold)]">Sichtbarer</span> Unterschied.
            </h2>
            <p className="mt-5 text-[color:var(--ink-soft)] text-lg leading-relaxed">
              Jede Behandlung wird individuell auf Augenform, Wunschlook und natürliche Wimpern
              abgestimmt.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 80}>
              <div className="rounded-[1.5rem] overflow-hidden gold-frame bg-[color:var(--sand)] aspect-[3/4]">
                <img
                  src={g.src}
                  alt={g.alt}
                  width={600}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 md:mt-28 text-center max-w-lg mx-auto">
            <p className="text-[color:var(--ink-soft)] text-lg leading-relaxed mb-8">
              Jedes Ergebnis wird individuell auf die Kundin abgestimmt – natürlich, typgerecht und mit viel Liebe zum Detail.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#6B4A36] text-[#F8F4EE] h-[52px] px-8 text-[15px] font-[500] tracking-[0.02em] leading-[1.4] hover:bg-[#7A5540] transition-colors duration-300"
            >
              Deinen Termin anfragen
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
