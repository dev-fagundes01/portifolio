import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.css'
import GlobalStyles from './styles/globalStyles.js'
import routes from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
    <GlobalStyles />
  </StrictMode>
)
