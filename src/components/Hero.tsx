'use client'

import { useBooking }  from '@/context/BookingContext'
import { LogoSVG }     from './LogoSVG'
import { salonConfig } from '@/lib/config'
import { CountUp }     from './CountUp'

export function Hero() {
  const { open } = useBooking()

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] grid grid-cols-1 md:grid-cols-2 pt-[72px] overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 60% at 105% 105%, rgba(184,115,51,0.12) 0%, transparent 55%),
          radial-gradient(ellipse 40% 40% at -5%  0%,  rgba(184,115,51,0.05) 0%, transparent 50%),
          #1C1C1C
        `,
      }}
    >
      {/* Large watermark */}
      <div
        className="absolute bottom-0 right-0 font-display font-black leading-none
          select-none pointer-events-none hidden md:block"
        aria-hidden="true"
        style={{
          fontSize: 'clamp(14rem, 28vw, 24rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(184,115,51,0.07)',
          lineHeight: 0.85,
        }}
      >
        AC
      </div>

      {/* ── Left – content is IMMEDIATELY visible, no opacity-0 animations ── */}
      <div className="relative z-10 flex flex-col justify-center
        px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,8vw,7rem)]">

        {/* Location badge */}
        <div
          className="inline-flex items-center gap-2.5 w-fit mb-10"
          style={{
            background: 'rgba(184,115,51,0.08)',
            border: '1px solid rgba(184,115,51,0.22)',
            borderRadius: '100px',
            padding: '0.42rem 1.1rem',
          }}
        >
          <span className="w-[6px] h-[6px] rounded-full flex-shrink-0 animate-blink"
            style={{ background: '#B87333' }} />
          <span className="text-[0.68rem] font-medium tracking-[0.15em] uppercase"
            style={{ color: 'rgba(237,232,225,0.5)' }}>
            {salonConfig.adresse.strasse} · {salonConfig.adresse.stadt} Sendling
          </span>
        </div>

        {/* Headline – visible from frame 1 */}
        <h1
          className="font-display font-black leading-[0.93] tracking-[-0.03em]
            text-[clamp(3.2rem,7.5vw,6rem)] mb-5"
        >
          <span style={{ color: '#EDE8E1' }}>Dein Stil.</span>
          <br />
          <span className="copper-text">Unser</span>
          <span style={{ color: '#EDE8E1' }}>{' '}Handwerk.</span>
        </h1>

        {/* Copper accent line – animates in on load */}
        <div className="mb-8" style={{ overflow: 'hidden' }}>
          <div style={{
            height: '1.5px',
            width: '80px',
            background: 'linear-gradient(90deg, #B87333, rgba(184,115,51,0.0))',
            transformOrigin: 'left center',
            animation: 'drawLine 0.7s 0.15s ease forwards',
            transform: 'scaleX(0)',
            opacity: 0,
          }} />
        </div>

        {/* Subtext */}
        <p
          className="max-w-[40ch] leading-[1.85] text-[0.96rem] mb-10"
          style={{ color: '#8A7E72' }}
        >
          Präzise Schnitte, klassische Rasuren und Bartpflege –
          direkt am Harras in München Sendling.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3.5 mb-14">
          <button
            onClick={open}
            className="inline-flex items-center gap-2 cursor-pointer
              active:scale-95 transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #B87333, #D4945A)',
              color: '#1C1C1C',
              padding: '0.9rem 2rem',
              fontSize: '0.79rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '100px',
              boxShadow: '0 4px 24px rgba(184,115,51,0.35)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Termin buchen
          </button>

          <a
            href="#leistungen"
            className="inline-flex items-center cursor-pointer
              hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            style={{
              border: '1px solid rgba(237,232,225,0.15)',
              color: '#EDE8E1',
              padding: '0.9rem 2rem',
              fontSize: '0.79rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '100px',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(184,115,51,0.45)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(237,232,225,0.15)')}
          >
            Preisliste
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-8">
          {[
            {
              value: <CountUp from={4.2} to={5.0} decimal suffix=" ★" />,
              label: 'Google Bewertung',
            },
            {
              value: <CountUp from={50} to={80} suffix="+" />,
              label: 'Bewertungen',
            },
            {
              value: <>ab 19 €</>,
              label: 'Haarschnitt',
            },
          ].map(({ value, label }, i) => (
            <div key={i} style={{ borderLeft: '1.5px solid rgba(184,115,51,0.25)', paddingLeft: '1.1rem' }}>
              <div className="font-display font-black text-[1.5rem] leading-none" style={{ color: '#EDE8E1' }}>
                {value}
              </div>
              <div className="text-[0.62rem] tracking-[0.14em] uppercase mt-1" style={{ color: '#8A7E72' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right – photo placeholder ── */}
      <div className="relative hidden md:block overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{ background: 'linear-gradient(145deg, #242424 0%, #1C1C1C 60%, #202020 100%)' }}>
          <LogoSVG className="w-[72px] h-[84px]" color="rgba(184,115,51,0.12)" />
          <p className="text-[0.65rem] tracking-[0.16em] uppercase"
            style={{ color: 'rgba(237,232,225,0.12)' }}>
            Foto hier einfügen
          </p>
        </div>

        {/* Floating price card */}
        <div
          className="absolute bottom-10 left-[-1.5rem] rounded-[18px] px-5 py-4
            flex items-center gap-4 max-w-[200px] animate-float-d2"
          style={{
            background: 'rgba(28,28,28,0.94)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(184,115,51,0.2)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          }}
        >
          <div className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(184,115,51,0.1)', color: '#B87333' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M6 3L18 21M18 3L6 21"/>
              <circle cx="6"  cy="3"  r="2"/>
              <circle cx="18" cy="3"  r="2"/>
              <circle cx="6"  cy="21" r="2"/>
              <circle cx="18" cy="21" r="2"/>
            </svg>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.1em] uppercase mb-0.5" style={{ color: '#8A7E72' }}>
              Haarschnitt
            </div>
            <div className="font-display font-bold text-[1.05rem]" style={{ color: '#EDE8E1' }}>
              ab 19 €
            </div>
          </div>
        </div>

        {/* Floating rating card */}
        <div
          className="absolute top-10 right-8 rounded-[14px] px-4 py-3.5 text-center animate-float"
          style={{
            background: 'rgba(28,28,28,0.94)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(184,115,51,0.18)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
          }}
        >
          <div className="text-[0.85rem] tracking-[0.05em] mb-0.5" style={{ color: '#B87333' }}>★★★★★</div>
          <div className="font-display font-black text-[1.5rem] leading-none" style={{ color: '#EDE8E1' }}>5,0</div>
          <div className="text-[0.6rem] tracking-[0.1em] uppercase mt-0.5" style={{ color: '#8A7E72' }}>
            {salonConfig.bewertung.anzahl} Bewertungen
          </div>
        </div>
      </div>
    </section>
  )
}
