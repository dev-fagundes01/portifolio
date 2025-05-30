import { ThemeProvider } from 'styled-components'

import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import { ThemeGlobal } from '../styles/globalStyles'
import { DarkTheme, LightTheme } from '../styles/theme'
import AboutMe from './sections/AboutMe'
import Home from './sections/Home'
import Project from './sections/Projects'
import Skills from './sections/Skills'

import { useTheme } from '@/context/ThemeContext'

function PortfolioLayout() {
  const { theme, themeToggler } = useTheme()

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <ThemeGlobal>
        <Header theme={theme} themeToggler={themeToggler} />
        <Home />
        <AboutMe />
        <Project />
        <Skills />
        <Footer />
      </ThemeGlobal>
    </ThemeProvider>
  )
}
export default PortfolioLayout
