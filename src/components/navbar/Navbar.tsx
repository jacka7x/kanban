import { ProjectButton } from './ProjectButton'

interface Props{
  user: string | null
  currentProject: project | null
}

export const Navbar = ({user, currentProject}: Props) => {

  return (
    <div className='navbar'>
      <ProjectButton user={user} currentProjectName={currentProject?.projectName} />
    </div>
  )
}
