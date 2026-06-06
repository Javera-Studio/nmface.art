import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import look3 from "@/assets/look-3.jpg";
import look4 from "@/assets/look-4.jpg";
import look5 from "@/assets/look-5.jpg";
import heroImg from "@/assets/hero-bride.jpg";
import { Reveal } from "@/components/bali/Reveal";

const items = [
  { src: look1, alt: "Romantische Brautfrisur mit Blüten", span: "row-span-2", overlay: "forever yours" },
  { src: look2, alt: "Sanftes Braut Make-up mit Schleier", span: "" },
  { src: heroImg, alt: "Braut im Sonnenuntergang", span: "" },
  { src: look3, alt: "Lockere Brautwellen mit Haarschmuck", span: "row-span-2", overlay: "soft & timeless" },
  { src: look5, alt: "Soft Glam Braut Make-up", span: "" },
  { src: look4, alt: "Eleganter Dutt mit Perlen", span: "" },
];

export function Looks() {
  return (
    <section id="looks" className="bg-[color:var(--blush)] py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="max-w-2xl mb-16 md:mb-20">
            <p className="text-[11px] tracking-[0.38em] uppercase text-[color:var(--rose)] mb-5">
              Hochzeitslooks
            </p>
            <h2 className="font-display text-[36px] md:text-[52px] leading-[1.1] text-[color:var(--ink)]">
              Zeitlose Bräute, individuell gestylt.
            </h2>
            <p className="mt-6 text-[color:var(--ink-soft)] leading-relaxed">
              Eine Auswahl meiner Lieblingsmomente – Frisuren und Make-up, die Persönlichkeit, Kleid und Tageslicht in eine ruhige Eleganz übersetzen.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[220px] md:auto-rows-[300px]">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 80} className={it.span}>
              <div className="relative h-full w-full overflow-hidden group">
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                />
                {it.overlay && (
                  <span
                    className="pointer-events-none absolute bottom-6 left-6 font-script text-3xl md:text-4xl leading-none drop-shadow-[0_1px_8px_rgba(95,85,84,0.25)]"
                    style={{ color: "var(--script-rose)" }}
                  >
                    {it.overlay}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}