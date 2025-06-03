import { createBrowserRouter } from 'react-router-dom'

import { DataProvider } from './context/DataContext'
import PortfolioLayout from './pages/Portfolio'
import RegisterInfo from './pages/RegisterInfo'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <DataProvider>
        <PortfolioLayout />
      </DataProvider>
    )
  },
  {
    path: '/register-portfolio',
    element: <RegisterInfo />
  }
])

export default router
