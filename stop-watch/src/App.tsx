import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function getSeconds(milis: number): number {
  return Math.floor(milis / 1000)
}

function App() {
  const [startTime, setStartTime] = useState<number | null>(null)
  const [recentlyElapsedTime, setRecentlyElapsedTime] = useState<number>(0)
  const [elapsedTime, setElapsedTime] = useState<number>(0)
  const [lapTimes, setLapTimes] = useState<number[]>([])

  useEffect(() => {
    let intervalId: number | undefined = undefined

    if (startTime === null) {
      if (intervalId) {
        window.clearInterval(intervalId)
      }

      return
    }

    intervalId = window.setInterval(() => {
      setRecentlyElapsedTime(Date.now() - startTime)
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [startTime])

  function startTimer() {
    setStartTime(Date.now())
  }

  function stopTimer() {
    setElapsedTime(elapsedTime + recentlyElapsedTime)
    setRecentlyElapsedTime(0)
    setStartTime(null)
  }

  function lapTimer() {
    const newLapTimes = [...lapTimes, elapsedTime + recentlyElapsedTime]
    setLapTimes(newLapTimes)
  }

  function resetTimer() {
    setElapsedTime(0)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Stopwatch</h1>
      <div className="card">
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
        <p>Elapsed Time: {getSeconds(elapsedTime + recentlyElapsedTime)}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
