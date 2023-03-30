import Header from './Header'
import ImageCarousel from './ImageCarousel'

import { images } from '../data'

import '../styles/App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <ImageCarousel images={images} />
    </div>
  )
}

export default App
