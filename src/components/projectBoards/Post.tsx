
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 0.4rem;
  width: 100%;
  background-color: ${props => props.theme.mc2};
  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  margin: 0.6rem;
  font-weight: 500;
  font-size: 1rem;
  color: ${props => props.theme.base};
`

const Body = styled.p`
  margin: 0.6rem;
  font-weight: 300;
  font-size: 0.8rem;
  color: ${props => props.theme.grey};
`

interface Props{
  post: post
}

export const Post = ({post}: Props) => {
  return (
    <Container>
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>
    </Container>
  )
}
