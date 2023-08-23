import { useState, useEffect } from 'react'

export interface Timer {
  elapsedTime: number
  start: (currentTime: number) => void
  stop: () => void
  reset: () => void
  isRunning: boolean
}

export default function useTimer(): Timer {
  const [startTime, setStartTime] = useState<number | null>(null)
  const [recentlyElapsedTime, setRecentlyElapsedTime] = useState<number>(0)
  const [elapsedTime, setElapsedTime] = useState<number>(0)

  useEffect(() => {
    if (startTime === null) return

    const intervalId = window.setInterval(() => {
      setRecentlyElapsedTime(Date.now() - startTime)
    }, 10)

    return () => window.clearInterval(intervalId)
  }, [startTime])

  function start(currentTime: number) {
    setStartTime(currentTime)
  }

  function stop() {
    setElapsedTime(elapsedTime + recentlyElapsedTime)
    setRecentlyElapsedTime(0)
    setStartTime(null)
  }

  function reset() {
    stop()
    setElapsedTime(0)
  }

  return {
    elapsedTime: recentlyElapsedTime + elapsedTime,
    start,
    stop,
    reset,
    isRunning: startTime !== null,
  }
}
