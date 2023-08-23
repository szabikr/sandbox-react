import '../styles/Controls.css'

export interface ControlsProps {
  isTimerRunning: boolean
  start: () => void
  stop: () => void
  lap: () => void
  reset: () => void
}

export default function Controls({
  isTimerRunning,
  start,
  stop,
  lap,
  reset,
}: ControlsProps) {
  return (
    <div className="controls">
      {isTimerRunning ? (
        <>
          <button className="stop-button" onClick={stop}>
            Stop
          </button>
          <button onClick={lap}>Lap</button>
        </>
      ) : (
        <>
          <button className="start-button" onClick={start}>
            Start
          </button>
          <button onClick={reset}>Reset</button>
        </>
      )}
    </div>
  )
}
