import { Reveal } from "@/components/bali/Reveal";

const faqs = [
  {
    q: "Wie früh sollte ich anfragen?",
    a: "Ich empfehle, dich 6 bis 12 Monate vor deinem Hochzeitstag zu melden – besonders in der Hauptsaison von Mai bis September sind die Termine schnell vergeben.",
  },
  {
    q: "Bietest du einen Probetermin an?",
    a: "Ja, ein Probetermin ist Teil meines Brautstylings. Wir nehmen uns Zeit für Frisur und Make-up und stimmen alles in Ruhe auf dich, dein Kleid und deine Wünsche ab.",
  },
  {
    q: "Kommst du auch zu meiner Location?",
    a: "Sehr gerne. Ich biete einen mobilen Service in Wien und Umgebung an und komme zu dir nach Hause, in deine Suite oder direkt an die Hochzeitslocation.",
  },
  {
    q: "Stylst du auch meine Gäste?",
    a: "Ja, ich style auf Wunsch auch Trauzeuginnen, Mütter und enge Gäste. So entsteht ein stimmiges, harmonisches Gesamtbild für deinen Tag.",
  },
  {
    q: "Wie erhalte ich ein individuelles Angebot?",
    a: "Schreib mir am einfachsten per WhatsApp mit Datum, Location und einer kurzen Beschreibung deiner Vision. Ich melde mich persönlich bei dir zurück.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-[color:var(--blush)] py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.38em] uppercase text-[color:var(--rose)] mb-5">
              Häufige Fragen
            </p>
            <h2 className="font-display text-[36px] md:text-[48px] leading-[1.1] text-[color:var(--ink)]">
              Antworten auf das, was Bräute oft fragen.
            </h2>
          </div>
        </Reveal>

        <div className="divide-y divide-[color:var(--rose)]/30 border-y border-[color:var(--rose)]/30">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <details className="group py-6">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <h3 className="font-display text-xl md:text-2xl text-[color:var(--ink)] leading-snug">
                    {f.q}
                  </h3>
                  <span className="mt-2 inline-block h-px w-6 bg-[color:var(--rose)] transition-transform duration-500 group-open:rotate-90" aria-hidden />
                </summary>
                <p className="mt-4 text-[color:var(--ink-soft)] leading-relaxed max-w-2xl">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}