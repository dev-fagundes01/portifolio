import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/globalStyles.js'

import './index.css'
import DefaultLayout from './layout/DefaultLayout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DefaultLayout/>
    <GlobalStyles />
  </React.StrictMode>
)
