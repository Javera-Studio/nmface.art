import ctaImg from "@/assets/cta-bride.jpg";
import { WHATSAPP_URL } from "@/lib/contact";

export function CtaFinal() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <img
        src={ctaImg}
        alt="Braut mit weißem Rosenstrauß im Garten"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[color:var(--ink)]/25" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.4em] uppercase text-white/85 mb-6">
            Dein Brautlook
          </p>
          <h2 className="font-display text-[40px] sm:text-[56px] md:text-[68px] leading-[1.1] text-white">
            Lass uns gemeinsam deinen perfekten Brautlook kreieren.
          </h2>
          <div className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--rose)] text-white h-14 px-10 text-[13px] tracking-[0.18em] uppercase hover:bg-white hover:text-[color:var(--ink)] transition-colors duration-500"
            >
              Jetzt Termin anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}