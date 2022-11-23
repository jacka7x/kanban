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

export const LoginButton = () => {

  const { loginWithRedirect } = useAuth0()

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  return (
    <Button onClick={handleLogin}>
      Log In
    </Button>
  )
}