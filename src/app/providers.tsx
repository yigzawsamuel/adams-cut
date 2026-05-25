'use client'

import { BookingProvider } from '@/context/BookingContext'
import type { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return <BookingProvider>{children}</BookingProvider>
}
