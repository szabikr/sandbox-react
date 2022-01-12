import React, { useEffect } from 'react'

import Header from './header'
import Content from './content'
import Comments from './comments'
import CommentForm from './comment-form'

import { fetchBlogPostData } from './services'

export default function App() {
  // setup state
  
  useEffect(() => {
    async function doEffect() {
      const response = await fetchBlogPostData()
        console.log('Response is', response)
      }
    doEffect()
  }, [])

  // manage state

  return (
    <>
      <Header />
      <Content />
      <Comments />
      <CommentForm />
    </>
  )
}
