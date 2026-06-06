import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/bridal/Navbar";
import { Hero } from "@/components/bridal/Hero";
import { About } from "@/components/bridal/About";
import { Looks } from "@/components/bridal/Looks";
import { Ablauf } from "@/components/bridal/Ablauf";
import { Leistungen } from "@/components/bridal/Leistungen";
import { Reviews } from "@/components/bridal/Reviews";
import { Faq } from "@/components/bridal/Faq";
import { CtaFinal } from "@/components/bridal/CtaFinal";
import { Footer } from "@/components/bridal/Footer";
import { ScriptDivider } from "@/components/bridal/ScriptDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nermina Bridal · Natürliches Brautstyling in Wien" },
      {
        name: "description",
        content:
          "Mobiles Brautstyling in Wien: individuelle Beratung, Probetermin und persönliche Begleitung für deinen schönsten Tag. Frisur, Make-up und Gästestylings von Nermina.",
      },
      { property: "og:title", content: "Nermina Bridal · Natürliches Brautstyling in Wien" },
      {
        property: "og:description",
        content:
          "Romantisches, zeitloses Brautstyling in Wien – Frisur, Make-up und Begleitung für deinen Hochzeitstag.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)] text-[color:var(--ink)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ScriptDivider text="every bride, a story" />
        <Looks />
        <Ablauf />
        <ScriptDivider text="with love & care" />
        <Leistungen />
        <Reviews />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
