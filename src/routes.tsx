import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import { Character } from './pages/Character'
import { Characters } from './pages/Characters'

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
    path: '/characters',
    element: <Characters />
  },
  {
    path: '/character/:characterName',
    element: <Character />
  }
])
