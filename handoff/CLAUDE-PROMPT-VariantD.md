# Claude Code Prompt — leanAM "Unser Prozess" Redesign (Variante D)

Kopieren Sie den folgenden Block 1:1 in Claude Code (im Wurzelverzeichnis Ihres
leanam-Repos ausführen). Wenn der vorbereitete Komponentencode bereits
mitgegeben werden soll, einfach den Inhalt von `handoff/UnserProzess.jsx`
(bzw. `handoff/unser-prozess.html`) anhängen.

---

## PROMPT

Ich möchte die Sektion **„Unser Prozess"** auf der leanAM-Landingpage
(`https://leanam.pages.dev/`) durch eine neue, hochwertige Variante ersetzen.
Bitte führe folgende Schritte aus:

### 1. Stack & Zielort identifizieren
- Stack: **Plain static HTML** (kein React, kein Astro, kein Build-Step).
  Die Seite besteht aus einzelnen .html-Dateien im Repo-Root
  (`index.html`, `prozessberatung.html`, `entwicklung.html`, …) mit einem
  Ordner `styles/` für CSS.
- Lokalisiere die bestehende Sektion „Unser Prozess" / „In vier Schritten zur
  produktiven AM-Linie". Sie enthält aktuell vier Spalten mit den Titeln
  Analyse, Konzept, Implementierung, Skalierung auf cyanfarbenem Verlauf.
  Sie ist mit hoher Wahrscheinlichkeit in `index.html` (eventuell auch in
  `prozessberatung.html`).
- Berichte mir kurz, in welcher Datei du sie gefunden hast, bevor du etwas änderst.

### 2. Sektion ersetzen
- Verwende `handoff/unser-prozess.html` (die fertige, plain-HTML/CSS-Version)
  als **1:1 Vorlage**. NICHT die .jsx-Datei – die ist nur Referenz für
  React-Projekte.
- Ersetze den kompletten alten Sektion-Block (von Eyebrow „UNSER PROZESS" bis
  Ende der vier Spalten) durch das Markup aus `handoff/unser-prozess.html`.
- Die Google-Fonts-`<link>`-Tags entweder in den globalen `<head>` der Datei
  hochziehen (besser für die Performance) oder im inline-Block belassen.
- Den `<style>`-Block kannst du wahlweise im HTML lassen ODER nach
  `styles/unser-prozess.css` auslagern und im `<head>` referenzieren —
  je nachdem, was zum bestehenden Muster passt. Schau dir zuerst an,
  wie der Rest der Seite mit CSS umgeht.
- Übernimm den Inhalt EXAKT (keine Umformulierung, keine Halluzination!):

  **PHASE_01 · Analyse · Discovery · 1–2 Wochen**
  „Wir prüfen Ihr Bauteilportfolio, Ihre Stückzahlen und Anforderungen — und
  identifizieren die Use-Cases mit dem höchsten Hebel."
  Deliverables: Bauteil-Screening · Use-Case-Matrix · Business-Case v0

  **PHASE_02 · Konzept · Design · 3–6 Wochen**
  „Auswahl der passenden Technologie, Materialien und Maschinen. Wir entwerfen
  Prozess-Layout, IT-Architektur und Business-Case."
  Deliverables: Technologie- & Materialwahl · Prozess- & IT-Layout · Investitionsplanung

  **PHASE_03 · Implementierung · Build · 8–16 Wochen**
  „Inbetriebnahme der Hardware, Roll-out der leanAM-Software, Integration in
  ERP/CAQ und Schulung Ihres Teams — operativ, hands-on."
  Deliverables: Hardware-Inbetriebnahme · Software & ERP/CAQ · Team-Enablement

  **PHASE_04 · Skalierung · Operate · fortlaufend**
  „Wir begleiten Sie in der Hochlaufphase, optimieren KPIs und übernehmen —
  wenn Sie möchten — Spitzenlasten als B2B-Service."
  Deliverables: KPI-Tuning · Ramp-up Support · B2B-Overflow optional

  Headline der Sektion: **„Von der ersten Analyse zur skalierenden AM-Linie."**
  Eyebrow: **„// UNSER PROZESS"** (mono, Cyan, letter-spacing 0.28em).
  Lede: „Strukturiertes Vorgehen — vom ersten Gespräch bis zur dauerhaften
  Wertschöpfung. Sie sehen jederzeit, wo wir stehen."

### 3. Visuelle Spezifikation (Variante D — „Engineering Timeline")
- **Hintergrund** dunkles Navy `#0A1628`, Textfarbe Off-White `#F4F8FB`.
- **Akzent** Cyan `#6FD8F1`, Deep-Cyan `#1FA9D6` (passend zur bestehenden
  Brand).
- **Typografie**: Inter 400/500/600/700, JetBrains Mono 500 für technische
  Labels (PHASE_xx, Dauer, Eyebrow, Achse). Über Google Fonts.
- **Layout**:
  - Zentrierter Header (Eyebrow, H2, Lede), max-width 880 px.
  - Darunter eine horizontale **Zeitachse** mit Text „T0 · Kickoff" links und
    „T+ Wochen →" rechts, dazwischen ein dünner Cyan-Verlaufstrich.
  - Darunter eine Reihe aus **vier Balken**, deren Breiten proportional zu den
    Phasen-Dauern sind (`10fr 25fr 40fr 25fr`). Die Balken werden von links
    nach rechts in Opazität dichter und enden im Cyan-Verlauf für Phase 04.
  - Darunter vier **Karten** in derselben Spaltenbreite. Karten-Stil:
    `background: rgba(255,255,255,.03)`, `border:1px solid rgba(111,216,241,.15)`,
    `border-radius:12px`, `padding:24px 22px 26px`, `backdrop-filter: blur(8px)`.
  - Jede Karte hat:
    1. Eine Zeile `PHASE_0X` (mono cyan) ↔ Dauer (mono dezent).
    2. Titel `H3`, 22 px, semibold.
    3. Beschreibungs­absatz 13.5 px, line-height 1.55, opacity ~0.7.
    4. Drei Deliverables als feine Liste mit kleinem Cyan-Punkt davor (mono
       11 px / regular 12 px).
- **Spacing**: Sektion-Padding `clamp(64px,8vw,96px)` oben / `clamp(80px,10vw,120px)` unten,
  `clamp(20px,5vw,80px)` links/rechts. Container `max-width:1320px`.
- **Responsive**:
  - `< 1100 px`: Balkenleiste und Achse ausblenden, Karten 2-spaltig.
  - `< 720 px`: Karten einspaltig, links eine vertikale Cyan-Linie mit Punkten
    pro Karte (klassische Mobile-Timeline).
- **A11y**: `prefers-reduced-motion: reduce` → Animationen aus. Achse und
  Balken `aria-hidden`, Karten in einer geordneten `<ol>`.

### 4. Integration
- Ersetze die bestehende Sektion in der Landingpage-Datei durch die neue
  Komponente bzw. das neue Markup.
- Vergewissere dich, dass die alten Styles der Cyan-Verlaufs-Sektion entfernt
  werden (toter Code raus).
- Lass den Eyebrow-Anker / die Sektion-ID erhalten, falls eine
  Navigation darauf verlinkt.

### 5. Lieferung
- Lokal builden, Screenshot der gerenderten Sektion in Desktop (≥ 1280 px)
  und Mobile (375 px) erzeugen.
- Commit-Message: `feat(landing): redesign "Unser Prozess" section (Variant D, Engineering Timeline)`
- PR-Beschreibung mit Vorher/Nachher-Screenshots.

### Wichtig
- **Keine** neuen Dependencies (kein Tailwind, keine UI-Lib einführen, falls
  noch nicht vorhanden — falls Tailwind bereits genutzt wird, gerne dort
  verwenden; sonst Plain CSS-Modules / scoped Styles).
- **Texte 1:1** wie oben übernehmen.
- Das gewünschte Endergebnis ist als Referenz in
  `handoff/UnserProzess.jsx` bzw. `handoff/unser-prozess.html` als
  fertige Variante D mitgegeben — du kannst dich direkt daran orientieren bzw.
  diese als Grundlage übernehmen und nur auf den Projekt-Stack adaptieren.
