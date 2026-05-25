'use client'

import { useEffect } from 'react'
import { useBooking } from '@/context/BookingContext'
import { salonConfig } from '@/lib/config'

export function BookingModal() {
  const { isOpen, close } = useBooking()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Termin buchen"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
    >
      <div
        className="w-full max-w-[480px] max-h-[90dvh] overflow-auto
          rounded-3xl flex flex-col border border-[rgba(212,160,23,0.18)]
          shadow-[0_32px_80px_rgba(0,0,0,0.6)] animate-pop-in"
        style={{ background: '#1A0E08' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5
          border-b border-[rgba(250,247,242,0.07)]">
          <span className="font-display text-xl font-bold text-cream">Termin buchen</span>
          <button
            onClick={close}
            aria-label="Schließen"
            className="w-8 h-8 rounded-full bg-[rgba(250,247,242,0.08)] flex items-center justify-center
              text-muted hover:bg-[rgba(250,247,242,0.15)] hover:text-cream
              transition-colors duration-200 cursor-pointer active:scale-95"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-7 py-8 flex flex-col gap-5">
          <p className="text-muted text-[0.92rem] leading-relaxed">
            Wähle deinen Wunschtermin direkt online oder ruf uns an.
          </p>

          {/* Cal.com placeholder */}
          <div className="rounded-2xl border border-dashed border-[rgba(212,160,23,0.22)]
            bg-[rgba(212,160,23,0.04)] p-8 text-center">
            <div className="w-12 h-12 rounded-full border border-[rgba(212,160,23,0.3)]
              flex items-center justify-center mx-auto mb-3 text-gold">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <p className="text-[0.85rem] text-muted mb-2">
              Cal.com Widget hier einbetten
            </p>
            <code className="text-[0.72rem] text-gold bg-[rgba(212,160,23,0.1)] px-3 py-1.5 rounded-md">
              calComLink in config.ts eintragen
            </code>
          </div>

          <div className="flex items-center gap-3 text-[rgba(250,247,242,0.2)] text-[0.75rem]">
            <div className="flex-1 h-px bg-[rgba(250,247,242,0.07)]"/>
            <span>oder direkt anrufen</span>
            <div className="flex-1 h-px bg-[rgba(250,247,242,0.07)]"/>
          </div>

          <a
            href={salonConfig.kontakt.telefonHref}
            className="flex items-center justify-center gap-3
              border border-[rgba(250,247,242,0.1)] rounded-xl py-3.5
              text-[rgba(250,247,242,0.6)] text-[0.9rem] font-medium
              hover:border-[rgba(212,160,23,0.3)] hover:bg-[rgba(212,160,23,0.04)] hover:text-gold
              transition-all duration-200 active:scale-95"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.04 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            {salonConfig.kontakt.telefon}
          </a>
        </div>
      </div>
    </div>
  )
}
