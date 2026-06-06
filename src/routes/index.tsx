import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/bali/Navbar";
import { Hero } from "@/components/bali/Hero";
import { Studio } from "@/components/bali/Studio";
import { Leistungen } from "@/components/bali/Leistungen";
import { SignatureLooks } from "@/components/bali/SignatureLooks";
import { Ergebnisse } from "@/components/bali/Ergebnisse";
import { AboutComingSoon } from "@/components/bali/AboutComingSoon";
import { Reviews } from "@/components/bali/Reviews";
import { CtaBanner } from "@/components/bali/CtaBanner";
import { Footer } from "@/components/bali/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[color:var(--cream)] text-[color:var(--ink)]">
      <Navbar />
      <main>
        <Hero />
        <Studio />
        <Leistungen />
        <SignatureLooks />
        <Ergebnisse />
        <AboutComingSoon />
        <Reviews />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
