/* global React */
// Sitewide redesign — leanAM, "Engineering Timeline" aesthetic.
// All sections share dark navy + cyan accent + Inter/JetBrains Mono.

// ------------------------------ Tokens ------------------------------
const T = {
  ink: '#0A1628',
  ink2: '#102542',
  inkDeep: '#060E1C',
  cyan: '#6FD8F1',
  cyanDeep: '#1FA9D6',
  paper: '#F4F8FB',
  muted: 'rgba(244,248,251,.72)',
  muted2: 'rgba(244,248,251,.5)',
  muted3: 'rgba(244,248,251,.35)',
  line: 'rgba(111,216,241,.15)',
  lineSoft: 'rgba(111,216,241,.08)',
  glass: 'rgba(255,255,255,.03)',
  glassHover: 'rgba(255,255,255,.05)',
};

const FONT_UI = "Inter, system-ui, sans-serif";
const FONT_MONO = "'JetBrains Mono', ui-monospace, monospace";

// ------------------------------ Atoms ------------------------------
function Eyebrow({children, align='center'}){
  return (
    <div style={{
      fontFamily:FONT_MONO, fontSize:11, fontWeight:600,
      letterSpacing:'0.28em', color:T.cyan, textTransform:'uppercase',
      textAlign:align, marginBottom:18,
    }}>{children}</div>
  );
}

function PrimaryBtn({children, icon}){
  return (
    <a href="#" style={{
      display:'inline-flex', alignItems:'center', gap:10,
      background:T.cyan, color:T.ink, border:'none',
      padding:'14px 22px', borderRadius:'var(--lam-r,0)',
      fontFamily:FONT_UI, fontSize:14, fontWeight:600,
      letterSpacing:'-0.005em', textDecoration:'none',
      transition:'background .2s',
    }}>{children} {icon && <span className="material-icons" style={{fontSize:18}}>{icon}</span>}</a>
  );
}

function GhostBtn({children, icon}){
  return (
    <a href="#" style={{
      display:'inline-flex', alignItems:'center', gap:10,
      background:'transparent', color:T.paper,
      border:`1px solid ${T.line}`,
      padding:'13px 22px', borderRadius:'var(--lam-r,0)',
      fontFamily:FONT_UI, fontSize:14, fontWeight:500,
      textDecoration:'none', transition:'all .2s',
    }}>{icon && <span className="material-icons" style={{fontSize:18, color:T.cyan}}>{icon}</span>} {children}</a>
  );
}

function Pill({icon, children}){
  return (
    <div style={{
      display:'inline-flex', alignItems:'center', gap:8,
      padding:'8px 14px', borderRadius:'var(--lam-r,0)',
      background:T.glass, border:`1px solid ${T.line}`,
      fontSize:12.5, color:T.paper,
      fontFamily:FONT_UI, fontWeight:500,
    }}>
      {icon && <span className="material-icons" style={{fontSize:16, color:T.cyan}}>{icon}</span>}
      {children}
    </div>
  );
}

function IconTile({icon, size=56}){
  return (
    <div style={{
      width:size, height:size, borderRadius:'var(--lam-r,0)',
      background:`linear-gradient(135deg, rgba(111,216,241,.18), rgba(111,216,241,.04))`,
      border:`1px solid ${T.line}`,
      display:'flex', alignItems:'center', justifyContent:'center',
      color:T.cyan, fontSize:size*0.5,
    }}>
      <span className="material-icons" style={{fontSize:size*0.5}}>{icon}</span>
    </div>
  );
}

function SectionShell({children, bg=T.ink, padY='clamp(80px,8vw,120px)', padX='clamp(20px,5vw,80px)'}){
  return (
    <section style={{
      background:bg, color:T.paper,
      padding:`${padY} ${padX}`,
      fontFamily:FONT_UI,
      position:'relative', overflow:'hidden',
    }}>
      <div style={{maxWidth:1320, margin:'0 auto', position:'relative'}}>
        {children}
      </div>
    </section>
  );
}

function SectionHeader({eyebrow, title, lede, align='center', titleMax=820}){
  return (
    <header style={{textAlign:align, marginBottom:64, maxWidth: align==='center'?1100:'100%', margin: align==='center'?'0 auto 64px':'0 0 64px'}}>
      <Eyebrow align={align}>{eyebrow}</Eyebrow>
      <h2 style={{
        fontSize:'clamp(32px,4.4vw,52px)', fontWeight:700,
        lineHeight:1.05, letterSpacing:'-0.02em',
        margin: align==='center'?`0 auto 18px`:`0 0 18px`,
        maxWidth: titleMax,
      }}>{title}</h2>
      {lede && <p style={{
        fontSize:'clamp(15px,1.3vw,17px)', color:'rgba(244,248,251,.65)',
        lineHeight:1.55, maxWidth:680, margin: align==='center'?'0 auto':0,
      }}>{lede}</p>}
    </header>
  );
}

// ------------------------------ Tokens display ------------------------------
function DesignTokens(){
  return (
    <SectionShell bg={T.ink} padY="60px">
      <Eyebrow align="left">// DESIGN TOKENS — Engineering Timeline</Eyebrow>
      <h2 style={{fontSize:38, fontWeight:700, margin:'0 0 36px', letterSpacing:'-0.02em', lineHeight:1.1}}>
        Das Fundament des neuen leanAM-Looks.
      </h2>

      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:32}}>
        {/* Colors */}
        <div style={{border:`1px solid ${T.line}`, borderRadius:'var(--lam-r,0)', padding:24}}>
          <div style={{fontFamily:FONT_MONO, fontSize:11, color:T.cyan, letterSpacing:'0.1em', marginBottom:14}}>COLORS</div>
          {[
            ['Ink', T.ink, '#0A1628'],
            ['Ink-2', T.ink2, '#102542'],
            ['Cyan', T.cyan, '#6FD8F1'],
            ['Cyan-Deep', T.cyanDeep, '#1FA9D6'],
            ['Paper', T.paper, '#F4F8FB'],
          ].map(([name, color, hex]) => (
            <div key={name} style={{display:'flex', alignItems:'center', gap:14, padding:'10px 0', borderBottom:`1px solid ${T.lineSoft}`}}>
              <div style={{width:36, height:36, borderRadius:'var(--lam-r,0)', background:color, border:'1px solid rgba(255,255,255,.06)'}}/>
              <div style={{flex:1}}>
                <div style={{fontSize:13, fontWeight:600}}>{name}</div>
                <div style={{fontFamily:FONT_MONO, fontSize:11, color:T.muted2}}>{hex}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Type */}
        <div style={{border:`1px solid ${T.line}`, borderRadius:'var(--lam-r,0)', padding:24}}>
          <div style={{fontFamily:FONT_MONO, fontSize:11, color:T.cyan, letterSpacing:'0.1em', marginBottom:14}}>TYPOGRAPHY</div>
          <div style={{borderBottom:`1px solid ${T.lineSoft}`, paddingBottom:14, marginBottom:14}}>
            <div style={{fontSize:32, fontWeight:700, letterSpacing:'-0.02em', lineHeight:1.05}}>Display 52/56</div>
            <div style={{fontFamily:FONT_MONO, fontSize:10, color:T.muted2, marginTop:4}}>Inter · 700 · −0.02em</div>
          </div>
          <div style={{borderBottom:`1px solid ${T.lineSoft}`, paddingBottom:14, marginBottom:14}}>
            <div style={{fontSize:22, fontWeight:600}}>Heading 22/28</div>
            <div style={{fontFamily:FONT_MONO, fontSize:10, color:T.muted2, marginTop:4}}>Inter · 600 · −0.01em</div>
          </div>
          <div style={{borderBottom:`1px solid ${T.lineSoft}`, paddingBottom:14, marginBottom:14}}>
            <div style={{fontSize:15, color:T.muted, lineHeight:1.55}}>Body — strukturierte Sätze in 14–17 px, line-height 1.55.</div>
            <div style={{fontFamily:FONT_MONO, fontSize:10, color:T.muted2, marginTop:4}}>Inter · 400 · 1.55</div>
          </div>
          <div>
            <div style={{fontFamily:FONT_MONO, fontSize:11, color:T.cyan, letterSpacing:'0.28em', textTransform:'uppercase'}}>// EYEBROW</div>
            <div style={{fontFamily:FONT_MONO, fontSize:10, color:T.muted2, marginTop:4}}>JetBrains Mono · 600 · 0.28em</div>
          </div>
        </div>

        {/* Spacing & shapes */}
        <div style={{border:`1px solid ${T.line}`, borderRadius:'var(--lam-r,0)', padding:24}}>
          <div style={{fontFamily:FONT_MONO, fontSize:11, color:T.cyan, letterSpacing:'0.1em', marginBottom:14}}>SHAPE &amp; SPACING</div>
          <div style={{display:'flex', gap:10, marginBottom:18}}>
            {[0, 2, 4, 6].map(r => (
              <div key={r} style={{flex:1, height:56, background:T.glass, border:`1px solid ${T.line}`, borderRadius:r, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:FONT_MONO, fontSize:11, color:T.muted2}}>{r}px</div>
            ))}
          </div>
          <div style={{fontFamily:FONT_MONO, fontSize:11, color:T.muted2, marginBottom:8}}>SECTION PADDING</div>
          <div style={{fontFamily:FONT_MONO, fontSize:13, color:T.paper, lineHeight:1.7}}>
            padY: clamp(80px, 8vw, 120px)<br/>
            padX: clamp(20px, 5vw, 80px)<br/>
            max-w: 1320px
          </div>
          <div style={{height:1, background:T.lineSoft, margin:'18px 0'}}/>
          <div style={{fontFamily:FONT_MONO, fontSize:11, color:T.muted2, marginBottom:8}}>CARD STYLE</div>
          <div style={{
            background:T.glass, border:`1px solid ${T.line}`, borderRadius:'var(--lam-r,0)',
            padding:'12px 14px', fontSize:12, color:T.muted,
            backdropFilter:'blur(8px)',
          }}>
            bg .03 / border cyan/15 / blur(8px)
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

// ------------------------------ Header ------------------------------
function Header(){
  const navItems = ['Start', 'leanAM MES', 'Prozessberatung', 'Entwicklung', 'Über uns', 'Wissen'];
  return (
    <header style={{
      background:'rgba(10,22,40,.85)', backdropFilter:'blur(14px)',
      borderBottom:`1px solid ${T.line}`,
      padding:'14px clamp(20px,5vw,40px)',
      fontFamily:FONT_UI, color:T.paper,
      position:'sticky', top:0, zIndex:50,
    }}>
      <div style={{maxWidth:1440, margin:'0 auto', display:'flex', alignItems:'center', gap:32}}>
        {/* Logo */}
        <a href="#" style={{display:'flex', alignItems:'center', textDecoration:'none', color:T.paper}}>
          <img src="assets/leanam-logo.png" alt="leanAM" style={{height:38, width:'auto', display:'block'}}/>
        </a>
        {/* Nav */}
        <nav style={{flex:1, display:'flex', justifyContent:'center', gap:6}}>
          {navItems.map((item,i) => (
            <a key={item} href="#" style={{
              padding:'8px 14px', borderRadius:'var(--lam-r,0)', textDecoration:'none',
              fontSize:13.5, fontWeight: i===0?600:500,
              color: i===0?T.paper:T.muted,
              fontFamily:FONT_UI,
              position:'relative',
            }}>{item}{i===0 && <span style={{position:'absolute', left:'25%', right:'25%', bottom:2, height:2, borderRadius:'var(--lam-r,0)', background:T.cyan}}/>}</a>
          ))}
        </nav>
        {/* Right */}
        <div style={{display:'flex', alignItems:'center', gap:14}}>
          <div style={{fontFamily:FONT_MONO, fontSize:12, color:T.muted2, letterSpacing:'0.08em'}}>
            <span style={{color:T.paper}}>DE</span> <span style={{color:T.muted3, margin:'0 4px'}}>|</span> EN
          </div>
          <PrimaryBtn icon="mail">Kontakt</PrimaryBtn>
        </div>
      </div>
    </header>
  );
}

// ------------------------------ Hero ------------------------------
function Hero(){
  return (
    <SectionShell bg={`radial-gradient(ellipse 80% 60% at 80% 20%, rgba(31,169,214,.18) 0%, transparent 60%), ${T.ink}`} padY="clamp(80px,9vw,140px)">
      {/* grid overlay */}
      <svg width="100%" height="100%" style={{position:'absolute', inset:0, opacity:.05, pointerEvents:'none'}}>
        <defs>
          <pattern id="heroGrid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M56 0H0V56" fill="none" stroke={T.cyan} strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGrid)"/>
      </svg>

      <div style={{display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:60, alignItems:'center', position:'relative'}}>
        <div>
          <Eyebrow align="left">// ADDITIVE MANUFACTURING · SOFTWARE · BERATUNG</Eyebrow>
          <h1 style={{
            fontSize:'clamp(40px,5.4vw,72px)', fontWeight:700,
            lineHeight:1.02, letterSpacing:'-0.025em',
            margin:'0 0 24px',
          }}>
            Additive Manufacturing<br/>
            <span style={{
              fontStyle:'var(--lam-accent-style, italic)', fontWeight:500, color:'var(--lam-accent-color, #6FD8F1)',
              textDecoration:'var(--lam-accent-deco, none)', textDecorationColor:'#6FD8F1', textDecorationThickness:'2px', textUnderlineOffset:'8px',
            }}>strategisch nutzen.</span>
          </h1>
          <p style={{
            fontSize:'clamp(16px,1.3vw,19px)', color:'rgba(244,248,251,.7)',
            lineHeight:1.55, maxWidth:540, margin:'0 0 32px',
          }}>
            Profitabel, skalierbar, praxisnah. Wir helfen produzierenden Unternehmen, additive Fertigung als echten Wettbewerbsvorteil zu etablieren — von der Strategie über die Implementierung bis zum laufenden Betrieb.
          </p>
          <div style={{display:'flex', gap:12, flexWrap:'wrap', marginBottom:36}}>
            <PrimaryBtn icon="arrow_forward">Demo anfragen</PrimaryBtn>
            <GhostBtn>leanAM MES kennenlernen</GhostBtn>
          </div>
          <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
            <Pill icon="verified">Made in Germany</Pill>
            <Pill icon="shield_lock">DSGVO-konform</Pill>
            <Pill icon="cloud_off">On-Premise</Pill>
          </div>
        </div>

        {/* Right: glass benefits card */}
        <div style={{
          background:T.glass, border:`1px solid ${T.line}`, borderRadius:'var(--lam-r,0)',
          padding:32, backdropFilter:'blur(12px)',
          boxShadow:'0 24px 64px -32px rgba(111,216,241,.2)',
        }}>
          <div style={{
            fontFamily:FONT_MONO, fontSize:11, color:T.cyan,
            letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:18,
          }}>// WAS SIE BEKOMMEN</div>
          {[
            'Strategieberatung von Make-or-Buy bis Skalierung',
            'leanAM MES — eigene Manufacturing Execution Software',
            'Maschinen unterschiedlicher Hersteller zentral steuern',
            'Ohne Cloud-Zwang — volle Datenkontrolle im Werk',
            'Maßgeschneiderte Prozessentwicklung aus Soft- & Hardware',
          ].map((item,i) => (
            <div key={i} style={{
              display:'flex', alignItems:'flex-start', gap:14,
              padding:'14px 0', borderBottom: i<4?`1px solid ${T.lineSoft}`:'none',
            }}>
              <span className="material-icons" style={{fontSize:18, color:T.cyan, marginTop:2}}>check_circle</span>
              <span style={{fontSize:14, color:T.paper, lineHeight:1.5}}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

// ------------------------------ Drei Säulen ------------------------------
function DreiSaeulen(){
  const pillars = [
    {
      icon:'insights', kicker:'Strategie · Workshop · Roadmap', title:'Consulting',
      body:'Strategische Prozessberatung von der Potenzialanalyse über Business-Cases bis zur Roadmap. Wir bewerten, ob, wie und mit welchem ROI sich additive Fertigung in Ihrem Betrieb lohnt.',
      bullets:['Make-or-Buy-Analysen', 'Technologie-Auswahl', 'Wirtschaftlichkeitsbewertung'],
    },
    {
      icon:'deployed_code', kicker:'Software · MES · Integration', title:'Implementierung',
      body:'Prozess-Entwicklung und Inbetriebnahme. Vom maßgeschneiderten MES über Druckerintegration bis zur Anbindung an Ihr ERP — wir liefern produktiv einsetzbare Werkzeuge, keine PowerPoint-Folien.',
      bullets:['leanAM MES On-Premise', 'Druckeranbindung, ohne Cloud', 'ERP-/CAQ-Integration'],
    },
    {
      icon:'factory', kicker:'Service · Lohnfertigung · Pilotreihen', title:'B2B Services',
      body:'Druckservice, Lohnfertigung und Pilotreihen aus unserem eigenen Maschinenpark. Wir skalieren mit Ihnen von der Einzelanwendung bis zur Kleinserie — mit dokumentierter Qualität.',
      bullets:['Druckservice & Prototypen', 'Kleinserien-Fertigung', 'Materialqualifizierung'],
    },
  ];
  return (
    <SectionShell bg={T.ink}>
      <SectionHeader
        eyebrow="// DREI SÄULEN"
        title="Ihr Partner für strategische Prozessinnovation."
        lede="Wir verbinden Software, Beratung und operative Umsetzung — damit additive Fertigung in Ihrem Unternehmen messbaren Wert schafft."
      />
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24}}>
        {pillars.map((p,i) => (
          <div key={p.title} style={{
            background:T.glass, border:`1px solid ${T.line}`, borderRadius:'var(--lam-r,0)',
            padding:'32px 30px 34px', backdropFilter:'blur(8px)',
            position:'relative', overflow:'hidden',
          }}>
            <div style={{position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg, ${T.cyan}, transparent)`, opacity: 0.6 - i*0.15}}/>
            <IconTile icon={p.icon}/>
            <div style={{fontFamily:FONT_MONO, fontSize:11, color:T.muted2, letterSpacing:'0.14em', textTransform:'uppercase', marginTop:24, marginBottom:8}}>{p.kicker}</div>
            <h3 style={{fontSize:26, fontWeight:700, margin:'0 0 14px', letterSpacing:'-0.01em'}}>{p.title}</h3>
            <p style={{fontSize:14.5, color:T.muted, lineHeight:1.6, margin:'0 0 22px'}}>{p.body}</p>
            <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10}}>
              {p.bullets.map(b => (
                <li key={b} style={{display:'flex', alignItems:'center', gap:10, fontSize:13.5, color:T.paper}}>
                  <span className="material-icons" style={{fontSize:16, color:T.cyan}}>check</span>{b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

// ------------------------------ Warum leanAM ------------------------------
function WarumLeanam(){
  const reasons = [
    ['Über 14 Jahre AM-Erfahrung', 'Von der Grundlagenforschung bis zur prozesssicheren Serienfertigung.'],
    ['On-Premise statt Cloud-Zwang', 'Ihre Fertigungs­daten verlassen Ihr Werk nicht — auch bei mehreren Standorten.'],
    ['Made in Germany', 'Entwicklung, Support und Beratung aus Deutschland. DSGVO-konform.'],
    ['Branchen-Erfahrung', 'Medizintechnik, Aerospace, Interior, Lehre & Forschung.'],
    ['Strategie & Operations', 'Vom Business-Case bis zur Maschine — und wir schließen die Lücke dazwischen.'],
    ['Schnittstellen-Kompetenz', 'Vermittlung zwischen IT, Produktion und Management.'],
    ['Skalierung im Fokus', 'Vom ersten Anwendungsfall zur dokumentierten Serienfertigung.'],
    ['Ehrliche Beratung', 'Wir sagen auch, wann sich AM nicht lohnt. Kein Verkaufs-Pitch.'],
  ];
  return (
    <SectionShell bg={T.inkDeep}>
      <SectionHeader
        eyebrow="// WARUM LEANAM"
        title="Wir sind Praktiker — keine reinen Berater."
        lede="Acht klare Gründe, weshalb Industrie-Kunden uns Software, Beratung und Fertigung anvertrauen."
      />
      <div style={{
        display:'grid', gridTemplateColumns:'repeat(4, 1fr)',
        border:`1px solid ${T.line}`, borderRadius:'var(--lam-r,0)', overflow:'hidden',
      }}>
        {reasons.map(([title, body], i) => {
          const col = i % 4, row = Math.floor(i / 4);
          return (
            <div key={title} style={{
              padding:'30px 28px',
              borderRight: col < 3 ? `1px solid ${T.lineSoft}` : 'none',
              borderTop: row > 0 ? `1px solid ${T.lineSoft}` : 'none',
              minHeight:200,
              position:'relative',
            }}>
              <div style={{
                fontFamily:FONT_MONO, fontSize:11, color:T.cyan,
                marginBottom:14, letterSpacing:'0.1em',
              }}>0{i+1}</div>
              <h3 style={{fontSize:17, fontWeight:600, margin:'0 0 10px', lineHeight:1.25, letterSpacing:'-0.005em'}}>{title}</h3>
              <p style={{fontSize:13, color:T.muted, lineHeight:1.55, margin:0}}>{body}</p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}

// ------------------------------ Leistungen ------------------------------
function Leistungen(){
  const services = [
    {
      icon:'analytics', kicker:'STRATEGIE · WORKSHOP · ROADMAP', title:'Prozessberatung',
      body:'Wir analysieren Ihr Bauteilportfolio, identifizieren AM-taugliche Anwendungen und liefern eine umsetzbare Roadmap inkl. Wirtschaftlichkeitsrechnung.',
      bullets:['Make-or-Buy für additive Fertigung', 'Bauteil-Screening & Use-Case-Bewertung', 'Investitions- und ROI-Modelle', 'Lieferanten- & Technologie-Auswahl', 'Schnittstellen-Moderation bei AM-Einführung'],
    },
    {
      icon:'terminal', kicker:'SOFTWARE · MES · INTEGRATION', title:'leanAM MES',
      body:'Unsere eigene MES-Software für moderne Fertigungsumgebungen — läuft bei Ihnen im Betrieb, ohne Cloud und ohne Abo. Steuert 3D-Drucker, Fräs- und Lasermaschinen sowie Robotik herstellerübergreifend.',
      bullets:['Auftragsmanagement & Job-Routing', 'Nicht nur für 3D-Drucker', 'Live-Maschinenstatus & Telemetrie', 'ERP- & CAQ-Anbindung'],
    },
    {
      icon:'code_blocks', kicker:'CUSTOM ENGINEERING', title:'Entwicklung',
      body:'Sie haben einen Sonderprozess oder eine eigene Maschinenflotte? Wir entwickeln maßgeschneiderte Software, Schnittstellen und Automatisierungen für Ihren Stack.',
      bullets:['Custom Workflows & Automatisierung', 'OPC UA / REST / MQTT-Schnittstellen', 'Slicer- & Druckersteuerung', 'Monitoring, Alerting, Reporting'],
    },
  ];
  return (
    <SectionShell bg={T.ink}>
      <SectionHeader
        eyebrow="// UNSERE LEISTUNGEN"
        title="Detailliert. Operativ. Belastbar."
        lede="Drei Schwerpunktbereiche, in denen wir Industrie-Kunden vom ersten Workshop bis zur dauerhaften Implementierung begleiten."
      />
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24}}>
        {services.map((s,i) => (
          <div key={s.title} style={{
            background:T.glass, border:`1px solid ${T.line}`, borderRadius:'var(--lam-r,0)',
            padding:'36px 30px 36px', backdropFilter:'blur(8px)',
            display:'flex', flexDirection:'column',
          }}>
            <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:24}}>
              <IconTile icon={s.icon} size={44}/>
              <div style={{fontFamily:FONT_MONO, fontSize:10, color:T.muted2, letterSpacing:'0.14em'}}>{s.kicker}</div>
            </div>
            <h3 style={{fontSize:30, fontWeight:700, margin:'0 0 14px', letterSpacing:'-0.015em'}}>{s.title}</h3>
            <p style={{fontSize:14.5, color:T.muted, lineHeight:1.6, margin:'0 0 24px'}}>{s.body}</p>
            <ul style={{listStyle:'none', padding:0, margin:'0 0 24px', display:'flex', flexDirection:'column', gap:12}}>
              {s.bullets.map(b => (
                <li key={b} style={{display:'flex', alignItems:'flex-start', gap:12, fontSize:13.5, color:T.paper, lineHeight:1.45}}>
                  <span className="material-icons" style={{fontSize:18, color:T.cyan, marginTop:1}}>check_circle</span>{b}
                </li>
              ))}
            </ul>
            <a href="#" style={{
              marginTop:'auto', display:'inline-flex', alignItems:'center', gap:8,
              color:T.cyan, textDecoration:'none', fontSize:13.5, fontWeight:600,
              padding:'10px 0', borderTop:`1px solid ${T.lineSoft}`,
            }}>Mehr erfahren <span className="material-icons" style={{fontSize:16}}>arrow_forward</span></a>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

// ------------------------------ Druckfarm-Rechner ------------------------------
function Druckfarm(){
  return (
    <SectionShell bg={T.inkDeep}>
      <div style={{
        background: `linear-gradient(135deg, rgba(31,169,214,.08), rgba(111,216,241,.02))`,
        border:`1px solid ${T.line}`, borderRadius:'var(--lam-r,0)',
        padding:'56px 56px 56px', position:'relative', overflow:'hidden',
      }}>
        <div style={{display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:48, alignItems:'center'}}>
          <div>
            <Eyebrow align="left">// KOSTENLOSER PLANUNGSRECHNER</Eyebrow>
            <h2 style={{fontSize:'clamp(32px,3.6vw,44px)', fontWeight:700, margin:'0 0 18px', letterSpacing:'-0.02em', lineHeight:1.1}}>
              Lohnt sich Ihre Druckfarm?
            </h2>
            <p style={{fontSize:16, color:T.muted, lineHeight:1.55, margin:'0 0 28px', maxWidth:520}}>
              Berechnen Sie in 4 Schritten Wirtschaftlichkeit, ROI und Break-even Ihrer 3D-Druckfarm — auf Basis branchenüblicher Kennzahlen. Inklusive persönlichem PDF-Report.
            </p>
            <ul style={{listStyle:'none', padding:0, margin:'0 0 32px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
              {[
                'Anschaffungs- und Betriebskosten',
                'Break-even, ROI & Rentabilität',
                'MES-Mehrwert in € ausgewiesen',
                'PDF-Report kostenlos & sofort',
              ].map(b => (
                <li key={b} style={{display:'flex', alignItems:'flex-start', gap:10, fontSize:13.5, color:T.paper, lineHeight:1.45}}>
                  <span className="material-icons" style={{fontSize:16, color:T.cyan, marginTop:2}}>check_circle</span>{b}
                </li>
              ))}
            </ul>
            <PrimaryBtn icon="calculate">Jetzt kostenlos berechnen</PrimaryBtn>
          </div>

          {/* Calculator mock */}
          <div style={{
            background:'rgba(10,22,40,.6)', border:`1px solid ${T.line}`, borderRadius:'var(--lam-r,0)',
            padding:24, fontFamily:FONT_MONO, fontSize:12, color:T.paper,
          }}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16, paddingBottom:14, borderBottom:`1px solid ${T.lineSoft}`}}>
              <span style={{color:T.cyan, letterSpacing:'0.12em'}}>// SCHRITT 3 / 4</span>
              <span style={{color:T.muted2}}>Output Modell</span>
            </div>
            {[
              ['Jahresumsatz', '€ 487.200', T.cyan],
              ['Jahresgewinn', '€ 142.800', T.paper],
              ['Break-even', '14,2 Mt.', T.paper],
              ['ROI (5 J.)', '+318 %', T.cyan],
              ['MES-Einsparung', '€ 38.400 / J.', T.cyan],
            ].map(([k, v, color]) => (
              <div key={k} style={{display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom:`1px solid ${T.lineSoft}`}}>
                <span style={{color:T.muted}}>{k}</span>
                <span style={{color, fontWeight:600}}>{v}</span>
              </div>
            ))}
            {/* sparkline */}
            <svg viewBox="0 0 200 60" style={{width:'100%', marginTop:16}} preserveAspectRatio="none">
              <defs>
                <linearGradient id="dfFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={T.cyan} stopOpacity="0.35"/>
                  <stop offset="100%" stopColor={T.cyan} stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0 50 L 30 44 L 60 38 L 90 30 L 120 22 L 150 14 L 180 8 L 200 5 L 200 60 L 0 60 Z" fill="url(#dfFill)"/>
              <path d="M0 50 L 30 44 L 60 38 L 90 30 L 120 22 L 150 14 L 180 8 L 200 5" fill="none" stroke={T.cyan} strokeWidth="1.5"/>
            </svg>
            <div style={{display:'flex', justifyContent:'space-between', fontSize:10, color:T.muted2, marginTop:6}}>
              <span>Jahr 1</span><span>Jahr 5</span>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

// ------------------------------ FAQ ------------------------------
function FAQ(){
  const items = [
    {q:'Läuft leanAM MES in der Cloud oder bei uns im Werk?', a:'leanAM MES läuft ausschließlich On-Premise — bei Ihnen im Betrieb. Keine Cloud, kein Abo, keine externe Datenhaltung. Sie behalten die volle Datenhoheit, auch in regulierten Branchen.'},
    {q:'Können wir Bambu-Lab-Drucker ohne Bambu Cloud betreiben?', a:'Ja. leanAM MES steuert Bambu-Lab-Drucker direkt im lokalen Netzwerk — ohne Bambu Cloud, ohne Account-Zwang. So bleiben Druckdaten vollständig in Ihrer Infrastruktur.'},
    {q:'Welche Branchen betreuen Sie typischerweise?', a:'Schwerpunkte sind Medizintechnik, Luft- und Raumfahrt, Interior-Industrie sowie Hochschulen. Darüber hinaus betreuen wir produzierende Mittelständler in Maschinen- und Anlagenbau.'},
    {q:'Was kostet ein Erstgespräch?', a:'Das Erstgespräch ist kostenlos und unverbindlich. In 30 Minuten klären wir, ob Ihr Use-Case zu unseren Stärken passt — und Sie bekommen eine ehrliche Einschätzung.'},
    {q:'Was tun, wenn unser AM-Projekt zwischen IT, Produktion und Management feststeckt?', a:'Genau dafür haben wir die Leistung „AM Interface Advisory" entwickelt. Wir moderieren als neutrale technische Instanz zwischen den Stakeholdern.'},
    {q:'Können Sie leanAM MES an unser ERP anbinden?', a:'Ja. Wir bieten Standard-Konnektoren für gängige ERP- und CAQ-Systeme (SAP, Microsoft Dynamics, ProAlpha) sowie generische Schnittstellen via REST, OPC UA und MQTT.'},
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <SectionShell bg={T.ink}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:64}}>
        <div>
          <Eyebrow align="left">// HÄUFIGE FRAGEN</Eyebrow>
          <h2 style={{fontSize:'clamp(32px,3.6vw,46px)', fontWeight:700, margin:'0 0 18px', letterSpacing:'-0.02em', lineHeight:1.05}}>
            FAQ
          </h2>
          <p style={{fontSize:15.5, color:T.muted, lineHeight:1.55, margin:0}}>
            Antworten auf die Fragen, die uns am häufigsten gestellt werden — von der Lizenzform bis zur Datensouveränität.
          </p>
        </div>
        <div style={{border:`1px solid ${T.line}`, borderRadius:'var(--lam-r,0)', overflow:'hidden'}}>
          {items.map((it,i) => {
            const isOpen = i === open;
            return (
              <div key={i} style={{borderBottom: i < items.length-1 ? `1px solid ${T.lineSoft}` : 'none'}}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width:'100%', textAlign:'left', display:'flex', alignItems:'center', justifyContent:'space-between', gap:20,
                  padding:'22px 26px', background:'transparent', border:'none', cursor:'pointer',
                  color: isOpen ? T.cyan : T.paper, fontFamily:FONT_UI, fontSize:15.5, fontWeight:600,
                  letterSpacing:'-0.005em',
                }}>
                  <span style={{display:'flex', alignItems:'center', gap:14}}>
                    <span style={{fontFamily:FONT_MONO, fontSize:11, color:isOpen?T.cyan:T.muted2, letterSpacing:'0.1em', width:24}}>0{i+1}</span>
                    {it.q}
                  </span>
                  <span className="material-icons" style={{fontSize:20, color:isOpen?T.cyan:T.muted2, transform:isOpen?'rotate(45deg)':'none', transition:'transform .3s'}}>add</span>
                </button>
                <div style={{
                  maxHeight: isOpen ? 200 : 0, overflow:'hidden',
                  transition:'max-height .35s ease',
                }}>
                  <div style={{padding:'0 26px 22px 64px', fontSize:14, color:T.muted, lineHeight:1.6}}>
                    {it.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

// ------------------------------ Kontakt CTA ------------------------------
function KontaktCTA(){
  return (
    <SectionShell bg={`radial-gradient(ellipse 80% 100% at 50% 0%, rgba(31,169,214,.18) 0%, transparent 60%), ${T.ink}`}>
      <div style={{textAlign:'center', maxWidth:760, margin:'0 auto'}}>
        <Eyebrow align="center">// KONTAKT</Eyebrow>
        <h2 style={{fontSize:'clamp(40px,5vw,64px)', fontWeight:700, margin:'0 0 20px', letterSpacing:'-0.025em', lineHeight:1.02}}>
          Lassen Sie uns<br/>
          <span style={{fontStyle:'var(--lam-accent-style, italic)', fontWeight:500, color:'var(--lam-accent-color, #6FD8F1)', textDecoration:'var(--lam-accent-deco, none)', textDecorationColor:'#6FD8F1', textDecorationThickness:'2px', textUnderlineOffset:'8px'}}>sprechen.</span>
        </h2>
        <p style={{fontSize:18, color:T.muted, lineHeight:1.55, margin:'0 0 36px'}}>
          30 Minuten, kostenlos und unverbindlich — wir hören zu, prüfen Ihren Use-Case und sagen ehrlich, ob und wie wir helfen können.
        </p>
        <div style={{display:'inline-flex', gap:12, flexWrap:'wrap', justifyContent:'center'}}>
          <PrimaryBtn icon="arrow_forward">Demo anfragen</PrimaryBtn>
          <GhostBtn icon="event">Erstgespräch buchen</GhostBtn>
        </div>
        <div style={{
          marginTop:48, display:'flex', gap:32, justifyContent:'center', flexWrap:'wrap',
          fontFamily:FONT_MONO, fontSize:11, color:T.muted2, letterSpacing:'0.1em',
        }}>
          <span>// MÜNSTER, DE</span>
          <span>// MO–FR · 09–18 UHR</span>
          <span>// MAIL@LEANAM.COM</span>
        </div>
      </div>
    </SectionShell>
  );
}

// ------------------------------ Footer ------------------------------
function Footer(){
  const cols = [
    {title:'Produkt', items:['leanAM MES','Druckfarm-Rechner','3D-Drucker Integration','Custom Development','Demo anfragen']},
    {title:'Leistungen', items:['Prozessberatung','Entwicklung','B2B Druckservice','Implementierung']},
    {title:'Unternehmen', items:['Über uns','Karriere','Kontakt','Standort']},
  ];
  return (
    <footer style={{background:T.inkDeep, color:T.paper, padding:'72px clamp(20px,5vw,80px) 32px', fontFamily:FONT_UI, borderTop:`1px solid ${T.line}`}}>
      <div style={{maxWidth:1320, margin:'0 auto'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap:48, paddingBottom:48, borderBottom:`1px solid ${T.lineSoft}`}}>
          <div>
            <img src="assets/leanam-logo.png" alt="leanAM" style={{height:36, width:'auto', display:'block', marginBottom:20}}/>
            <p style={{fontSize:13.5, color:T.muted, lineHeight:1.6, margin:'0 0 18px', maxWidth:320}}>
              Software, Beratung und Entwicklung für additive Fertigung. Made in Germany — DSGVO-konform — On-Premise.
            </p>
            <div style={{display:'flex', gap:8}}>
              <Pill icon="verified">Made in Germany</Pill>
            </div>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <div style={{
                fontFamily:FONT_MONO, fontSize:11, color:T.cyan,
                letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:18,
              }}>// {col.title}</div>
              <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10}}>
                {col.items.map(it => (
                  <li key={it}><a href="#" style={{color:T.muted, textDecoration:'none', fontSize:13.5}}>{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:24, flexWrap:'wrap', gap:16}}>
          <div style={{fontSize:12, color:T.muted2}}>© 2026 URBANMAKER UG · leanAM ist eine Marke der URBANMAKER UG · Münster, Deutschland</div>
          <div style={{display:'flex', gap:24}}>
            {['Impressum','Datenschutz','AGB'].map(l => (
              <a key={l} href="#" style={{color:T.muted2, textDecoration:'none', fontSize:12}}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  DesignTokens, Header, Hero, DreiSaeulen, WarumLeanam, Leistungen,
  Druckfarm, FAQ, KontaktCTA, Footer,
});
