import { useState, useEffect } from 'react'
import MainTimer from './components/MainTimer'
import Controls from './components/Controls'
import Laps from './components/Laps'

function App() {
  const [startTime, setStartTime] = useState<number | null>(null)
  const [recentlyElapsedTime, setRecentlyElapsedTime] = useState<number>(0)
  const [elapsedTime, setElapsedTime] = useState<number>(0)

  const [startLapTime, setStartLapTime] = useState<number | null>(null)
  const [recentlyElapsedLapTime, setRecentlyElapsedLapTime] =
    useState<number>(0)
  const [elapsedLapTime, setElapsedLapTime] = useState<number>(0)

  const [lapTimes, setLapTimes] = useState<number[]>([])

  // === Global Timer ===
  useEffect(() => {
    if (startTime === null) return

    const intervalId = window.setInterval(() => {
      setRecentlyElapsedTime(Date.now() - startTime)
    }, 10)

    return () => window.clearInterval(intervalId)
  }, [startTime])

  // === Current Lap Timer ===
  useEffect(() => {
    if (startLapTime === null) return

    const intervalId = window.setInterval(() => {
      setRecentlyElapsedLapTime(Date.now() - startLapTime)
    }, 10)

    return () => window.clearInterval(intervalId)
  }, [startLapTime])

  function startTimer() {
    const currentTime = Date.now()
    setStartTime(currentTime)
    setStartLapTime(currentTime)
  }

  function stopTimer() {
    setElapsedTime(elapsedTime + recentlyElapsedTime)
    setRecentlyElapsedTime(0)
    setStartTime(null)

    setElapsedLapTime(elapsedLapTime + recentlyElapsedLapTime)
    setRecentlyElapsedLapTime(0)
    setStartLapTime(null)
  }

  function lapTimer() {
    setLapTimes([elapsedLapTime + recentlyElapsedLapTime, ...lapTimes])

    setElapsedLapTime(0)
    setRecentlyElapsedLapTime(0)
    setStartLapTime(Date.now())
  }

  function resetTimer() {
    setElapsedTime(0)
    setElapsedLapTime(0)
    setLapTimes([])
  }

  return (
    <>
      <h1>Stopwatch</h1>
      <MainTimer
        elapsedTime={elapsedTime}
        recentlyElapsedTime={recentlyElapsedTime}
      />
      <Controls
        startTime={startTime}
        startTimer={startTimer}
        stopTimer={stopTimer}
        lapTimer={lapTimer}
        resetTimer={resetTimer}
      />
      <Laps
        lapTimes={lapTimes}
        elapsedLapTime={elapsedLapTime}
        recentlyElapsedLapTime={recentlyElapsedLapTime}
      />
      <footer>
        a <a href="https://szabi.space">szabi.space</a> development
      </footer>
    </>
  )
}

export default App
