
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

import { ProjectButton } from './ProjectButton'
import { LoginButton } from './LoginButton'
import { SignupButton } from './SignupButton'
import { LogoutButton } from './LogoutButton'

const NavContainer = styled.div`
  height: 3.6rem;
  min-height: 3.6rem;
  padding: 0 0 0 0.5rem;
  background-color: ${props => props.theme.mc1};
  border-bottom: 2px solid ${prop => prop.theme.acc};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AuthContainer = styled.div`
  margin-right: 1rem;
`

interface Props{
  user: string | null,
  currentProject: project | null
}

export const Navbar = ({user, currentProject}: Props) => {

  const auth = useAuth0()

  return (
    <NavContainer>
      <Link to='/'>
        <ProjectButton user={user} currentProjectName={currentProject?.projectName} />
      </Link>
      <AuthContainer>
        {
          auth.isAuthenticated
            ? <LogoutButton />
            : (<>
              <SignupButton />
              <LoginButton />
            </>)
        }
      </AuthContainer>
    </NavContainer>
  )
}
