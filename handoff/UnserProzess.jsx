// UnserProzess.jsx — leanAM process section, Variant D "Engineering Timeline"
// Drop-in React component. No external deps. Scoped via a single root class.
// Loads its own fonts (Inter + JetBrains Mono) idempotently.

import React, { useEffect } from "react";

const STEPS = [
  {
    n: "01",
    title: "Analyse",
    kicker: "Discovery",
    duration: "1–2 Wochen",
    body: "Wir prüfen Ihr Bauteilportfolio, Ihre Stückzahlen und Anforderungen — und identifizieren die Use-Cases mit dem höchsten Hebel.",
    bullets: ["Bauteil-Screening", "Use-Case-Matrix", "Business-Case v0"],
    weight: 10,
  },
  {
    n: "02",
    title: "Konzept",
    kicker: "Design",
    duration: "3–6 Wochen",
    body: "Auswahl der passenden Technologie, Materialien und Maschinen. Wir entwerfen Prozess-Layout, IT-Architektur und Business-Case.",
    bullets: ["Technologie- & Materialwahl", "Prozess- & IT-Layout", "Investitionsplanung"],
    weight: 25,
  },
  {
    n: "03",
    title: "Implementierung",
    kicker: "Build",
    duration: "8–16 Wochen",
    body: "Inbetriebnahme der Hardware, Roll-out der leanAM-Software, Integration in ERP/CAQ und Schulung Ihres Teams — operativ, hands-on.",
    bullets: ["Hardware-Inbetriebnahme", "Software & ERP/CAQ", "Team-Enablement"],
    weight: 40,
  },
  {
    n: "04",
    title: "Skalierung",
    kicker: "Operate",
    duration: "fortlaufend",
    body: "Wir begleiten Sie in der Hochlaufphase, optimieren KPIs und übernehmen — wenn Sie möchten — Spitzenlasten als B2B-Service.",
    bullets: ["KPI-Tuning", "Ramp-up Support", "B2B-Overflow optional"],
    weight: 25,
  },
];

function ensureFonts() {
  if (typeof document === "undefined") return;
  if (document.getElementById("leanam-prozess-fonts")) return;
  const link = document.createElement("link");
  link.id = "leanam-prozess-fonts";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap";
  document.head.appendChild(link);
}

export default function UnserProzess() {
  useEffect(ensureFonts, []);
  const totalWeight = STEPS.reduce((a, b) => a + b.weight, 0);
  const gridTemplate = STEPS.map((s) => `${s.weight}fr`).join(" ");

  return (
    <section className="lam-prozess" aria-labelledby="lam-prozess-h">
      <Style />
      <div className="lam-prozess__inner">
        <header className="lam-prozess__head">
          <div className="lam-prozess__eyebrow">// UNSER PROZESS</div>
          <h2 id="lam-prozess-h" className="lam-prozess__title">
            Von der ersten Analyse zur skalierenden AM-Linie.
          </h2>
          <p className="lam-prozess__lede">
            Strukturiertes Vorgehen — vom ersten Gespräch bis zur dauerhaften
            Wertschöpfung. Sie sehen jederzeit, wo wir stehen.
          </p>
        </header>

        <div className="lam-prozess__axis" aria-hidden="true">
          <span>T0 · Kickoff</span>
          <span className="lam-prozess__axis-line" />
          <span>T+ Wochen →</span>
        </div>

        <div
          className="lam-prozess__bars"
          style={{ gridTemplateColumns: gridTemplate }}
          aria-hidden="true"
        >
          {STEPS.map((s, i) => (
            <span key={s.n} className={`lam-prozess__bar lam-prozess__bar--${i}`} />
          ))}
        </div>

        <ol
          className="lam-prozess__phases"
          style={{ gridTemplateColumns: gridTemplate }}
        >
          {STEPS.map((s) => (
            <li key={s.n} className="lam-prozess__phase">
              <div className="lam-prozess__phase-meta">
                <span className="lam-prozess__phase-code">PHASE_{s.n}</span>
                <span className="lam-prozess__phase-duration">{s.duration}</span>
              </div>
              <h3 className="lam-prozess__phase-title">{s.title}</h3>
              <p className="lam-prozess__phase-body">{s.body}</p>
              <ul className="lam-prozess__deliverables">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Style() {
  return (
    <style>{`
      .lam-prozess{
        --ink:#0A1628;
        --ink-2:#102542;
        --cyan:#6FD8F1;
        --cyan-deep:#1FA9D6;
        --paper:#F4F8FB;
        --muted:rgba(244,248,251,.7);
        --muted-2:rgba(244,248,251,.5);
        --line:rgba(111,216,241,.15);
        background:var(--ink);
        color:var(--paper);
        padding:clamp(64px,8vw,96px) clamp(20px,5vw,80px) clamp(80px,10vw,120px);
        font-family:'Inter',system-ui,sans-serif;
        position:relative; overflow:hidden;
      }
      .lam-prozess__inner{max-width:1320px;margin:0 auto;}
      .lam-prozess__head{text-align:center;margin-bottom:clamp(48px,6vw,72px);}
      .lam-prozess__eyebrow{
        font-family:'JetBrains Mono',ui-monospace,monospace;
        font-size:11px; font-weight:600; letter-spacing:.28em;
        color:var(--cyan); text-transform:uppercase; margin-bottom:18px;
      }
      .lam-prozess__title{
        font-size:clamp(32px,5vw,56px); font-weight:700;
        line-height:1.05; letter-spacing:-0.02em;
        margin:0 auto 18px; max-width:880px;
      }
      .lam-prozess__lede{
        font-size:clamp(15px,1.4vw,17px);
        color:rgba(244,248,251,.65);
        line-height:1.55; max-width:620px; margin:0 auto;
      }
      .lam-prozess__axis{
        display:flex; align-items:center;
        font-family:'JetBrains Mono',ui-monospace,monospace; font-size:11px;
        color:rgba(111,216,241,.7); margin-bottom:18px; padding:0 4px;
      }
      .lam-prozess__axis-line{
        flex:1; height:1px; margin:0 14px;
        background:linear-gradient(90deg,rgba(111,216,241,.4),rgba(111,216,241,.1));
      }
      .lam-prozess__bars{display:grid; gap:4px; margin-bottom:8px;}
      .lam-prozess__bar{height:10px; border-radius: 0; display:block;}
      .lam-prozess__bar--0{background:rgba(111,216,241,.35);}
      .lam-prozess__bar--1{background:rgba(111,216,241,.55);}
      .lam-prozess__bar--2{background:rgba(111,216,241,.85);}
      .lam-prozess__bar--3{background:linear-gradient(90deg,var(--cyan),rgba(111,216,241,.15));}

      .lam-prozess__phases{
        list-style:none; padding:0; margin:0;
        display:grid; gap:4px;
      }
      .lam-prozess__phase{
        background:rgba(255,255,255,.03);
        border:1px solid var(--line);
        border-radius: 0;
        padding:24px 22px 26px;
        backdrop-filter:blur(8px);
      }
      .lam-prozess__phase-meta{
        display:flex; align-items:baseline; justify-content:space-between;
        margin-bottom:18px;
      }
      .lam-prozess__phase-code{
        font-family:'JetBrains Mono',ui-monospace,monospace;
        font-size:12px; color:var(--cyan); letter-spacing:.1em;
      }
      .lam-prozess__phase-duration{
        font-family:'JetBrains Mono',ui-monospace,monospace;
        font-size:11px; color:var(--muted-2);
      }
      .lam-prozess__phase-title{
        font-size:22px; font-weight:600;
        margin:0 0 12px; letter-spacing:-0.01em;
      }
      .lam-prozess__phase-body{
        font-size:13.5px; color:var(--muted);
        line-height:1.55; margin:0 0 18px;
      }
      .lam-prozess__deliverables{
        list-style:none; padding:0; margin:0;
        display:flex; flex-direction:column; gap:6px;
      }
      .lam-prozess__deliverables li{
        font-size:12px; color:rgba(244,248,251,.85);
        display:flex; align-items:center; gap:8px;
      }
      .lam-prozess__deliverables li::before{
        content:""; width:4px; height:4px; border-radius:50%;
        background:var(--cyan); flex-shrink:0;
      }

      /* Tablet: 2 columns */
      @media (max-width: 1100px){
        .lam-prozess__bars,
        .lam-prozess__phases{
          grid-template-columns: 1fr 1fr !important;
        }
        .lam-prozess__bars{display:none;}
        .lam-prozess__axis{display:none;}
      }
      /* Mobile: 1 column with left rail */
      @media (max-width: 720px){
        .lam-prozess__phases{
          grid-template-columns: 1fr !important;
          position:relative; padding-left:24px;
        }
        .lam-prozess__phases::before{
          content:""; position:absolute; left:8px; top:8px; bottom:8px;
          width:2px;
          background:linear-gradient(180deg,var(--cyan),rgba(111,216,241,.1));
        }
        .lam-prozess__phase{position:relative;}
        .lam-prozess__phase::before{
          content:""; position:absolute; left:-22px; top:28px;
          width:10px; height:10px; border-radius:50%;
          background:var(--cyan);
          box-shadow:0 0 0 4px var(--ink), 0 0 0 5px rgba(111,216,241,.3);
        }
      }

      @media (prefers-reduced-motion: reduce){
        .lam-prozess *{animation:none!important; transition:none!important;}
      }
    `}</style>
  );
}
