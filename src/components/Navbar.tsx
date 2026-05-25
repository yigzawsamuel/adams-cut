'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useBooking } from '@/context/BookingContext'
import { LogoSVG } from './LogoSVG'
import { salonConfig } from '@/lib/config'

const NAV_LINKS = [
  { href: '#leistungen', label: 'Preise'   },
  { href: '#team',       label: 'Team'     },
  { href: '#kontakt',    label: 'Kontakt'  },
]

export function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const { open } = useBooking()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <nav
        className={[
          'fixed inset-x-0 top-0 z-[100] h-[72px]',
          'flex items-center justify-between',
          'px-[clamp(1.5rem,5vw,4rem)]',
          'bg-[rgba(250,247,242,0.94)] backdrop-blur-xl',
          'border-b border-brown/10',
          'transition-shadow duration-300',
          scrolled ? 'shadow-[0_4px_24px_rgba(44,24,16,0.08)]' : '',
        ].join(' ')}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label={salonConfig.name}>
          <LogoSVG className="w-[42px] h-[42px] flex-shrink-0" />
          <div>
            <div className="font-display font-bold text-[1.05rem] leading-tight text-salon-text">
              {salonConfig.name}
            </div>
            <div className="font-sans text-[0.58rem] font-normal tracking-[0.18em]
              uppercase text-muted mt-0.5">
              {salonConfig.adresse.stadt} · {salonConfig.adresse.bezirk}
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="relative text-[0.74rem] font-medium tracking-[0.1em] uppercase
                  text-muted hover:text-salon-text transition-colors duration-200 group/link"
              >
                {label}
                <span className="absolute -bottom-[3px] left-0 right-0 h-[1.5px]
                  bg-rust origin-left scale-x-0 group-hover/link:scale-x-100
                  transition-transform duration-250 ease-out" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            onClick={open}
            className="hidden md:block bg-brown text-cream
              px-6 py-[0.58rem] text-[0.73rem] font-medium tracking-[0.1em] uppercase
              rounded-full shadow-[0_2px_8px_rgba(44,24,16,0.2)]
              hover:bg-brown-dark hover:-translate-y-px
              active:scale-[0.97] transition-all duration-200 cursor-pointer"
          >
            Termin buchen
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-1 cursor-pointer"
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={[
                  'block w-[22px] h-[1.5px] bg-salon-text rounded-full transition-all duration-300 origin-center',
                  i === 0 && mobileOpen ? 'rotate-45 translate-y-[7px]'  : '',
                  i === 1 && mobileOpen ? 'opacity-0 scale-x-0'           : '',
                  i === 2 && mobileOpen ? '-rotate-45 -translate-y-[7px]' : '',
                ].join(' ')}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden fixed top-[72px] inset-x-0 z-[99]
            bg-cream border-b border-brown/10
            px-[clamp(1.5rem,5vw,4rem)] pt-5 pb-6
            flex flex-col gap-4 animate-slide-down"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-[0.9rem] tracking-[0.1em] uppercase text-muted
                py-2 border-b border-brown/10 last:border-b-0"
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => { closeMenu(); open() }}
            className="mt-1 text-center bg-brown text-cream py-3.5 rounded-full
              text-[0.8rem] font-medium tracking-[0.1em] uppercase cursor-pointer"
          >
            Termin buchen
          </button>
        </div>
      )}
    </>
  )
}
