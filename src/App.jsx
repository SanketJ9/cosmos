import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './App.css'
import AppLayout from './components/layout/AppLayout'
import Home from './pages/Home'
import Neos from './pages/Neos'
import Mars from './pages/Mars'



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
        {
          path:"/mars",
          element: <Mars/>
        },
      ]
    }
    
  ])

  return <RouterProvider router={router} />
}

export default App
