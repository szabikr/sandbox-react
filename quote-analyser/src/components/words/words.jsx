import React, { useState, useEffect } from 'react'
import { removeNonAlphanumbericChars, lowerCase, onlyUnique } from '../../utils'
import './words.css'

function Words({ quote, selectedWord, selectWord }) {
  const [words, setWords] = useState([])

  useEffect(() => {
    setWords(
      quote
        .split(' ')
        .map(removeNonAlphanumbericChars)
        .map(lowerCase)
        .filter(onlyUnique),
    )
  }, [quote])

  return (
    <>
      <h3>Words</h3>
      <div className="words-wrapper">
        {words.map((word) => (
          <div key={word} className="word-button-wrapper">
            <button
              className={`word-button ${
                word === selectedWord ? 'selected-word' : 'App-link'
              }`}
              onClick={() => selectWord(word)}
            >
              {word}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Words
