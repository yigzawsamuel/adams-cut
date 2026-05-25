'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  from?: number
  to: number
  decimal?: boolean
  suffix?: string
  className?: string
}

export function CountUp({ from = 0, to, decimal = false, suffix = '', className }: CountUpProps) {
  const fmt = (v: number) =>
    decimal ? v.toFixed(1).replace('.', ',') + suffix : String(Math.round(v)) + suffix

  const [display, setDisplay] = useState(fmt(from))
  const ref  = useRef<HTMLSpanElement>(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || done.current) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || done.current) return
      done.current = true
      obs.unobserve(el)
      const steps = 40, dur = 1000
      let step = 0
      const iv = setInterval(() => {
        step++
        setDisplay(fmt(from + (to - from) * step / steps))
        if (step >= steps) { clearInterval(iv); setDisplay(fmt(to)) }
      }, dur / steps)
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [from, to, decimal, suffix])

  return <span ref={ref} className={className}>{display}</span>
}
