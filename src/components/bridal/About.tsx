import portrait from "@/assets/about-nermina.jpg";
import { Reveal } from "@/components/bali/Reveal";

export function About() {
  return (
    <section id="about" className="py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
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
          <p className="text-[11px] tracking-[0.38em] uppercase text-[color:var(--rose)] mb-5">
            Über mich
          </p>
          <h2 className="font-display text-[36px] md:text-[48px] leading-[1.1] text-[color:var(--ink)]">
            Ich bin Nermina – deine persönliche Brautstylistin.
          </h2>
          <div className="mt-7 space-y-5 text-[color:var(--ink-soft)] leading-relaxed">
            <p>
              Seit vielen Jahren begleite ich Bräute auf ihrem Weg zum schönsten Tag ihres Lebens. Mit viel Ruhe, Liebe zum Detail und einem feinen Gespür für natürliche Schönheit kreiere ich Looks, die zu dir passen – nicht zu einem Trend.
            </p>
            <p>
              Ob ein zarter, romantischer Look oder ein klassisch eleganter Auftritt: Mein Anspruch ist, dass du dich beim Blick in den Spiegel erkennst – nur in deiner schönsten Version.
            </p>
          </div>
          <p className="mt-8 font-script text-3xl text-[color:var(--rose)]">Nermina</p>
        </Reveal>
      </div>
    </section>
  );
}