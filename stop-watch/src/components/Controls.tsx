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
          <button onClick={() => lapTimer()} style={{ marginLeft: '0.5em' }}>
            Lap
          </button>
        </>
      ) : (
        <>
          <button className="start-button" onClick={() => startTimer()}>
            Start
          </button>
          <button onClick={() => resetTimer()} style={{ marginLeft: '0.5em' }}>
            Reset
          </button>
        </>
      )}
    </div>
  )
}