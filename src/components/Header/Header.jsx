import { useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { HiMenuAlt4 } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import MenuMobile from '../MenuMobile/MenuMobile'
import { Nav } from './style'

function Header({ theme, themeToggler }) {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <header className="h-32 flex w-full justify-between p-2 md:p-3">
      <Nav isVisible={menuIsVisible}>
        <div className="flex flex-col md:hidden">
          <HiMenuAlt4 className="menu" onClick={() => setMenuIsVisible(true)} />
          <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />
        </div>

        <ul className="hidden md:flex cursor-pointer gap-4">
          <li className="leading-normal h-3">
            <Link
              className="no-underline text-rose-400 hover:duration-1000 hover:text-rose-900 text-2xl"
              to="/"
            >
              Inicio
            </Link>
          </li>
          <li className="leading-normal h-3">
            <Link
              className="no-underline text-rose-400 hover:duration-1000 hover:text-rose-900 text-2xl"
              to="/sobre"
            >
              Sobre Mim
            </Link>
          </li>
          <li className="leading-normal h-3">
            <Link
              className="no-underline text-rose-400 hover:duration-1000 hover:text-rose-900 text-2xl"
              to="/projetos"
            >
              Projetos
            </Link>
          </li>
          <li className="leading-normal h-3">
            <Link
              className="no-underline text-rose-400 hover:duration-1000 hover:text-rose-900 text-2xl"
              to="/habilidades"
            >
              Habilidades
            </Link>
          </li>
        </ul>
      </Nav>
      <div className="flex items-start">
        <button onClick={themeToggler}>
          {theme === 'light' ? (
            <BiMoon className="h-3 md:h-5" />
          ) : (
            <BiSun className="h-3 md:h-5" />
          )}
        </button>
        <h1 className="text-base md:text-2xl md:mt-2.5">
          <span className="text-rose-900">Porti</span>fólio
        </h1>
      </div>
    </header>
  )
}
export default Header
