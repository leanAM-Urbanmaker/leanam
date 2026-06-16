#!/usr/bin/env node
/**
 * VVT-Generator — erzeugt aus vvt.json ein lesbares Markdown-Dokument (vvt.md).
 *
 * Verwendung:
 *   node intern/build-vvt.mjs            # liest intern/vvt.json, schreibt intern/vvt.md
 *
 * Quelle der Wahrheit ist vvt.json. vvt.md ist generiert und sollte NICHT
 * von Hand bearbeitet werden — stattdessen vvt.json ändern und neu generieren.
 *
 * Eintrag programmatisch hinzufügen (Beispiel):
 *   import { readFileSync, writeFileSync } from 'node:fs';
 *   const v = JSON.parse(readFileSync('intern/vvt.json','utf8'));
 *   v.taetigkeiten.push({ id:'VT-05', bezeichnung:'…', zwecke:'…', … });
 *   v.dokument.stand = new Date().toISOString().slice(0,10);
 *   writeFileSync('intern/vvt.json', JSON.stringify(v, null, 2));
 *   // danach: node intern/build-vvt.mjs
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, 'vvt.json');
const out = join(here, 'vvt.md');

const v = JSON.parse(readFileSync(src, 'utf8'));

const arr = (x) => (Array.isArray(x) ? x.map((i) => `- ${i}`).join('\n') : String(x ?? ''));
const field = (label, value) => `**${label}:** ${value ?? '—'}`;

let md = '';
md += `# ${v.dokument.titel}\n\n`;
md += `> ${v.dokument.hinweis}\n\n`;
md += `**Stand:** ${v.dokument.stand}\n\n`;

md += `## Verantwortlicher\n\n`;
const r = v.verantwortlicher;
md += `${field('Name', r.name)}  \n`;
md += `${field('Marke', r.marke)}  \n`;
md += `${field('Anschrift', r.anschrift)}  \n`;
md += `${field('Vertreten durch', r.vertreten_durch)}  \n`;
md += `${field('Kontakt', r.kontakt)}  \n`;
md += `${field('Datenschutzbeauftragter', r.datenschutzbeauftragter)}\n\n`;

md += `## Verarbeitungstätigkeiten\n\n`;
for (const t of v.taetigkeiten) {
  md += `### ${t.id} — ${t.bezeichnung}\n\n`;
  md += `${field('Status', t.status)}\n\n`;
  md += `${field('Zwecke', t.zwecke)}\n\n`;
  md += `${field('Rechtsgrundlage', t.rechtsgrundlage)}\n\n`;
  md += `${field('Betroffene Personen', t.betroffene_personen)}\n\n`;
  md += `**Datenkategorien:**\n${arr(t.datenkategorien)}\n\n`;
  md += `**Empfänger:**\n${arr(t.empfaenger)}\n\n`;
  md += `${field('Auftragsverarbeiter', t.auftragsverarbeiter)}\n\n`;
  md += `${field('Drittlandtransfer', t.drittlandtransfer)}\n\n`;
  md += `${field('Löschfrist', t.loeschfrist)}\n\n`;
  md += `${field('Technische & organisatorische Maßnahmen', t.tom)}\n\n`;
  md += `---\n\n`;
}

if (Array.isArray(v.abgeloeste_verarbeiter) && v.abgeloeste_verarbeiter.length) {
  md += `## Abgelöste / archivierte Verarbeiter\n\n`;
  for (const a of v.abgeloeste_verarbeiter) {
    md += `### ${a.name}\n\n`;
    md += `${field('Ehemalige Tätigkeit', a.ehemalige_taetigkeit)}\n\n`;
    md += `${field('Hinweis', a.hinweis)}\n\n`;
  }
}

md += `\n_Generiert aus vvt.json mit intern/build-vvt.mjs — nicht von Hand bearbeiten._\n`;

writeFileSync(out, md, 'utf8');
console.log(`VVT generiert: ${out} (${v.taetigkeiten.length} Tätigkeiten, Stand ${v.dokument.stand})`);
