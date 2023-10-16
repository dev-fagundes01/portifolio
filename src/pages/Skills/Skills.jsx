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
import { Section } from './style'

const infoSkills = [
  {
    icon: <img className="w-56 h-56 rounded-small bg-slate-500" src={React} />,
    skillsName: 'React'
  },
  {
    icon: <img className="w-56 h-56 rounded-small bg-slate-500" src={Node} />,
    skillsName: 'Node'
  },
  {
    icon: <img className="w-56 h-56 rounded-small bg-slate-500" src={Styled} />,
    skillsName: 'Styled'
  },
  {
    icon: <img className="w-56 h-56 rounded-small bg-slate-500" src={JS} />,
    skillsName: 'JS'
  },
  {
    icon: <img className="w-56 h-56 rounded-small bg-slate-500" src={CSS} />,
    skillsName: 'CSS'
  },
  {
    icon: <img className="w-56 h-56 rounded-small bg-slate-500" src={HTML} />,
    skillsName: 'HTML'
  },
  {
    icon: <img className="w-56 h-56 rounded-small bg-slate-500" src={Json} />,
    skillsName: 'Json'
  },
  {
    icon: <img className="w-56 h-56 rounded-small bg-slate-500" src={Git} />,
    skillsName: 'Git'
  },
  {
    icon: (
      <img className="w-56 h-56 rounded-small bg-slate-500" src={Express} />
    ),
    skillsName: 'Express'
  },
  {
    icon: (
      <img className="w-56 h-56 rounded-small bg-slate-500" src={Bootstrap} />
    ),
    skillsName: 'Bootstrap'
  },
  {
    icon: <img className="w-56 h-56 rounded-small bg-slate-500" src={Sass} />,
    skillsName: 'Sass'
  },
  {
    icon: (
      <img
        className="w-56 h-56 rounded-small bg-slate-500"
        src={Responsividade}
      />
    ),
    skillsName: 'Responsividade'
  },
  {
    icon: (
      <img className="w-56 h-56 rounded-small bg-slate-500" src={Tailwind} />
    ),
    skillsName: 'TW'
  },
  {
    icon: (
      <img className="w-56 h-56 rounded-small bg-slate-500" src={LogoFigma} />
    ),
    skillsName: 'LogoFigma'
  },
  {
    icon: <img className="w-56 h-56 rounded-small bg-slate-500" src={Yarn} />,
    skillsName: 'Yarn'
  },
  {
    icon: <img className="w-56 h-56 rounded-small bg-slate-500" src={Vscode} />,
    skillsName: 'Vscode'
  }
]

function Habilidades() {
  return (
    <Section className="grid items-center place-itens-center min-h-screen">
      <div className="flex flex-col items-center justify-center mb-30 gap-100">
        <h2 className="text-rose-900 text-9xl">Habilidades</h2>
        <ul className="flex justify-center gap-100 w-2/5 flex-wrap">
          {infoSkills.map((info) => (
            <li className="w-56" key={info.skillsName}>
              <span className="text-black text-5xl hover:text-white hover:flex hover:justify-center">
                {info.skillsName}
              </span>
              {info.icon}
            </li>
          ))}
        </ul>
        <div className="relative">
          <span></span>
          <img className="w-56 rounded-small bg-slate-500" src={TS} />
          <div className="overlay" />
        </div>
      </div>
    </Section>
  )
}
export default Habilidades
