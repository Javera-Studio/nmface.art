import { Reveal } from "@/components/bali/Reveal";

const steps = [
  {
    n: "01",
    title: "Terminanfrage",
    text: "Du meldest dich per WhatsApp oder E-Mail. Ich beantworte deine Fragen und prüfe meine Verfügbarkeit für deinen Hochzeitstag.",
  },
  {
    n: "02",
    title: "Kennenlerngespräch",
    text: "In einem entspannten Gespräch lernen wir uns kennen. Wir sprechen über dein Kleid, deine Wünsche, deine Location und deine Vision.",
  },
  {
    n: "03",
    title: "Probetermin",
    text: "Beim Probetermin gestalten wir gemeinsam deinen Brautlook in Ruhe. Hier hast du Zeit, alles zu fühlen, zu sehen und anzupassen.",
  },
  {
    n: "04",
    title: "Hochzeitstag",
    text: "Am großen Tag komme ich zu dir – mit Ruhe, einem vertrauten Ablauf und allem, was du brauchst, um dich rundum schön zu fühlen.",
  },
];

export function Ablauf() {
  return (
    <section id="ablauf" className="py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="max-w-2xl mb-20 md:mb-28">
            <p className="text-[11px] tracking-[0.38em] uppercase text-[color:var(--rose)] mb-5">
              Ablauf
            </p>
            <h2 className="font-display text-[36px] md:text-[52px] leading-[1.1] text-[color:var(--ink)]">
              Vier ruhige Schritte zu deinem Brautlook.
            </h2>
          </div>
        </Reveal>

        <ol className="relative space-y-16 md:space-y-24">
          <div className="absolute left-[14px] md:left-1/2 top-2 bottom-2 w-px bg-[color:var(--rose)]/40 md:-translate-x-1/2" aria-hidden />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <li className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="pl-12 md:pl-0 md:text-right md:pr-16">
                  <span className="font-display text-[64px] md:text-[88px] leading-none text-[color:var(--rose)]/70">
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