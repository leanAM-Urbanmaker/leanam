/* global React */

// Load shared content (steps.js exposes window.PROCESS_STEPS)
const _stepsScript = document.createElement('script');
_stepsScript.src = 'steps.js';
document.head.appendChild(_stepsScript);

/* ============================================================
   VARIANT A — "Connected Rail"
   Horizontal timeline with progress line, numbered nodes,
   alternating top/bottom cards. Clean, modern, B2B-friendly.
   ============================================================ */
const VariantA = () => {
  const steps = window.PROCESS_STEPS || [];
  return (
    <div style={{
      background: 'linear-gradient(180deg,#F4F8FB 0%,#E6EEF4 100%)',
      padding: '96px 80px 120px',
      fontFamily: 'Inter, sans-serif',
      color: '#0A1628',
      minHeight: 720,
    }}>
      <div style={{textAlign:'center', marginBottom:80}}>
        <div style={{
          display:'inline-flex', alignItems:'center', gap:10,
          fontSize:12, fontWeight:600, letterSpacing:'0.18em',
          color:'#1FA9D6', textTransform:'uppercase',
          padding:'8px 14px', border:'1px solid rgba(31,169,214,.35)',
          borderRadius:999, background:'rgba(111,216,241,.08)'
        }}>
          <span style={{width:6,height:6,borderRadius:99,background:'#1FA9D6'}}></span>
          Unser Prozess
        </div>
        <h2 style={{
          fontSize:56, fontWeight:700, lineHeight:1.05,
          margin:'24px auto 18px', maxWidth:880, letterSpacing:'-0.02em',
        }}>
          In vier Schritten zur<br/>
          <span style={{color:'#0A1628', position:'relative'}}>
            produktiven AM-Linie
            <svg width="100%" height="14" viewBox="0 0 400 14" preserveAspectRatio="none"
              style={{position:'absolute', left:0, bottom:-6, width:'100%'}}>
              <path d="M2 8 Q 100 1 200 7 T 398 6" stroke="#6FD8F1" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
        </h2>
        <p style={{fontSize:18, color:'#3B4A60', maxWidth:620, margin:'0 auto', lineHeight:1.55}}>
          Strukturiertes Vorgehen — vom ersten Gespräch bis zur dauerhaften Wertschöpfung. Sie sehen jederzeit, wo wir stehen.
        </p>
      </div>

      {/* Rail */}
      <div style={{position:'relative', maxWidth:1320, margin:'0 auto', padding:'80px 0'}}>
        {/* base line */}
        <div style={{
          position:'absolute', left:'6%', right:'6%', top:'50%',
          height:2, background:'rgba(10,22,40,.12)',
        }}/>
        {/* progress line */}
        <div style={{
          position:'absolute', left:'6%', width:'88%', top:'50%',
          height:2, background:'linear-gradient(90deg,#1FA9D6,#6FD8F1)',
          opacity:.9,
        }}/>

        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24}}>
          {steps.map((s,i) => {
            const above = i % 2 === 0;
            return (
              <div key={s.n} style={{position:'relative', minHeight:380}}>
                {/* Card */}
                <div style={{
                  position:'absolute', left:0, right:0,
                  [above ? 'bottom' : 'top']: 'calc(50% + 44px)',
                  background:'#fff',
                  border:'1px solid rgba(10,22,40,.08)',
                  borderRadius:14, padding:'22px 22px 24px',
                  boxShadow:'0 8px 24px -12px rgba(10,22,40,.18)',
                }}>
                  <div style={{
                    fontSize:11, fontWeight:600, color:'#1FA9D6',
                    letterSpacing:'0.18em', textTransform:'uppercase', marginBottom:8,
                  }}>{s.kicker} · {s.duration}</div>
                  <h3 style={{fontSize:22, fontWeight:700, margin:'0 0 10px', letterSpacing:'-0.01em'}}>{s.title}</h3>
                  <p style={{fontSize:14.5, color:'#3B4A60', lineHeight:1.55, margin:0}}>{s.body}</p>
                </div>
                {/* Node */}
                <div style={{
                  position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)',
                  width:64, height:64, borderRadius:'50%',
                  background:'#0A1628', color:'#fff',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontFamily:'JetBrains Mono, monospace', fontWeight:600, fontSize:18,
                  boxShadow:'0 0 0 8px #EEF3F7, 0 0 0 9px rgba(31,169,214,.4)',
                  zIndex:2,
                }}>{s.n}</div>
                {/* Connector dash from node to card */}
                <div style={{
                  position:'absolute', left:'50%', width:1,
                  [above ? 'bottom' : 'top']: 'calc(50% + 32px)',
                  height:12, borderLeft:'1px dashed rgba(10,22,40,.25)',
                }}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   VARIANT B — "Dark Editorial"
   Deep navy bg, oversized cyan numerals, premium B2B feel.
   ============================================================ */
const VariantB = () => {
  const steps = window.PROCESS_STEPS || [];
  return (
    <div style={{
      background: 'radial-gradient(ellipse at top right, #0F2A4D 0%, #0A1628 55%, #060E1C 100%)',
      padding: '96px 80px 120px',
      fontFamily: 'Inter, sans-serif',
      color: '#F4F8FB',
      minHeight: 720,
      position:'relative', overflow:'hidden',
    }}>
      {/* subtle grid */}
      <svg width="100%" height="100%" style={{position:'absolute', inset:0, opacity:.06, pointerEvents:'none'}}>
        <defs>
          <pattern id="vBgrid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="#6FD8F1" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#vBgrid)"/>
      </svg>

      <div style={{position:'relative', maxWidth:1320, margin:'0 auto'}}>
        <div style={{display:'grid', gridTemplateColumns:'auto 1fr', gap:48, alignItems:'end', marginBottom:80}}>
          <div>
            <div style={{
              fontSize:12, fontWeight:600, letterSpacing:'0.24em',
              color:'#6FD8F1', textTransform:'uppercase', marginBottom:18,
              display:'flex', alignItems:'center', gap:12,
            }}>
              <span style={{width:36, height:1, background:'#6FD8F1'}}></span>
              Unser Prozess
            </div>
            <h2 style={{
              fontSize:64, fontWeight:300, lineHeight:1.02,
              margin:0, letterSpacing:'-0.025em',
              fontFamily:'Instrument Serif, serif',
            }}>
              In vier Schritten zur<br/>
              <em style={{fontStyle:'italic', color:'#6FD8F1', fontWeight:300}}>produktiven AM-Linie.</em>
            </h2>
          </div>
          <p style={{
            fontSize:16, color:'rgba(244,248,251,.65)', lineHeight:1.65,
            maxWidth:340, margin:'0 0 12px auto', textAlign:'right',
          }}>
            Strukturiertes Vorgehen — vom ersten Gespräch bis zur dauerhaften Wertschöpfung. Sie sehen jederzeit, wo wir stehen.
          </p>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:0, borderTop:'1px solid rgba(111,216,241,.18)'}}>
          {steps.map((s,i) => (
            <div key={s.n} style={{
              padding:'40px 28px 36px',
              borderRight: i < 3 ? '1px solid rgba(111,216,241,.12)' : 'none',
              position:'relative',
            }}>
              <div style={{
                display:'flex', alignItems:'baseline', justifyContent:'space-between',
                marginBottom:24,
              }}>
                <div style={{
                  fontFamily:'Instrument Serif, serif',
                  fontSize:88, lineHeight:.85, fontWeight:300,
                  color:'#6FD8F1', letterSpacing:'-0.04em',
                }}>{s.n}</div>
                <div style={{
                  fontFamily:'JetBrains Mono, monospace',
                  fontSize:11, color:'rgba(244,248,251,.5)', textAlign:'right',
                }}>
                  <div>{s.kicker}</div>
                  <div style={{marginTop:4, color:'rgba(111,216,241,.7)'}}>{s.duration}</div>
                </div>
              </div>
              <h3 style={{
                fontSize:24, fontWeight:600, margin:'0 0 14px',
                letterSpacing:'-0.01em',
              }}>{s.title}</h3>
              <p style={{
                fontSize:14.5, color:'rgba(244,248,251,.72)',
                lineHeight:1.6, margin:'0 0 22px',
              }}>{s.body}</p>
              <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:8}}>
                {s.bullets.map(b => (
                  <li key={b} style={{
                    fontSize:13, color:'rgba(244,248,251,.85)',
                    display:'flex', alignItems:'center', gap:10,
                    fontFamily:'JetBrains Mono, monospace',
                  }}>
                    <span style={{
                      width:14, height:1, background:'#6FD8F1', display:'inline-block',
                    }}></span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   VARIANT C — "Interactive Stepper"
   Left rail of steps, right detail pane that updates on click.
   Truly interactive — feels like a real product.
   ============================================================ */
const VariantC = () => {
  const steps = window.PROCESS_STEPS || [];
  const [active, setActive] = React.useState(0);
  const s = steps[active] || {};
  return (
    <div style={{
      background:'#F4F8FB',
      padding:'96px 80px 120px',
      fontFamily:'Inter, sans-serif', color:'#0A1628',
      minHeight:720,
    }}>
      <div style={{maxWidth:1320, margin:'0 auto'}}>
        <div style={{marginBottom:64, maxWidth:780}}>
          <div style={{
            fontSize:12, fontWeight:600, letterSpacing:'0.2em',
            color:'#1FA9D6', textTransform:'uppercase', marginBottom:18,
          }}>— Unser Prozess</div>
          <h2 style={{fontSize:52, fontWeight:700, lineHeight:1.05, margin:'0 0 18px', letterSpacing:'-0.02em'}}>
            In vier Schritten zur produktiven AM-Linie.
          </h2>
          <p style={{fontSize:17, color:'#3B4A60', lineHeight:1.55, margin:0, maxWidth:580}}>
            Klicken Sie sich durch die Phasen — jeder Schritt mit klaren Ergebnissen und Zeitrahmen.
          </p>
        </div>

        <div style={{
          display:'grid', gridTemplateColumns:'minmax(280px,360px) 1fr',
          gap:0, background:'#fff',
          borderRadius:24, overflow:'hidden',
          border:'1px solid rgba(10,22,40,.08)',
          boxShadow:'0 24px 60px -30px rgba(10,22,40,.25)',
        }}>
          {/* Rail */}
          <div style={{
            background:'linear-gradient(180deg,#0A1628 0%, #102542 100%)',
            padding:'32px 0', color:'#fff', position:'relative',
          }}>
            {steps.map((st,i) => {
              const isActive = i === active;
              return (
                <button key={st.n} onClick={() => setActive(i)} style={{
                  display:'grid', gridTemplateColumns:'auto 1fr', gap:18, alignItems:'center',
                  width:'100%', textAlign:'left', cursor:'pointer',
                  background:'transparent', border:'none', color:'inherit',
                  padding:'18px 28px',
                  borderLeft: isActive ? '3px solid #6FD8F1' : '3px solid transparent',
                  transition:'all .25s ease',
                  opacity: isActive ? 1 : 0.55,
                  fontFamily:'inherit',
                }}>
                  <div style={{
                    width:44, height:44, borderRadius:'50%',
                    border:`1.5px solid ${isActive ? '#6FD8F1' : 'rgba(255,255,255,.25)'}`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontFamily:'JetBrains Mono, monospace', fontSize:14, fontWeight:600,
                    color: isActive ? '#6FD8F1' : 'rgba(255,255,255,.7)',
                    background: isActive ? 'rgba(111,216,241,.1)' : 'transparent',
                    transition:'all .25s ease',
                  }}>{st.n}</div>
                  <div>
                    <div style={{fontSize:16, fontWeight:600, marginBottom:2}}>{st.title}</div>
                    <div style={{
                      fontSize:11, color:'rgba(111,216,241,.8)',
                      letterSpacing:'0.12em', textTransform:'uppercase',
                      fontFamily:'JetBrains Mono, monospace',
                    }}>{st.duration}</div>
                  </div>
                </button>
              );
            })}
            {/* progress fill */}
            <div style={{
              position:'absolute', left:0, top:32 + active*80, width:3,
              height:80, background:'#6FD8F1', transition:'top .35s cubic-bezier(.4,0,.2,1)',
            }}/>
          </div>

          {/* Detail */}
          <div key={active} style={{padding:'48px 56px', animation:'vcFadeIn .4s ease both'}}>
            <div style={{
              display:'flex', alignItems:'center', gap:14, marginBottom:24,
              fontSize:12, fontWeight:600, letterSpacing:'0.18em',
              color:'#1FA9D6', textTransform:'uppercase',
              fontFamily:'JetBrains Mono, monospace',
            }}>
              <span>Phase {s.n}</span>
              <span style={{width:18, height:1, background:'#1FA9D6'}}></span>
              <span>{s.kicker}</span>
            </div>
            <h3 style={{fontSize:44, fontWeight:700, margin:'0 0 20px', letterSpacing:'-0.02em', lineHeight:1.05}}>
              {s.title}
            </h3>
            <p style={{fontSize:18, color:'#3B4A60', lineHeight:1.6, margin:'0 0 36px', maxWidth:560}}>
              {s.body}
            </p>

            <div style={{
              display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14, marginBottom:36,
            }}>
              {(s.bullets||[]).map(b => (
                <div key={b} style={{
                  border:'1px solid rgba(10,22,40,.1)', borderRadius:12,
                  padding:'16px 18px', background:'#F7FAFC',
                }}>
                  <div style={{
                    fontFamily:'JetBrains Mono, monospace', fontSize:11,
                    color:'#1FA9D6', marginBottom:6, letterSpacing:'0.1em',
                  }}>DELIVERABLE</div>
                  <div style={{fontSize:14, fontWeight:500, color:'#0A1628', lineHeight:1.35}}>{b}</div>
                </div>
              ))}
            </div>

            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid rgba(10,22,40,.08)', paddingTop:24}}>
              <div style={{fontSize:14, color:'#3B4A60'}}>
                <span style={{fontFamily:'JetBrains Mono, monospace', color:'#1FA9D6'}}>{String(active+1).padStart(2,'0')}</span>
                <span style={{opacity:.5}}> / {String(steps.length).padStart(2,'0')}</span>
              </div>
              <div style={{display:'flex', gap:10}}>
                <button onClick={() => setActive(a => Math.max(0,a-1))} disabled={active===0} style={{
                  padding:'10px 18px', borderRadius:99, border:'1px solid rgba(10,22,40,.12)',
                  background:'#fff', cursor: active===0?'not-allowed':'pointer',
                  fontFamily:'inherit', fontSize:13, fontWeight:500,
                  opacity: active===0 ? 0.4 : 1,
                }}>← Zurück</button>
                <button onClick={() => setActive(a => Math.min(steps.length-1,a+1))} disabled={active===steps.length-1} style={{
                  padding:'10px 18px', borderRadius:99, border:'1px solid #0A1628',
                  background:'#0A1628', color:'#fff', cursor: active===steps.length-1?'not-allowed':'pointer',
                  fontFamily:'inherit', fontSize:13, fontWeight:500,
                  opacity: active===steps.length-1 ? 0.4 : 1,
                }}>Weiter →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes vcFadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
};

/* ============================================================
   VARIANT D — "Engineering Timeline"
   Gantt-style horizontal axis with phase blocks + KPIs.
   Speaks to engineers — industrial, AM-flavored.
   ============================================================ */
const VariantD = () => {
  const steps = window.PROCESS_STEPS || [];
  // approximate widths reflect the duration weight
  const weights = [10, 25, 40, 25]; // sums to 100
  return (
    <div style={{
      background:'#0A1628',
      padding:'96px 80px 120px',
      fontFamily:'Inter, sans-serif', color:'#F4F8FB',
      minHeight:720, position:'relative', overflow:'hidden',
    }}>
      <div style={{maxWidth:1320, margin:'0 auto'}}>
        <div style={{textAlign:'center', marginBottom:72}}>
          <div style={{
            fontSize:11, fontWeight:600, letterSpacing:'0.28em',
            color:'#6FD8F1', textTransform:'uppercase', marginBottom:18,
            fontFamily:'JetBrains Mono, monospace',
          }}>// UNSER PROZESS</div>
          <h2 style={{fontSize:56, fontWeight:700, lineHeight:1.05, margin:'0 0 18px', letterSpacing:'-0.02em', maxWidth:880, marginLeft:'auto', marginRight:'auto'}}>
            Von der ersten Analyse zur skalierenden AM-Linie.
          </h2>
          <p style={{fontSize:17, color:'rgba(244,248,251,.65)', lineHeight:1.55, maxWidth:620, margin:'0 auto'}}>
            Strukturiertes Vorgehen — vom ersten Gespräch bis zur dauerhaften Wertschöpfung. Sie sehen jederzeit, wo wir stehen.
          </p>
        </div>

        {/* axis */}
        <div style={{
          display:'flex', alignItems:'center', gap:0,
          fontFamily:'JetBrains Mono, monospace', fontSize:11,
          color:'rgba(111,216,241,.7)', marginBottom:18,
          padding:'0 4px',
        }}>
          <span>T0 · Kickoff</span>
          <div style={{flex:1, height:1, background:'linear-gradient(90deg,rgba(111,216,241,.4),rgba(111,216,241,.1))', margin:'0 14px'}}/>
          <span>T+ Wochen →</span>
        </div>

        {/* gantt row */}
        <div style={{display:'grid', gridTemplateColumns: weights.map(w => `${w}fr`).join(' '), gap:4, marginBottom:8}}>
          {steps.map((s,i) => (
            <div key={s.n} style={{
              height:10, borderRadius:3,
              background: i===0 ? 'rgba(111,216,241,.35)'
                : i===1 ? 'rgba(111,216,241,.55)'
                : i===2 ? 'rgba(111,216,241,.85)'
                : 'linear-gradient(90deg,#6FD8F1, rgba(111,216,241,.15))',
            }}/>
          ))}
        </div>

        {/* phase cards aligned to bars */}
        <div style={{display:'grid', gridTemplateColumns: weights.map(w => `${w}fr`).join(' '), gap:4}}>
          {steps.map((s,i) => (
            <div key={s.n} style={{
              background:'rgba(255,255,255,.03)',
              border:'1px solid rgba(111,216,241,.15)',
              borderRadius:12, padding:'24px 22px 26px',
              backdropFilter:'blur(8px)',
            }}>
              <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:18}}>
                <div style={{
                  fontFamily:'JetBrains Mono, monospace', fontSize:12,
                  color:'#6FD8F1', letterSpacing:'0.1em',
                }}>PHASE_{s.n}</div>
                <div style={{
                  fontFamily:'JetBrains Mono, monospace', fontSize:11,
                  color:'rgba(244,248,251,.5)',
                }}>{s.duration}</div>
              </div>
              <h3 style={{fontSize:22, fontWeight:600, margin:'0 0 12px', letterSpacing:'-0.01em'}}>{s.title}</h3>
              <p style={{fontSize:13.5, color:'rgba(244,248,251,.7)', lineHeight:1.55, margin:'0 0 18px'}}>{s.body}</p>
              <div style={{display:'flex', flexDirection:'column', gap:6}}>
                {s.bullets.map(b => (
                  <div key={b} style={{
                    display:'flex', alignItems:'center', gap:8,
                    fontSize:12, color:'rgba(244,248,251,.85)',
                  }}>
                    <span style={{
                      width:4, height:4, borderRadius:99, background:'#6FD8F1', flexShrink:0,
                    }}></span>
                    {b}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   ORIGINAL (for reference)
   ============================================================ */
const VariantOriginal = () => {
  const steps = window.PROCESS_STEPS || [];
  return (
    <div style={{
      background:'linear-gradient(180deg,#9DE3F4 0%, #6FD8F1 100%)',
      padding:'80px 80px 100px',
      fontFamily:'Inter, sans-serif', color:'#0A1628', minHeight:720,
    }}>
      <div style={{textAlign:'center', marginBottom:64}}>
        <div style={{fontSize:12, fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:18}}>UNSER PROZESS</div>
        <h2 style={{fontSize:54, fontWeight:800, lineHeight:1.1, margin:'0 auto 22px', maxWidth:820}}>In vier Schritten zur produktiven AM-Linie</h2>
        <p style={{fontSize:17, maxWidth:620, margin:'0 auto', lineHeight:1.5}}>Strukturiertes Vorgehen — vom ersten Gespräch bis zur dauerhaften Wertschöpfung. Sie sehen jederzeit, wo wir stehen.</p>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:32, maxWidth:1320, margin:'0 auto'}}>
        {steps.map(s => (
          <div key={s.n}>
            <div style={{width:64, height:64, border:'2px solid #fff', borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:24, marginBottom:18}}>{parseInt(s.n,10)}</div>
            <h3 style={{fontSize:22, fontWeight:800, margin:'0 0 12px'}}>{s.title}</h3>
            <p style={{fontSize:15, lineHeight:1.5}}>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { VariantA, VariantB, VariantC, VariantD, VariantOriginal });
