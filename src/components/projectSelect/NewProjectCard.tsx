
import styled from 'styled-components'
import { Container } from './ProjectCard'

const NewContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Text = styled.p`
  color: white;
  font-weight: 700;
  font-size: 3rem;
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