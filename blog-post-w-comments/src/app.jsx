import React from 'react'

export default function App() {
  return (
    <>
      <h1>Blog Post with Comments</h1>
      <p>2022 January</p>
      <div>
        Blog post content
      </div>
      <div>
        <p>Comments</p>
        <div>
          <ul>
            <li>
              Name: John Smith <br />
              Content: This is a comment <br />
              Date: 2022 Jan
            </li>
            <li>
              Name: Jane Doe <br />
              Content: This is another comment <br />
              Date: 2022 Jan
            </li>
          </ul>
          <div>
            <div>
              <label for="name-field">Name</label>
              <input id="name-field" type="text" />
            </div>
            <div>
              <label for="content-field">Comment</label>
              <textarea id="content-field" />
            </div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}
