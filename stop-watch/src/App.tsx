import { useState } from 'react'
import useTimer from './hooks/timer'

import MainTimer from './components/MainTimer'
import Controls from './components/Controls'
import Laps from './components/Laps'

export default function AppUseTimer() {
  const mainTimer = useTimer()
  const lapTimer = useTimer()

  const [lapTimes, setLapTimes] = useState<number[]>([])

  function start() {
    const currentTime = Date.now()
    mainTimer.start(currentTime)
    lapTimer.start(currentTime)
  }

  function stop() {
    mainTimer.stop()
    lapTimer.stop()
  }

  function reset() {
    mainTimer.reset()
    lapTimer.reset()
    setLapTimes([])
  }

  function lap() {
    setLapTimes([...lapTimes, lapTimer.elapsedTime])
    lapTimer.reset()
    lapTimer.start(Date.now())
  }

  return (
    <>
      <header>
        <h1>Stopwatch</h1>
      </header>
      <main>
        <MainTimer elapsedTime={mainTimer.elapsedTime} />
        <Controls
          isTimerRunning={mainTimer.isRunning}
          start={start}
          stop={stop}
          reset={reset}
          lap={lap}
        />
        <Laps lapTimes={lapTimes} elapsedLapTime={lapTimer.elapsedTime} />
      </main>
      <footer>
        a <a href="https://szabi.space">szabi.space</a> development
      </footer>
    </>
  )
}
