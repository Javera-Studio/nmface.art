const technik = "/images/technik.jpg";
import { Reveal } from "./Reveal";

const items = [
  { name: "Classic", spec: "0.15 1D", text: "Für einen natürlichen, gepflegten Look." },
  { name: "Volume", spec: "0.07 4D", text: "Für mehr Fülle und weichen Ausdruck." },
  { name: "Hybrid", spec: "0.15 1D + 0.07 4D", text: "Die perfekte Mischung aus Natürlichkeit und Volumen." },
  { name: "Wispy Volume", spec: "0.07 4D + 0.03 8–12D", text: "Für einen modernen, luftigen Strip-Lash-Effekt." },
  { name: "Mega Volume", spec: "0.03 10–15D", text: "Für einen intensiven, glamourösen Look." },
];

export function Techniken() {
  return (
    <section id="techniken" className="bg-[color:var(--sand)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <Reveal>
          <div className="rounded-[2rem] overflow-hidden gold-frame bg-[color:var(--cream)]">
            <img
              src={technik}
              alt="Verschiedene Wimpern-Techniken bei BALI Ästhetik"
              width={900}
              height={1000}
              loading="lazy"
              className="w-full h-[520px] md:h-[680px] object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-5">
            Techniken
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Diese Techniken biete ich{" "}
            <span className="font-script text-[color:var(--gold)]">an</span>
          </h2>
          <p className="mt-6 text-[color:var(--ink-soft)] text-lg leading-relaxed max-w-lg">
            Von natürlich bis glamourös – jede Technik wird individuell an deine Augenform, deine
            Naturwimpern und deinen Wunschlook angepasst.
          </p>

          <ul className="mt-10 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
            {items.map((it) => (
              <li key={it.name} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <div className="sm:w-56 shrink-0">
                  <p className="font-display text-2xl text-[color:var(--ink)]">{it.name}</p>
                  <p className="text-xs tracking-[0.22em] uppercase text-[color:var(--gold)] mt-1">
                    {it.spec}
                  </p>
                </div>
                <p className="text-[color:var(--ink-soft)] leading-relaxed">{it.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
