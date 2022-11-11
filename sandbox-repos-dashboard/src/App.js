import { useState } from 'react'
import './App.css'
import Repo from './repo'
import { sandboxes } from './data.js'

function App() {
  const [searchKeyWord, setSearchKeyWord] = useState('')

  const searchInputOnChange = (event) => {
    setSearchKeyWord(event.target.value)
  }

  return (
    <main>
      <header>
        <h1>Sandbox Repos</h1>
      </header>

      <section>
        <label htmlFor="search-by-name">Search by name</label>
        <input id="search-by-name" type="text" onChange={searchInputOnChange} />
      </section>

      <hr />

      {sandboxes
        .filter((sandbox) => {
          if (searchKeyWord === '') {
            return true
          }

          return sandbox.name
            .toLowerCase()
            .startsWith(searchKeyWord.toLowerCase())
        })
        .map((sandbox) => (
          <Repo
            key={sandbox.name}
            name={sandbox.name}
            description={sandbox.description}
            repoLink={sandbox.repoLink}
          />
        ))}
    </main>
  )
}

export default App
