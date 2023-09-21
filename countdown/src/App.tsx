import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Countdown from './components/Countdown'
import Settings from './components/Settings'
import './styles/App.css'

const movingDate = new Date('2023-10-08')
const movingName = 'Moving to new Apartment'

function App() {
  const [activeView, setActiveView] = useState('Home')
  return (
    <>
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main>
        {activeView === 'Home' ? (
          <Countdown eventName={movingName} eventDate={movingDate} />
        ) : null}
        {activeView === 'Settings' ? <Settings /> : null}
      </main>
      <Footer />
    </>
  )
}

export default App
