import { Reveal } from "./Reveal";

const reviews = [
  "Ich vertraue Angelina blind. Das Ergebnis ist immer wunderschön und besser als meine eigene Vorstellung. Bin super zufrieden!",
  "Ich bin jedes Mal begeistert. Sie macht meine Wimpern einfach perfekt und ich freue mich immer wieder auf meinen Termin bei ihr.",
  "Tolle Arbeit! Meine Wimpern sehen einfach perfekt aus – voller, aber trotzdem natürlich.",
  "Absolut zu empfehlen! Tolle, saubere Arbeit und immer das schönste Ergebnis. Dazu auch noch ein sehr sympathischer Mensch.",
  "Es ist jedes Mal wie eine kleine Wellnessauszeit. Angelina macht unfassbar schöne und saubere Arbeit.",
  "Die schönsten Wimpern die es gibt! Sie ist fachlich sehr kompetent, versteht ihre Arbeit! Sie berät einen immer sehr gut und arbeitet hygienisch und sauber! Hinzu kommt ein extra Stern für ihre sehr freundliche und herzliche Art.",
];

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#b8924a" aria-hidden>
      <path d="M12 2.5l2.92 6.51 7.08.78-5.3 4.86 1.5 7.05L12 17.9l-6.2 3.8 1.5-7.05L2 9.79l7.08-.78L12 2.5z" />
    </svg>
  );
}

export function Reviews() {
  return (
    <section className="bg-[color:var(--cream)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-5">
              Bewertungen
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Stimmen meiner <span className="font-script text-[color:var(--gold)]">Kundinnen</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <figure className="h-full rounded-2xl bg-[color:var(--sand)] p-7 md:p-8 border border-[color:var(--border)]">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} />
                  ))}
                </div>
                <blockquote className="text-[color:var(--ink)] leading-relaxed">
                  „{r}"
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
