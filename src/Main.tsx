
import { Outlet } from 'react-router-dom'

import { Navbar } from './components/navbar/Navbar'

interface Props{
  user: string | null
  currentProject: project | null
}

export const Main = ({user, currentProject}: Props) => {

  return (
    <>
      <Navbar user={user} currentProject={currentProject}/>
      <Outlet/>
    </>
  )
}
