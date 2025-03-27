import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import { ThemeGlobal } from '../styles/globalStyles'
import { darkTheme, LightTheme } from '../styles/theme'
import AboutMe from './sections/AboutMe'
import Home from './sections/Home'
import Project from './sections/Projects'
import Skills from './sections/Skills'

function PortfolioLayout() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'dark'
  })

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const themeToggler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : darkTheme}>
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
