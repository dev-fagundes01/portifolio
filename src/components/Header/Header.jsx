import { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import MenuMobile from '../MenuMobile/MenuMobile'
import { Nav } from './style'

function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <header className="z-10 h-32 flex w-full 3xl:items-center 3xl:justify-between 3xl:p-20">
      <Nav
        isVisible={menuIsVisible}
        className="3xl:flex 3xl:items-center 3xl:justify-center mr-20"
      >
        <HiMenuAlt4 id="menu" onClick={() => setMenuIsVisible(true)} />
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <ul className="hidden cursor-pointer gap-14 3xl:flex">
          <li className="leading-normal h-6">
            <Link
              className="no-underline text-rose-400 hover:duration-1000 hover:text-rose-900 3xl:text-7xl"
              to="/"
            >
              Inicio
            </Link>
          </li>
          <li className="leading-normal h-6">
            <Link
              className="no-underline text-rose-400 hover:duration-1000 hover:text-rose-900 3xl:text-7xl"
              to="/sobre"
            >
              Sobre Mim
            </Link>
          </li>
          <li className="leading-normal h-6">
            <Link
              className="no-underline text-rose-400 hover:duration-1000 hover:text-rose-900 3xl:text-7xl"
              to="/projetos"
            >
              Projetos
            </Link>
          </li>
          <li className="leading-normal h-6">
            <Link
              className="no-underline text-rose-400 hover:duration-1000 hover:text-rose-900 3xl:text-7xl"
              to="/habilidades"
            >
              Habilidades
            </Link>
          </li>
        </ul>
      </Nav>
      <h1 className="absolute right-4 text-xl 3xl:static 3xl:mt-22 3xl:text-9xl">
        <span className="text-rose-900">Porti</span>fólio
      </h1>
    </header>
  )
}
export default Header
