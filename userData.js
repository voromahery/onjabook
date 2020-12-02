const newPost = state.post.map(post => {
  if (post.postId === applicationCache.postId) {
    return{
      ...post,
      comments: [...post.comments, action.comments, action.comments ]
    }
  }
  return post;
})



dispatchEvent({type: "", postId: postId, comment: newComment})