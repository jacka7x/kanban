
import styled from 'styled-components'
import { shadow } from '../../styles/themes'
import { Post } from './Post'

const BoardContainer = styled.div`
  margin-right: 2rem;
  width: 24rem;
  height: 100%;
  background-color: ${props => props.theme.base};
  ${shadow};
`

const Header = styled.div<{HeaderColor: string}>`
height: 3rem;
background-color: #${props => props.HeaderColor};
display: flex;
align-items: center;
`

const Title = styled.p`
margin-left: 1rem;
font-weight: 700;
font-size: 1.2rem;
color: ${props => props.theme.base};
`

const PostsContainer = styled.div`

`

interface Props{
  board: board
}

export const Board = ({board}: Props) => {
  return (
    <BoardContainer>
      <Header HeaderColor={board.color}>
        <Title>{board.boardName.toUpperCase()}</Title>
      </Header>
      <PostsContainer>
        {
          board.posts.map((post) =>
          <Post
            key={post.postId}  
            post={post}
          ></Post>)
        }
      </PostsContainer>
    </BoardContainer>
  )
}
