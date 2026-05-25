'use client'

import { useBooking } from '@/context/BookingContext'
import { Reveal }     from './Reveal'

const FEATURES = [
  '24/7 online buchbar',
  'Sofort-Bestätigung per E-Mail',
  'Kostenlose Stornierung bis 24h vorher',
  'Erinnerung einen Tag vorher',
]

export function Buchung() {
  const { open } = useBooking()

  return (
    <section id="buchung" className="relative overflow-hidden py-[clamp(5rem,10vw,7rem)]"
      style={{ background: '#141824' }}>

      {/* Glow */}
      <div aria-hidden="true" className="absolute pointer-events-none"
        style={{
          right: '-100px', top: '-100px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(61,158,191,0.07) 0%,transparent 70%)',
        }}
      />

      <div className="max-w-salon mx-auto px-[clamp(1.5rem,5vw,4rem)] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">

          <Reveal>
            <p className="sec-label mb-4">
              <span style={{ color: 'rgba(61,158,191,0.4)', marginRight: '0.5rem', fontFamily: 'var(--font-playfair)' }}>03</span>
              Online buchen
            </p>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)]
              leading-[1.1] mb-4" style={{ color: '#EEF2F7' }}>
              Termin in <span className="steel-text">60 Sekunden</span>
            </h2>
            <p className="font-light leading-[1.82] text-[0.95rem] max-w-[40ch] mb-8"
              style={{ color: '#7A8BA0' }}>
              Wähle deinen Barber, deine Leistung und deinen Wunschtermin – ohne Anruf.
            </p>

            <ul className="flex flex-col gap-3.5 mb-10 list-none p-0">
              {FEATURES.map((f, i) => (
                <li key={i} className="flex items-center gap-3.5 text-[0.88rem]"
                  style={{ color: '#7A8BA0' }}>
                  <span className="w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(61,158,191,0.15)', color: '#3D9EBF' }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <button onClick={open}
              className="cursor-pointer active:scale-95 transition-all duration-200
                hover:brightness-110 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg,#3D9EBF,#5FBAD4)',
                color: '#141824',
                padding: '0.9rem 2rem',
                fontSize: '0.79rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: '100px',
                boxShadow: '0 4px 20px rgba(61,158,191,0.28)',
              }}>
              Jetzt buchen
            </button>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl min-h-[400px] flex flex-col"
              style={{
                background: 'rgba(28,34,53,0.6)',
                border: '1px solid rgba(61,158,191,0.12)',
                backdropFilter: 'blur(8px)',
              }}>
              <div className="flex items-center gap-2.5 px-6 py-4"
                style={{ borderBottom: '1px solid rgba(238,242,247,0.06)' }}>
                <span className="w-2 h-2 rounded-full animate-pulse-dot"
                  style={{ background: '#3D9EBF' }} />
                <span className="text-[0.68rem] tracking-[0.14em] uppercase"
                  style={{ color: 'rgba(238,242,247,0.35)' }}>
                  Termin auswählen
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-10 text-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ border: '1px solid rgba(61,158,191,0.3)', color: '#3D9EBF' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <p className="text-[0.88rem] max-w-[26ch]"
                  style={{ color: 'rgba(238,242,247,0.35)' }}>
                  Cal.com Buchungs-Widget hier einbetten
                </p>
                <code className="text-[0.72rem] px-3 py-1.5 rounded-md"
                  style={{ color: '#3D9EBF', background: 'rgba(61,158,191,0.1)' }}>
                  calComLink in config.ts
                </code>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
