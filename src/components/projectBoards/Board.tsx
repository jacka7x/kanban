
import { Post } from './Post'

interface Props{
  board: board
}

export const Board = ({board}:Props) => {

  return (
    <div className='project-board'>
      <div className='project-board-title' style={{backgroundColor: `#${board.color}`}}>
        <p>{board.boardName.toUpperCase()}</p>
      </div>
      <div className='project-board-posts'>
        {
          board.posts.map((post) =>
          <Post
            key={post.postId}  
            post={post}
          ></Post>)
        }
      </div>
    </div>
  )
}
