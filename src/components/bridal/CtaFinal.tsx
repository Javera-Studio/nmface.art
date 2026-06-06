import { WHATSAPP_URL } from "@/lib/contact";

export function CtaFinal() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p
          className="font-script text-[46px] md:text-[60px] leading-none mb-8"
          style={{ color: "#d5b8bf" }}
        >
          let's create your dream look
        </p>
        <h2 className="font-display text-[36px] sm:text-[48px] md:text-[60px] leading-[1.1] text-[color:var(--ink)]">
          Lass uns gemeinsam deinen perfekten Brautlook kreieren.
        </h2>
        <div className="mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--rose)] text-white h-14 px-10 text-[13px] tracking-[0.18em] uppercase hover:bg-[color:var(--ink)] transition-colors duration-500"
          >
            Brautstyling anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
