import { INSTAGRAM_URL } from "@/lib/contact";
import { ImageReveal } from "@/components/bridal/ImageReveal";
import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import look3 from "@/assets/look-3.jpg";
import look4 from "@/assets/look-4.jpg";
import look5 from "@/assets/look-5.jpg";
import look6 from "@/assets/look-6.jpg";
import look7 from "@/assets/look-7.jpg";
import look8 from "@/assets/look-8.jpg";
import look9 from "@/assets/look-9.jpg";
import look10 from "@/assets/look-10.jpg";
import look11 from "@/assets/look-11.jpg";
import { Reveal } from "@/components/bali/Reveal";

const hairImages = [
  { src: look1, alt: "Brautfrisur" },
  { src: look2, alt: "Brautfrisur" },
  { src: look3, alt: "Brautfrisur" },
  { src: look4, alt: "Brautfrisur" },
  { src: look5, alt: "Brautfrisur" },
  { src: look6, alt: "Brautfrisur" },
];

const makeupImages = [
  { src: look7, alt: "Braut Make-up" },
  { src: look8, alt: "Braut Make-up" },
  { src: look9, alt: "Braut Make-up" },
  { src: look10, alt: "Braut Make-up" },
  { src: look11, alt: "Braut Make-up" },
];

export function Looks() {
  return (
    <section id="looks" className="pt-[51px] pb-16 md:pt-[77px] md:pb-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">

        {/* Section header */}
        <Reveal>
          <div className="max-w-2xl mb-10 md:mb-14">
            <p className="font-script text-[38px] md:text-[46px] leading-none mb-6" style={{ color: "#9c7272" }}>
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
            <ImageReveal key={i} delay={i * 70}>
              <div className="relative aspect-[3/4] overflow-hidden group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
                />
              </div>
            </ImageReveal>
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {makeupImages.map((img, i) => (
            <ImageReveal key={i} delay={i * 90}>
              <div className="relative aspect-[3/4] overflow-hidden group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
                />
              </div>
            </ImageReveal>
          ))}
        </div>

        {/* Instagram closing block */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto pt-16 md:pt-24">
            <p
              className="font-script text-[38px] md:text-[46px] leading-none mb-6"
              style={{ color: "#9c7272" }}
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
