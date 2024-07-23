/* eslint-disable prettier/prettier */
import { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";

import MenuMobile from "../MenuMobile/MenuMobile";
import { Nav } from "./style";

function Header({ theme, themeToggler }) {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <header className="h-32 flex w-full justify-between p-2 md:p-3">
      <div className="flex items-start pt-1 md:pt-0">
        <h2 className="text-purple-400 text-base md:text-2xl">Portfólio</h2>
        <button onClick={themeToggler}>
          {theme === "light" ? (
            <BiMoon className="h-3 md:h-5" />
          ) : (
            <BiSun className="h-3 md:h-5" />
          )}
        </button>
      </div>
      <Nav isVisible={menuIsVisible}>
        <div className="flex flex-col items-end mr-4 md:hidden">
          <HiMenuAlt4
            className="menu text-2xl"
            onClick={() => setMenuIsVisible(true)}
          />
          <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />
        </div>

        <ul className="hidden md:flex gap-4">
          <li className="leading-normal h-3">
            <Link
              className="no-underline cursor-pointer text-purple-400 hover:duration-1000 hover:text-rose-900 text-2xl"
              to="/"
            >
              Início
            </Link>
          </li>
          <li className="leading-normal h-3">
            <Link
              className="no-underline cursor-pointer text-purple-400 hover:duration-1000 hover:text-rose-900 text-2xl"
              to="/sobre"
            >
              Sobre Mim
            </Link>
          </li>
          <li className="leading-normal h-3">
            <Link
              className="no-underline cursor-pointer text-purple-400 hover:duration-1000 hover:text-rose-900 text-2xl"
              to="/projetos"
            >
              Projetos
            </Link>
          </li>
          <li className="leading-normal h-3">
            <Link
              className="no-underline cursor-pointer text-purple-400 hover:duration-1000 hover:text-rose-900 text-2xl"
              to="/habilidades"
            >
              Habilidades
            </Link>
          </li>
        </ul>
      </Nav>
    </header>
  );
}
export default Header;
