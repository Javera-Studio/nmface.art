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

const images = [
  { src: haar1, alt: "Brautfrisur" },
  { src: haar2, alt: "Brautfrisur" },
  { src: haar3, alt: "Brautfrisur" },
  { src: haar4, alt: "Brautfrisur" },
  { src: haar5, alt: "Brautfrisur" },
  { src: haar6, alt: "Brautfrisur" },
  { src: makeup1, alt: "Braut Make-up" },
  { src: makeup2, alt: "Braut Make-up" },
  { src: makeup3, alt: "Braut Make-up" },
];

export function Looks() {
  return (
    <section id="looks" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="max-w-2xl mb-16 md:mb-20">
            <p className="text-[11px] tracking-[0.38em] uppercase text-[color:var(--rose)] mb-5">
              Hochzeitslooks
            </p>
            <h2 className="font-display text-[36px] md:text-[52px] leading-[1.1] text-[color:var(--ink)]">
              Zeitlose Brautfrisuren und natürliches Braut-Make-up für deinen besonderen Tag.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, i) => (
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
      </div>
    </section>
  );
}
