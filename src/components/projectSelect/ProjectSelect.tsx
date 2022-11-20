
import styled from 'styled-components'
import { ProjectCard } from './ProjectCard'
import { NewProjectCard } from './NewProjectCard'
import { useEffect } from 'react'

const Container = styled.div`
  overflow-y: auto;
  padding: ${props => props.theme.spacing};
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.tablet}{
    display: grid;
    grid-template-columns: 
      repeat(auto-fit, minmax(
        clamp(15rem, calc(15rem + 10vw), 24rem), 1fr));
    column-gap: ${props => props.theme.spacing};
  }
/* 
  @media ${props => props.theme.laptopL}{
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  } */
`

interface Props{
  projectList: project[]
  setCurrentProject: (project: project | null) => void
}

export const ProjectSelect = ({
  projectList,
  setCurrentProject
}: Props) => {

  useEffect(() => {
    setCurrentProject(null)
  }, [])

  return (
    <Container>
      {
        projectList.map((project) =>
        <ProjectCard
          key={project.projectId}
          project={project}
        />)
      }
      <NewProjectCard />
    </Container>
  )
}
