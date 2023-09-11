import './App.css'

const eventDate = new Date('2024-02-04')

function App() {
  // Calculate how much milliseconds is inbetween the eventDate and now
  // Just an initial idea, not necessarily the solution
  // const remains = eventDate.getTime() - Date.now()
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Countdown will show here...</h1>
        <p>{eventDate.toDateString()}</p>
      </main>
      <footer>
        a <a href="https://szabi.space">szabi.space</a> development
      </footer>
    </>
  )
}

export default App
