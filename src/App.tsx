
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage'
import { Navbar } from './components/navbar/Navbar'
import { ProjectBoard } from './components/projectBoard/ProjectBoard'
import { ProjectSelect } from './components/projectSelect/ProjectSelect'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProjectSelect />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/project',
    element: <ProjectBoard />
  }
])

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
