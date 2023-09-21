import { useRemaining } from '../hooks'

export interface CountdownProps {
  eventName: string
  eventDate: Date
}

export default function Countdown({ eventName, eventDate }: CountdownProps) {
  const remaining = useRemaining(eventDate)

  return (
    <section>
      <h1>{eventName}</h1>
      <h2>
        <span>{remaining.days} days</span>
        {
          // Pad these values with 0 when they are single digit
        }
        <span>{remaining.hours} hours</span>
        <span>{remaining.minutes} minutes</span>
        <span>{remaining.seconds} seconds</span>
      </h2>
      <p>until {eventDate.toDateString()}</p>
    </section>
  )
}
