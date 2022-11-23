import styled from 'styled-components'
import { useAuth0 } from "@auth0/auth0-react"

const Button = styled.button`
margin-right: 1rem;
  height: 2rem;
  width: 5rem;
  background-color: ${props => props.theme.acc};
  color: ${props => props.theme.base};
  border: none;
  border-radius: 9999rem;
`

export const SignupButton = () => {

  const { loginWithRedirect } = useAuth0()

  const handleSignup = async () => {
    await loginWithRedirect({
      screen_hint: 'signup',
      appState: {
        returnTo: "/",
      },
    })
  }

  return (
    <Button onClick={handleSignup}>
      Sign Up
    </Button>
  )
}