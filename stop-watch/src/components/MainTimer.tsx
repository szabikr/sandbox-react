import { getSeconds } from '../utils'
import '../styles/MainTimer.css'

export interface MainTimerProps {
  elapsedTime: number
}

export default function MainTimer({ elapsedTime }: MainTimerProps) {
  return <p className="time elapsed-time">{getSeconds(elapsedTime)}</p>
}
