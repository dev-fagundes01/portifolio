import { Route, Routes, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

import DefaultLayout from '../layout/DefaultLayout'
import AboutMe from '../pages/AboutMe'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills/Skills'

function Router() {
  const Location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={Location} key={Location.pathname}>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutMe />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/habilidades" element={<Skills />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default Router
