import { getSeconds } from '../utils'
import './MainTimer.css'

export interface MainTimerProps {
  elapsedTime: number
  recentlyElapsedTime: number
}

export default function MainTimer({
  elapsedTime,
  recentlyElapsedTime,
}: MainTimerProps) {
  return (
    <p className="time elapsed-time">
      {getSeconds(elapsedTime + recentlyElapsedTime)}
    </p>
  )
}
