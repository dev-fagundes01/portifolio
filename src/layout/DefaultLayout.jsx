import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { ThemeGlobal } from '../styles/globalStyles'
import { darkTheme, LightTheme } from '../styles/theme'

function DefaultLayout() {
  const [theme, setTheme] = useState('dark')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  console.log(themeToggler)

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : darkTheme}>
      <ThemeGlobal>
        <Header theme={theme} themeToggler={themeToggler} />
        <Outlet />
        <Footer />
      </ThemeGlobal>
    </ThemeProvider>
  )
}
export default DefaultLayout
