import React, { useEffect, useState } from 'react'

import Header from './header'
import Content from './content'
import Comments from './comments'
import CommentForm from './comment-form'

import { fetchBlogPostData } from './services'

export default function App() {
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  
  useEffect(() => {
    async function doEffect() {
      const response = await fetchBlogPostData()
      setPost({
        title: response.title,
        content: response.content,
        date: response.date,
      });
      setComments(response.comments)
    }
    doEffect()
  }, [])

  // manage state

  return (
    <>
      <Header title={post.title} date={post.date} />
      <Content content={post.content} />
      <Comments comments={comments} />
      <CommentForm />
    </>
  )
}
