
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

import { Navbar } from './navbar/Navbar'

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

interface Props{
  user: string | null
  currentProject: project | null
}

export const Main = ({user, currentProject}: Props) => {

  return (
    <Container>
      <Navbar user={user} currentProject={currentProject}/>
      <Outlet/>
    </Container>
  )
}
