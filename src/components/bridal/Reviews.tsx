import { Reveal } from "@/components/bali/Reveal";

const reviews = [
  {
    quote:
      "Nermina hat meinen Hochzeitstag in pure Ruhe verwandelt. Mein Brautlook war genau wie ich – nur schöner. Ich werde diesen Moment vor dem Spiegel nie vergessen.",
    name: "Lea & Jonas",
    place: "Schlosshochzeit, Niederösterreich",
  },
  {
    quote:
      "Vom ersten Gespräch bis zum letzten Pinselstrich – alles war so persönlich, so warm, so professionell. Sie hat genau verstanden, was ich mir gewünscht habe.",
    name: "Marlene",
    place: "Gartenhochzeit, Heilbronn",
  },
  {
    quote:
      "Das Probestyling war ein Highlight für sich. Am Hochzeitstag fühlte sich alles vertraut, leicht und unaufgeregt an. Genau das hatte ich mir gewünscht.",
    name: "Sophie",
    place: "Standesamt & Feier, Heilbronn",
  },
];

export function Reviews() {
  return (
    <section id="stimmen" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="text-center mb-12">
            <p className="font-script text-[38px] md:text-[46px] leading-none mb-6" style={{ color: "#d5b8bf" }}>
              kind words
            </p>
            <h2 className="font-display text-[36px] md:text-[52px] leading-[1.1] text-[color:var(--ink)]">
              Was meine Bräute sagen.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 120}>
              <figure className="flex flex-col h-full">
                <span className="font-display text-6xl leading-none text-[color:var(--rose)] mb-4" aria-hidden>“</span>
                <blockquote className="font-display text-xl md:text-2xl leading-snug text-[color:var(--ink)]">
                  {r.quote}
                </blockquote>
                <figcaption className="mt-8 text-sm tracking-wide text-[color:var(--ink-soft)]">
                  <span className="text-[color:var(--ink)]">{r.name}</span> · {r.place}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}