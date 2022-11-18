import React from 'react'

function Credits() {
  return (
    <ul>
      <li>
        Uses{' '}
        <a
          className="App-link"
          href="https://api.kanye.rest/"
          target="_blank"
          rel="noopener noreferrer"
        >
          api.kenye.rest
        </a>{' '}
        to get the initial quote.
      </li>
      <li>
        Uses{' '}
        <a
          className="App-link"
          href="https://api.kanye.rest/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Free Dictionary API
        </a>{' '}
        to get the meaning of the words.
      </li>
    </ul>
  )
}

export default Credits
