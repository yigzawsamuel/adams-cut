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
          radial-gradient(ellipse 80% 70% at 110% 110%, rgba(61,158,191,0.09) 0%, transparent 55%),
          radial-gradient(ellipse 50% 50% at -10% 0%,  rgba(61,158,191,0.05) 0%, transparent 50%),
          #141824
        `,
      }}
    >
      {/* Decorative dot grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(rgba(238,242,247,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Large watermark text behind everything */}
      <div
        className="absolute bottom-0 right-0 font-display font-black leading-none
          select-none pointer-events-none hidden md:block"
        aria-hidden="true"
        style={{
          fontSize: 'clamp(14rem, 28vw, 24rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(61,158,191,0.06)',
          lineHeight: 0.85,
          userSelect: 'none',
        }}
      >
        AC
      </div>

      {/* ── Left ── */}
      <div className="relative z-10 flex flex-col justify-center
        px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,8vw,7rem)]">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 w-fit mb-8"
          style={{
            background: 'rgba(61,158,191,0.08)',
            border: '1px solid rgba(61,158,191,0.22)',
            borderRadius: '100px',
            padding: '0.42rem 1.1rem',
            animation: 'fadeUp 0.7s 0.1s ease both',
          }}
        >
          <span className="w-[6px] h-[6px] rounded-full flex-shrink-0 animate-blink"
            style={{ background: '#3D9EBF' }} />
          <span className="text-[0.68rem] font-medium tracking-[0.15em] uppercase"
            style={{ color: 'rgba(238,242,247,0.55)' }}>
            {salonConfig.adresse.strasse} · {salonConfig.adresse.stadt} Sendling
          </span>
        </div>

        {/* Headline — staggered entrance */}
        <h1
          className="font-display font-black leading-[0.93] tracking-[-0.03em]
            text-[clamp(3.2rem,7.5vw,6rem)] mb-7"
          style={{ animation: 'fadeUp 0.8s 0.25s ease both' }}
        >
          <span style={{ color: '#EEF2F7' }}>Dein Stil.</span>
          <span
            className="block w-16 h-px my-3"
            style={{ background: 'linear-gradient(90deg, rgba(61,158,191,0.5), transparent)' }}
          />
          <span className="steel-text">Unser</span>
          <span style={{ color: '#EEF2F7' }}>{' '}Handwerk.</span>
        </h1>

        {/* Sub */}
        <p
          className="max-w-[40ch] leading-[1.82] text-[0.96rem] mb-9"
          style={{ color: '#7A8BA0', animation: 'fadeUp 0.8s 0.4s ease both' }}
        >
          Präzise Schnitte, klassische Rasuren und Bartpflege –
          direkt am Harras in München Sendling.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3.5 mb-14"
          style={{ animation: 'fadeUp 0.8s 0.55s ease both' }}>
          <button
            onClick={open}
            className="inline-flex items-center gap-2 cursor-pointer
              active:scale-95 transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #3D9EBF, #5FBAD4)',
              color: '#141824',
              padding: '0.9rem 2rem',
              fontSize: '0.79rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '100px',
              boxShadow: '0 4px 24px rgba(61,158,191,0.3)',
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
              border: '1px solid rgba(238,242,247,0.15)',
              color: '#EEF2F7',
              padding: '0.9rem 2rem',
              fontSize: '0.79rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '100px',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(61,158,191,0.45)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(238,242,247,0.15)')}
          >
            Preisliste
          </a>
        </div>

        {/* Stats — dramatic */}
        <div className="flex gap-8" style={{ animation: 'fadeUp 0.8s 0.7s ease both' }}>
          <div style={{ borderLeft: '1.5px solid rgba(61,158,191,0.25)', paddingLeft: '1.1rem' }}>
            <div className="font-display font-black text-[1.5rem] leading-none" style={{ color: '#EEF2F7' }}>
              <CountUp from={4.2} to={5.0} decimal suffix=" ★" />
            </div>
            <div className="text-[0.62rem] tracking-[0.14em] uppercase mt-1" style={{ color: '#7A8BA0' }}>
              Google Bewertung
            </div>
          </div>
          <div style={{ borderLeft: '1.5px solid rgba(61,158,191,0.25)', paddingLeft: '1.1rem' }}>
            <div className="font-display font-black text-[1.5rem] leading-none" style={{ color: '#EEF2F7' }}>
              <CountUp from={50} to={80} suffix="+" />
            </div>
            <div className="text-[0.62rem] tracking-[0.14em] uppercase mt-1" style={{ color: '#7A8BA0' }}>
              Bewertungen
            </div>
          </div>
          <div style={{ borderLeft: '1.5px solid rgba(61,158,191,0.25)', paddingLeft: '1.1rem' }}>
            <div className="font-display font-black text-[1.5rem] leading-none" style={{ color: '#EEF2F7' }}>
              ab 19 €
            </div>
            <div className="text-[0.62rem] tracking-[0.14em] uppercase mt-1" style={{ color: '#7A8BA0' }}>
              Haarschnitt
            </div>
          </div>
        </div>
      </div>

      {/* ── Right ── */}
      <div className="relative hidden md:block overflow-hidden">
        {/* Photo placeholder */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{ background: 'linear-gradient(145deg, #1C2235 0%, #141824 60%, #1A2030 100%)' }}>
          <LogoSVG className="w-[72px] h-[84px]" color="rgba(61,158,191,0.15)" />
          <p className="text-[0.65rem] tracking-[0.16em] uppercase"
            style={{ color: 'rgba(238,242,247,0.15)' }}>
            Foto hier einfügen
          </p>
        </div>

        {/* Floating price card */}
        <div
          className="absolute bottom-10 left-[-1.5rem] rounded-[18px] px-5 py-4
            flex items-center gap-4 max-w-[200px] animate-float-d2"
          style={{
            background: 'rgba(20,24,36,0.92)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(61,158,191,0.2)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 0 rgba(61,158,191,0)',
          }}
        >
          <div className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(61,158,191,0.12)', color: '#3D9EBF' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M6 3L18 21M18 3L6 21"/>
              <circle cx="6"  cy="3"  r="2"/><circle cx="18" cy="3"  r="2"/>
              <circle cx="6"  cy="21" r="2"/><circle cx="18" cy="21" r="2"/>
            </svg>
          </div>
          <div>
            <div className="text-[0.65rem] tracking-[0.1em] uppercase mb-0.5" style={{ color: '#7A8BA0' }}>
              Haarschnitt
            </div>
            <div className="font-display font-bold text-[1.05rem]" style={{ color: '#EEF2F7' }}>
              ab 19 €
            </div>
          </div>
        </div>

        {/* Floating rating card */}
        <div
          className="absolute top-10 right-8 rounded-[14px] px-4 py-3.5 text-center animate-float"
          style={{
            background: 'rgba(20,24,36,0.92)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(61,158,191,0.18)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
          }}
        >
          <div className="text-[0.85rem] tracking-[0.05em] mb-0.5" style={{ color: '#3D9EBF' }}>★★★★★</div>
          <div className="font-display font-black text-[1.5rem] leading-none" style={{ color: '#EEF2F7' }}>
            5,0
          </div>
          <div className="text-[0.6rem] tracking-[0.1em] uppercase mt-0.5" style={{ color: '#7A8BA0' }}>
            {salonConfig.bewertung.anzahl} Bewertungen
          </div>
        </div>
      </div>
    </section>
  )
}
