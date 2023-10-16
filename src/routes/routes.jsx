import { Route, Routes } from 'react-router-dom'

import DefaultLayout from '../layout/DefaultLayout'
import AboutMe from '../pages/AboutMe'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills/Skills'

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutMe />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/habilidades" element={<Skills />} />
      </Route>
    </Routes>
  )
}

export default Router
