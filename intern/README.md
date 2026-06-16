# Interne Compliance-Doku — VVT

Dieser Ordner enthält das **Verzeichnis von Verarbeitungstätigkeiten (VVT)** nach
Art. 30 DSGVO. **Interne Dokumentation — nicht zur Veröffentlichung bestimmt.**

## Dateien

| Datei | Zweck |
|---|---|
| `vvt.json` | **Quelle der Wahrheit.** Hier werden alle Einträge gepflegt. |
| `build-vvt.mjs` | Generator: erzeugt aus `vvt.json` das lesbare `vvt.md`. |
| `vvt.md` | **Generiert** — nicht von Hand bearbeiten. Zum Lesen/Drucken/Exportieren. |
| `README.md` | Diese Anleitung. |

## Eintrag hinzufügen — manuell

1. `vvt.json` öffnen, im Array `taetigkeiten` ein neues Objekt ergänzen
   (vorhandenen Eintrag als Vorlage kopieren, Felder anpassen, neue `id` vergeben).
2. `dokument.stand` auf das aktuelle Datum setzen.
3. Neu generieren: `node intern/build-vvt.mjs`
4. Beide Dateien committen.

## Eintrag hinzufügen — per Code / automatisch

Beim Einbinden eines neuen Dienstes (z. B. neues Tool, das Nutzerdaten verarbeitet)
lässt sich der Eintrag programmatisch anhängen:

```js
import { readFileSync, writeFileSync } from 'node:fs';
const v = JSON.parse(readFileSync('intern/vvt.json', 'utf8'));
v.taetigkeiten.push({
  id: 'VT-05',
  bezeichnung: '…',
  zwecke: '…',
  rechtsgrundlage: 'Art. 6 Abs. 1 lit. … DSGVO',
  betroffene_personen: '…',
  datenkategorien: ['…'],
  empfaenger: ['…'],
  auftragsverarbeiter: '…',
  drittlandtransfer: 'Nein',
  loeschfrist: '…',
  tom: '…',
  status: 'aktiv'
});
v.dokument.stand = new Date().toISOString().slice(0, 10);
writeFileSync('intern/vvt.json', JSON.stringify(v, null, 2));
```

Danach `node intern/build-vvt.mjs` ausführen. Optional als Git-Pre-Commit-Hook
oder CI-Schritt verdrahten, damit `vvt.md` nie veraltet.

## Offene Platzhalter (bei Gelegenheit füllen)

- **VT-01 / Formcarry:** Datum eintragen, an dem der DPA als PDF abgelegt wurde.
- **VT-04 / E-Mail:** Name + Sitz des E-Mail-/Server-Hosters (Plesk) und AVV-Status ergänzen.

## Schutz vor öffentlichem Zugriff (wichtig)

Die Seite wird über Cloudflare Pages aus dem Repo-Root ausgeliefert — Dateien in
`/intern/` wären theoretisch per Direkt-URL erreichbar. Maßnahmen:

1. `_headers` setzt für `/intern/*` bereits `X-Robots-Tag: noindex, nofollow`
   (keine Indexierung durch Suchmaschinen).
2. **Empfohlen:** In Cloudflare → Zero Trust → **Access** eine Richtlinie für den
   Pfad `/intern/*` anlegen (nur eigene E-Mail-Adressen zulassen). Damit ist der
   Ordner echt zugriffsgeschützt. (Das `_headers`-noindex verhindert nur Indexierung,
   nicht den direkten Abruf.)

Das VVT enthält keine Zugangsdaten/Geheimnisse, aber gehört nicht in die
Öffentlichkeit — bitte Schritt 2 vor/nach dem Launch einrichten.
