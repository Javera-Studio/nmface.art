import { Reveal } from "@/components/bali/Reveal";

const steps = [
  {
    n: "01",
    title: "Terminanfrage",
    text: "Sende mir deine Anfrage mit Hochzeitsdatum, Stylingwünschen und Veranstaltungsort. Anschließend prüfe ich meine Verfügbarkeit und melde mich persönlich bei dir zurück.",
  },
  {
    n: "02",
    title: "Kennenlerngespräch",
    text: "In einem persönlichen Gespräch lernen wir uns kennen, besprechen deine Vorstellungen und klären alle wichtigen Fragen rund um dein Brautstyling.",
  },
  {
    n: "03",
    title: "Probetermin",
    text: "Einige Wochen vor der Hochzeit gestalten wir gemeinsam deinen gewünschten Bridal Look und nehmen alle Anpassungen vor, damit am Hochzeitstag alles perfekt sitzt.",
  },
  {
    n: "04",
    title: "Hochzeitstag",
    text: "An deinem großen Tag komme ich zu deinem Wunschort und sorge für ein entspanntes, professionelles Styling, damit du dich rundum wohlfühlst und deinen Tag genießen kannst.",
  },
];

export function Ablauf() {
  return (
    <section id="ablauf" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            <p
              className="font-script text-[36px] md:text-[44px] leading-none mb-4"
              style={{ color: "var(--script-rose)" }}
            >
              your bridal journey
            </p>
            <h2 className="font-display text-[36px] md:text-[52px] leading-[1.1] text-[color:var(--ink)]">
              So begleite ich dich auf dem Weg zu deinem großen Tag
            </h2>
          </div>
        </Reveal>

        <ol className="relative space-y-16 md:space-y-24">
          <div className="absolute left-[14px] md:left-1/2 top-2 bottom-2 w-px bg-[color:var(--rose)]/40 md:-translate-x-1/2" aria-hidden />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <li className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="pl-12 md:pl-0 md:text-right md:pr-16">
                  <span className="font-display text-[64px] md:text-[88px] leading-none text-[color:var(--rose)]/60">
                    {s.n}
                  </span>
                </div>
                <div className="pl-12 md:pl-16 relative">
                  <span className="absolute left-[6px] md:left-[-22px] top-2 h-4 w-4 rounded-full bg-[color:var(--rose)] ring-8 ring-[color:var(--cream)]" aria-hidden />
                  <h3 className="font-display text-2xl md:text-3xl text-[color:var(--ink)]">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[color:var(--ink-soft)] leading-relaxed max-w-md">
                    {s.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
