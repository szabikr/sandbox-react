import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import './styles/App.css'

const eventDate = new Date('2023-09-15T17:00:00')
const eventName = 'Weekend'

function App() {
  return (
    <>
      <Header />
      <Main eventName={eventName} eventDate={eventDate} />
      <Footer />
    </>
  )
}

export default App
