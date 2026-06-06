import { WHATSAPP_URL, WHATSAPP_CTA } from "@/lib/contact";
import { Reveal } from "./Reveal";
import { Pampas } from "./Pampas";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--sand-deep)] py-24 md:py-32">
      <Pampas side="left" />
      <Pampas side="right" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(184,146,74,0.18) 0%, transparent 65%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.32em] uppercase text-[color:var(--gold)] mb-5">
            Kontakt
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Bereit für deinen neuen
            <br />
            <span className="font-script text-[color:var(--gold)]">Lash-Look?</span>
          </h2>
          <p className="mt-6 text-[color:var(--ink-soft)] text-lg leading-relaxed">
            Schreib mir gerne über WhatsApp – wir finden gemeinsam den perfekten, individuell
            abgestimmten Look für dich.
          </p>
          <div className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#6B4A36] text-[#F8F4EE] h-[52px] px-8 text-[15px] font-[500] tracking-[0.02em] leading-[1.4] hover:bg-[#7A5540] transition-colors duration-300 shadow-warm"
            >
              {WHATSAPP_CTA}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
