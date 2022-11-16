import { ProjectCard } from './ProjectCard'
import { NewProjectCard } from './NewProjectCard'

interface Props{
  projectList: project[]
}

export const ProjectSelect = ({projectList}: Props) => {
  return (
    <div className='project-select'>
      {projectList.map((item,i) => <ProjectCard key={i} projectName={projectList[i].projectName}></ProjectCard>)}
      <NewProjectCard />
    </div>
  )
}
