import styled from 'styled-components'
import { useAuth0 } from "@auth0/auth0-react"

const Button = styled.button`
  height: 2rem;
  width: 5rem;
  background-color: ${props => props.theme.mc2};
  color: ${props => props.theme.base};
  border: none;
  border-radius: 9999rem;
`

export const LogoutButton = () => {

  const { logout } = useAuth0()

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    })
  }

  return (
    <Button onClick={handleLogout}>
      Log Out
    </Button>
  )
}