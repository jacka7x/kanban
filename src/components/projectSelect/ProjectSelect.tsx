import { ProjectCard } from './ProjectCard'
import { NewProjectCard } from './NewProjectCard'
import { useEffect } from 'react'

interface Props{
  projectList: project[]
  setCurrentProject: (project: project | null) => void
}

export const ProjectSelect = ({projectList, setCurrentProject}: Props) => {

  useEffect(() => {
    setCurrentProject(null)
  }, [])

  return (
    <div className='project-select'>
      {
        projectList.map((project) =>
        <ProjectCard
          key={project.projectId}
          project={project}
        />)
      }
      <NewProjectCard />
    </div>
  )
}
