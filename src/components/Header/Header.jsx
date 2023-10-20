// import { useState } from 'react'
// import { HiMenuAlt4 } from 'react-icons/hi'
import { Link } from 'react-router-dom'

// import MenuMobile from '../MenuMobile/MenuMobile'
import { Nav } from './style'

function Header() {
  // const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <header className="h-32 flex w-full justify-between">
      <Nav
        // isVisible={menuIsVisible}
        className="flex justify-center"
      >
        {/* <HiMenuAlt4 id="menu" onClick={() => setMenuIsVisible(true)} />
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        /> */}

        <ul className="cursor-pointer gap-4 flex">
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
      <h1 className="text-2xl mt-2.5">
        <span className="text-rose-900">Porti</span>fólio
      </h1>
    </header>
  )
}
export default Header
