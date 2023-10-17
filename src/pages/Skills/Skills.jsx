/* eslint-disable react/no-unknown-property */
import Bootstrap from '../../assets/bootstrap_.svg'
import CSS from '../../assets/css.png'
import Express from '../../assets/express-original.svg'
import Git from '../../assets/git.png'
import HTML from '../../assets/html.png'
import JS from '../../assets/js.png'
import Json from '../../assets/json.png'
import LogoFigma from '../../assets/LogoFigma.png'
import Node from '../../assets/node.png'
import React from '../../assets/react.png'
import Responsividade from '../../assets/responsividade.png'
import Sass from '../../assets/sass_icon.svg'
import Styled from '../../assets/styled 1.svg'
import Tailwind from '../../assets/tailwind.png'
import TS from '../../assets/ts.png'
import Vscode from '../../assets/vscode.png'
import Yarn from '../../assets/yarn.png'
import { DivTS } from './style'

const infoSkills = [
  {
    icon: (
      <img
        className="w-5 h-5  rounded-small bg-slate-500 3xl:w-56 3xl:h-56"
        src={React}
      />
    ),
    skillsName: 'React'
  },
  {
    icon: (
      <img
        className="w-5 h-5 rounded-small bg-slate-500 3xl:w-56 3xl:h-56"
        src={Node}
      />
    ),
    skillsName: 'Node'
  },
  {
    icon: (
      <img
        className="w-5 h-5 rounded-small bg-slate-500 3xl:w-56 3xl:h-56"
        src={Styled}
      />
    ),
    skillsName: 'Styled'
  },
  {
    icon: (
      <img
        className="w-5 h-5 rounded-small bg-slate-500 3xl:w-56 3xl:h-56"
        src={JS}
      />
    ),
    skillsName: 'JS'
  },
  {
    icon: (
      <img
        className="w-5 h-5 rounded-small bg-slate-500 3xl:w-56 3xl:h-56"
        src={CSS}
      />
    ),
    skillsName: 'CSS'
  },
  {
    icon: (
      <img
        className="w-5 h-5 rounded-small bg-slate-500 3xl:w-56 3xl:h-56"
        src={HTML}
      />
    ),
    skillsName: 'HTML'
  },
  {
    icon: (
      <img
        className="w-5 h-5 rounded-small bg-slate-500 3xl:w-56 3xl:h-56"
        src={Json}
      />
    ),
    skillsName: 'Json'
  },
  {
    icon: (
      <img
        className="w-5 h-5 rounded-small bg-slate-500 3xl:w-56 3xl:h-56"
        src={Git}
      />
    ),
    skillsName: 'Git'
  },
  {
    icon: (
      <img
        className="w-5 h-5 rounded-small bg-slate-500 3xl:w-56 3xl:h-56"
        src={Express}
      />
    ),
    skillsName: 'Express'
  },
  {
    icon: (
      <img
        className="w-5 h-5 rounded-small bg-slate-500 3xl:w-56 3xl:h-56"
        src={Bootstrap}
      />
    ),
    skillsName: 'Bootstrap'
  },
  {
    icon: (
      <img
        className="w-5 h-5 rounded-small bg-slate-500 3xl:w-56 3xl:h-56"
        src={Sass}
      />
    ),
    skillsName: 'Sass'
  },
  {
    icon: (
      <img
        className="w-5 h-5 rounded-small bg-slate-500 3xl:w-56 3xl:h-56"
        src={Responsividade}
      />
    ),
    skillsName: 'Responsividade'
  },
  {
    icon: (
      <img
        className="w-5 h-5 rounded-small bg-slate-500 3xl:w-56 3xl:h-56"
        src={Tailwind}
      />
    ),
    skillsName: 'TW'
  },
  {
    icon: (
      <img
        className="w-5 h-5 rounded-small bg-slate-500 3xl:w-56 3xl:h-56"
        src={LogoFigma}
      />
    ),
    skillsName: 'LogoFigma'
  },
  {
    icon: (
      <img
        className="w-5 h-5 rounded-small bg-slate-500 3xl:w-56 3xl:h-56"
        src={Yarn}
      />
    ),
    skillsName: 'Yarn'
  },
  {
    icon: (
      <img
        className="w-5 h-5 rounded-small bg-slate-500 3xl:w-56 3xl:h-56"
        src={Vscode}
      />
    ),
    skillsName: 'Vscode'
  }
]

function Habilidades() {
  return (
    <section className="min-h-screen 3xl:grid 3xl:items-center">
      <div className="flex flex-col items-center justify-center gap-0 3xl:gap-100">
        <h2 className="text-rose-900 text-3xl 3xl:text-9xl">Habilidades</h2>
        <ul className="flex justify-center gap-1 w-4/5 3xl:w-3/5 3xl:gap-100 flex-wrap">
          {infoSkills.map((info) => (
            <li
              className="flex flex-col items-center w-20 3xl:w-56"
              key={info.skillsName}
            >
              <span className="text-black text-sm hover:text-white hover:flex hover:justify-center 3xl:text-5xl">
                {info.skillsName}
              </span>
              {info.icon}
            </li>
          ))}
        </ul>
        <DivTS className="relative flex flex-col items-center mt-4">
          <span className="text-sm 3xl:text-0 leading-nd">TS:Em breve</span>
          <img className="w-5 3xl:w-56 rounded-small bg-slate-500" src={TS} />
          <div className="w-0 3xl:w-56" />
        </DivTS>
      </div>
    </section>
  )
}
export default Habilidades
