'use client'

import { useEffect, useState } from 'react'
import { useBooking } from '@/context/BookingContext'

export function FloatingPill() {
  const [show, setShow] = useState(false)
  const { open } = useBooking()

  useEffect(() => {
    const onScroll = () => {
      const s = document.documentElement
      setShow(s.scrollTop / (s.scrollHeight - s.clientHeight) > 0.6)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={open}
      aria-label="Termin buchen"
      className={[
        'fixed bottom-7 left-1/2 z-[90]',
        'flex items-center gap-2 whitespace-nowrap',
        'text-[0.78rem] font-bold tracking-[0.08em] uppercase',
        'rounded-full',
        'transition-[opacity,transform] duration-400',
        'active:scale-95',
        show
          ? 'opacity-100 -translate-x-1/2 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-x-1/2 translate-y-3 pointer-events-none',
      ].join(' ')}
      style={{
        background: 'linear-gradient(135deg,#B87333,#D4945A)',
        color: '#1C1C1C',
        padding: '0.85rem 1.75rem',
        boxShadow: '0 8px 30px rgba(184,115,51,0.4), 0 2px 8px rgba(0,0,0,0.4)',
      }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
      Termin buchen
    </button>
  )
}
