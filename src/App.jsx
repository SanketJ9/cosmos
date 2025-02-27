import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './App.css'
import AppLayout from './components/layout/AppLayout'
import Home from './pages/Home'
import Neos from './pages/Neos'



function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout/>,
      children: [
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/neos",
          element: <Neos/>
        },
      ]
    }
    
  ])

  return <RouterProvider router={router} />
}

export default App
