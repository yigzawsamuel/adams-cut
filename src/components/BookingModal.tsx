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
      className="fixed inset-0 z-[200] flex items-center justify-center p-4
        bg-[rgba(44,24,16,0.55)] backdrop-blur-[10px]"
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
    >
      <div className="bg-cream rounded-3xl w-full max-w-[520px] max-h-[90dvh] overflow-auto
        flex flex-col shadow-[0_32px_80px_rgba(44,24,16,0.35)] animate-pop-in">

        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5
          border-b border-brown/10">
          <span className="font-display text-xl font-bold text-salon-text">
            Termin buchen
          </span>
          <button
            onClick={close}
            aria-label="Schließen"
            className="w-8 h-8 rounded-full bg-warm flex items-center justify-center
              text-muted hover:bg-brown/10 transition-colors duration-200 cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-7 py-8 text-center flex flex-col items-center gap-5">
          <p className="text-muted text-[0.92rem] leading-relaxed max-w-[36ch]">
            Ruf uns direkt an oder buche bequem über unser Online-System.
          </p>

          <a
            href={salonConfig.kontakt.telefonHref}
            className="inline-flex items-center gap-3 bg-brown text-cream
              px-8 py-4 rounded-full text-base font-medium
              shadow-[0_4px_16px_rgba(44,24,16,0.2)]
              hover:bg-brown-dark hover:-translate-y-0.5
              active:scale-[0.97] transition-all duration-200 cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.81a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {salonConfig.kontakt.telefon}
          </a>

          <div className="flex items-center gap-3 w-full text-muted text-[0.78rem]">
            <div className="flex-1 h-px bg-brown/10" />
            <span>oder online buchen</span>
            <div className="flex-1 h-px bg-brown/10" />
          </div>

          {/* Cal.com placeholder */}
          <div className="w-full rounded-2xl border border-dashed border-brown/20
            bg-warm/60 p-6 text-center">
            <div className="w-10 h-10 rounded-full border border-gold/40
              flex items-center justify-center mx-auto mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="#D4A017" strokeWidth="1.5" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <p className="text-[0.82rem] text-muted mb-1">
              Cal.com Widget hier einbetten
            </p>
            <code className="text-[0.72rem] text-rust bg-rust/8 px-3 py-1 rounded-md inline-block">
              calComLink in config.ts eintragen
            </code>
          </div>
        </div>
      </div>
    </div>
  )
}
