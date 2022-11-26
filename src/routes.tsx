import { createBrowserRouter } from 'react-router-dom'
import { Character } from './pages/Character'
import { Home } from './pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/character/:characterName',
    element: <Character />
  }
])
