import portrait from "@/assets/about-nermina.png";
import { Reveal } from "@/components/bali/Reveal";

const facts = [
  "Brautstylistin im Raum Heilbronn",
  "Natürliche Hair & Make-up Looks",
  "Liebe zum Detail",
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <p className="font-script text-[38px] md:text-[46px] leading-none mb-6" style={{ color: "#d5b8bf" }}>
            so nice to meet you
          </p>
        </Reveal>
        <div className="grid md:grid-cols-[5fr_7fr] gap-8 md:gap-10 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={portrait}
              alt="Nermina – Brautstylistin"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-script text-[52px] md:text-[64px] leading-none text-[color:var(--rose)] mb-2">
            Hi, ich bin Nermina
          </p>
          <h2 className="font-display text-[18px] md:text-[22px] tracking-wide text-[color:var(--ink-soft)] mb-7">
            Deine Brautstylistin aus Heilbronn
          </h2>
          <p className="text-[color:var(--ink-soft)] leading-relaxed">
            Ich begleite Bräute an einem der wichtigsten Tage ihres Lebens und liebe natürliche Looks, die deine Persönlichkeit unterstreichen. Mein Ziel ist, dass du dich an deinem Hochzeitstag wunderschön fühlst – ohne dich verkleidet zu fühlen.
          </p>
          <ul className="mt-8 space-y-3">
            {facts.map((fact) => (
              <li key={fact} className="flex items-center gap-3 text-[color:var(--ink-soft)]">
                <span className="text-[color:var(--rose)]">♡</span>
                {fact}
              </li>
            ))}
          </ul>
        </Reveal>
        </div>
      </div>
    </section>
  );
}