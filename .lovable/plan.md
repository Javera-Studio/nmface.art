
# BALI ÄSTHETIK — finaler Build-Plan

Premium Bali-Spa Landing Page für Angelina Balizki. Warm, ruhig, hochwertig, WhatsApp-first. TanStack Start + Tailwind v4 + React 19, Vercel-kompatibel.

## Assets (Lovable CDN)

Alle Uploads werden per `lovable-assets create` aus `/mnt/user-uploads/` in `src/assets/*.asset.json` Pointer überführt — keine Binaries im Repo:
- `angelina.jpeg` → About
- `logoohnehinterg.png` → Logo Navbar + Footer
- `studio.jpeg` → Hero (groß)
- `preisliste.png` → kleines Mood-Element neben echter Preisliste
- `technik1.jpg` → „Diese Techniken biete ich an"
- `looks.jpeg` → Highlight in Ergebnis-Galerie
- `lashes.zip` → `1–4.png` als 4er-Galerie (kein Vorher/Nachher-Modul, weil keine Paare markiert sind)

WhatsApp-URL: `https://wa.me/43XXXXXXXXXX` als Konstante in `src/lib/contact.ts`.

## Design-System (src/styles.css)

Tokens für Background `#FFFDF8 / #F7F1E8 / #EFE3D3`, Text `#3B2A1F`, Muted `#7B6A58`, Gold `#B8924A`, Soft Beige `#D8C3A5`, Brown `#8A6A43`. Warmer Schatten-Token, generöse Radien. Fonts via Google Fonts Link in `__root.tsx`: Cormorant Garamond (Display), Inter (Body), Great Vibes (Script-Akzente).

## Sektionsstruktur

1. **Navbar** — Logo (logo.png) links, Anchor-Nav, WhatsApp-CTA rechts.
2. **Hero** — Split, Headline „BALI ÄSTHETIK" + Script „by Angelina Balizki" + Lead, zwei CTAs („Schreib mir – wir finden deinen perfekten Look" / „Preise ansehen"), rechts großes `studio.jpeg`, im Hintergrund riesige transparente „BALI" Outline.
3. **Studio** — Text + Bild + 3 Wertchips (Qualität · Sauberkeit · individuelle Beratung).
4. **Leistungen / Preise** — 3 Karten (Natural 99/60 € · Volume 125/70 € · Luxury 145/85 €) + Add-on (Wimpern entfernen 25 €). Zwei Hinweise: UV-System-Text und „Welche Technik zu dir passt, entscheidet Angelina gemeinsam mit dir nach Beratung, Augenform und gewünschtem Ergebnis." Dazu klein gerahmtes `preisliste.png` als Mood-Element.
5. **Diese Techniken biete ich an** — `technik1.jpg` groß + 5 Technik-Einträge (Classic / Volume / Hybrid / Wispy Volume / Mega Volume) mit beratendem, femininem Tonfall.
6. **Ergebnisse** — Headline „Feine Arbeit. Sichtbarer Unterschied." + 4er-Galerie (`1–4.png`) + `looks.jpeg` als breite Highlight-Tile.
7. **Über mich + Bald neu** (kombiniert) — `angelina.jpeg` + Bio + Zusatz „Aktuell liegt mein Fokus auf Wimpernverlängerung. Ab August erweitere ich mein Angebot um Augenbrauen, Wimpernlifting und Henna Brows." + 3 Chips (Augenbrauen / Wimpernlifting / Henna Brows).
8. **Bewertungen** — 5 Cards mit 5 goldenen Sternen, Originaltexte.
9. **CTA-Banner** — Warmer Cream-Gold-Band, Headline „Bereit für deinen neuen Lash-Look?" + WhatsApp-Button.
10. **Footer** — Logo, Standort „Wien / Umgebung", Anchor-Links, Credit „Website Demo by JAVERA Studio" → javera-studio.at.

## Pampasgras-Dekor (neu, dezent)

Eine wiederverwendbare `<PampasAccent />` Komponente rendert inline-SVG Pampas/Trockengras-Silhouetten in Beige `#D8C3A5`/Cream, Opacity 8–12 %, `pointer-events-none`, `aria-hidden`, `z-0` hinter Content. Props: `position` (`left` | `right` | `corner`), `size`. Mobile-Verhalten: `hidden md:block` — auf Mobile komplett aus.

Einsatz NUR in:
- **Hero**: ein großes Cluster rechts unten, ein kleineres links außen (sehr dezent).
- **Leistungen/Preise**: links und rechts am Rand, symmetrisch wie auf der Original-Preisliste, aber stark reduziert.
- **CTA-Banner**: ein einzelnes, sehr leises Cluster mittig hinter dem Text (Opacity ~8 %).

NICHT in: Navbar, Studio, Techniken, Ergebnisse, About, Reviews, Footer.

Implementierung: 2–3 SVG-Pfade (Federgras-Silhouetten) als Komponente, kein Bild-Download, perfekt skalierbar, keine Performance-Kosten. Keine Animation auf den Pampas-Elementen.

## Komponentenstruktur

`src/routes/index.tsx` orchestriert Sektionen aus `src/components/bali/`:
`Navbar`, `Hero`, `Studio`, `Leistungen`, `Techniken`, `Ergebnisse`, `AboutComingSoon`, `Reviews`, `CtaBanner`, `Footer`, `PampasAccent` (Util).

Hilfsdateien: `src/lib/contact.ts`, `src/hooks/use-in-view.ts` (sanftes Fade-in beim Scrollen).

## Visuelle Sprache

Wechselnde Section-Backgrounds zwischen `#FFFDF8` und `#F7F1E8`. Eyebrows Gold-Uppercase, Cormorant-Headlines mit Script-Akzentwort. Bilder `rounded-[2rem]` + warmer Box-Shadow + 1 px Gold-Inner-Border. Dezente Hover-Lifts auf Cards. Keine Parallaxe, keine Auto-Carousels, keine bunten Akzente. Pampasgras-Dekor bleibt atmosphärisch und tritt nie vor den Content.

## SEO & Performance

`head()` mit Title „BALI ÄSTHETIK – Lashes & Brows by Angelina Balizki · Wien", Meta-Description, og:image = studio. Hero-Image `fetchpriority="high"`, Rest lazy. Alle Bilder mit width/height + Alt-Texten. Semantische Landmarks, Gold-Fokusringe.

## Bewusst weggelassen

Kein Kontaktformular, keine Buchungs-Engine, kein CMS, keine i18n. Kein Vorher/Nachher-Modul, solange keine markierten Paare nachgeliefert werden.
