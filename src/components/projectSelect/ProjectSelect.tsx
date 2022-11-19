
import styled from 'styled-components'
import { ProjectCard } from './ProjectCard'
import { NewProjectCard } from './NewProjectCard'
import { useEffect } from 'react'

const Container = styled.div`
  margin: 0 auto;
  max-width: 80%;
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
