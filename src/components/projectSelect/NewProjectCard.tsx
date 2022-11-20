
import styled from 'styled-components'
import { Container } from './ProjectCard'

const NewContainer = styled(Container)`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.p`
  color: ${props => props.theme.mc1};
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  
  -webkit-user-select: none;      
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

interface Props{

}

export const NewProjectCard = ({}:Props) => {
  return (
    <NewContainer>
      <Text>Start a new project!</Text>
    </NewContainer>
  )
}