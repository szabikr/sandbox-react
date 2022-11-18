import React, { useState, useEffect } from 'react'
import logo from '../../logo.svg'
import Credits from '../credits'
import Words from '../words/words'
import Word from '../word'
import './app.css'

function App() {
  const [quote, setQuote] = useState('')
  const [selectedWord, setSelectedWord] = useState(null)

  useEffect(() => {
    fetch('https://api.kanye.rest')
      .then((response) => response.json())
      .then((data) => setQuote(data.quote))
      .catch((error) =>
        console.log(`There was an error while fetching quote: ${error}`),
      )
    return () => {
      console.log('all memory cleanup will happen here...')
    }
  }, [])

  const handleOnChange = (event) => setQuote(event.target.value)
  const selectWord = (word) => setSelectedWord(word)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Quote Analyser</h1>
        <textarea rows="6" cols="48" value={quote} onChange={handleOnChange} />
        <Credits />
        <Words
          quote={quote}
          selectedWord={selectedWord}
          selectWord={selectWord}
        />
        <Word word={selectedWord} />
      </header>
      <hr />
      <footer>
        a{' '}
        <strong>
          <a href="https://szabi.space/" className="App-link">
            szabi.space
          </a>
        </strong>{' '}
        development
      </footer>
    </div>
  )
}

export default App
