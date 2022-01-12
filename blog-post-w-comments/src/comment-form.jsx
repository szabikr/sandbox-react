import React from 'react'

export default function CommentForm() {
  return (
    <form>
      <div>
        <label htmlFor="name-field">Name</label>
        <input id="name-field" type="text" />
      </div>
      <div>
        <label htmlFor="content-field">Comment</label>
        <textarea id="content-field" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
