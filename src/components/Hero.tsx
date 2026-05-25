'use client'

import { useBooking } from '@/context/BookingContext'
import { LogoSVG }    from './LogoSVG'
import { salonConfig } from '@/lib/config'

export function Hero() {
  const { open } = useBooking()

  return (
    <section
      id="hero"
      className="min-h-[100dvh] grid grid-cols-1 md:grid-cols-2 pt-[72px] overflow-hidden"
    >
      {/* ── Left column ── */}
      <div className="flex flex-col justify-center px-[clamp(1.5rem,5vw,4rem)]
        py-[clamp(3rem,8vw,7rem)]">

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-warm border border-brown/10
          px-4 py-[0.4rem] rounded-full w-fit mb-8 animate-fade-up">
          <span className="w-[6px] h-[6px] rounded-full bg-rust flex-shrink-0 animate-blink" />
          <span className="text-[0.7rem] font-medium tracking-[0.14em] uppercase text-muted">
            {salonConfig.adresse.strasse} · {salonConfig.adresse.stadt} Sendling
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-black leading-[0.95] tracking-[-0.02em]
          text-[clamp(3rem,7vw,5.5rem)] mb-5 animate-fade-up-d1">
          Dein Stil.
          <br />
          <em className="text-rust not-italic">Unser</em>
          <br />
          Handwerk.
        </h1>

        {/* Subtext */}
        <p className="text-muted font-light max-w-[42ch] leading-[1.78] text-[0.97rem]
          mb-9 animate-fade-up-d2">
          {salonConfig.beschreibung}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3.5 animate-fade-up-d3">
          <button
            onClick={open}
            className="inline-flex items-center gap-2 bg-brown text-cream
              px-8 py-[0.9rem] text-[0.8rem] font-medium tracking-[0.1em] uppercase
              rounded-full shadow-[0_4px_16px_rgba(44,24,16,0.25)]
              hover:bg-brown-dark hover:-translate-y-0.5
              hover:shadow-[0_8px_24px_rgba(44,24,16,0.3)]
              active:scale-[0.97] transition-all duration-200 cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Termin buchen
          </button>

          <a
            href="#leistungen"
            className="inline-flex items-center px-8 py-[0.9rem]
              text-[0.8rem] tracking-[0.1em] uppercase
              rounded-full border-[1.5px] border-brown text-brown
              hover:bg-brown hover:text-cream hover:-translate-y-0.5
              active:scale-[0.97] transition-all duration-200"
          >
            Preisliste
          </a>
        </div>
      </div>

      {/* ── Right column (photo placeholder) ── */}
      <div className="relative hidden md:block overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EAE0CC] via-[#D8C8A8] to-[#C8B088]
          flex flex-col items-center justify-center gap-3">
          <LogoSVG className="w-[72px] h-[72px] opacity-20" />
          <p className="text-brown-dark text-[0.7rem] tracking-[0.15em] uppercase opacity-40">
            Foto hier einfügen
          </p>
        </div>

        {/* Floating price card */}
        <div className="absolute bottom-10 left-[-1.5rem]
          bg-white rounded-2xl px-5 py-3.5
          shadow-[0_20px_60px_rgba(44,24,16,0.14)]
          flex items-center gap-3.5 max-w-[200px]
          animate-float-d2">
          <div className="w-10 h-10 bg-warm rounded-xl flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="#C4622D" strokeWidth="1.5" aria-hidden="true">
              <path d="M6 3L18 21M18 3L6 21" />
              <circle cx="6"  cy="3"  r="2" />
              <circle cx="18" cy="3"  r="2" />
              <circle cx="6"  cy="21" r="2" />
              <circle cx="18" cy="21" r="2" />
            </svg>
          </div>
          <div>
            <div className="text-[0.68rem] tracking-[0.1em] uppercase text-muted mb-0.5">
              Haarschnitt
            </div>
            <div className="font-display font-bold text-base text-brown">
              ab 19 €
            </div>
          </div>
        </div>

        {/* Floating rating card */}
        <div className="absolute top-10 right-8
          bg-white rounded-xl px-4 py-3.5
          shadow-[0_12px_40px_rgba(44,24,16,0.1)]
          text-center animate-float">
          <div className="text-gold text-[0.85rem] tracking-[0.04em] mb-0.5">
            ★★★★★
          </div>
          <div className="font-display font-black text-[1.35rem] text-brown leading-none mb-0.5">
            {salonConfig.bewertung.durchschnitt}
          </div>
          <div className="text-[0.6rem] text-muted tracking-[0.1em] uppercase">
            {salonConfig.bewertung.anzahl} Bewertungen
          </div>
        </div>
      </div>
    </section>
  )
}
