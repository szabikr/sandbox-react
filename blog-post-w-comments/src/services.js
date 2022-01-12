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

export async function fetchBlogPostData(shouldFail = false) {
  if (!shouldFail) {
    return Promise.resolve(blogPostData)
  }
  return Promise.resolve(new Error('Fetching blog post data failed'))
}
