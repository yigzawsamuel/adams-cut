'use client'

import { useEffect, useState } from 'react'

/**
 * Waben-LED-Decken-Animation – leuchtet beim Laden auf, dann fade weg.
 * Inspired by the actual hexagonal ceiling lights in the shop.
 */
export function HexGrid() {
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setFading(true), 2100)
    return () => clearTimeout(t)
  }, [])

  const R  = 68
  const W  = R * Math.sqrt(3)   // ~117.7 – horizontal width of hex
  const VS = R * 1.5             // 102   – vertical step between rows
  const COLS = 14
  const ROWS = 11

  // Pointy-top hex vertices, centered at (cx, cy)
  const pts = (cx: number, cy: number) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 2 // start at top vertex
      return `${(cx + (R - 3) * Math.cos(a)).toFixed(1)},${(cy + (R - 3) * Math.sin(a)).toFixed(1)}`
    }).join(' ')

  const hexes = Array.from({ length: ROWS }, (_, row) =>
    Array.from({ length: COLS }, (_, col) => {
      const cx = col * W + (row % 2 === 1 ? W / 2 : 0) - W * 0.3
      const cy = row * VS - VS * 0.5
      return { cx, cy, delay: ((col + row) * 0.055).toFixed(2) }
    })
  ).flat()

  return (
    <div
      className="absolute inset-0 z-[15] pointer-events-none overflow-hidden"
      style={{
        transition: 'opacity 1.3s ease',
        opacity: fading ? 0 : 1,
      }}
    >
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <filter id="hexGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {hexes.map((h, i) => (
          <polygon
            key={i}
            points={pts(h.cx, h.cy)}
            fill="rgba(255,252,245,0.025)"
            stroke="rgba(255,252,245,0.55)"
            strokeWidth="1.4"
            filter="url(#hexGlow)"
            style={{
              animation: `hexPulse 1.9s ${h.delay}s ease both`,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
