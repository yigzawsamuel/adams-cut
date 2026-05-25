'use client'

import { useState, useEffect } from 'react'
import { Reveal }      from './Reveal'
import { salonConfig } from '@/lib/config'

export function OeffnungszeitenKontakt() {
  const [today, setToday] = useState(-1)

  useEffect(() => { setToday(new Date().getDay()) }, [])

  return (
    <section id="kontakt" className="py-[clamp(5rem,10vw,7rem)]"
      style={{ background: '#100804' }}>
      <div className="max-w-salon mx-auto px-[clamp(1.5rem,5vw,4rem)]">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Kontakt ── */}
          <Reveal>
            <p className="sec-label mb-4">Wo wir sind</p>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)]
              leading-[1.1] text-cream mb-3">
              Besuche <span className="text-gold">uns</span>
            </h2>
            <p className="text-muted text-[0.93rem] leading-[1.85] max-w-[45ch] mb-8">
              Direkt am Harras, im Herzen von München Sendling.
            </p>

            <div className="flex flex-col gap-5">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-[42px] h-[42px] rounded-[12px] border border-[rgba(212,160,23,0.15)]
                  bg-[rgba(212,160,23,0.08)] flex items-center justify-center flex-shrink-0 text-gold">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <div className="text-cream text-[0.85rem] font-medium mb-0.5">Adresse</div>
                  <a href={salonConfig.adresse.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                    className="text-muted text-[0.85rem] leading-[1.6] hover:text-gold transition-colors duration-200 block">
                    {salonConfig.adresse.strasse}<br/>
                    {salonConfig.adresse.plz} {salonConfig.adresse.stadt}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3.5">
                <div className="w-[42px] h-[42px] rounded-[12px] border border-[rgba(212,160,23,0.15)]
                  bg-[rgba(212,160,23,0.08)] flex items-center justify-center flex-shrink-0 text-gold">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.04 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-cream text-[0.85rem] font-medium mb-0.5">Telefon</div>
                  <a href={salonConfig.kontakt.telefonHref}
                    className="text-muted text-[0.85rem] hover:text-gold transition-colors duration-200">
                    {salonConfig.kontakt.telefon}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3.5">
                <div className="w-[42px] h-[42px] rounded-[12px] border border-[rgba(212,160,23,0.15)]
                  bg-[rgba(212,160,23,0.08)] flex items-center justify-center flex-shrink-0 text-gold">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </div>
                <div>
                  <div className="text-cream text-[0.85rem] font-medium mb-0.5">Instagram</div>
                  <a href={salonConfig.kontakt.instagramUrl} target="_blank" rel="noopener noreferrer"
                    className="text-muted text-[0.85rem] hover:text-gold transition-colors duration-200">
                    {salonConfig.kontakt.instagram}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={salonConfig.kontakt.telefonHref}
                className="inline-flex items-center gap-2
                  border border-[rgba(250,247,242,0.18)] text-cream
                  px-7 py-[0.85rem] text-[0.79rem] tracking-[0.08em] uppercase
                  rounded-full hover:border-[rgba(250,247,242,0.4)] hover:bg-[rgba(250,247,242,0.05)]
                  hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.04 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Jetzt anrufen
              </a>
            </div>
          </Reveal>

          {/* ── Öffnungszeiten ── */}
          <Reveal delay={150}>
            <h3 className="font-display font-bold text-[1.35rem] text-cream mb-6">
              Öffnungszeiten
            </h3>
            <ul className="flex flex-col gap-1 list-none p-0">
              {salonConfig.oeffnungszeiten.map((row) => {
                const isToday = row.dayIndex === today
                return (
                  <li
                    key={row.tag}
                    className={[
                      'flex justify-between items-center px-4 py-[0.75rem] rounded-[10px]',
                      'border transition-colors duration-150',
                      isToday
                        ? 'bg-[rgba(212,160,23,0.08)] border-[rgba(212,160,23,0.18)]'
                        : 'border-transparent hover:bg-[rgba(250,247,242,0.03)]',
                    ].join(' ')}
                  >
                    <span className={[
                      'text-[0.85rem] flex items-center gap-2.5',
                      isToday ? 'text-gold' : 'text-muted',
                    ].join(' ')}>
                      {row.tag}
                      {isToday && (
                        <span className="text-[0.58rem] tracking-[0.08em] uppercase
                          bg-[rgba(212,160,23,0.18)] text-gold px-2 py-[0.18rem] rounded-full">
                          Heute
                        </span>
                      )}
                    </span>
                    <span className={[
                      'text-[0.85rem] font-medium',
                      isToday            ? 'text-gold'                    :
                      row.geschlossen    ? 'text-[rgba(250,247,242,0.22)]' : 'text-cream',
                    ].join(' ')}>
                      {row.zeit}
                    </span>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
