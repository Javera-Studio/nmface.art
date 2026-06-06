import { Reveal } from "@/components/bali/Reveal";

const services = [
  {
    title: "Brautstyling",
    text: "Komplettes Styling aus einer Hand – von der Beratung über den Probetermin bis zum Hochzeitstag.",
  },
  {
    title: "Brautfrisur",
    text: "Romantische Hochsteckfrisuren, weiche Wellen oder zarte Half-Up Looks, abgestimmt auf dein Kleid.",
  },
  {
    title: "Braut Make-up",
    text: "Natürliches, langanhaltendes Make-up, das deine Schönheit unterstreicht – ohne dich zu verändern.",
  },
  {
    title: "Gästestylings",
    text: "Frisur und Make-up für Trauzeugin, Mutter der Braut oder enge Gäste – passend zum Tag.",
  },
  {
    title: "Mobiler Service",
    text: "Ich komme zu dir – in deine Suite, dein Zuhause oder direkt an die Hochzeitslocation in Heilbronn und Umgebung.",
  },
];

export function Leistungen() {
  return (
    <section id="leistungen" className="bg-[color:var(--blush)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
            <p className="font-script text-[38px] md:text-[46px] leading-none mb-6" style={{ color: "#d5b8bf" }}>
              everything you need
            </p>
            <h2 className="font-display text-[36px] md:text-[52px] leading-[1.1] text-[color:var(--ink)]">
              Alles, was du für deinen Brautlook brauchst.
            </h2>
          </div>
        </Reveal>

        <div className="divide-y divide-[color:var(--rose)]/25 border-y border-[color:var(--rose)]/25">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="grid md:grid-cols-12 gap-6 py-8 md:py-10 items-baseline">
                <span className="hidden md:block md:col-span-1 font-display text-[28px] text-[color:var(--rose)]/70 tracking-widest pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="md:col-span-3 font-display text-2xl md:text-3xl text-[color:var(--ink)]">
                  {s.title}
                </h3>
                <p className="md:col-span-8 text-[color:var(--ink-soft)] leading-relaxed">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}