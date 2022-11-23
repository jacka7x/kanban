import { ThemeProvider } from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect } from 'react'
import { Route, RouterProvider, createBrowserRouter, BrowserRouter, Routes} from 'react-router-dom'

import { theme } from './styles/theme'
import { Main } from './Main'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import { ErrorPage } from './components/ErrorPage'
import { ProjectBoard } from './components/projectBoards/ProjectBoards'
import { ProjectSelect } from './components/projectSelect/ProjectSelect'
import { loadData } from './scripts/loadData'

function App() {
  const [user, setUser] = useState<string | null>(null)
  const [projectList, setProjectList] = useState<project[]>([])
  const [currentProject, setCurrentProject] = useState<project | null>(null) 
  
  useEffect(() => {
    const call = async () => {
      const databaseData = await loadData()
      setUser(databaseData.username)
      setProjectList(databaseData.projects)
    }    
    call()
  }, [])

  const loadProject = (projectId: string) => {
    const index = projectList.findIndex((project) => project.projectId === projectId)
    
    console.log('called loadProject')

    if(index < 0){
      setCurrentProject(null)
      console.error('PROJECT ID NOT FOUND')
      return
    }
    
    setCurrentProject(projectList[index])
  }

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <p>LOADING</p>;
  }

  const router = createBrowserRouter([
    {
        path: "/", 
        element: <Main user={user} currentProject={currentProject} />,
        errorElement: <ErrorPage />,
        children:[
          {
            path: '/',
            element: <ProjectSelect projectList={projectList} setCurrentProject={setCurrentProject}/>,
          },
          {
            path: '/callback',
            element: <p>CALLBACK</p>
          },
          {
            path: '/project/:projectId',
            element: <ProtectedRoute component={ProjectBoard} currentProject={currentProject} loadProject={loadProject}/>,
          }
        ]
    }
  ])

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
