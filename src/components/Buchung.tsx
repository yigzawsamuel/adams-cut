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
    <section id="buchung" className="bg-brown text-cream overflow-hidden relative
      py-[clamp(4rem,8vw,7rem)]">

      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[150px] -top-[150px]
          w-[500px] h-[500px] rounded-full
          bg-[radial-gradient(circle,rgba(212,160,23,0.15)_0%,transparent_70%)]"
      />

      <div className="max-w-salon mx-auto px-[clamp(1.5rem,5vw,4rem)] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">

          {/* ── Left: Info ── */}
          <Reveal direction="left">
            <p className="flex items-center gap-3 text-gold text-[0.7rem] tracking-[0.2em]
              uppercase mb-3">
              <span className="block w-[22px] h-[1.5px] bg-gold flex-shrink-0" />
              Online buchen
            </p>

            <h2 className="font-display font-black text-cream
              text-[clamp(2.1rem,4vw,3.1rem)] leading-[1.05] tracking-[-0.01em] mb-4">
              Termin in{' '}
              <em className="text-gold not-italic">60 Sekunden</em>
            </h2>

            <p className="text-[rgba(250,247,242,0.6)] font-light leading-[1.82]
              text-[0.95rem] max-w-[40ch] mb-8">
              Wähle deinen Barber, deine Leistung und deinen Wunschtermin – ohne Anruf.
            </p>

            <ul className="flex flex-col gap-3.5 mb-10 list-none p-0">
              {FEATURES.map((f, i) => (
                <li key={i} className="flex items-center gap-3.5
                  text-[0.88rem] text-[rgba(250,247,242,0.65)]">
                  <span className="w-[22px] h-[22px] rounded-full bg-[rgba(212,160,23,0.2)]
                    flex items-center justify-center flex-shrink-0 text-gold">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={open}
              className="bg-gold text-brown px-8 py-[0.9rem]
                text-[0.8rem] font-medium tracking-[0.1em] uppercase
                rounded-full shadow-[0_4px_16px_rgba(212,160,23,0.3)]
                hover:brightness-110 hover:-translate-y-0.5
                active:scale-[0.97] transition-all duration-200 cursor-pointer"
            >
              Jetzt buchen
            </button>
          </Reveal>

          {/* ── Right: Widget placeholder ── */}
          <Reveal direction="right">
            <div className="bg-[rgba(250,247,242,0.06)] border border-[rgba(250,247,242,0.1)]
              rounded-2xl min-h-[420px] flex flex-col backdrop-blur-md">

              {/* Widget header */}
              <div className="flex items-center gap-2.5 px-6 py-4
                border-b border-[rgba(250,247,242,0.08)]">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse-dot" />
                <span className="text-[0.68rem] tracking-[0.14em] uppercase
                  text-[rgba(250,247,242,0.45)]">
                  Termin auswählen
                </span>
              </div>

              {/* Widget body */}
              <div className="flex-1 flex flex-col items-center justify-center
                p-10 text-center gap-4">
                <div className="w-14 h-14 rounded-full border border-[rgba(212,160,23,0.3)]
                  flex items-center justify-center text-gold">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <p className="text-[0.88rem] text-[rgba(250,247,242,0.45)] max-w-[26ch]">
                  Cal.com Buchungs-Widget hier einbetten
                </p>
                <code className="text-[0.72rem] text-gold bg-[rgba(212,160,23,0.1)]
                  px-3 py-1.5 rounded-md">
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
