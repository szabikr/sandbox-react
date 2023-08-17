import { getSeconds } from '../utils'

import './Laps.css'

export interface LapsProps {
  lapTimes: number[]
  elapsedLapTime: number
  recentlyElapsedLapTime: number
}

function isBestOrWorst(lapTimes: number[], index: number): string {
  if (lapTimes.length <= 1) {
    return ''
  }

  if (lapTimes.indexOf(Math.max(...lapTimes)) === index) {
    return 'worst'
  }

  if (lapTimes.indexOf(Math.min(...lapTimes)) === index) {
    return 'best'
  }

  return ''
}

export default function Laps({
  lapTimes,
  elapsedLapTime,
  recentlyElapsedLapTime,
}: LapsProps) {
  return (
    <div className="laps">
      <p>
        <span>Lap {lapTimes.length + 1}.</span>
        <span className="time">
          {getSeconds(elapsedLapTime + recentlyElapsedLapTime)}
        </span>
      </p>
      {lapTimes.map((lapTime, index) => (
        <>
          <hr />
          <p className={`${isBestOrWorst(lapTimes, index)}`}>
            <span>Lap {lapTimes.length - index}.</span>
            <span className="time">{getSeconds(lapTime)}</span>
          </p>
        </>
      ))}
    </div>
  )
}
