import { createBrowserRouter } from 'react-router-dom'

import PortfolioLayout from './pages/Portfolio'
import RegisterInfo from './pages/RegisterInfo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PortfolioLayout />
  },
  {
    path: '/register-portfolio',
    element: <RegisterInfo />
  }
])

export default router
