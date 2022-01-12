const blogPostData = {
  title: 'Blog Post with Comments',
  date: '2022 January',
  content: 'Blog post content bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem libero, ultricies nec facilisis id, egestas non ex. In hac habitasse platea dictumst. Integer sit amet euismod arcu. Vestibulum mollis turpis sed ante vestibulum efficitur. Sed auctor tincidunt porta. Donec ac rutrum enim. Pellentesque pretium porttitor imperdiet. Quisque nisi dolor, consequat in ullamcorper sit amet, porta vitae massa. Donec eu laoreet diam. Nam facilisis iaculis dictum. Suspendisse convallis neque quis tincidunt volutpat. Etiam facilisis vitae mi in vulputate. Phasellus auctor lacinia orci, vitae efficitur lacus volutpat vel.',
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
