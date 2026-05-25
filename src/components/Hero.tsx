'use client'

import { useBooking } from '@/context/BookingContext'
import { LogoSVG }    from './LogoSVG'
import { salonConfig } from '@/lib/config'
import { CountUp }    from './CountUp'

export function Hero() {
  const { open } = useBooking()

  return (
    <section
      id="hero"
      className="min-h-[100dvh] grid grid-cols-1 md:grid-cols-2 pt-[72px] overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 60% at 100% 100%, rgba(196,98,45,0.07) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 5% 10%,   rgba(212,160,23,0.04) 0%, transparent 50%),
          #0C0907
        `,
      }}
    >
      {/* ── Left ── */}
      <div className="flex flex-col justify-center px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,8vw,7rem)]">

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5
          border border-[rgba(212,160,23,0.2)] bg-[rgba(212,160,23,0.06)]
          px-4 py-[0.42rem] rounded-full w-fit mb-8 animate-fade-up">
          <span className="w-[6px] h-[6px] rounded-full bg-gold flex-shrink-0 animate-blink" />
          <span className="text-[0.68rem] font-medium tracking-[0.15em] uppercase text-[rgba(250,247,242,0.5)]">
            {salonConfig.adresse.strasse} · {salonConfig.adresse.stadt} Sendling
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-black leading-[0.95] tracking-[-0.025em]
          text-[clamp(3.2rem,7.5vw,6rem)] mb-7 animate-fade-up-d1 text-cream">
          Dein Stil.
          <span className="block w-20 h-px my-3"
            style={{ background: 'linear-gradient(90deg, rgba(212,160,23,0.5), transparent)' }} />
          <span className="shimmer-text">Unser</span>
          {' '}Handwerk.
        </h1>

        {/* Sub */}
        <p className="text-muted font-light max-w-[40ch] leading-[1.8] text-[0.96rem]
          mb-9 animate-fade-up-d2">
          Präzise Schnitte, klassische Rasuren und Bartpflege – direkt am Harras in München Sendling.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3.5 mb-12 animate-fade-up-d3">
          <button
            onClick={open}
            className="inline-flex items-center gap-2 bg-gold text-[#0C0907]
              px-8 py-[0.9rem] text-[0.79rem] font-semibold tracking-[0.08em] uppercase
              rounded-full shadow-[0_4px_20px_rgba(212,160,23,0.25)]
              hover:brightness-110 hover:-translate-y-0.5
              hover:shadow-[0_8px_30px_rgba(212,160,23,0.35)]
              active:scale-95 transition-all duration-200 cursor-pointer"
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
            className="inline-flex items-center px-8 py-[0.9rem]
              text-[0.79rem] tracking-[0.08em] uppercase
              rounded-full border border-[rgba(250,247,242,0.18)] text-cream
              hover:border-[rgba(250,247,242,0.45)] hover:bg-[rgba(250,247,242,0.05)]
              hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Preisliste
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-8 animate-fade-up-d5">
          <div className="border-l border-[rgba(212,160,23,0.25)] pl-4">
            <div className="font-display font-black text-[1.5rem] text-cream leading-none">
              <CountUp from={4.2} to={5.0} decimal suffix=" ★" />
            </div>
            <div className="text-[0.65rem] tracking-[0.12em] uppercase text-muted mt-1">Google Bewertung</div>
          </div>
          <div className="border-l border-[rgba(212,160,23,0.25)] pl-4">
            <div className="font-display font-black text-[1.5rem] text-cream leading-none">
              <CountUp from={50} to={80} suffix="+" />
            </div>
            <div className="text-[0.65rem] tracking-[0.12em] uppercase text-muted mt-1">Bewertungen</div>
          </div>
          <div className="border-l border-[rgba(212,160,23,0.25)] pl-4">
            <div className="font-display font-black text-[1.5rem] text-cream leading-none">Mo–Sa</div>
            <div className="text-[0.65rem] tracking-[0.12em] uppercase text-muted mt-1">9:30 – 19 Uhr</div>
          </div>
        </div>
      </div>

      {/* ── Right (photo placeholder) ── */}
      <div className="relative hidden md:block overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{ background: 'linear-gradient(145deg, #1A0E08 0%, #0F0703 60%, #1C1009 100%)' }}>
          <LogoSVG className="w-[72px] h-[84px] opacity-10" />
          <p className="text-[0.65rem] tracking-[0.16em] uppercase text-cream opacity-20">
            Foto hier einfügen
          </p>
        </div>

        {/* Floating price card */}
        <div className="absolute bottom-10 left-[-1.5rem]
          rounded-[18px] px-5 py-4
          flex items-center gap-4 max-w-[195px]
          border border-[rgba(212,160,23,0.2)]
          shadow-[0_20px_60px_rgba(0,0,0,0.5)]
          animate-float-d2"
          style={{ background: 'rgba(28,16,9,0.92)', backdropFilter: 'blur(20px)' }}>
          <div className="w-[38px] h-[38px] rounded-[10px] bg-[rgba(212,160,23,0.12)]
            flex items-center justify-center flex-shrink-0 text-gold">
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
            <div className="text-[0.65rem] tracking-[0.1em] uppercase text-muted mb-0.5">Haarschnitt</div>
            <div className="font-display font-bold text-[1.05rem] text-cream">ab 19 €</div>
          </div>
        </div>

        {/* Floating rating card */}
        <div className="absolute top-10 right-8
          rounded-[14px] px-4 py-3.5 text-center
          border border-[rgba(212,160,23,0.18)]
          shadow-[0_12px_40px_rgba(0,0,0,0.4)]
          animate-float"
          style={{ background: 'rgba(28,16,9,0.92)', backdropFilter: 'blur(20px)' }}>
          <div className="text-gold text-[0.85rem] tracking-[0.05em] mb-0.5">★★★★★</div>
          <div className="font-display font-black text-[1.5rem] text-cream leading-none">5,0</div>
          <div className="text-[0.6rem] text-muted tracking-[0.1em] uppercase mt-0.5">
            {salonConfig.bewertung.anzahl} Bewertungen
          </div>
        </div>
      </div>
    </section>
  )
}
