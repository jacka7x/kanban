import { Link, Outlet } from 'react-router-dom'
import { ProjectButton } from './ProjectButton'

interface Props{
  user: string | null
  currentProject: project | null
}

export const Navbar = ({user, currentProject}: Props) => {

  return (
    <>
      <div className='navbar'>
        <Link to='/'>
          <ProjectButton user={user} currentProjectName={currentProject?.projectName} />
        </Link>
      </div>
      <Outlet/>
    </>
  )
}
