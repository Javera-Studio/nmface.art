import haarschmuckImg from "@/assets/haarschmuck.png";
import { Reveal } from "@/components/bali/Reveal";
import { ImageReveal } from "@/components/bridal/ImageReveal";

export function Haarschmuck() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <Reveal>
          <p
            className="font-script text-[38px] md:text-[46px] leading-none mb-6"
            style={{ color: "#CFAFB7" }}
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
        <ImageReveal delay={80}>
          <img
            src={haarschmuckImg}
            alt="Haarschmuck für Bräute"
            loading="lazy"
            className="w-full h-auto rounded-2xl"
          />
        </ImageReveal>
      </div>
    </section>
  );
}
