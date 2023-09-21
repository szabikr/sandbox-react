import { useState, useEffect } from 'react'
import { calcRemaining } from './utils'
import { Remaining } from './types'

export function useRemaining(eventDate: Date): Remaining {
  const [remaining, setRemaining] = useState<Remaining>(
    calcRemaining(eventDate),
  )

  useEffect(() => {
    const id = setInterval(() => setRemaining(calcRemaining(eventDate)), 1000)
    return () => clearInterval(id)
  }, [eventDate])

  return remaining
}
