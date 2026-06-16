# Verzeichnis von Verarbeitungstätigkeiten (Art. 30 Abs. 1 DSGVO)

> Interne Dokumentation – nicht für die Veröffentlichung bestimmt. Quelle der Wahrheit ist diese JSON-Datei; vvt.md wird daraus generiert (siehe README.md).

**Stand:** 2026-06-16

## Verantwortlicher

**Name:** URBANMAKER UG (haftungsbeschränkt)  
**Marke:** leanAM  
**Anschrift:** Geringhoffstraße 48, 48163 Münster, Deutschland  
**Vertreten durch:** Juri Boos (Geschäftsführer)  
**Kontakt:** hq@leanam.com · +49 (0) 250 222 941 80  
**Datenschutzbeauftragter:** Nicht bestellt – keine Benennungspflicht nach Art. 37 DSGVO (keine Kerntätigkeit mit umfangreicher/regelmäßiger Überwachung, < 20 Personen ständig mit Verarbeitung beschäftigt).

## Verarbeitungstätigkeiten

### VT-01 — Bearbeitung von Kontakt- und Demo-Anfragen über das Website-Formular

**Status:** geplant – löst den bisherigen Anbieter Web3Forms (Indien) ab. Bis zur Umstellung gilt der Eintrag für Web3Forms (siehe Hinweis am Dateiende).

**Zwecke:** Beantwortung und Bearbeitung von Anfragen, Anbahnung von Geschäftsbeziehungen, Terminvereinbarung.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Anfragebearbeitung).

**Betroffene Personen:** Interessenten, (potenzielle) Kunden, deren Ansprechpartner.

**Datenkategorien:**
- Vor- und Nachname
- Unternehmen
- E-Mail-Adresse
- Telefonnummer (optional)
- Funktion (optional)
- Thema
- Nachrichteninhalt

**Empfänger:**
- Formcarry (Formular-Backend, Auftragsverarbeiter)
- interne Bearbeitung per E-Mail (hq@leanam.com)

**Auftragsverarbeiter:** Formcarry – Speicherung in EU-Rechenzentrum (Frankfurt am Main, AWS). AVV nach Art. 28 DSGVO als elektronisch einbezogener Vertrag (DPA: https://formcarry.com/legal/data-processing-agreement, PDF abgelegt am: TODO-Datum).

**Drittlandtransfer:** Nein – Verarbeitung innerhalb der EU.

**Löschfrist:** Löschung, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten (z. B. § 257 HGB, § 147 AO) entgegenstehen.

**Technische & organisatorische Maßnahmen:** TLS/HTTPS-Übertragung; Zugriff nur durch berechtigte Personen; Spam-Schutz per Honeypot; keine externe Captcha-Einbindung.

---

### VT-02 — Terminbuchung (Demo / Erstgespräch) über Calendly

**Status:** aktiv

**Zwecke:** Vereinbarung von Demo- und Beratungsterminen auf Wunsch der betroffenen Person.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen).

**Betroffene Personen:** Interessenten, (potenzielle) Kunden.

**Datenkategorien:**
- Name
- E-Mail-Adresse
- gewählter Termin
- ggf. freiwillige Angaben

**Empfänger:**
- Calendly LLC (Auftragsverarbeiter)

**Auftragsverarbeiter:** Calendly LLC, Atlanta (USA). DPA verfügbar (https://calendly.com/privacy).

**Drittlandtransfer:** Ja – USA. Grundlage: EU-US Data Privacy Framework (Calendly zertifiziert) ergänzt durch EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).

**Löschfrist:** Löschung nach Durchführung/Absage des Termins bzw. nach Wegfall des Zwecks.

**Technische & organisatorische Maßnahmen:** TLS/HTTPS; Calendly nur verlinkt, nicht eingebettet – Datenfluss erst nach Klick durch die betroffene Person.

---

### VT-03 — Bereitstellung der Website und Server-Logfiles (Hosting)

**Status:** aktiv

**Zwecke:** Technische Auslieferung der Website, Gewährleistung von Stabilität und Sicherheit.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherer und zuverlässiger Bereitstellung).

**Betroffene Personen:** Besucher der Website.

**Datenkategorien:**
- IP-Adresse
- Datum/Uhrzeit des Zugriffs
- Browsertyp/User-Agent
- Betriebssystem
- abgerufene Ressourcen

**Empfänger:**
- Cloudflare, Inc. (Hosting/CDN, Auftragsverarbeiter)

**Auftragsverarbeiter:** Cloudflare, Inc., San Francisco (USA). DPA verfügbar.

**Drittlandtransfer:** Ja – USA. Grundlage: EU-US Data Privacy Framework (Cloudflare zertifiziert) ergänzt durch EU-Standardvertragsklauseln (Art. 46 DSGVO).

**Löschfrist:** Server-Logs werden nach kurzer Zeit automatisiert gelöscht bzw. anonymisiert (gemäß Cloudflare-Voreinstellungen).

**Technische & organisatorische Maßnahmen:** TLS/HTTPS; selbst gehostete Schriftarten (keine externen Font-CDNs); keine Marketing-/Tracking-Cookies.

---

### VT-04 — E-Mail-Kommunikation

**Status:** aktiv – Angaben zum Hoster ergänzen

**Zwecke:** Korrespondenz mit Interessenten, Kunden und Geschäftspartnern.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b und lit. f DSGVO.

**Betroffene Personen:** Kommunikationspartner.

**Datenkategorien:**
- Name
- E-Mail-Adresse
- Kommunikationsinhalt
- Metadaten der E-Mail

**Empfänger:**
- E-Mail-/Hosting-Dienstleister (Auftragsverarbeiter)

**Auftragsverarbeiter:** TODO: Name und Sitz des E-Mail-/Server-Hosters eintragen (z. B. Plesk-Server-Anbieter), AVV-Status ergänzen.

**Drittlandtransfer:** TODO: prüfen (i. d. R. nein, wenn deutscher/EU-Hoster).

**Löschfrist:** Nach Wegfall des Zwecks und Ablauf gesetzlicher Aufbewahrungsfristen.

**Technische & organisatorische Maßnahmen:** Transportverschlüsselung (TLS); Zugriff nur berechtigte Personen.

---

## Abgelöste / archivierte Verarbeiter

### Web3Forms (Spacedev / Aditya Dhanraj, Indien)

**Ehemalige Tätigkeit:** Formular-Backend für Kontaktanfragen (VT-01).

**Hinweis:** Wird durch Formcarry (EU/Frankfurt) abgelöst. Drittlandtransfer Indien (kein Angemessenheitsbeschluss) entfällt damit. Eintrag bis zum vollständigen Umstieg zu Dokumentationszwecken behalten, danach archivieren.


_Generiert aus vvt.json mit intern/build-vvt.mjs — nicht von Hand bearbeiten._
