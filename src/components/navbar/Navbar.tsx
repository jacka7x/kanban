import styled from 'styled-components'
import { Link, Outlet } from 'react-router-dom'
import { ProjectButton } from './ProjectButton'

const NavContainer = styled.div`
  height: 4rem;
  min-height: 4rem;
  padding: 0 0 0 0.5rem;
  background-color: ${props => props.theme.mc1};
  border-bottom: 2px solid ${props => props.theme.mc2};

  display: flex;
  align-items: center;
`

interface Props{
  user: string | null
  currentProject: project | null
}

export const Navbar = ({user, currentProject}: Props) => {

  return (
    <>
      <NavContainer>
        <Link to='/'>
          <ProjectButton user={user} currentProjectName={currentProject?.projectName} />
        </Link>
      </NavContainer>
      <Outlet/>
    </>
  )
}
