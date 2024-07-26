import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe'
import Project from '../pages/Projects'
import Skills from '../pages/Skills/Skills'
import { ThemeGlobal } from '../styles/globalStyles'
import { darkTheme, LightTheme } from '../styles/theme'

function DefaultLayout() {
  const [theme, setTheme] = useState(() => {
    const savedTheme =localStorage.getItem('theme')
    return savedTheme || 'dark'
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const themeToggler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

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
  );
}
export default DefaultLayout