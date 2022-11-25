import { ThemeProvider } from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import { useState, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { theme } from './styles/theme'
import { loadData } from './scripts/loadData'
import { Main } from './components/Main'
import { LandingPage } from './components/LandingPage'
import { ProtectedElement } from './components/auth/ProtectedElement'
import { ErrorPage } from './components/ErrorPage'
import { ProjectBoard } from './components/projectBoards/ProjectBoards'
import { ProjectSelect } from './components/projectSelect/ProjectSelect'

function App() {
  const [userName, setUser] = useState<string | null>(null)
  const [projectList, setProjectList] = useState<project[]>([])
  const [currentProject, setCurrentProject] = useState<project | null>(null)

  const {
    user,
    isAuthenticated,
    isLoading
  } = useAuth0()
  
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

  if (isLoading) {
    return <p>LOADING</p>;
  }

  // drew's way of dealing with it
  // https://stackoverflow.com/questions/66289122/how-to-create-a-protected-route/66289280#66289280

  // other 
  // https://community.auth0.com/t/implementing-auth0-protected-routes-using-react-router-v6/75667/16
  // https://github.com/auth0/auth0-react/blob/master/EXAMPLES.md#protecting-a-route-in-a-react-router-dom-v6-app

  // put this in a seperate file?
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Main
        user={userName}
        currentProject={currentProject}
      />,
      errorElement: <ErrorPage />,
      children:[
        {
          path: '/callback',
          element: <p>CALLBACK</p>
        },
        {
          path: '/',
          element: isAuthenticated
            ? <ProtectedElement 
                component={ProjectSelect}
                projectList={projectList}
                setCurrentProject={setCurrentProject}
              />
            : <LandingPage/>
        },
        {
          path: 'project/:projectId',
          element: <ProtectedElement
            component={ProjectBoard}
            currentProject={currentProject}
            loadProject={loadProject}
          />,
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
