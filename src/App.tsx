import { ThemeProvider } from 'styled-components'
import { palette, lightTheme } from './styles/themes'

import { useState, useEffect } from 'react'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

import { loadData } from './scripts/loadData'

import { Navbar } from './components/navbar/Navbar'
import { ErrorPage } from './components/ErrorPage'
import { ProjectBoard } from './components/projectBoards/ProjectBoards'
import { ProjectSelect } from './components/projectSelect/ProjectSelect'

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
    
    if(index < 0){
      setCurrentProject(null)
      console.error('PROJECT ID NOT FOUND')
      return
    }
    
    setCurrentProject(projectList[index])
  }

  const router = createBrowserRouter([
    {
        path: "/", 
        element: <Navbar user={user} currentProject={currentProject} />,
        errorElement: <ErrorPage />,
        children:[
          {
            path: '/',
            element: <ProjectSelect projectList={projectList} setCurrentProject={setCurrentProject}/>,
          },
          {
            path: '/project/:projectId',
            element: <ProjectBoard currentProject={currentProject} loadProject={loadProject}/>,
          }
        ]
    }
  ])

  const theme = {
    ...palette,
    ...lightTheme
  }

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  )
}

export default App
