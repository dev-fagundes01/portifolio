import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.css'
import ThemeProviderComponent from './context/ThemeContext'
import routes from './routes'
import GlobalStyles from './styles/globalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProviderComponent>
      <RouterProvider router={routes} />
    </ThemeProviderComponent>
    <GlobalStyles />
  </StrictMode>
)
