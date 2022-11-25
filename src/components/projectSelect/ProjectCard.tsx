
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CardBoard } from './CardBoard'

export const Container = styled.div`
  margin-bottom: ${props => props.theme.spacing};
  min-height: 14rem;
  background: linear-gradient(315deg, ${props => props.theme.mc2} 30%, ${props => props.theme.base} 100%);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  
  @media (hover: hover) and (pointer: fine){
    &:hover {
      outline: 3px solid ${props => props.theme.mc1};
    }
  }
`

const Header = styled.div`
  height: 2rem;
  border-radius: 0.4rem 0.4rem 0 0;
  background-color: ${props => props.theme.mc1};
  display: flex;
  align-items: center;
`

const Title = styled.p`
  margin-left: 1rem;
  color: ${props => props.theme.base};
  font-weight: 600;
  `

interface Props{
  project: project
}

export const ProjectCard = ({project}: Props) => {
  const totalPosts = project.boards
    .reduce((total, _, i, array) => total + array[i].posts.length, 0)

  return (
    <Link to={`/project/${project.projectId}`}>
      <Container>
        <Header>
          <Title>{project.projectName}</Title>
        </Header>
        {
          project.boards
            .slice(0)
            .sort((a, b) => a.position - b.position)
            .map((board) => <CardBoard key={board.position} board={board} totalPosts={totalPosts} />)
        }
      </Container>
    </Link>
  )
}
