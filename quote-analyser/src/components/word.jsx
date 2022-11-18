import React, { useState, useEffect } from 'react'
import WordDefinition from './word-definition'

function Word({ word }) {
  const [details, setDetails] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!word) {
      return
    }
    setError(null)

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('data is', data)
        if (data.title) {
          setError(data.title)
          return
        }
        setDetails({
          phonetics: {
            text: data[0].phonetics[0].text,
            audio: data[0].phonetics[0].audio,
          },
          meanings: data[0].meanings,
          sourceUrl: data[0].sourceUrls[0],
        })
      })
      .catch((error) =>
        console.log(
          `Something went wrong while fetching info about word: ${error}`,
        ),
      )
  }, [word])

  if (!word) {
    return null
  }

  return (
    <div style={{ textAlign: 'left', maxWidth: '800px' }}>
      <h2>{word}</h2>
      {error !== null ? (
        <div>{error}</div>
      ) : (
        <WordDefinition details={details} />
      )}
    </div>
  )
}

export default Word
