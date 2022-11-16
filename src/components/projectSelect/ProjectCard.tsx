
interface Props{
  projectName: string
}

export const ProjectCard = ({projectName}:Props) => {
  return (
    <div className='project-card'>
      <p className='project-card-name'>{projectName}</p>
    </div>
  )
}
