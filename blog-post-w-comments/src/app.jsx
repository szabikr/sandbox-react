import React, { useEffect } from 'react'

import Header from './header'
import Content from './content'
import Comments from './comments'
import CommentForm from './comment-form'

const blogPostData = {
  title: 'Blog Post with Comments',
  date: '2022 January',
  content: 'Blog post content',
  comments: [
    {
      name: 'John Smith',
      content: 'This is a comment',
      date: '2022 Jan',
    },
    {
      name: 'Jane Doe',
      content: 'This is another comment',
      date: '2022 Jan',
    },
  ],
}

async function fetchBlogPostData(shouldFail = false) {
  if (!shouldFail) {
    return Promise.resolve(blogPostData)
  }
  return Promise.resolve(new Error('Fetching blog post data failed'))
}

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
