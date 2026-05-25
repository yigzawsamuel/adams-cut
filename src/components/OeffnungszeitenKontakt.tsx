'use client'

import { useState, useEffect } from 'react'
import { Reveal }      from './Reveal'
import { salonConfig } from '@/lib/config'

export function OeffnungszeitenKontakt() {
  const [today, setToday] = useState(-1)
  useEffect(() => { setToday(new Date().getDay()) }, [])

  return (
    <section id="kontakt" className="py-[clamp(5rem,10vw,7rem)]"
      style={{ background: '#F7F4F0' }}>
      <div className="max-w-salon mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Kontakt */}
          <Reveal>
            <p className="sec-label mb-4">
              <span style={{ color: 'rgba(184,115,51,0.5)', marginRight: '0.5rem', fontFamily: 'var(--font-playfair)' }}>06</span>
              Wo wir sind
            </p>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)]
              leading-[1.1] mb-3" style={{ color: '#1A1510' }}>
              Besuche <span className="copper-text">uns</span>
            </h2>
            <p className="text-[0.93rem] leading-[1.85] max-w-[42ch] mb-8"
              style={{ color: '#6B5E54' }}>
              Direkt am Harras, im Herzen von München Sendling.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
                  label: 'Adresse',
                  content: <a href={salonConfig.adresse.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#B87333] transition-colors" style={{ color: '#6B5E54' }}>{salonConfig.adresse.strasse}<br/>{salonConfig.adresse.plz} {salonConfig.adresse.stadt}</a>,
                },
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.04 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                  label: 'Telefon',
                  content: <a href={salonConfig.kontakt.telefonHref} className="hover:text-[#B87333] transition-colors" style={{ color: '#6B5E54' }}>{salonConfig.kontakt.telefon}</a>,
                },
                {
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
                  label: 'Instagram',
                  content: <a href={salonConfig.kontakt.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#B87333] transition-colors" style={{ color: '#6B5E54' }}>{salonConfig.kontakt.instagram}</a>,
                },
              ].map(({ icon, label, content }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <div className="w-[42px] h-[42px] rounded-[12px] flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(184,115,51,0.07)', border: '1px solid rgba(184,115,51,0.15)', color: '#B87333' }}>
                    {icon}
                  </div>
                  <div>
                    <div className="text-[0.85rem] font-medium mb-0.5" style={{ color: '#1A1510' }}>{label}</div>
                    <div className="text-[0.85rem] leading-[1.6]">{content}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href={salonConfig.kontakt.telefonHref}
                className="inline-flex items-center gap-2 cursor-pointer
                  hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                style={{
                  border: '1px solid rgba(28,21,16,0.2)',
                  color: '#1A1510',
                  padding: '0.85rem 1.75rem',
                  fontSize: '0.79rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  borderRadius: '100px',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.04 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                Jetzt anrufen
              </a>
            </div>
          </Reveal>

          {/* Öffnungszeiten */}
          <Reveal delay={150}>
            <h3 className="font-display font-bold text-[1.35rem] mb-6" style={{ color: '#1A1510' }}>
              Öffnungszeiten
            </h3>
            <ul className="flex flex-col gap-1 list-none p-0">
              {salonConfig.oeffnungszeiten.map((row) => {
                const isToday = row.dayIndex === today
                return (
                  <li key={row.tag}
                    className="flex justify-between items-center px-4 py-[0.75rem] rounded-[10px] transition-colors duration-150"
                    style={{
                      background: isToday ? 'rgba(184,115,51,0.08)' : 'transparent',
                      border:     isToday ? '1px solid rgba(184,115,51,0.2)' : '1px solid transparent',
                    }}
                  >
                    <span className="text-[0.85rem] flex items-center gap-2.5"
                      style={{ color: isToday ? '#B87333' : '#6B5E54' }}>
                      {row.tag}
                      {isToday && (
                        <span className="text-[0.58rem] tracking-[0.08em] uppercase px-2 py-[0.18rem] rounded-full"
                          style={{ background: 'rgba(184,115,51,0.15)', color: '#B87333' }}>
                          Heute
                        </span>
                      )}
                    </span>
                    <span className="text-[0.85rem] font-medium"
                      style={{ color: isToday ? '#B87333' : row.geschlossen ? 'rgba(28,21,16,0.25)' : '#1A1510' }}>
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
