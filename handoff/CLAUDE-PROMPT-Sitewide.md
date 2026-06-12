# Claude Code Prompt — leanAM SITE-WIDE Redesign

Komplettes Redesign der leanAM-Landingpage und aller Unterseiten im
„Engineering Timeline"-Stil (Variante D). Dieser Prompt ist als
**Single-Shot** gedacht: Sie führen ihn EINMAL in Claude Code aus, Claude
arbeitet ihn Schritt für Schritt ab.

> Hinweis: Die fertigen Komponenten-Vorlagen liegen unter `handoff/site/`
> im Repo (eine HTML-Datei je Sektion). Claude soll diese 1:1 als Quelle
> nutzen — nicht halluzinieren.

---

## PROMPT

Ich möchte die komplette leanAM-Website (https://leanam.pages.dev/) auf
ein neues, konsistentes Designsystem umstellen — dunkles Navy mit
Cyan-Akzent, präzise Engineering-Optik. Stack: plain static HTML mit
einem Ordner `styles/` für CSS, keine Build-Tools.

Gehe in dieser Reihenfolge vor und halte nach jedem Schritt kurz inne,
damit ich abnicken kann.

### Schritt 0 — Stack-Inventur
- Liste alle `.html`-Dateien im Repo-Root (index, mes, prozessberatung,
  entwicklung, ueber-uns, kontakt, druckfarm-rechner, agb, datenschutz,
  impressum, sitemap-visual, …) auf.
- Liste die Dateien in `styles/` auf.
- Identifiziere, wie aktuell die Section-Strukturen aussehen: Welche
  CSS-Klassen werden in `index.html` für die einzelnen Sektionen
  (Hero, Drei Säulen, Warum leanAM, Unsere Leistungen, Unser Prozess,
  Druckfarm-Rechner, FAQ, Kontakt) verwendet?
- Berichte mir die Inventur in 5–10 Zeilen, BEVOR du anfängst zu
  schreiben.

### Schritt 1 — Design-Token-Layer anlegen
Erstelle eine neue Datei `styles/leanam-system.css` mit folgendem
Inhalt (1:1):

```css
:root{
  /* Color */
  --lam-ink:        #0A1628;
  --lam-ink-2:      #102542;
  --lam-ink-deep:   #060E1C;
  --lam-cyan:       #6FD8F1;
  --lam-cyan-deep:  #1FA9D6;
  --lam-paper:      #F4F8FB;
  --lam-muted:      rgba(244,248,251,.72);
  --lam-muted-2:    rgba(244,248,251,.5);
  --lam-muted-3:    rgba(244,248,251,.35);
  --lam-line:       rgba(111,216,241,.15);
  --lam-line-soft:  rgba(111,216,241,.08);
  --lam-glass:      rgba(255,255,255,.03);

  /* Type */
  --lam-font-ui:   'Inter', system-ui, sans-serif;
  --lam-font-mono: 'JetBrains Mono', ui-monospace, monospace;

  /* Shape */
  --lam-r-sm: 0;
  --lam-r-md: 0;
  --lam-r-lg: 0;
  --lam-r-xl: 0;

  /* Spacing */
  --lam-pad-y: clamp(80px, 8vw, 120px);
  --lam-pad-x: clamp(20px, 5vw, 80px);
  --lam-max:   1320px;
}

html, body{
  background: var(--lam-ink);
  color: var(--lam-paper);
  font-family: var(--lam-font-ui);
  margin: 0;
  -webkit-font-smoothing: antialiased;
}

/* Atoms */
.lam-eyebrow{
  font-family: var(--lam-font-mono);
  font-size: 11px; font-weight: 600;
  letter-spacing: 0.28em; color: var(--lam-cyan);
  text-transform: uppercase;
}
.lam-btn{
  display:inline-flex; align-items:center; gap:10px;
  padding: 14px 22px; border-radius: var(--lam-r-sm);
  font-family: var(--lam-font-ui); font-size:14px; font-weight:600;
  text-decoration:none; cursor:pointer; border:none;
  transition: background .2s, transform .12s;
}
.lam-btn--primary{ background: var(--lam-cyan); color: var(--lam-ink); }
.lam-btn--primary:hover{ background: #8FE3F5; }
.lam-btn--ghost{
  background: transparent; color: var(--lam-paper);
  border: 1px solid var(--lam-line);
}
.lam-btn--ghost:hover{ background: var(--lam-glass); }
.lam-pill{
  display:inline-flex; align-items:center; gap:8px;
  padding: 8px 14px; border-radius: 99px;
  background: var(--lam-glass); border: 1px solid var(--lam-line);
  font-size: 12.5px; color: var(--lam-paper);
}
.lam-card{
  background: var(--lam-glass);
  border: 1px solid var(--lam-line);
  border-radius: var(--lam-r-lg);
  backdrop-filter: blur(8px);
}
.lam-section{
  padding: var(--lam-pad-y) var(--lam-pad-x);
  position: relative; overflow: hidden;
}
.lam-section__inner{ max-width: var(--lam-max); margin: 0 auto; }
.lam-h1{ font-size: clamp(40px, 5.4vw, 72px); font-weight:700;
  line-height:1.02; letter-spacing:-0.025em; margin:0; }
.lam-h2{ font-size: clamp(32px, 4.4vw, 52px); font-weight:700;
  line-height:1.05; letter-spacing:-0.02em; margin:0; }
.lam-h3{ font-size: 22px; font-weight:600; letter-spacing:-0.01em; margin:0; }
.lam-lede{ font-size: clamp(15px, 1.3vw, 17px);
  color: rgba(244,248,251,.65); line-height:1.55; margin:0; }
@media (prefers-reduced-motion: reduce){
  *, *::before, *::after{ animation: none !important; transition:none !important; }
}

/* Material Symbols mapped onto .material-icons class so existing markup keeps working */
.material-icons{
  font-family: 'Material Symbols Outlined';
  font-weight: normal; font-style: normal;
  line-height: 1; letter-spacing: normal;
  text-transform: none; display: inline-block;
  white-space: nowrap; word-wrap: normal; direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  font-variation-settings: 'opsz' 24, 'wght' 400, 'FILL' 0, 'GRAD' 0;
}
```

In den globalen `<head>` JEDER `.html`-Datei aufnehmen:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles/leanam-system.css">
```

> **Wichtig:** Verwende `Material Symbols Outlined` (nicht das ältere
> `Material Icons`), denn die bestehende Seite nutzt bereits Symbol-Namen
> wie `deployed_code`, `code_blocks`, `shield_lock`, die im alten Font
> nicht existieren. Setze die Icons mit `<span class="material-icons">name</span>`
> und mappe diese Klasse im CSS auf `font-family: 'Material Symbols Outlined';`.

Achte darauf, ggf. bestehende konkurrierende CSS-Dateien zu deaktivieren
(in einen Backup-Ordner `styles/_legacy/` verschieben, NICHT löschen).

### Schritt 2 — Sektionen ersetzen
Die Designvorlage liegt im Repo (mitgeliefert):

- **`handoff/site-preview.html`** — eine vollständige, gerenderte
  Vorschau ALLER neuen Sektionen in Reihenfolge. Im Browser öffnen,
  um zu sehen, wie das Endergebnis aussehen soll.
- **`handoff/site-source.jsx`** — die React/JSX-Quelle aller Sektionen
  (Header, Hero, DreiSaeulen, WarumLeanam, Leistungen, Druckfarm,
  FAQ, KontaktCTA, Footer). Inklusive aller Farben, Texte, Spacings
  und Strukturen. Das ist deine 1:1-Vorlage.
- **`handoff/variants-source.jsx`** — enthält `VariantD`, die
  Sektion „Unser Prozess".
- **`handoff/unser-prozess.html`** — bereits fertige Plain-HTML-Version
  von „Unser Prozess" (direkt einsetzbar).

Für jede Sektion auf `index.html`:

1. Schaue dir in `site-source.jsx` die entsprechende React-Komponente an
   (z. B. `Hero`, `DreiSaeulen`, …).
2. Übersetze sie in semantisches **plain HTML + CSS-Klassen** auf Basis
   der Atom-Klassen aus `leanam-system.css`. Inline-Styles aus dem JSX
   landen in `leanam-system.css` als Klassen wie `.lam-hero`,
   `.lam-pillars`, `.lam-warum` usw.
3. Ersetze den alten Block in `index.html` durch den neuen.
4. Texte 1:1 übernehmen, keine Umformulierung.
5. Anker/IDs beibehalten, falls Links darauf zeigen.

Reihenfolge der Sektionen in `index.html`:
Header → Hero → Drei Säulen → Warum leanAM → Unsere Leistungen →
Unser Prozess (Variante D) → Druckfarm-Rechner → FAQ → Kontakt-CTA →
Footer.

### Schritt 3 — Subpages anpassen
Wende dasselbe Header/Footer-Markup und Token-Layer auf folgende Seiten
an (Reihenfolge):

1. `mes.html`
2. `prozessberatung.html`
3. `entwicklung.html`
4. `ueber-uns.html`
5. `kontakt.html`
6. `druckfarm-rechner.html`

Auf jeder Unterseite:
- Header + Footer per `handoff/site/header.html` und `handoff/site/footer.html` ersetzen.
- Die Inhalts-Sektionen im neuen System neu aufbauen, indem du die
  passenden Atom-Klassen aus `leanam-system.css` verwendest
  (`.lam-section`, `.lam-h2`, `.lam-card`, `.lam-btn`, `.lam-eyebrow`,
  `.lam-pill`). Texte 1:1 aus dem bestehenden HTML übernehmen, nur die
  Hülle wechseln.

### Schritt 3.5 — Logo einbinden
Das offizielle leanAM-Logo liegt unter `handoff/assets/leanam-logo.png`
(Cyan-Variante mit transparentem Hintergrund). Verwende es 1:1 statt
einer Text-Wortmarke:

- Kopiere die Datei nach `images/leanam-logo.png` im Repo.
- Header: `<img src="images/leanam-logo.png" alt="leanAM" style="height:38px;width:auto;display:block">`
- Footer: gleiches Markup, height ca. 36 px.
- Entferne die alte Gradient-Tile + Textmarke ("l" + leanAM).

### Schritt 4 — Aufräumen
- Verschiebe alle alten Sektionen-CSS-Dateien nach `styles/_legacy/`.
- Entferne nicht mehr referenzierte Klassen aus dem HTML.
- Falls vorhandene Bilder (Logo, Hero-Visuals) weiterverwendet werden,
  in den neuen Markup-Blocks an den vorgesehenen Stellen einsetzen.
- `meta-theme-color` in jedem `<head>` auf `#0A1628` setzen.

### Schritt 5 — Lieferung
- Pro Seite eine Lighthouse-Schnellprüfung (Accessibility ≥ 95,
  Contrast OK).
- Mobile-Check bei 375 px Breite — keine horizontale Scrollbar.
- Commit-Strategie: ein Commit pro Schritt, alle auf einem Branch
  `feat/sitewide-redesign-v1`. Letzter Commit:
  `feat(landing): sitewide redesign — Engineering Timeline aesthetic`
- PR-Beschreibung mit Vorher/Nachher-Screenshots der Startseite +
  einer Unterseite.

### Wichtige Regeln
- **Keine** neuen Dependencies. Plain HTML + CSS reicht.
- **Texte 1:1**, keine Halluzinationen.
- **Material Icons** kommen über die bereits eingebundene
  Icon-Font (`<span class="material-icons">name</span>`).
- Wenn etwas unklar ist (z. B. fehlende Vorlage für eine bestimmte
  Subpage-Sektion), HALTEN und fragen.
