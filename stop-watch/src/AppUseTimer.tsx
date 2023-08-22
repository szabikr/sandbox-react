import useTimer, { Timer } from './hooks/timer'
import { getSeconds } from './utils'

function Stopwatch({ timer }: { timer: Timer }) {
  return (
    <div>
      <button onClick={() => timer.start(Date.now())}>start</button>
      <button onClick={() => timer.stop()}>stop</button>
      <button onClick={() => timer.reset()}>reset</button>
      <p className="time elapsed-time">{getSeconds(timer.elapsedTime)}</p>
      <p>Is running: {timer.isRunning() ? 'True' : 'False'}</p>
    </div>
  )
}

export default function AppUseTimer() {
  const timer = useTimer()
  const lapTimer = useTimer()
  const thirdTimer = useTimer()

  return (
    <>
      <Stopwatch timer={timer} />
      <Stopwatch timer={lapTimer} />
      <Stopwatch timer={thirdTimer} />
    </>
  )
}
