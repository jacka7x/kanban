
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  padding: 0.2rem 1rem 0.4rem 0.2rem;
  height: 2rem;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (hover: hover) and (pointer: fine){
    &:hover {
      border-right: 2px solid ${props => props.theme.base};
    }
  }
`

const UserName = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.grey};
`

const ProjectName = styled.div`
  font-weight: 700;
  font-size: 1.3rem;
  color: ${props => props.theme.base};
`

interface Props{
  user: string | null
  currentProjectName: string | undefined
}

export const ProjectButton = ({
  user,
  currentProjectName = 'Select Project'}: Props
) => {
  return (
    <Link to='/'>
      <Container>
          <UserName>{user}</UserName>      
          <ProjectName>{currentProjectName}</ProjectName>
      </Container>
    </Link>
  )
}
