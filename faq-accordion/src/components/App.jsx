import Header from './Header'
import Footer from './Footer'
import FaqAccordion from './FaqAccordion'

import '../styles/App.css'

import { questions } from '../data'

function App() {
  return (
    <div className="App">
      <Header />
      <FaqAccordion questions={questions} openByDefault={questions[0].id} />
      <Footer />
    </div>
  )
}

export default App
