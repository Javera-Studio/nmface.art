import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/bridal/Navbar";
import { Hero } from "@/components/bridal/Hero";
import { BannerImage } from "@/components/bridal/BannerImage";
import { About } from "@/components/bridal/About";
import { Looks } from "@/components/bridal/Looks";
import { Ablauf } from "@/components/bridal/Ablauf";
import { Leistungen } from "@/components/bridal/Leistungen";
import { Reviews } from "@/components/bridal/Reviews";
import { Faq } from "@/components/bridal/Faq";
import { CtaFinal } from "@/components/bridal/CtaFinal";
import { Footer } from "@/components/bridal/Footer";
import { ScriptDivider } from "@/components/bridal/ScriptDivider";
import stock1 from "@/assets/stock1.png";
import stock2 from "@/assets/stock2.png";
import stock3 from "@/assets/stock3.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NM Faceart | Natürliches Brautstyling in Heilbronn" },
      {
        name: "description",
        content:
          "Natürliches Brautstyling, Brautfrisuren und Make-up für deinen Hochzeitstag. Mobile Brautstylings in Heilbronn und Umgebung.",
      },
      { property: "og:title", content: "NM Faceart | Bridal Styling" },
      {
        property: "og:description",
        content:
          "Zeitlose Brautfrisuren und natürliches Braut-Make-up für deinen besonderen Tag.",
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
        <BannerImage src={stock1} alt="Braut in romantischer Atmosphäre" />
        <About />
        <ScriptDivider text="every bride, a story" />
        <Looks />
        <BannerImage src={stock2} alt="Hochzeitsatmosphäre vor dem Ablauf" />
        <Ablauf />
        <ScriptDivider text="with love & care" />
        <Leistungen />
        <Reviews />
        <Faq />
        <BannerImage src={stock3} alt="Romantischer Abschluss" fadeBottom />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
