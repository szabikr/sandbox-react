import { useState, useEffect } from 'react'
import './App.css'

function getSeconds(milis: number): string {
  function pad(num: number): string {
    return num.toString().padStart(2, '0')
  }

  const miliseconds = Math.floor(milis / 10) % 100
  const minutes = Math.floor(milis / 1000 / 60)
  const seconds = Math.floor(milis / 1000) % 60
  return `${pad(minutes)}:${pad(seconds)}.${pad(miliseconds)}`
}

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
      <div className="card">
        <p>{getSeconds(elapsedTime + recentlyElapsedTime)}</p>
        <div>
          {startTime ? (
            <button onClick={() => stopTimer()} style={{ marginLeft: '0.5em' }}>
              Stop
            </button>
          ) : (
            <button onClick={() => startTimer()}>Start</button>
          )}
          {startTime ? (
            <button onClick={() => lapTimer()}>Lap</button>
          ) : (
            <button onClick={() => resetTimer()}>Reset</button>
          )}
        </div>
        <p>
          Lap {lapTimes.length + 1}{' '}
          {getSeconds(elapsedLapTime + recentlyElapsedLapTime)}
        </p>
        <ol reversed>
          {lapTimes.map((lapTime) => (
            <li>{getSeconds(lapTime)}</li>
          ))}
        </ol>
      </div>
    </>
  )
}

export default App
