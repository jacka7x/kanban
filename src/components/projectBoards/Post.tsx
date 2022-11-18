
interface Props{
  post: post
}

export const Post = ({post}:Props) => {
  return (
    <div className='board-post'>
      <p className='board-post-title'>{post.title}</p>
      <p className='board-post-body'>{post.body}</p>
    </div>
  )
}
