import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Router from './routes/routes.jsx'
import GlobalStyles from './styles/globalStyles.js'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
)
