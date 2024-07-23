import { ThemeProvider } from 'styled-components'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Project from '../pages/Projects'
import Skills from '../pages/Skills/Skills'
import { ThemeGlobal } from '../styles/globalStyles'
import { darkTheme, LightTheme } from '../styles/theme'

function DefaultLayout({ theme, setTheme }) {
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  console.log(themeToggler)

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : darkTheme}>
      <ThemeGlobal>
        <Header theme={theme} themeToggler={themeToggler} />
        <Home/>
        <AboutMe/>
        <Project/>
        <Skills/>
        <Footer />
      </ThemeGlobal>
    </ThemeProvider>
  )
}
export default DefaultLayout