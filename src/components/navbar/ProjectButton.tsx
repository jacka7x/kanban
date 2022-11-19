
import styled from 'styled-components'

const Container = styled.div`
  padding: 0.2rem;
  height: 2.6rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    outline: 2px solid ${props => props.theme.base};
  }
`
const UserName = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.grey};
`
const ProjectName = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
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
    <Container>
        <UserName>{user}</UserName>      
        <ProjectName>{currentProjectName}</ProjectName>
    </Container>
  )
}
