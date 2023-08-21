import { Fragment } from 'react'
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
      {lapTimes
        // use this map method to create a reversed array for easier display
        .map((_, index) => {
          // this function runs on every single render which is terrible
          // considering that the app refreshes every 10ms
          // should useMemo hook in order to create the reversed array
          // only when the lapTimes array changes
          console.log('we do the reverse')
          return lapTimes[lapTimes.length - 1 - index]
        })
        .map((lapTime, index) => (
          <Fragment key={lapTime}>
            <hr />
            <p className={`${isBestOrWorst(lapTimes, index)}`}>
              <span>Lap {lapTimes.length - index}.</span>
              <span className="time">{getSeconds(lapTime)}</span>
            </p>
          </Fragment>
        ))}
    </div>
  )
}
