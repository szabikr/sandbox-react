import './Controls.css'

export interface ControlsProps {
  startTime: number | null
  startTimer: () => void
  stopTimer: () => void
  lapTimer: () => void
  resetTimer: () => void
}

export default function Controls({
  startTime,
  startTimer,
  stopTimer,
  lapTimer,
  resetTimer,
}: ControlsProps) {
  return (
    <div className="controls">
      {startTime ? (
        <>
          <button className="stop-button" onClick={() => stopTimer()}>
            Stop
          </button>
          <button onClick={() => lapTimer()}>Lap</button>
        </>
      ) : (
        <>
          <button className="start-button" onClick={() => startTimer()}>
            Start
          </button>
          <button onClick={() => resetTimer()}>Reset</button>
        </>
      )}
    </div>
  )
}
