import { useRemaining } from '../hooks'

export interface MainProps {
  eventName: string
  eventDate: Date
}

export default function Main({ eventName, eventDate }: MainProps) {
  const remaining = useRemaining(eventDate)

  return (
    <main>
      <h1>{eventName} in</h1>
      <h2>
        <span>{remaining.days} days</span>
        <span>{remaining.hours} hours</span>
        <span>{remaining.minutes} minutes</span>
        <span>{remaining.seconds} seconds</span>
      </h2>
      <p>until {eventDate.toDateString()}</p>
    </main>
  )
}
