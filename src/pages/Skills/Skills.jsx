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
import { LiTS } from './style'

const infoSkills = [
  {
    icon: <img className="rounded-small bg-slate-500 w-14 h-14" src={React} />,
    skillsName: 'React'
  },
  {
    icon: <img className="rounded-small bg-slate-500 w-14 h-14" src={Node} />,
    skillsName: 'Node'
  },
  {
    icon: <img className="rounded-small bg-slate-500 w-14 h-14" src={Styled} />,
    skillsName: 'Styled'
  },
  {
    icon: <img className="rounded-small bg-slate-500 w-14 h-14" src={JS} />,
    skillsName: 'JS'
  },
  {
    icon: <img className="rounded-small bg-slate-500 w-14 h-14" src={CSS} />,
    skillsName: 'CSS'
  },
  {
    icon: <img className="rounded-small bg-slate-500 w-14 h-14" src={HTML} />,
    skillsName: 'HTML'
  },
  {
    icon: <img className="rounded-small bg-slate-500 w-14 h-14" src={Json} />,
    skillsName: 'Json'
  },
  {
    icon: <img className="rounded-small bg-slate-500 w-14 h-14" src={Git} />,
    skillsName: 'Git'
  },
  {
    icon: (
      <img className="rounded-small bg-slate-500 w-14 h-14" src={Express} />
    ),
    skillsName: 'Express'
  },
  {
    icon: (
      <img className="rounded-small bg-slate-500 w-14 h-14" src={Bootstrap} />
    ),
    skillsName: 'Bootstrap'
  },
  {
    icon: <img className="rounded-small bg-slate-500 w-14 h-14" src={Sass} />,
    skillsName: 'Sass'
  },
  {
    icon: (
      <img className="rounded-small bg-slate-500 w-14 h-14" src={Tailwind} />
    ),
    skillsName: 'TW'
  },
  {
    icon: (
      <img className="rounded-small bg-slate-500 w-14 h-14" src={LogoFigma} />
    ),
    skillsName: 'LogoFigma'
  },
  {
    icon: <img className="rounded-small bg-slate-500 w-14 h-14" src={Vscode} />,
    skillsName: 'Vscode'
  },
  {
    icon: <img className="rounded-small bg-slate-500 w-14 h-14" src={Yarn} />,
    skillsName: 'Yarn'
  },
  {
    icon: (
      <img
        className="rounded-small bg-slate-500 w-14 h-14"
        src={Responsividade}
      />
    ),
    skillsName: 'Responsividade'
  }
]

function Habilidades() {
  return (
    <section className="grid items-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-rose-900 text-5xl">Habilidades</h2>
        <ul className="flex justify-center w-2/5 gap-5 flex-wrap">
          {infoSkills.map((info) => (
            <li
              className="flex flex-col items-center w-14"
              key={info.skillsName}
            >
              <span className="text-black hover:text-white hover:flex hover:justify-center text-lg">
                {info.skillsName}
              </span>
              {info.icon}
            </li>
          ))}
          <div className="flex flex-col items-center">
            <span className="text-lg text-black hover:text-white">TS</span>
            <LiTS className="relative">
              <img className="w-14 h-14 rounded-small bg-slate-500" src={TS} />
              <div className="w-14" />
            </LiTS>
          </div>
        </ul>
      </div>
    </section>
  )
}
export default Habilidades
