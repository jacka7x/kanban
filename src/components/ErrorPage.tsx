
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  background-color: ${props => props.theme.base};

  display: flex;
  justify-content: center;
  align-items: center;
`
const Text = styled.p`
  color: ${props => props.theme.red};
  font-size: 10rem;
  text-align: center;
`

export const ErrorPage = () => {
  return (
    <Container>
      <Text id='error-text'>404{<br/>}Not Found</Text>
    </Container>
  )
}
