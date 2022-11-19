
import styled from 'styled-components'

const Container = styled.div`
  margin: 0.4rem 0 0 0;
  color: ${props => props.theme.mc1};
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`

const Title = styled.p<{boardColor: string}>`
  width: 30%;
  padding: 0.4rem 0 0.4rem 1rem;
  background-color: #${props => props.boardColor};
`

const Count = styled.div`
  width: 2rem;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`

const RatioLeft = styled.div<{ratio: number, boardColor: string}>`
  flex: ${props => props.ratio};
  background-color: #${props => props.boardColor};
`

const RatioRight = styled.div<{ratio: number}>`
  flex: ${props => props.ratio};
`
  
interface Props{
  board: board
  totalPosts: number
}

export const CardBoard = ({board, totalPosts}: Props) => {
  return (
    <Container>
      <Title boardColor={board.color}>{board.boardName.toUpperCase()}</Title>
      <RatioLeft
        ratio={Math.pow(board.posts.length, 2)}
        boardColor={board.color}
      />
      <Count><p>{board.posts.length}</p></Count>
      <RatioRight ratio={totalPosts}/>
    </Container>
  )
}

