'use client'

import { useState, useEffect } from 'react'
import { Reveal }      from './Reveal'
import { salonConfig } from '@/lib/config'

export function OeffnungszeitenKontakt() {
  const [today, setToday] = useState(-1)

  useEffect(() => {
    setToday(new Date().getDay())
  }, [])

  return (
    <section id="kontakt" className="bg-warm py-[clamp(4rem,8vw,7rem)]">
      <div className="max-w-salon mx-auto px-[clamp(1.5rem,5vw,4rem)]">

        <Reveal className="mb-12">
          <p className="sec-label mb-3">Besuche uns</p>
          <h2 className="font-display font-black text-[clamp(2.1rem,4vw,3.1rem)]
            leading-[1.05] tracking-[-0.01em]">
            Öffnungszeiten & Kontakt
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">

          {/* ── Öffnungszeiten ── */}
          <Reveal>
            <div className="bg-white rounded-2xl p-7 shadow-[0_4px_24px_rgba(44,24,16,0.05)]
              h-full">
              <h3 className="font-display font-bold text-[1.1rem] text-salon-text
                pb-4 mb-5 border-b border-brown/10">
                Öffnungszeiten
              </h3>
              <ul className="flex flex-col gap-2.5 list-none p-0">
                {salonConfig.oeffnungszeiten.map((row) => {
                  const isToday = row.dayIndex === today
                  return (
                    <li
                      key={row.tag}
                      className={[
                        'flex justify-between items-center text-[0.88rem] rounded-lg',
                        'transition-colors duration-150',
                        isToday
                          ? 'bg-rust/5 -mx-2 px-2 py-1.5'
                          : 'py-0.5',
                      ].join(' ')}
                    >
                      <span className={[
                        isToday ? 'text-rust font-semibold' : 'text-salon-text',
                      ].join(' ')}>
                        {row.tag}
                        {isToday && (
                          <span className="ml-2 text-[0.62rem] tracking-[0.1em]
                            uppercase text-rust opacity-70">
                            Heute
                          </span>
                        )}
                      </span>
                      <span className={[
                        'text-right',
                        isToday  ? 'text-rust font-medium' : '',
                        row.geschlossen && !isToday ? 'text-muted/40' : 'text-muted',
                      ].join(' ')}>
                        {row.zeit}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>

          {/* ── Kontakt ── */}
          <Reveal delay={100}>
            <div className="bg-white rounded-2xl p-7 shadow-[0_4px_24px_rgba(44,24,16,0.05)]
              h-full">
              <h3 className="font-display font-bold text-[1.1rem] text-salon-text
                pb-4 mb-5 border-b border-brown/10">
                Kontakt
              </h3>
              <ul className="flex flex-col gap-4 list-none p-0">
                {/* Address */}
                <li className="flex items-start gap-3 text-[0.87rem] text-muted leading-[1.55]">
                  <span className="w-[30px] h-[30px] rounded-[10px] bg-warm
                    flex items-center justify-center flex-shrink-0 text-rust">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>
                    {salonConfig.adresse.strasse}
                    <br />
                    {salonConfig.adresse.plz} {salonConfig.adresse.stadt}
                  </span>
                </li>

                {/* Phone */}
                <li className="flex items-center gap-3 text-[0.87rem] text-muted">
                  <span className="w-[30px] h-[30px] rounded-[10px] bg-warm
                    flex items-center justify-center flex-shrink-0 text-rust">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.81a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <a href={salonConfig.kontakt.telefonHref}
                    className="hover:text-rust transition-colors duration-200">
                    {salonConfig.kontakt.telefon}
                  </a>
                </li>

                {/* Instagram */}
                <li className="flex items-center gap-3 text-[0.87rem] text-muted">
                  <span className="w-[30px] h-[30px] rounded-[10px] bg-warm
                    flex items-center justify-center flex-shrink-0 text-rust">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </span>
                  <a
                    href={salonConfig.kontakt.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rust transition-colors duration-200"
                  >
                    {salonConfig.kontakt.instagram}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* ── Anfahrt ── */}
          <Reveal delay={200}>
            <div className="bg-white rounded-2xl p-7 shadow-[0_4px_24px_rgba(44,24,16,0.05)]
              h-full">
              <h3 className="font-display font-bold text-[1.1rem] text-salon-text
                pb-4 mb-5 border-b border-brown/10">
                Anfahrt
              </h3>

              {/* Map placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#E8DCC8] to-[#D4C4A8]
                rounded-xl flex flex-col items-center justify-center gap-2.5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                  className="opacity-20" stroke="#2C1810" strokeWidth="1.2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[0.68rem] tracking-[0.1em] uppercase
                  text-brown-dark opacity-40 text-center leading-[1.5]">
                  {salonConfig.adresse.strasse}
                  <br />
                  {salonConfig.adresse.plz} {salonConfig.adresse.stadt}
                </span>
                <a
                  href={salonConfig.adresse.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.74rem] text-rust
                    font-medium mt-1 hover:underline"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  In Google Maps öffnen
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
