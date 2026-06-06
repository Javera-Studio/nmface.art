import { Reveal } from "@/components/bali/Reveal";

export function ScriptDivider({ text = "with love" }: { text?: string }) {
  return (
    <div className="bg-[color:var(--cream)] py-16 md:py-24">
      <Reveal>
        <div className="flex items-center justify-center gap-6 px-6">
          <span
            aria-hidden
            className="h-px w-16 md:w-28"
            style={{ background: "color-mix(in oklab, var(--script-rose) 65%, transparent)" }}
          />
          <p
            className="font-script text-3xl md:text-4xl leading-none"
            style={{ color: "var(--script-rose)" }}
          >
            {text}
          </p>
          <span
            aria-hidden
            className="h-px w-16 md:w-28"
            style={{ background: "color-mix(in oklab, var(--script-rose) 65%, transparent)" }}
          />
        </div>
      </Reveal>
    </div>
  );
}