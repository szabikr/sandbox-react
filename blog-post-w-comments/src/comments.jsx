import React from 'react'

export default function Comments({ comments }) {
  return (
    <div>
      <p>Comments</p>
      <div>
        <ul>
          {comments.map(comment => (
            <li>
              Name: {comment.name} <br />
              Content: {comment.content} <br />
              Date: {comment.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
