
import { Link } from 'react-router-dom'

interface Props{
  project: project
}

export const ProjectCard = ({project}: Props) => {
  return (
    <Link to={`project/${project.projectId}`}>
      <div className='project-card'>
        <p className='project-card-name'>{project.projectName}</p>
      </div>
    </Link>
  )
}
