import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/contact";
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
      { title: "Ivory Bridal Studio | Natürliches Brautstyling in Wien" },
      {
        name: "description",
        content:
          "Natürliches Brautstyling, Brautfrisuren und Make-up für deinen Hochzeitstag. Mobile Brautstylings in Wien und Umgebung.",
      },
      { property: "og:title", content: "Ivory Bridal Studio | Bridal Styling" },
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
    <div className="min-h-screen bg-[color:var(--cream)] text-[color:var(--ink)] pb-11 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Looks />
        <BannerImage src={stock4} alt="Brautstrauß und Schleier" height="h-[calc(60vh+30px)]" fadeTop fadeBottom />
        <Ablauf />
        <Leistungen />
        <Reviews />
        <Faq />
        <BannerImage src={stock3} alt="Romantischer Hochzeitsbogen" fadeTop fadeBottom />
        <CtaFinal />
      </main>
      <Footer />

      {/* Sticky mobile CTA */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex items-center justify-center h-11 text-[10px] tracking-[0.18em] uppercase text-white"
        style={{ backgroundColor: "rgba(200,177,182,0.93)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
      >
        Brautstyling anfragen
      </a>
    </div>
  );
}
