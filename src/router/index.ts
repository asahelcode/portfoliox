import { createBrowserRouter } from 'react-router-dom'
import Home from '../page/Home'
import RootLayout from '@/layout'
import ProjectDetail from '@/page/ProjectDetail'


const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        path: '',
        Component: Home
      },
      {
        path: 'project/:id',
        Component: ProjectDetail
      }
    ]
  }
])

export default router