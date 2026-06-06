import haarschmuckImg from "@/assets/haarschmuck.png";
import { Reveal } from "@/components/bali/Reveal";

export function Haarschmuck() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <Reveal>
          <p
            className="font-script text-[28px] md:text-[34px] leading-none mb-4"
            style={{ color: "var(--script-rose)" }}
          >
            the finishing touch
          </p>
          <h2 className="font-display text-[32px] md:text-[44px] leading-[1.1] text-[color:var(--ink)] mb-6">
            Haarschmuck für deinen Brautlook
          </h2>
          <p className="text-[color:var(--ink-soft)] leading-relaxed max-w-2xl mb-10">
            Auf Wunsch kannst du ausgewählten Haarschmuck für deinen Hochzeitstag mieten oder erwerben. Gemeinsam finden wir beim Probetermin das Accessoire, das perfekt zu deinem Stil, Kleid und deiner Frisur passt.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="relative h-[240px] md:h-[280px] w-full overflow-hidden rounded-2xl">
            <img
              src={haarschmuckImg}
              alt="Haarschmuck für Bräute"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
