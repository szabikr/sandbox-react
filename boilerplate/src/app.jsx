import React from 'react'
import styles from './styles/app.module.css'

export default function App() {
  return (
    <div className={styles.container}>
      <h1>React Boilerplate</h1>
      <div className={styles.subtitle}>
        a{' '}
        <strong>
          <a href="https://szabi.space/">szabi.space</a>
        </strong>{' '}
        development
      </div>
    </div>
  )
}
