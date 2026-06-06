const technik = "/images/technik.jpg";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "@/lib/contact";

const looks = [
  {
    id: "classic",
    image: "/images/lookclassic.png",
    heading: "Classic",
    sub: "Natürlich & zeitlos",
    text: "Für einen natürlichen, gepflegten Look. Ideal, wenn du deine eigenen Wimpern dezent betonen möchtest.",
    imageRight: true,
  },
  {
    id: "hybrid",
    image: "/images/lookhybrid.png",
    heading: "Hybrid",
    sub: "Die perfekte Balance",
    text: "Eine Mischung aus Classic und Volume – mehr Fülle, aber trotzdem weich und feminin.",
    imageRight: false,
  },
  {
    id: "volume",
    image: "/images/lookvolumen.png",
    heading: "Volume",
    sub: "Weich & ausdrucksstark",
    text: "Für mehr Dichte und einen intensiveren Blick, ohne dass der Look zu schwer wirkt.",
    imageRight: true,
  },
  {
    id: "wispy",
    image: "/images/lookwispy.png",
    heading: "Wispy Volume",
    sub: "Modern & luftig",
    text: "Ein strukturierter Look mit unterschiedlichen Längen für einen trendbewussten, soften Strip-Lash-Effekt.",
    imageRight: false,
  },
  {
    id: "megavolumen",
    image: "/images/lookmegavolumen.png",
    heading: "Mega Volume",
    sub: "Glamourös & intensiv",
    text: "Für einen besonders dichten, dunklen und auffälligen Look mit maximaler Wirkung.",
    imageRight: true,
  },
];

export function SignatureLooks() {
  return (
    <section id="looks" className="relative overflow-hidden bg-[#F5F0EA] py-24 md:py-36">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-5">
              Lash Styles
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight text-[color:var(--ink)]">
              Unsere Signature Looks
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[color:var(--gold)]/50" />
            <p className="mt-6 text-[color:var(--ink-soft)] text-lg leading-relaxed">
              Jeder Look wird individuell auf deine Augenform, deine natürliche Wimpernstruktur und
              deinen persönlichen Stil abgestimmt – von natürlich dezent bis glamourös ausdrucksstark.
            </p>
          </div>
        </Reveal>

        {/* Intro: Technik-Bild links + kompakte Look-Übersicht rechts */}
        <Reveal delay={80}>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            <div className="rounded-[2rem] overflow-hidden gold-frame bg-[color:var(--cream)]">
              <img
                src={technik}
                alt="Verschiedene Wimpern-Techniken bei BALI Ästhetik"
                width={900}
                height={1000}
                loading="lazy"
                className="w-full h-[400px] md:h-[540px] object-cover"
              />
            </div>

            <div>
              <p className="text-[color:var(--ink-soft)] leading-relaxed mb-8 text-base md:text-lg max-w-md">
                Fünf Stile – jeder mit eigenem Charakter, jeder angepasst an dein natürliches Erscheinungsbild
                und deinen persönlichen Wunschlook.
              </p>
              <ul className="divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
                {looks.map((look) => (
                  <li key={look.id} className="py-4 flex items-baseline gap-5">
                    <p className="font-display text-xl text-[color:var(--ink)] w-40 shrink-0">
                      {look.heading}
                    </p>
                    <p className="text-xs tracking-[0.14em] uppercase text-[color:var(--gold)]">
                      {look.sub}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </Reveal>

        {/* Divider into zig-zag */}
        <div className="my-20 md:my-28 flex items-center gap-6">
          <div className="flex-1 h-px bg-[color:var(--border)]" />
          <div className="h-1 w-1 rounded-full bg-[color:var(--gold)]/50" />
          <div className="flex-1 h-px bg-[color:var(--border)]" />
        </div>

        {/* Zig-zag detail blocks */}
        <div className="space-y-20 md:space-y-28">
          {looks.map((look, i) => (
            <Reveal key={look.id} delay={80}>
              <div
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  look.imageRight ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className="flex flex-col justify-center">
                  <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-3">
                    0{i + 1}
                  </p>
                  <h3 className="font-display text-4xl md:text-5xl text-[color:var(--ink)] leading-tight">
                    {look.heading}
                  </h3>
                  <p className="font-script text-2xl text-[color:var(--gold)] mt-2 leading-none">
                    {look.sub}
                  </p>
                  <div className="mt-5 h-px w-12 bg-[color:var(--gold)]/40" />
                  <p className="mt-5 text-[color:var(--ink-soft)] leading-relaxed text-base md:text-lg max-w-md">
                    {look.text}
                  </p>
                </div>

                <div
                  className={`md:max-w-[70%] md:mx-auto w-full rounded-[2rem] overflow-hidden gold-frame bg-[color:var(--sand)] aspect-[4/5] ${
                    look.imageRight ? "" : "md:order-1"
                  }`}
                >
                  <img
                    src={look.image}
                    alt={`Wimpernverlängerung ${look.heading}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 md:mt-32 text-center max-w-lg mx-auto">
            <p className="text-[color:var(--ink-soft)] text-lg leading-relaxed mb-8">
              Noch unsicher, welcher Look zu dir passt? Gemeinsam finden wir die perfekte Technik für deine Augenform, deine Wünsche und deinen persönlichen Stil.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#6B4A36] text-[#F8F4EE] h-[52px] px-8 text-[15px] font-[500] tracking-[0.02em] leading-[1.4] hover:bg-[#7A5540] transition-colors duration-300"
            >
              Welcher Look passt zu mir?
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
