import { AiOutlineClose } from 'react-icons/ai'

import { Container } from './style'

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  return (
    <Container isVisible={menuIsVisible}>
      <AiOutlineClose
        className="text-2xl"
        onClick={() => setMenuIsVisible(false)}
      />
      <ul className="cursor-pointer flex flex-col items-center 2xl:hidden">
        <li className="leading-3 h-6">
          <a
            className="text-xs no-underline text-purple-600 hover:duration-1000 hover:text-sky-300"
            href="#início"
          >
            Inicio
          </a>
        </li>
        <li className="leading-3 h-6">
          <a
            className="text-xs no-underline text-purple-600 hover:duration-1000 hover:text-sky-300"
            href="#sobre"
          >
            Sobre Mim
          </a>
        </li>
        <li className="leading-3 h-6">
          <a
            className="text-xs no-underline text-purple-600 hover:duration-1000 hover:text-sky-300"
            href="#projetos"
          >
            Projetos
          </a>
        </li>
        <li className="leading-3 h-6">
          <a
            className="text-xs no-underline text-purple-600 hover:duration-1000 hover:text-sky-300"
            href="#habilidades"
          >
            Habilidades
          </a>
        </li>
      </ul>
    </Container>
  )
}

export default MenuMobile
