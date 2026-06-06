import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/bridal/Navbar";
import { Hero } from "@/components/bridal/Hero";
import { About } from "@/components/bridal/About";
import { Looks } from "@/components/bridal/Looks";
import { BannerImage } from "@/components/bridal/BannerImage";
import { Ablauf } from "@/components/bridal/Ablauf";
import { Leistungen } from "@/components/bridal/Leistungen";
import { Reviews } from "@/components/bridal/Reviews";
import { Faq } from "@/components/bridal/Faq";
import { CtaFinal } from "@/components/bridal/CtaFinal";
import { Footer } from "@/components/bridal/Footer";
import stock3 from "@/assets/stock3.png";
import stock4 from "@/assets/stock4.png";

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
        <About />
        <Looks />
        <BannerImage src={stock4} alt="Brautstrauß und Schleier" height="h-[60vh]" />
        <Ablauf />
        <Leistungen />
        <Reviews />
        <Faq />
        <BannerImage src={stock3} alt="Romantischer Hochzeitsbogen" fadeBottom />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
