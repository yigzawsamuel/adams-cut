'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children:   ReactNode
  className?: string
  delay?:     number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref     = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVis(true); obs.unobserve(el) } },
      { threshold: 0.08 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-revealed={vis ? 'true' : undefined}
      style={{ transitionDelay: vis ? `${delay}ms` : '0ms' }}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-out',
        vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7',
        className,
      )}
    >
      {children}
    </div>
  )
}
