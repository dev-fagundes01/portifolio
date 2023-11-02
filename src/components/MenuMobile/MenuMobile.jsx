import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { Container } from './style'

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  return (
    <Container isVisible={menuIsVisible}>
      <AiOutlineClose onClick={() => setMenuIsVisible(false)} />
      <ul className="cursor-pointer flex flex-col items-center 2xl:hidden">
        <li className="leading-3 h-6">
          <Link
            className="text-xs no-underline text-rose-400 hover:duration-1000 hover:text-rose-900"
            to="/"
          >
            Inicio
          </Link>
        </li>
        <li className="leading-3 h-6">
          <Link
            className="text-xs no-underline text-rose-400 hover:duration-1000 hover:text-rose-900"
            to="/sobre"
          >
            Sobre Mim
          </Link>
        </li>
        <li className="leading-3 h-6">
          <Link
            className="text-xs no-underline text-rose-400 hover:duration-1000 hover:text-rose-900"
            to="/projetos"
          >
            Projetos
          </Link>
        </li>
        <li className="leading-3 h-6">
          <Link
            className="text-xs no-underline text-rose-400 hover:duration-1000 hover:text-rose-900"
            to="/habilidades"
          >
            Habilidades
          </Link>
        </li>
      </ul>
    </Container>
  )
}

export default MenuMobile
