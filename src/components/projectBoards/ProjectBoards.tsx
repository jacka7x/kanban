
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Board } from './Board'

interface Props{
  currentProject: project | null
  loadProject: (projectId: string) => void
}

export const ProjectBoard = ({currentProject, loadProject}:Props) => {
  const [sortedBoards, setSortedBoards] = useState<board[] | null>(null)
  const projectId = useParams().projectId

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
    <div className='project-boards'>
      {
      sortedBoards && sortedBoards.length > 0
       ? sortedBoards.map((board) =>
          <Board
            key={board.position}
            board={board}
          ></Board>)
        : 'NO BOARDS'
      }
    </div>
  )
}
