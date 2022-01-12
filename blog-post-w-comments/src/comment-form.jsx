import React from 'react'

export default function CommentForm() {
  return (
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
  )
}
