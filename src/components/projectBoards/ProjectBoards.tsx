
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Board } from './Board'

const Container = styled.div`
  overflow-y: auto;
  flex: 1;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  
  @media ${props => props.theme.mobileL}{
    padding: ${props => props.theme.spacing}
  }

  @media ${props => props.theme.tablet}{
    flex-direction: row;
  }
`

interface Props{
  currentProject: project | null
  loadProject: (projectId: string) => void
}

export const ProjectBoard = ({currentProject, loadProject}:Props) => {
  const [sortedBoards, setSortedBoards] = useState<board[] | null>(null)
  const projectId = useParams().projectId

  console.log('fuckbucket')

  if(projectId) loadProject(projectId)

  // sorts boards in acsending order
  useEffect(() => {
    if(currentProject){
      const baseArray: board[] = []
      const sortedArray = baseArray
        .concat(currentProject?.boards)
        .sort((a, b) => a.position - b.position)
      setSortedBoards(sortedArray)
    }
  },[currentProject])


  return (
    <Container>
      {
      sortedBoards && sortedBoards.length > 0
       ? sortedBoards.map((board) =>
          <Board
            key={board.position}
            board={board}
          ></Board>)
        : 'NO BOARDS'
      }
    </Container>
  )
}
