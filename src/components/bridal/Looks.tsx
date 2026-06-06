import { INSTAGRAM_URL } from "@/lib/contact";
import haar1 from "@/assets/haar1.jpg";
import haar2 from "@/assets/haar2.jpg";
import haar3 from "@/assets/haar3.jpg";
import haar4 from "@/assets/haar4.jpg";
import haar5 from "@/assets/haar5.jpg";
import haar6 from "@/assets/haar6.jpg";
import makeup1 from "@/assets/makeup1.jpg";
import makeup2 from "@/assets/makeup2.jpg";
import makeup3 from "@/assets/makeup3.jpg";
import { Reveal } from "@/components/bali/Reveal";

const hairImages = [
  { src: haar1, alt: "Brautfrisur" },
  { src: haar2, alt: "Brautfrisur" },
  { src: haar3, alt: "Brautfrisur" },
  { src: haar4, alt: "Brautfrisur" },
  { src: haar5, alt: "Brautfrisur" },
  { src: haar6, alt: "Brautfrisur" },
];

const makeupImages = [
  { src: makeup1, alt: "Braut Make-up" },
  { src: makeup2, alt: "Braut Make-up" },
  { src: makeup3, alt: "Braut Make-up" },
];

export function Looks() {
  return (
    <section id="looks" className="pt-[51px] pb-16 md:pt-[77px] md:pb-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">

        {/* Section header */}
        <Reveal>
          <div className="max-w-2xl mb-10 md:mb-14">
            <p className="font-script text-[38px] md:text-[46px] leading-none mb-6" style={{ color: "#d5b8bf" }}>
              timeless bridal beauty
            </p>
            <h2 className="font-display text-[36px] md:text-[52px] leading-[1.1] text-[color:var(--ink)]">
              Zeitlose Brautfrisuren und natürliches Braut-Make-up für deinen besonderen Tag.
            </h2>
          </div>
        </Reveal>

        {/* Hairstyle grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {hairImages.map((img, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="relative aspect-[3/4] overflow-hidden group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Make-up divider block */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto py-14 md:py-20">
            <h3 className="font-display text-[28px] md:text-[38px] leading-[1.15] text-[color:var(--ink)] mb-6">
              Natürliches Braut-Make-up
            </h3>
            <p className="text-[color:var(--ink-soft)] leading-relaxed">
              Zu einem harmonischen Brautlook gehört nicht nur die passende Frisur, sondern auch ein Make-up, das deine natürliche Schönheit unterstreicht. Gemeinsam entwickeln wir einen Look, der zu dir, deinem Kleid und deinem Hochzeitstag passt.
            </p>
          </div>
        </Reveal>

        {/* Makeup grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {makeupImages.map((img, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="relative aspect-[3/4] overflow-hidden group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Instagram closing block */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto pt-16 md:pt-24">
            <p
              className="font-script text-[38px] md:text-[46px] leading-none mb-6"
              style={{ color: "#d5b8bf" }}
            >
              more than just a hairstyle
            </p>
            <h3 className="font-display text-[28px] md:text-[38px] leading-[1.15] text-[color:var(--ink)] mb-6">
              Jeder Brautlook erzählt seine eigene Geschichte.
            </h3>
            <p className="text-[color:var(--ink-soft)] leading-relaxed mb-3">
              Jede Braut ist einzigartig – deshalb steht für mich nicht nur die Frisur oder das Make-up im Mittelpunkt, sondern das Gesamtgefühl an deinem Hochzeitstag. Von natürlichen Bridal Looks bis hin zu romantischen Hochsteckfrisuren begleite ich meine Bräute mit viel Ruhe, Liebe zum Detail und einem Blick für das, was wirklich zu ihnen passt.
            </p>
            <p className="text-[color:var(--ink-soft)] leading-relaxed mb-10">
              Noch mehr Einblicke in meine Arbeit, echte Brautstylings und Momente hinter den Kulissen findest du auf Instagram.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--rose)] text-[color:var(--ink)] h-12 px-8 text-[13px] tracking-[0.16em] uppercase hover:bg-[color:var(--rose)] hover:text-white transition-colors duration-500"
            >
              Mehr Brautlooks entdecken
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
