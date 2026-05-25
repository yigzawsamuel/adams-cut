'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children:   ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right'
  delay?:     number
}

export function Reveal({ children, className, direction = 'up', delay = 0 }: RevealProps) {
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

  const hidden = {
    up:    'opacity-0 translate-y-7',
    left:  'opacity-0 -translate-x-7',
    right: 'opacity-0 translate-x-7',
  }[direction]

  return (
    <div
      ref={ref}
      style={{ transitionDelay: vis ? `${delay}ms` : '0ms' }}
      className={cn(
        'transition-all duration-700 ease-out',
        vis ? 'opacity-100 translate-y-0 translate-x-0' : hidden,
        className,
      )}
    >
      {children}
    </div>
  )
}
