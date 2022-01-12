import React, { useState } from 'react'

function validateCommentForm(name, content) {
  let isCommentFormValid = true
  if (name.length === 0 || name.length > 50) {
    console.log('Error: incorrect name')
    isCommentFormValid = false
  }
  
  if (content.length === 0 || content.length > 1000) {
    console.log('Error: incorrect content')
    isCommentFormValid = false
  }

  return isCommentFormValid
}

export default function CommentForm({ onSubmit }) {
  const [name, setName] = useState('Anon')
  const [content, setContent] = useState('')

  function handleFormSubmit(e) {
    e.preventDefault()

    const isCommentFormValid = validateCommentForm(name, content)
    if (!isCommentFormValid) {
      return
    }

    onSubmit(name, content)
    setContent('')
  }

  return (
    <form>
      <div>
        <label htmlFor="name-field">Name</label>
        <input
          id="name-field" type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content-field">Comment</label>
        <textarea
          id="content-field"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleFormSubmit}>Submit</button>
    </form>
  )
}
