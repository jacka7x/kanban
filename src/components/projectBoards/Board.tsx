
import styled from 'styled-components'
import { shadow } from '../../styles/theme'
import { Post } from './Post'

const BoardContainer = styled.div`
  margin-bottom: 1rem;
  background-color: ${props => props.theme.base};
  display: flex;
  flex-direction: column;
  ${shadow};
  &:last-child{
    margin-bottom: 0;
  }

  @media ${props => props.theme.tablet}{
    margin-bottom: 0;
    margin-right: ${props => props.theme.spacing};
    max-width: 22rem;
    &:last-child{
      margin-right: 0;
    }
  }
`

const Header = styled.div<{HeaderColor: string}>`
  height: 3rem;
  min-height: 3rem;
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
  overflow-y: auto;
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
