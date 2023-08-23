import { Fragment, useMemo } from 'react'
import { getSeconds } from '../utils'

import './Laps.css'

export interface LapsProps {
  lapTimes: number[]
  elapsedLapTime: number
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

export default function Laps({ lapTimes, elapsedLapTime }: LapsProps) {
  // To display the last lap on top we need to reverse the lapTimes array
  const reversedLapTimes = useMemo(
    () => lapTimes.map((_, index) => lapTimes[lapTimes.length - 1 - index]),
    [lapTimes],
  )

  return (
    <div className="laps">
      <p>
        <span>Lap {lapTimes.length + 1}.</span>
        <span className="time">{getSeconds(elapsedLapTime)}</span>
      </p>
      {reversedLapTimes.map((lapTime, index) => (
        <Fragment key={lapTime}>
          <hr />
          <p className={`${isBestOrWorst(reversedLapTimes, index)}`}>
            <span>Lap {lapTimes.length - index}.</span>
            <span className="time">{getSeconds(lapTime)}</span>
          </p>
        </Fragment>
      ))}
    </div>
  )
}
