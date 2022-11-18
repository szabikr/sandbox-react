import React from 'react'

function WordDefinition({ details }) {
  return (
    <div>
      <p>
        Phonetics:{' '}
        <a className="App-link" href={details.phonetics?.audio}>
          {details.phonetics?.text}
        </a>
      </p>
      <h3>Meanings</h3>
      {details.meanings?.map((meaning) => (
        <div key={meaning.partOfSpeech}>
          <h4>{meaning.partOfSpeech}</h4>
          <ol>
            {meaning.definitions.map((definition) => (
              <li key={definition.definition}>{definition.definition}</li>
            ))}
          </ol>
        </div>
      ))}
      <p>
        <a className="App-link" href={details.sourceUrl}>
          Source
        </a>
      </p>
    </div>
  )
}

export default WordDefinition
