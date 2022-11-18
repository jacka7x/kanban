
import { Link } from 'react-router-dom'

interface Props{
  project: project
}

export const ProjectCard = ({project}: Props) => {
  const totalPosts = project.boards.reduce((total, _, i, array) => total + array[i].posts.length, 0)
  console.log(totalPosts)

  return (
    <Link to={`project/${project.projectId}`}>
      <div className='project-card'>
        <div className='project-card-title'>
          <p>{project.projectName}</p>
        </div>
        {
          project.boards
            .slice(0)
            .sort((a, b) => a.position - b.position)
            .map((board) =>
              <div className='project-card-board' >
                <p className='project-card-board-title'
                  style={{backgroundColor: `#${board.color}`}}>
                  {board.boardName.toUpperCase()}
                </p>
                <div className='length-ratio-1'
                  style={{backgroundColor: `#${board.color}`, flex: `${board.posts.length * board.posts.length}`}}       
                />
                <div className='project-card-board-count'><p>{board.posts.length}</p></div>
                <div className='length-ratio-2' style={{flex: `${totalPosts}`}} />
              </div>
            )
        }
      </div>
    </Link>
  )
}
