import { useState, useEffect } from 'react'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

import { loadData } from './scripts/loadData'

import { Navbar } from './components/navbar/Navbar'
import { ErrorPage } from './components/ErrorPage'
import { ProjectBoard } from './components/projectBoard/ProjectBoard'
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

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProjectSelect projectList={projectList} />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/project',
      element: <ProjectBoard />
    }
  ])

  return (
    <div className="App">
      <Navbar user={user} currentProject={currentProject} />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
