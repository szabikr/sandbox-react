import React from 'react'

export default function Header({ title, date }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{date}</p>
    </header>
  )
}
