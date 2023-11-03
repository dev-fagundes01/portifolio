import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

import DefaultLayout from '../layout/DefaultLayout'
import AboutMe from '../pages/AboutMe'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills/Skills'

function Router() {
  const [theme, setTheme] = useState('dark')
  const Location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={Location} key={Location.pathname}>
        <Route element={<DefaultLayout theme={theme} setTheme={setTheme} />}>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/sobre" element={<AboutMe />} theme={theme} />
          <Route path="/projetos" element={<Projects theme={theme} />} />
          <Route path="/habilidades" element={<Skills theme={theme} />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default Router
