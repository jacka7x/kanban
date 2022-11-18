
interface project{
  projectId: string
  projectName: string
  boards: board[]
}

interface board{
  boardName: string
  position: number
  color: string
  posts: post[]
}

interface post{
  postId: string
  title: string
  body: string
}